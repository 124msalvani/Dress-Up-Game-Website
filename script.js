var coloridvalue;
var chair;


function removeselection() {
    document.getElementById("blue").classList.remove("selected");
    document.getElementById("cyan").classList.remove("selected");
    document.getElementById("orange").classList.remove("selected");
    document.getElementById("purple").classList.remove("selected");
    document.getElementById("red").classList.remove("selected");
    document.getElementById("green").classList.remove("selected");
    document.getElementById("brown").classList.remove("selected");
    document.getElementById("white").classList.remove("selected");;
    document.getElementById("beige").classList.remove("selected");;
    document.getElementById("scarlet").classList.remove("selected");;
    document.getElementById("gold").classList.remove("selected");;
    document.getElementById("black").classList.remove("selected");
    document.getElementById("red2").classList.remove("selected");
    document.getElementById("orange2").classList.remove("selected");
    document.getElementById("pink").classList.remove("selected");
    document.getElementById("pink2").classList.remove("selected");
    document.getElementById("pink3").classList.remove("selected");
};

document.getElementById("pink").addEventListener('onclick', dressPink);
/* document.getElementById("cyan").addEventListener('mouseover', dressCyan);
document.getElementById("orange").addEventListener('mouseover', dressOrange);
document.getElementById("purple").addEventListener('mouseover', dressPurple);*/
document.getElementById("red").addEventListener('onclick', dressRed);
/*document.getElementById("green").addEventListener('mouseover', dressGreen);
document.getElementById("brown").addEventListener('mouseover', dressBrown);

document.getElementById("white").addEventListener('mouseover', legendWhite);
document.getElementById("beige").addEventListener('mouseover', legendBeige);
document.getElementById("scarlet").addEventListener('mouseover', legendScarlet);
document.getElementById("gold").addEventListener('mouseover', legendGold);
document.getElementById("lightblue").addEventListener('mouseover', legendLightblue);
document.getElementById("lime").addEventListener('mouseover', legendLime);

document.getElementById("black").addEventListener('mouseover', trainerBlack);
document.getElementById("red2").addEventListener('mouseover', trainerRed2);
document.getElementById("orange2").addEventListener('mouseover', trainerOrange2);
document.getElementById("pink").addEventListener('mouseover', trainerPink);
document.getElementById("pink2").addEventListener('mouseover', trainerPink2);
document.getElementById("pink3").addEventListener('mouseover', trainerPink3);
/*
document.getElementById("yellow").addEventListener('mouseover', dressYellow);
document.getElementById("pink").addEventListener('mouseover', dressPink);
document.getElementById("beige").addEventListener('mouseover', dressBeige);
*/ 

function dressRed() {
  coloridvalue = "red";
  chair = 'img/dress_' + coloridvalue + '.png';
  document.getElementById("dress").src = chair;
  console.log(chair);
  console.log(coloridvalue);
  removeselection();
  document.getElementById("red").classList.add("selected");
  
};
/*
function dressOrange() {
    coloridvalue = "orange";
    chair = 'img/dress_' + coloridvalue + '.jpg';
    document.getElementById("dress").src = chair;
    console.log(chair);
    console.log(coloridvalue);
    removeselection();
    document.getElementById("orange").classList.add("selected");
    
};

function dressPurple() {
    coloridvalue = "purple";
    chair = 'img/dress_' + coloridvalue + '.jpg';
    document.getElementById("dress").src = chair;
    console.log(chair);
    console.log(coloridvalue);
    removeselection();
    document.getElementById("purple").classList.add("selected");
    
}; */

function dressPink() {
    coloridvalue = "pink";
    chair = 'img/dress_' + coloridvalue + '.png';
    document.getElementById("dress").src = chair;
    console.log(chair);
    console.log(coloridvalue);
    removeselection();
    document.getElementById("pink").classList.add("selected");
    
};