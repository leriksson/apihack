$(function() {

	// var searchresults = xxx;

	$('form').submit(function() {
		var searchTerm = $('input[name="tags"]').val();
		youtubeSearch(searchTerm);
	});

	// $('a.thumb').click(function(e) {
	// 	e.preventDefault();
	// 	console.log('HELLO????');
	// });
	console.log('goodbye????');
});



// AJAX Search to youtube with response going to results

function youtubeSearch(enterSearch) {
	var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=' + enterSearch + '&key=AIzaSyAXq2v7qYN9ht5Xi8D32LOqiBGpEzg_bWI';
	$.getJSON(url, function(data) {
		$('.results').html(data);


		// render thumbs with id
		$.each(data.items, function(index, element) {
			$('.results').append($('<a>', {
				href: "#",
				class: 'thumb',
				html: $("<img>", {
					src: element.snippet.thumbnails.default.url,
					id: element.id.videoId,
					"data-title": element.snippet.title,
					"data-description": element.snippet.description,
				})
			})
			.click(function(e){
				e.preventDefault();
				console.log('HERE WE GO');
				})
			);
		});

	});
}


