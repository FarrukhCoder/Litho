let elOpenBtn = document.getElementById('openBtn');
let elOpenBox = document.getElementById('burgerMenu');
let eltoggleMenu = document.getElementById('toggleMenu');
let elmainBody = document.getElementById('mainBody');

let count = 0;

elOpenBtn.addEventListener('click' , function (){
    elOpenBox.classList.toggle('show');
    if(count == 0){
        elmainBody.className = 'fixed'
        eltoggleMenu.className = 'bx bx-x';
        count++;
    } else{
        count = 0;
        eltoggleMenu.className = 'bx bx-menu'
        elmainBody.className = 'cancel-fixed'
    }

})
