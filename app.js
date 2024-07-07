var h = new Date()
// document.write(h);

// question no 2
var b = h.getMonth();
var c = ["jan","feb","march","april","may","june","july"]
document.write(c[b]);


// question no 3
var d = h.getDay()
alert(d);



// question no 4
var e = ["sun","mon","tues","wed","thurs","fri","sat"]
var f = h.getDay()
if(f===0 || f===6){
    alert("today is funday")
};


// question noo 5
var date = prompt("enter todays date ");
if (date < 15 ){
    alert("First fifteen days of the month")
}else{
    alert("Last days of the month");
}


// question no 6
var g = h.getTime()
document.write(g/1000*60);
// question no 7

var g = newDate("12 31 2002")
document.write(g);

// question no 8
var a = new Date("02 11 2024")
var w = h.getTime()- a.getTime()
alert(Math.floor(w/(1000*60*60*30)) );


// question no 9
 var t = new Date("12 5 2015")
 var r = h.getTime() - t.getTime()
 alert(r/1000);


//  question no 10
 var time = new Date()
 var v = h.getHours() - time.getHours()
 alert(v)

 
// question no 11

var t = h.getFullYear();
var pastYear = t - 100;
alert(pastYear)

// question no 12

var a = new Date().getHours();
if (a < 12) {
  alert("its AM");
} else {
  alert("its PM");
};


// question no 13
var age = prompt("Enter your age")
var x = h.getFullYear() - age;
document.write(x);


// quesstion no 14

document.write("<h2>K-Electric Bill</h2>");
var username = prompt("enter your name ");
document.write("customer name : " + username + "<br>");
var month = prompt("enter current month ");
document.write("month name : " + month + "<br>");
var units = +prompt("enter number of units ");
document.write("number of units  : " + units + "<br>");
var charge = +prompt("enter charges per units ");
document.write("charges per units  : " + charge + "<br>");
var before = (units * charge).toFixed(2);
document.write("Net Amount Payable (within Due Date) : " + before + "<br>");
document.write("late payement surcharge : " + 500 + "<br>");
var res = Number(before);
document.write("after due date : ", res + 500);