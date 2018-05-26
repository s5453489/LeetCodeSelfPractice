// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    return decToBin(N);
}

function decToBin(decNumber){
	return countLongestZero(decNumber.toString(2).split(''));
}

function countLongestZero(binNumString){
	let longest = 0;
	let temp = 0;
	let countFlag = 0;
	binNumString.forEach(function(element){
		if(element == 1){
			countFlag++;
			if(countFlag === 2){
				countFlag = 1;
				if(temp > longest){
					longest = temp
				}
				temp = 0
			}
		}
		if(element == 0 && countFlag == 1){
			temp++;
		}
	});
	return longest;
}
