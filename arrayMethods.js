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