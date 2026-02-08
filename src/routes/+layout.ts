import type { Category } from "$lib/types/product";
import type { LayoutLoad } from "./$types";

export const load = (async ({ fetch }) => {
  const response = await fetch("https://dummyjson.com/products/categories");

  const categories: Category[] = await response.json();

  return {
    categories,
  };
}) satisfies LayoutLoad;
