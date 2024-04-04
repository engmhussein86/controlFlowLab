console.log('running');

let radius = 5;//meters
const PI = 3.1415;
const area = PI * radius * radius;
console.log(`all area = ${area} square meters`);

const eachPlantArea = 0.8;

let starting = 20;

console.log(`Starting plants Area = ${getPlantsArea(eachPlantArea,starting)} square meters`);

// The plants double in number every week.
{
let week1 = 1;//week1

let plantsNumber = getPlantsNumber(week1,starting);
let plantArea = getPlantsArea(eachPlantArea,plantsNumber);
let percentage = (plantArea/area)*100;
console.log(`plantsNumber after one week  =${plantsNumber} , area = ${plantArea} , Percentage = ${percentage}%`);
console.log(`the action should be taken after one week ${predictGrowth(percentage)}`);
}
console.log('--------------------------------------------');
/////////////////////////////////
{
let week2 = 2;//week2

let plantsNumber = getPlantsNumber(week2,starting);
let plantArea = getPlantsArea(eachPlantArea,plantsNumber);
let percentage = (plantArea/area)*100;
console.log(`plantsNumber after two weeks  =${plantsNumber} , area = ${plantArea} , Percentage = ${percentage}%`);
console.log(`the action should be taken after two weeks ${predictGrowth(percentage)}`);
}
console.log('--------------------------------------------');
/////////////////////////////////
{
    let week3 = 3;//week3
    
    let plantsNumber = getPlantsNumber(week3,starting);
    let plantArea = getPlantsArea(eachPlantArea,plantsNumber);
    let percentage = (plantArea/area)*100;
    console.log(`plantsNumber after three weeks  =${plantsNumber} , area = ${plantArea} , Percentage = ${percentage}%`);
    console.log(`the action should be taken after three weeks ${predictGrowth(percentage)}`);
    }



/////////////// functions ////////////////////
function getPlantsArea(eachPlantArea, plantsNumber) {
    return eachPlantArea * plantsNumber;
}
///////////////////////////////////////////////
function getPlantsNumber(weekNumber , plantsNumber) {
    return plantsNumber * (2**weekNumber);
}
///////////////////////////////////////////////
function predictGrowth(percentage){
    let msg;
    if(percentage >= 80){
        msg = "Pruned";
    }
    else if(percentage >= 50 && percentage < 80){
        msg = "Monitored";
    }
    else if(percentage < 50){
        msg = "Planted";
    }

    return msg;
}


