/** 
 * 任意类型用来表示允许赋值为任意类型
 * 如果是一个普通类型，在赋值过程中改变类型是不被允许的，但是如果是any类型，则允许被赋值为任意类型。
*/

// 以下代码是普通类型，改变类型会报错
// let myFavoriteNumber: string = 'seven';
// myFavoriteNumber = 7;

// 在任意值上访问任何属性都是允许的！！！！
let anyThing: any = 'hello';
console.log(anyThing.myname);
console.log(anyThing.myname.firstname);
// 可以认为，声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。

/** 
 * 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型。
*/
let something;
something = 'seven';
something = 7;
something.setName('wbin');
