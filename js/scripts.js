$(document).ready(function() {
	$("#fancyTitle").fitText(0.5125, { minFontSize: '60px', maxFontSize: '180px'});
	$("#resourcesTitle").fitText(0.66, { minFontSize: '42px', maxFontSize: '135px'});
	$("#galleryHeader h2").fitText(0.44, { minFontSize: '42px', maxFontSize: '135px'});
	$("#galleryHeader h3").fitText(0.83, { minFontSize: '13px', maxFontSize: '42px'});
	
	
	
	$("#galleryHeader").click(function() {
		goToGallery();
	});
	$("#tileResponse").click(function() {
		goToPage("#response");
	});
	$("#tileSpinner").click(function() {
		goToPage("#spinner");
	});
	$("#tileCaptcha").click(function() {
		goToPage("#motionCaptcha");
	});
	$("#tilePatterns").click(function() {
		goToPage("#patterns");
	});
	$("#tileWebFonts").click(function() {
		goToPage("#webFonts");
	});
	
});

$(window).load(function() {
    $('.flexslider').flexslider({
    	/* animation: "slide", */
    });
});






function goToPage(pagename) {
	$(".tile").css({"margin-top":"-300px", "opacity":"0"});
	$("#gallery").fadeOut(1000);
	$(pagename).fadeIn(1000, function() {
		
	});
}

function goToGallery() {
	$(".page").fadeOut(500);
	$("#gallery").fadeIn(500);
	$(".tile").css({"margin-top":"0px", "opacity":"1"});
}