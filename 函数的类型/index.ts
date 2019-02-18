/**
 * 一个函数有输出也有输出，在ts中，需要对函数的输入和输出同时定义。输入多余或者（少于）是不被允许的。
 * @param x number
 * @param y number
 */
function sum(x: number, y: number): number {
	return x + y;
}
sum(1, 2);

// 函数表达式的写法
/**
 * 此时需要注意的是，在ts中=>和es6中的箭头函数不同，在ts中，=>左侧是输入类型，需要括号括起来，右侧是输出类型。
 * @param x number
 * @param y number
 */
let mySum: (x: number, y: number) => number = function(x: number, y: number): number {
	return x + y;
};

// 使用接口定义函数
interface ISearchFunc {
	(source: string, subString: string): boolean;
}
let searchStr: ISearchFunc;
searchStr = function(source: string, subString: string): boolean {
	return source.search(subString) !== -1;
};

// 可选参数
// ts中使用?来定义可选参数，注意：可选参数后不可以有必选参数！！！
function buildName(firstName: string, lastName?: string): string {
	if (lastName) {
		return `${firstName} ${lastName}`;
	} else {
		return `${firstName}`;
	}
}

// 参数默认值，相当于也是可选参数。但是此时是不存在必选参数必须是在可选参数之前的限制。
function buildName1(firstName: string = 'w', lastName: 'bin'): string {
	return `${firstName} ${lastName}`;
}
buildName1('wang', 'bin');

// 剩余参数
// 此时需要注意，rest参数必须是最后一项参数
function push(array: any[], ...items: any[]) {
	items.push(function(item) {
		array.push(item);
	});
	return array;
}
