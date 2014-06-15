$(function() {

	// var searchresults = xxx;

	$('form').submit(function() {
		var searchTerm = $('input[name="tags"]').val();
		youtubeSearch(searchTerm);
	});

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
				id: element.id.videoId,
				"data-title": element.snippet.title,
				"data-description": element.snippet.description,
				html: $("<img>", {
					src: element.snippet.thumbnails.default.url,
				})
			})
			// click a tag changes video and title div
			.click(function(e){
				e.preventDefault();
				var vidTitle = $(this).data('title');
				var vidDescrip = $(this).data('description');
				var vidId = $(this).attr('id');
				var playerURL = $('iframe');
				$('iframe').nextAll().remove();

				playerURL.attr('src', 'http://www.youtube.com/embed/' + vidId + '?autohide=1&enablejsapi=1&origin=http://leriksson.github.io/apihack/index.html');
				console.log(playerURL.attr('src'));

				})
			);
		});

	});
}

// $('iframe').nextAll().remove();
// playerURL.attr('src', 'http://www.youtube.com/embed/' + vidId + '?autohide=1&enablejsapi=1&origin=http://leriksson.github.io/apihack/index.html');


