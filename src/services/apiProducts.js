import supabase, { supabaseUrl } from "./supabase";

export async function getProducts() {
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    console.error(error);
    throw new Error("Not found");
  }

  return data;
}

export async function deleteProduct(id) {
  const { error } = await supabase.from("products").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Not found");
  }
}

export async function createProduct(newProduct) {
  const imageName = `${Math.random()}-${newProduct.coverImage.name}`.replaceAll("/", "");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/products/${imageName}`;
  // Create Product
  const { data, error } = await supabase
    .from("products")
    .insert([{ ...newProduct, coverImage: imagePath }])
    .select();
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
