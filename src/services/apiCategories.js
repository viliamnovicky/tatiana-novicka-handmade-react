import supabase, { supabaseUrl } from "./supabase";

export async function getCategories() {
  const { data, error } = await supabase.from("categories").select("*");

  if (error) {
    
    throw new Error("Nepodarilo sa načítať kategórie");
  }

  return data;
}

export async function createCategory(newCategory) {
  const imageName = `${Math.random()}-${newCategory.coverImage.name}`.replaceAll("/", "");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/categories/${imageName}`;

  //Create Category
  const { data, error } = await supabase
    .from("categories")
    .insert({ ...newCategory, coverImage: imagePath })
    .select();
  if (error) {
    throw new Error("Kategóriu sa nepodarilo vytvoriť");
  }

  // Upload Image
  const { error: storageError } = await supabase.storage
    .from("products")
    .upload(imageName, newCategory.coverImage);

  // Delete Product if error by uploading image
  if (storageError) {
    await supabase.from("categories").delete().eq("id", data.id);
    throw new Error("Nepodarilo sa nahrať fotografiu. Kategória sa neuložila");
  }
}

export async function deleteCategory(id) {
  const { error } = await supabase.from("categories").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Niečo sa nepodarilo");
  }
}
