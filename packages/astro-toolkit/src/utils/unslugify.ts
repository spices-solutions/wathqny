export default function unslugify(str: string) {
  return str
    .replace(/-/g, ' ') // Replace hyphens with spaces
    .replace(/_/g, ' ') // Replace underscores with spaces (if needed)
    .replace(/\b\w/g, (char) => char.toUpperCase()) // Capitalize the first letter of each word
}
