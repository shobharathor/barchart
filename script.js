const ctx = document.getElementById('myChart');
ctx.style.width = "900px";
ctx.style.height = "400px";
new Chart(ctx, {
    type: 'bar',
    label:'Monthly:sales',
    data: {
      labels: ['January', 'February', 'March', 'April','May'],
      datasets: [{
        label: ':sales',
        data: [65,59,80,81,56],
        borderWidth: 1
      }]
    },
    options: {
      
      responsive: true,
      plugins: {
        title: {
            display: true,
            text: 'Monthly Sales Data',
        },
    },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });