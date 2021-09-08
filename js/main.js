

// se crea el metodo que filtra las fablas
console.log("js on")
function genera_tabla() {
	 var body = document.getElementsByTagName("body")[0];

  // Crea un elemento <table> y un elemento <tbody>
  var tabla   = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // Crea las celdas
  for (var i = 0; i < 2; i++) {
    // Crea las hileras de la tabla
    var hilera = document.createElement("tr");

    for (var j = 0; j < 2; j++) {
      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
      // texto sea el contenido de <td>, ubica el elemento <td> al final
      // de la hilera de la tabla
      var celda = document.createElement("td");
      var textoCelda = document.createTextNode("celda en la hilera "+i+", columna "+j);
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
    }

    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(hilera);
    }

  // posiciona el <tbody> debajo del elemento <table>
  tabla.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tabla);
  // modifica el atributo "border" de la tabla y lo fija a "2";
  tabla.setAttribute("border", "2");
}

function insertRow() {
	console.log("inset row up");
	var table = document.getElementById('table');
	var tbody = document.getElementById('informationTable');
	var rowPet = document.createElement("tr");
	var celPet = document.createElement("td");
	var informationPet = document.createTextNode("celda en la hilera "+i+", columna ");
	for (var i = 0;i<8 ;i++) {
		celPet.appendChild(informationPet);
		console.log("for"+i);
	}
	rowPet.appendChild(celPet);
	tbody.appendChild(rowPet);
	table.appendChild(tbody);

}
function addrow(){
 var table = document.getElementById("table");
 var row = table.insertRow(2);
  //this adds row in 0 index i.e. first place
 row.innerHTML = "<td>row0 column1</td><td>row0 column2</td>";
}
