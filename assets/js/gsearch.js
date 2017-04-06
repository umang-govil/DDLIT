$(document).ready(function(){

$('#submitbtn').click(function(){

var name = $('#name').val().replace(/ /g, '+');;
var season = $('#season').val().replace(/ /g, '+');;
var finalstring = name + '+' + season;
var $objects = $('#objects');
$('#objects').empty();
	$.ajax({
		type: 'GET',
		url: 'https://www.googleapis.com/customsearch/v1?q='+finalstring+'&cx=006715744843082256873%3A6na9rtes4g0&num=10&key=AIzaSyAZ0hToenSx7Rk0o_hVIOKFdNaBbq1G7ew',
		success: function(objects) {
			console.log('success',objects);
			$.each(objects.items, function(i, object){
				$objects.append('<li><a href="'+ ''+object.link+'">'+object.link+'</a></li>');
			});
		}
		});
	});
});

