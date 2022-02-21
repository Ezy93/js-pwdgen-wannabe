const firstName = prompt("inserisci qui il tuo nome:");
console.log(firstName);

const surname = prompt("inserisci qui il tuo cognome:");
console.log(surname);

const favoriteColour = prompt("inserisci qui il tuo colore preferito:");
console.log(favoriteColour);

const randomNumber = "21";
console.log(randomNumber);

document.getElementById("password").innerHTML = firstName + surname + favoriteColour + randomNumber;