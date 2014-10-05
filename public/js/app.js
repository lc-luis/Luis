(function(){
	var app = angular.module('aplicacion', []);

	app.controller('tiendaControlador', function(){
		this.productos = gems;
	});

	var gems = [
	{
		nombre: 'Rubí',
		precio: 3.25,
		descripcion: 'Rojos',
		canPurchase: false,
		soldOut: false,
		images: [
			{full: 'img/ruby.png'},
			{thumb: 'img/mini-ruby-png'}
		]
	},
	{
		nombre: 'Diamante',
		precio: 5.25,
		descripcion: 'Blancos',
		canPurchase: true,
		soldOut: false,
		images: [
			{full: 'img/diamond.png'},
			{thumb: 'img/mini-diamond.png'}
		]
	},
	{
		nombre: 'Diamante',
		precio: 5.25,
		descripcion: 'Blancos',
		canPurchase: true,
		soldOut: false,
		images: [
			{full: 'img/diamond.png'},
			{thumb: 'img/mini-diamond.png'}
		]
	},
	{
		nombre: 'Diamante',
		precio: 5.25,
		descripcion: 'Blancos',
		canPurchase: true,
		soldOut: false,
		images: [
			{full: 'img/diamond.png'},
			{thumb: 'img/mini-diamond.png'}
		]
	},
	{
		nombre: 'Diamante',
		precio: 5.25,
		descripcion: 'Blancos',
		canPurchase: true,
		soldOut: false,
		images: [
			{full: 'img/diamond.png'},
			{thumb: 'img/mini-diamond.png'}
		]
	},
	{
		nombre: 'Diamante',
		precio: 5.25,
		descripcion: 'Blancos',
		canPurchase: true,
		soldOut: false,
		images: [
			{full: 'img/diamond.png'},
			{thumb: 'img/mini-diamond.png'}
		]
	}
	];
})();



