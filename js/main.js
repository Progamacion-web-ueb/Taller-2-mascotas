
var rowId = 0;

var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
const dbName = "petDB";

var request = indexedDB.open(dbName, 2);

request.onerror = function (event) {
	console.log("Database error");
};
request.onupgradeneeded = function (event) {
	var db = event.target.result;
	var objectStore = db.createObjectStore("pets", { keyPath: "ownername" });
	objectStore.createIndex("petNameInput", "petNameInput", { unique: false });
};
var request = indexedDB.open(dbName, 2);
request.onsuccess = function (event) {
	var db = event.target.result;
	var tx = db.transaction("pets");
	var objectStore = tx.objectStore("pets");
	objectStore.getAll().onsuccess = function (event) {
		console.log(event.target.result);
		rowId = event.target.result.length;
	};
};
document.getElementById("petsave-button").onclick = function () {
	rowId += 1;
	let pet = {
		ownerInput: document.getElementById("ownerName-input").value,
		petNameInput: document.getElementById("petName-input").value,
		microchipInput: document.getElementById("microchip-input").value,
		speciesInput: document.getElementById("species-input").value,
		sexInput: document.getElementById("sex-input").value,
		sizeInput: document.getElementById("size-input").value,
		sterilizationInput: document.getElementById("sterilization-input").value,
		dangerousInput: document.getElementById("dangerous-input").value,
		neighborhoodInput: document.getElementById("neighborhood-input").value,
	}

	var request = indexedDB.open(dbName, 2);
	request.onsuccess = function (event) {
		var db = event.target.result;
		var customerObjectStore = db.transaction("pets", "readwrite").objectStore("pets");
		pet["ownername"] = rowId;
		customerObjectStore.add(pet);
		customerObjectStore.addEventListener("sucess", mostrar, false);
	};
};

function mostrar() {

	var transaccion = db.transaction("pets", "readonly");
	var almacen = transaccion.objectStore("pets");
	var cursor = almacen.OpenCursor();
	cursor.addEventListener("Success", mostrarDatos, false);
}

function mostrarDatos(e) {
	var cursor = e.target.result;
	if (cursor) {
		let tr = document.createElement("tr");

		Object.keys(pet).forEach((key) => {
			console.log(key);

			let td = document.createElement("td");
			td.innerHTML = cursor.value.pet;

			tr.appendChild(td);
		});
		document.getElementById("body-table").appendChild(tr);
    }
}