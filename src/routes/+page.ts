import type { ProductResponse } from "$lib/types/product";
import type { PageLoad } from "./$types";

export const load = (async ({ fetch }) => {
  const response = await fetch("https://dummyjson.com/products");
  const data: ProductResponse = await response.json();

  return {
    products: data.products,
  };
}) satisfies PageLoad;
