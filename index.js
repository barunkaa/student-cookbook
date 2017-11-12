var images = [];
var index = 0;

images[0] = "img/frontpage1.jpg";
images[1] = "img/frontpage2.jpg";
images[2] = "img/frontpage3.jpg";

window.onload = function() {
	changeImage();
};

function changeImage() {
	var img = document.getElementById("image");
	img.src = images[index];
	index++;

	if (index >= images.length){
		index = 0;
	}
	setTimeout("changeImage()", 3000);
}