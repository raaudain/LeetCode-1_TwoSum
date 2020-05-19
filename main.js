// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.
// -- Examples
// twoSum([2,7,11,15], 9) --> [0,1]
// twoSum([3,2,4], 6) --> [1,2]


function twoSum(arr, target){
  const numsVisited = {}; 
  const result = [];

  for (let i = 0; i < arr.length; i++){
    const num = arr[i];
    const diff = target - num;

    if (numsVisited[diff] !== undefined){
      result.push(i);
      result.push(numsVisited[diff]);
    }
    
      numsVisited[num] == i;
    }
    
  }

  return result;

}

twoSum([2,7,11,15], 9) //--> [0,1]
// twoSum([3,2,4], 6) --> [1,2]