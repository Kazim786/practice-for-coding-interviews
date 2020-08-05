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

var runningSum = function(arr) {
    const sum = arr.map((n, nIndex) => {
      let temp = n
      for (let i = 0; i < nIndex + 1; i++) {
        if (i === 0) {
          temp += 0
        } else {
          temp += arr[i - 1]
        }
      }
      return temp
    })
  
    return sum
  }
  const arr = [1, 2, 3, 4]
  console.log(runningSum(arr))