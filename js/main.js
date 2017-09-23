
//hamburger menu//

$('.hamburger').on('click', function() {
  $('.nav-drawer').slideToggle(300);
});

//get to thee rsvp modal from rsvp nav//

$('#rsvpbutton').on('click', function(event) {
  event.preventDefault();
	$('.modal-content').fadeIn(300);
  $('.modal').fadeIn(300);
  console.log('test for show');
});

//Submit button on the rsvp modal//


$('.button').on('click', function() {
  $('.modal-content').fadeOut(300);
  $('.modal').fadeOut(300);
  console.log('test for hide');
});

$('.close').on('click', function() {
  $('.modal-content').fadeOut(300);
  $('.modal').fadeOut(300);
  console.log('test for hide');
});

///When the user select submit on the input form
//show an error message if
///email has does not have @ or . Do not submit form and show error
///If person has not selected a checkbox  Do not submit form and show error
///If a person has not selected a dropdown do not submit form and show error//
