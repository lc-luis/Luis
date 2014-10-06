(function(){
	var app = angular.module('app', ['firebase']);

	app.factory('productos', function($firebase){
		var ref = new Firebase('https://luis-lc-demo1.firebaseio.com/productos');
		var sync = $firebase(ref);
		var Productos = sync.$asObject();
		return Productos;
	});

	app.controller('tiendaControlador', function(productos){
		this.productos = productos;
		console.log(productos);

		
	});

	app.controller('panelControlador', function($firebase){
		this.tab = 1;
		var ref = new Firebase('https://luis-lc-demo1.firebaseio.com/productos/id');
		var sync = $firebase(ref);

		this.selectTab = function(setTab){
			this.tab = setTab;
		};

		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};

		this.selectProducto = function(producto){
			this.tab=3;
			this.producto = producto;
		};
		this.updateProducto = function(producto){
			sync.$update(producto);


		}

	});

	app.controller('formControlador', function($firebase){
		var ref = new Firebase('https://luis-lc-demo1.firebaseio.com/productos');
		var sync = $firebase(ref);

		this.addProducto = function(producto){
			sync.$push(producto);
			this.producto = {};
		};

	});
})();