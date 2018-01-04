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

collection.addProducts([
	{
		title: 'Мед',
		price: 200,
		discount: 0,
		type: 'eat'
	}
])

$(document).ready(function () {
	collection.appendTo($('body'));
});