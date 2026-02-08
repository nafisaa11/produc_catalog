import type { ProductResponse } from "$lib/types/product";
import type { PageLoad } from "./$types";

export const load = (async ({ fetch, url }) => {
  const page = Number(url.searchParams.get("page")) || 1;
  const limit = 24;
  const skip = (page - 1) * limit;
  const response = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
  );
  const data: ProductResponse = await response.json();

  return {
    products: data.products,
    total: data.total,
    limit,
    skip,
    currentPage: page,
  };
}) satisfies PageLoad;
