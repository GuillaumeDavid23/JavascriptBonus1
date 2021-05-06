//Exercice 1 : Donner la taille de la chaîne de caractères.
let stringLength = function (sentence) {
  return sentence.length;
}

//Exercice 2 : Remplacer le premier "e" de la chaîne par un espace.
let replaceFirstEBySpace = function (sentence) {  
  sentence = sentence.replace('e', ' ')
  return sentence;
}

//Exercice 3 : Concaténer les deux chaînes de caractères.
let concatenateSentences = function (firstSentence, secondSentence) {
  let sentence = firstSentence + secondSentence;
  return sentence;
}

//Exercice 4 : Afficher le cinquième caractère de la chaîne.
let displayFifthCharacter = function (sentence) {
  
  return sentence[4];
}

//Exercice 5 : Afficher les 9 premiers caractère.
let displayFirstNineCharacters = function (sentence) {
  let save = "";
  for(let i = 0; i<9; i++){
    save += sentence[i];
  }
  return save;
}

//Exercice 6 : Mettre en majuscule la chaîne.
let upperTheSentence = function (sentence) {
  sentence = sentence.toUpperCase();
  return sentence;
}

//Exercice 7 : Mettre en minuscule la chaîne.
let lowerTheSentence = function (sentence) {
  sentence = sentence.toLowerCase();
  return sentence;
}

//Exercice 8 : Supprimer les espaces avant et après la chaîne.
let removeSpaces = function (sentence) {
  sentence = sentence.trim();
  return sentence;
}

//Exercice 9 : Afficher true si le paramètre d'entrée de la fonction est de type *string*.
let isString = function (sentence) {
  if(typeof sentence == "string"){
    return true;
  }
}

//Exercice 10 : Afficher l'extension du fichier.
let displayExtension = function (fileName) {
  extension = fileName.split('.').pop();
  return extension;
}

//Exercice 11 : Compter le nombre d'espace dans la chaîne.
let countSpaces = function (sentence) {
  nbesp = sentence.split(' ').length - 1;
  return nbesp;
}

//Exercice 12 : Inverser une chaîne de caractères.
let invertSentence = function (sentence) {
  sentence = sentence.split('').reverse().join('');
  return sentence;
}

//Exercice 13 : Chercher si dans la chaîne de caractère se trouve "La Manu".
let searchInSentence = function (sentence) {
  let position = sentence.search("La Manu");
  if (position != -1){
    return true
  }
}

//Exercice 14 : Afficher la valeur absolue d'un nombre.
let displayAbsoluteValue = function (number) {
  number = Math.abs(number);
  return number;
}

//Exercice 15 : Afficher les valeurs absolues de plusieurs nombres.
let displayAbsoluteValues = function (numbersArray) {
  for(let i = 0; i < numbersArray.length; i++){
    numbersArray[i] = Math.abs(numbersArray[i]);
  }
  return numbersArray;
}

//Exercice 16 : Calculer la surface d'un cercle en fonction de son rayon. L'arondir à l'entier le plus proche.
let calculateArea = function (radius) {
  console.log(radius);
  let area = Math.round(Math.PI * (radius * radius));
  console.log(area);
  return area;
}

//Exercice 17 : Calculer l'hypothènuse d\'un triangle rectangle. Arrondir à l'entier inférieur.
let calculateHypotenuse = function (a, b) {
  let hypo = Math.floor(Math.hypot(a, b));
  return hypo;
}
