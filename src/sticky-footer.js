var stickyFooter = stickyFooter || {};
stickyFooter = function() {

	var config = {
		elementIds: {		
			footer: "#footer",
			suitebar: "#suiteBarDelta",
			ribbon: "#s4-ribbonrow",
			body: "#s4-bodyContainer",
			content: "#contentRow",
			title: "#s4-titlerow"
		},
		minimumHeight: 0
	};

	var init = function() {

		injectFooter();

		adjustFooter();
		
		$(window).resize(function() {
			adjustFooter(true);
		});
				
	};
	
	var debounce = function(func, wait, immediate) {
		/* debounce borrowed from: https://davidwalsh.name/javascript-debounce-function */
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};

	/* not used */	
	var getScrollBarWidth = function() {
	    var $outer = $('<div>').css({visibility: 'hidden', width: 100, overflow: 'scroll'}).appendTo('body'),
        widthWithScroll = $('<div>').css({width: '100%'}).appendTo($outer).outerWidth();
	    $outer.remove();
	    return 100 - widthWithScroll;
	};
	
	var injectFooter = function() {
		// JavaScript inject the footer element
		// go ahead and replace the html content here
		var footer = $("<div/>", { "id": "footer", "class": "footer", "html": "Copyright &copy; " +  new Date().getFullYear() + " ThomasDaly.net" });
		$("#s4-bodyContainer").append(footer);
	};
	
	var adjustFooter = debounce(function(reset) {
		//reset content size for shrinking windows
		var content = $(config.elementIds.content);
		content.css("height","auto");

		var spacing = computeSpacing();
		if(spacing > 0) { //only increase the size if we computer extra space
			content.height(content.height() + spacing);			
		}
	}, 250);
	
	var computeSpacing = function() {
		var footerHeight = getHeight(config.elementIds.footer);
		var suiteBarHeight = getHeight(config.elementIds.suitebar);
		var ribbonHeight = getHeight(config.elementIds.ribbon);
		var contentHeight = getHeight(config.elementIds.content);
		var titleHeight = getHeight(config.elementIds.title);
		var windowHeight = $(window).height();
		var computedSpacing = windowHeight - suiteBarHeight - ribbonHeight - footerHeight - contentHeight - titleHeight;
		return computedSpacing;
	};
	
	var getHeight = function(selector) {
		var elemHeight = $(selector).outerHeight(true);
		return elemHeight;
	};
		
	return {
		init: init
	};

}();