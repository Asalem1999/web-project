// constructor for the object
function Truck(name, image, classification) {
    this.name = name;
    this.image = image;
    this.classification = classification;
 } 
 // create truck objects
 function start(){
 var truck1 = new Truck(" متكتكة", "foodtruckjpg.jpg ", " وجبات سريعة");
 var truck2 = new Truck("برقر", "foodtruckjpg.jpg ", "وجبات سريعة ");
 var truck3 = new Truck("شاورما", "foodtruckjpg.jpg ", "وجبات سريعة ");
 var truck4 = new Truck("بليلة", "foodtruckjpg.jpg ", " وجبات سريعة");
 var truck5 = new Truck("برقر هادي", "foodtruckjpg.jpg ", " وجبات سريعة");
 var truck6 = new Truck(" شاورما عمار", "foodtruckjpg.jpg ", " وجبات سريعة");
 var truck7 = new Truck("فرمت عطشك", "foodtruckjpg.jpg ", " وجبات سريعة");
 var truck8 = new Truck("شاورما", "foodtruckjpg.jpg ", " وجبات سريعة");

 // add the trucks to the list dynamically
 let truckList = document.getElementById("truck"); // ul
 addTruckToList(truckList, truck1);
 addTruckToList(truckList, truck2);
 addTruckToList(truckList, truck3);
 addTruckToList(truckList, truck4);
 addTruckToList(truckList, truck5);
 addTruckToList(truckList, truck6);
 addTruckToList(truckList, truck7);
 addTruckToList(truckList, truck8);

 }
 // function to add a truck object to the list
 function addTruckToList(list, truck) {
    let listItem = document.createElement("li"); // list item
    listItem.innerHTML = "<div class='truck'> <span><img class='images' src= '"+truck.image+"' alt='image of the truck'></span>"+
                        "<div class='text-block'><h2> " + truck.name + "</h2>" +"<br>"+
                        "<p> " + truck.classification + "</p><button>للمزيد</button> </div> </div>"
    list.appendChild(listItem); // add list item to the unordered list
 }

 /* for searching field */
function searchTru(){
    const searchInput = document.getElementById("search");
    const truckList = document.getElementById("truck");
    const trucks = truckList.getElementsByTagName("li");
    
      let searchValue = searchInput.value.toLowerCase();
      let matchFound = false;

    
      for (let i = 0; i < trucks.length; i++) { /* searching for match*/
        let truck = trucks[i];
        let name = truck.getElementsByTagName("h2")[0].textContent.toLowerCase();
        let classification = truck.getElementsByTagName("p")[0].textContent.toLowerCase();
    
        if (name.indexOf(searchValue) > -1 || classification.indexOf(searchValue) > -1) {
          truck.style.display = "";
          matchFound = true;
        } else {
          truck.style.display = "none";
        }
      }
      if (!matchFound) {/* if there is no match */
        let noMatch = document.createElement("li");
        noMatch.textContent = "Sorry no matching trucks found..";
        truckList.appendChild(noMatch);
    } 
    }
    