//ASSIGNMENT
//CHAP17-20
//QUESTION NO3
for (let i = 1; i <= 10; i++) {
    console.log(i); // Print the number to the console
}
//QUESTION NO5

let fruits =["apple","banana","mango","orange","strawberry"]
 for (let a=1; a<=5; a++)
document.write("element at index 0 is " +fruits[0]+ "<br>")
document.write("element at index 1 is "+fruits[1]+"<br>" )

document.write("element at index 2 is"  +fruits[2] +"<br>" )

document.write("element at index 3 is " +fruits[3] +"<br>" )
document.write("element at index 3 is " +fruits[4] +"<br>" )

//QUESTION NO6
//a.counting
document.write("Counting:")
for (let i=0; i<=15; i++){
    document.write(i+ ""+",")
}
//b. reverse counting

document.write( "<br> <br>" + " Reverse Counting:")
for (let i=15; i>=0; i--){
    document.write(i+ ""+",")
}
//c.even counting

document.write( "<br> <br>" + " Even Counting:")
for (let i=0; i<=20; i+=2){
    document.write(i+ ""+",")
}
//d.odd counting

document.write( "<br> <br>" + " Odd Counting:")

for (let i=1; i<=20; i+=2){
    document.write(i+ ""+",")
}
//series counting
document.write( "<br> <br>" + " Series Counting:")
for (let i=2; i<=20; i+=2){
    document.write(i+ "k"+",")
}


//QUESTION NO7

let things=["cake","apple pie","cookie","chips","patties"];
let userInput=prompt("Welcome to ABC Bakery.what do you want to Sir/Ma'am")
let found = things.includes(userInput);
if (found){
    document.write(userInput + " is available in our Bakery.");

}
else{
    document.write("Sorry, "+ userInput+ " is not available in our Bakery")
}

//QUESTION NO8
let A = [24, 53, 78, 91, 12];
        

let largest = A[0]; 


for (let i = 1; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i]; 
    }
}
document.write('The largest number is: ' + largest) 

//question no9

const B = [24, 53, 78, 91, 12];
let smallest = B[0];

for (let i = 1; i < B.length; i++) {
    if (B[i] < smallest) {
        smallest = B[i]; 
    }
}

// Print the smallest number
console.log('The smallest number is: ' + smallest);

//QUESTION NO10

let start = 1;
let end = 100;

for (let i = start; i <= end; i++) {
    if (i % 5 === 0) {
        console.log(i); 
    }
}

