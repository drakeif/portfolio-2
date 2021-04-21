var arrLang = {
    'en': {
      'main': 'Home',
      'service': 'Service',
      'portfolio': 'Portfolio',
      'myname': '// My name`s',
      'order': 'Leave a request',
      'social': 'My social networks:',
      'fillform': 'Fill a form below and i`ll get touch with you soon',
    },
    'ua': {
        'main': 'Головна',
        'service': 'Послуги',
        'portfolio': 'Портфоліо',
        'myname': '// Мене звуть',
        'order': 'Залишити заявку',
        'social': 'Я в соц. мережах:',
        'fillform': 'Заповніть форму нище і я зв`яжуся з вами в найблжчий час',
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