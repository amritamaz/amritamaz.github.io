var getLocation = function(href) {
    var l = document.createElement("a");
    l.href = href;
    return l;
};

$(function() {
var listItems = $("#menu li");
listItems.each(function(idx, li) {
    if (getLocation($("a",$(li)).attr('href')).pathname==window.location.pathname){
    	if (getLocation($("a",$(li)).attr('href')).origin==window.location.origin){
    		$(li).addClass("active");
    	}
    }
});

});
