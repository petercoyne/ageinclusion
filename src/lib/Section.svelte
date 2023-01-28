<script lang="ts">
	export let background: string;
	export let border: string;

	const bgmap = new Map();
	bgmap.set("1", "bg-[url('/img/green.webp')]");
	bgmap.set("2", "transparent");
	bgmap.set("3", "");
	let bgstring = bgmap.get(background);

	const bordermap = new Map();
	bordermap.set("1", "border-t-8");
	bordermap.set("2", "border-t");
	bordermap.set("3", "");
	let borderstring = bordermap.get(border);

</script>

<section class="relative">

	<!-- <div class="{twstring} "/> -->
	<div class="{bgstring} {borderstring} bg-cover shadow-2xl shadow-gray-200 absolute -z-10 w-full h-full -skew-y-3 border-waix-green-dark"/>
	<div class="py-8 px-6 sm:p-10 md:p-12 lg:p-16 max-w-screen-xl mx-auto">
		<slot />
	</div>

</section>