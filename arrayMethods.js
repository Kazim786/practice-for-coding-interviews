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

//Another example - more complex

const books = [
    {
    title: 'Good Omens',
    authors: 'Terry Pratchett',
    rating: 4.25
    },
    {
        title: 'Bone the complete editon',
        authors: 'Jeff Smith',
        rating: 4.42
    },
    {
        title: 'American Eagle',
        authors: 'Neil Gaiman',
        rating: 4.11
    },
    {
        title: 'Gentleman in moscow',
        authors: 'Amor Towles',
        rating: 4.36
    }
]

books.forEach((book) => { //book in the parameter represents each object.
    console.log(book.title)
})

//Remember when using anonymous functions like the one above inside of the forEach method
//The parameter represents each element. So book here represents each element or each book

//forOf is an alternative which is similar

for(let book of books){
    console.log(book.title)
}


const numbers1 = [20, 21, 22, 23, 24, 25, 26, 27]

//second argument in forEach is the index
numbers1.forEach(function(num, index) {
    console.log(index, num)
})


//*************** */

//Map -- Creates a new array from an existing array

//Anonymous function's first parameter represents each element in the array
const numbers2 = [20, 21, 22, 23, 24, 25, 26, 27]

const doubled = numbers2.map(function(number){
    return number * 2
})

//Example 2 of MAP:
const isEven = numbers2.map(function(number){
    return {
        value: number,
        isEven: number % 2 === 0
    }
})

console.log(isEven)

//Example 3

//Split the words in the array into letters with period in between and make all letters uppercase
const words = ['asap', 'byob', 'rsvp', 'diy']

const allCapsWithPeriod = words.map(function(word){
    return word.toUpperCase().split('').join('.')
})

//or you can use forOf
const upperCase = []
for(let word of words){
   upperCase.push(word.toUpperCase().split('').join('.')) 
}




