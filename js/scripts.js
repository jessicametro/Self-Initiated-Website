$(document).ready(function() {
	fancyHistory();

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



var athome = true;

function fancyHistory() {

	var statewatcher = function() {
		var State = History.getState(); // Note: We are using History.getState() instead of event.state
		History.log(State.data, State.title, State.url);
		//console.log("Hey state change wooo");
		if (State.data.page) {
			dogoToPage(State.data.page, true);
		} else {
			dogoToGallery(true);
		}
	};

	// Bind to StateChange Event
	History.Adapter.bind(window,'statechange',function(){ // Note: We are using statechange instead of popstate
		    statewatcher();
	});

	//History.pushState({home:true}, "", "");
	//statewatcher();
}

function dogoToPage(pagename) {
	$(".tile").css({"margin-top":"-300px", "opacity":"0"});
	$(".page").fadeOut(500);
	$("#gallery").fadeOut(1000);
	$(window).scrollTo("#galleryContainer", 300);
	$(pagename).fadeIn(1000, function() {
		
	});
	athome = false;
}

function dogoToGallery() {
	if (athome) return;
	$(window).scrollTo("#galleryContainer", 300);
	$(".page").fadeOut(500);
	$("#gallery").fadeIn(500);
	$(".tile").css({"margin-top":"0px", "opacity":"1"});
	athome = true;
}

function goToPage(pagename) {
	//console.log("Pushing history for page "+pagename);
	History.pushState({page:pagename}, "Self-Initiated", pagename.replace("#","/"));
}

function goToGallery() {
	History.pushState({home:true}, null, "/");
	//console.log("Pushing history for home");
}
