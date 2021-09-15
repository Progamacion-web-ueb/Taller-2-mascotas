    console.log("create data base");
    var openRequest = indexedDB.open("pets",1);
    openRequest.onupgradeneeded = function(e) {
        var thisDB = e.target.result;
        if(!thisDB.objectStoreNames.contains("people")) {
            thisDB.createObjectStore("people", {autoIncrement:true});
        }
    }
    openRequest.onsuccess = function(e) {
        alert("	openRequest.onsuccess");
        db = e.target.result;
        //Listen for add clicks
        //document.querySelector("#addPet").addEventListener("click", addPerson);
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
