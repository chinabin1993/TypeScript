/** 
 * 类型断言可以手动指定一个值的类型
*/

// <类型>值
// 值 as 类型

// 类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的：
function getLength(something: string | number) {
	if ((<string>something).length) {
		return (<string>something).length;
	} else {
		return something.toString().length;
	}
}
