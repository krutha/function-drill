//1st pblm
 function helloWorld(){
 console.log("Hello,World!")
}
  helloWorld();
 
//2nd prblm
function printName(Cameron){
    console.log("Cameron")
  }
  printName();
   //prblm3
 function greeting(name){
  console.log(`hello,${name}`)
}
 greeting("Cameron")

//prblm 4 
function add (num1,num2){
    return num1 +num2
   
   }
    let sum = add (2,3);
    console.log(sum);

    //5th
    function nameCheck(name){
        if( name === "steven"){
          return "what is up steven?"
        }else if ( name === "Bryan" ){
          return "hey Bryan"
        }else{
          return `coolname,${name}`
        }
      } 
      let nameGreeting = nameCheck('josh')
      console.log(nameGreeting)

//6th
function faveColorFinder(color){
    if (color === "red"){
      return "red is a great color"
    }else if (color === "green"){
      return 'green is a solid favorite color'
    }else if (color === "black"){
      return 'so trendy'
    } else {
      return "you need to evaluate your favorite color choice"
    }
  }
  let colorRating = faveColorFinder('green')
 console.log(colorRating)
 //7th
 let namesArr = ['Cameron', 'Riley', 'Eric', 'Brenna', 'Karl']

function printAllNames(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(names[i])
  }
}

printAllNames(namesArr)
console.log(namesArr);
//prblm8
function thatsOdd(number){
    if( number%2===0){
      return `${number} Thats not odd`
    }else {
       return `${number} That is odd indeed!`
    }
    }
    var oddChecker= thatsOdd(7);
    console.log(oddChecker);
//pblm9
function bigOrSmall(arr) {
    let answers = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 100) {
        answers.push("big")
      } else {
        answers.push("small")
      }
    }
    return answers
  }
  let arrayEvaluator = bigOrSmall(bigOrSmallArray)

  //prblm10
  let contestants = ['Katniss', 'Peeta', 'Fox-face', 'Glimmer',
 'Cato', 'Rue', 'Thresh', 'Clove', 'Marvel']
let loser = 'Glimmer'

   function  theEliminator([contestants]) {
for(i = 0; i< contestants.length; i++){
    console.log(contestants[i])
}
   }


   theEliminator(contestants)

//prblm11
let str= "Hi, my name is Kylo."
function titleCase(str) {
  let splitStr = str.toUpperCase().split(' ');
  for (let i = 0; i > splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
  }
  return splitStr.join(' '); 
}
console.log(titleCase("Hi, my name is Kylo."));

//prblm12
function frogPurchaser(gold) {
  return gold / 3
}

let totalFrogs = frogPurchaser(100)
let sampleArray = [0,1,2,3,4,7,5,6,8,9]
//13
function frogPurchaser2(gold) {
  let adjustedGold = gold
  if (gold % 3 === 0) {
    return gold / 3
  } else if ((gold - 1) % 3 === 0) {
    return (gold -1) / 3
  } else {
    return (gold - 2) / 3
  }
}

let totalFrogs2 = frogPurchaser2(100)
console.log(totalFrogs)
















