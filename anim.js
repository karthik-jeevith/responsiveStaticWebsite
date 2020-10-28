//java script 
//alert("connected");

var vid = document.querySelector(".navbar-inverse .navbar-brand"); //class name is important

vid.addEventListener("mouseover",function(){
	vid.style.color = "#8fffd6";
});

vid.addEventListener("mouseout",function(){
	//alert("mouseover");
	vid.style.color = "white";
});




var vid1 = document.querySelector(".navbar-inverse .navbar-nav>li>a");
vid1.addEventListener("mouseover",function(){
	vid1.style.color = "#8fffd6";
});

vid1.addEventListener("mouseout",function(){
	//alert("mouseover");
	vid1.style.color = "white";
});



