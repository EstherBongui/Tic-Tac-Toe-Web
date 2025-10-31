<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST["nom"];
    $prenom = $_POST["prenom"];
    $sexe = $_POST["sexe"];

    header("Location: InfoPartie.html");
    exit();
}
?>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $difficulte = $_POST["difficulte"];
    $symbole = $_POST["symbole"];

    header("Location:Partie.html");
    exit();
}
?>