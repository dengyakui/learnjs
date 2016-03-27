function computeAge() {
    return new Date().getFullYear() - this.birthYear;
}
var xiaoming = {
    birthYear: 1991,
    age: computeAge
};

// alert(xiaoming.age());
//alert(computeAge.apply(xiaoming));


/**
 * arguments中的参数就是实参的一个引用，不是拷贝，修改任意一端，另一端的值都会变化
 * @param  {any} x
 */
function foo(x) {

    console.log(arguments);
    console.log("x:" + x);
    console.log(arguments[0]);
    arguments[0] = 20;
    console.log("x:" + x); //20

}

/**
 * 计算最大值的函数，参数的个数可变，内部通过arguments进行取值
 */
function max() {
    var i = 0;
    var max = Number.NEGATIVE_INFINITY;
    for (; i < arguments.length; i++) {
        if (arguments[i] > max) max = arguments[i];
    }
    return max;
}

console.log("max:" + max(1, 3, 5, 4, 32, 53, 23));

/**
 * 使用递归计算阶乘，内部使用了arguments.callee进行递归
 * @param  {any} n
 */
function factorial(n) {
    return n < 2 ? 1 : n * arguments.callee(n - 1);
}
console.log(factorial(4)); //24


var operators = {
    add: function(a, b) {
        return a + b;
    },
    substract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    }

    /**
     * 计算幂
     * @param  {any} a basevalue
     * @param  {any} b 系数
     */
    ,
    pow: function(a, b) {
        return Math.pow(a, b)
    }
};

// 将函数名作为参数动态调用
var operate = function(funcName, a, b) {
    if (typeof operators[funcName] === "function") {
        return operators[funcName](a, b);
    }
}

// console.log(operate("add",1,2));
// operate("substract",10,2)
// 8
// operate("multiply",10,2)
// 20
// operate("divide",10,2)
// 5
// operate("pow",10,2)
// 100
// operate("pow",2,10)
// 1024

/**
 * 带有缓存的阶乘，计算后将计算结果保存到函数对象中
 * 下次再计算时直接使用缓存的结果
 * @param  {any} n
 */
function factorial2(n) {
    if (isFinite(n) && n > 0 && Math.round(n) === n) {
        if (!(n in factorial2)) {

            factorial2[n] = factorial2(n - 1) * n;
        }
        return factorial2[n];
    }
    return NaN;
}
factorial2[1] = 1; //初始化

var scope = "global scope";

function checkscope() {
    var scope = "local scope";
    return function() {
        return scope;
    }
}

//使用闭包做一个计数器

function counter() {
    var n = 0;
    return {
        count: function() {
            return n++;
        },
        reset : function() {
            n = 0;
            return n;
        }
    };
}


/**
 * 使用闭包重写console.log方法，增加额外的操作
 * @param  {any} function(m
 */
console.log =(function(m){
    var counter = 0; //计数器
    return function(){
        m.apply(console,arguments);
        return ++ counter;
    }
}(console.log));

function f(name) {
    console.log(this);
    console.log(name);
    return this.number+name;
}

/**
 * 手动实现函数的绑定
 * @param  {any} func 要绑定的函数
 * @param  {any} obj  要绑定到的对象，函数执行时，this将始终指向这个对象
 */
function bind(func,obj){
    //优先使用native bind
    if(Function.prototype.bind){
        return func.bind(obj);
    }
    
    // 返回自己实现的bind
    return function(){
        console.log(obj);
        console.log(arguments);
        
        return func.apply(obj,arguments);  
    };
}

var f2 = bind(f,{number:20});


