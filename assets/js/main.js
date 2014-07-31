$(function() {
var listItems = $("#menu li");
listItems.each(function(idx, li) {
    if ($("a",$(li)).attr('href')==window.location.pathname){
    	$(li).addClass("active");
    }
});

});
