$(document).ready(function(){
  
var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
            // build scenes
            
  new ScrollMagic.Scene({triggerElement: ".parallaxParent"})
  .setTween(".parallaxParent > div", {y: "20%", ease: Linear.easeNone})
  .addTo(controller);
/*
new ScrollMagic.Scene({triggerElement: "#parallax1"})
  .setTween("#parallax1 > div", {y: "20%", ease: Linear.easeNone})
  .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#parallax2"})
  .setTween("#parallax2 > div", {y: "20%", ease: Linear.easeNone})
  .addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#parallax3"})
  .setTween("#parallax3 > div", {y: "20%", ease: Linear.easeNone})
  .addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#parallax4"})
  .setTween("#parallax4 > div", {y: "20%", ease: Linear.easeNone})
  .addTo(controller);
/***** new ScrollMagic.Scene({triggerElement: "#text1"})
  .setTween("#text1 > div", {y: "105%", ease: Linear.easeNone})
  .addTo(controller);*********/

  })

/***** fin de parallax *********/


