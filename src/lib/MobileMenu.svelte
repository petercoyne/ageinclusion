<script lang="ts">
	import { fade, slide, blur } from "svelte/transition";
	import LogoSmall from "$lib/LogoSmall.svelte";
	let menushow = false;
	function toggleMobileMenu() {
		menushow = !menushow;
	}
	let menuButtonBG: string, menuButtonBGHover: string;
	$: if (menushow) {
		menuButtonBG = "bg-red-500";
		menuButtonBGHover = "hover:bg-red-600";
	} else {
		menuButtonBG = "bg-wai-500";
		menuButtonBGHover = "hover:bg-wai-600";
	}
</script>

<div class="fixed top-6 right-6 z-20
			md:hidden sm:top-10 sm:right-10">
	<div class="flex justify-end">
		<div class="{menuButtonBG} transition-colors duration-300 w-12 h-12 p-3 bg-opacity-80 backdrop-blur rounded-full text-center justify-center cursor-pointer shadow-xl
					{menuButtonBGHover}
						sm:w-14 sm:h-14 sm:p-4" on:click={toggleMobileMenu} on:keypress={toggleMobileMenu}>

			{#if !menushow}
				<img transition:slide src="img/menu.svg" alt="" srcset="" width="24" height="24" />
			{:else}
				<img transition:slide src="img/x.svg" alt="" srcset="" width="24" height="24" />
			{/if}
		</div>
	</div>
</div>

{#if menushow}
	<div id="mobilemenu" class="z-10 md:hidden top-6 left-6 right-24 p-4 rounded-xl fixed bg-white bg-opacity-70 backdrop-blur-lg border border-gray-300
					sm:top-10 sm:right-32 sm:left-10 sm:rounded-lg" transition:blur on:click={toggleMobileMenu} on:keypress={toggleMobileMenu}>

					<LogoSmall />
			<a class="" href="/services/">Services</a>
			<a class="" href="/about/">About Us</a>
			<a class="" href="/contact/">Contact</a>
			<a class="" href="/donate/" id="donate">Donate</a>

	</div>
{/if}

<style lang="postcss">
	#mobilemenu a {
		@apply text-white rounded-full block text-center text-xl font-bold mt-4 flex-row justify-end p-2 bg-waix-blue-dark transition-colors duration-300 border border-gray-300;
	}
	#mobilemenu a:hover {
		@apply bg-wai-600 text-white;
	}
</style>