<script lang="ts">
	export let background: string;
	export let border: string;

	const bgmap = new Map();
	bgmap.set("green", "bg-[url('/img/green.webp')]");
	bgmap.set("white", "bg-white");
	bgmap.set("transparent", "bg-transparent");
	bgmap.set("blue", "bg-waix-blue-light");
	bgmap.set("darkblue", "bg-[url('/img/bokeh-blue.webp')]");
	let bgstring = bgmap.get(background);

	const bordermap = new Map();
	bordermap.set("8", "border-t-8");
	bordermap.set("1", "border-t");
	bordermap.set("0", "");
	let borderstring = bordermap.get(border);

</script>

<section class="relative">

	<!-- <div class="{twstring} "/> -->
	<div class="{bgstring} {borderstring} bg-cover shadow-gray-200 absolute -z-10 w-full h-full -skew-y-3 border-waix-green-dark"/>
	<div class="pt-8 pb-16 px-6 max-w-screen-xl mx-auto
				sm:p-10 sm:pb-16
				md:p-12 md:pb-18
				lg:p-16 lg:pb-22">
		<slot />
	</div>

</section>