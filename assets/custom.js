/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */

$('.ProductItem__ColorSwatchItem:not(a)').on('mouseover', function () {
  $(this).find('input[type=radio]').checked = ! $(this).find('input[type=radio]').checked;
  $(this).find('label').trigger('click');
});
$('a.ProductItem__ColorSwatchItem').on('mouseover', function () {
  $(this).find('input[type=radio]').checked = ! $(this).find('input[type=radio]').checked;
  $(this).parents('.ProductItem').find('.ColorSwatch').removeClass('is-active');
  $(this).find('.ColorSwatch').addClass('is-active');
  
  var productItem = $(this).parents('.ProductItem'), variantUrl = $(this).find('input[type=radio]').attr('data-variant-url');
  productItem.find('.ProductItem__ImageWrapper').attr('href', variantUrl);
  productItem.find('.ProductItem__Title > a').attr('href', variantUrl); // If we have a custom image for the variant, we change it

  var originalImageElement = productItem.find('.ProductItem__Image:not(.ProductItem__Image--alternate)');
  originalImageElement.attr('data-image-id', $(this).find('input[type=radio]').attr('data-image-id'));
  originalImageElement.attr('srcset', $(this).find('input[type=radio]').attr('data-image-url'));
  originalImageElement.attr('data-widths', $(this).find('input[type=radio]').attr('data-image-widths'));
  originalImageElement.attr('data-sizes', 'auto');
});
$('a.ProductItem__ColorSwatchItem').on('mouseout', function () {
  var productItem1 = $(this).parents('.ProductItem'), variantUrl1 = $(this).parents('.ProductItem__ColorSwatchList').find('input[type=radio]:checked').attr('data-variant-url');
  productItem1.find('.ProductItem__ImageWrapper').attr('href', variantUrl1);
  productItem1.find('.ProductItem__Title > a').attr('href', variantUrl1);
  
  var originalImageElement1 = productItem1.find('.ProductItem__Image:not(.ProductItem__Image--alternate)');
  originalImageElement1.attr('data-image-id', $(this).parents('.ProductItem__ColorSwatchList').find('input[type=radio]:checked').attr('data-image-id'));
  originalImageElement1.attr('srcset', $(this).parents('.ProductItem__ColorSwatchList').find('input[type=radio]:checked').attr('data-image-url'));
  originalImageElement1.attr('data-widths', $(this).parents('.ProductItem__ColorSwatchList').find('input[type=radio]:checked').attr('data-image-widths'));
  originalImageElement1.attr('data-sizes', 'auto');
  
  $(this).parents('.ProductItem__ColorSwatchList').find('.ColorSwatch').removeClass('is-active');
  $(this).parents('.ProductItem__ColorSwatchList').find('input[type=radio]:checked').next('.ColorSwatch').addClass('is-active');
});
$('a.ProductItem__ColorSwatchItem, .More--colors .HorizontalList__Item').on('click', function () {
  window.location.href = $(this).attr('href');
});


  // Every day counter 
 // Every day counter 
  const counter = document.getElementById("product__counter");
  if(counter){
  setInterval(() => {
	  //set day hours
	  const d = new Date();
	  const setTimeOfDay = d.getHours();
	  //set day hours
	  let	date1 = new Date().setHours(08,59,59) 
	  let date2 =  new Date().setHours(14,59,59) 
	  let date3 = new Date().setHours(32,59,59) 
  
	const currentDate = d;
	const timeBetweenDates1 = Math.ceil(( date1 - currentDate ) / 1000)
	  const timeBetweenDates2 = Math.ceil(( date2 - currentDate ) / 1000);
	  const timeBetweenDates3 = Math.ceil(( date3 - currentDate ) / 1000)
			  if(setTimeOfDay >= 0 && setTimeOfDay < 9){
				  if(timeBetweenDates1 < 0) return
				  countTimer(timeBetweenDates1)
			  }
			  else if(setTimeOfDay >= 9 && setTimeOfDay < 15){
				  if(timeBetweenDates2 < 0) return
				  countTimer(timeBetweenDates2)
			  }
			  else{
				  if(timeBetweenDates3 < 0) return
				  countTimer(timeBetweenDates3)
			  }
	  }, 1000)
  //add zeros
  function addZero(num) {
	  return ("0" + parseInt(num)).substr(-2);
  }
  function countTimer(time){
	  const seconds = addZero(time % 60)
	  const minutes = addZero(Math.floor(time / 60) % 60)
	  const hours = addZero(Math.floor(time / 3600))
		counter.innerHTML = "<div class='inner'>"+hours+"<span class='dots'>:</span></div><div class='inner'>"+minutes+"<span class='dots'>:</span></div><div class='inner'>"+seconds+"</div>";
  }
  }
  
  
  const closeBtn = document.querySelector(".close__btn");
  const flipBar = document.querySelector(".flip-container");
  
  if(flipBar){
  window.addEventListener("scroll", () => {
	  let scroll = this.scrollY;
	  if(scroll > 699){ flipBar.classList.add("fixed-bottom")
	  }
	  else if(scroll < 500) {flipBar.classList.remove("fixed-bottom")
	}
	});
  if(closeBtn){
	  closeBtn.addEventListener("click", ()=>{
		  localStorage.setItem("className", "show-flip");
		  let classFromLocalStorage = localStorage.getItem("className");
		  if (!classFromLocalStorage){
			  flipBar.classList.add("show-flip")
		  }
		  flipBar.classList.remove("show-flip");
	  });
  }
  
  
  const checkCookie = () => {
	  let classFromLocalStorage = localStorage.getItem("className");
	  if(classFromLocalStorage == "show-flip") {
		  flipBar.classList.add("hide");
		  flipBar.classList.remove("show-flip");
	  } else {
		  flipBar.classList.add("show-flip");
		  flipBar.classList.remove("hide");
	  }
  }
  
  window.onload = () =>{
	  setTimeout(()=>{
		  checkCookie();
	  },1000)
  }
  
  
  // clear localStorage after some time 
  let  minute = 3; // to clear the localStorage after 1 minute
				 // (if someone want to clear after 1 hour multiply by extra 60 or if you want to add more minuttes simply add 10 infront of minute variable)
  let now = new Date().getTime();
  var setupTime = localStorage.getItem('setupTime');
  if (setupTime == null) {
	  localStorage.setItem('setupTime', now)
  } else {
	  if(now-setupTime > minute*60*1000) {
		 localStorage.removeItem("className");
		  localStorage.setItem('setupTime', now);
	  }
  }
  
  setInterval(() => {
	  //set day hours
	  const d = new Date();
	  const setTimeOfDay = d.getHours();
	  //set day hours
	  let	date1 = new Date().setHours(08,59,59) 
	  let date2 =  new Date().setHours(14,59,59) 
	  let date3 = new Date().setHours(32,59,59) 
  
	const currentDate = d;
	const timeBetweenDates1 = Math.ceil(( date1 - currentDate ) / 1000)
	  const timeBetweenDates2 = Math.ceil(( date2 - currentDate ) / 1000);
	  const timeBetweenDates3 = Math.ceil(( date3 - currentDate ) / 1000)
			  if(setTimeOfDay >= 0 && setTimeOfDay < 9){
				  if(timeBetweenDates1 < 0) return
				  flipAllCards(timeBetweenDates1)
			  }
			  else if(setTimeOfDay >= 9 && setTimeOfDay < 15){
				  if(timeBetweenDates2 < 0) return
				  flipAllCards(timeBetweenDates2)
			  }
			  else{
				  if(timeBetweenDates3 < 0) return
				  flipAllCards(timeBetweenDates3)
			  }
	  }, 1000)
  
  
  function flipAllCards(time) {
	const seconds = time % 60
	const minutes = Math.floor(time / 60) % 60
	const hours = Math.floor(time / 3600)
  
	flip(document.querySelector("[data-hour-tens]"), Math.floor(hours / 10))
	flip(document.querySelector("[data-hour-ones]"), hours % 10)
	flip(document.querySelector("[data-minute-tens]"), Math.floor(minutes / 10))
	flip(document.querySelector("[data-minute-ones]"), minutes % 10)
	flip(document.querySelector("[data-second-tens]"), Math.floor(seconds / 10))
	flip(document.querySelector("[data-second-ones]"), seconds % 10)
  }
  
  function flip(flipCard, newNumber){
  
	  const topHalf = flipCard.querySelector(".top");
	  const startNumber = parseInt(topHalf.textContent);
	  if(newNumber === startNumber) return 
  
	  const bottomHalf = flipCard.querySelector(".bottom");
	  const topFlip = document.createElement("div");
	  topFlip.classList.add("top-flip");
	  const bottomFlip = document.createElement("div");
	  bottomFlip.classList.add("bottom-flip");
  
  
  topHalf.textContent = startNumber;
  bottomHalf.textContent = startNumber;
  topFlip.textContent = startNumber;
  bottomFlip.textContent = newNumber;
  
  
  
  topFlip.addEventListener("animationstart", e =>{
	  topHalf.textContent = newNumber;
  })
  topFlip.addEventListener("animationend", e =>{
	  topFlip.remove();
  })
  
  bottomFlip.addEventListener("animationend", e =>{
	  bottomHalf.textContent = newNumber;
	  bottomFlip.remove();
  })
  
  flipCard.append(topFlip, bottomFlip);
  }
  }