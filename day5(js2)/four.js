//String literals
//Template literals
//es6
var moviename="sye"
var movierating=4.5
var movielanguage="telugu"
var output="moviename is"+moviename+"movierating is"+movierating+"movielanguage is"+movielanguage+"."

output
"moviename is sye movierating is 4.5 movielanguage is telugu."
var result=`moviename is ${moviename} movierating is ${movierating} movielanguage is ${movielanguage} .`
undefined
result
"moviename is sye movierating is 4.5 movielanguage is telugu ."




//var,Let,const

var>we ca redeclare and reassign

var a=10
undefined
a
10
var a=19
undefined
a
19

Let>we cannnot redeclare but we can reassign










const>cannot redeclare and cannot reassign

const u=1
undefined
u
1
u=9
VM1548:1 Uncaught TypeError: Assignment to constant variable.