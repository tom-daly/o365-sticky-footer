# o365-sticky-footer
Sticky Footer Solution for Office 365

This is a simple sticky footer solution for Office 365. This injects a footer via jQuery into the #s4-bodyContainer of Office 365. Inside the JavaScript file you can edit the footer HTLM to be anything you want or exapnd upon this idea. This works well with resizing (using debounce) to rate limit the calls fired off by the resize event on the window. It also resets the sizing so that if you go low it won't go above the current content. The attached CSS style contain a set of manadatory styles that 'clearfix' some elements in Office 365 so that we can measure the true size.

Requires jQuery 

How to execute
<script>
$(document).ready(function() {
	stickyFooter.init();
});
</script>

**IN PROGRESS **
