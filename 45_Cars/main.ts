// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.

// creating object for a car
interface Car {
    manufacturer : string
    model : string
}

// function storing properties of the car
function carInfo (manufacturer: string, model: string) {
    const carInfo: Car = {
        manufacturer : manufacturer,
        model : model
    }
}

const printCarInfo = carInfo("Toyota", "ay-8")
console.log(printCarInfo)
