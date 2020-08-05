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

const b = ['z', 'y', 'i', 'z']

//array1 ==> obj {
//a : TRUE,
//b : true,
//}

//Better Approach
function isThereAMatch2 (arr1, arr2){
  //loop through first array and create obj where properties === items in the array.

  //loop through second array and check if item in second array exists on created object

  let map = {}
  for (let i = 0; i < arr1.length; i++){
    if(!map[arr1[i]]){
      const item = arr1[i]
      map[item] = true
    }
  }
  for(let j = 0; j < arr2.length; j++){
    if(map[arr2[j]]){
      return true
    }
  }
  return false
}

isThereAMatch2(a, b)

//Example of this problem:

const obj = {1: 'a', 2: 'b', 3: 'c'}

const arr = [1, 'b', 'c']

function test (obj, arr){
  if(obj[arr[0]]){
  console.log('true')
} else {
  console.log('false')
}

}
 
 test(obj, arr)

 //if array elements match the keys in the object it will be true

 //Another way to redo this in a much nicer cleaner way is this:
//its good to be well acquainted with various JS methods and how they work. It helps simplify the code and makes things easier
 function isThereAMatch3 (arr1, arr2){
     return arr1.some(item => arr2.includes(item))
 }

 isThereAMatch3(a, b)