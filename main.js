let openButton=document.querySelector('#open-button');
let closeButton=document.querySelector('#close-button');
let navBar=document.querySelector('#navbarSupportedContent');
let dropDown=document.querySelectorAll('.dropdown');
let dropMenu=document.querySelectorAll('.drop-menu');
let arrow=document.querySelectorAll('.dropdown a img');

openButton.onclick= ()=>{
    navBar.classList.add('show');
    document.body.classList.add('grey');
};

closeButton.onclick=()=>{
    navBar.classList.remove('show');
    document.body.classList.remove('grey');
};

dropDown.forEach((d, index)=>{
    d.onclick=()=>{
        let m=dropMenu[index];
        let a=arrow[index];
        
        if(getComputedStyle(m).display==='none'){
            m.style.display='block';
            a.classList.add('rotate');
        }else{
            m.style.display='none';
            a.classList.remove('rotate');
        };
    
    };
});