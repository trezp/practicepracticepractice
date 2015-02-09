(function(){
	$('button').click(function(){
		var stylesheet = $(this).date('file');
		console.log('stylesheet');
		$('link').attr('href', 'night.css');
	});

})();