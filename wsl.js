//User selects home team from list
let dropdown_1 = document.getElementById("hTeam");

//User selects away team from list
let dropdown_2 = document.getElementById("aTeam");


//Stop the user selecting the same drop-down options
dropdown_1.addEventListener("change", function(event){
  let dropdown_1 = event.target.value;
  dropdown_2.addEventListener("change", function(event){
  let dropdown_2 = event.target.value;
  if (dropdown_1 == dropdown_2) {
  alert("Please select two different teams.");
  event.target.value = event.target.firstElementChild.value; 
                                              }
                                                     })});

//Define references
const teams = {
  'Arsenal': {points: 0, wins: 0, draws: 0, losses: 0},
  'Aston Villa': {points: 0, wins: 0, draws: 0, losses: 0},
  'Brighton and Hove Albion': {points: 0, wins: 0, draws: 0, losses: 0},
  'Bristol City': {points: 0, wins: 0, draws: 0, losses: 0},
  'Chelsea': {points: 0, wins: 0, draws: 0, losses: 0},
  'Everton': {points: 0, wins: 0, draws: 0, losses: 0},
  'Leicester City': {points: 0, wins: 0, draws: 0, losses: 0},
  'Liverpool': {points: 0, wins: 0, draws: 0, losses: 0},
  'Manchester City': {points: 0, wins: 0, draws: 0, losses: 0},
  'Manchester United': {points: 0, wins: 0, draws: 0, losses: 0},
  'Tottenham Hotspur': {points: 0, wins: 0, draws: 0, losses: 0},
  'West Ham United': {points: 0, wins: 0, draws: 0, losses: 0}
};

//Trigger both functions using event listener
const submit = document.getElementById('submitBtn');
submit.addEventListener('click', function(event){
  event.preventDefault();
  let home = document.getElementById("hTeam").value;
  let away = document.getElementById("aTeam").value;
  let hgoal = document.getElementById("hgoals").value;
  let agoal = document.getElementById("agoals").value;
  
//Calculate table data
  let home_team = teams[home];
  let away_team = teams[away];
  if (hgoal > agoal){
    home_team.points += 3;
    home_team.wins += 1;
    away_team.losses += 1;
  }
  else if(agoal > hgoal){
    away_team.points += 3;
    away_team.wins += 1;
    home_team.losses += 1;    
  }
  else if(agoal = hgoal){
    away_team.points += 1;
    home_team.points += 1;
    home_team.draws +=1;
    away_team.draws +=1;
  }
  console.log(teams);
});

//Inserting data into the table
submit.addEventListener('click', function(event){
  event.preventDefault();
  const tableBody = document.querySelector('tbody');
  tableBody.innerHTML = '';
  for (const [key, values] of Object.entries(teams)){
    const newRow = document.createElement('tr');
    const keyCell = document.createElement('td');
    const pointsCell = document.createElement('td');
    const winsCell = document.createElement('td');
    const drawsCell = document.createElement('td');
    const lossesCell = document.createElement('td');
    keyCell.textContent = key;
    pointsCell.textContent = values.points;
    winsCell.textContent = values.wins;
    drawsCell.textContent = values.draws;
    lossesCell.textContent = values.losses;
    newRow.appendChild(keyCell);
    newRow.appendChild(pointsCell);
    newRow.appendChild(winsCell);
    newRow.appendChild(drawsCell);
    newRow.appendChild(lossesCell);
    tableBody.appendChild(newRow);
  }
});
                       
//footer across the bottom of the page - for loop to repeat the sequence
const footer = document.getElementById("footer").textContent;

result = "";

for (let i=0; i<56; i++){
  result += footer + " ";
};

document.getElementById("footer").textContent = result;
