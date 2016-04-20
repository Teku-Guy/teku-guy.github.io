jQuery(document).ready(function() {
    
    jQuery(".menu-trigger").click(function() {
        
        jQuery(".nav").slideToggle(350, function() {
            jQuery(this).toggleClass("nav-expanded").css('display', '');
        });
        
    });
    
});