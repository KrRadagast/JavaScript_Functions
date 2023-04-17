console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdd(count){
    for(i=0;i<count;i++){
        if(i%2!=0){
            console.log(i)
        }
    }
}
printOdd(9);
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkage(userName, age){
    let aboveSixteen="congrats "+userName+", you can drive";
    let belowSixteen="Sorry "+userName+" but you need to wait til you are sixteen";
    if(age>=16){
        console.log(aboveSixteen)
    }else{
        console.log(belowSixteen)
    }
}
checkage("Nicholas", 14);

function coordinates(x,y){
    if(x===0){
        console.log("("+x+","+y+") is on the x-axis");
    }else if(x>0&&y>0){
        console.log("("+x+","+y+") is in Quadrant 1");
    }else if(x<0&&y>0){
        console.log("("+x+","+y+") is in Quadrant 2");
    }else if(x<0&&y<0){
        console.log("("+x+","+y+") is in Quadrant 3");
    }else if(x>0&&y<0){
        console.log("("+x+","+y+") is in Quadrant 4");
    }
}
coordinates(0,5);
coordinates(1,5);
coordinates(-2,5);
coordinates(-2,-5);
coordinates(5,-5);
function triangle(a,b,c){
    if(a+b<=c){
        console.log("invalid triangle");
        return
    }else if(a===b&&b===c){
        console.log("this is an equilateral triangle")
    }else if(a===b||b===c){
        console.log("this is an isosceles triangle")
    }else if(a!=b&&b!=c&&c!=a){
        console.log("This is a scalene triangle")
    }

}
triangle(1,1,2)
triangle(1,2,2)
triangle(2,2,2)
triangle(3,5,2)
function cellPlan(planLimit,day,usage){
    let periodLength=30;
    let remainingData=planLimit-usage;
    let remainingDays=periodLength-day;
    let currentAvg=usage/day;
    let projectedAvg=planLimit/periodLength;
    let projectUsage=remainingDays*currentAvg;
    let dataUsed=0;
    let statusMsg;
    if(currentAvg>projectedAvg){
        statusMsg="Exceeding";
    }else if(usage<planLimit){
        statusMsg="Under";
    }else{
        statusMsg="on track"
    }
    if(statusMsg=="Exceeding"){
        dataUsed=(usage+projectUsage)
    }else{
        dataUsed=usage;
    }
    console.log(`${day} days used, ${remainingDays} days remaining
    Average daily use: ${projectedAvg} GB/day
    You are ${statusMsg} with your plan. your average daily use (${currentAvg} GB/day),
    at this usage, you'll end up using ${dataUsed}
    To stay below your data plan, use no more than ${remainingData/remainingDays} GB/day.`)
}
cellPlan(100,15,56)