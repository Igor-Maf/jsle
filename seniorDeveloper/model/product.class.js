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

	this.getType = function() {
		return config.type;
	}

	return this;
}