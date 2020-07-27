const arrayToChck = [1,2,3,4];

const newArray = [];
for (i = 0; i < 100000; i++) {
	newArray[i] = i + 1;
}

const sortedArray = arrayToChck.sort((a, b) => a - b).filter(onlyUnique);

const smallestPositiveNumber = (sortedArray) => {
	//if the array size is 1 all possible senarios are taken care of
	if (sortedArray.length == 1) {
		if (sortedArray[0] > 1) {
			return sortedArray[0] - 1;
		} else if (sortedArray[0] == 1) {
			return 2;
		} else {
			return 1;
		}
	}
	//if whole of the array is negative numbers
	else if (sortedArray.every((a) => a < 0)) {
		return 1;
	}
	//case where the array is bigger than 1 number. we should return the smallest integer not present on the array.
	else {
		sortedArray = sortedArray.filter((a) => a > 0);
		if (sortedArray[0] != 1) {
			return sortedArray[0] - 1;
		} else {
			for (i = 0; i < sortedArray.length - 1; i++) {
				if (sortedArray[i + 1] - sortedArray[i] > 1) {
					return sortedArray[i] + 1;
				}
			}
			return sortedArray[sortedArray.length - 1] + 1;
		}
	}
};

console.log(sortedArray);
console.log(smallestPositiveNumber(sortedArray));

function onlyUnique(value, index, self) {
	return self.indexOf(value) === index;
}

//if array is all negative - return 1
//if array is only 1 positive number and that number is >1  return -1 from that number
