/* Gráfico leads y qleads */
var lineChart = new Chart(document.getElementById('lineChart'), {
  type: 'line',
  data: {
    labels: dataLine.months,
    datasets: [{
      label: 'LEADS',
      data: dataLine.leads,
      backgroundColor: '#f7a51357',
      borderColor: '#f7a513',
      borderWidth: 1,
      pointRadius: 6,
    }, {
      label: 'QLEADS',
      data: dataLine.qleads,
      backgroundColor: '#4d4d4d57',
      borderColor: '#4d4d4d',
      borderWidth: 1,
      pointRadius: 6,
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 40
        },
      }
    }
  } 
});

/* Gráfico búsquedas */
jQuery("section#busquedas ul li span:nth-child(3) > span ").each(function(){
  jQuery(this).css("width", jQuery(this).data("percent")+"%");
});
