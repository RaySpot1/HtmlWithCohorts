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

let person = {
    userName: "Jerry",
    gender: "male",
    school: "unilag"
}

for(key in person) {
    console.log(person[key])
}


console.log(Object.keys(person))