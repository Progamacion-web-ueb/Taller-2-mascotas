var key;
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
    key= document.getElementById('keyPet');
    console.log(key);
    var transaction = db.transaction(["people"],"readonly");
    var store = transaction.objectStore("people");
    store.get(key).onsuccess = function(event) {
    var pet = event.target.result;
    console.log(pet.ownerName);
    //document.Formadd.ownerName.value= 30;
    }
}


