/* Constructor: 專門用來建構物件的函式 */
function Player(name, hp) { // Constructor: Captial, 名詞
  this.name = name;
  this.hp = hp;

  this.fight = function(mon) {
    this.hp = this.hp - mon.attack;
    alert("Fight against " + mon.name);
  };

  this.report = function() {
    alert(this.name + "." + this.hp);  
  };

  this.rest = function() {
    this.hp++
  };
}

function Monster(name, attack) {
  this.name = name;
  this.attack = attack;
}


/*
function createPlayerObject(nameArg, hpArg) {

  var player = new Object();
  player.name = nameArg;
  player.hp = hpArg;

  player.fight = function(level) {
    this.hp = this.hp - level;
  };

  player.report = function() {
    alert(this.name + "." + this.hp);  
  };

  player.rest = function() {
    this.hp++
  };

  return player;

}
*/