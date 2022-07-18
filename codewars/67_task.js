// Count of positives / sum of negatives
function countPositivesSumNegatives(input) {
  let sum = [0, 0];
  for (let i = 0; i<input.length; i++) {
    if (input[i]>0) {
      sum[0]+=1;
    } else{
      sum[1]+=input[i]
    }
  }
  return sum
}