// first, I will add static HTML/CSS with a sample movie title and rating
// then, i will invoke a function when an input and selection is made(event handler) that appends the users input information to the page
// with that function invoked, I will also be deleting the previous input information, clearing it out


$('#rating').on('change', newMov);

function newMov () {
	let mov = $('#film').val();
	let rate = $('#rating').val();

	if(mov) {
		$('#results').append('<div class="mov"><h2>' + 'Film:' + mov  + '</h2></div> ' + '<div class="mov"><h2>'+ 'Rating:'+ ' ' + rate + '</h2></div>');
	}
}
