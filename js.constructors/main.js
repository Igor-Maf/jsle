function Book(name) { 
  Object.defineProperty(this, "name", { 
      get: function() { 
        return "Book: " + name;       
      },        
      set: function(newName) {            
        name = newName;        
      },               
      configurable: false     
   }); 
}

var myBook = new Book("Single Page Web Applications");
console.log(myBook.name);    // Book: Single Page Web Applications

// we cannot delete the name property because "configurable" is set to false
delete myBook.name;    
console.log(myBook.name);    // Book: Single Page Web Applications

// but we can change the value of the name property
myBook.name = "Testable JavaScript";
console.log(myBook.name);    // Book: Testable JavaScript