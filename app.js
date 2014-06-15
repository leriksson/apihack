$(function() {

	// var searchresults = xxx;

	$('form').submit(function() {
		var searchTerm = $('input[name="tags"]').val();
		// youtubeSearch(searchTerm);
		youtubeSearch(searchTerm);
	});
});

// render thumbs

// renderThumbs function(data) {
// 	// var cloneImg = $('.results img').clone();
// 	// cloneImg.find('img').attr('src', video.snippet.medium.url);
// 	$('.results').html('boo!');

// }

// AJAX Search to youtube with response going to results

function youtubeSearch(enterSearch) {
	var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=' + enterSearch + '&key=AIzaSyAXq2v7qYN9ht5Xi8D32LOqiBGpEzg_bWI';
	$.getJSON(url, function(data) {
		$('.results').html(data);
		// $('img').attr('src', 'http://i.stack.imgur.com/nGCYr.jpg?s=128&g=1');
		// console.log(data);


		$.each(data.items, function(index, element) {
			$('.results').append($('<img>', {
				src: element.snippet.thumbnails.default.url,
				id: element.id.videoId,
				// data-title: element.snippet.title,
				// data-title: element.snippet.thumbnails.default.url,
			}));
			
			console.log(element.snippet.title);
		});

		// $('#videothumb').attr('src','http://i.stack.imgur.com/nGCYr.jpg?s=128&g=1');
		// $.each(result.items, function(i, item) {
		// 	var video = renderThumbs(item);
		// 	$('.results').append(video);
		});
	}
// $("<img>", { src: thumb })




// {
//  "kind": "youtube#searchListResponse",
//  "etag": "\"QVyS2yjpsZ-tKkk4JvgYeO_YkzY/C446GF5KW8WMPOtl9PnpYO8J0Bw\"",
//  "nextPageToken": "CBQQAA",
//  "pageInfo": {
//   "totalResults": 34464,
//   "resultsPerPage": 20
//  },
//  "items": [
//   {
//    "kind": "youtube#searchResult",
//    "etag": "\"QVyS2yjpsZ-tKkk4JvgYeO_YkzY/R54n82JBWzsZd3CdqAbDkhz7Y7s\"",
//    "id": {
//     "kind": "youtube#video",
//     "videoId": "tkwpQ22cDFs"
//    },
//    "snippet": {
//     "publishedAt": "2013-05-06T16:58:57.000Z",
//     "channelId": "UCtPLtmywFgdQXHjXsuUvpBw",
//     "title": "VES - Vent Enter Search - Colorado Springs Apartment Fire - IRONSandLADDERS",
//     "description": "This is helmet cam footage from Truck 8 in Colorado Springs at a 3 alarm apartment fire with reports of trapped occupants on both floors. This footage has be...",
//     "thumbnails": {
//      "default": {
//       "url": "https://i.ytimg.com/vi/tkwpQ22cDFs/default.jpg"
//      },
//      "medium": {
//       "url": "https://i.ytimg.com/vi/tkwpQ22cDFs/mqdefault.jpg"
//      },
//      "high": {
//       "url": "https://i.ytimg.com/vi/tkwpQ22cDFs/hqdefault.jpg"
//      }
//     },
//     "channelTitle": "IRONSandLADDERS",
//     "liveBroadcastContent": "none"
//    }
//   },