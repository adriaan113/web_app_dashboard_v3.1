
//-----------NOTIFICATION ICON MENU-----------//

const icon= document.querySelector('.icon > img');
const iconAfter= document.querySelector('.notification-dot');

const messageClose= document.querySelectorAll('.icon-menu-close');
const message= document.querySelectorAll('.icon-menu-items');

icon.addEventListener('click', ()=>{
  iconAfter.style.display='none';
});



function iconMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}


document.addEventListener('click',(e)=>{
  if(e.target.classList.contains('icon-menu-close')){
    e.target.parentNode.style.display= 'none';

    }else if(!event.target.matches('.dropbtn')){
      const dropdowns = document.getElementsByClassName("dropdown-content");
          for (let i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
});


//-----------ALERT MESSAGE-----------//

const alert= document.querySelector('#alert');

alert.innerHTML= `<div class="alert-banner">
                  <p class="alert-message"><strong> Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
                  <p class="alert-banner-close">x</p>
                  </div>`

alert.addEventListener('click', e=>{
  const element = e.target;
  if(element.classList.contains("alert-banner-close")){
    alert.style.display="none";
  }
});

//-----------NAV BAR INTERACTION-----------//

const navSelect= document.querySelector('nav');
const navItems= document.querySelectorAll('nav > a');

navSelect.addEventListener('click',(e)=>{
  for(let i=0;i<navItems.length;i++){
    navItems[i].className='';

    if(e.target.tagName==='A'){
      e.target.className='nav-selected';
    }else if(e.target.tagName==='IMG'){
      e.target.parentNode.className='nav-selected';
    }
  }
});


//-----------TRAFFIC INTERACTION-----------//

const tNavLink= document.querySelectorAll('.t-nav-link');


for (let i = 0; i < tNavLink.length; i++) {
  tNavLink[i].addEventListener("click", function() {
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


//-----------SEND FORM-----------//

const sendBtn= document.querySelector('#message-form > button');
let sendPopUp=  document.createElement("DIV");
const messageUser= document.querySelector('#message-form');

const searchForUser= document.querySelector('#user-search');
const messageForUser= document.querySelector('#user-message');

sendPopUp.className='send-pop-up';


messageUser.appendChild(sendPopUp);
messageUser.insertBefore(sendPopUp, sendBtn);

// setTimeout(function(){
//     sendPopUp.style.display='none';
// }, 3000);

sendBtn.addEventListener('click', ()=>{

if(searchForUser.value.length === 0) {

    sendPopUp.classList.add('error');

  sendPopUp.innerHTML= `
                        <p class="send-pop-up-message">User not selected</p>
                        <p class="send-pop-up-close">x</p>
                        `
  sendPopUp.style.display='flex';

}else if(messageForUser.value.length === 0){

    sendPopUp.classList.add('error');

  sendPopUp.innerHTML= `
                        <p class="send-pop-up-message">No message to send!</p>
                        <p class="send-pop-up-close">x</p>
                        `
  sendPopUp.style.display='flex';
}
else{

  sendPopUp.classList.remove('error');
  sendPopUp.classList.add('succes');

  sendPopUp.innerHTML= `
                        <p class="send-pop-up-message">Message on it's way!</p>
                        <p class="send-pop-up-close">x</p>
                        `
  sendPopUp.style.display='flex';
}



});

sendPopUp.addEventListener('click', e=>{
  const element = e.target;
  if(element.classList.contains("send-pop-up-close")){
    sendPopUp.style.display="none";
  }
});

//-----------AUTOCOMPLETE INPUT FIELD-----------//
//copied from w3schools//

let users=["indiana jones","guust flater","kapitein haddock","duke nukem"];

function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(a);
      messageUser.insertBefore(a,messageForUser);
      for (i = 0; i < arr.length; i++) {
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          b = document.createElement("DIV");
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
              b.addEventListener("click", function(e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        currentFocus++;
        addActive(x);
      } else if (e.keyCode == 38) {
        currentFocus--;
        addActive(x);
      } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}

document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

autocomplete(document.getElementById("user-search"), users);


//-----------SAVE SETTINGS TO LOCAL STORAGE-----------//

const emailCheckbox= document.querySelector('#notifications');
const publicCheckbox= document.querySelector('#public');
let emailSet= localStorage.getItem("email");
let publicSet= localStorage.getItem("public");
const timeZone = document.querySelector('#timezone');
let timeZoneSet= localStorage.getItem("timeZone", timeZone.value);


emailCheckbox.addEventListener('click',()=>{
  if(emailCheckbox.checked=== true){
    localStorage.setItem("email", "on");
  } else if(emailCheckbox.checked=== false){
    localStorage.setItem("email", "off");
  }
});

publicCheckbox.addEventListener('click',()=>{
  if(publicCheckbox.checked=== true){
    localStorage.setItem("public", "on");
  } else if(publicCheckbox.checked=== false){
    localStorage.setItem("public","off");
  }
});

timeZone.addEventListener('input',()=>{
  localStorage.setItem('timeZone', timeZone.value);
});

document.addEventListener('DOMContentLoaded',()=>{
  if (emailSet === "on"){
    emailCheckbox.checked = true;
  }

  if(publicSet === "on"){
    publicCheckbox.checked = true;
  }

  timeZone.value = timeZoneSet;
});
