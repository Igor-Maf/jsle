function Product(config) {
    var config = config || {};
    
    this.template = '<li><h3><%=title%></h3><span><%=price%></span></li>'; // NEW

    this.appendTo = function(elem) { // NEW
        var parsedTpl = this.template
            .replace('<%=title%>', this.getTitle())
            .replace('<%=price%>', this.getDiscountedPrice());
        
		elem.append(parsedTpl);
    }

	this.getTitle = function() { // NEW
		return config.title;
	}

	this.getDiscountedPrice = function() {
		return config.price - (config.price * config.discount);
	}

	return this;
}

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

	this.getProductsByType = function(type) {
		// Напишите метод самостоятельно. Должен возвращать массив товаров с типом type
	}
    
    this.addProducts = function(products) {
        products.forEach(function(one) {
            storage.push(new Product(one));
        });
    }

	return this;
}

// Создем коллекцию

var collection = new ProductCollection

collection.addProducts([{
    title: 'Шапка ушанка',
    price: 1899,
    discount: 0.10,
    type: 'expensive'
}, {
    title: 'Валенки',
    price: 399,
    discount: 0.10,
    type: 'cheap'
}, {
    title: 'Варежки',
    price: 199,
    discount: 0.10,
    type: 'cheap'
}])

collection.appendTo($('body'));