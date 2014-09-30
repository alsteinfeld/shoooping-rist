/* Features List:

- One click to cross out the list, list item moves to the bottem
- One click to uncross the list
- Click the x image to remove the list item completely, item fades from screen
- Once item added, can be toggled on and off

Hint: .val() and .prepend() or .append()

*/

/* current problem, reading source code for 'on' element, see the difference between using 'click' method */

$(document).ready( function() {
	$('.list-input').submit( function (event) {
		var listItem = $('.textinput').val();
		var $newListItem = $('<li><ul class="list-row"><li class="list-row-text">' + listItem + '</li><img src="http://www.worldstores.co.uk/c/images/sticky_signup/close-button.gif"></ul></li>');
		$('.list-output').append ($newListItem);
		event.preventDefault();
		$('.textinput').val('');
	});
	$('.list-row-text').on('click', function() {
		$(this).toggleClass('cross');
		console.log('click');
	});
	$('.list-row-x').on('click', function() {
		$(this).parent().addClass('remove');
	});
});