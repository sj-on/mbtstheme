(function($){  
  $(function(){
    $(document).foundationMediaQueryViewer();
    
    $(document).foundationAlerts();
    $(document).foundationAccordion();
    $(document).tooltips();
    $('input, textarea').placeholder();
    
    
    
    $(document).foundationButtons();
    
    
    
    $(document).foundationNavigation();
    
    
    
    $(document).foundationCustomForms();
    
    
    
      
      $(document).foundationTabs({callback:$.foundation.customForms.appendCustomMarkup});
      
    
    
    
    $("#featured").orbit();
  });
  
})(jQuery);
