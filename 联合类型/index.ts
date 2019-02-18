/** 
 * 联合类型表示取值可以为多种类型中的一种。
*/
let n: string | number;
n = 'seven';
n = 7;

/** 
 * 当ts不确定一个联合类型的变量到底是哪种数据类型的时候，我们只能访问此联合类型里面所有类型里共有的属性和方法。
*/
function getlength(something: string | number) {
	return something.toString();
}
