
//-----------NAV BAR INTERACTION-----------//

const navSelect= document.querySelector('nav');
const navItems= document.querySelectorAll('nav > a');

navSelect.addEventListener('click',(e)=>{
  for(let i=0;i<navItems.length;i++){
    navItems[0].className='nav-small';
    navItems[i].className='';

    if(e.target.tagName==='A'){
      e.target.className='nav-selected';
    }else if(e.target.tagName==='IMG'){
      e.target.parentNode.className='nav-selected';
    }
  }
});


//-----------TRAFFIC INTERACTION-----------//

//const tNav= document.querySelector('.t-nav');
const tNavLink= document.querySelectorAll('.t-nav-link');


for (let i = 0; i < tNavLink.length; i++) {
  tNavLink[i].addEventListener("click", function() {
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
