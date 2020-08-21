// //Exercise 1

// //Given 2 arrays. Return true if they have at least 1 element that is the same

// // const a = ['a', 'b', 'c', 'x']

// // const b = ['z', 'y', 'i', 'k']

// //Easy Naive approach
// // const isThereAMatch = (arr1, arr2) => {
// //   for(let i = 0; i < arr1.length; i++){
// //     for(let j = 0; j < arr2.length; j++){
// //       if(arr1[i] === arr2[j]){
// //         return true
// //       }  
// //     }
// //   }
// //   return false
// // }
// // isThereAMatch(a, b)

// //Better approach

// const a = ['a', 'b', 'c', 'x']

// const b = ['z', 'y', 'i', 'z']

// //array1 ==> obj {
// //a : TRUE,
// //b : true,
// //}

// //Better Approach
// function isThereAMatch2 (arr1, arr2){
//   //loop through first array and create obj where properties === items in the array.

//   //loop through second array and check if item in second array exists on created object

//   let map = {}
//   for (let i = 0; i < arr1.length; i++){
//     if(!map[arr1[i]]){
//       const item = arr1[i]
//       map[item] = true
//     }
//   }
//   for(let j = 0; j < arr2.length; j++){
//     if(map[arr2[j]]){
//       return true
//     }
//   }
//   return false
// }

// isThereAMatch2(a, b)

// //Example of this problem:

// const obj = {1: 'a', 2: 'b', 3: 'c'}

// const arr = [1, 'b', 'c']

// function test (obj, arr){
//   if(obj[arr[0]]){
//   console.log('true')
// } else {
//   console.log('false')
// }

// }
 
//  test(obj, arr)

//  //if array elements match the keys in the object it will be true

//  //Another way to redo this in a much nicer cleaner way is this:
// //its good to be well acquainted with various JS methods and how they work. It helps simplify the code and makes things easier
// //  function isThereAMatch3 (arr1, arr2){
// //      return arr1.some(item => arr2.includes(item))
// //  }

// //  isThereAMatch3(a, b)


// //********** */

// //Exercise 2

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]
 

// Constraints:

// 1 <= nums.length <= 1000
// -10^6 <= nums[i] <= 10^6

//

// var runningSum = function(arr) {
//     const sum = arr.map((n, nIndex) => {
//       let temp = n
//       for (let i = 0; i < nIndex + 1; i++) {
//         if (i === 0) {
//           temp += 0
//         } else {
//           temp += arr[i - 1]
//         }
//       }
//       return temp
//     })
  
//     return sum
//   }
//   const arr = [1, 2, 3, 4]
//   console.log(runningSum(arr))

//********************* */

//Exercise 3

//Least Number of Unique Integers after K Removals

//Difficulty Medium

//Given an array of integers arr and an integer k. 
//Find the least number of unique integers after removing exactly k elements.

// Example 1:

// Input: arr = [5,5,4], k = 1
// Output: 1
// Explanation: Remove the single 4, only 5 is left.

// Example 2:
// Input: arr = [4,3,1,1,3,3,2], k = 3
// Output: 2
// Explanation: Remove 4, 2 and either one of the two 1s or three 3s. 1 and 3 will be left.

// var findLeastNumOfUniqueInts = function(arr, k) {

// };


//**************** */
//Exercise 4
//1431. Kids With the Greatest Number of Candies
//Level Easy

//Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

// For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.

 

// Example 1:

// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true] 
// Explanation: 
// Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids. 
// Kid 2 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 
// Kid 3 has 5 candies and this is already the greatest number of candies among the kids. 
// Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies. 
// Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 
// Example 2:

// Input: candies = [4,2,1,1,2], extraCandies = 1
// Output: [true,false,false,false,false] 
// Explanation: There is only 1 extra candy, therefore only kid 1 will have the greatest number of candies among the kids regardless of who takes the extra candy.
// Example 3:

// Input: candies = [12,1,12], extraCandies = 10
// Output: [true,false,true]
 

// Constraints:

// 2 <= candies.length <= 100
// 1 <= candies[i] <= 100
// 1 <= extraCandies <= 50





const candies = [2,3,5,1,3]

const extraCandies = 3;


const minMax = (candies) => {
    var max = candies.reduce(function(a, b) {
        return Math.max(a, b);
      });
    
      var min = candies.reduce(function(a, b) {
        return Math.min(a, b);
      });
      console.log(min)
      console.log(max)
}


var kidsWithCandies = (candies, extraCandies) => {
    
    //This can be its own function
  minMax(candies)

  

for(let i = 0; i < candies.length; i++){
    if(candies[i] === max){
    return true
    } else if (candies[i] = candies[i] + extraCandies < max){
    return false
    } 
    else if (candies[i] = candies[i] + extraCandies > max){
    return true
    }
    else if (candies [i] === min){
        //> max
        candies[i] = candies[i] + extraCandies
        if(candies[i] > max){
            return true
        } else if(candies[i] < max){
            return false
        }
    
    } 
};


//Plan of action
// const arr = [2,3,5,1,3]

// arr[0] = arr[0] + extraCandies

// console.log(arr[0])

//if extraCandies is added to a number and that number is > (greater than max) 
//than that number will return true

//if extraCandies is added to a number that is equal to min and that number is < (less than max) than it will return false
//if extraCandies is added to a number that is equal to min and that number is > (greater than max) than it will return true

}
  

console.log(kidsWithCandies(candies, extraCandies))


//Gonna try with forEach

// const kidsWithCandies = (candies, extraCandies) => {
//     const max = candies.reduce(function(a, b) {
//         return Math.max(a, b);
//       });
//     const min = candies.reduce(function(a, b) {
//         return Math.min(a, b);
//       });
//     candies.forEach((candy) => {
//         candy + extraCandies >= max
//     })
// }


//*********************** */

//Exercise 5

//1108. Defanging an IP Address

// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

 

// Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Example 2:

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"

//Correct!!!!!

var defangIPaddr = function(address) {
    return console.log(address.split('.').join('[.]'))
};


//***************** */

//Exeercise 6

//771. Jewels and Stones


// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  
// **You want to know how many of the stones you have are also jewels.**

// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: J = "aA", S = "aAAbbbb"
// Output: 3
// Example 2:

// Input: J = "z", S = "ZZ"
// Output: 0
// Note:

// S and J will consist of letters and have length at most 50.
// The characters in J are distinct.

    //Idea
    //can make both J & S into arrays
    //use the map function to put letters that are shared among them into that array
    //return the length of the new array


let J = "aA", S = "aAAbbbb"


//In case length of S is less than J I added conditional

let J = "ZZz", S = "z"


var numJewelsInStones = function(J, S) {
  const arr = []

  if(J.length < S.length){
    for(let i = 0; i < S.length; i++){
      for(let j = 0; j < S.length; j++){
        if(J[i] === S[j]){
          arr.push(J[i])
        }
      }
    }
  }
  else {
    for(let i = 0; i < J.length; i++){
      for(let j = 0; j < J.length; j++){
        if(J[i] === S[j]){
          arr.push(J[i])
        }
      }
    }
  }
    
  return console.log(arr.length) 
};

console.log(numJewelsInStones(J, S))

//******************** */

//Exercise 7

//1342. Number of Steps to Reduce a Number to Zero

// Given a non-negative integer num, 
// return the number of steps to reduce it to zero. 
// If the current number is even, you have to divide 
// it by 2,
//  otherwise, you have to subtract 1 from it.


// Example 1:

// Input: num = 14
// Output: 6
// Explanation: 
// Step 1) 14 is even; divide by 2 and obtain 7. 
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3. 
// Step 4) 3 is odd; subtract 1 and obtain 2. 
// Step 5) 2 is even; divide by 2 and obtain 1. 
// Step 6) 1 is odd; subtract 1 and obtain 0.
// Example 2:

// Input: num = 8
// Output: 4
// Explanation: 
// Step 1) 8 is even; divide by 2 and obtain 4. 
// Step 2) 4 is even; divide by 2 and obtain 2. 
// Step 3) 2 is even; divide by 2 and obtain 1. 
// Step 4) 1 is odd; subtract 1 and obtain 0.
// Example 3:

// Input: num = 123
// Output: 12

var numberOfSteps  = function(num) {
    let steps = 0;
    while(num > 0){
        if(num % 2 === 0) num /= 2;
        else --num;
        ++steps;
    }
    return steps;
};
console.log(numberOfSteps(123));


//********************** */

//Exercise 8

//1365. How Many Numbers Are Smaller Than the Current Number

// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

 

// Example 1:

// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation: 
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1). 
// For nums[3]=2 there exist one smaller number than it (1). 
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
// Example 2:

// Input: nums = [6,5,4,8]
// Output: [2,1,0,3]
// Example 3:

// Input: nums = [7,7,7,7]
// Output: [0,0,0,0]
 

// Constraints:

// 2 <= nums.length <= 500
// 0 <= nums[i] <= 100


//gonna have to use max and min methods
const nums = [8,1,2,2,3]
const output = []
var smallerNumbersThanCurrent = function(nums) {
    //Gonna use for Loop or forOf
    let smaller = 0;
    //might have to use while too 
    for(let i = 0; i < nums.length; i++){
        if(nums[i] >  nums[i + 1]){
            //Have to find a way for the numbs[] on the less than side of the sign to evaluate every element
            smaller = smaller + 1
             output.push(smaller)
             return console.log(output)
        }
    }
};

//trying different approach

var smallerNumbersThanCurrent = (nums) => {
    const output = []

    const max = nums.reduce(function(a, b) {
        return Math.max(a, b);
    });

    const min = nums.reduce(function(a, b) {
        return Math.min(a, b);
    });


    for(let i = 0; i < nums.length; i++){
        if(nums[i] === max){
            output.push(nums.length - 1)
        } else if (nums[i] === min){
            output.push(0)
        }
        else if (nums[i] < max && nums[i] > min){
            //how do i compare with rest of the elements in the array?
        
        } 
        }
    }

    //^^ gonna use nested for loops







    // ***********

    // Exercise 9

    //Valid Parentheses

// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

function isValidParenthesis(parenthesis)      
{

  const stack = []
  const parenthesisMatch = {'(':')' , '[':']', '{':'}'}
  let isValid = false
  let rightSide = 0

  for (let i = 0; i < parenthesis.length; i++) {
    if (parenthesis[i] in parenthesisMatch) {
      //console.log(parenthesis[i])
      stack.push(parenthesis[i])
      //console.log(stack[stack.length-1])
      //console.log(stack)
    }
    else
    { 
      //console.log(parenthesis[i])
      //console.log(parenthesisMatch[stack[stack.length-1]])
      if (stack.length == 0)
      {
        return false // this is if we have extra rightSide parenthesis in the right side 
      }


      if(parenthesis[i] == parenthesisMatch[stack[stack.length-1]])
      //Dynamic way of comparing the last element in the stack array inside the parenthesisMatch object
      //to parenthesis or any bracket that is passed into the array
      {
        console.log(stack.length)
        stack.pop()
        console.log(stack.length)
      }
      else 
      {
        return false
      }
      
      //console.log(stack[stack.length-1])

    }
    console.log(stack.length)
  }

  if (stack.length === 0 && rightSide === 0) {
      isValid = true
    }
    
    return isValid
}


isValidParenthesis(pt)


//****************

//Happy Number

num = 19


const isHappyNumber = (number) =>
{

  if(number === 1)
  {
    return true
  }
  
  while(number !== 1) {
    let stringNum = number.toString()

    let count = 0
    for(let i = 0; i < stringNum.length; i++) {
    count += Math.pow(Number(stringNum[i]), 2)

    }

  number = count
  console.log(number)

  if(number === 1)
  {
    return true
  }

  //Chose 4 and 0 because according to happy number documentation. For any number that doesnt result in 1. A series of various numbers will occur. This sequence of numbers shall begin with 4 
  else if (number === 4 || number === 0)
  {
    return false
  }

  }

}


isHappyNumber(num)

//*********************** */

//FizzBuzz Corrected

function fizzBuzz(n) { 
  
    for(let i = 1; i <= n; i++){ 
       //Any number that is a multiple of 3 & 5 will be divisible by 15.
       if(i % 15 === 0){ 
         console.log('fizzbuzz') 
         }
         else if(i % 5 === 0){ 
           console.log("buzz") 
           }  
           else if (i % 3 === 0){ 
             console.log('fizz') 
             } 
             else { 
               console.log(i) 
               } 
               }  
               }
    
    
    fizzBuzz(30)

    //*************** */

    //Anagram Problem

    //Given 2 strings, write a function to determine if the 
    //2nd string is an anagram of the first. An anagram is a wor, phase, or name formed by 
    //rearranging the letters of another, such as cinema, formed from iceman

        //example:
        //validAnagram('', '') //true
        //validAnagram('aaz', 'zza') //false
        

        //IDEA: THINK ABOUT THE IN OPERATOR
        const validAnagram = (str1, str2) => {
            str1 = str1.toLowerCase()
            str2 = str2.toLowerCase()
              const frequency1 = {}
              const frequency2 = {}
  
  
              //putting letters of the strings with their frequencies in the objects
                for(let letter of str1){
                    if(!frequency1[letter]){
                        frequency1[letter] = 1
                    } 
                    else {
                        frequency1[letter]++
                    }
                }
                for(let letter of str2){
                    if(!frequency2[letter]){
                        frequency2[letter] = 1
                    } 
                    else {
                        frequency2[letter]++
                    }
                }
                console.log(frequency1)
                console.log(frequency2)
                for(let char in frequency1){
                    if(!(frequency2[char])){
                        return false
                    } 
                    else if(frequency2[char] !== frequency1[char]){
                        console.log(frequency1[char])
                        return false
                    }
                    
    
                }
                return true 
            }

          // IT WORKS^^^ :D








        //****************** */
        //CHASE QUESTIONS
            //IMPORTANT

        // 121. Best Time to Buy and Sell Stock

//         Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.




// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.
// Example 2:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.



//design an algorithm to find the maximum profit.!!!!

//So like in example 1, the max profit would be subtracting 1 with 6
        var maxProfit = function(prices, day) {
            //selling price > buying price
            //you can only buy 1 and sell 1 stock
            //if no transaction is done the max-profit should return 0
        };





//********************* */

//1328. Break a Palindrome



// Given a palindromic string palindrome, replace exactly one character by any lowercase English letter so that the string becomes the lexicographically smallest possible string that isn't a palindrome.

// After doing so, return the final string.  If there is no way to do so, return the empty string.

 

// Example 1:

// Input: palindrome = "abccba"
// Output: "aaccba"
// Example 2:

// Input: palindrome = "a"
// Output: ""





// var breakPalindrome = function(palindrome) {
//     if(palindrome.length === 1){
//         return ""
//     } else{
        
//         palindrome = palindrome.split('')
        
//         // palindrome.pop()
//         if(palindrome[0] !== 's' ){
//             palindrome[1] = 's'
//         }
//         else {
//             palindrome[1] = 'h'
//         }
        
//         palindrome = palindrome.join('')
        
//           return palindrome
//     }
// }; 

//breakPalindrome("hssh") This test case proves the code isnt foolproof


//CAME UP WITH THE BETTER SOLUTION WHICH WORKS WITH THIS TEST CASE TOO BUT IT STILL HAS FLAWS:


// const breakPalindrome = (palindrome) => {
//     if(palindrome.length === 1){
//         return ""
//     } 
 
//   let palindrome2 = ''

//   for(let i = 0; i < palindrome.length; i++){
//     if(palindrome[palindrome.length -1] === palindrome[0])
//     {
//       // console.log(char)
//       palindrome2 = palindrome.replace(palindrome[1], palindrome[palindrome.length - 1])
     
//     }
//   return palindrome2
// };
// }


// breakPalindrome("hssh")



//Having trouble with this test case breakPalindrome("aa") & breakPalindrome("aaaa")

//This is newest version of the code


//WORKS!!!!************

const breakPalindrome = (palindrome) => {
    if(palindrome.length === 1){
        return ""
    } 
  const alphabetArr = ("abcdefghijklmnopqrstuvwxyz").split("")


  let palindrome2 = ''

  for(let i = 0; i < palindrome.length; i++){
     
       //have to replace with letter that isnt in the string so to avoid palindrome
      // console.log([char])
      if(palindrome[1] !== alphabetArr[i]){
        palindrome2 = palindrome.replace(palindrome[1], alphabetArr[i])
      }
      
    }
    return palindrome2
  }
 


breakPalindrome("aaaa")
breakPalindrome("aa")




// meets this condition: replace exactly one character by any lowercase
//Still leetcode is giving wrong answer error

//But if i do this: palindrome[1] = 'a' instead of palindrome[palindrome.length-1] = 's' the answer is accepted


//**************************** */

//My Own isValid Parenthesis code:

//20. Valid Parentheses

// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true


// const isValid = (parenthesis) => {
//     if(typeof(parenthesis) !== "string" ){
//       return false
//     }
//     const countOfParen = {}
//      //check and see if the number of the 
//      //left side is equal to the number of the closing brackets (right side)
//         for(let i = 0; i < parenthesis.length; i++){
//             if(!countOfParen[parenthesis[i]]){
//             countOfParen[parenthesis[i]] = 1
//             }
//             else {
//                 countOfParen[parenthesis[i]]++
//             }
//         }
//         for(let bracket in countOfParen) {
//           console.log(countOfParen[bracket])
//           //This countOfParen[bracket] will show the number 
//           //if it equals the length then we return true
//           let total = countOfParen[bracket] + countOfParen[bracket] 
//           console.log(total)
         
        
//         }
//         console.log(countOfParen)
// };

// let p = '(({[]}))'
// console.log(isValid(p))


// //Tried a different approach - Failed

// // const isValid = (parenthesis) => {
// //     if(typeof(parenthesis) !== "string" ){
// //       return false
// //     }
    
// //       if(parenthesis.length % 2 === 0){
// //         return true
// //       }
// //        else{
// //          return false
// //        }
// // };

// // let p = '(({[]}))'
// // console.log(isValid(p))

// //This one failed at this "(]"


// //Another approach - This one also failed with "(]"

// const isValid = (parenthesis) => {
//     if(typeof(parenthesis) !== "string" ){
//         return false
//     }
//     const countLeft = {}
//     const countRight = {}
    
//      //check and see if the number of the 
//      //left side is equal to the number of the closing brackets (right side)
//         for(let i = 0; i < parenthesis.length; i++){
//             if(!countLeft[parenthesis[i]] && parenthesis[i] === "{" || parenthesis[i] === '[' || parenthesis[i] === '(' ){
//             countLeft[parenthesis[i]] = 1
//             }
//             else {
//                 countLeft[parenthesis[i]]++
//             }
//         };
//         for(let i = 0; i < parenthesis.length; i++){
//             if(!countRight[parenthesis[i]] && parenthesis[i] === "}" || parenthesis[i] === ']' || parenthesis[i] === ')' ){
//                 countRight[parenthesis[i]] = 1
//                 }
//                 else {
//                     countRight[parenthesis[i]]++
//                 }
//         }

//         //The only issue with this is that it cant detect opposite sides of the bracket. It will only search for the same side in the other object
//         for(let bracket in countLeft){
//             if(countRight[bracket]){
//                 return true
//             }
//             else{
//                 return false
//             }
//         }

//         for(let bracket in countRight){
//             if(countleft[bracket]){
//                 return true
//             }
//             else{
//                 return false
//             }
//         }

//         console.log(countLeft) 
//         console.log(countRight) 

//     }      
// console.log(isValid('(]'))

//Corrected version of my code for isValid parenthesis: 
//IT WORKS **************
const isValid = (str) => {
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let i = 0; i < str.length; i++) {

        // If character is an opening brace add it to a stack
        if (str[i] === '(' || str[i] === '{' || str[i] === '[' ) {
            stack.push(str[i]);
        }
        //  If that character is a closing brace, pop from the stack, which will also reduce the length of the stack each time a closing bracket is encountered.
        else {
            let last = stack.pop();

            //If the popped element from the stack, which is the last opening brace doesn’t match the corresponding closing brace in the map, then return false
            if (str[i] !== map[last]) {return false};
        }
    }
    // By the completion of the for loop after checking all the brackets of the str, at the end, if the stack is not empty then fail
        if (stack.length !== 0) {return false};

    return true;
    }

//LINE 611 AND 554 HAVE THE HAPPY NUMBER AND VALID PARENTHESIS QUESTIONS
//**************************** */

//258. Add Digits

// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

// Example:

// Input: 38
// Output: 2 
// Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
// Since 2 has only one digit, return it.


//IT WORKS!!!! ***********
const addDigits = (num) => {
  
    while(num > 9){
      let strNum = num.toString()
      let count = 0;
      console.log(strNum)
      for(let i = 0; i < strNum.length; i++){
        count += Number(strNum[i])
      
        //while number is greater than 9 we have to keep going
        
      }
      num = count; //moved to last statement of each iteration
    }
    
  return num
};

//keep getting a bunch of numbers in the console

//******************* */
//Happy Number

const isHappyNumber = (number) =>
{

  if(number === 1)
  {
    return true
  }
  
  while(number !== 1) {
    let stringNum = number.toString()

    let count = 0
    for(let i = 0; i < stringNum.length; i++) {
    count += Math.pow(Number(stringNum[i]), 2)

    }

  number = count
  console.log(number)

  if(number === 1)
  {
    return true
  }

  //Chose 4 and 0 because according to happy number documentation. For any number that doesnt result in 1. A series of various numbers will occur. This sequence of numbers shall begin with 4 
  else if (number === 4 || number === 0)
  {
    return false
  }

  }

}


isHappyNumber(num)


//************** */

// Remove Duplicates from Sorted Array

// Given a sorted array nums, remove the duplicates 
// in-place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this
//  by modifying the input array in-place with O(1) extra memory.

//Plan of action: Make a mapped array and return its length

const numbers = [0,0,1,1,1,2,2,3,3,4]

const removeDuplicates = (nums) => {
    nums.sort()

    const newArr = nums.map((i) => {
        
    })


    //return length
};