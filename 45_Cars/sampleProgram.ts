// Define interface for car information
interface Car {
    manufacturer: string;
    modelName: string;
    [key: string]: any; // Allow arbitrary key-value pairs
}

// Function to store car information
function storeCarInfo(manufacturer: string, modelName: string, ...extras: [string, any][]): Car {
    const carInfo: Car = {
        manufacturer: manufacturer,
        modelName: modelName,
    };

    // Adding extra key-value pairs
    extras.forEach(([key, value]) => {
        carInfo[key] = value;
    });

    return carInfo;
}

// Calling the function with required information and additional name-value pairs
const carInfo: Car = storeCarInfo("Toyota", "Camry", "color", "blue", "year", 2023);

// Printing the returned object
console.log(carInfo);
