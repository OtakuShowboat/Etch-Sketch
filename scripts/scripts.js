jQuery(function($){
	let startInt = 16;
	let tableRowStart = '<tr>';
	let tableRowEnd = '</tr>';
	$('#reset').on('click', function() {
		let startInt = parseInt(prompt("What row size do you want? Input one number. Default 16.", "16"));
		$('tr').remove();
		
		for (let c = 1; c <= startInt; c++){
		$('.container').prepend('<tr class="row"></tr>');
		};
		for (let i = 1; i <= startInt; i++) {
			$('tr').closest('.row').append('<td><div class="box ' + i + '"></div></td>')
		}
		$('.box').on('mouseenter', function(){
				 
		$(this).addClass('active');
				 
	});
	});
	for (let c = 1; c <= startInt; c++){
		$('.container').prepend('<tr class="row"></tr>');
		};
	for (let i = 1; i <= startInt; i++) {
			$('tr').closest('.row').append('<td><div class="box ' + i + '"></div></td>')
		};
	$('.box').on('mouseenter', function(){
				 
		$(this).addClass('active');
				 
	});
	
})

