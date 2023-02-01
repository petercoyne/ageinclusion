<script>
	import "@fontsource/enriqueta/700.css";
	import "@fontsource/montserrat/400.css";
	import '../app.css';
	import Header from '$lib/Header.svelte';
	import MobileMenu from "$lib/MobileMenu.svelte";
	import Debug from "$lib/Debug.svelte";
</script>

<MobileMenu />
<Header />

<slot />

<Debug />