x = [];
y = [];
avg = 14;

async function getData() {
  const response = await fetch("ZoAnn.csv");
  const data = await response.text();
  const rows = data.split("\n").slice(1);

  x = rows.map( r => r.split(",")[0] );
  y = rows.map( r => Number(r.split(",")[1])+avg );

  displayData();
}



async function displayData() {
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: x,
      datasets: [{
        label: "Temperature (°C)",
        data: y,
        borderWidth: 3,
        borderColor: "#ff0000",
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