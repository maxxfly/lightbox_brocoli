$().ready(function() {

  $('.lb_brocoli').bind('click touch', function(e)
    {
      $('body').append('<div id="popin"></div>');
      $('#popin').css('height', Math.max($('body').height(), $(window).innerHeight()) + 200);

      $('#popin').append('<div id="content_popin"><p>CHARGEMENT EN COURS</p></div>');
      $('#content_popin').prepend('<div id="close">FERMER</div>');
      $('#content_popin').css('margin-top', $(window).scrollTop() + 10);

      var img = new Image();
      img.src = e.currentTarget.getAttribute('ref');
      $(img).load(function()
        {
          $('#popin p').replaceWith(img);
          $('#popin IMG').css('max-height', Math.round(document.body.clientHeight - 30));

        }
      );

      $('#popin #close').bind('click', function()
			{
			  $('#popin').remove();
		  });


      return false;
    }
  );
});
