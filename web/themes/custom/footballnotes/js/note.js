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
      Highcharts.chart('container-most-touches-all', {
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
          categories: drupalSettings.note.mostTouchesTotal.categorie,
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
            name: drupalSettings.note.mostTouchesTotal.serieName,
            data: drupalSettings.note.mostTouchesTotal.serie,
            color: '#000000'
          },
        ]
      });
      Highcharts.chart('container-most-touches-home', {
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
          categories: drupalSettings.note.mostTouchesTotalHome.categorie,
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
            name: drupalSettings.note.mostTouchesTotalHome.serieName,
            data: drupalSettings.note.mostTouchesTotalHome.serie,
            color: '#D0021B'
          },
        ]
      });
      Highcharts.chart('container-most-touches-away', {
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
          categories: drupalSettings.note.mostTouchesTotalAway.categorie,
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
            name: drupalSettings.note.mostTouchesTotalAway.serieName,
            data: drupalSettings.note.mostTouchesTotalAway.serie,
            color: '#022fd0'
          },
        ]
      });
      Highcharts.chart('container-less-touches-all', {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Les joueurs ayant touché le moins de ballons',
          style: {
            'display': 'none',
          }
        },
        xAxis: {
          categories: drupalSettings.note.lessTouchesTotal.categorie,
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
            name: drupalSettings.note.lessTouchesTotal.serieName,
            data: drupalSettings.note.lessTouchesTotal.serie,
            color: '#000000'
          },
        ]
      });
      Highcharts.chart('container-less-touches-home', {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Les joueurs ayant touché le moins de ballons',
          style: {
            'display': 'none',
          }
        },
        xAxis: {
          categories: drupalSettings.note.lessTouchesTotalHome.categorie,
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
            name: drupalSettings.note.lessTouchesTotalHome.serieName,
            data: drupalSettings.note.lessTouchesTotalHome.serie,
            color: '#D0021B'
          },
        ]
      });
      Highcharts.chart('container-less-touches-away', {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Les joueurs ayant touché le moins de ballons',
          style: {
            'display': 'none',
          }
        },
        xAxis: {
          categories: drupalSettings.note.lessTouchesTotalAway.categorie,
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
            name: drupalSettings.note.lessTouchesTotalAway.serieName,
            data: drupalSettings.note.lessTouchesTotalAway.serie,
            color: '#022fd0'
          },
        ]
      });

      // DUELS
      Highcharts.chart('most-duels-won-all', {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Les joueurs ayant gagnés le plus de duels',
          style: {
            'display': 'none',
          }
        },
        xAxis: {
          categories: drupalSettings.note.mostDuelsWonTotal.categorie,
          title: {
            text: null
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Duels gagnés',
          },
          labels: {
            overflow: 'justify'
          }
        },
        tooltip: {
          valueSuffix: ' duels gagnés'
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
            name: drupalSettings.note.mostDuelsWonTotal.serieName,
            data: drupalSettings.note.mostDuelsWonTotal.serie,
            color: '#000000'
          },
        ]
      });
      Highcharts.chart('most-duels-won-home', {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Les joueurs ayant gagnés le plus de duels',
          style: {
            'display': 'none',
          }
        },
        xAxis: {
          categories: drupalSettings.note.mostDuelsWonTotalHome.categorie,
          title: {
            text: null
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Duels gagnés',
          },
          labels: {
            overflow: 'justify'
          }
        },
        tooltip: {
          valueSuffix: ' duels gagnés'
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
            name: drupalSettings.note.mostDuelsWonTotalHome.serieName,
            data: drupalSettings.note.mostDuelsWonTotalHome.serie,
            color: '#D0021B'
          },
        ]
      });
      Highcharts.chart('most-duels-won-away', {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Les joueurs ayant gagnés le plus de duels',
          style: {
            'display': 'none',
          }
        },
        xAxis: {
          categories: drupalSettings.note.mostDuelsWonTotalAway.categorie,
          title: {
            text: null
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Duels gagnés',
          },
          labels: {
            overflow: 'justify'
          }
        },
        tooltip: {
          valueSuffix: ' duels gagnés'
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
            name: drupalSettings.note.mostDuelsWonTotalAway.serieName,
            data: drupalSettings.note.mostDuelsWonTotalAway.serie,
            color: '#022fd0'
          },
        ]
      });
      Highcharts.chart('most-duels-lost-all', {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Les joueurs ayant perdus le plus de duels',
          style: {
            'display': 'none',
          }
        },
        xAxis: {
          categories: drupalSettings.note.mostDuelsLostTotal.categorie,
          title: {
            text: null
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Duels perdus',
          },
          labels: {
            overflow: 'justify'
          }
        },
        tooltip: {
          valueSuffix: ' duels perdus'
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
            name: drupalSettings.note.mostDuelsLostTotal.serieName,
            data: drupalSettings.note.mostDuelsLostTotal.serie,
            color: '#000000'
          },
        ]
      });
      Highcharts.chart('most-duels-lost-home', {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Les joueurs ayant perdus le plus de duels',
          style: {
            'display': 'none',
          }
        },
        xAxis: {
          categories: drupalSettings.note.mostDuelsLostTotalHome.categorie,
          title: {
            text: null
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Duels perdus',
          },
          labels: {
            overflow: 'justify'
          }
        },
        tooltip: {
          valueSuffix: ' duels perdus'
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
            name: drupalSettings.note.mostDuelsLostTotalHome.serieName,
            data: drupalSettings.note.mostDuelsLostTotalHome.serie,
            color: '#D0021B'
          },
        ]
      });
      Highcharts.chart('most-duels-lost-away', {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Les joueurs ayant perdus le plus de duels',
          style: {
            'display': 'none',
          }
        },
        xAxis: {
          categories: drupalSettings.note.mostDuelsLostTotalAway.categorie,
          title: {
            text: null
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Duels perdus',
          },
          labels: {
            overflow: 'justify'
          }
        },
        tooltip: {
          valueSuffix: ' duels perdus'
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
            name: drupalSettings.note.mostDuelsLostTotalAway.serieName,
            data: drupalSettings.note.mostDuelsLostTotalAway.serie,
            color: '#022fd0'
          },
        ]
      });
    }
  };

  Drupal.behaviors.divTerrainHeight = {
    attach: function (context, settings) {
      var remplacantsHeight = $('.remplacants').height();
      $('.tab__content.data > .terrain').css('margin-bottom', remplacantsHeight+100);
    }
  };

})(jQuery, Drupal, drupalSettings);
