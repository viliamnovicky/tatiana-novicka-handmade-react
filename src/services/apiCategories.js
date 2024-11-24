import { removeDiacritics } from "../utils/helpers";
import supabase, { supabaseUrl } from "./supabase";

export async function getCategories() {
  const { data, error } = await supabase.from("categories").select("*");

  if (error) {
    
    throw new Error("Nepodarilo sa načítať kategórie");
  }

  return data;
}

export async function createEditCategory(newCategory, id) {
  const hasImagePath = newCategory.coverImage?.startsWith?.(supabaseUrl);
  const imageName = `${removeDiacritics(newCategory.name)}.jpg`.replaceAll("/", "-");
  const imagePath = hasImagePath
    ? newCategory.coverImage
    : `${supabaseUrl}/storage/v1/object/public/categories/${imageName}`;

  // Create or Edit category
  let query = supabase.from("categories");

  //Create
  if (!id) {
    query = query.insert([{ ...newCategory, coverImage: imagePath }]);
  }

  //Edit
  if (id) {
    query = query.update({ ...newCategory, coverImage: imagePath }).eq("id", id);
  }
  const { data, error } = await query.select().single();

  if (error) {
    throw new Error("Produkt sa nepodarilo vytvoriť");
  }

  // Upload Image
  const { error: storageError } = await supabase.storage
    .from("categories")
    .upload(imageName, newCategory.coverImage);

  // Delete category if error by uploading image
  if (storageError) {
    await supabase.from("categories").delete().eq("id", data.id);
    throw new Error("Nepodarilo sa nahrať fotografiu. Produkt sa neuložil");
  }
}

export async function deleteCategory(id) {
  const { error } = await supabase.from("categories").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Niečo sa nepodarilo");
  }
}
