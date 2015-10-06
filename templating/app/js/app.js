var $results;
var $minprice;
var $maxprice;
var $model;
var $trim;
var $color;

$(document).ready(function() {
	// cache the results div
	$results = $('#results');

	$minPrice = $('#minPrice');
	$maxPrice = $('#maxPrice');

	models = carSearchModule.getModels();
	trims = carSearchModule.getTrims();
	color = carSearchModule.getColors();
	features = carSearchModule.getFeatures();


	// render model filter
	var modelForm = '<label for="model">Model</label>'
					+ '<select id="model" class="form-control">';
	modelForm += '<option></option>';
	/* for(var i = 0; length = models.length; i < length; i++) {
		modelForm += '<option value="' +  models[i] + '">' +  models[i] + '</option>';		
	} */				
	modelForm += '</select>';

	$('#modelFilter').html(modelForm);
	$model = $('#model');


	// render trim filter
	var trimForm = '<label for="trim">Trim</label>'
				   + '<select id="trim" class="form-control">';
	trimForm += '<option></option>';
	/* for(var i = 0; length = trims.length; i < length; i++) {
		trimForm += '<option value="' +  trims[i] + '">' +  trims[i] + '</option>';		
	} */
	trimForm += '</select>';

	$('#trimFilter').html(trimForm);
	$trim = $('#trim');

	// ...
});