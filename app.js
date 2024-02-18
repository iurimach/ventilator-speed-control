var wrapper=document.querySelector('.wrapper')
var propeler=document.querySelector('.propeler')
var buttons = document.querySelectorAll('button');

function stop() {
    
    propeler.classList.remove("propeler1");
    propeler.classList.remove("propeler2");
    
    propeler.classList.add("propeler");

    // გადაუვლის ყველა კლასს აკტივ რომლსც აქ გაუქრობს
    buttons.forEach(function(button) {
        button.classList.remove('activebutton');
      });
      // ხელახლა მივანიჭებ აქტივ კლასს
    var stopbutton=document.querySelector('.stopbutton')
    stopbutton.classList.add("activebutton");

    wrapper.style.backgroundColor = "rgb(25, 20, 0)";
    propeler.style.backgroundColor = "rgb(25, 20, 0)";
    propeler.style.borderRadius = "50%";
}

function play() {
    
    propeler.classList.remove("propeler2");
    propeler.classList.add("propeler1");
    buttons.forEach(function(button) {
        button.classList.remove('activebutton');
      });

    // გადაუვლის ყველა კლასს აკტივ რომლსც აქ გაუქრობს
    buttons.forEach(function(button) {
        button.classList.remove('activebutton');
      });
      // ხელახლა მივანიჭებ აქტივ კლასს
    var stopbutton=document.querySelector('.playbutton')
    stopbutton.classList.add("activebutton");
    wrapper.style.backgroundColor = "rgb(232, 225, 151)";
    propeler.style.backgroundColor = "rgb(232, 225, 151)";
    propeler.style.borderRadius = "50%";
  }
  
function fastplay() {
    
    propeler.classList.remove("propeler");
    propeler.classList.add("propeler2");
    console.log("shemovida")

     // გადაუვლის ყველა კლასს აკტივ რომლსც აქ გაუქრობს
     buttons.forEach(function(button) {
        button.classList.remove('activebutton');
      });
      // ხელახლა მივანიჭებ აქტივ კლასს
    var stopbutton=document.querySelector('.fastbutton')
    stopbutton.classList.add("activebutton");

    propeler.style.backgroundColor = "rgb(166, 28, 138)";
    propeler.style.borderRadius = "50%";
    wrapper.style.backgroundColor = "rgb(232, 225, 151)";
  }



