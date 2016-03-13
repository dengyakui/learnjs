# javascript数据类型
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