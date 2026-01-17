let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const weapons = [
{
Name: "Stick",
Damage : 10
},
{
  Name: "Claw Hammer",
  Damage : 50
},
{
   Name: "Necro Sword",
   Damage : 70
},
{
   Name: "Wirlwind Syth",
   Damage : 100
}
]
const monsters = [
    {
      Name : "FangedBeast",
      Level : 10,
      HP : 70
    },
    {
     Name : "FireHound",
      Level : 15,
      HP : 120
    },
    {
      Name : "Dragon",
      Level : 20,
      HP : 300
    }

]

const locations = [
    {Name : "TimeSquare",
    "Button Text": ["Go To Store","Go To Cave","Fight the Dragon"],
    "Button Functions" : [GoToStore,GoToCave,FightDragon],
    text:" You are in the Time Square What Would You Do. "
    },
   {
    Name : "Store",
    "Button Text": ["Go Back to TownSquare","Buy health potion (10 gold)","Buy Sword (30 gold)"],
    "Button Functions" : [GoToTownSquare,BuyHealth,BuySword],
    text:"You Enter the Store an Old Man Greets you \"Welcome Adventurer What Can I Do For You Today!!\". "
   },
    {
    Name : "Cave",
    "Button Text": ["Go Back to TownSquare","Fight Fire Hound","Fight Fanged Beast"],
    "Button Functions" : [GoToTownSquare,FightFireHound,FightFangedBeast],
    text:"You Enter The Cave....\" You Encounter two Ominous Beasts\". "
   },
   {
    Name : "Fight",
    "Button Text": ["RUN!!","ATTACK","DODGE"],
    "Button Functions" : [GoToTownSquare,Attack,Dodge],
    text:"Fight The Beast!!!"
   }

] 

// initialize buttons
button1.onclick = GoToStore;
button2.onclick = GoToCave;
button3.onclick = FightDragon;

function update(locations){
    button1.innerText = locations["Button Text"][0];
    button2.innerText = locations["Button Text"][1];
    button3.innerText = locations["Button Text"][2];
 
    // changing button properties
    button1.onclick = locations["Button Functions"][0];
    button2.onclick = locations["Button Functions"][1];
    button3.onclick = locations["Button Functions"][2];
    text.innerText = locations.text;
};

function GoToCave(){
   update(locations[2]);
}

function GoToStore(){
   update(locations[1]);
}



   

function GoToTownSquare(){
update(locations[0]);

}
function BuyHealth(){
if(health<100 && gold>=10){
 gold -= 10;
 health += 10
 goldText.innerText = gold;
 healthText.innerText = health;
}
else{
    text.innerText = " You do not have enough gold to buy health .";
}
}
function BuySword(){
 if(currentWeapon < weapons.length -1){
    if(gold >=30){
    gold-=30;
    goldText.innerText = gold;
    currentWeapon++;
    let newWeapon = weapons[currentWeapon].Name;
    text.innerText = ` You just Bought The ${newWeapon}. `
    inventory.push(newWeapon);
    text.innerText += " In Your Inventory You Have " + inventory;
}
else{
    text.innerText = "You dont have enough Gold. ";
}
}
else{
    text.innerText = "You already have the most PowerFull Weapon !."
    button3.innerText = "Sell Weapon";
    button3.onclick = SellWeapon; 
     
}
}
function SellWeapon(){
if(inventory.length > 1){
    gold+=15;
    goldText.innerText = gold;
    let currentWeapon = inventory.shift();
    text.innerText = ` You Sold ${currentWeapon} from Your Inventory. `;
    text.innerText += `Your Updated Inventory Has ${inventory}. `;
}
else{
    text.innerText = "You can't sell your only weapon ";
}
};
function FightFangedBeast(){
    fighting=0;
    Fight();
}
function FightFireHound(){
 fighting=1;
    Fight();
}
function FightDragon(){
 fighting=2;
    Fight();
}
function Fight(){
 update(locations[3]);
 monsterStats.style.display ="block";
 monsterHealth = monsters[fighting].HP;
 monsterHealthText.innerText = monsterHealth;
 monsterNameText.innerText = monsters[fighting].Name; 
}
function Attack(){
    text.innerText = `The ${monsters[fighting].Name} Appears        `;

    if(Math.random() > .2 || health < 20){
        text.innerText = `You Attack With ${weapons[currentWeapon].Name}`;
        monsterHealth -= weapons[currentWeapon].Damage + Math.floor(Math.random() * xp) + 1;
        monsterHealthText.innerText = monsterHealth; 
    }else{
        text.innerText = "YOU MISSED!!!! The Beast Counters!!! ";
        health -= getmonsterAttackValue(monsters[fighting].Level);
        healthText.innerText = health;
    }
    
    if(health <= 0){
        lose();
    }else if(monsterHealth <= 0){
        fighting === 2 ? wingame: defeatedmonster(fighting);
    }
}
function Dodge(){
if(Math.floor(Math.random() * 2)){
    text.innerText = "You Dodge Successfully ";
}else{
    text.innerText = "You Fail to Dodge !!!";
    health -= getmonsterAttackValue(monsters[fighting].Level);
    healthText.innerText = health;
    if(health<=0){
        lose();
    }
}  

}
function getmonsterAttackValue(level){
let hit = (level*5)-(Math.floor(Math.random() * xp)); 
console.log(hit);
return hit;
}

function lose(){
    text.innerHTML = `You Have been Defeated by ${monsters[fighting].Name}`;

}

function wingame(){
    text.innerText = "Congratulations Adventurer You have Defeated the Foul Dragon the Town Folk can freely Enter and Leave the Town They will Forever be Greatefull To You !!";
}

function defeatedmonster(fighting){
    text.innerText = `You have Defeated ${monsters[fighting].Name} You have gained more Experience.   The Town Folk will Reward You  `;
    monsterHealthText.innerText = 0;
    xp += monsters[fighting].Level;
    xpText.innerText = xp;
}