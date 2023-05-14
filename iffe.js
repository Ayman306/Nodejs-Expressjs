// iife immediately invoked function expression
// (function(){
//     const superhero="Batman"
//     console.log(superhero);
// })();
// (function(){
//     const superhero="Superman"
//     console.log(superhero);
// })();

// passing arguments
(function(message){
    const superhero="Batman"
    console.log(message,superhero);
})("First iffe");
(function(message){
    const superhero="Superman"
    console.log(message,superhero);
})("Secod iffe");