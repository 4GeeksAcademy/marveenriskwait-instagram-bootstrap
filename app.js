// Create a random user name <3 


function generateUsername() {
  const vocales = "aeiouy";
  const consonantes = "bcdfghjklmnpqrstvwxz";

  let username = "";

  // Longueur aléatoire entre 1 et 7
  const length = Math.floor(Math.random() * (8 - 3) + 3);
  // Choisir si on commence par une voyelle ou une consonne
  let useVowel = Math.random() < 0.5;


  for (let i = 0; i < length; i++) {
    if (useVowel) {
      const randomVowel = vocales[Math.floor(Math.random() * vocales.length)];
      username += randomVowel;
    } else {
      const randomConsonant = consonantes[Math.floor(Math.random() * consonantes.length)];
      username += randomConsonant;
    }

    // Alterner à chaque tour
    useVowel = !useVowel;
  };

  return username;
};




const usersNames = ["username1", "username2", "username3", "username4", "username5", "username6", "username7"]

function getNewNameForEachElement(arr) {
  arr.forEach(className => {
    const username = generateUsername();
    const elements = document.getElementsByClassName(className);

    for (let el of elements) {
      el.textContent = username;
    }
  });
}

getNewNameForEachElement(usersNames);

// Random Hour

const hoursName = ["hours1", "hours2", "hours3", "hours4", "hours5", "hours6", "hours7"]



function randomHour(arr) {
  arr.forEach(className => {
    const hours = Math.floor(Math.random() * 24) + 1;
    const elements = document.getElementsByClassName(className);

    for (let el of elements) {
      el.textContent = `${hours}`;
    }

  });
}

randomHour(hoursName);




// random likes


const likesNames = ["likes1", "likes2", "likes3", "likes4", "likes5", "likes6", "likes7",]


function randomlikes(arr) {
  arr.forEach(className => {
    const likesrandom = Math.floor(Math.random() * 999) + 1;
    const elements = document.getElementsByClassName(className);

    for (let el of elements) {
      if (likesrandom < 1000) {
        el.textContent = `${likesrandom} likes`;
      } else {
        el.textContent = `${likesrandom} likes`;
      }
    }

  });
}



randomlikes(likesNames);



