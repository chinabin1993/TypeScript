/**
 * 在ts中，我们使用接口interfaces来定义对象的类型。
 * 
 */
// 赋值的时候，变量的形状必须和接口的形状保持一致
interface I_Person {
	name: string;
	age: number;
}
let tom: I_Person = {
	name: 'wbin',
	age: 25
};

//有时候我们希望不完全匹配一个形状，那么可以用可选属性
// 可选属性的时候，我们依然不可以添加没有定义的属性
interface I_person1 {
	name: string;
	age?: number;
}
let tom1: I_person1 = {
	name: 'wbin'
};
let tom2: I_person1 = {
	name: 'wbin',
	age: 26
};

// 任意属性
// 需要注意的是，一旦定义了任意属性，那么确定属性和可选属性都必须是它的子属性
interface I_person2 {
	name: string;
	age?: number;
	[propName: string]: any;
}
let tom3: I_person2 = {
	name: 'wbin',
	age: 25,
	gender: 'male',
	height: 182
};

// 只读属性
interface I_person3 {
	name: string;
	readonly id: number;
	age: number;
	[propName: string]: any;
}

let tom4: I_person3 = {
	name: 'wbin',
	id: 6,
	age: 25,
	gender: 'male'
};
