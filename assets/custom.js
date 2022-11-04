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