(function(module) {
    "use strict";

    var AmazonAffiliate = {},
        embed = '<a href="$1?tag=daviwort05-20">$2</a>';


    AmazonAffiliate.parse = function(postContent, callback) {
	postContent = postContent.replace(/<a href="((?:https?:\/\/)?(?:(?:www\.)?amazon\.com)\/.+)">(.+)<\/a>/g, embed);
	callback(null, postContent);
    };

    module.exports = AmazonAffiliate;
}(module));
