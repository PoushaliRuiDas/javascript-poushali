// Immediately Invoked Function Expression (IIFE)

(function pou() {        //named IIFE
    console.log(`DB Conntected`)
}());   //; important

( () => {
    console.log(`DB Connected Two`);
})();       //if we don't end the previous func then it will show error

( (name) => {
    console.log(`DB Connected Two ${name}`);
})('Poushali')