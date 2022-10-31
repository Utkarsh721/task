// var form = document.getElementById('addForm');
// var itemList=document.getElementById('items');

// console.log(form);
// console.log(itemList);

// //Form Submit event
// document.addEventListener('submit',myFunction);
// function myFunction(){
//     document.getElementById('form').body="item";
// }
// // delete event
// itemList.addEventListener('click', removeItem);


// //Add Item
// function addItem(e){
//     e.preventDefault();

    
// //Get input value

// var newItem = document.getElementById('item').value;


// //Creat new li element
// var li =document.createElement('li');
// //Add class 
// li.className= 'list-group-item';
// //Add text node with input value
// li.appendChild(document.createTextNode(newItem));

// //creat del button element
// var deletebtn = document.createElement('button')
// //Add Classes  to del button
// deletebtn.className= 'btn btn-danger btn-sm float-right delete';

// // Append text node
// deletebtn.appendChild(document.createTextNode('X'));

// //Append button to li 
// li.appendChild(deletebtn);

// //Append li to list
// itemList.appendChild(li);



// //Creat new li element
// var li =document.createElement('li');
// //Add class 
// li.className= 'list-group-item';
// //Add text node with input value
// li.appendChild(document.createTextNode(newItem));

// //creat edit button element
// var editbtn = document.createElement('button')
// //Add Classes  to edit button
// editbtn.className= 'btn btn-danger btn-sm float-right delete';

// // Append text node
// editbtn.appendChild(document.createTextNode('X'));

// //Append button to li 
// li.appendChild(editbtn);

// //Append li to list
// itemList.appendChild(li);
// }

// //Remove item
// function removeItem(e){
//    if(e.traget.classList.contains('delete')){
//     if(confirm('Are you Sure')){
//         var li=e.traget.parentElement;
//         itemList.removeChild(li)
//     }
//    }
// }





var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
