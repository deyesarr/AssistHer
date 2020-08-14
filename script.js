var cardAnimationCollection = [];

function initAnimation(parentElement){
  var listItems = $(parentElement+" li");
  listItems.each(function(idx, li) {
     cardAnimationCollection.push({"position": $(li).position(),"height":$(li).outerHeight(), "dom":li});
  });
  
  if(cardAnimationCollection.length > 0){
      registerScrollEvents(parentElement);
  } else {
    alert("Need some child elements to animate");
  }

}

function registerScrollEvents(parentElement){
    $(parentElement).on('scroll', function() {
    
      var scrollTop = $(this).scrollTop();
      var initPosition = cardAnimationCollection[0].position.top;
      
      var ct = 0;
      cardAnimationCollection.forEach(function(childNode) {
        ct++;
        
         var currentHeight = childNode.height;
         var rangeA = (currentHeight )/1.2;
         var rangeB = (currentHeight );
         var scrollDifference = $(childNode.dom).position().top;
        
        if(scrollDifference <= 0 && scrollDifference >= -rangeB ){
          var degDifference = rangeB - rangeA;
          var degParts = degDifference - (-scrollDifference)  ;
          var individualDeg = (30/degDifference);
          var translateY = (-25/degDifference);
          var translateZ = (-6/degDifference);
          var rotateX = (degParts*individualDeg);
          
        // console.log("Animate", ct, degDifference,"-",-scrollDifference, "=",degParts, "rotate degres", rotateX);
          
          if(rotateX <= 0){
            rotateX = -rotateX; 
            var translateY = -(degParts*translateY);
            var translateZ = -(degParts*translateZ);
            $(childNode.dom).css('transform-origin','50% 100% 0px');
            $(childNode.dom).css('transform','rotateX('+rotateX+'deg) translate3d(0px, '+translateY+'px, '+translateZ+'px)');
          }
         
    
         } 
        
        
      });
    
    });
}

function meditationPic(){
  window.open("Meditation.html","_self")
}

function fashionPic(){
  window.open("https://www.amazon.com/","_self")
}