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

//1512. Number of Good Pairs

// Given an array of integers nums.

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.

 

