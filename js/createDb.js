
    console.log("create data base");
	var openRequest = indexedDB.open("pets",1);
	openRequest.onupgradeneeded = function(e) {
		var thisDB = e.target.result;
		if(!thisDB.objectStoreNames.contains("people")) {
			thisDB.createObjectStore("people", {autoIncrement:true});
		}
	}
	openRequest.onsuccess = function(e) {
		console.log("openRequest.onsuccess");
		db = e.target.result;
		//Listen for add clicks
		document.querySelector("#addDataTable").addEventListener("click", addTable);
		
	}	
	openRequest.onerror = function(e) {
        alert("openRequest.onerror");
		//Do something for the error
	}

	function addTable(){
		
	
		//codigo util para lee un solo dato
		var transaction = db.transaction(["people"],"readonly");
		var store = transaction.objectStore("people");
		store.get(6).onsuccess = function(event) {
			var nombre = event.target.result;
			//console.log(nombre.name);
		}
	
		var tx = db.transaction(["people"],"readonly");
		var store = tx.objectStore('people');
		store.openCursor().onsuccess = function(event) {
			var cursor = event.target.result;
			// cursor será truthy mientras haya elementos que procesar
			if (cursor) {
				// En cursor.value tenemos el elemento actual

				let td1 = document.createElement("td");
		let td2 = document.createElement("td");
		let td3 = document.createElement("td");
		let td4 = document.createElement("td");
		let td5 = document.createElement("td");
		let td6 = document.createElement("td");
		let td7 = document.createElement("td");
		let td8 = document.createElement("td");
		let td9 = document.createElement("td");
		let td10 = document.createElement("td");
	
		let tr = document.createElement("tr");
		document.getElementById("body-table").appendChild(tr);
	
		tr.appendChild(td1)
		tr.appendChild(td2)
		tr.appendChild(td3)
		tr.appendChild(td4)
		tr.appendChild(td5)
		tr.appendChild(td6)
		tr.appendChild(td7)
		tr.appendChild(td8)
		tr.appendChild(td9)
		tr.appendChild(td10)

				var current = cursor.value;
				console.log(current.name);
				td1.innerHTML= current.ownerName;
				td2.innerHTML= current.petName;
				td3.innerHTML= current.microchip;
				td4.innerHTML= current.species;
				td5.innerHTML= current.sex;
				td6.innerHTML= current.size;
				td7.innerHTML= current.sterile;
				td8.innerHTML= current.dangerous;
				td9.innerHTML= current.neighborhood;
				td10.innerHTML= current.creationDate;
				// Pasamos a procesar el siguiente resultado
				cursor.continue();
			}
		} 
	}

