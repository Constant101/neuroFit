$(function(){

    var p = $('.animated-text');

    $(window).scroll(function(){
        if ( $(this).scrollTop() > p.offset().top - 1200 ) {
            p.addClass('animation_typing');
        }
    });

  const navToggle = $("#nav-icon");
    const nav = $("#nav");

    navToggle.on("click", function(event) {
        event.preventDefault();
        $(this).toggleClass('open');
        nav.toggleClass("show");
        if($(nav).hasClass('show')){
            $('body').css('overflow', 'hidden');
            $('.header').addClass('show');
        } else { 
            $('body').css('overflow', 'visible'); 
            $('.header').removeClass('show');}
    });


    let SELECTORS = {
      frontal_lobe: '.tdc-frontal-lobe',
      cerebellum: '.tdc-cerebellum',
      occipital_lobe: '.tdc-occipital-lobe',
      parietal_lobe: '.tdc-parietal-lobe',
      temporal_lobe: '.tdc-temporal-lobe',
      brain_stem: '.tdc-brain-stem',
      info_title: '.tdc-info-title',
      info_description: '.tdc-info-description',
      filter_container: '.tdc-main-right-filter',
      filter_item: '.tdc-main-right-filter-item',
      brain: '.tdc-main-right-demo-brain'
  };
  
  let CLASSES = {
      filter_item: 'tdc-main-right-filter-item'
  };
  
  let info = {
      brain: {
          frontal_lobe: {
              'selector': SELECTORS.frontal_lobe,
              'title': 'Лобная доля',
              'description': 'Лобная доля - это самая недавно развившаяся часть мозга и последняя, которая развивается в молодом возрасте. Это дорсо-латеральный префронтальный контур головного мозга. Ответственна за поиск решений сложных задач, планирование на перспективу,поиск в памяти соответствующего опыта, направление поведение с помощью словесных навыков и обеспечение рабочей памятью.',
              'highlight': ['планирование', 'двигательные_функции', 'функции_высшего_порядка', 'рассуждение', 'суждение', 'импульсный_контроль', 'память', 'язык'
              ]
          },
  
          cerebellum: {
              'selector': SELECTORS.cerebellum,
              'title': 'Мозжечок',
              'description': 'Отдел, отвечающий за координацию движений, регуляцию равновесия и мышечного тонуса. У человека располагается позади продолговатого мозга и варолиева моста, под затылочными долями полушарий головного мозга.',
              'highlight': ['тонкая_двигательная_координация', 'баланс_и_равновесие', 'мышечный_тонус', 'ощущение_положения_тела'
              ]
          },
  
          occipital_lobe: {
              'selector': SELECTORS.occipital_lobe,
              'title': 'Затылочная доля',
              'description': 'Затылочная доля обрабатывает визуальные данные и направляет их в другие части мозга для идентификации и хранения.',
              'highlight': ['визуальное_восприятие', 'распознавание_цвета', 'чтение', 'понимание_прочитанного', 'восприятие_глубины', 'распознавание_движения_объекта'
              ]
          },
  
          parietal_lobe: {
              'selector': SELECTORS.parietal_lobe,
              'title': 'Теменная доля',
              'description': 'Теменная доля получает и обрабатывает сенсорную информацию от тела, включая вычисление местоположения и скорости объектов.',
              'highlight': ['познание', 'обработка_информации', 'ощущение_прикосновения',
              'понимание_пространственной_ориентации', 'координация',
              'речь', 'визуальное_восприятие', 'чтение', 'письмо',
              'математические_вычисления'
              ]
          },
  
          temporal_lobe: {
              'selector': SELECTORS.temporal_lobe,
              'title': 'Височная доля',
              'description': 'Височная доля контролирует область памяти, эмоции, слух и, с левой стороны, язык.',
              'highlight': ['слуховое_восприятие', 'память', 'речь', 'понимание_языка',
              'эмоциональные_ответы', 'визуальное_восприятие', 'распознавание_лиц'
              ]
          },
  
          brain_stem: {
              'selector': SELECTORS.brain_stem,
              'title': 'Мозговой ствол',
              'description': 'Часть головного мозга, которая соединяется со спинным мозгом. Ствол мозга управляет функциями, необходимыми для выживания всех животных, такими как частота сердечных сокращений, дыхание, переваривание пищи и сон. Это самая низшая и самая примитивная область человеческого мозга.',
              'highlight': ['бдительность', 'возбуждение', 'дыхание', 'кровяное_давление',
              'пищеварение', 'частота_сердечных_сокращений'
              ]
          }
      }
  };
  
  let keyToString = (key) => {
      return key.replace(/\_/g, ' ');
  }
  
  let brainFunctions = _.shuffle(_.uniq(_.flatten(_.pluck(info.brain, 'highlight'))));
  
  let functionsItems = '';
  
  _.each(brainFunctions, func => {
      functionsItems += `<div class="${CLASSES.filter_item} item-${func}"><p>${keyToString(func)}</p></div>`;
  });
  
  $(SELECTORS.filter_container).append(functionsItems);
  
  _.each(info.brain, (part, k) => {
      $(part.selector).hover(
          () => {
              $(SELECTORS.info_title).html(part.title);
              $(SELECTORS.info_description).html(part.description);
  
              _.each(part.highlight, func => {
                  $(`.item-${func}`).addClass(`${k} active`);
              });
          },
  
          () => {
              _.each(['active', ..._.keys(info.brain)], (className) => {
                  $(SELECTORS.filter_item).removeClass(className);
              });
          }
      );
  });
  
  
  
});