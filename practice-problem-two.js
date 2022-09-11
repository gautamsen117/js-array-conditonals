// You and your friends Tom, Jane, Peter and John got their final exam results. Your total score is 85, Tom's total score is 66, Jane's total score is 95, Peter's total score is 56 and John's total score is 40. The grading chart is 
/**
 * 80 or above A grade
 * 60 or above B grade
 * 50 or above C grade
 * 40 or above D grade
 * 39 or less => F grade
 */
// Write a program to find your friends grades using if-else.

// var myMarks = 80
// var tomMarks = 60;
// var janeMarks = 50;
// var peterMarks = 40;
// var johnMarks = 39;
// var marks = myMarks;

// if(marks >= 80){
//     console.log('You got A grade');
// }
// else if(marks >= 60){
//     console.log('You got B grade');
// }
// else if(marks >= 50){
//     console.log('You got C grade');
// }
// else if(marks >= 40){
//     console.log('You got D grade');
// }
// else if(marks <= 39){
//     console.log('You got F grade');
// }
// else{
//     console.log('Tumi kono grade ai pao nai');
// }
// console.log(marks);
var myMarks = 85;
var tomMarks = 66;
var janeMarks = 95;
var peterMarks = 56;
var johnMarks = 40;
var marks = myMarks;
if(marks >= 80 && marks <= 100){
    console.log('A Grade');
}
else if(marks >= 60 && marks <= 79){
    console.log('B Grade');
}
else if(marks >= 50 && marks <= 59){
    console.log('C Grade');
}
else if(marks >= 40 && marks <= 49){
    console.log('D Grade');
}
else if(marks <= 39){
    console.log('F grade');
}
else {
    console.log('You are Absent');
}

