// var model = angular.module("crudAngular", []);

// model.factory('modelUser', [
// 	"$firebase", function($firebase){
// 		var $db = new Firebase('https://luis-lc-demo1.firebaseio.com/productos'),
// 		Productos = $firebase($db);
// 		var lengthProducto = function(){
// 			return Productos.$getIndex().length;
// 		}
// 		return {
// 			list: function(){
// 				return Productos;
// 			},
// 			findProduct: function(id){
// 				return Productos[id];
// 			},
// 			saveProduct: function(producto){
// 				if(typeof producto.id === "undefined"){
// 					var index = lengthProducto();
// 					producto.id = index + 1;
// 					Productos.$add(producto);
// 				};
// 			}
// 		};
// 	};
// ]);