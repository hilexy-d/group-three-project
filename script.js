const navMenu = document.getElementById('navMenu');
const iconToggle = document.getElementById('navToggle')
const icon = iconToggle.querySelector('i')
    
iconToggle.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')

    icon.classList.toggle('fa-bars')
    icon.classList.toggle('fa-times')
})

        // const backToTop =document.querySelector('.back-to-top');

        // window.addEventListener('scroll',()=>{
        //     if(window.scrolly < 300){
        //         backToTop.style.display ='block';
        //     }else{
        //         backToTop.style.display = 'none';
        //     }
        // });
        // backToTop.addEventListener('click',(e)=>{
        //     e.preventDefault();
        //     window.scrollTo({
        //         top:0,
        //         behavior: 'smooth'
        //     })
        // });