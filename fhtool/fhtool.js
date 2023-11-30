// clock
function clock() {
    var day = new Date();
    var h = day.getHours();
    var m = day.getMinutes();
    h = clockNum(h);
    m = clockNum(m);
    document.getElementById("clock").innerHTML = h + ":" + m;
    var t = setTimeout(clock, 1000);
};

function clockNum(c) {
    if (c < 10) { c = "0" + c };
    return c;
};


// setting sliders
var sliderArb = document.getElementById("arbRatio");
var outputArb = document.getElementById("arbOutput");
outputArb.innerHTML = sliderArb.value;
sliderArb.oninput = function() {
    outputArb.innerHTML = this.value;
}

var sliderRebound = document.getElementById("reboundRatio");
var outputRebound = document.getElementById("reboundOutput");
outputRebound.innerHTML = sliderRebound.value;
sliderRebound.oninput = function() {
    outputRebound.innerHTML = this.value;
}

var sliderBump = document.getElementById("bumpRatio");
var outputBump = document.getElementById("bumpOutput");
outputBump.innerHTML = sliderBump.value;
sliderBump.oninput = function() {
    outputBump.innerHTML = this.value;
}

// calculate
const springNumber = 2.8875;

function calculate() {
    //from car info
    let carClass = document.querySelector('input[name = "carClass"]:checked').value;
    let carDrive = document.querySelector('input[name = "driveType"]:checked').value;
    let carBuild = document.querySelector('input[name = "carBuild"]:checked').value;
    //let carPower = document.getElementById('carPower').value;
    //let carTorque = document.getElementById('carTorque').value;
    let carWeight = document.getElementById('carWeight').value;
    let carFront = document.getElementById('carFront').value;
    //let carDispl = document.getElementById('carDisplacement').value;
    //let carTopSpd = document.getElementById('carTopSpeed').value;
    //settings
    let arbRatio = document.getElementById('arbRatio').value;

    //antiroll bars
    let arbMin = 1;
    let arbMax = 65;

    let arbFront = arbMin+(15*carFront/100);
    document.getElementById('arbFront').innerHTML = Math.round(arbFront*10)/10;
    
    let arbRear = arbMax-(15*(100-carFront)/100);
    document.getElementById('arbRear').innerHTML = Math.round(arbRear*10)/10;

    //old formulas
    //let arbFront = (arbRatio/10)*(carFront/100*(arbMax-arbMin))+arbMin;
    //document.getElementById('arbFront').innerHTML = Math.round(arbFront*10)/10;
    
    //let arbRear = (arbRatio/10)*((100-carFront)/100*(arbMax-arbMin))+arbMin;
    //document.getElementById('arbRear').innerHTML = Math.round(arbRear*10)/10;

    //springs
    let frontHeight = document.getElementById('frontHeight').value;
    let rearHeight = document.getElementById('rearHeight').value;
    let avgHeight = (parseFloat(frontHeight)+parseFloat(rearHeight))/2;

    let frontSpring = carFront/100*springNumber/avgHeight*carWeight;
    document.getElementById('frontSpring').innerHTML = Math.round(frontSpring*10)/10;
    
    let rearSpring = (100-carFront)/100*springNumber/avgHeight*carWeight;
    document.getElementById('rearSpring').innerHTML = Math.round(rearSpring*10)/10;

    //damping
    let reboundRatio = document.getElementById('reboundRatio').value;
    let bumpRatio = document.getElementById('bumpRatio').value;
    let reboundMin = 1;
    let reboundMax = 20;
    let bumpMin = 1;
    let bumpMax = 20;
	let reboundCalc;
    switch(carBuild) {
        case "Road":
            reboundCalc = 16;
            break;
        case "Dirt":
            reboundCalc = 24;
            break;
        case "C-C":
            reboundCalc = 20;
            break;
    }

    let fRebound = carFront/100*reboundCalc;
    let rRebound = (100-carFront)/100*reboundCalc;
    document.getElementById('frontRebound').innerHTML = Math.round(fRebound*10)/10;
    document.getElementById('rearRebound').innerHTML = Math.round(rRebound*10)/10;

    let bumpCalc;
    switch(carBuild) {
        case "Road":
            bumpCalc = 6;
            break;
        case "Dirt":
            bumpCalc = 6;
            break;
        case "C-C":
            bumpCalc = 4;
            break;
    }
    let fBump = carFront/100*bumpCalc;
    let rBump = (100-carFront)/100*bumpCalc;
    document.getElementById('frontBump').innerHTML = Math.round(fBump*10)/10;
    document.getElementById('rearBump').innerHTML = Math.round(rBump*10)/10;



    //log
    console.log("Car info values");
    console.log(carClass, carDrive, carBuild, carWeight, carFront, avgHeight);
    console.log(reboundCalc,bumpCalc);
};
