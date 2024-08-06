let scoreTeam1 = 0;
let scoreTeam2 = 0;
let gamesTeam1 = 0;
let gamesTeam2 = 0;
let grandeCount = 0;
let chicaCount = 0;
let paresCount = 0;
let juegoCount = 0;

function updateDisplay() {
    document.getElementById('score-team1').innerText = scoreTeam1;
    document.getElementById('score-team2').innerText = scoreTeam2;
    document.getElementById('games-team1').innerText = gamesTeam1;
    document.getElementById('games-team2').innerText = gamesTeam2;
    document.getElementById('grande-count').innerText = grandeCount;
    document.getElementById('chica-count').innerText = chicaCount;
    document.getElementById('pares-count').innerText = paresCount;
    document.getElementById('juego-count').innerText = juegoCount;
}

function addPoint(team) {
    if (team === 'team1') {
        scoreTeam1++;
    } else if (team === 'team2') {
        scoreTeam2++;
    }
    updateDisplay();
}

function addGame(team) {
    if (team === 'team1') {
        gamesTeam1++;
    } else if (team === 'team2') {
        gamesTeam2++;
    }
    updateDisplay();
}

function addCount(type) {
    if (type === 'grande') {
        grandeCount++;
    } else if (type === 'chica') {
        chicaCount++;
    } else if (type === 'pares') {
        paresCount++;
    } else if (type === 'juego') {
        juegoCount++;
    }
    updateDisplay();
}

function addToTeam(type, team) {
    let count = 0;
    if (type === 'grande') {
        count = grandeCount;
        grandeCount = 0;
    } else if (type === 'chica') {
        count = chicaCount;
        chicaCount = 0;
    } else if (type === 'pares') {
        count = paresCount;
        paresCount = 0;
    } else if (type === 'juego') {
        count = juegoCount;
        juegoCount = 0;
    }

    if (team === 'team1') {
        scoreTeam1 += count;
    } else if (team === 'team2') {
        scoreTeam2 += count;
    }
    updateDisplay();
}

function resetCounters() {
    scoreTeam1 = 0;
    scoreTeam2 = 0;
    grandeCount = 0;
    chicaCount = 0;
    paresCount = 0;
    juegoCount = 0;
    updateDisplay();
}

updateDisplay();