// Sélectionner l'élément du bouton
const jumpButton = document.getElementById('jumpButton');
const peppa = document.getElementById('peppa');
const resetButton = document.getElementById('resetButton');

// Ajouter un événement au clic sur le bouton
jumpButton.addEventListener('click', function() {
    // Faire sauter Peppa
    peppa.style.transform = 'translateY(-50px)';
    
    // Remettre Peppa en bas après 300ms
    setTimeout(() => {
        peppa.style.transform = 'translateY(0)';
    }, 300);
    
    // Créer une flaque de boue aléatoire
    createPuddle();
});

// Fonction pour créer des flaques de boue avec des images
function createPuddle() {
    const flaque = document.createElement('div');
    flaque.classList.add('flaque');
    
    // Positionner la flaque de manière aléatoire
    const x = Math.random() * 90 + 5; // Position horizontale entre 5% et 95%
    const y = Math.random() * 80 + 5; // Position verticale entre 5% et 80%
    flaque.style.left = `${x}%`;
    flaque.style.top = `${y}%`;

    // Ajouter l'image de la flaque (optionnel : tu peux aussi charger différentes images)
    flaque.style.backgroundImage = 'url("boue.png")'; // Remplace par l'URL de ton image

    // Ajouter la flaque à la scène
    document.getElementById('game-area').appendChild(flaque);

    // Enlever la flaque après un certain temps
    setTimeout(() => {
        flaque.remove();
    }, 2000); // La flaque disparait après 2 secondes
}

// Attendre que le DOM soit entièrement chargé
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner l'élément pour le score et le bouton
    const scoreElement = document.getElementById('score');
    const jumpButton = document.getElementById('jumpButton');

    // Variable pour suivre le score
    let score = 0;

    // Ajouter un événement au bouton pour augmenter le score à chaque clic
    jumpButton.addEventListener('click', function() {
        score++;  // Incrémenter le score de 1
        scoreElement.textContent = `Score : ${score}`;  // Mettre à jour l'affichage du score
    });
});

 

let highscore = localStorage.getItem('highscore') || 0;

function updateHighscore() {
    if (score > highscore) {
        highscore = score;
        localStorage.setItem('highscore', highscore);
    }
}

// Appeler updateHighscore à chaque fois que le score est mis à jour
jumpButton.addEventListener('click', function() {
    score++;
    scoreElement.textContent = `Score : ${score}`;
    updateHighscore();
});