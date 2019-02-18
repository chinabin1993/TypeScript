# TypeScript
Typescript学习笔记
## 简介
ts是微软开发的一个开源语言，是js的超集。主要提供了*类型系统*和*对ES6的支持*
### 为什么要使用ts
* ts增加了代码的可读性和可维护性
* ts非常包容
* ts拥有活跃的社区

### 安装ts
`
 npm install -g typescript
`

## 基础
### 原始数据类型
js中分为引用类型还原始数据类型，其中原始数据类型包括：*字符串、number、布尔、null、undefined、symbol* 
ts数据类型主要涉及的是前五中。
* 布尔值
* 数值
* 字符串
* 空值
* null和undefined


### 任意值
*任意类型用来表示允许赋值为任意类型，如果是一个普通类型，在赋值过程中是不可以改变类型的，但是如果是any类型，则允许被赋值为任意类型*

如以下代码是错误的

`
let number: string = 'seven;
number = 7;
`

*在任意值上访问任何属性都是允许的，可以认为，声明一个变量为任意值以后，对它的任何操作，返回的内容的类型都是任意值。*
*变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型。*

### ts类型检查
ts如果没有明确声明改变量的类型的话，会主动的推断该变量的类型，这就是类型推论。
例如：
如下代码会报错

`
let s = 'seven';
s = 7;
`

相当于：
`
let s: string = 'seven';
s = 7;
`

*如果定义的时候没有赋值，不管之后会不会赋值，都会被推断为any类型，而不进行类型检查*
### 对象的类型--接口
在ts中，使用接口interfaces来定义对象的类型，接口在面向对象的语言中是一个非常重要的概念，它是对行为的抽象，而具体如何行动需要又类去实现。
*定义接口过程中，需要注意以下方面：*
* 赋值的时候，变量的形状必须和接口的形状保持一致。
* 当我们需要不完全匹配的时候，可以定义一个可选属性。*注意，此时仍然不允许添加未定义的属性*
* 一旦定义了任意属性，那么确定属性和可选属性必须是它的子属性（其他属性类型必须和任意类型保持一致）
* 只读属性的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候

### 数组的类型
在 ts中，定义数组的类型方式很多，主要是以下几种方式
* 「类型+方括号」的方式  `let arr: number[] = [1,2,3,4]`，此时数组中的每个值只能是定义好的类型。
* 泛型
* 「类型+方括号」的方式  `let arr: number[] = [1,2,3,4]`，此时数组中的每个值只能是定义好的类型。
* 数组泛型 Array<类型> `let arr: Array<number> = [1,2,3,4]`
* 使用interface来定义数组
`interface I_NumberArr {
   [index: number]: [number]  
  }`此时 I_NumberArr 表示：只要 index 的类型是 number，那么值的类型必须是 number。
 
 *此外需要注意any在数组中的用法和类数组*
 `let arr: any[] = [1,'aa',true];`
 ###### 类数组
 错误代码：
 `function sum() {
    let args: number[] = arguments;
}
// index.ts(2,7): error TS2322: Type 'IArguments' is not assignable to type 'number[]'.
//   Property 'push' is missing in type 'IArguments'.`

 *事实上，常见的数组类型都有自己定义的接口，例如IArguments、NodeList、HTMLCollection等等*
 
正确代码：

`function sum() {
    let args: IArguments = arguments;
}
`



