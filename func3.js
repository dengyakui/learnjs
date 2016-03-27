(function(window,undefined){
    window.onload = function(){
        var boxes = document.getElementsByClassName("box");
        var str = "";
        for (var i = 0; i < 13; i++) {
            str+='<div class="box"></div>';
        }
        document.body.innerHTML +=str;
        for (var index = 0; index < boxes.length; index++) {
            var mid = Math.ceil(boxes.length/2)-1;
            var element = boxes[index];
            element.style.position = "relative";
            element.style.left = index*100+"px";
            if(index>mid)
            element.style.top = (index-mid)*(-1)*200+"px";
        }
    };
    
})(window);