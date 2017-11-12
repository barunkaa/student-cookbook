function switchMode() {
	var ingredients = document.getElementsByClassName("ingredients")[0];
	var method = document.getElementsByClassName("method")[0];

	if (ingredients.style.display == "none") {
		method.style.display = "none";
		ingredients.style.display = "inherit";
	} else if (method.style.display == "none") {
		ingredients.style.display = "none";
		method.style.display = "inherit";
	}
}

window.onload = function() {
	var method = document.getElementsByClassName("method")[0];
	method.style.display = "none";
};