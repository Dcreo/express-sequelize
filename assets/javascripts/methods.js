function sendDeleteRequest(event) {
  event.preventDefault();

  let currentElement = event.target;

  let message = confirm('Точно хотите удалить?');

  if (message) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
      if (xhr.responseText == 'done') {
        currentElement.closest('tr').remove();
      }
    }

    xhr.open('delete', currentElement.href);
    xhr.send();
  }

  return false;
}

window.onload = function() {
  var elementsToDelete = document.getElementsByClassName("js-delete-method")

  if (elementsToDelete.length) {
    for(var i=0; i < elementsToDelete.length; i++) {
      elementsToDelete[i].addEventListener('click', sendDeleteRequest);
    }
  }
}
