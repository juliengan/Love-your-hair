function showNormal(){
	document.getElementById("Oily").style.display = "none";
    document.getElementById("Dry").style.display = "none";
    document.getElementById("Combination skin").style.display = "none";
    document.getElementById("Normal").style.display = "block";
}

function showDry(){
    document.getElementById("Oily").style.display = "none";
    document.getElementById("Dry").style.display = "block";
    document.getElementById("Combination skin").style.display = "none";
    document.getElementById("Normal").style.display = "none";
}
	

function showOily(){
	document.getElementById("Oily").style.display = "block";
    document.getElementById("Dry").style.display = "none";
    document.getElementById("Combination skin").style.display = "none";
    document.getElementById("Normal").style.display = "none";
}

function showCombinationskin(){
	document.getElementById("Oily").style.display = "none";
    document.getElementById("Dry").style.display = "none";
    document.getElementById("Combination skin").style.display = "block";
    document.getElementById("Normal").style.display = "none";
}