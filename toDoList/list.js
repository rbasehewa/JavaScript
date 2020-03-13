var todos = ["Buy New Turtle"]; // define the array

window.setTimeout(function() {
    // put all of your JS code from the lecture here

    var input = prompt("What would you like to do?"); // get the input

    while(input !== "quit"){ // check the programmme exit
          if(input === "list"){
          listToDo();
        } else if(input === "new"){
          addToDo();
        } else if(input === "delete"){
          deleteToDo();
        }
        //ask again for new input
        input = prompt("what would you like to do?");
    }
    
    console.log("OK, YOU QUIT THE APP"); // get the exit message


    function listToDo(){
        todos.forEach(function(todos,i){
            console.log(i + ":" + todos);
        });
    }

    function addToDo(){
        // ask for newTodo
        var newTodo = prompt("Enter a newTodo");
        // ask to todos array
        todos.unshift(newTodo);
    }

    function deleteToDo(){
        // asking for index of todo to be deleted
        var index = prompt("Enter index of todo to delete?")
        // delete particular index
        var removeItem = todos.splice(index,1);
        console.log("You have deleted ",removeItem);
    }



  }, 500);

