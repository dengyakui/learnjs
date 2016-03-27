/**
 * 为要拖动的对象注册mousedown，mousemove，mouseup事件
 * 实现拖动
 * @param  {dom} bar
 * @param  {dom} target
 */
function bindDrag(bar,target){
    //存储鼠标按下时的坐标与拖动对象之间的距离
    var params = {};
    
    
    /**
     * 禁止选取bar中的文字
     */
    bar.onselectstart = function(){
				return false;
			}
            
      
    /**
     * 在bar上点击时记录点击的坐标与拖动对象之间的距离
     * @param  {any} e
     */
    bar.onmousedown = function(e){
        e =  e||window.event;
        
        //鼠标离box的偏移距离
        disX = e.clientX - target.offsetLeft;
        disY = e.clientY-target.offsetTop;
        
        params.disX = disX;
        params.disY = disY;

        document.onmousemove = function(ev){
            ev = ev || window.event;
            
            var currentX = ev.clientX;
            var currentY = ev.clientY;
          
            //用当前鼠标的坐标减去鼠标与box之间的插值，得到box的坐标
            target.style.left = (currentX - params.disX)+"px";
            target.style.top =(currentY - params.disY)+"px";;
            return false;
        }
        document.onmouseup = function(){
            //bar.onmousedown = null;
            document.onmousemove = null;
            params = {};
        }
    }
}