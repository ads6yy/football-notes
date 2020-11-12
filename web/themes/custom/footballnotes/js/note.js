(function ($, Drupal, drupalSettings) {

  Drupal.behaviors.swiperImagesNote = {
    attach: function (context, settings) {
      var swiper = new Swiper('.swiper-container', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination'
        },
      });
    }
  };

  Drupal.behaviors.highchartsNote = {
    attach: function (context, settings) {
      // Construction des graphiques.
      for (const [key, value] of Object.entries(drupalSettings.note)) {
        var colorBar = getBarColor(key);
        for (const [dataName, values] of Object.entries(value)) {
          Highcharts.chart('container-'+key+'-'+dataName, {
            chart: {
              type: 'column'
            },
            title: {
              text: '',
              style: {
                'display': 'none',
              }
            },
            xAxis: {
              categories: values.categorie,
              title: {
                text: null
              }
            },
            yAxis: {
              min: 0,
              title: {
                text: values.label,
              },
              labels: {
                overflow: 'justify'
              }
            },
            tooltip: {
              valueSuffix: ' '+values.label
            },
            plotOptions: {
              bar: {
                dataLabels: {
                  enabled: true
                }
              }
            },
            legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'top',
              x: -40,
              y: 80,
              floating: true,
              borderWidth: 1,
              backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
              shadow: true
            },
            credits: {
              enabled: false
            },
            series: [
              {
                name: values.serieName,
                data: values.serie,
                color: colorBar
              },
            ]
          });
        }
      }
    }
  };

  function getBarColor(type) {
    switch (type) {
      case 'home':
        return '#ff0000'
      case 'away':
        return '#2e9600'
      case 'global':
      default:
        return '#000000'
    }
  }

  Drupal.behaviors.divTerrainHeight = {
    attach: function (context, settings) {
      var remplacantsHeight = $('.remplacants').height();
      $('.tab__content.data > .terrain').css('margin-bottom', remplacantsHeight+100);
    }
  };

})(jQuery, Drupal, drupalSettings);
