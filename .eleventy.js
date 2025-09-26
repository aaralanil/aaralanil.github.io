module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("js");
	eleventyConfig.addPassthroughCopy("**/*.png");
	eleventyConfig.addPassthroughCopy("**/*.css");
	eleventyConfig.addPassthroughCopy("**/*.woff2");
	eleventyConfig.addPassthroughCopy("**/*.jpg");

	eleventyConfig.addFilter("dateYear", function(date) {
		return new Date(date).getFullYear();
	});
};