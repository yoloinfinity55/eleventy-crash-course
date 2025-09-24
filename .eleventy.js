module.exports = function(eleventyConfig) {

    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "_site"
        },
        templateFormats: ['md', 'njk', 'html'],
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
        dataTemplateEngine: "njk"
    };
}