// array length = array index + 1
var vowel =['a','e', 'i' ,'o' ,'u']
//console.log(vowel.length);
// array can be of different types
var mix = ["Pranto","Indica", 8 , 4.23, true, false]
// var mixArrayIndex = mix.indexOf(5)
// index starts from 0
// if element is not in array, it shows -1
// console.log(mixArrayIndex);
// var findFixedIndex = mix[6]
// if element is not in array, undefined
// var findFixedIndex = mix[6]
console.log(mix);
//mix[0]=47
// putting element  in array by index
mix[2]= "Nalabell"
mix.push("Lily")
mix.push("Molly")
console.log(mix);

mix.pop()
mix.pop()
// mix.pop()
// mix.pop()
// mix.pop()
// mix.pop()
// mix.pop()
// mix.pop()
// array.push(item) adds item to  last of the array
// array.pop() removes item from the last of the array
// array.shift() removes item from the beginning of the array
mix.shift()
console.log(mix);
var budget = 500
var needed = 520
var bhara =10
if(budget == needed){ console.log("Buy the thing");
}
if(budget >= needed){console.log("Buy more stuff");
}
if(budget <= needed){console.log("walk home");
}
if(budget != needed){console.log("Not is written like this");
}
if(budget >= needed &&  needed <=bhara){console.log("and");
}
if(budget >= needed ||  needed <=bhara){console.log("or");
}
// nested and if else
if (budget >= needed) {
    console.log("Mission Understood");
    
    
}
else {
    console.log("Bepar ta bujhechi ami");
    

}
if(budget >= needed){
    if(budget >= bhara){
        console.log("at least garite basha jabo");
        
    }
}


