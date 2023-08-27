document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-button');
    const nameInput = document.getElementById('name');
    const contentInput = document.getElementById('content');
    const publicationList = document.getElementById('publication-list');
  
    addButton.addEventListener('click', () => {
      const name = nameInput.value;
      const content = contentInput.value;
  
      if (name && content) {
        const publicationItem = document.createElement('li');
        publicationItem.className = 'publication';
        publicationItem.innerHTML = `
          <h3>${name}</h3>
          <p>${content}</p>
          <button class="delete-button">Eliminar publicación</button>
        `;
  
        const deleteButton = publicationItem.querySelector('.delete-button');
        deleteButton.addEventListener('click', () => {
          publicationList.removeChild(publicationItem);
        });
  
        publicationList.appendChild(publicationItem);
  
        nameInput.value = '';
        contentInput.value = '';
      }
    });

 
  });
  function displaytime()
  {
      document.getElementById("fecha").innerHTML = Date();
  }
  