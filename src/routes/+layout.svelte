<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	// let { children } = $props();
	import "../app.css";
	import Navbar from '$lib/components/navbar.svelte';
	import type {LayoutData} from './$types';
	import type{Snippet} from 'svelte'

	let { data, children }: { data: LayoutData, children: Snippet } = $props();

</script>

<Navbar categories={data.categories}/>
<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
