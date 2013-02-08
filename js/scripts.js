$(document).ready(function() {
	$("#fancyTitle").fitText(0.5125, { minFontSize: '60px', maxFontSize: '180px'});
	$("#resourcesTitle").fitText(0.66, { minFontSize: '42px', maxFontSize: '135px'});
	$("#galleryHeader h2").fitText(0.44, { minFontSize: '42px', maxFontSize: '135px'});
	$("#galleryHeader h3").fitText(0.83, { minFontSize: '13px', maxFontSize: '42px'});
	
	$('.flexslider').flexslider({
	    /* animation: "slide", */
	});
	
	
	$("#galleryHeader").click(function() {
		goToGallery();
	});
	$("#tileResponse, #slideresponse").click(function() {
		goToPage("#response");
	});
	$("#tileSpinner, #slidespinner").click(function() {
		goToPage("#spinner");
	});
	$("#tileCaptcha, #slidecaptcha").click(function() {
		goToPage("#motionCaptcha");
	});
	$("#tilePatterns, #slidepatterns").click(function() {
		goToPage("#patterns");
	});
	$("#tileWebFonts, #slidewebfonts").click(function() {
		goToPage("#webFonts");
	});
	
	$(".about").click(function() {
		$("#abouttext").fadeToggle();
		$(".about").toggleClass("selected");
	});
	
});

$(window).load(function() {
});






function goToPage(pagename) {
	$(".tile").css({"margin-top":"-300px", "opacity":"0"});
	$(".page").fadeOut(500);
	$("#gallery").fadeOut(1000);
	$(pagename).fadeIn(1000, function() {
		
	});
}

function goToGallery() {
	$(".page").fadeOut(500);
	$("#gallery").fadeIn(500);
	$(".tile").css({"margin-top":"0px", "opacity":"1"});
}
