//Global Varibales
let sections = document.querySelectorAll("section");
let navigation = document.querySelector(".navbar-nav");

//Adding li To Navigation 
let newNav = ()=>{
    for ( section of sections){
        let li = document.createElement('li');
        li.dataset.nav = section.id;
        li.innerHTML = section.dataset.nav;
        navigation.appendChild(li);   
        li.classList.add('nav-link');
     }
};

newNav();
        // click to reach section
        const li = document.querySelectorAll('li');
        li.forEach((item) => {
            item.addEventListener('click',function(){
                let el = document.getElementById(item.getAttribute('data-nav'));
                el.scrollIntoView({behavior :"smooth" , block:"center"});
            })
        });    
    // Add  & Remove Class Active
    
        const links = document.querySelectorAll('.nav-link');        
        function scroll() {
            let index = sections.length;          
            while(--index && window.scrollY + 250 < sections[index].offsetTop) {}
            links.forEach((link) => link.classList.remove('active'));
            links[index].classList.add('active');
          }
          window.addEventListener('scroll', scroll);

    // action Class Active when scroll on page with number of px move  
     

