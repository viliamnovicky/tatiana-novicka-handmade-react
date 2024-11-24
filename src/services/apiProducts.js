import supabase, { supabaseUrl } from "./supabase";

export async function getProducts() {
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    throw new Error("Nepodarilo sa načítať produkty");
  }

  return data;
}

export async function getProductsByCategory(category) {
  const { data, error } = await supabase.from("products").select("*").eq("category", category);

  if (error) {
    throw new Error("Nepodarilo sa načítať produkty");
  }

  return data;
}

export async function deleteProduct(id) {
  const { error } = await supabase.from("products").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Niečo sa nepodarilo");
  }
}

export async function createEditProduct(newProduct, id) {
  const hasImagePath = newProduct.coverImage?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newProduct.coverImage.name}`.replaceAll("/", "");
  const imagePath = hasImagePath
    ? newProduct.coverImage
    : `${supabaseUrl}/storage/v1/object/public/products/${imageName}`;

  // Create or Edit Product
  let query = supabase.from("products");

  //Create
  if (!id) {
    query = query.insert([{ ...newProduct, coverImage: imagePath }]);
  }

  //Edit
  if (id) {
    query = query.update({ ...newProduct, coverImage: imagePath }).eq("id", id);
  }
  const { data, error } = await query.select().single();

  if (error) {
    throw new Error("Produkt sa nepodarilo vytvoriť");
  }

  // Upload Image
  const { error: storageError } = await supabase.storage
    .from("products")
    .upload(imageName, newProduct.coverImage);

  // Delete Product if error by uploading image
  if (storageError) {
    await supabase.from("products").delete().eq("id", data.id);
    throw new Error("Nepodarilo sa nahrať fotografiu. Produkt sa neuložil");
  }
}
