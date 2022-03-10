// Creating a function
// function getName(name){
//     console.log(name);
// }

// getName("David")


// function checkHeight(height){
//     // return height <= "4ft" ? name + " is closer to the ground" : "Opoor"

//     // return height >= "4ft" && name + " is closer to the ground"
//     return height <= "4ft" || height >= "4ft"
// }

// console.log(checkHeight("5ft"))

// const multiplier = (number) => {
//     for(let i = 0; i < 12; i++){
//         console.log(number + " * " + i + " = " + (number * i))
//     }
// }

// function multiplication(aFunction){
//     let x = 2
//     aFunction(x)
// }

// multiplication(multiplier)

// const drinkWater = function(){
//     console.log("drink Water")
// }
// const drinkWater2 = () =>{
//     console.log("drink water 2")
// }

// doArithmetic((element) =>{
//     for(let i = 0; i < 12; i++){
//         i >= element ? console.log(`${element} / ${i} = ${i / element}`): console.log(i)
//     }
// })


// const cookFood = function(){
//     return(food) => {
//         return food
//     }
// }

// const returnFunction = (aFunction) => {
//     return aFunction;
// }


// const yetAnotherFunction = returnFunction(() =>  console.log("Ekaabo"))

// yetAnotherFunction()

// const toggleLight = (event, callback) => {
//     switch(event){
//         case "walkedIn":
//             callback("Switch On");
//             break;
//         case "walkedOut":
//             callback("Switch Off")
//             break;
//         default:
//             console.log("Lights Off")
//             break;
//     }
// }

// toggleLight("walkedIn",(data) => console.log(`lights are ${data}`))
// toggleLight("walkedOut",(data) => console.log(`Lights are ${data}`))
// toggleLight("walkedOnWater",(data) => console)

// function toggleLight(event, action) {
//     switch(event){
//         case "walkedIn":
//             action("Switch On")
//             break;
//         case "walkedOut":
//             action("Switch OFF")
//             break;
//         default:
//             console.log("Lights Off")
//             break;
//     }
// }

// toggleLight("walkedIn",(data) => console.log(`lights are ${data}`))
// toggleLight("walkedOut",(data) => console.log(`lights are ${data}`))
// toggleLight("NotHome",(data) => console.log(`lights are ${data}`))



// function movement(person) {
//     console.log(`when ${person.name} runs ${person.isWig ? "her wig falls" : "breeze blows her hair"}`) //ternary operator

//     // if(person.isWig){
//     //     console.log("When " + person.name + " runs, her wig falls")          //expanded

//     // }else {
//     //     console.log("When " + person.name + " runs, breeze blows her hair")
//     // }
// }

// function animation(defineCharacterMovement){
//     let character = {
//         name: "Adeola",
//         isWig: true,
//         gender: "female",  
//     }
//     defineCharacterMovement(character)
// }

// animation(movement)


// animation(movement)
// or animation((person) => console.log(`when ${person.name} runs ${person.isWig ? "her wig falls" : "breeze blows her hair"}`))

// let persons = ["fola", "adeola", "ruth", "increase", "father", "lekan", "lotachi"]

// persons.map(
//     (persons) => console.log(persons)
// )


// function createCharacter(){
//     let character = {       // declaring a variable and assigning objects to it
//         name: "Adeola",
//         isWig: true,
//         gender: "female",  
//         getName: function () {
//             return this.name
//         }, 
//     }

//     return character
// }


// let person = createCharacter()

// let getPersonName = person.getName()

// console.log(getPersonName)

// let person = {
//     userName: "Jerry",
//     gender: "male",
//     school: "unilag"
// }

// for(key in person) {
//     console.log(person[key])
// }


// console.log(Object.keys(person))



// function callMe(phoneNumber, countryDial){
//     if(phoneNumber !== ""){
//         countryDial(phoneNumber)
//     }else{
//         console.log("Enter a valid number")
//     }
// }

// const dial = (phoneNumber) => console.log(`calling ${phoneNumber}`)

// callMe("08161820220", dial)

//print even numbers

// let anArray = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log("Even numbers: ")

// function getEvenNumbers(anArray){
//     for(let even = 0; even < anArray.length; even++){
//         if(anArray[even] %2 === 0){
//             // console.log(anArray[even])
//             process.stdout.write(anArray[even] + " ") // print in one line
//         }
//     }
// }

// getEvenNumbers(anArray)
 
// (function oneLine(anArray) {for (let i = 0; i < anArray.length; i++) {anArray[i] % 2 === 0 && process.stdout.write(anArray[i] + " ") } })([1, 2, 3, 4, 5, 6, 7, 8])




// (anArray = [1, 2, 3, 4, 5, 6, 7, 8], even = [], anArray.forEach(number => {if (number %2 === 0) even.push(number)}), process.stdout.write(even + " "))

// (anArray = [1, 2, 3, 4, 5, 6, 7, 8], anArray.forEach(number => {if (number %2 === 0) process.stdout.write(number + " ")}))



//factorial

function factorial(x) {
    if(x === 0){
        return 1
    } else{
        return x * factorial(x - 1)
    }
}

// First iteration
//3 * factiruak(3-1)

// second iteration
//3 * 2 * factorial(2-1)

// third iteration
// 3 * 2 * 1 factirual(1 - 1)

const num = 3

if(num > 0){
    let result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`)
}

