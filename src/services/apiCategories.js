import supabase from "./supabase";

export async function getCategories() {
  const { data, error } = await supabase
  .from('categories')
  .select('*')

  if (error) {
    console.error(error);
    throw new Error("Not found");
  }

  return data;
}
