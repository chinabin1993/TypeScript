/**
 * 布尔值
 * 数值
 * 字符串
 * 空值
 * null
 * undefined
 */
let isBoolean: boolean = false;
let str: string = 'wbin';
let number: number = 123;
// js中没有空值的概念，在ts中，可以使用void表示没有返回任何值的函数。
function alertname(): void {
	alert('my name is wbin');
}
// 我们声明一个void类型的变量是没有什么用处的，因为你只能将它赋值为undefined和null。

// 在ts中，可以使用undefined和null来定义两个原始数据类型,undefined类型的变量只能被赋值undefined，null类型的变量只能被赋值null。
let undefi: undefined = undefined;
let nu: null = null;

// 但是void类型的变量不能赋值给number这种类型的变量。以下代码会报错
// let v: void;
// let number1: string = v;
