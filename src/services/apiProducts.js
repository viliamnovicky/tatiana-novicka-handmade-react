import supabase from "./supabase";

export async function getProducts() {
    const { data, error } = await supabase
    .from('products')
    .select('*')

  if (error) {
    console.error(error);
    throw new Error("Not found");
  }

  return data;
}