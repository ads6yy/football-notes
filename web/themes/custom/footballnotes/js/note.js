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

      // BALLONS TOUCHES.
      Highcharts.chart('container-touches-all', {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Les joueurs ayant touché le plus de ballons',
          style: {
            'display': 'none',
          }
        },
        xAxis: {
          categories: drupalSettings.note.touchesTotal.categorie,
          title: {
            text: null
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Ballons touchés',
          },
          labels: {
            overflow: 'justify'
          }
        },
        tooltip: {
          valueSuffix: ' ballons touchés'
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
            name: drupalSettings.note.touchesTotal.serieName,
            data: drupalSettings.note.touchesTotal.serie,
            color: '#D0021B'
          },
        ]
      });
      Highcharts.chart('container-touches-home', {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Les joueurs ayant touché le plus de ballons',
          style: {
            'display': 'none',
          }
        },
        xAxis: {
          categories: drupalSettings.note.touchesTotalHome.categorie,
          title: {
            text: null
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Ballons touchés',
          },
          labels: {
            overflow: 'justify'
          }
        },
        tooltip: {
          valueSuffix: ' ballons touchés'
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
            name: drupalSettings.note.touchesTotalHome.serieName,
            data: drupalSettings.note.touchesTotalHome.serie,
            color: '#D0021B'
          },
        ]
      });
      Highcharts.chart('container-touches-away', {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Les joueurs ayant touché le plus de ballons',
          style: {
            'display': 'none',
          }
        },
        xAxis: {
          categories: drupalSettings.note.touchesTotalAway.categorie,
          title: {
            text: null
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Ballons touchés',
          },
          labels: {
            overflow: 'justify'
          }
        },
        tooltip: {
          valueSuffix: ' ballons touchés'
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
            name: drupalSettings.note.touchesTotalAway.serieName,
            data: drupalSettings.note.touchesTotalAway.serie,
            color: '#D0021B'
          },
        ]
      });
    }
  };

  Drupal.behaviors.divTerrainHeight = {
    attach: function (context, settings) {
      var remplacantsHeight = $('.remplacants').height();
      $('.tab__content.data').css('margin-bottom', remplacantsHeight+100);
    }
  };

})(jQuery, Drupal, drupalSettings);
