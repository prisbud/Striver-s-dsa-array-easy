const person = {
    name: "Priya",
    age: "36"
}

function personsDetails(name, age) {
    console.log(`My name is ${name} and I am ${this.age} old`)
}

Function.prototype.myCall = function(context,...args){
    if(typeof this !== "function"){
        return console.error("error")
    }

    context.fn = this
    context.fn(...args)
}

personsDetails.myCall(person,"Aditya",42)