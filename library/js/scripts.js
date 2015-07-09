/*
 * Guybrush Scripts File
 * Author: Jack Machin
 *
 * This file should contain any js scripts you want to add to the site.
 * Instead of calling it in the header or throwing it inside wp_head()
 * this file will be called automatically in the footer so as not to
 * slow the page load.
 *
 * There are a lot of example functions and tools in here. If you don't
 * need any of it, just remove it. They are meant to be helpers and are
 * not required. It's your world baby, you can do whatever you want.
*/

/*global $, jQuery, alert*/

/*
 * Get Viewport Dimensions
 * returns object with viewport dimensions to match css in width and height properties
 * ( source: http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript )
*/
function updateViewportDimensions() {
    "use strict";
	var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight || e.clientHeight || g.clientHeight;
	return { width: x, height: y };
}
// setting the viewport width
var viewport = updateViewportDimensions();


/*
 * Throttle Resize-triggered Events
 * Wrap your actions in this function to throttle the frequency of firing them off, for better performance, esp. on mobile.
 * ( source: http://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed )
*/
var waitForFinalEvent = function () {
    "use strict";
	var timers = {};
	return function (callback, ms, uniqueId) {
		if (!uniqueId) { uniqueId = "Don't call this twice without a uniqueId"; }
		if (timers[uniqueId]) { clearTimeout(timers[uniqueId]); }
		timers[uniqueId] = setTimeout(callback, ms);
	};
};

// how long to wait before deciding the resize has stopped, in ms. Around 50-100 should work ok.
var timeToWaitForLast = 100;


/*
 * Here's an example so you can see how we're using the above function
 *
 * This is commented out so it won't work, but you can copy it and
 * remove the comments.
 *
 *
 *
 * If we want to only do it on a certain page, we can setup checks so we do it
 * as efficient as possible.
 *
 * if( typeof is_home === "undefined" ) var is_home = $('body').hasClass('home');
 *
 * This once checks to see if you're on the home page based on the body class
 * We can then use that check to perform actions on the home page only
 *
 * When the window is resized, we perform this function
 * $(window).resize(function () {
 *
 *    // if we're on the home page, we wait the set amount (in function above) then fire the function
 *    if( is_home ) { waitForFinalEvent( function() {
 *
 *      // if we're above or equal to 768 fire this off
 *      if( viewport.width >= 768 ) {
 *        console.log('On home page and window sized to 768 width or more.');
 *      } else {
 *        // otherwise, let's do this instead
 *        console.log('Not on home page, or window sized to less than 768.');
 *      }
 *
 *    }, timeToWaitForLast, "your-function-identifier-string"); }
 * });
 *
 * Pretty cool huh? You can create functions like this to conditionally load
 * content and other stuff dependent on the viewport.
 * Remember that mobile devices and javascript aren't the best of friends.
 * Keep it light and always make sure the larger viewports are doing the heavy lifting.
 *
*/

this.imagePreview = function () {
    "use strict";
	/* CONFIG */
    xOffset = -100;
    yOffset = 10;

		// these 2 variable determine popup's distance from the cursor
		// you might want to adjust to get the right result

	/* END CONFIG */
};

/*
 * Put all your regular jQuery in here.
*/
jQuery(document).ready(function ($) {
    "use strict";

    viewport = updateViewportDimensions();
    // if the viewport is tablet or smaller, we slide sub menus on tap
    if (viewport.width <= 768) {

        $('.menu-item-has-children').on('tap', function () {

            $('.sub-menu').slideUp(100); // slide up all open sub menus
            $('.menu-item').removeClass('tapped'); //remove the tapped class from active parent
            $(this).children('.sub-menu').delay(100).slideDown(200); // delay, then slide down the active sub menu
            $(this).addClass('tapped'); // add the tapped class to the active parent
        });

        $('.sub-menu').css({"width": viewport.width});
    }

    // if the viewport is tablet or larger, we slide sub menus on hover
    if (viewport.width >= 768) {
        $('.menu-item-has-children').hover(
            function () {
                $(this).children('.sub-menu').slideDown(200);
            },

            function () {
                $(this).children('.sub-menu').slideUp(200);
            }
        );
    }

    var visited = $.cookie("pfglcookie");


    if (visited === null) {
        $('.cookie_layer').show();
        $.cookie('pfglcookie', 'yes', { expires: 365, path: '/' });
    }
    $.cookie('pfglcookie', 'yes', { expires: 365, path: '/' });

   /* var yourFade = 1, // the amount of time in seconds that the elements will fade in fade out
        yourDelay = 2, // the amount of time in seconds that there will be a delay between the fade ins and fade outs
        fadeTime = yourFade * 1000, //convert fade seconds to milliseconds (1000)
        delayTime = yourDelay * 1000, // convert delay seconds to milliseconds (2000)
        totalTime = delayTime, //3000 milliseconds...needed for all those delays we talked about
        allElems, // find out exactly how many page elements have the 'toBeFaded' class (4)
        elemNoFade, // Will help us find the last element represent the last element (3)
        i,
        fadingElem;

    for (i = 0, allElems = $('.testimonial').length, elemNoFade = allElems - 1; i < allElems; i = 1) {
        fadingElem = "#test" + i;
        if (i === 0) {
            $(fadingElem).fadeIn(fadeTime).delay(delayTime).fadeOut(fadeTime);
        } else if (i === elemNoFade) {
            $(fadingElem).delay(totalTime * i).fadeIn(fadeTime);
        } else {
            $(fadingElem).delay(totalTime * i).fadeIn(fadeTime).delay(delayTime).fadeOut(fadeTime);
        }
    } */



    $("a.preview").hover(function (e) {
        this.t = this.title;
        this.title = "";

        var c = (this.t !== "") ? "<br/>" + this.t : "";

        $("body").append("<p id='preview'><img src='" + this.href + "' alt='Image preview' />" + c + "</p>");

        $("#preview")
            .css("top", (e.pageY + yOffset) + "px")
            .css("left", (e.pageX + xOffset) + "px")
            .fadeIn("fast");
    }, function () {
        this.title = this.t;
        $("#preview").remove();
    });

    // Set initial location
    $("#ifa-details").html(
        "<img src='/wp-content/themes/perspective/images/ifa-logos/pfgl.jpg' /><h3>Perspective Group</h3><address><p>Paradigm House<br />Brooke Court<br />Lower Meadow Road<br />Wilmslow<br />SK9 3ND</p></address><p><strong>Tel:</strong> 0845 688 1454<br /><a href='/enquire'>Contact Us</a></p>"
    );

    $("#perspective-group.bullet").addClass('active');

    $("a.preview").mousemove(function (e) {
        $("#preview")
            .css("top", (e.pageY + yOffset) + "px")
            .css("left", (e.pageX + xOffset) + "px");
    });

    $("a.preview").click(function (e) {
        e.preventDefault();

		$("a.preview").removeClass('active');
		$(this).addClass('active');

		var idclicked = $(this).attr('id');

		$("#ifa-details").fadeOut(500, function () {
			changeIfa(idclicked);
		});

        $("#ifa-details").show("fade", {}, 500);

		function changeIfa(ifa) {
			if (ifa === "rutherford-wilkinson") {
				$("#ifa-details").html(
				    "<img src='/wp-content/themes/perspective/images/ifa-logos/rw.jpg' alt='rw' /><h3>Rutherford Wilkinson Ltd</h3><address><p>Northumbria House 21 - 23 Brenkley Way<br />Blezard Business Park<br /> Newcastle upon Tyne<br /> NE13 6DS</p></address><p><strong>Tel:</strong> 0191 217 3340<br /><a href='http://www.rwpfg.co.uk'>www.rwpfg.co.uk</a></p>"
				);
			} else if (ifa === "harrogate-independant") {
				$("#ifa-details").html(
				    "<img src='/wp-content/themes/perspective/images/ifa-logos/harrogate.gif' alt='Harrogate Financial Solutions Ltd' /><h3>Harrogate Financial Solutions Ltd</h3><address><p>York House <br/> Cottingley Business Park <br/> Bradford <br/> West Yorkshire <br/> BD16 1PE</p></address><p><strong>Tel:</strong> 01423 873757<br /><a href='http://www.hfspfg.co.uk'>www.hfspfg.co.uk</a></p>"
				);
			} else if (ifa === "multiplex") {
				$("#ifa-details").html(
				    "<img src='/wp-content/themes/perspective/images/ifa-logos/multiplex.jpg' /><h3>Multiplex Financial Trustees Limited</h3><address><p>Booths Park No 1<br />Booths Park<br />Chelford Road<br />Knutsford<br />Cheshire<br />WA16 8GS</p></address><p><strong>Tel:</strong> 01565 756199<br/><a href='http://www.multiplex.org.uk'>www.multiplex.org.uk</a></p>"
				);
			} else if (ifa === "perspective-group") {
				$("#ifa-details").html(
				    "<img src='/wp-content/themes/perspective/images/ifa-logos/pfgl.jpg' /><h3>Perspective Group</h3><address><p>Paradigm House<br />Brooke Court<br />Lower Meadow Road<br />Wilmslow<br />SK9 3ND</p></address><p><strong>Tel:</strong> 0845 688 1454<br /><a href='/enquire'>Contact Us</a></p>"
				);
			} else if (ifa === "warnes-anderton") {
				$("#ifa-details").html(
				    "<img src='/wp-content/themes/perspective/images/ifa-logos/warnesanderton.jpg' alt='rw' /><h3>Warnes Anderton Limited</h3><address><p>1 Great House<br />Waterside Business Park<br />Redwall Close<br />Dinnington<br />Sheffield<br />S25 3QA</p></address><p><strong>Tel:</strong> 01909 560 677<br/><a href='http://www.warnesanderton.co.uk'>www.warnesanderton.co.uk</a></p>"
				);
			} else if (ifa === "cambridge-investments") {
				$("#ifa-details").html(
					"<img src='/wp-content/themes/perspective/images/ifa-logos/cambridge.jpg' /><h3>Cambridge Investments Limited</h3><address><p>Authorised Discretionary Investment Managers<br />Threadneedle House<br />19-21 George IV Street<br />Cambridge<br />CB2 1HH<br /></address><p><strong>Tel:</strong> 01223 365656<br /><a href='http://www.cambridgeinvestments.co.uk'>www.cambridgeinvestments.co.uk</a></p>"
				);
			} else if (ifa === "applewood1") {
				$("#ifa-details").html(
					"<img src='/wp-content/themes/perspective/images/ifa-logos/applewood.jpg' alt='rw' /><h3>Applewood Wealth Management Ltd</h3><address><p>Hilliards Court<br />Chester Business Park<br />Chester<br />Cheshire<br />CH4 9QP</p></address><p><strong>Tel:</strong> 01244 680314<br /><a href='http://www.applewood.co.uk'>www.applewood.co.uk</a></p>"
				);
			} else if (ifa === "applewood2") {
				$("#ifa-details").html(
					"<img src='/wp-content/themes/perspective/images/ifa-logos/applewood.jpg' alt='rw' /><h3>Applewood Wealth Management Ltd</h3><address><p>15 English Walls<br />Oswestry<br />Shropshire<br />SY11 2PA</p></address><p><strong>Tel:</strong> 01691 671903<br /><a href='http://www.applewood.co.uk'>www.applewood.co.uk</a></p>"
				);
			} else if (ifa === "wingham-wyatt") {
				$("#ifa-details").html(
					"<img src='/wp-content/themes/perspective/images/ifa-logos/wingham-wyatt.jpg' /><h3>Wingham Wyatt Financial Services Ltd</h3><address><p>Winghams House<br />9 Freeport Office Village<br />Century Drive<br />Braintree<br />Essex<br />CM77 8YG</p></address><p><strong>Tel:</strong> 01376 331800<br /><a href='http://www.winghams.co.uk'>www.winghams.co.uk</a></p>"
				);
			} else if (ifa === "perspective-financial") {
				$("#ifa-details").html(
					"<img src='/wp-content/themes/perspective/images/ifa-logos/perspective.gif' /><h3>Perspective Wealth Management</h3><address><p>3 Whittle Court<br />Seebeck Place<br />Knowlhill<br />Milton Keynes<br />MK5 8FT</p></address><p><strong>Tel:</strong> 01908 257888<br /><a href='http://www.perspective-group.com'>www.perspective-group.com</a>"
				);
			} else if (ifa === "chessman-partners") {
				$("#ifa-details").html(
					"<img src='/wp-content/themes/perspective/images/ifa-logos/chessmanpartners.jpg' /><h3>Chessman & Partners Ltd</h3><address><p>4-10 Red Lion St<br />Chesham<br />Buckinghamshire<br />HP5 1HF</p></address><p><strong>Tel:</strong> 01494 778199<br /><a href='http://www.chessmanandpartners.co.uk'>www.chessmanandpartners.co.uk</a></p>"
				);
			} else if (ifa === "charles-reynolds-associates") {
				$("#ifa-details").html(
					"<img src='/wp-content/themes/perspective/images/ifa-logos/cra.jpg' /><h3> Charles Reynolds & Associates</h3><address><p>Suite 1, Associates House<br />118 East Barnet Road<br />New Barnet<br />Hertfordshire<br/>EN4 8RE</address><p><strong>Tel:</strong> 020 8441 6777<br /><a href='http://www.cragroup.co.uk'>www.cragroup.co.uk</a></p>"
				);
			} else if (ifa === "pims") {
				$("#ifa-details").html(
					"<img src='/wp-content/themes/perspective/images/ifa-logos/pims.jpg' /><h3>Professional Investment Management Services (Maidstone) Ltd</h3><address><p>7-8 Romney Place<br />Maidstone<br />Kent<br />ME15 6LE</p></address><p><strong>Tel:</strong> 01622 750426<br /><a href='http://www.pims-online.co.uk'>www.pims-online.co.uk</a></p>"
				);
			} else if (ifa === "platinum-portfolios") {
				$("#ifa-details").html(
					"<img src='/wp-content/themes/perspective/images/ifa-logos/platinum.jpg' /><h3>Platinum Portfolios Limited</h3><address><p>Dyke House<br />110 South Street<br />Eastbourne<br />East Sussex<br />BN21 4LB</p></address><p><strong>Tel:</strong> 01323 642568<br /><a href='http://www.platinumportfolios.co.uk'>www.platinumportfolios.co.uk</a></p>"
				);
			} else if (ifa === "equilibrium") {
				$("#ifa-details").html(
					"<img src='/wp-content/themes/perspective/images/ifa-logos/equilibrium.jpg' /><h3>Equilibrium Wealth Management Limited</h3><address><p>Equilibrium House<br />1 Pelhams Court<br />London Road<br />Marlborough<br />SN8 2AG</p></address><p><strong>Tel:</strong>  0845 345 1979<br /><a href='http://www.equilibrium-wm.co.uk'>www.equilibrium-wm.co.uk</a></p>"
				);
			} else if (ifa === "leedham") {
				$("#ifa-details").html(
					"<img src='/wp-content/themes/perspective/images/ifa-logos/leedham.jpg' /><h3>Leedham Independent Financial Advisers Limited</h3><address><p>Stafford House<br />23 Chorley Old Road<br />Bolton<br />BL1 3AD</p></address><p><strong>Tel:</strong>  01204 366 522<br /><a href='http://www.leedham-ifa.co.uk'>www.leedham-ifa.co.uk</a></p>"
				);
			} else if (ifa === "shirebrook") {
				$("#ifa-details").html(
					"<img src='/wp-content/themes/perspective/images/ifa-logos/shirebrook.jpg' /><h3>Shirebrook Wealth Management Limited</h3><address><p>1st Floor, Lancaster House<br />Ackhurst Business Park<br />Foxhole Road<br />Chorley<br />Lancashire<br />PR7 1NY</p></address><p><strong>Tel:</strong>  01257 246 550<br /><a href='http://www.shirebrookpfg.co.uk'>www.shirebrookpfg.co.uk</a></p>"
				);
			} else if (ifa === "austyn-james") {
				$("#ifa-details").html(
					"<img src='/wp-content/themes/perspective/images/ifa-logos/austyn.jpg' /><h3>Austyn James Consulting Limited</h3><address><p>Metropolitan House<br />20 London End<br />Beaconsfield<br />Buckinghamshire<br />HP9 2JH</p></address><p><strong>Tel:</strong>  01494 680 668<br /><a href='http://www.austynjames.com'>www.austynjames.com</a></p>"
				);
			} else if (ifa === "mcgrath-rathbone") {
				$("#ifa-details").html(
					"<img src='/wp-content/themes/perspective/images/ifa-logos/mcgrath_rathbone.jpg' /><h3>McGrath Rathbone Limited</h3><address><p>1 The Quadrangle<br />Woodstock<br />Oxfordshire<br />OX20 1LH</p></address><p><strong>Tel:</strong>  01993 813 500</p>"
				);
			} else if (ifa === "ad-valorem") {
				$("#ifa-details").html(
					"<img src='/wp-content/themes/perspective/images/ifa-logos/ad-valorem.jpg' /><h3>Ad Valorem Wealth Management Solutions Limited</h3><address><p>Whitehall House<br /> Sandy Lane<br /> Newcastle-under-Lyme<br /> Staffordshire<br /> ST5 0LZ</p></address><p><strong>Tel:</strong> 01782 711091 <br /><a href='http://www.advaloremwealth.co.uk'>www.advaloremwealth.co.uk</p>"
				);
			} else if (ifa === "keypi") {
				$("#ifa-details").html(
					"<img src='/wp-content/themes/perspective/images/ifa-logos/keypi.jpg' /><h3>Key Pensions &amp; Investments Limited</h3><address><p>60a High Street<br /> Keynsham<br /> Bristol<br /> BS31 1DX</p></address><p><strong>Tel:</strong> 0117 9161080 <br /><a href='http://www.keypi.co.uk'>www.keypi.co.uk</p>"
				);
			} else if (ifa === "financial-connection") {
				$("#ifa-details").html(
					"<img src='/wp-content/themes/perspective/images/ifa-logos/financial-connection.jpg' /><h3>Financial Connection Wealth Management Limited</h3><address><p>2 Brassey Hill<br /> Oxted<br /> Surrey<br /> RH8 0ES</p></address><p><strong>Tel:</strong>  01883 734530 <br /><a href='http://www.financial-connection.com'>www.financial-connection.com</p>"
				);
			}
		}
	});

    function selectThis(id) {
		//Off to a fine start, could search the DOM Element and do a .each function on the divs inside, or just hide all of that class...
		jQuery('.ifa-details').fadeOut(500);
		// ID of Body plus whatever param we pass down,
		jQuery('#details-' + id).delay(500).fadeIn(500);
		//Remove that pesky selected from all
	}

	imagePreview();

}); /* end of as page load scripts */
