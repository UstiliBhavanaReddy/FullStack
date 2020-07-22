var a="bhavana"
var b=a.toUpperCase()
//SLICE

a="hyderabad"
"hyderabad"
a.slice()
"hyderabad"
a.slice(1)
"yderabad"
a.slice(1,2)
"y"
a.slice(2,6)
"dera"
a.slice(1,5)
"yder"
a.slice(3,5)
"er"


a.slice(1,5)
"yder"
a.slice(-1,-3)
""
a.slice(-3,-1)
"ba"

a[0].toUpperCase()+a.slice(1)
"Hyderabad"//if we want only first letter uppercase


//trim
a.trim()
"puppy"
var b="dog  .  "
undefined
b.trim()
"dog  ."
b
"dog  .  "
b.trim().length
6


//replace
var a="I am Bhavana"
undefined
a.replace('Bhavana','Swetha')
"I am Swetha"



//Math
Math.random()
0.253575602572637
Math.random()*10
5.447427805336115
Math.random()*1000
276.97506642908974
Math.random()*10000
5584.684439441867
parseInt(Math.random()*10000)
2468
Math.floor(Math.random()*10000)
9433
Math.round(10000.5)
10001
Math.ceil(10.2)
11

//To generate random number between ranges

Math.floor(Math.random(max-min)+min)
Math.floor(Math.random()*(20-10)+10)
11
 
//toFixed

Math.PI
3.141592653589793
Math.PI.toFixed(2)
"3.14"


Math.E
2.718281828459045
Math.pow(3,2)
9
Math.log(10)
2.302585092994046
