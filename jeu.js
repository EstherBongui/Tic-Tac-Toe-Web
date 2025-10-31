function recupererInfos() {
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var sexe = document.querySelector('input[name="sexe"]:checked').value;

    localStorage.setItem('nom', nom);
    localStorage.setItem('prenom', prenom);
    localStorage.setItem('sexe', sexe);
}

function traiterFormulaire() {
    var difficulte = document.getElementById('difficulte').value;
    var symbole = document.querySelector('input[name="symbole"]:checked').value;

    localStorage.setItem('difficulte', difficulte);
    localStorage.setItem('symbole', symbole);

    window.location.href = 'Partie.html';
}