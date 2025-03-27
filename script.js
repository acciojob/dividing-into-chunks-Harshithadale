const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let res = []
	let final_res = []
	let sum = 0
	arr.forEach((item,i) => {
		sum += item
		if(sum > n){
			final_res.push(res)
			res = []
			sum = item
		}
		res.push(item)
		if(i == arr.length -1){
			final_res.push(res)
		}
	})
	return final_res
};
const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
