// Compare function to use with JS sort()
// Take key - the attribute to sort with in an array of object
// and order which is either "asc" or "desc"
// Ex: array1.sort(compareValues("name", "desc"))
export default function compareValues(
  key: string,
  order: "asc" | "desc" = "asc"
) {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }

    const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];
    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === "desc" ? comparison * -1 : comparison;
  };
}
