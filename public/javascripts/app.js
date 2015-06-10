$(function() {
	$('#words').on('change keyup paste', function(e) {
		$wordcount = $('#wordcount');
		$this = $(this);

		var count = $(this).val().match(/\W/g).length;

		$wordcount.html(count);
	});
});

