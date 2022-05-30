//global Object

//console.log(global);

global.setTimeout(() => {
    console.log('in timeout')
    
}, 3000);

const int = setInterval(() => {
    console.log('in the interval')
    
}, 1000);