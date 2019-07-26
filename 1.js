/* 1. Write a function which receives an array and a number as arguments and returns a new array
from the elements of the given array which are larger than the given number.*/


function arrayMoreGivenNumber(arr, x){
let arr;
let arrNew = [];
	for (let i = 0; i < arr.length; i++)
		if (arr[i]>x){
		arrNew.push(arr[i]);
		}
		if (arrNew.length!==0)
		return arrNew;
		else
		return "Such values don't exist.";
}
console.log(arrayMoreGivenNumber([10, 25, 16, -5, 30, 15, 24], 16));
console.log(arrayMoreGivenNumber([1,1,2,-3,0,8,4,0], 9));


/* 2. Write a function, which receives two numbers as arguments and finds all numbers between
them such that each digit of the number is even. The numbers obtained should be printed in a
comma-separated sequence on a single line.*/

function evenNumber(x){

 let str;
    str=""+x;

	for( let i=0; i < str.length; i++){

			if( str[i]%2!==0 ){

			return "false";
			}

	}
			return "true"; 
}

function evenNumbersBetweenGivens(num1,num2){
let arr=[];
	
	for (let i=num1; i<=num2; i++){
		if (evenNumber(i)!=="true")
		continue;
		else
		arr.push(i) ;		
		}
if (arr.length!==0)
return arr;
else 
return "Such number does not exist!";
}
console.log(evenNumbersBetweenGivens(19,42));
console.log(evenNumbersBetweenGivens(99,199));


/* 3. Write a recursive function to determine whether all digits of the number are odd or not*/

function oddNumber(x){
  let str=""+x;
     if ((str.length==1)&&(str%2!==0)){
         return true;
     }
    
     else if ((str.length==1)&&(str%2==0)){
         return false;
     }
    
     else if(str%2==0){
         return false;
     }
     else {
         return(oddNumber(Math.floor(str/10)));
        }
}
            
console.log(oddNumber(4211133));
console.log(oddNumber(7791));
console.log(oddNumber(5));



/* 5. Given an array of numbers which is almost sorted in ascending order. Find the index where sorting
order is violated*/


let count=0;
let i;
function sortedArrNumbers(arr){
 	for (i=0; i < arr.length-1; i++){
			if (arr[i]<arr[i+1]){
			count++;
			}
			else break;
	}
	if (count==arr.length-1){
	return  '-1';
	}	
	else{
	return count;
	}	
     		
 }
			
console.log(sortedArrNumbers([2,12,15,48,64]));
console.log(sortedArrNumbers([-9,-4,-4,3,12,4,5]));







