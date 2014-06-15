$(function() {

	// var searchresults = xxx;

	$('input[type="submit"]').submit(function() {
		// var searchTerm = $('input[name="tags"]').val();
		// youtubeSearch(searchTerm);
		console.log('form click');
		// $.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=" + enterSearch + "&key=AIzaSyD32aYdrGJamwS-OgMm5d5nxv1XVfDrN4c");
	});
	console.log('form click');
});

// AJAX Search to youtube with response going to results

// function youtubeSearch(enterSearch) {
// 	$.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=" + enterSearch + "&key=AIzaSyD32aYdrGJamwS-OgMm5d5nxv1XVfDrN4c")
// }