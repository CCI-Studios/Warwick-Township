window.addEvent("domready",function(){var e=$$(".module.fontResizer")[0],t=e.getElement(".smaller"),n=e.getElement(".bigger"),r=$("comp"),i=parseInt(r.getStyle("font-size"),"10");if(Cookie.read("font-size")){i=Cookie.read("font-size")||"13px";r.setStyle("font-size",i+"px")}t.addEvent("click",function(e){i--;i<9&&(i=9);r.setStyle("font-size",i);Cookie.write("font-size",i);e.preventDefault()});n.addEvent("click",function(e){i++;i>16&&(i=16);r.setStyle("font-size",i);Cookie.write("font-size",i);e.preventDefault()})});