/* Объекты в объектах не считаются упорядоченными.
		Для упорядоченности используются массивы в объекте. */

// push or splice properties in object info
var info = {
	"full_name": "Ihor Gevorkyan",
	"title": "Web developer",
	"skills": [
		{ "html": "html5, jade, handlebars" },
		{ "css": "sass, less, stylus" },
		{ "php": "laravel, yii, symfony" },
		{ "js": "jquery, angularjs, typescript" },
		{ "asd": "asd" }
	]
};

info.skills.splice(4, 1); // splice используется только для массивов
/* второй параметр, в этом случае, не обязателен, так как он указывает, сколько элементов еще удалить после удаляемого, в нашем случае, четвертого. 
Если указать (2, 2), то будут удалены объекты с ключем php и второй за ним, с ключем js */

info.skills.push({
	"sql": "mysql, postgresql, sql-lite"
});

console.log("Удален 5-ый объект массива skills (asd) и добавлен объект с ключем sql: ");
console.log(info);

var output = '';

for (var i = 0; i <= info.skills.length; i++) {
	for (key in info.skills[i]) {
		if (info.skills[i].hasOwnProperty(key)) {
			output += '<li><a href="' + info.skills[i][key] + '">' + key + '</a></li>';
		} // checking the key for selected object
	} // for each object
} // for each element in array

var update = document.getElementById('skillsArrayWithObjects');
update.innerHTML = output;




// ------------------- 
// work with object in object info1 using the for function
var info1 = {
	full_name: "Ihor Gevorkyan",
	title: "Web developer",
	skills: {
		"html": "html5, jade, handlebars",
		"css": "sass, less, stylus",
		"php": "laravel, yii, symfony",
		"js": "jquery, angularjs, typescript",
		"asd": "asd"
	}
};

var infoAsString = JSON.stringify(info1); // преобразовывает значение js в строку JSON

var info1 = JSON.parse(infoAsString); // преобразовывает строку JSON в в JavaScript-объект / массив / значение

console.log('Из объекта JS преобразовано в JSON строку и из JSON строки в JS объект: ');
console.log(info1);


var output1 = "";

for(key in info1.skills) {
	if (info1.skills.hasOwnProperty(key)) {
		output1 += '<li><a href="' + info1.skills[key] + '">' + key + '</a></li>';
	} // if the links has the key property, есть ли у каждого субобъекта ключ
} // for...go through each link

var update1 = document.getElementById('skillsObjects');
update1.innerHTML = output1;