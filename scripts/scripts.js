jQuery(function($){
	let startInt = 1;
	let tableRowStart = '<tr>';
	let tableRowEnd = '</tr>';
	for (let c = 1; c <= 16; c++){
		$('.container').prepend('<tr class="row"></tr>');
		};
	for (let i = 1; i <= 16; i++) {
			$('tr').closest('.row').append('<td><div class="box ' + i + '"></div></td>')
		};
})