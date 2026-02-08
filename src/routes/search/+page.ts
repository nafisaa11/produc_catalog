import type { ProductResponse } from "$lib/types/product";
import type { PageLoad } from "./$types";

export const load = (async ({ fetch, url }) => {
  const searchQuery = url.searchParams.get("q") || "";
  const page = Number(url.searchParams.get("page")) || 1;
  const limit = 12;
  const skip = (page - 1) * limit;


  const response = await fetch(
    `https://dummyjson.com/products/search?q=${searchQuery}&limit=${limit}&skip=${skip}`,
  );
  const data: ProductResponse = await response.json();

  return {
    products: data.products,
    total: data.total,
    limit,
    skip,
    currentPage: page,
    searchQuery
  };
}) satisfies PageLoad;

