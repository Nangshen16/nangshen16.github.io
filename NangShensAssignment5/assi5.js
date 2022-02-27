console.log("A")

//A.   Temperature Converter using template literals 
let temperature = '33°C';
let temperature1 = '33°F';

 function convertToFahren(){
    temperature1 = (`${temperature} *1.8+32`);


 }
 console.log(temperature1);

 function convertToCelsius(){
    let temperature1 = '33°F';

     temperature=(`(${temperature1}-32)*5/9`)
 }
 console.log(temperature);

// if(temperature1 = (`${temperature} *1.8+32`)){
//     

// }


// let celsiusTempertaure=`Convert ${temperature} into'${temperature1}` ;
// let fahrenheitTempertaure = `Convert ${temperature1} into ${temperature}`
// console.log(celsiusTempertaure);
// console.log(fahrenheitTempertaure);



// console.log(``)
// if (temperature === 'NN°C'){
//     console.log('NN°F');
// } else if(temperature==='NN°F')  {
//     console.log('NN°C')

// } else {
//     console.log()
// }

//B.
//BMI using if/else statement
//print a nice output
console.log('B')
let john ={
    weight:210,
    height:6,

}
let johnBMI = 28.3;
let lucaBMI = 23.9;
if (johnBMI > lucaBMI ){
    console.log(`John's BMI is higher than Luca's BMI `);
} else if (lucaBMI>johnBMI){
    console.log(`Luca's BMI is higher than John's BMI`);
} 

if ( johnBMI > lucaBMI){
    console.log(`John's ${johnBMI} is higher than Luca's ${lucaBMI}`);

} else {
    console.log(`${lucaBMI} is higher than ${johnBMI}` );
} 

console.log('C');

alert('Please enter a number')
if ( user = 0){
    // user=prompt('If user enter 10 ')
    


}
 user=prompt('If user enter 10 ')
 console.log('You win 10 point')
 if(user = 0){
 }
 user = prompt('If user enter 8')
 console.log('You win 8 points')

 if (number=!8 && number!=10 ){
 }
 number = prompt('If the number is not 8 nor 10');
 console.log('NOT MATCHED') 
 
// if (){
//     user=prompt('If user enter 10 ')
// }


// const user='NaN';
// if (user){
    
//     console.log('Please enter a number!')
// }
// console.log(user)
// alert("Please enter a number!")
//  function showResult(){
       
//  }
//  let user = alert('Please enter a number')
//  user = 0;
//      if (user = 10){
//          user=prompt('Please enter 10');
//          console.log('You win 10 points')
        
//      } else if ( user===8){
//          user=prompt('Please enter 8');

//         //  console.log('You win 8 points')
//      }
//      user = prompt('You win 8 points')
// function showResult1(val1, val2, val3, val3, val4, val5, val6){ 

//     const avg1=calAvg(100+103+110)/3;
//     const avg2=calAvg(103+113+112)/3;

//     if(avg1>avg2) return 'team1 win'
//     else return 'team2 win'

// }
// console.log(showResult1(Number(prompt('team1 round1')), prompt('team1 round2'), prompt('team1 round3'), prompt('team2 round1')))

// function showResult(user1, user2, user3){
//     // const user = 10;
//     // const user2 = 8;
//     // const number= 8>0>10;

//     if (user=10) return 'You win 10 points'
// }

     
 
// const user = []
// if (user>[]) {
//     alert ("Please enter a number!");
// }

    // const user = prompt('enter 10');
    // console.log('You win 10 points');
// if (user enters 10){
//     console.log('You win 10 points');
// }
// console.log(showResult(Number(prompt('You win 10 point'))))
// if (user=8){
//     console.log("You win 10 point")
// }

// function showResult(){ 

//     const va1 = prompt('enter team round 1 value')
//     const avg1=(100+103+110)/3;
//     const avg2=(103+113+112)/3;

//     if(avg1>avg2) return 'team1 win'
//     else return 'team2 win'

// }
// console.log(showResult())
console.log('D')

// let team =[Nets, Knicks]
// console.log(team)

// function team(){
//     let team =[Nets, Knicks]
    

// }
// team(Nets, Knicks);

// const teams = [{
//     name: 'Nets',
//     scores: [80,82, 100]


// },
// {
//     name:'Knicks',
//     scores: [80,90, 106]
// }
// ]

// function winner(teams){
//     if (winningTeam.scores < scores){
//         winningTeam ={
//             name: teams.name,
//             scores: scores,
//         };
//     }
//     console.log(winningTeam.scores)
// }
function winningTeam(nets, knicks){
    const netsScores = (80+82+ 100)/3;
    const knicksScore = (80+90+ 106)/3;

    if (netsScores>knicksScore) return 'Nets win'
    else if( netsScores< knicksScore){
        return 'Knicks win'
    } else{
        return 'No team win trophy'

    }
    
}
console.log(winningTeam(Number(prompt('Nets win')), prompt('Knicks win')),prompt('No team wins trophy'))

function winningTeam1(nets, knicks){
    const netsScores1 = (98+110+101)/3;
    const knicksScore1 = (108+92+110)/3;

    if (netsScores1<knicksScore1) return 'Nets win'
    else if(netsScores1>knicksScore1){
        return 'Knicks win'

    }   else{
        return 'No team wins trophy'
    }
}
console.log(winningTeam1(Number(prompt('Nets win')), prompt('Knicks win')), prompt('No team wins trophy'))
