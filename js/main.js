
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
    navItems[0].className='nav-small';
    navItems[i].className='';

    if(e.target.tagName==='A'){
      e.target.className='nav-selected';
    }else if(e.target.tagName==='IMG'){
      e.target.parentNode.className='nav-selected';
    }
  }
});

//-----------MOBILE NAV BAR INTERACTION-----------//

// mobileBtn=document.querySelector('.nav-small');
// mobileImg= document.querySelector('.nav-small > img');
//
// mobileBtn.addEventListener('click',()=>{
//   e.target.className='';
//   e.target.style.transform='rotate(90deg)';
// });


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
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      messageUser.insertBefore(a,messageForUser);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

autocomplete(document.getElementById("user-search"), users);


//-----------SAVE SETTINGS TO LOCAL STORAGE-----------//



const emailCheckbox= document.querySelector('#notifications');
const publicCheckbox= document.querySelector('#public');
const timeZone = document.querySelector('#timezone');
//const timeZoneOptions = document.getElementsByTagName('option');
let tzo;
let emailSet= localStorage.getItem("email");
let publicSet= localStorage.getItem("public");
let timeZoneSet= localStorage.getItem("timezone");



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
  //tzo = timeZone.value;
  tzo = JSON.stringify(timeZone.value)
  localStorage.setItem('tzo', JSON.stringify(timeZone.value));
  //console.log(tzo);
});




document.addEventListener('DOMContentLoaded',()=>{
  if (emailSet === "on"){
    emailCheckbox.checked = true;
  }

  if(publicSet === "on"){
    publicCheckbox.checked = true;
  }

  let retrievedObject = localStorage.getItem('tzo');

  console.log(JSON.parse(retrievedObject));
  // if(tzo=== true)
  //   tzo
});
