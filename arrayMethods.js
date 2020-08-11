//forEach

const numbers = [20, 21, 22, 23, 24, 25, 26, 27]

numbers.forEach((num) => {
    console.log(num)
})

//you could have written a function ahead of time

function printTriple(n) {
    console.log(n * 3)
}

numbers.forEach(printTriple) //This will run the function for each element

