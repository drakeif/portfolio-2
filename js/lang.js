var arrLang = {
    'en': {
      'main': 'Home',
      'service': 'Service',
      'portfolio': 'Portfolio',
      'myname': '// My name`s',
      'order': 'Leave a request',
      'social': 'My social networks:',
      'fillform': 'Fill a form below and i`ll get touch with you soon',
      'item-1': 'Web-Design',
      'item-2': 'Front-end',
      'item-3': 'Back-end',
      'item-4': 'Google Analytics',
      'item-5': 'Google Ads',
      'item-6': 'Lead',
      'item-7': 'Service',
      'item-8': 'Domain',
      'item-9': 'Hosting',
      'item-10': 'Business card',
      'item-11': 'Landing Page',
      'item-12': 'Responsive',
      'item-desc-1': 'At each stage of creating a website, web designers use different tools',
      'item-desc-2': 'This is the process of creating a web page from a pre-created site design layout, pre-drawn with graphic editors',
      'item-desc-3': 'The process of designing, writing, testing, debugging and maintaining computer programs',
      'item-desc-4': 'This is a tool for collecting statistics on the site and generating reports that can be used to promote the site more effectively',
      'item-desc-5': 'An online advertising service that allows advertisers to compete to display short ad text for web users',
      'item-desc-6': 'The list of works related to the maintenance of the site includes works that are primarily related to content',
      'item-desc-7': 'Site maintenance includes two main areas of work with the site: technical support and site maintenance',
      'item-desc-8': 'A domain name or domain is the name of a site. You enter it in the address bar of your browser when you want to go to the site',
      'item-desc-9': 'Hosting is required to keep files with the site in round-the-clock access, manage these files and change their properties',
      'item-desc-10': 'A small site that usually consists of one (or more) web pages and contains basic information about the organization, individual, company, products or services, price lists, contact information',
      'item-desc-11': 'A one-page site that performs one specific task. Developers must convey a clear idea to visitors, and encourage them to take some action',
      'item-desc-12': 'This is a site with a design that looks equally good on all devices: PCs and laptops, smartphones and tablets',
    },
    'ua': {
        'main': 'Головна',
        'service': 'Послуги',
        'portfolio': 'Портфоліо',
        'myname': '// Мене звуть',
        'order': 'Залишити заявку',
        'social': 'Я в соц. мережах:',
        'fillform': 'Заповніть форму нище і я зв`яжуся з вами в найблжчий час',
        'item-1': 'Веб-дизайн',
        'item-2': 'Верстка',
        'item-3': 'Програмування',
        'item-4': 'Аналітика',
        'item-5': 'Реклама',
        'item-6': 'Супровід',
        'item-7': 'Обслуговування',
        'item-8': 'Домен',
        'item-9': 'Хостинг',
        'item-10': 'Сайт-візитка',
        'item-11': 'Лендінг',
        'item-12': 'Адаптивність',
        'item-desc-1': 'На кожному етапі створення сайту вебдизайнери послуговуються різними інструментами',
        'item-desc-2': 'Це процес створення веб-сторінки із попередньо створеного макету дизайну сайту, заздалегідь намальованого за допомогою графічних редакторів',
        'item-desc-3': 'Процес проектування, написання, тестування, зневадження і підтримки комп`ютерних програм',
        'item-desc-4': 'Це інструмент для збору статистики по сайту і формування звітів, за допомогою яких можна просувати сайт ефективніше',
        'item-desc-5': 'Онлайн-рекламний сервіс, який дозволяє рекламодавцям конкурувати для відображення коротких рекламних текстів для веб-користувачів',
        'item-desc-6': 'До переліку робіт, які належать до супроводу сайту відносять роботи, які, передусім, пов`язані з контентом',
        'item-desc-7': 'Обслуговування сайту включає в себе два основних напрямки по роботі з сайтом: технічна підтримку та супровід сайту',
        'item-desc-8': 'Доменне ім’я або домен — це ім’я сайту. Ви вводите його в адресному рядку веб-переглядача, коли хочете перейти на сайт',
        'item-desc-9': 'Хостинг потрібен, щоб зберігати файли із сайтом у цілодобовому доступі, керувати цими файлами та змінювати їх властивості',
        'item-desc-10': 'Невеликий сайт, що зазвичай складається з однієї (або декількох) веб-сторінок та містить основну інформацію про організацію, приватну особу, компанію, товари чи послуги, прайс-листи, контактні дані',
        'item-desc-11': 'Односторінковий сайт, який виконує одну певну задачу. Розробники повинні донести чітку думку до відвідувачів, і спонукати їх до здійснення якоїсь певноі дії',
        'item-desc-12': 'Це сайт з таким дизайном, який однаково добре виглядає на всіх пристроях: ПК і ноутбуках, смартфонах і планшетах',
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