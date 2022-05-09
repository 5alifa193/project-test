// // 1:
// var char =Number( prompt('please enter a number...')  );
// alert('the number you typed is: ' + char)


// // 2:
// var char = Number (  prompt('please enter a number that can be divided by 3 or 4...')  );
// if(char%4==0 && char%3==0){
//     alert('yes')
// }
// else{
//     alert('no')
// }

// // 3:
// var char1 = prompt('please insert first number...');
// var char2 = prompt('please insert second number...');


// if(char1>char2){
//     alert('max number is: ' + char1)
// }
// else if(char2>char1){
//     alert('max number is : ' + char2)
// }
// else{
//     alert('y3am number y3am number!')
// }

// // 4:
// var char = Number(  prompt('please enter integer number... (cannot be a zero!)')   )

// if (char>0){
//     alert('Positive!')
// }
// else if (char<0){
//     alert('Negative!')-10
// }
// else if (char===0){
//     alert('hnhzr b2a ?? m4 2olna mynf34 zero ??! -.-')
// }
// else{
//     alert('try again...')
// }

// // 5:
// var char1 = Number ( prompt('please enter first number...')    );
// var char2 = Number ( prompt('please enter second number (cannot be same number as first or third!)...')    );
// var char3 = Number ( prompt('please enter third number (cannot tbe same number as first or second!1)...')    );

// if(char1>char2 && char1>char3 && char2<char1 && char2<char3){
//     alert('max number is: ' + char1);
//     alert('min number is: ' + char2);
// }
// else if(char1>char2 && char1>char3 && char3<char1 && char3<char2){
//     alert('max number is: ' + char1);
//     alert('min number is: ' + char3);
// }
// else if(char2>char3 && char2>char1 && char3<char2 && char3<char1){
//     alert('max number is: ' + char2);
//     alert('min number is: ' + char3);
// }
// else if(char2>char3 && char2>char3 && char1<char2 && char1<char3){
//     alert('max number is: ' + char2);
//     alert('min number is: ' + char1);
// }
// else if(char3>char1 && char3>char2 && char1<char2 && char1<char3){
//     alert('max number is: ' + char3);
//     alert('min number is: ' + char1);
// }
// else if(char3>char1 && char3>char2 && char2<char1 && char2<char3){
//     alert('max number is: ' + char3);
//     alert('min number is: ' + char2);
// }
// else{
//     alert('try again...')
// }

// // 6:
// var char = Number( prompt('please enter a Number...')   );

// if (char%2==0){
//     alert('Even number.')
// }
// else if (char%2==1){
//     alert('Odd number.')
// }
// else{
//     alert('try again...')
// }

// // 7:
// var char = prompt('please enter a vowel character... (a,e,i,o,u)')

// if (char=='a' || char=='e'|| char=='i'|| char=='o'|| char=='u'){
//     alert('vowel.')
// }
// else if (char=='A' || char=='E'|| char=='I'|| char=='O'|| char=='U'){
//     alert('vowel.')
// }
// else if (char=='b' || char=='c'|| char=='d'|| char=='f'|| char=='g' || char=='h' || char=='j' || char=='k' || char=='l' || char=='m' || char=='n' || char=='p' || char=='q' || char=='r' || char=='s' || char=='t' || char=='v' || char=='w' || char=='x' || char=='y' || char=='z'){
//     alert('Consonant')
// }
// else if (char=='B' || char=='C'|| char=='D'|| char=='F'|| char=='G' || char=='H' || char=='J' || char=='K' || char=='L' || char=='M' || char=='N' || char=='P' || char=='Q' || char=='R' || char=='S' || char=='T' || char=='V' || char=='W' || char=='X' || char=='Y' || char=='Z'){
//     alert('Consonant')
// }
// else{
//     alert("ma 2olna vowel!")
// }


// 9:


// var char = prompt ('please insert a number...');
// for(var x=1 ; x<=char ; x++){
//     alert(x);
// }


// 10:
// var char = prompt ('please insert a number...');

// for(var x=1 ; x<=12 ; x++){
//     alert(x*char)
// }

// 11:
// var char = prompt ('please insert a number...');
// for(var x=2 ; x<=char ; x+=2){
//     alert(x);
// }

// 12:
// var char1 =Number( prompt ('please enter the base number...') );
// var char2 = Number( prompt ('please enter the power number...') );
// alert(char1**char2);


//12:
// var sub1 = Number ( prompt('please enter first subject degree....'));
// var sub2 = Number ( prompt('please enter second subject degree....'));
// var sub3 = Number ( prompt('please enter third subject degree....'));
// var sub4 = Number ( prompt('please enter fourth subject degree....'));
// var sub5 = Number ( prompt('please enter fivth subject degree....'));
// var total = (sub1 + sub2+ sub3 + sub4 + sub5 );

// alert (total);
// alert (total / 5);
// alert (total / 500 * 100 + '%');

// 13:
// var char = Number( prompt('Enter month number..1~12')   )
// if(char===1){
//     alert('january : days = 31')
// }
// else if(char===2){
//     alert('february : days = 28')
// }
// else if(char===3){
//     alert('march : days = 31')
// }
// else if(char===4){
//     alert('April : days = 30')
// }
// else if(char===5){
//     alert('May : days = 31')
// }
// else if(char===6){
//     alert('June : days = 30')
// }
// else if(char===7){
//     alert('July : days = 31')
// }
// else if(char===8){
//     alert('August : days = 31')
// }
// else if(char===9){
//     alert('September : days = 30')
// }
// else if(char===10){
//     alert('October : days = 31')
// }
// else if(char===11){
//     alert('November : days = 30')
// }
// else if(char===12){
//     alert('December : days = 31')
// }
// else{
//     alert ('please put a number between 1-12!')
// }




// 14:
// var phy = Number ( prompt('Enter physics mark..'));
// var chem = Number ( prompt('Enter chemestry mark..'));
// var bio = Number ( prompt('Enter biography mark..'));
// var math = Number ( prompt('Enter mathematics mark..'));
// var comp = Number ( prompt('Enter computer mark..'));
// var percentage = ((phy + chem + bio + math + comp) / (500) * (100));

// alert(percentage +'%')
// if(percentage>=90){
//     alert('Grad : A')
// }
// else if(percentage>=80){
//     alert('Grad : B')
// }
// else if(percentage>=70){
//     alert('Grad : C')
// }
// else if(percentage>=50){
//     alert('Grad : D')
// }
// else if(percentage>=40){
//     alert('Grad : E')
// }
// else if(percentage<80){
//     alert('Grad : F')
// }
// else{
//     alert('try again...')
// }


// 15:
// var char = Number( prompt('Enter month number .. 1~12'))

// switch(char){
//     case 1:
//         alert('january : Days 31')
//         break;
//     case 2:
//         alert('Fabruary : Days 28')
//         break;
//     case 3:
//         alert('March : Days 31')
//         break;
//     case 4:
//         alert('April : Days 30')
//         break;
//     case 5:
//         alert('may : Days 31')
//         break;
//     case 6:
//         alert('june : Days 30')
//         break;
//     case 7:
//         alert('july : Days 31')
//         break;
//     case 8:
//         alert('August : Days 31')
//         break;
//     case 9:
//         alert('September : Days 30')
//         break;
//     case 10:
//         alert('October : Days 31')
//         break;
//     case 11:
//         alert('November : Days 30')
//         break;
//     case 12:
//         alert('December : Days 31')
//         break;
//     default:
//         alert ('try again...')
// }


// 16:
// var char = prompt('Enter a Vowel or Consonant ....')

// switch (true){
//     case char=='o' || char=='e' || char=='u' || char=='i' || char=='a':
//         alert('Vowel.')
//         break;
//     case char=='O' || char=='E' || char=='U' || char=='I' || char=='A':
//         alert('Vowel.')
//         break;
//     case char=='b' || char=='c'|| char=='d'|| char=='f'|| char=='g' || char=='h' || char=='j' || char=='k' || char=='l' || char=='m' || char=='n' || char=='p' || char=='q' || char=='r' || char=='s' || char=='t' || char=='v' || char=='w' || char=='x' || char=='y' || char=='z':
//         alert('Consonant.')
//         break;
//     case char=='B' || char=='C'|| char=='D'|| char=='F'|| char=='G' || char=='H' || char=='J' || char=='K' || char=='L' || char=='M' || char=='N' || char=='P' || char=='Q' || char=='R' || char=='S' || char=='T' || char=='V' || char=='W' || char=='X' || char=='Y' || char=='Z':
//         alert('Consonant.')
//         break;
//     default:
//         alert('try again..')
// }

// 17:
// var char1 = Number(prompt('Enter first number...'))
// var char2 = Number(prompt('Enter second number...'))


// switch(true){
//     case char1 > char2:
//         alert(char1 + ' > ' + char2);
//         break;
//     case char1 < char2:
//         alert(char1 + ' < ' + char2);
//         break;
//     default:
//         alert('try again..')    
// }


// 18:
// var char = Number(prompt('Enter a number to check if even or odd..'))

// switch (true){
//     case char % 2 ==0:
//         alert('Even');
//         break;
//     case char % 2 ==1:
//         alert ('Odd');
//         break;
//     default:
//         alert('try again..')
// }

// 19:
// var char = Number(prompt('Enter a number to check if positive , negative or zero..'))


// switch (true){
//     case char ===0:
//         alert('zero.');
//         break;
//     case char > 0:
//         alert('Positve.');
//         break;
//     case char <0:
//         alert ('Negative');
//         break;
//     default:
//         alert('try again..')
// }

// 20:
// var char1 = Number(prompt('Enter first number..'));
// var operator = prompt('Enter an operator (+ , - , / , *)');
// var char2 = Number(prompt('Enter second number..'));

// switch (true){
//     case operator === '+':
//         alert(char1+char2);
//         break;
//     case operator === '-':
//         alert(char1-char2);
//         break;
//     case operator === '/':
//         alert(char1/char2);
//         break;
//     case operator === '*':
//         alert(char1*char2);
//         break;
//     default:
//         alert('try again..')
// }




