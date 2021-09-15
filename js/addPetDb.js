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
        document.querySelector("#addPet").addEventListener("click", addPerson);
        //Listen for get clicks
        //document.querySelector("#getButton").addEventListener("click", getPerson);
        //Listen for get clicks
        //document.querySelector("#getAllButton").addEventListener("click", getPeople);
        //Listen for get clicks
        //document.querySelector("#deleteButton").addEventListener("click", deletePerson);
    }	
    openRequest.onerror = function(e) {
        alert("openRequest.onerror");
        //Do something for the error
    }


    function addPerson() {
        var ownerName = document.querySelector("#ownerName").value;
        var creationDate = document.querySelector("#creationDate").value;
        var petName = document.querySelector("#petName").value;
        var microchip = document.querySelector("#microchip").value;
        var species = document.querySelector("#species").value;
        var sex = document.querySelector("#sex").value;
        var size = document.querySelector("#size").value;
        var dangerous = document.querySelector("#dangerous").value;
        var sterile = document.querySelector("#sterile").value;
        var neighborhood = document.querySelector("#neighborhood").value;
    
        console.log("About to add "+ownerName+"/");
    
        //Get a transaction
        //default for OS list is all, default for type is read
        var transaction = db.transaction(["people"],"readwrite");
        //Ask for the objectStore
        var store = transaction.objectStore("people");
    
        //Define a person
        var person = {
            created:new Date(),
            ownerName:ownerName,
            creationDate:creationDate, 
            petName:petName, 
            microchip:microchip,
            species:species,
            sex:sex,
            size:size, 
            dangerous:dangerous, 
            sterile:sterile, 
            neighborhood:neighborhood
        }
    
        //Perform the add
        var request = store.add(person);
    
        request.onerror = function(e) {
            console.log("Error",e.target.error.name);
            //some type of error handler
        }
    
        request.onsuccess = function(e) {
            console.log("Woot! Did it");
        }
    }
    