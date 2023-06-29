function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++){
    for( let j = i +1; j < array.length; j++){
      if(array[i] + array[j] === target){
        return true;
      }
    }
  }
return false;

}

/* 
  Write the Big O time complexity of your function here
  This approach has a runtime complexity of O(n ^ 2) because it requires to iterate through  nested loops or algorithm to find complimenting values
*/

/* 
  Add your pseudocode here
  we create two nested loops to check from bak to front and vicevresa

*/

/*
  Add written explanation of your solution here
  The outer loop iterates from the first element to the second-to-last element of the array. The inner loop starts from the next element (i+1) and goes up to the last element of the array. For each pair of numbers, we check 
  if their sum equals the target.
  */

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
