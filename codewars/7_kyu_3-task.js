// Sort Numbers
function solution(nums){
  if (nums && nums.length > 0) {  
   return nums.sort((a, b) => (a-b))
  } else { 
    return []
  }
}