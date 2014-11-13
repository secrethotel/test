define(function(require, exports, module) {
  // 模块代码
  var elementCreate = require("./elementCreate");
  var overlay = (function(){
  	var element = elementCreate.create("div", {
  		styles: {
  			display: "none",
        width: "100%",
        backgroundColor: "#000",
        opacity: 0.35,
        position: "absolute",
        zIndex: 1,
        left: 0,
        top: 0,
        bottom: 0
  		}
  	})
  })


});