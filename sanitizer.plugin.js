var sanitizer = require("sanitizer");

module.exports = function(BasePlugin) {

	return BasePlugin.extend({

		name: "sanitizer",

		/*
		 * Docpad events
		 * ================================
		 */

		extendTemplateData: function extendTemplateData(opts) {
			/*
			 * Common API:
			 * - sanitizer.sanitize("string with unsafe tags and attributes")
			 * - sanitizer.escape("string with HTML special characters")
			 * 
			 * For full list, refer https://github.com/theSmaw/Caja-HTML-Sanitizer
			 */
			opts.templateData.sanitizer = sanitizer;

			return this;
		}
		

	});

};