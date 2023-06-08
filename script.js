function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  var targetContainer = event.target;
  
  // Check if the item is dropped into the second container
  if (targetContainer.id === 'container2') {
    targetContainer.appendChild(document.getElementById(data));
    
    // Display the success message and hide it after 2 seconds
    var successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';
    setTimeout(function() {
      successMessage.style.display = 'none';
    }, 2000);
  }
}

function resetContainers() {
  var container1 = document.getElementById('container1');
  var container2 = document.getElementById('container2');
  
  // Reset container 1 to its original state by appending all items
  var items = container2.querySelectorAll('.item');
  items.forEach(function(item) {
    container1.appendChild(item);
  });
  
  // Clear container 2
  container2.innerHTML = '';
}
