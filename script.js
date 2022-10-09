let ps = document.querySelector('.ps');
let imageBesar = document.querySelector('.image-besar img')
ps.addEventListener('click',function(e){
    if(e.target.className == 'ps1')
    {
        imageBesar.setAttribute('src','1.png');
    }
    else if(e.target.className == 'ps2')
    {
        imageBesar.setAttribute('src','2.png');
    }

    imageBesar.classList.add('animasi-besar');
    setTimeout(function(){
        imageBesar.classList.remove('animasi-besar');
    },2500)
});