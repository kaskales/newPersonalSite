
function changeBackground() {
        document.body.style.backgroundImage = 'url(images/pittsburghg.jpg)';

    }

var slider = document.getElementById("myRange");
var output = document.getElementById("year");
output.innerHTML = "Slide to view timeline"; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
	if(this.value <20){
		output.innerHTML = 2016;
		document.body.style.backgroundImage = 'url(images/pittsburghg.jpg)';
		document.getElementById("name").style.color = "black";
	}else if(this.value < 40){
 		output.innerHTML = 2017;
 		document.body.style.backgroundImage = 'url(images/baltimore1g.jpg)';
 		document.getElementById("name").style.color = "white";
	}
	else if( this.value < 60){
		output.innerHTML = 2018;
		document.body.style.backgroundImage = 'url(images/brusselsg.jpg)';
		document.getElementById("name").style.color = "white";
	}
	else if(this.value < 80){
		output.innerHTML = 2019;
		document.body.style.backgroundImage = 'url(images/brussels1g.jpg)';
		document.getElementById("name").style.color = "black";
	}else{
		output.innerHTML = 2020;	
		document.body.style.backgroundImage = 'url(images/berlin1g.jpg)';
		document.getElementById("name").style.color = "white";
	}
	
} 

