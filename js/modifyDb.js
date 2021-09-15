
console.log("create data base");
var openRequest = indexedDB.open("pets",1);
openRequest.onupgradeneeded = function(e) {
    var thisDB = e.target.result;
    if(!thisDB.objectStoreNames.contains("people")) {
        thisDB.createObjectStore("people", {autoIncrement:true});
    }
}
openRequest.onsuccess = function(e) {
    db = e.target.result;
    //Listen for add clicks
    document.querySelector("#addKey").addEventListener("click", modifiPet);
}    
openRequest.onerror = function(e) {
    alert("openRequest.onerror");
    //Do something for the error
}

function modifiPet(){

    var key=document.querySelector("#keyUser").value;
    key = Number.parseInt(key);
    console.log(key);
    var transaction = db.transaction(["people"],"readonly");
    var store = transaction.objectStore("people");
    store.get(key).onsuccess = function(event) {
        var pet = event.target.result;
        console.log(pet.ownerName);

        var titleDate= document.createElement("label");
        var valueDate= document.createElement("output");
        valueDate.className="form-control";
        document.getElementById("Formadd").appendChild(titleDate);
        document.getElementById("Formadd").appendChild(valueDate);

        titleDate.innerHTML="Fecha de registro:";
        valueDate.innerHTML=pet.created;

        var titleOwnerPet= document.createElement("label");
        var valueOwnerPet= document.createElement("output");
        valueOwnerPet.className="form-control";
        document.getElementById("Formadd").appendChild(titleOwnerPet);
        document.getElementById("Formadd").appendChild(valueOwnerPet);

        titleOwnerPet.innerHTML="Nombre del Propietrario:";
        valueOwnerPet.innerHTML=pet.ownerName;

        var titleNamePet= document.createElement("label");
        var valueNamePet= document.createElement("output");
        valueNamePet.className="form-control";
        document.getElementById("Formadd").appendChild(titleNamePet);
        document.getElementById("Formadd").appendChild(valueNamePet);

        titleNamePet.innerHTML="Nombre de la mascota:";
        valueNamePet.innerHTML=pet.petName;

        var titleSpecies= document.createElement("label");
        var valueSpecies= document.createElement("output");
        valueSpecies.className="form-control";
        document.getElementById("Formadd").appendChild(titleSpecies);
        document.getElementById("Formadd").appendChild(valueSpecies);

        titleSpecies.innerHTML="Especie:";
        valueSpecies.innerHTML=pet.species;

        var titleSex= document.createElement("label");
        var valueSex= document.createElement("output");
        valueSex.className="form-control";
        document.getElementById("Formadd").appendChild(titleSex);
        document.getElementById("Formadd").appendChild(valueSex);

        titleSex.innerHTML="Sexo:";
        valueSex.innerHTML=pet.sex;
    
        //campo para modificar Tamaño

        var titleSize= document.createElement("label");
        var optionSize1= document.createElement("option");
        var optionSize2= document.createElement("option");
        var valueSize= document.createElement("select");
        
        valueSize.className="form-control";
        document.getElementById("Formadd").appendChild(titleSize);
        document.getElementById("Formadd").appendChild(valueSize);

        titleSize.innerHTML=" * Tamaño:";
        valueSize.appendChild(optionSize1);
        valueSize.appendChild(optionSize2);
        optionSize1.innerHTML="SI";
        optionSize2.innerHTML="NO";

        //campo para modificar peligrosidad

        var titleDangerous= document.createElement("label");
        var optionDangerous1= document.createElement("option");
        var optionDangerous2= document.createElement("option");
        var valueDangerous= document.createElement("select");
        
        valueDangerous.className="form-control";
        document.getElementById("Formadd").appendChild(titleDangerous);
        document.getElementById("Formadd").appendChild(valueDangerous);

        titleDangerous.innerHTML=" * Peligrosidad:";
        valueDangerous.appendChild(optionDangerous1);
        valueDangerous.appendChild(optionDangerous2);
        optionDangerous1.innerHTML="Amenaza";
        optionDangerous2.innerHTML="No Amenaza";

         //campo para modificar la localidad
      

         var titleLocalidad= document.createElement("label");
        var optionLocalidad1= document.createElement("option");
        var optionLocalidad2= document.createElement("option");
        var optionLocalidad3= document.createElement("option");
        var optionLocalidad4= document.createElement("option");
        var optionLocalidad5= document.createElement("option");
        var optionLocalidad6= document.createElement("option");
        var optionLocalidad7= document.createElement("option");
        var optionLocalidad8= document.createElement("option");
        var optionLocalidad9= document.createElement("option");
        var optionLocalidad10= document.createElement("option");
        var optionLocalidad11= document.createElement("option");
        var optionLocalidad12= document.createElement("option");
        var optionLocalidad13= document.createElement("option");
        var optionLocalidad14= document.createElement("option");
        var optionLocalidad15= document.createElement("option");
        var optionLocalidad16= document.createElement("option");
        var optionLocalidad17= document.createElement("option");
        var optionLocalidad18= document.createElement("option");
        var optionLocalidad19= document.createElement("option");
        var optionLocalidad20= document.createElement("option");
        var valueLocalidad= document.createElement("select");
        
        valueLocalidad.className="form-control";
        document.getElementById("Formadd").appendChild(titleLocalidad);
        document.getElementById("Formadd").appendChild(valueLocalidad);

        titleLocalidad.innerHTML=" * Localidad:";
        valueLocalidad.appendChild(optionLocalidad1);
        valueLocalidad.appendChild(optionLocalidad2);
        valueLocalidad.appendChild(optionLocalidad3);
        valueLocalidad.appendChild(optionLocalidad4);
        valueLocalidad.appendChild(optionLocalidad5);
        valueLocalidad.appendChild(optionLocalidad6);
        valueLocalidad.appendChild(optionLocalidad7);
        valueLocalidad.appendChild(optionLocalidad8);
        valueLocalidad.appendChild(optionLocalidad9);
        valueLocalidad.appendChild(optionLocalidad10);
        valueLocalidad.appendChild(optionLocalidad11);
        valueLocalidad.appendChild(optionLocalidad12);
        valueLocalidad.appendChild(optionLocalidad13);
        valueLocalidad.appendChild(optionLocalidad14);
        valueLocalidad.appendChild(optionLocalidad15);
        valueLocalidad.appendChild(optionLocalidad16);
        valueLocalidad.appendChild(optionLocalidad17);
        valueLocalidad.appendChild(optionLocalidad18);
        valueLocalidad.appendChild(optionLocalidad19);
        valueLocalidad.appendChild(optionLocalidad20);

        optionLocalidad1.innerHTML="Antonio Nariño";
        optionLocalidad2.innerHTML="Barrios Unidos";
        optionLocalidad3.innerHTML="Bosa";
        optionLocalidad4.innerHTML="Chapinero";
        optionLocalidad5.innerHTML="Ciudad Bolivar";
        optionLocalidad6.innerHTML="Engativá";
        optionLocalidad7.innerHTML="Fontibón";
        optionLocalidad8.innerHTML="Kennedy";
        optionLocalidad9.innerHTML="La Candelaría";
        optionLocalidad10.innerHTML="Los Mártires";
        optionLocalidad11.innerHTML="Puente Aranda";
        optionLocalidad12.innerHTML="Rafael Uribe Uribe";
        optionLocalidad13.innerHTML="San Cristóbal";
        optionLocalidad14.innerHTML="Santa Fe";
        optionLocalidad15.innerHTML="Suba";
        optionLocalidad16.innerHTML="Sumapaz";
        optionLocalidad17.innerHTML="Teusaquillo";
        optionLocalidad18.innerHTML="Tunjuelito";
        optionLocalidad19.innerHTML="Usaquén";
        optionLocalidad20.innerHTML="Usme";

                //campo para modificar peligrosidad

        var titleDangerous= document.createElement("label");
        var optionDangerous1= document.createElement("option");
        var optionDangerous2= document.createElement("option");
        var valueDangerous= document.createElement("select");
        
        valueDangerous.className="form-control";
        document.getElementById("Formadd").appendChild(titleDangerous);
        document.getElementById("Formadd").appendChild(valueDangerous);

        titleDangerous.innerHTML=" * Peligrosidad:";
        valueDangerous.appendChild(optionDangerous1);
        valueDangerous.appendChild(optionDangerous2);
        optionDangerous1.innerHTML="Amenaza";
        optionDangerous2.innerHTML="No Amenaza";

              //campo para modificar esterilidad
        if(pet.sterile=="NO"){
            var titleSterile= document.createElement("label");
            var optionSterile1= document.createElement("option");
            var optionSterile2= document.createElement("option");
            var valueSterile= document.createElement("select");
            
            valueSterile.className="form-control";
            document.getElementById("Formadd").appendChild(titleSterile);
            document.getElementById("Formadd").appendChild(valueSterile);
    
            titleSterile.innerHTML=" * Esterilizacion:";
            valueSterile.appendChild(optionSterile1);
            valueSterile.appendChild(optionSterile2);
            optionSterile1.innerHTML="Si";
            optionSterile2.innerHTML="No";   
        }else{
            var titleSterile= document.createElement("label");
            var valueSterile= document.createElement("output");
            valueSterile.className="form-control";
            document.getElementById("Formadd").appendChild(titleSterile);
            document.getElementById("Formadd").appendChild(valueSterile);
            titleSterile.innerHTML="* Esterilizacion:";
            valueSterile.innerHTML=pet.sterile;
        }

             
              
        //campo para modificar Microchip
        if(pet.microchip==""){
            var titleMicrochip= document.createElement("label");
            var valueMicrochip= document.createElement("input");
            valueMicrochip.className="form-control";
            document.getElementById("Formadd").appendChild(titleMicrochip);
            document.getElementById("Formadd").appendChild(valueMicrochip);

        titleMicrochip.innerHTML="* MicroChip:";
        }else{
            var titleMicrochip= document.createElement("label");
            var valueMicrochip= document.createElement("output");
            valueMicrochip.className="form-control";
            document.getElementById("Formadd").appendChild(titleMicrochip);
            document.getElementById("Formadd").appendChild(valueMicrochip);
            titleMicrochip.innerHTML="* MicroChip:";
            valueMicrochip.innerHTML=pet.microchip;
        }
        
        
    }
}


