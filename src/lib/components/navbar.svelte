<script lang="ts">
    import type { Category } from '$lib/types/product'; 

    let { categories }: { categories: Category[] } = $props();

    let showCategory = $state(false);
</script>

<nav class="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
  <div class="container mx-auto px-16 h-18 flex items-center justify-center gap-4 md:gap-8">
    
    <a href="/" class="flex items-center gap-1">
      <span class="text-2xl font-bold text-green-600 tracking-tight">
        MyCatalog
      </span>
    </a>

    <div class="relative hidden md:block">
        
        <button 
            onclick={() => showCategory = !showCategory}
            class="flex items-center gap-1 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded transition text-l text-gray-600 font-medium"
        >
            Categories
        </button>

        {#if showCategory}

            <div class="absolute top-full left-0 mt-2 w-[600px] bg-white border border-gray-200 shadow-xl rounded-lg z-20 p-4">
                
                <div class="grid grid-cols-3 gap-2">
                    {#each categories as cat}
                        <a 
                            href="/category/{cat.slug}" 
                            onclick={() => showCategory = false}
                            class="text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 px-2 py-1.5 rounded transition truncate capitalize"
                        >
                            {cat.name} </a>
                    {/each}
                </div>
            </div>
        {/if}
    </div>

    <form action="/search" class="flex-1 w-full max-w-4xl">
      <div class="relative group">
        
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg class="w-5 h-5 text-gray-400 group-focus-within:text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>

        <input 
          type="search" 
          name="q" 
          placeholder="Cari di Tokopedia" 
          class="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg 
                 text-gray-900 placeholder-gray-400 bg-gray-50 
                 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 
                 focus:bg-white transition-colors sm:text-sm"
        />
      </div>
    </form>

  </div>
</nav>