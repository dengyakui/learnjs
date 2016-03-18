# javascript 主要数据类型及操作
## 字符串类型
### length 属性
计算字符串的长度，使用字符串的length属性
```
var s = 'Hello,world!';
var length = s.length;
```
### [index] 访问
字符串和数组都能通过下标来取值，但字符串用下标取值是只读的，
无法通过下标进行赋值，类似`str[0]='b'`这种操作不起作用，但不会报错

### toUpperCase
`toUpperCase` 把一个字符串全部变为大写:
```
var str = "hello,world.";
var upperStr = str.toUpperCase();//HELLO,WORLD.
```

### toLowerCase
`toLowerCase()` 把一个字符串全部变为小写:
```
var str = "HELLO,WORLD.";
var upperStr = str.toLowerCase();//hello,world.
```

### indexOf
`indexOf()` 会搜索指定字符串出现的位置:
```
var str = 'hello,world.';
console.log(str.indexOf('h')); //0
console.log(str.indexOf('e')); //1
```
### substring
`substring(start,end)` 根据制定的索引位置从字符串中返回一段字符,
：
```
var s = 'hello,world';
//返回的字符从star索引开始取，一直取到end-1的位置
var subStr = s.substring(0,5) //'hello' s[0]~s[4]
var sbuStr2 = s.substring(1,5) // 'ello' s[1]~s[4]
//如果传了一个参数，表示从这个位置一直取到字符串的末尾
var subStr3 =  s.substring(7); //'world' s[7]~s[末尾]
```

### `\` 字符串转义字符
在字符串中如果需要显示一些特殊的符号，比如双引号，或者需要换行，需要要用到转移字符
```
var a = "\"hello,world\"";
console.log("hello,\nI'm jim");
```

### `split` 将字符串分割成数组
可以按照指定的符号进行分割
```
var str = "abc";
var arr = str.split("");//['a','b','c']
str = "hhh|bbb|aaa";
consolg.log(str.split('|'));//['hhh','bbb','aaa']
```

## 数组类型
### `indexOf` 查找元素在数组中的索引
```
var arr=  [1,2,3];
console.log(arr.indexOf(1));//0
console.log(arr.indexOf(3));//2
console.log(arr.indexOf(7));//-1
```

### `slice` 和字符串的substring方法一样，返回的值数组的一部分
```
var arr = [1,2,3,4,5];
arr.slice(0)//[1,2,3,4,5]
arr.slice(2,4) //[3,4]
arr.slice(1,4) // [2,3,4,5]
```

### `pop,push,unshift,shift`
用于数组的插入删除
```
var arr = [1,2,3,4,5];
arr.push(6); //[1,2,3,4,5,6]
arr.pop(); //[1,2,3,4,5] return 6
arr.unshift(0); //[0,1,2,3,4,5]
arr.shift(); //[1,2,3,4,5] return 0
```

### `splice` 万能方法，可以同时插入和删除
第一个参数指定从那个位置开始删除，
第二个参数指定删除的个数
第三个之后的参数是在删除的位置前要插入的数据
```
var arr = [1,2,3,4,5];
arr.splice(5,0,6,7,8); // [1,2,3,4,5,6,7,8]
arr.splice(2,3); //[1,2,6,7,8]
```

### `sort` 数组元素排序，按照A~Z a~z的规则排序从小到大来排序
sort方法默认对数字不是按照数值大小来排序，而是按位来比较的
```
var arr = ['a','A','b','B']
arr.sort(); // ['A','B','a','b'];
arr = [1, 11, 21, 2, 4];
arr.sort();// [1,11,2,21,4]
arr = [1, 11, 21, 2, 4, 101];
arr.sort();//[1, 101, 11, 2, 21, 4]
```
### reverse 数组元素翻转 
按照第一个与最后一个，第二个与倒数第二个呼唤位置的顺序,
如果数组的元素有奇数个那么中间的元素reverse之后不会变
```
var arr = [1,2,3,4,5]
arr.reverse(); //[5,4,3,2,1]
```