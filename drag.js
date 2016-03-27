

function  Drag(id) {
    this.div = document.getElementById(id);
    this.disX = 0;
    this.disY = 0;
}
Drag.prototype.init = function () {
    var self =this;
    this.div.onmousedown =function(){
        self.fnDown();
    }
};
Drag.prototype.fnDown = function (ev) {
    var self = this;
    document.onmousemove = function () {
     self.fnMove();  
   };
   document.onmouseup = function(){
       self.fnUp();
   }
   
   var ev = ev || window.event;
   disX = ev.clientX - this.div.offsetLeft;
   disY = ev.clientY-this.div.offsetTop;
   console.log(this.div.offsetLeft+","+this.div.offsetTop);
   console.log(ev.clientX+","+ev.clientY);
   
   return false;
};
Drag.prototype.fnMove = function (ev) {
       var ev = ev || window.event;
       this.div.style.left = ev.clientX-disX+"px";
       this.div.style.top = ev.clientY-disY+"px";
};
Drag.prototype.fnUp = function () {
       document.onmousemove = null;
       document.onmousedown = null;
};


var drag = new Drag("div1");
drag.init();