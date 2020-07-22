//Functions
   function add(a,b)
   {
       console.log(a+b);
   }

   add(2,3)
    5

   function add(a,b)
   {
       return a+b;
   }
undefined
add(2,3)
5

function isEven(input)
{
    if(input%2==0)
    {
        out=`number ${input} is even .`
    }
    else{
        out=`number ${input} is odd .`
    }
    return out;
}

isEven(20)
"number 20 is even ."
isEven(29)
"number 29 is odd ."


////Method////////
Method=function assigned to variable
 var sub=function(a,b)
 {
     return a-b;
 }

 sub(4,2)
2
sub(4,20)
-16



//Arrow function es6///
 let z=(a,b) => { return a+b }
 z(2,3)
5
