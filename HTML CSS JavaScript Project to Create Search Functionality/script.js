const searchInput = document.getElementById('search-input');
const itemList = document.getElementById('item-list').getElementsByTagName('li')

searchInput.addEventListener('input', function () {

  const searchText = searchInput.value.toLocaleLowerCase()

  for( let i = 0; i < itemList.length ; i++){
      const itemName = itemList[i].textContent.toLowerCase()
      if (itemName.includes(searchText)) {
        itemList[i].style.display = 'block';
      } else {
        itemList[i].style.display = 'none';
      }
  }

})






// const searchInput = document.getElementById('search-input');
// const itemList = document.getElementById('item-list').getElementsByTagName('li');

// searchInput.addEventListener('input', function () {
//   const searchText = searchInput.value.toLowerCase();
//   for (let i = 0; i < itemList.length; i++) {
//     const itemName = itemList[i].textContent.toLowerCase();
//     if (itemName.includes(searchText)) {
//       itemList[i].style.display = 'block';
//     } else {
//       itemList[i].style.display = 'none';
//     }
//   }
// });