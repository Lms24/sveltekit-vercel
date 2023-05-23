export const load = async ({ fetch }) => {
  const res = await fetch("/api-error");
  return await res.json();
};
