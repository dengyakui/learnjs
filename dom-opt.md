## js操作dom

### 选择器
- getElementById
- getElementsByName 根据name属性查找元素，返回一个数组
- getElementsByTagName 根据元素标签名查找元素，返回一个数组

### 获取/设置dom元素的attr
- getAttribute(key,val)
- setAtrribute(key)

### 访问上下级节点
- parentNode 获取父节点，返回一个dom节点
- childNodes 获取子元素集合，返回一个dom数组

### 创建节点
- document.createTextNode('txt') 创建一个文本节点
- document.createElement('div')  创建一个dom元素
- domObj.appendChild(dom) 将元素插入到元素内
- domObj.insertBefore(要插入的子元素,插入到哪个子元素之前)
- domeObj.remove() 将元素自身从文档中删掉
- domObj.removeChild(dom) 删除子元素
- innerHTML 在元素内添加html 

## jQuery DOM节点操作


### empty 清空节点内容

```
$("selector").empty()
```

### remove 删除节点
jQuery删除节点时会将节点所绑定的事件和与该元素有关的jQuery数据也清理掉，
元素是完全从内存中被清除的
```
$("selector").remove()
```

### empty 和 remove 区别
- empty 用来清空元素的内容，不会删除元素本身
- remove 用来删除元素，可以将元素自身给干掉
- remove 的参数是个string选择器，可以将一组符合条件的元素都删掉

### detach jquery中的临时删除
detach 方法可以在删除元素的同时，将元素绑定的
事件和数据保存到内存中，当重新把元素加到页面中，事件和数据会恢复给元素
```
//delete
var detachedElement = $("p").detach();

//recovery
$("body").append(detachedElement);
```

### clone 克隆元素
clone方法可以对元素进行复制及修改，默认使用的是浅克隆，
不会复制元素绑定的事件和附加数据，可以调用重载的clone方法进行深克隆
```
//浅克隆
var cloneP = $("p").clone();
//深克隆
var deepP = $("p").clone(true);
```
### replaceWith,replaceAll
都是用来替换元素，只不过执行顺序不一样，
replaceWidth是先用选择器选择元素然后再指定替换的元素；
replaceAll是先指定用于替换的元素，再指定被替换的元素
```
$("selector").replaceWidth("replaceElement");
$("repleceElement").replaceAll("selector");

//参数也可以一个返回对象的function
$("div").replaceWith(function(){
    return "<span></span>"
});
```

### wrap 给每个匹配的元素添加一个父节点
```
$("p").wrap("<div></div>");
```

### unwrap给每个匹配的元素去掉一层父元素
```
$("p").unwrap("<div></div>");
```

### wrapAll给所有匹配的元素套一个共同的父元素，相当于把一堆元素包裹一个父元素
```
// <p>p1</p>
// <p>p2</p>
// <p>p3</p>
$("p").wrapAll("<div></div>");
//result:
// <div>
//   <p>p1</p>
//   <p>p2</p>
//   <p>p3</p>
// </div>
```
### wrapInner 给所有匹配元素的内部嵌套一层子元素
```
//before:
//<p></p>
//<p></p>
//<p></p>

$("p").wrapInner("<span></span>");

//after:
//<p><span></span></p>
//<p><span></span></p>
//<p><span></span></p>
```

### children 选择元素的直接子元素
```
$("div").children();
$("div").children(":first");
```

### find 查找元素内的后代元素
与children方法不同，children方法只查找第一级子元素，
find方法会查找左右的子元素
```
$("div").find("p:last");
```

### parent,parents 查找父级元素

### closest 查找第一个匹配的祖先元素
与parents相比，不同之处：
- 查找的起点不同，parents从父级开始，closest从元素同级开始，查找范围包括元素的兄弟节点
- 查找方式不同，parents一直查找到根元素，然后找出匹配的元素；
closest逐层向上查找，只要找到匹配的元素就会停止查找



