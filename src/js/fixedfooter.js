;(function($) {
	'use strict';

	var FixedFooter = function (elem, options) {
		this.options = $.extend({}, FixedFooter.options, options);
		this.elem = elem;
		this.container = this.options.container ? this.options.container : $(".fixedfooter-container");
		this.setContainerPadding();
		this.elem.css("visibility", "visible");
		var self = this;

		$(window).resize(function() {
			if (FixedFooter.resizeTimer) {
				clearTimeout(FixedFooter.resizeTimer);
			}
			FixedFooter.resizeTimer = setTimeout(function() {
				self.setContainerPadding();
			}, 250);
		});
	};

	FixedFooter.prototype.setContainerPadding = function() {
		this.container.css("padding-bottom", this.elem.outerHeight());
	}

	FixedFooter.options = {
		container		: null,
	};

	$.fn.fixedfooter = function(options) {
		return this.each(function () {
			new FixedFooter($(this), options);
		});
	};

}(jQuery));