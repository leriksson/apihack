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

				playerURL.attr('src', 'http://www.youtube.com/embed/' + vidId + '?enablejsapi=1&iv_load_policy=3&playerapiid=player_component_4&disablekb=1&wmode=transparent&controls=0&showinfo=0&modestbranding=1&rel=0&autoplay=0&loop=0');
				console.log(playerURL.attr('src'));

				})
			);
		});

	});
}


