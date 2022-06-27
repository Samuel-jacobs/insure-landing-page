function openNav() {
	let x = window.matchMedia("(max-width: 768px)");
	function myFunction(x) {
		if (x.matches) {
			document.getElementById("myNav").style.width = "100%";
			//document.body.style.backgroundColor = "green";
		} else {
			//document.body.style.backgroundColor = "blue";
		}
	}
	myFunction(x);
	x.addListener(myFunction);
} 
function closeNav() {
	let x = window.matchMedia("(max-width: 768px)");
	function myFunction(x) {
		if (x.matches) {
			document.getElementById("myNav").style.width = "0%";
			//document.body.style.backgroundColor = "green";
		} else {
			document.getElementById("myNav").style.width = "100%";
			//document.body.style.backgroundColor = "blue";
		}
	}
	myFunction(x);
	x.addListener(myFunction);
} 