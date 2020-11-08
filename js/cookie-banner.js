$(document).ready(function(){
    if(!$.cookie('cookieBanner')){
      $("#cookie-banner").show();
      $.cookie('cookieBanner', 'Y', { expires: 365*3 });
    }
  });