const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const pou = {
    name: 'biriyani',
    price: 250,
    isAvailable: true,

    orderpou: function(){
        console.log("biriyani nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(pou, "name"));

Object.defineProperty(pou, 'name', {
    //writable: false,
    enumerable: true,
    
})
console.log(Object.getOwnPropertyDescriptor(pou, "name"));

for (let [key, value] of Object.entries(pou)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}