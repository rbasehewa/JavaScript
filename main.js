var techies = ["Html","CSS","Javascript","DOM"];

function createMenu( items ) {
    //let's create a new element for containing the menu
    var menu = document.createElement("ul");
    
    //iterate over the items and create one LI for each item
    items.forEach(function(element, index, array){
      var menuItem = document.createElement("li");
      var textNode = document.createTextNode(element);
      menuItem.appendChild(textNode);
      
      menu.appendChild(menuItem);
    });
    
    document.body.appendChild(menu);
  }
  
  createMenu(technologies);
