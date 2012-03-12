/* ---------------------------------- */

/* Initialize */

jQuery(
  
  function ($) {

    $.Body = $('body');
    
    $.Window = $(window);
    
    $.Scroll = ($.browser.mozilla || $.browser.msie) ? $('html') : $.Body;
    
    $.Mobile = ($.Body.hasClass('webkit-mobile') || (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)));
    
    $('[data-script]').Instantiate();
    
    $('[data-target=_blank]').TargetBlank();

 
  } 
  
);

/* ---------------------------------- */

/* Events */

(function($) {

  $.Events = {
          
     SCROLL: 'windowScroll'

  } // Events  
  

   
  
})(jQuery);


/* ---------------------------------- */

/* Auto Instantiate */

(function($) {

  $.fn.Instantiate = function(settings) {
     
    var config = {};
 
    if (settings) $.extend(config, settings);
  
      this.each(function() { 

          var $self = $(this),
              $script = $self.attr('data-script');
                  
          if ($self[$script])
            $self[$script]();
              
      });
      
  }
    
  

})(jQuery);





/* ---------------------------------- */

/* Content */

(function($) {

  $.fn.Content = function(settings) {
     
    var config = {};
 
    if (settings) $.extend(config, settings);
  
      this.each(function() { 
    
         var $self = $(this),
             $section = $self.find('section'),
             $header = $self.find('header'),
             $a = $section.find('a.launch'),
             _lineHeight = 25,
             _headerOffsets = new Array(0, 300, 650),
             _active = 0;

         if (!$.Mobile) {
         
         
           $a.each(
            function(e){
            
              $(this).append( $('<em/>').html(' &rarr; ') );
            
            })
           
           
           _size();
           
           $.Body.bind('resize',_size)
         
           $.Window
             .bind('scroll',
              function(e){
              
                var mTop = $.Window.scrollTop();
  
                if (mTop>_headerOffsets[2]-_lineHeight) _active = 2;              
                if (mTop>=_headerOffsets[1]-_lineHeight && mTop<_headerOffsets[2]-_lineHeight) _active = 1;
                if (mTop<_headerOffsets[1]-_lineHeight) _active = 0;
  
              
                $header.each(function(index){
                
                 
                  
                  if(index>0) {
                
                    var thisMTop = mTop
                  
                    if (thisMTop>_headerOffsets[index] - _lineHeight)
                      thisMTop = _headerOffsets[index] - _lineHeight
                
                    $(this).css({marginTop:-thisMTop})
                  
                  }
                  
                  if (index===_active)
                    $(this).parent().addClass('_active')
                  else
                    $(this).parent().removeClass('_active')
                    
                  
                  $(this).bind('click',
                    function(e) {
                      
                      $.Scroll.stop().animate({scrollTop: _headerOffsets[index]}, 400, 'easeOutQuart')
                      e.preventDefault();
                      
                    })
                  
  
                })
            
             })
            
            
            
          }
          
          
          
          function _size() {
            $.Body.css({paddingBottom:$.Window.height()*.5})
          }
            
         
         
                       
      });
      
      
      return this;
  }
  
  
  $.fn.Section = function(settings) {
     
    var config = {};
 
    if (settings) $.extend(config, settings);
  
      this.each(function(index) { 
    
         var $self = $(this),
             $header = $self.find('header'),
             _height = $self.outerHeight();
         
         if (!$.Mobile)
          $.Window
           .bind('scroll',
            function(e){
            
              if(index>0)
                $header.css({marginTop:-$.Window.scrollTop()})
            
            
            })
         
         
                       
      });
      
      
      return this;
  }

})(jQuery); 



/* ---------------------------------- */

/* TargetBlank */

(function($) {

  
   $.fn.TargetBlank = function() {
   
     this.each(function() { 
      
        var $self = $(this);
            
        
        $self
        .attr('target','_blank');
        
            
     });
     
    return this;
     
  }
    
   
    
})(jQuery);