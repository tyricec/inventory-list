var addBtn = document.querySelector('.add-btn');
var inventoryList = document.querySelector('.inventory-list');
var inventoryTextInput = document.querySelector('input[name="inventory"]');
var removeBtn = document.querySelector('.remove-btn');

removeBtn.style.display = 'none';

addBtn.addEventListener('click', function (e) {
   var userInput = inventoryTextInput.value; 
   var newItem = document.createElement('li');
   newItem.classList.add('item');
   newItem.innerText = userInput;
   inventoryList.appendChild(newItem);
   inventoryTextInput.value = '';
   inventoryTextInput.focus();

   newItem.addEventListener('click', function() {
       if (newItem.classList.contains('item-selected')) {
           newItem.classList.remove('item-selected');
       } else {
        newItem.classList.add('item-selected');
       }

       var selectedItems = document.querySelectorAll('.item-selected');

       if (selectedItems.length > 0) {
           removeBtn.style.display = 'inline-block';
       } else {
           removeBtn.style.display = 'none';
       }
   });
});

removeBtn.addEventListener('click', function() {
    var selectedItems = document.querySelectorAll('.item-selected');

    for (var i = 0; i < selectedItems.length; i++) {
        var item = selectedItems[i];
        inventoryList.removeChild(item);
    }
});