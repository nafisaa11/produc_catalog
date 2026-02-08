<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  $: product = data.product;

  let selectedImage = "";

  $: if (product && product.images && product.images.length > 0) {
    selectedImage = product.images[0];
  }

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
</script>

<div class="max-w-7xl mx-auto px-4 py-6 md:py-10 text-gray-800">
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
    <div class="lg:col-span-4">
      <div class="border rounded-lg overflow-hidden mb-4 bg-white relative">
        <img
          src={selectedImage}
          alt={product.title}
          class="w-full h-auto object-contain aspect-square bg-gray-50"
        />
        {#if product.discountPercentage}
          <div
            class="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full"
          >
            -{product.discountPercentage}%
          </div>
        {/if}
      </div>
      <div class="flex gap-2 overflow-x-auto pb-2">
        {#each product.images as img}
          <button
            on:click={() => (selectedImage = img)}
            class="border-2 rounded-md overflow-hidden w-16 h-16 flex-shrink-0
                            {selectedImage === img
              ? 'border-green-600'
              : 'border-gray-200 hover:border-gray-400'}"
          >
            <img src={img} alt="thumb" class="w-full h-full object-cover" />
          </button>
        {/each}
      </div>
    </div>

    <div class="lg:col-span-4">
      <div class="flex items-center gap-2 mb-2 text-sm text-gray-500">
        <span class="font-bold text-green-600"
          >{product.brand || "No Brand"}</span
        >
        <span>•</span>
        <span class="capitalize">{product.category}</span>
      </div>

      <h1 class="text-xl md:text-2xl font-bold text-gray-900 mb-2 leading-snug">
        {product.title}
      </h1>

      {#if product.tags && product.tags.length > 0}
        <div class="flex gap-2 mb-4">
          {#each product.tags as tag}
            <span
              class="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md capitalize"
              >#{tag}</span
            >
          {/each}
        </div>
      {/if}

      <div class="flex items-end gap-3 mb-6">
        <span class="text-3xl md:text-4xl font-bold text-gray-900">
          ${product.price}
        </span>
        <div class="flex items-center gap-1 mb-1 ml-auto">
          <span class="text-yellow-500 text-lg">★</span>
          <span class="font-bold text-gray-700">{product.rating}</span>
          <span class="text-gray-400 text-sm">/ 5.0</span>
        </div>
      </div>

      <hr class="border-gray-200 mb-6" />

      <div class="mb-6">
        <div class="flex border-b border-gray-200">
          <h3 class="font-bold text-lg mb-4">Description</h3>
        </div>
      </div>

      <div class="space-y-6">
        <p class="text-gray-700 leading-relaxed">{product.description}</p>

        <div class="bg-gray-50 rounded-lg p-4 text-sm">
          <h3 class="font-bold text-gray-900 mb-3">Product Details</h3>
          <div class="grid grid-cols-[140px_1fr] gap-y-3">
            <span class="text-gray-500">Status</span>
            <span class="font-medium text-green-600"
              >{product.availabilityStatus}</span
            >

            <span class="text-gray-500">stock</span>
            <span>{product.stock} </span>

            <span class="text-gray-500">Min. Order</span>
            <span>{product.minimumOrderQuantity} </span>

            <span class="text-gray-500">SKU</span>
            <span>{product.sku}</span>

            <span class="text-gray-500">Weight</span>
            <span>{product.weight}</span>

            <span class="text-gray-500">Dimensions</span>
            <span
              >{product.dimensions.width} x {product.dimensions.height} x {product
                .dimensions.depth} cm</span
            >

            <span class="text-gray-500">Warranty</span>
            <span>{product.warrantyInformation}</span>

            <span class="text-gray-500">Shipping Info</span>
            <span>{product.shippingInformation}</span>

            <span class="text-gray-500">Retur Policy</span>
            <span>{product.returnPolicy}</span>
          </div>
        </div>

        <div
          class="border-t border-gray-200 pt-4 text-xs text-gray-500 flex justify-between items-end"
        >
          <div>
            <p>Barcode: {product.meta.barcode}</p>
            <p>Created: {formatDate(product.meta.createdAt)}</p>
            <p>Updated: {formatDate(product.meta.updatedAt)}</p>
          </div>
          <img src={product.meta.qrCode} alt="QR Code" class="w-16 h-16" />
        </div>
      </div>
    </div>

    <div class="hidden lg:block lg:col-span-4">
      <div
        class="sticky top-24 border border-gray-200 rounded-xl p-4 shadow-sm bg-white"
      >
        <h3 class="font-bold text-lg mb-4">
          Review ({product.reviews.length})
        </h3>

        <div class="space-y-4 animate-fadeIn">
          {#each product.reviews as review}
            <div
              class="border border-gray-100 rounded-lg p-4 shadow-sm bg-white"
            >
              <div class="flex justify-between items-start mb-2">
                <div>
                  <p class="font-bold text-sm text-gray-900">
                    {review.reviewerName}
                  </p>
                  <p class="text-xs text-gray-400">{review.reviewerEmail}</p>
                </div>
                <span class="text-xs text-gray-400"
                  >{formatDate(review.date)}</span
                >
              </div>
              <div class="flex items-center text-yellow-500 text-sm mb-2">
                {#each Array(review.rating) as _}<span>★</span>{/each}
                <span class="text-gray-300 ml-1">({review.rating})</span>
              </div>
              <p class="text-gray-700 text-sm">"{review.comment}"</p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
