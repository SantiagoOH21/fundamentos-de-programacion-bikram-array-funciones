let arrayVacio = [];
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayNumerosPares = [0, 2, 4, 6, 8];
let arrayBidimensional = [
	[0, 1, 2],
	["a", "b", "c"],
];

function suma(a, b) {
	return a + b;
}

function potenciacion(a, b) {
	return a ** b;
}

function separarPalabras(str) {
	return str.split(" ");
}

function repetirString(str, n) {
	let res = "";
	for (let i = 0; i < n; i++) {
		res += str;
	}
	return res;
}

function esPrimo(n) {
	if (n % 2 == 0 || n % 3 == 0) return false;
	for (let i = 6; i <= Math.sqrt(n); i += 6) {
		if (n % (i - 1) == 0 || n % (i + 1) == 0) return false;
	}
	return true;
}

function ordenarArray(arr) {
	const res = arr.slice();
	for (let j = res.length - 1; j > 0; j--) {
		for (let i = 0; i < j; i++) {
			if (res[i] < res[i + 1]) continue;
			let temp = res[i];
			res[i] = res[i + 1];
			res[i + 1] = temp;
		}
	}
	return res;
}

function obtenerPares(arr) {
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) res.push(arr[i]);
	}
	return res;
}

function pintarArray(arr) {
	let s = "[";
	for (let i = 0; i < arr.length - 1; i++) {
		s += arr[i] + ", ";
	}
	s += arr[arr.length - 1];
	s += "]";
	return s;
}

function arrayMapi(arr, f) {
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		res.push(f(arr[i]));
	}
	return res;
}

function eliminarDuplicados(arr) {
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		let isDuplicated = false;
		for (let j = 0; j < res.length; j++) {
			if (res[j] == arr[i]) {
				isDuplicated = true;
				break;
			}
		}
		if (!isDuplicated) res.push(arr[i]);
	}
	return res;
}

const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
let holaMundo = ["Hola", "Mundo"];
let loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];
let arrayDeArrays = [
	[756, "nombre"],
	[225, "apellido"],
	[298, "direccion"],
];

function multiplicacion(a, b) {
	return a * b;
}

function division(a, b) {
	return a / b;
}

function esPar(x) {
	return x % 2 == 0;
}

function resta(a, b) {
	return a - b;
}

let arrayFunciones = [suma, resta, multiplicacion];

function ordenarArray2(arr) {
	return ordenarArray(arr).reverse();
}

function obtenerImpares(arr) {
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 != 0) res.push(arr[i]);
	}
	return res;
}

function sumarArray(arr) {
	return arr.reduce(suma, 0);
}

function multiplicarArray(arr) {
	return arr.reduce(multiplicacion, 1);
}
