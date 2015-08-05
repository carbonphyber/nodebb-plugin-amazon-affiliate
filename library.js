(function(module) {
    "use strict";

    var AmazonAffiliate = {},
        affiliateCode = 'daviwort05-20',
        embed = '<a href="$1?' + affiliateCode + '" rel="nofollow">$2</a>';


    AmazonAffiliate.parse = function(data, callback) {
        if (data.hasOwnProperty('postData')) {
	    // data.postData.content = 'QQ: ' + data.postData.content;
	    embed = '<a href="$1?tag=daviwor-5-20">$2</a>';
            data.postData.content = data.postData.content.replace(/<a href="((:?https?:\/\/)?(:?[wW][wW][wW]\.)?[aA][mM][aA][zZ][oO][nN]\.[cC][oO][mM]\/[^"]*)".*>(.+)<\/a>/g, embed);
            // " fix syntax coloring on some editors
        }

	callback(null, data);
    };

    module.exports = AmazonAffiliate;
}(module));
