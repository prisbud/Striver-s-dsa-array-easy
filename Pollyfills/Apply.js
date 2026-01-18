const person = {
    name: "Priya",
    age: "36"
}

function personsDetails(name, age) {
    console.log(`My name is ${name} and I am ${this.age} old`)
}

Function.prototype.myApply = function(context,args=[]){
    if(typeof this !== "function"){
        throw new TypeError("not a function")
    }
    if(!Array.isArray(args)){
         throw new TypeError("not a function")
    }

    context.fn = this
    context.fn(...args)
}

personsDetails.apply(person,["Priyaaaa",65])