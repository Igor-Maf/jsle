(function(window, document, jQuery) {
	console.log("main.js was included!");

    /* function getAllSupportedItems() {
        return $.getJSON("api/data.json").then(function (data) {
            return data.items;
        });
    }

    getAllSupportedItems().done(function (items) {
        console.log(items);
    }); */


	/* var authors = [
		"Ray Jones", 
		"Jeanne Mila", 
		"Jacob Ivenstone", 
		"Lynn Brola", 
		"Noah James", 
		"Maisie Talina"
	];


	var list = "<ul class=\"authors\">";

	for(var i = 0; i < authors.length; i++) {
		if(authors[i].length < 4) {
			list += "<li class=\"authors__men\">" + authors[i] + "</li>";
		} else {
			list += "<li>" + authors[i] + "</li>";
		}
	}

	list += "</ul>";

	$("#authors").html(list); */

})();

$(document).ready(function() {
	var data = {
		name: 'Ray Milligan',
		age: 41
	};

	var rendered = new EJS({
		template: '<h1>Hello <%= name %></h1>'
				  + '<p>It`s greate that you are <strong><%= age %></strong> years old!</p>'
	}).render(data);

	console.log(rendered);

	$('#resultDiv').html(rendered);
});