profil = {
	profilePic: "https://scontent.fbeg3-1.fna.fbcdn.net/v/t1.0-9/21686308_10212848242715152_2775860179205193735_n.jpg?oh=f738bbeebb13bdb66d1c36fd3bdcd4ba&oe=5AC5F0AB",
	username: "milica.sun",
	posts: 34,
	followers: 307,
	following: 144,
	firstName: "Milica",
	lastName: "Milosavljevic",
	images: [
		{
			src: "https://instagram.fbeg3-1.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/13694338_327003250967664_735967244_n.jpg",
			heartNumber: 25,
			commentNumber: 0
		},
		{
			src: "https://instagram.fbeg3-1.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/14701339_1827727897458982_7344273499248132096_n.jpg",
			heartNumber: 133,
			commentNumber: 0
		},
		{
			src: "https://instagram.fbeg3-1.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/15101672_384769135197225_1815682323278987264_n.jpg",
			heartNumber: 88,
			commentNumber: 5
		},
		{
			src: "https://instagram.fbeg3-1.fna.fbcdn.net/t51.2885-15/s750x750/sh0.08/e35/15876555_1629964887311239_3823340686732689408_n.jpg",
			heartNumber: 56,
			commentNumber: 2
		},
		{
			src: "https://instagram.fbeg3-1.fna.fbcdn.net/t51.2885-15/s750x750/sh0.08/e35/19932682_287568885049078_6663467255222763520_n.jpg",
			heartNumber: 46,
			commentNumber: 0
		}
	]
}

var profilePic = document.getElementById("profile_pic");
profilePic.src = profil.profilePic;

var username = document.getElementById("username");
username.innerHTML = profil.username;

var posts = document.getElementById("posts");
posts.innerHTML = profil.posts;

var followers = document.getElementById("followers");
followers.innerHTML = profil.followers;

var following = document.getElementById("following");
following.innerHTML = profil.following;

var fullName = document.getElementById("name");
fullName.innerHTML = profil.firstName + " " + profil.lastName;

var profilePicMini = document.getElementById("profile_pic_mini");
profilePicMini.src = profil.profilePic;

var usernamePic = document.getElementById("username_pic");
usernamePic.innerHTML = profil.username;

var images = document.getElementById("images");
for (var i = 0; i < profil.images.length; i+=3) {
	var div = document.createElement("div");
	div.classList.add("images-row");
	for (var j = 0; j < 3; j++) {
		var picDiv = document.createElement("div");
		picDiv.classList.add("image-box");
		div.appendChild(picDiv);
	}
	images.appendChild(div);
}
var imageBox = document.getElementsByClassName("image-box");
k = 0;
for (var i = profil.images.length - 1; i >= 0; i--) {
	var img = document.createElement("img");
	img.classList.add("slicka");
	img.src = profil.images[i].src;	

	var hyperlink = document.createElement("a");
	hyperlink.classList.add("img-link");
	// hyperlink.href = "pic.html";
	// hyperlink.target = "my_iframe";
	hyperlink.appendChild(img);
	hyperlink.src = profil.images[i].src;
	hyperlink.likes = profil.images[i].heartNumber;
	hyperlink.onclick = function() {
		document.getElementById("modal").style.display = "block";
		document.getElementById("img_window").style.backgroundImage = "url(" + this.src + ")";
		document.getElementById("likes_number").innerHTML = this.likes;
	}

	var divHover = document.createElement("div");
	divHover.classList.add("div-hover");

	var heart = document.createElement("div");
	var heartImg = document.createElement("i");
	heartImg.classList.add("fa");
	heartImg.classList.add("fa-heart");
	var heartNumber = document.createElement("span");
	heartNumber.innerHTML = profil.images[i].heartNumber;
	heart.appendChild(heartImg);
	heart.appendChild(heartNumber);
	divHover.appendChild(heart);

	var comment = document.createElement("div");
	var commentImg = document.createElement("i");
	commentImg.classList.add("fa");
	commentImg.classList.add("fa-comment");
	var commentNumber = document.createElement("span");
	commentNumber.innerHTML = profil.images[i].commentNumber;
	comment.appendChild(commentImg);
	comment.appendChild(commentNumber);
	divHover.appendChild(comment);

	hyperlink.appendChild(divHover);
	imageBox[k].appendChild(hyperlink);

	k++;
}

document.getElementById("close").onclick = function() {
	document.getElementById("modal").style.display = "none";
}