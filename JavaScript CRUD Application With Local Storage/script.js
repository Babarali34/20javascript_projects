const form = document.getElementById('crud-form')
const itemInput = document.getElementById('item')
const itemList = document.getElementById('item-list')

let items = JSON.parse(localStorage.getItem('item')) || [];

function saveItemToLocalStorage(){
   localStorage.setItem('item',JSON.stringify(items))
}

// render items 

function renderItems(){
   itemList.innerHTML = '';
   items.forEach((item,index) => {
        const li = document.createElement('li')
        li.textContent = item

          const  editButton = document.createElement('button')
          editButton.textContent = 'Edit'
          editButton.addEventListener('click',()=> editItem(index))  

          const  deleteButton = document.createElement('button')
          deleteButton.textContent = 'Delete'
          deleteButton.addEventListener('click',()=> deleteItems(index))  


          li.appendChild(editButton)
          li.appendChild(deleteButton)
          itemList.appendChild(li)


   });

   saveItemToLocalStorage()
}


function createItem(){
   const newItem = itemInput.value;
    if(newItem){
       items.push(newItem)
       itemInput.value = ''
       saveItemToLocalStorage()
       renderItems ()

    }
}

// editItem
function editItem(index){
   const updateItem = prompt ('edit item:', items[index])
   if(updateItem !==null){
      items[index] = updateItem
      renderItems()
    }
}

function deleteItems(index){
    items.splice(index,1)
    renderItems()
}

form.addEventListener('submit',(e)=>{
   e.preventDefault()
   createItem()
})


renderItems()