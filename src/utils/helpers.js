export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(value);

export function removeDiacritics(word) {
  if (typeof word !== "string") return word;

  // Normalize the string to decompose diacritic marks and remove them
  return word
    .normalize("NFD") // Decompose diacritic characters
    .replace(/[\u0300-\u036f]/g, ""); // Remove combining diacritic marks
}

export function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function createSlug(string) {
  return string
    .toLowerCase() // Convert to lowercase
    .normalize("NFD") // Decompose diacritics into separate characters
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritic marks
    .replace(/[^a-z0-9\s-]/g, "") // Remove non-alphanumeric characters (except spaces and hyphens)
    .trim() // Remove leading/trailing spaces
    .replace(/\s+/g, "-"); // Replace spaces with hyphens
}