setTimeout(function(num, n2) {
    console.log(arguments);
    alert(num + n2);
}, 1000, "abc", 123);


// var str = "<span>\
//             aaa\
//            <span>";
//          onload = function () {
//             document.body.innerHTML = str;

//          };
console.log("%cabc", "color:green;font-size:20px;background-color:red;")

//内层循环跳出
// a:for (var i = 0; i < 5; i++) {
//   for(var j = 0;j<1;j++){
//       if(i==3) break a;
//       alert(i);
//   }  
// }

// 循环高级玩法
var i = 0;
for (;;) {
    alert(i);
    if (++i >= 5) {
        break;
    }
}

// call方法不传第一个参数时，this的指向
// 传underfined或null时this还是window
function foo() {
    alert(this);

}

foo.call(null); //this ？ =》window
window.onload = function() {
    var count = 0;
    var ul = document.getElementById("list");
    var lis = ul.getElementsByTagName("li"); //动态方法，每次取时都是最新的结果
    // document.getElementById("btnAdd").onclick = function() {
    //     var li = document.createElement("li");
    //     li.innerText = count++;
    //     console.log(lis[0]);
    //     ul.insertBefore(li, lis[0]);
    // };
    for (var i = 0; i < lis.length; i++) {
        lis[i].onclick = (function (m) {
            return function () {
                alert(m);
            }
        })(i);
        
    }
};