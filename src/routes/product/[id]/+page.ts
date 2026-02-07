import type { Product } from "$lib/types/product";
import type { PageLoad } from "./$types";

export const load = (async ({ fetch, params }) => {
  const response = await fetch(`https://dummyjson.com/products/${params.id}`);
  const data: Product = await response.json();

  return {
    product: data,
  };
}) satisfies PageLoad;
