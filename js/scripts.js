$(document).ready(function() {
	$("#fancyTitle").fitText(0.5125, { minFontSize: '90px', maxFontSize: '180px'});
	$("#resourcesTitle").fitText(0.725);
	$("#galleryHeader h2").fitText(0.45);
	$("#galleryHeader h3").fitText(1.1);
	
});

$(window).load(function() {
    $('.flexslider').flexslider({
    	/* animation: "slide", */
    });
});