const person = {
    name: "Priya",
    age: "36"
}

function personsDetails(name, age) {
    console.log(`My name is ${name} and I am ${this.age} old`)
}


Function.prototype.myBind = function(context={},...args){
    if(typeof this !== "function"){
        throw console.error("not a function");        
    }

    const fn =this
    return function(...newArgs){
        return fn.apply(context,[...newArgs,...args])
    }
}

let tempBind = personsDetails.myBind(person,"Adityaa")

console.log(tempBind())