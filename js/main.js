
document.getElementById("petsave-button").onclick = function () {
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
	let tr = document.createElement("tr");

	Object.keys(pet).forEach((key) => {
		console.log(key);

		let td = document.createElement("td");
		td.innerHTML = pet[key];

		tr.appendChild(td);
	});

	document.getElementById("body-table").appendChild(tr);
};