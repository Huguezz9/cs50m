console.log('----------------- first exercise ----------------')
function makeFunctionArray () {
    const arr = []

    for (var i = 0; i < 5; i++) {
        arr.push(function () {console.log(i)})
    }

    return arr
}

const functionArr = makeFunctionArray()

functionArr[0]()


// ------------------------------------------------------------------------------------------------------//
//sets the const arr to 0. But prints 5
console.log('---------------- Second exercise -----------')
function makeHelloFunction () {
    const message = 'Hello!'
    
    function sayHello () {
        console.log(message)
    }
    return sayHello
}

const sayHello = makeHelloFunction()

//console.log(message)

sayHello()

/* This gets an error cause message variable is not declared in the global
 scope. But if we delete the 'console.log(message)' command the program will run just fine. */

// ------------------------------------------------------------------------------------------------------- //

// this function is created and called inmediately. Being an IIFE
console.log('------------------------ 3rd exercise -----------------------')
const sayHello1 = (function makeHelloFunction () {
    const message = 'Hello!'
    
    function sayHello () {
        console.log(message)
    }
    return sayHello
}) ()

const counter = (function () {
    let count = 0

    return {
        inc: function() { count += 1 },
        get: function() { console.log(count)},
    }
}) ()

// This calls cant access the variables that are inside the function scope.
counter.get()
counter.inc()
counter.get()

//--------------------------------------------------------------------------------------//
console.log('-----------------4th exercise --------------------')
function makeFunctionArray () {
    const arr = []

    for (var i = 0; i < 5; i++) {
        arr.push((function (x) {
            return function () {console.log(x)}
    }) (i))

    }

    return arr
}
/* using IIFE to have closure to access the varible inside the for loop and not after is
already done */
const functionArr1 = makeFunctionArray()

functionArr[0]()
//---------------------------------------------------------------------------------------------//
console.log('------------------- 5th exercise ---------------------------')

const arr = [0, 1, 2, 3]

function addOne(number) {
    return number + 1
}
console.log(addOne(arr)) //returns [0, 1, 2, 31]
console.log(addOne(1)) //returns 2
console.log(arr.map(addOne)) //returns all the values in arr + 1.

//----------------------------------------------------------------------------------
console.log('--------------------6th exercise-------------------------')

function isGreater (number) {
    if (number > 1) { return true } 
}

console.log(isGreater(arr)) // returns undefined
console.log(isGreater(2)) // returns true
console.log(arr.filter(isGreater)) // returns the values in arr that are true.

//------------------------------------------------------------------------------------------
console.log('------------------------ 7th exercise ---------------------')

function add (x, y) { return x + y }

console.log(add(arr)) // returns 0, 1, 2, 3undefined
console.log(add(1,2)) // returns 3
console.log(arr.reduce(add)) /* Takes values from arr as arguments and uses them while 
                              passing them as next arguments, finally returns 6. */ 

//------------------------------------------------------------------------------------------------//
console.log('------------- 8th exercise-------------')
const person = {
    name: 'jordan',
    greet: function() {
        console.log('hello, ' + this.name)
    },
}

const friend = {
    name: 'david',
}

person.greet() //prints 'hello, jordan'

friend.greet = person.greet

friend.greet() //prints 'hello, david'

const greet = person.greet.bind({name: 'Hugo, your name is binded.'})

greet()

