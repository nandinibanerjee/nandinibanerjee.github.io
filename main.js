// Image switcher code

var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/Cisco_Blue-RGB_31px.png') {
      myImage.setAttribute ('src','Blue_Duotone_Gradient-RGB_31px.png');
	} else {
	  myImage.setAttribute ('src','images/Cisco_Blue-RGB_31px.png');
	}
}

// Personalized welcome message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'JS is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'JS is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}