window.onload = function() {
	var image = document.getElementById('image');
	var i = 0;
	
	setTimeout(function() {
		var src = './img/frontpage' + i + '.jpg';
		var url = "url('" . src . "')";
		image.style.backgroundImage = url;
		console.log(i);
		i++;
	}, 5000);
};