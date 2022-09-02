let history = [];
const url = "http://localhost:3000";

async function getWorkoutHistory() {
  const response = await fetch(`${url}/history`);
  const result = await response.json();

  return result;
}

window.addEventListener("load", async function () {
  history = await getWorkoutHistory();
  loadHistory(history);
  console.log(history);
});

function loadHistory(historyList) {
  const tbody = document.getElementById("history-container");

  let html = ``;

  historyList.forEach((workout) => {
    html += `
    <tr>
    <th scope="row">${workout.date}</th>
    <td>${workout.excersize_1}</td>
    <td>${workout.excersize_2}</td>
    <td>${workout.excersize_3}</td>
    <td>${workout.excersize_4}</td>
    <td>${workout.excersize_5}</td>
    <td>${workout.excersize_6}</td>
    <td>${workout.excersize_7}</td>
    </tr>`;
  });

  tbody.innerHTML = html;
}
