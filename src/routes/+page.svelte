<script>
	import Section from '$lib/Section.svelte';
	let dt = new Date();
	let year = dt.getFullYear();
</script>

<Section background="green" border="8">
	<div class="flex items-center flex-col md:flex-row md:gap-4 lg:gap-8">
		<div class="w-full md:w-1/2 p-6 md:px-62 lg:p-0 lg:pl-12 xl:pl-0">
			<h2 class="text-4xl py-4 glow -z-10">Welcome</h2>
			<p class="prose glow py-2 md:text-md leading-relaxed">
				<b>Westside Age Inclusion Ltd.</b> was established in Feb 2002 to deliver services to the socially
				disadvantaged elderly people (over 55's) who live in the Westside area of Galway City.
			</p>
			<a
				href="/about/"
				class="inline-block px-6 py-3 lg:px-6 md:py-3 mt-6 border border-white text-white bg-gradient-to-b from-waix-green to-waix-green-dark rounded-full md:text-md"
				>Read More
				<svg
					fill="none"
					class="w-6 h-6 inline"
					stroke="currentColor"
					stroke-width="1.5"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
				</svg>
			</a>
		</div>
		<div class="w-full md:w-1/2 p-0 mt-8 md:mt-0 md:p-6 md:pr-6 lg:pr-12 xl:pr-0">
			<img src="img/video.webp" alt="" srcset="" class="rounded-xl w-full" />
		</div>
	</div>
</Section>

<Section background="white" border="1">
	<div class="px-6 py-4 lg:px-0">
		<h3 class="text-4xl py-4 mb-2">Our Services</h3>
		<p class="leading-relaxed">
			Westside Age Inclusion Ltd covers all local authority estates in the Westside area. We have
			six services that we provide to socially disadvantaged people over 55 and these are delivered
			from Monday to Friday.
		</p>
	</div>

	<div id="servicesbox">
		<a href="/services/#laundry" class="service">
			<img src="img/icon-laundry.svg" alt="Washing Machine" />
			<h6>Laundry</h6>
		</a>
		<a href="/services/#housemaintenance" class="service">
			<img src="img/icon-housemaintenance.svg" alt="House" />
			<h6>House Maintenance</h6>
		</a>
		<a href="/services/#office" class="service">
			<img src="img/icon-office.svg" alt="Office" />
			<h6>Office</h6>
		</a>
		<a href="/services/#socialclub" class="service">
			<img src="img/icon-socialclub.svg" alt="People" />
			<h6>Social Club</h6>
		</a>
		<a href="/services/#alertscheme" class="service">
			<img src="img/icon-alertscheme.svg" alt="Alarm" />
			<h6>Senior Alert Scheme</h6>
		</a>
		<a href="/services/#homehelp" class="service">
			<img src="img/icon-homehelp.svg" alt="Heart" />
			<h6>Home Help</h6>
		</a>
	</div>
</Section>

<Section background="blue" border="0">
	<div class="flex flex-col md:flex-row md:gap-8 mt-8">
		<div class="w-full md:w-1/2 ">
			<h3 class="text-4xl mb-8 px-6">Contact Details</h3>
			<div class="w-full bg-white p-6 rounded-2xl">
				<div class="grid grid-cols-[32px,_1fr] gap-1 items-start" id="location-location">
					<img src="/img/icon-location.svg" alt="location" />
					<div>
						<h4 class="mb-2 text-xl">Address</h4>
						<p>
							Unit 13,<br />
							Westside Enterprise Centre,<br />
							Bóthar le Cheile,<br />
							Galway
						</p>
					</div>

				</div>
				<div class="grid grid-cols-[32px,_1fr] gap-1 items-start my-4 py-4 border-t border-b" id="location-hours">
					<img src="/img/icon-hours.svg" alt="Clock" class="mt-1">
					<div id="openinghours">
						<h4 class="mb-3 text-xl">Opening Hours</h4>
						<div class="openinghoursgrid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
							<p class="font-bold">Monday-Thursday</p>
							<p class="mb-2">8.30am to 5pm</p>
							<p class="font-bold">Friday</p>
							<p class="mb-2">8.30am to 4pm</p>
							<p class="font-bold">Saturday-Sunday</p>
							<p class="">Closed</p>
						</div>
					</div>
				</div>
				<div class="grid grid-cols-[32px,_1fr] gap-1 items-start" id="location-phone">
					<img src="/img/icon-phone.svg" alt="Phone" class="mt-1"/>
					<div>
						<h4 class="mb-2 text-xl">Phone</h4>
						<p>(091) 589 861</p>
					</div>
				</div>
			</div>
		</div>
		<div class="w-full md:w-1/2">
			<h3 class="text-4xl px-6 my-8 md:mt-0">Map</h3>
			<div class="h-96 greybox rounded-2xl overflow-hidden">
				<iframe
					title="Google Maps"
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2598.618425975204!2d-9.077664103484073!3d53.277031826354296!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdcba26290b34f2ce!2sWestside+Age+Inclusion!5e0!3m2!1sen!2sie!4v1557580759678!5m2!1sen!2sie"
					frameborder="0"
					style="border:0; width: 100%; height: 100%"
					allowfullscreen
				/>
			</div>
		</div>
	</div>
</Section>
<Section background="white" border="0">
	<div class="greybox w-full flex flex-col sm:flex-row p-8 items-center gap-8 rounded-xl" id="pobal">
		<img src="img/icon-info.svg" alt="info" />
		<p class="low">
			Westside Age inclusion ltd are funded by Pobal which is under the dept. of social
			protection for wages only. All monies generated from our service are put back into our
			company for running cost.
		</p>
		<img src="img/logo-pobal.png" alt="Pobal Logo" class="h-16"/>
	</div>
</Section>
<Section background="transparent" border="0">
	<div class="text-white grid gap-8 md:gap-16 sm:grid-cols-[1fr,_2fr] mt-4">
		<div class="footerleft">
			<div class="footercopyright opacity-50">
				<b>&copy; {year}</b><br />
				Westside Age Inclusion Ltd.
			</div>
			<div id="footercontact" class="mt-4">
				<a href="/contact/"><b>Contact Us</b></a>
				<div id="contacticons" class="flex gap-4 mt-2">
					<a href="https://twitter.com/agewestside"><img src="/img/icon-white-twitter.svg" alt="Twitter"/></a>
					<a href="/contact/"><img src="/img/icon-white-mail.svg" alt="Mail"/></a>
					<a href="/contact/"><img src="/img/icon-white-phone.svg" alt="Phone" /></a>
				</div>
			</div>
			<div id="footerpartners" class="flex bg-white rounded-xl p-6 gap-6 mt-8">
				<img src="/img/logo-pobal.png"  class="w-1/2" alt="Pobal logo"/>
				<img src="/img/logo-drcd.webp"  class="w-1/2" alt="Department of Rural and Community Development"/>
			</div>
		</div>
		<div class="footerright pl-0 sm:pl-8 md:pl-16 sm:border-l border-waix-blue-light">
			<h3 class="text-3xl mb-4 sm:mb-8 opacity-50">Site Map</h3>
			<div id="sitemap" class="flex gap-8 leading-tight">
				<ul class="flex-1">
					<li><a href="/services/"><b>Services</b></a></li>
					<hr class="border-waix-blue-dark"/>
					<li><a href="/services/#laundry">Laundry</a></li>
					<li><a href="/services/#homehelp">Home Help</a></li>
					<li><a href="/services/#housemaintenance">House Maintenance</a></li>
					<li><a href="/services/#office">Office Facilities</a></li>
					<li><a href="/services/#socialclub">Social Club</a></li>
					<li><a href="/services/#alertscheme">Senior Alert Scheme</a></li>
				</ul>
				<ul class="flex-1">
					<li><a href="/about/"><b>About Us</b></a></li>
					<hr class="border-waix-blue-dark"/>
					<li><a href="/about/#missionstatement">Mission Statement</a></li>
					<li><a href="/about/#fundedby">Funded By</a></li>
					<li><a href="/about/#whatwedo">What We Do</a></li>
					<li><a href="/about/#boardmembers">Board Members</a></li>
				</ul>
				<ul class="flex-1">
					<li><a href="/donate/"><b>Contribute</b></a></li>
					<hr class="border-waix-blue-dark"/>
					<li><a href="/donate/">Donate</a></li>
				</ul>
			</div>
		</div>
	</div>
</Section>

<style lang="postcss">
	#sitemap li {
		@apply my-6;
	}
	#sitemap li a:hover {
		@apply text-waix-blue-light;
	}
</style>
