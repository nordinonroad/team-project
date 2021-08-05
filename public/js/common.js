$(document).ready(function() {

	$(".ajax-form").submit(function(e) {
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			window.location.replace('http://silver-company.ru/');
			$("#form").trigger("reset");
		});
		return false;
	});
	
});