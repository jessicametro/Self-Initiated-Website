$(document).ready(function() {
	$("#fancyTitle").fitText(0.5125, { minFontSize: '90px', maxFontSize: '180px'});
	$("#resourcesTitle").fitText(0.725);
	$("#galleryHeader h2").fitText(0.44, { minFontSize: '42px', maxFontSize: '135px'});
	$("#galleryHeader h3").fitText(0.83, { minFontSize: '13px', maxFontSize: '42px'});
	
});

$(window).load(function() {
    $('.flexslider').flexslider({
    	/* animation: "slide", */
    });
});