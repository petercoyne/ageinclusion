<script>
	import Section from "$lib/Section.svelte";
</script>

<Section background="1" border="1">
	<div class="flex items-center flex-col md:flex-row md:gap-8">
		<div class="w-full md:w-1/2 p-6 lg:p-0">
			<h2 class="text-4xl py-4 glow">Welcome</h2>
			<p class="prose glow py-2 md:text-md leading-relaxed"><b>Westside Age Inclusion Ltd.</b> was established in Feb 2002 to deliver services to the socially disadvantaged elderly people (over 55's) who live in the Westside area of Galway City.</p>
			<a href="/about/" class="inline-block px-6 py-3 lg:px-6 md:py-3 mt-6 border border-white text-white bg-gradient-to-b from-waix-green to-waix-green-dark rounded-full md:text-md shadow-xl ">Read More
				<svg fill="none" class="w-6 h-6 inline" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  					<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
				</svg>
			</a>
		</div>
		<div class="w-full md:w-1/2 p-6 sm:p-6 md:pr-6 lg:pr-0 xl:pr-0">
			<img src="img/video.webp" alt="" srcset="" class="rounded-xl w-full shadow-2xl"/>
		</div>
	</div>
</Section>

<Section background="2" border="2">
		<h3 class="text-4xl py-4">Our Services</h3>
			<p class="low">Westside Age Inclusion Ltd covers all local authority estates in the Westside area. We have six services that we provide to socially disadvantaged people over 55 and these are delivered from Monday to Friday.</p>
			<div id="servicesbox">
				<a href="/services/#laundry" class="service">
					<img src="img/icon-laundry.svg" alt="Washing Machine">
					<h6>Laundry</h6>
				</a>
				<a href="/services/#housemaintenance" class="service">
					<img src="img/icon-housemaintenance.svg" alt="House">
					<h6>House Maintenance</h6>
				</a>
				<a href="/services/#office" class="service">
					<img src="img/icon-office.svg" alt="Office">
					<h6>Office</h6>
				</a>
				<a href="/services/#socialclub" class="service">
					<img src="img/icon-socialclub.svg" alt="People">
					<h6>Social Club</h6>
				</a>
				<a href="/services/#alertscheme" class="service">
					<img src="img/icon-alertscheme.svg" alt="Alarm">
					<h6>Senior Alert Scheme</h6>
				</a>
				<a href="/services/#homehelp" class="service">
					<img src="img/icon-homehelp.svg" alt="Heart">
					<h6>Home Help</h6>
				</a>
			</div>
</Section>


<Section background="3" border="3">
	<section id="homelocationevents">
		<div class="blueskew"></div>
		<div class="container">
			<div class="halfwidth-left bg-white">
				<h3>Contact Details</h3>
				<div class="greybox">
					<div class="locationgrid" id="location-location">
						<img src="/img/icon-location.svg" alt="location"/>
						<p>Unit 13,<br/>
						Westside Enterprise Centre,<br/>
						Bóthar le Cheile,<br/>
						Galway</p>
					</div>
					<div class="locationgrid" id="location-hours">
						<img src="/img/icon-hours.svg">
						<div id="openinghours">
							<p><b>Opening Hours</b></p>
							<div id="openinghoursgrid">
								<p class="ohday">Monday/Thursday</p><p>8.30am to 5pm</p>
								<p class="ohday">Friday</p><p>8.30am to 4pm</p>
							</div>
						</div>
					</div>
					<div class="locationgrid" id="location-phone">
						<img src="/img/icon-phone.svg">
						<p>(091) 589 861</p>
					</div>
				</div>
			</div>
			<div class="halfwidth-right">
				<h3 id="upcomingeventsheader">Map</h3>
				<div class="greybox">
					<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2598.618425975204!2d-9.077664103484073!3d53.277031826354296!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdcba26290b34f2ce!2sWestside+Age+Inclusion!5e0!3m2!1sen!2sie!4v1557580759678!5m2!1sen!2sie" height="250" frameborder="0" style="border:0; width: 100%" allowfullscreen></iframe>

				</div>
			</div>
		</div>
	</section>
	</Section>
	<Section background="2" border="2">
	<section>
		<div class="container">
			<div class="greybox" id="pobal">
				<img src="img/icon-info.svg" id="info"/>
				<p class="low">Westside Age inclusion ltd are funded by Pobal which is under the dept. of social protection for wages only. All monies generated from our service are put back into our company for running cost.</p>
				<img src="img/logo-pobal.png" id="poballogo"/>
			</div>
		</div>
	</section>
	</Section>
	<section id="footer">
		<div class="darkblueskew"></div>
		<div class="darkblueflat"></div>
		<div class="container">
			<div id="footerleft">
				<div id="footercopyright">
					<b>&copy; 2019</b><br/>
					Westside Age Inclusion Ltd.
				</div>
				<div id="footercontact">
					<a href="/contact/"><b>Contact Us</b></a>
					<div id="contacticons">
						<a href="https://twitter.com/agewestside"><img src="/img/icon-white-twitter.svg"></a>
						<a href="/contact/"><img src="/img/icon-white-mail.svg"></a>
						<a href="/contact/"><img src="/img/icon-white-phone.svg"></a>
					</div>
				</div>
				<div id="footerpartners">
					<img src="/img/logo-pobal.png">
					<img src="/img/logo-drcd.webp">
				</div>
			</div>
			<div id="footerdivider"></div>
			<div id="footerright">
				<h3>Site Map</h3>
				<div id="sitemap">
					<ul>
						<li><a href="/services/"><b>Services</b></a></li>
						<li><a href="/services/#laundry">Laundry</a></li>
						<li><a href="/services/#homehelp">Home Help</a></li>
						<li><a href="/services/#housemaintenance">House Maintenance</a></li>
						<li><a href="/services/#office">Office Facilities</a></li>
						<li><a href="/services/#socialclub">Social Club</a></li>
						<li><a href="/services/#alertscheme">Senior Alert Scheme</a></li>
					</ul>
					<ul>
						<li><a href="/about/"><b>About Us</b></a></li>
						<li><a href="/about/#missionstatement">Mission Statement</a></li>
						<li><a href="/about/#fundedby">Funded By</a></li>
						<li><a href="/about/#whatwedo">What We Do</a></li>
						<li><a href="/about/#boardmembers">Board Members</a></li>
					</ul>
					<ul>
						<li><a href="/donate/"><b>Get Involved</b></a></li>
						<li><a href="/donate/">Donate</a></li>
					</ul>
				</div>
			</div>
		</div>
	</section>



<style>

</style>