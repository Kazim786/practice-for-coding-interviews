//Problem 1

//Given 2 arrays. Return true if they have at least 1 element that is the same

// const a = ['a', 'b', 'c', 'x']

// const b = ['z', 'y', 'i', 'k']

//Easy Naive approach
// const isThereAMatch = (arr1, arr2) => {
//   for(let i = 0; i < arr1.length; i++){
//     for(let j = 0; j < arr2.length; j++){
//       if(arr1[i] === arr2[j]){
//         return true
//       }  
//     }
//   }
//   return false
// }
// isThereAMatch(a, b)

//Better approach

const a = ['a', 'b', 'c', 'x']

const b = ['z', 'y', 'i', 'x']

//array1 ==> obj {
//a : TRUE,
//b : true,
//}

function isThereAMatch2 (arr1, arr2){
  //loop through first array and create obj where properties === items in the array.
  
  //loop through second array and check if item in second array exists on created object
}