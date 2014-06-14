$(function() {

	var searchresults = xxx;

	$('form').submit(function(event) {
		var searchTerm = $('input[name="tags"]').val();
		youtubeSearch(searchTerm);
	});

});

// AJAX Search to youtube with response going to results

function youtubeSearch(enterSearch) {
	$.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=" + enterSearch + "&key=AIzaSyD32aYdrGJamwS-OgMm5d5nxv1XVfDrN4c")
}