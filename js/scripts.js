jQuery(function($){

'use strict';


    /* ---------------------------------------------- /*
     * Countdown
    /* ---------------------------------------------- */

    (function () {
      // Contagem regressiva
     // Para alterar a data, basta editar: var endDate = 26 de janeiro de 2016 20:39:00";
    	$(function() {
    	  var endDate = "January 26, 2023 20:39:00";
    	  $('.tk-countdown .row').countdown({
    		date: endDate,
    		render: function(data) {
    		  $(this.el).html('<div><div class="days"><span>' + this.leadingZeros(data.days, 2) + '</span><span>days</span></div><div class="hours"><span>' + this.leadingZeros(data.hours, 2) + '</span><span>hours</span></div></div><div class="tk-countdown-ms"><div class="minutes"><span>' + this.leadingZeros(data.min, 2) + '</span><span>minutes</span></div><div class="seconds"><span>' + this.leadingZeros(data.sec, 2) + '</span><span>seconds</span></div></div>');
    		}
    	  });
    	});	
    }());


    /* ---------------------------------------------- /*
     * Preloader
    /* ---------------------------------------------- */
    
    (function () {
        $(window).load(function() {
            $('#pre-status').fadeOut();
            $('#st-preloader').delay(350).fadeOut('slow');
        });
    }());



    /* ---------------------------------------------- /*
     * Ajax Forms
    /* ---------------------------------------------- */

    (function () {
        // Validação de e-mail via expressão regular
        function isValidEmailAddress(emailAddress) {
          var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
          return pattern.test(emailAddress);
        };

    	// Ajax mailchimp
        // Exemplo MailChimp url: http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
        $('#subscribe').ajaxChimp({
          language: 'pt-br',
          url: 'http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx'
        });

         // Tradução do Mailchimp
         //
         // Padrões:
         //'enviar': 'Enviando...',
         // 0: 'Enviamos um email de confirmação',
         // 1: 'Por favor, insira um valor',
         // 2: 'Um endereço de e-mail deve conter um único @',
         // 3: 'A parte do domínio do endereço de e-mail é inválida (a parte após o @: )',
         // 4: 'A parte do nome de usuário do endereço de e-mail é inválida (a parte antes do @: )',
         // 5: 'Este endereço de e-mail parece falso ou inválido. Insira um endereço de e-mail real'

        $.ajaxChimp.translations.es = {
          'submit': 'Submitting...',
          0: '<i class="fa fa-check"></i> Nós entraremos em contato em breve!',
          1: '<i class="fa fa-warning"></i>Você deve inserir um endereço de email válido.',
          2: '<i class="fa fa-warning"></i> O endereço de email não é válido.',
          3: '<i class="fa fa-warning"></i> O endereço de email não é válido.',
          4: '<i class="fa fa-warning"></i> O endereço de email não é válido.',
          5: '<i class="fa fa-warning"></i> O endereço de email não é válido.'
        }

    }());

	
});