module.exports = function toReadable (number) {
	if (number === 0) return 'zero';

	let arr1to19 = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty"];
	let arr20to90 = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
	let result = '';
	let num = number;
	let str = String(num);

	if (num > 99) {
		result += arr1to19[Number(str[0])] + ' hundred ';
  	num = Number(str[1] + str[2]);
		str = String(num);
	}

	if (num > 19) {
		result += arr20to90[Number(str[0]) - 2] + ' ';
  	num = Number(str[1]);
		str = String(num);
	} 

	if (num > 0) {
		result += arr1to19[num];
	}

	return result.trim();
}
