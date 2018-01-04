$(function() {
	"use strict";

	function init() {
		console.time("loop 1");
		let count = 2000;

		for(let i = 0; i < count; i++) {
			let el = $("<div>");

			el.data("key", i); 
			el.appendTo("#output");
		}
		console.timeEnd("loop 1");

		console.time("loop 2");
		// console.profile();
		let el = $("#output div");

		for(let i = 0, l = el.length; i < l; i++)
			if(el.eq(i).data("key") % 2 == 0)
				el.eq(i).css("background-color", "blue");

		// console.profileEnd();
		console.timeEnd("loop 2");
	}

	function changeColor() {
		$(this).css("background-color", "red");
	}

	$("#create").on("click", init);

	$(document).on("mouseover", "#output div", changeColor);
});