export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(value);

export function removeDiacritics(word) {
  if (typeof word !== "string") return word;

  // Normalize the string to decompose diacritic marks and remove them
  return word
    .normalize("NFD") // Decompose diacritic characters
    .replace(/[\u0300-\u036f]/g, ""); // Remove combining diacritic marks
}
