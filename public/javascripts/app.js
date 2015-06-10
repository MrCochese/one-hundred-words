$(function() {
	$('#words').on('change keyup paste', function(e) {
		var $wordcount = $('#wordcount');
		var $this = $(this);

		var matches = $this.val().match(/\S+/g);

		$wordcount.html(matches ? matches.length : 0);
	});
});

