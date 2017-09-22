
//When the user selects rsvp (class = 'rsvpbutton') in the nav
//open up the modal (#modal)//
// allow them to close modal by clicking the X

$('.rsvpbutton').on('click', function() {
	$('.modal-content').fadeIn(300);
  $('.modal').fadeIn(300);
  console.log('test for show');
});

$('.submit-button').on('click', function() {
  $('.modal-content').fadeOut(300);
  $('.modal').fadeOut(300);
  console.log('test for hide');
});

$('.close').on('click', function() {
  $('.modal-content').fadeOut(300);
  $('.modal').fadeOut(300);
  console.log('test for hide 2');
});

///When the user select submit on the input form
//show an error message if
///email has does not have @ or . Do not submit form and show error
///If person has not selected a checkbox  Do not submit form and show error
///If a person has not selected a dropdown do not submit form and show error//
