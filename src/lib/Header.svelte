<script>
	import Logo from "$lib/Logo.svelte";
</script>
<div class="relative">
	<div class="bg-gray-50 h-full w-full -z-20 -skew-y-3 absolute"></div>
	<div class="bg-gray-50 h-1/2 w-full -z-20 absolute"></div>

	<header class="max-w-screen-xl mx-auto p-6 sm:p-10 md:p-12 lg:p-16 flex justify-between">
		<Logo />
		<nav id="menubar" class="hidden md:flex items-start">
			<a class="sm:p-3 md:p-4" href="/services/">Services</a>
			<a class="sm:p-3 md:p-4" href="/about/">About <span class="hidden lg:inline">Us</span></a>
			<a class="sm:p-3 md:p-4" href="/contact/">Contact</a>
			<a class="sm:p-3 md:p-4" href="/donate/" id="donate">Donate</a>
		</nav>
	</header>

</div>



<style lang="postcss">
	#menubar a {
		@apply text-black flex-row justify-end py-2 border shadow-lg bg-white rounded-full mx-2 transition-colors duration-300;
	}
	#menubar a:hover {
		@apply bg-wai-600 text-white;
	}
</style>