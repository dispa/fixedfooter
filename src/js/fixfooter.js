;(function($) {
	'use strict';

	var FixFooter = function (elem, options) {
		this.options = $.extend({}, FixFooter.options, options);
		this.elem = elem;
		this.container = this.options.container ? this.options.container : $(".fixfooter-container");
		this.setContainerPadding();
		this.elem.css("visibility", "visible");
		var self = this;

		$(window).resize(function() {
			if (FixFooter.resizeTimer) {
				clearTimeout(FixFooter.resizeTimer);
			}
			FixFooter.resizeTimer = setTimeout(function() {
				self.setContainerPadding();
			}, 250);
		});
	};

	FixFooter.prototype.setContainerPadding = function() {
		this.container.css("padding-bottom", this.elem.outerHeight());
	}

	FixFooter.options = {
		container		: null,
	};

	$.fn.fixfooter = function(options) {
		return this.each(function () {
			new FixFooter($(this), options);
		});
	};

}(jQuery));
