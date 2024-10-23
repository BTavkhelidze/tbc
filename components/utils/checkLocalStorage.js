export function checkLocalStorage() {
  const blogs = localStorage.getItem("blogs");
  return blogs ? true : false;
}
