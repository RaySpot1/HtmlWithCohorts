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

const multiplier = (number) => {
    for(let i = 0; i < 12; i++){
        console.log(number + " * " + i + " = " + (number * i))
    }
}

function multiplication(aFunction){
    let x = 2
    aFunction(x)
}

multiplication(multiplier)


// Template Literal
// let text = `The boy is awesome`;

// console.log(text);



