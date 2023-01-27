var coloridvalue;
var chair;


function removeselection() {
    document.getElementById("blue").classList.remove("selected");
    document.getElementById("cyan").classList.remove("selected"); 
    document.getElementById("orange").classList.remove("selected");
    document.getElementById("purple").classList.remove("selected");
    document.getElementById("red").classList.remove("selected");
     document.getElementById("green").classList.remove("selected");
    /* document.getElementById("white").classList.remove("selected");;
    document.getElementById("beige").classList.remove("selected");;
    document.getElementById("scarlet").classList.remove("selected");;
    document.getElementById("gold").classList.remove("selected");;
    document.getElementById("black").classList.remove("selected"); 
    document.getElementById("red2").classList.remove("selected");
    document.getElementById("orange2").classList.remove("selected"); */
    document.getElementById("pink").classList.remove("selected"); 
    document.getElementById("reset").classList.remove("selected");
    document.getElementById("pink2").classList.remove("selected");
};

document.getElementById("pink").addEventListener('click', dressPink);
document.getElementById("orange").addEventListener('click', dressOrange);
document.getElementById("purple").addEventListener('click', dressPurple);
document.getElementById("red").addEventListener('click', dressRed);

document.getElementById("blue").addEventListener('click', bgBlue);
document.getElementById("cyan").addEventListener('click', bgCyan);
document.getElementById("pink2").addEventListener('click', bgPink2);
document.getElementById("green").addEventListener('click', bgGreen);

document.getElementById("reset").addEventListener('click', removeDress);



/*
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
document.getElementById("pink3").addEventListener('mouseover', trainerPink3); */



function dressRed() {
  coloridvalue = "red";
  chair = 'img/dress_' + coloridvalue + '.png';
  document.getElementById("dress").src = chair;
  console.log(chair);
  console.log(coloridvalue);
  removeselection();
  document.getElementById("red").classList.add("selected");
  
};

function dressOrange() {
    coloridvalue = "orange2";
    chair = 'img/dress_' + coloridvalue + '.png';
    document.getElementById("dress").src = chair;
    console.log(chair);
    console.log(coloridvalue);
    removeselection();
    document.getElementById("orange").classList.add("selected");
    
};

function dressPurple() {
    coloridvalue = "purple";
    chair = 'img/dress_' + coloridvalue + '.png';
    document.getElementById("dress").src = chair;
    console.log(chair);
    console.log(coloridvalue);
    removeselection();
    document.getElementById("purple").classList.add("selected");
    
}; 

function dressPink() {
    coloridvalue = "pink";
    chair = 'img/dress_' + coloridvalue + '.png';
    document.getElementById("dress").src = chair;
    console.log(chair);
    console.log(coloridvalue);
    removeselection();
    document.getElementById("pink").classList.add("selected");
    
};
///Background Changers
var bgidvalue;

function bgBlue() {
    removebackground()
    bgidvalue = "blue";
    document.getElementById("bg").classList.add("bg-blue");
    console.log(bgidvalue);
    removeselection();
    document.getElementById("blue").classList.add("selected");
    
};

function bgCyan() {
    removebackground()
    bgidvalue = "cyan";
    document.getElementById("bg").classList.add("bg-cyan");
    console.log(bgidvalue);
    removeselection();
    document.getElementById("cyan").classList.add("selected");
    
};

function bgPink2() {
    removebackground()
    bgidvalue = "pink2";
    document.getElementById("bg").classList.add("bg-pink");
    console.log(bgidvalue);
    removeselection();
    document.getElementById("pink2").classList.add("selected");
    
};

function bgGreen() {
    removebackground()
    bgidvalue = "green";
    document.getElementById("bg").classList.add("bg-green");
    console.log(bgidvalue);
    removeselection();
    document.getElementById("green").classList.add("selected");
    
};

function removeDress() {
    chair = 'img/dress_blank.png';
    document.getElementById("dress").src = chair;
    console.log(chair);
    console.log(coloridvalue);
    removeselection();
    removebackground()
    document.getElementById("reset").classList.add("selected");
    
};


function removebackground(){
    document.getElementById("bg").classList.remove("bg-blue");
    document.getElementById("bg").classList.remove("bg-cyan");
    document.getElementById("bg").classList.remove("bg-pink");
    document.getElementById("bg").classList.remove("bg-green");
}