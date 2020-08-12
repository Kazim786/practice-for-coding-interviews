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

const nums = [8,1,2,2,3]
const output = []
var smallerNumbersThanCurrent = function(nums) {
    //Gonna use for Loop or forOf
    let smaller = 0;
    //might have to use while too 
    for(let i = 0; i < nums.length; i++){
        if(nums[i] >  nums[4]){
            smaller = smaller + 1
             output.push(smaller)
             return console.log(output)
        }
    }
};