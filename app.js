$(function() {

	// var searchresults = xxx;

	$('form').submit(function() {
		var searchTerm = $('input[name="tags"]').val();
		$('.rainbox').hide();
		youtubeSearch(searchTerm);
	});
	colorBox();
	console.log('goodbye????');

	$('#first').click(function() {
		console.log('button');

	});
});

// color box
function colorBox() {
	// var colors = ["#FFCC00","#006600","#CC0000"];
	// var rand = Math.floor(Math.random()*colors.length);
	// $('.rainbox').css("background-color", colors[rand]);
	// var randomColor = Math.floor(Math.random()*16777215).toString(16);
	// var randomColor = "#" + Math.random().toString(16).slice(2, 8);

	for (var i = 0; i < 20; i++) {
		var randomColor = "#" + Math.random().toString(16).slice(2, 8);

		$('.rainbow').append($('<div>', {
			class: 'rainbox',
		}).css("background-color", randomColor));
	}
}

// buttons functions

function firstbutton(){}

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
					src: element.snippet.thumbnails.medium.url,
				})
			})
			// click a tag changes video and title div
			.click(function(e){
				e.preventDefault();
				var vidTitle = $(this).data('title');
				var vidDescrip = $(this).data('description');
				var vidId = $(this).attr('id');
				var playerURL = $('iframe');
				// $('iframe').nextAll().remove();
				$('.vjs-poster').remove();
				$('.title').text(vidTitle);
				$('.about').text(vidDescrip);


				playerURL.prop('src', 'http://www.youtube.com/embed/' + vidId + '?enablejsapi=1&iv_load_policy=3&playerapiid=player_component_4&disablekb=1&wmode=transparent&controls=0&showinfo=0&modestbranding=1&rel=0&autoplay=0&loop=0');
				console.log(playerURL.attr('src'));

				})
			);
		});

	});
}

// $('iframe').nextAll().remove();
// playerURL.attr('src', 'http://www.youtube.com/embed/' + vidId + '?autohide=1&enablejsapi=1&origin=http://leriksson.github.io/apihack/index.html');


