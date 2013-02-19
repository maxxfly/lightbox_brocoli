$().ready(function() {

  $('.lb_brocoli').bind('click touch', function(e)
    {
      $('body').append('<div id="popin"></div>');
      $('#popin').css('height', Math.max($('body').height(), $(window).innerHeight()));

      $('#popin').append('<div id="content_popin"><p>CHARGEMENT EN COURS</p></div>');
      $('#content_popin').prepend('<div id="close">FERMER</div>');
      $('#popin #close').bind('click', function()
			{
			  $('#popin').remove();
		  });

      var img = new Image();
      img.src = e.currentTarget.getAttribute('ref');
      $(img).load(function()
        {
          $('#popin p').replaceWith(img);
        }
      );

      return false;
    }
  );


});
