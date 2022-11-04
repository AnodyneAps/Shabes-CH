  // Get the modal
  var modal = document.getElementById("shippingModal");

  var btns = document.getElementsByClassName('js-modal-btn');
  
  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("sh-close")[0];
  
  // When the user clicks the button, open the modal 

  for (var i = 0;i<btns.length;i+=1){
    var btn = btns[i];
    btn.onclick = function() {
        modal.style.display = "block";
    }
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    } else if (event.target == preorderModal) {
      preorderModal.style.display = "none";
    }
  }


///////////////////////////////
// *** Preorder modal *** //
/////////////////////////////

  var AllPremodalButtons = document.getElementsByClassName('js-preorderButton');
  
  // Get the modal
  var preorderModal = document.getElementById("js-preorder-popup-modal");

  // Get the <span> element that closes the modal
  var close_premodal = document.getElementsByClassName("js-preorder-close")[0];

  // Get the <span> element that closes the modal
  var close_premodal_button = document.getElementsByClassName("js-add-to-cart")[0];

  for (var i = 0;i<AllPremodalButtons.length;i+=1){
    var btn = AllPremodalButtons[i];
    btn.onclick = function() {
      preorderModal.style.display = "block";
    }
  }

  // When the user clicks on <span> (x), close the modal
  close_premodal.onclick = function() {
    preorderModal.style.display = "none";
  }

  // When the user clicks on <span> (x), close the modal
  close_premodal_button.onclick = function() {
    preorderModal.style.display = "none";
  }



///////////////////////////////
// *** TEKST OPEN CLOSE *** //
/////////////////////////////

  var Allreadmore = document.getElementsByClassName('text_area_open');

  for (var i = 0;i<Allreadmore.length;i+=1){
    var btn = Allreadmore[i];
    btn.onclick = function() {
      //var carousel = btn.closest('.carousel')
      //var flkty = Flickity.data(carousel); 
      var commonParrent = this.parentElement;
      commonParrent.classList.toggle('text_area--open');
      console.log(flkty)
      flkty.resize();
    }
  }

  flkty.on( 'change', function( index ) {
    var sliderOpen = this.slider.getElementsByClassName('text_area--open')[0];
    if (sliderOpen) {
      var button = sliderOpen.getElementsByClassName('text_area_open')[0];
      if (button) {
        button.click()
      }
    }
    
  });
