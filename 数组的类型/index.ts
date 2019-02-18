/**
 * 在ts中，数组的类型有多重的定义方式，比较灵活
 */
// [类型+方括号]表示法，此时数组中的值不允许出现其他类型
let arr: number[] = [1, 2, 3, 4];

// 数组泛型
let arr1: Array<number> = [1, 2, 3, 4, 5, 6];

// 使用接口来表示
// I_NumberArr表示，只要index的类型是number，那么值的类型必须是number
interface I_NumberArr {
	[index: number]: number;
}
let arr2: I_NumberArr = [1, 2, 3, 4, 5];

// any在数组中的应用
let arr3: any[] = [1, 2, '3', true];

// 类数组，不是数组类型
// 这种常见的类数组都有自己的接口定义，比如Iarguments、NodeList等等

// 错误的代码

// function sum(){
//   let args: number[] = arguments;
// }

// 正确的代码
function sum1() {
	let args: IArguments = arguments;
}
