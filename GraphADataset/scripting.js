var x = [];
var y = [];

async function getData() {
  const response = await fetch("ZoAnn.csv");
  const data = await response.text();
  const rows = data.split("\n").slice(1);

  x = rows.map( r => r.split(",")[0] );
  y = rows.map( r => r.split(",")[1] );
}



async function displayData() {
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: x,
      datasets: [{
        data: y,
        borderWidth: 3
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: false
        }
      }
    }
  });
}

getData();
displayData();