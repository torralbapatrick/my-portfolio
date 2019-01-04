jQuery(document).ready(function($) {
    $('.level-bar-inner').css('width', '0');

    $('.level-bar-inner').each(function() {
    
        var itemWidth = $(this).data('level');

        $(this).animate({
            width: itemWidth
        }, 800);
        
    });

    
    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();

    /* Github Activity Feed */
    GitHubActivity.feed({
		username: "torralbapatrick",
		selector: "#ghfeed"
	});
});