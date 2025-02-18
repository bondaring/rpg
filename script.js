let xp = 0;
let health = 100;
let gold = 50;
let currentWeaponIndex = 0;// index de la arma en un array
let fighting;
let monsterHealth; // nivel de salud del monstruo
let inventory = ["stick"]; //armas

const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const weapons = [
  {
    name: "stick",
    power: 5
  },
  {
    name: "dagger",
    power: 30
  },
  {
    name: "claw hammer",
    power: 50
  },
  {
    name: "sword",
    power: 100
  }
];
const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button functions": [goStore, goCave, fightDragon],
    text: "You are in the town square. You see a sign that says \"Store\"."
  },
  {
    name: "store",
    "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store."
  },
  {
    name: "cave",
    "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "You enter the cave. You see some monsters."
  }
];

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerText = location.text;
}

function goTown() {
  update(locations[0]);
}

function goStore() {
  update(locations[1]);
}

function goCave() {
  update(locations[2]);
}

function fightDragon() {
  console.log("Fighting dragon.");
}

function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    text.innerText = "You do not have enough gold to buy health.";
  }
}

function buyWeapon() {

}

function fightSlime() {

}

function fightBeast() {

}

//chispas
const container = document.querySelector(".spark-container");

function createSpark() {
    const spark = document.createElement("div");
    spark.classList.add("spark");

    // Posición inicial aleatoria dentro del contenedor
    const randomX = Math.random() * 300 - 50; // De -30px a 30px
    const randomDelay = Math.random() * 0.5; // Hasta 1.5s de retraso
    const randomDuration = Math.random() * 15.5 + 3.8; // Duración entre 0.8s y 1.3s

    spark.style.left = `${Math.random() * 100}%`; // Posición horizontal aleatoria
    spark.style.setProperty("--random-x", `${randomX}px`); // Movimiento lateral aleatorio
    spark.style.animationDelay = `${randomDelay}s`; // Retraso aleatorio
    spark.style.animationDuration = `${randomDuration}s`; // Velocidad aleatoria

    container.appendChild(spark);

    // Eliminar la chispa después de su animación
    setTimeout(() => {
        spark.remove();
    }, (randomDuration + randomDelay) * 2900);
}

// Crear chispas constantemente
setInterval(createSpark, 800); // Genera una chispa cada 200ms