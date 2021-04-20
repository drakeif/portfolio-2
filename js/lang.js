var arrLang = {
    'en': {
      'main': 'Home',
      'service': 'Service',
      'portfolio': 'Portfolio',
      'myname': '// My name is',
      'order': 'Leave a request',
      'social': 'My social networks:',
    },
    'ua': {
        'main': 'Головна',
        'service': 'Послуги',
        'portfolio': 'Портфоліо',
        'myname': '// Мене звуть',
        'order': 'Залишити заявку',
        'social': 'Я в соц. мережах:',
    }
}

$(function() {
    $('.translate').click(function() {
      var lang = $(this).attr('id');
    
      $('.lang').each(function(index, item) {
        $(this).text(arrLang[lang][$(this).attr('key')]);
      });
    });
  });