document.addEventListener("DOMContentLoaded", function(){
    var input = document.querySelector('.todo-action');
    var btn = document.querySelector('.todo-add');
    var content = document.querySelector('.todo-content');



    content.addEventListener('click', function(e){
      // removing items from the list
      if(e.target && e.target.matches('.icon-close')) {
        e.target.parentElement.remove();
      } else if (e.target && e.target.matches('.ion-md-square-outline')) {
        e.target.classList.remove('ion-md-square-outline');
        e.target.classList.add('ion-md-checkbox-outline')
        e.target.parentElement.children[1].classList.add('checked');
        console.log(e.target);
      }
    });


    // adding new activity
    btn.addEventListener('click', function(){
      if(input.value) {

       // create all new elements
       var newWrapper = document.createElement('div');
       var newIcon = document.createElement('i');
       var newList = document.createElement('ul');
       var newListItem = document.createElement('li');
       var newIconSecond = document.createElement('ion-icon');

       // append elements to the DOM tree
       content.appendChild(newWrapper);
       newWrapper.classList.add('todo-wrapper');

       newWrapper.appendChild(newIcon);
       // newIcon.setAttribute('name', 'square-outline');
       newIcon.classList.add('ion-md-square-outline');

       newWrapper.appendChild(newList);
       newList.classList.add('todo-list');

       newList.appendChild(newListItem);
       newListItem.classList.add('todo-list-item');

       newWrapper.appendChild(newIconSecond);
       newIconSecond.classList.add('icon-close');
       newIconSecond.setAttribute('name', 'close');

       // add text from input
       newListItem.innerText = input.value;

     } else {
       console.log('Just anything, really!');
     }

     //reset placeholder
     input.value = '';
    });

});
