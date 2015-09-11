function ProductCollection(config) {
    var config = config,
	    storage = [],
	    template = '<ul class="product"></ul>';

	this.add = function(product) {
		storage.push(product);
	}

	this.appendTo = function(elem) {
		var products = $(template);
		storage.forEach(function(one) {
			one.appendTo(products);
		});

		elem.append(products);
	}

	// this.getProductsByType = function(type) {
	// 	var productsByType = $(template);

	// 	storage.forEach(function(productItem) {
	// 		if (productItem.getType === type)
	// 			productItem.appendTo(productsByType);
	// 	});

	// 	$('body').append(productsByType);
	// }
    
    this.addProducts = function(products) {
        products.forEach(function(one) {
            storage.push(new Product(one));
        });

        console.log(storage);
    }

	return this;
}