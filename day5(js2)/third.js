//Date


Date()
"Fri Jul 17 2020 22:24:10 GMT+0530 (India Standard Time)"
var date=new Date()
undefined
date
Fri Jul 17 2020 22:34:13 GMT+0530 (India Standard Time)
date.getDate
ƒ getDate() { [native code] }
date.getDate()
17
date.getMonth()
6
date.getFullYear()
2020
date.getHours()
22
date.getDay()
5
date.getMinutes()
34


//switch
var date=new Date()
var a=date.getDay()
switch(a)
{
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
     case 2:
         console.log("Tuesday");
         break;
         case 3:
            console.log("Wednesday");
            break;
            case 4:
        console.log("Thursday");
        break;

case 5:
        console.log("Friday");
        break;
case 6:
console.log("Saturday");
break;
   default:
       console.log("nothing");
       break;
    

}