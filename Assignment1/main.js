// (1)
let string = "123";
let num = Number(string);
let result = num + 7;
// console.log(result);
//------------------------------------------------------------------------------------------

//(2)
let num1 = 0 ; 
if(num1){
    console.log("valid")
}else{
    console.log("invalid");
    
}
// -------------------------------------------------------------------------------------

//(3)
for(var i =1 ; i<=10 ; i++){
    if(i%2==0){
        continue
    }else{
        console.log(i)
    }
}
//-------------------------------------------------------------------------------------

//(4)
const arr1 = [1,2,3,4,5];
const res = arr1.filter((ele)=>{
    return ele%2==0
})
console.log({res})
//-------------------------------------------------------------------------------------

//(5)
const arr2 = [1,2,3]
const arr3 = [4,5,6]
const res1 = [...arr2 ,...arr3];
console.log(res1);
//-------------------------------------------------------------------------------------

//(6)
let numOfWeek =3 ;
switch(numOfWeek){
    case 1:
        return console.log("Sunday");
        break;
    case 2 :
        return console.log("Monday");
        break;
    case 3 :
        return console.log("Tuesday");
        break;
    case 4 :
        return console.log("Wednesday");
        break;
    case 5:
        return console.log("Thurday");
        break;
    case 6:
        return console.log("Friday");
        break;
    case 7 :
        return console.log("Saturday");
        break;
    default :
        console.log("invalid input")
        break;
}
//-------------------------------------------------------------------------------------

//(7)
const arr4 = ["a" ,"ab" , "abc"];
const res2 =arr4.map((ele)=>{
    return ele.length
})
console.log(res2);
//-------------------------------------------------------------------------------------

//(8)
function checkDivisible(num){
    if(num%3==0 && num%5==0){
        console.log("Divisible by both");
        
    }else if(num%3==0){
        console.log("Divisible by 3 only");
    }else if(num%5==0){
        console.log("Divisible by 5 only");
    }else{
        console.log("Not divisible by anyone");
        
    }
}
checkDivisible(15)
//-------------------------------------------------------------------------------------

//(9)
const squereOfNumber = (num)=>{
    return num**2
}
const res5 = squereOfNumber(5)
console.log(res5);
//-------------------------------------------------------------------------------------

//(10)

const user ={name:"John" , age:25}
function destructs (user){
    const{name , age} = user
    return `${name} is ${age} years old`;
}
destructs(user)
//-------------------------------------------------------------------------------------

//(11)
function sum (...arr){
    let sum =0;
    for(var i =0 ; i<arr.length ; i++){
        sum += arr[i];
    }
    return sum
}
console.log("the summation is " + sum(1,2,3,4,5,6,7,8,9));
//-------------------------------------------------------------------------------------

//(12)
function succ (){
    return new Promise (function(reslove , reject){
        setTimeout(()=>{
            console.log("Success");
            reslove();
        },3000)
    })
}
succ()
//-------------------------------------------------------------------------------------
//(13)

function findLargestNumber(arr){
    let largest = arr[0];
    for(var i =0 ; i<arr.length ; i++){
        if(arr[i]>largest){
            largest = arr[i]
        }
    }
    return largest
}
const arr5 = [1,3,7,2,4]
let result3=findLargestNumber(arr5)
console.log({result3});
//-------------------------------------------------------------------------------------

//(14)
const user2 ={name:"John" , age:30}
function returnKeys(user2){
    return Object.keys(user2)
}
console.log(returnKeys(user2));
//-------------------------------------------------------------------------------------
 
//(15)
function splitSpace(s){
    return s.split(" ")
}
let s2 = "The quick brown fox"
console.log(splitSpace(s2));
//-------------------------------------------------------------------------------------


//gaslhglkshglkahg

