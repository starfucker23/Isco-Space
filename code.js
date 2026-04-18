

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e4506651-f7bb-44bf-a3ad-513aeff0db2e","bf8457e3-cb7c-4a9d-8f6e-60626c6d8d07","8ff485f0-11a6-4d46-a56b-33e858b85872","d6b21a6d-5434-469a-98d9-8cc94b53c464","b5848f07-748d-4fa2-8f83-a773fa2e0dfc","b9dfb3d1-4c77-42d0-ace5-2fd0f7d4285e","b63765ae-f227-42a4-86db-df3245552176","f0abdf6d-ddc0-4627-8b51-f59ef218f3d8","eb85c7e5-1017-4633-9d46-cfe0763088ed","ecf76bf3-57c4-47c3-9547-bd766079a637","c16db651-ba4c-4db8-9b4b-d372384f449c","0bc7c41c-cc2d-4b8b-8a20-58c36f5a01ad","f792a942-37e8-4f49-91ff-5da2bc9f178c","5f0f24bf-876b-4ddd-8485-d794e72bab56","925a9688-6c21-4cf2-a24c-cdee6b9df5cb","b883e87d-498d-46f0-a2cf-a66876aab179","a669f6d3-9944-4c39-afb5-28e34a7777bb","b4ebb561-fb85-45f8-b8bb-8b4b92e14025","8cb914a2-9f78-4a1a-80fa-b1bd342cb41a","880b47ea-3bd1-437d-ac98-808672bd4402","146f6b88-9e3d-4350-b84f-432cdff3111d"],"propsByKey":{"e4506651-f7bb-44bf-a3ad-513aeff0db2e":{"name":"fly_bot","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"7bh9GLoJKYwv0RnStJ5K6wWu22T6I_5g","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/e4506651-f7bb-44bf-a3ad-513aeff0db2e.png"},"bf8457e3-cb7c-4a9d-8f6e-60626c6d8d07":{"name":"DeathLinar","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"aekzvEnLs.MyB5Y6v19lZm7Pf.tX7hSR","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/bf8457e3-cb7c-4a9d-8f6e-60626c6d8d07.png"},"8ff485f0-11a6-4d46-a56b-33e858b85872":{"name":"DeathHoax","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"s7t7X3.kbqXv988nsumgcNRJ5VNai4Vl","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/8ff485f0-11a6-4d46-a56b-33e858b85872.png"},"d6b21a6d-5434-469a-98d9-8cc94b53c464":{"name":"DeathJames","sourceUrl":null,"frameSize":{"x":99,"y":97},"frameCount":4,"looping":true,"frameDelay":4,"version":"tczcPK4Zq.M4mAuJV50y7ZgB2au2U9on","loadedFromSource":true,"saved":true,"sourceSize":{"x":198,"y":194},"rootRelativePath":"assets/d6b21a6d-5434-469a-98d9-8cc94b53c464.png"},"b5848f07-748d-4fa2-8f83-a773fa2e0dfc":{"name":"DeathOrbit","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"8tCwyDoHF3ar66rY0JGwZqRFWU5QPN.0","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/b5848f07-748d-4fa2-8f83-a773fa2e0dfc.png"},"b9dfb3d1-4c77-42d0-ace5-2fd0f7d4285e":{"name":"DeathRock","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"wFRjlLi5gx6z6k4h6VABAO81_i82Qkme","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/b9dfb3d1-4c77-42d0-ace5-2fd0f7d4285e.png"},"b63765ae-f227-42a4-86db-df3245552176":{"name":"powerbot","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"Mdmdb3t.O01HB_JVHEKr8DsoNdnLJW2.","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/b63765ae-f227-42a4-86db-df3245552176.png"},"f0abdf6d-ddc0-4627-8b51-f59ef218f3d8":{"name":"coin","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"JWoV4ZeMsZbZsTRg7iVgs0ipn6klCX2_","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/f0abdf6d-ddc0-4627-8b51-f59ef218f3d8.png"},"eb85c7e5-1017-4633-9d46-cfe0763088ed":{"name":"coin3","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":23,"looping":true,"frameDelay":12,"version":"XtTPRkZlReulbfKPlkMhaAg8A.s32aZa","loadedFromSource":true,"saved":true,"sourceSize":{"x":500,"y":500},"rootRelativePath":"assets/eb85c7e5-1017-4633-9d46-cfe0763088ed.png"},"ecf76bf3-57c4-47c3-9547-bd766079a637":{"name":"power","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"tvvJXC5bRNcKNs2Ffuo7ld8U7NfGIoL7","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/ecf76bf3-57c4-47c3-9547-bd766079a637.png"},"c16db651-ba4c-4db8-9b4b-d372384f449c":{"name":"rock","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":6,"looping":true,"frameDelay":12,"version":"6Fwth053HWCDFyiS7gXtzGN8TzTwNx_g","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":300},"rootRelativePath":"assets/c16db651-ba4c-4db8-9b4b-d372384f449c.png"},"0bc7c41c-cc2d-4b8b-8a20-58c36f5a01ad":{"name":"jameston","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":12,"looping":true,"frameDelay":4,"version":"IP2tN7G1et.7NVZ8W88NUP8tFCsFGEGH","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":400},"rootRelativePath":"assets/0bc7c41c-cc2d-4b8b-8a20-58c36f5a01ad.png"},"f792a942-37e8-4f49-91ff-5da2bc9f178c":{"name":"James2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"tkTa0pUn4CiRZZp6NFCD2KvD8s6rMKfw","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/f792a942-37e8-4f49-91ff-5da2bc9f178c.png"},"5f0f24bf-876b-4ddd-8485-d794e72bab56":{"name":"orbit","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":9,"looping":true,"frameDelay":4,"version":"uxrPBiOObR40RW0NdgVHoFQYAn3DZ8km","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/5f0f24bf-876b-4ddd-8485-d794e72bab56.png"},"925a9688-6c21-4cf2-a24c-cdee6b9df5cb":{"name":"orbit2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"KrS9zRnKh3G51ijxx3oTVYERc90FpYWg","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/925a9688-6c21-4cf2-a24c-cdee6b9df5cb.png"},"b883e87d-498d-46f0-a2cf-a66876aab179":{"name":"Hoax","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"0k4BsVXMHV1JCbln493nsqAJx6qHnK0n","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/b883e87d-498d-46f0-a2cf-a66876aab179.png"},"a669f6d3-9944-4c39-afb5-28e34a7777bb":{"name":"HoaxAttack","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"YQ7NObEXQf.FR4fPCgYtCz7WEU9qbbgS","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/a669f6d3-9944-4c39-afb5-28e34a7777bb.png"},"b4ebb561-fb85-45f8-b8bb-8b4b92e14025":{"name":"fake","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":4,"looping":true,"frameDelay":10,"version":"6x4IFjHrdVJJT_e22qI57k40kew8t_nl","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/b4ebb561-fb85-45f8-b8bb-8b4b92e14025.png"},"8cb914a2-9f78-4a1a-80fa-b1bd342cb41a":{"name":"Linar","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"1c7F3rgJoIsgv4xOvJxLXKaKoqQkr6q.","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/8cb914a2-9f78-4a1a-80fa-b1bd342cb41a.png"},"880b47ea-3bd1-437d-ac98-808672bd4402":{"name":"LinarHead","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"k0RsqPGqfx01B0iZeV0oIYtw34UiCOAF","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/880b47ea-3bd1-437d-ac98-808672bd4402.png"},"146f6b88-9e3d-4350-b84f-432cdff3111d":{"name":"Indication","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":4,"looping":true,"frameDelay":4,"version":"TtnJav_R2TgcxjNioemuW_6qWtdXLSWA","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/146f6b88-9e3d-4350-b84f-432cdff3111d.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// --- Sprite Setup ---
var showGuide = false;
var player = createSprite(200, 100);
player.setAnimation("fly_bot");
player.scale = 0.45;
player.bounciness = 3.2;

var decoys = createGroup();
for (var d = 0; d < 3; d++) {
  var fake = createSprite(5000, 5000);
  fake.setAnimation("fake");
  fake.scale = 0.6;
  decoys.add(fake);
}

var linarHead = createSprite(5000, 5000);
linarHead.setAnimation("LinarHead");
linarHead.scale = 0.5;
var linarBody = createGroup();
var linarDir = "right";
var linarHistoryX = []; 
var linarHistoryY = [];
var manualSegments = 0; 
var scoreAtSpawn = 0; 

var linarInd = createSprite(5000, 5000);
linarInd.setAnimation("Indication");
linarInd.visible = false;
var linarIndTimer = 0;

var hoax = createSprite(5000, 5000); 
hoax.setAnimation("Hoax");
hoax.scale = 0.6;
var hoaxAngle = 0;

var power = createSprite(5000, 100);
power.setAnimation("power");
power.scale = 0.7;
power.bounciness = 3.2;
var powerTimer = 0;

var jame = createSprite(50000, 100); 
jame.setAnimation("jameston");
jame.scale = 0.4;

var orbit = createSprite(5000, 5000); 
orbit.setAnimation("orbit"); 
orbit.scale = 0.5;

var coin = createSprite(randomNumber(10, 390), randomNumber(10, 390));
coin.setAnimation("coin");
coin.scale = 0.35;

var coin2 = createSprite(randomNumber(10, 390), randomNumber(10, 390));
coin2.setAnimation("coin");
coin2.scale = 0.25;

var coin3 = createSprite(5000, 5000);
coin3.setAnimation("coin3");
coin3.scale = 0.45;
var coin3Timer = 0;

var rock = createSprite(0, -50); 
rock.setAnimation("rock");
rock.scale = 0.40;
rock.setCollider("circle");

// --- Game Variables ---
var score = 0, highScore = 0, orbitAngle = 0, orbitMode = "circling";
var pauseTimer = 0, dashDirection = 0, rockCooldown = 0, jameCooldown = 0, isGameOver = false;
var lastHitBy = "", deathMessage = "", messageColor = "white";
var jameSprintTimer = 0, jamePrepTimer = 0, jameTargetAngle = 0, hoaxMode = "idle", hoaxTimer = 0;
var killerSegment = null;

var rockIndX = randomNumber(20, 380), rockIndY = randomNumber(20, 380);
var orbitIndX = randomNumber(20, 380), orbitIndY = randomNumber(20, 380);
var jameIndX = randomNumber(20, 380), jameIndY = randomNumber(20, 380);
var hoaxIndX = randomNumber(20, 380), hoaxIndY = randomNumber(20, 380);
var linarRadarX = randomNumber(20, 380), linarRadarY = randomNumber(20, 380);

var ellipsesX = [], ellipsesY = [];
for (var i = 0; i < 10; i++) { ellipsesX.push(randomNumber(0, 400)); ellipsesY.push(randomNumber(0, 400)); }

function respawnInCorner(sprite) {
  var corners = [10, 390];
  sprite.x = corners[randomNumber(0, 1)];
  sprite.y = corners[randomNumber(0, 1)];
}

function resetGame() {
  if (score > highScore) { highScore = score; }
  score = 0; isGameOver = false; lastHitBy = ""; killerSegment = null;
  hoaxMode = "idle"; orbitMode = "circling"; hoax.setVelocity(0,0);
  manualSegments = 0; linarHistoryX = []; linarHistoryY = []; scoreAtSpawn = 0;
  player.x = 200; player.y = 100; player.setAnimation("fly_bot"); player.setVelocity(0, 0);
  rock.x = 0; rock.y = -50; jame.x = 50000; hoax.x = 5000; orbit.x = 5000; power.x = 5000; coin3.x = 5000;
  linarHead.x = 5000; linarBody.destroyEach(); linarInd.x = 5000; linarInd.visible = false; linarIndTimer = 0;
}

function draw() {
  if (keyWentDown("g")) { showGuide = !showGuide; }
  if (keyWentDown("k")) { highScore = 100; } 

  if (showGuide) {
    background("black"); fill("yellow"); textAlign(CENTER, TOP); textSize(25); text("GUIDE (G to Close)", 200, 10);
    function showInMenu(s, y, desc, req) {
      textAlign(LEFT, TOP); 
      if (highScore >= req) {
        var tX = s.x, tY = s.y, tR = s.rotation;
        s.x = 40; s.y = y + 15; s.rotation = 0; drawSprite(s);
        s.x = tX; s.y = tY; s.rotation = tR;
        fill("white"); textSize(12); text(desc, 80, y, 300, 100); 
      } else {
        fill("gray"); textSize(20); text("?", 35, y + 5); 
        textSize(12); text("LOCKED: Reach " + req + " High Score to reveal", 80, y, 300, 50);
      }
    }
    showInMenu(player, 50, "ISCO: Prefers his nickname ISCO rather than Innermost stable circular orbit.", 0);
    showInMenu(rock, 110, "ROCK: A simple alien, does everything by the books.", 0);
    showInMenu(linarHead, 170, "LINAR: Immune to (almost) all damage. Stay out of his way", 5);
    showInMenu(orbit, 230, "ORBIT: Being Jamestons cousin, Orbit also gives a cue, get out of the way when you see it!", 10);
    showInMenu(jame, 290, "JAMESTON: Dashes in random directions, super unpredictable!", 15);
    showInMenu(hoax, 350, "HOAX: Mysterious creature hiding in moons/bananas. If roaming, do not pick up moons/bananas around her.", 20);
    return; 
  }

  if (hoaxMode == "attacking" && hoaxTimer > 30) { background("white"); } 
  else { background("black"); }

  fill("white"); stroke("white");
  for (var i = 0; i < 10; i++) { ellipse(ellipsesX[i], ellipsesY[i], 10, 10); }
  
  textAlign(CENTER, TOP); fill("white"); noStroke(); textSize(20); textFont("Impact");
  text(score, 200, 10); textAlign(RIGHT, TOP); text("HI: " + highScore, 390, 10); 

  if (rock.x < 1000 && rockCooldown <= 0) { fill("green"); ellipse(rockIndX, rockIndY, 8, 8); }
  if (score >= 7 && orbit.x < 1000) { fill("teal"); ellipse(orbitIndX, orbitIndY, 8, 8); }
  if (score >= 12 && jame.x < 1000) { fill("magenta"); ellipse(jameIndX, jameIndY, 8, 8); }
  if (hoaxMode !== "idle") { fill("rgba(105, 105, 105, 0.1)"); ellipse(hoaxIndX, hoaxIndY, 8, 8); }
  if (linarHead.x < 1000 || linarInd.visible) { fill("orange"); ellipse(linarRadarX, linarRadarY, 8, 8); }

  if (isGameOver === false) {
    player.velocityY += 0.18; player.velocityX *= 0.95; 
    if (keyDown("up")) player.velocityY -= 1.1; 
    if (keyDown("left")) player.velocityX = -5.5; 
    if (keyDown("right")) player.velocityX = 5.5; 
    if (keyDown("down")) player.velocityY += 0.40;

    if (keyWentDown("o")) { coin.x = player.x; coin.y = player.y + 100; }
    if (keyWentDown("p") && hoaxMode == "idle") { hoax.x = 200; hoax.y = 200; hoaxMode = "wandering"; }
    if (keyWentDown("j")) { manualSegments++; }
    if (keyWentDown("u") && linarHead.x > 1000 && !linarInd.visible) { scoreAtSpawn = score; linarWarpEntrance(); }

    // --- HOAX AI ---
    if (hoaxMode == "wandering") {
      hoax.setAnimation("Hoax"); hoax.setVelocity(0,0); 
      if (World.frameCount % 60 < 30) { hoax.x += randomNumber(-1, 1); hoax.y += randomNumber(-1, 1); } 
      else { if (player.x < hoax.x) hoax.x -= 0.8; else hoax.x += 0.8; if (player.y > hoax.y) hoax.y += 0.8; else hoax.y -= 0.8; }
        }     } else if (hoaxMode == "attacking") {
      hoax.setAnimation("HoaxAttack");
      hoaxTimer--;
      
      if (hoaxTimer > 30) {
        // --- PHASE 2: CIRCULAR ORBIT ---
        hoaxAngle += 15;
        var centerX = 200, centerY = 200;
        var radius = 175; // Same value for X and Y makes a perfect circle

        // Real Hoax Math
        var realRad = hoaxAngle * Math.PI / 180;
        hoax.x = centerX + Math.cos(realRad) * radius;
        hoax.y = centerY + Math.sin(realRad) * radius;
        hoax.rotation = hoaxAngle + 90; // Faces the path of the circle
        
        if (player.isTouching(hoax)) { lastHitBy = "hoax"; isGameOver = true; }

        // Fake Decoys Math (Looping through the decoys group)
        for (var i = 0; i < decoys.length; i++) {
          var offsetAngle = hoaxAngle + ((i + 1) * 90); 
          var decoyRad = offsetAngle * Math.PI / 180;
          decoys.get(i).x = centerX + Math.cos(decoyRad) * radius;
          decoys.get(i).y = centerY + Math.sin(decoyRad) * radius;
          decoys.get(i).rotation = offsetAngle + 90;
        }
      } else {
        // --- PHASE 3: CENTER DASH STRIKE ---
        // 1. Hide decoys using the safe loop
        for (var d = 0; d < decoys.length; d++) {
          decoys.get(d).x = 5000;
        }

        // 2. Aim and fire at the center
        if (hoax.velocityX === 0 && hoax.velocityY === 0) {
          hoax.setSpeedAndDirection(45, pointDirection(hoax.x, hoax.y, 200, 200));
        }
        
        hoax.immovable = true;

        // 3. Fling enemies (Rock, Jame, Linar) with huge hitbox
        hoax.setCollider("circle", 0, 0, 150);
        rock.bounceOff(hoax); 
        jame.bounceOff(hoax); 
        linarHead.bounceOff(hoax); 
        linarBody.bounceOff(hoax);
        
        // 4. Lethal player check with small hitbox
        hoax.setCollider("circle", 0, 0, 30); 
        if (player.isTouching(hoax)) { lastHitBy = "hoax"; isGameOver = true; }
        
        // 5. Cleanup when off-screen
        if (hoax.x < -300 || hoax.x > 700 || hoax.y < -300 || hoax.y > 700) {
          hoaxMode = "idle"; hoax.x = 5000; hoax.setVelocity(0,0); hoax.immovable = false;
        }
      }
    }

    // --- HOAX AI FIXED ---
    if (hoaxMode == "wandering") {
      hoax.setAnimation("Hoax");
      hoax.setVelocity(0,0); 
      if (World.frameCount % 60 < 30) {
        hoax.x += randomNumber(-1, 1); hoax.y += randomNumber(-1, 1);
      } else {
        if (player.x < hoax.x) { hoax.x -= 0.8; } else { hoax.x += 0.8; }
        if (player.y > hoax.y) { hoax.y += 0.8; } else { hoax.y -= 0.8; }
      }
    } else if (hoaxMode == "attacking") {
      hoax.setAnimation("HoaxAttack");
      hoaxTimer--;
      if (hoaxTimer > 30) {
        hoaxAngle += 15;
        var radius = 175;
        hoax.x = 200 + Math.cos(hoaxAngle * Math.PI / 180) * radius;
        hoax.y = 200 + Math.sin(hoaxAngle * Math.PI / 180) * radius;
        hoax.rotation = hoaxAngle + 90;
        if (player.isTouching(hoax)) { lastHitBy = "hoax"; isGameOver = true; }
        for (var i = 0; i < decoys.length; i++) {
          var offsetAngle = hoaxAngle + ((i + 1) * 90); 
          decoys.get(i).x = 200 + Math.cos(offsetAngle * Math.PI / 180) * radius;
          decoys.get(i).y = 200 + Math.sin(offsetAngle * Math.PI / 180) * radius;
          decoys.get(i).rotation = offsetAngle + 90;
        }
      } else {
        for (var d = 0; d < decoys.length; d++) { decoys.get(d).x = 5000; }
        if (hoax.velocityX === 0 && hoax.velocityY === 0) {
          hoax.setSpeedAndDirection(45, pointDirection(hoax.x, hoax.y, 200, 200));
        }
        hoax.immovable = true;
        hoax.setCollider("circle", 0, 0, 150);
        rock.bounceOff(hoax); jame.bounceOff(hoax); linarHead.bounceOff(hoax); linarBody.bounceOff(hoax);
        hoax.setCollider("circle", 0, 0, 30); 
        if (player.isTouching(hoax)) { lastHitBy = "hoax"; isGameOver = true; }
        if (hoax.x < -300 || hoax.x > 700 || hoax.y < -300 || hoax.y > 700) {
          hoaxMode = "idle"; hoax.x = 5000; hoax.setVelocity(0,0); hoax.immovable = false;
        }
      }
    }
    // --- COIN COLLECTION & HOAX TRIGGER ---
    var currentCoin = player.isTouching(coin) ? coin : (player.isTouching(coin2) ? coin2 : null);
    if (currentCoin) {
      if (hoaxMode == "wandering" && distance(player.x, player.y, hoax.x, hoax.y) < 180) {
        hoaxMode = "attacking"; hoaxTimer = 180; 
        hoaxAngle = pointDirection(200, 200, hoax.x, hoax.y);
      }
      currentCoin.x = randomNumber(10, 390); currentCoin.y = randomNumber(10, 390);
      score++;
      if (hoaxMode == "idle" && coin3.x > 1000 && randomNumber(1, 100) <= 3) {
        coin3.x = randomNumber(10, 390); coin3.y = randomNumber(10, 390); coin3Timer = 150;
      }
    }
    if (player.isTouching(coin3)) { hoax.x = 200; hoax.y = 200; hoaxMode = "wandering"; coin3.x = 5000; score++; }
    if (coin3.x < 1000) { coin3Timer--; if (coin3Timer <= 0) coin3.x = 5000; }

    // --- HOAX ATTACK BEHAVIOR (FIXED PHASE 2 & 3) ---
    if (hoaxMode == "attacking") {
      hoax.setAnimation("HoaxAttack");
      hoaxTimer--;
      if (hoaxTimer > 30) {
        // Phase 2: Perfect Circle (Lethal)
        hoaxAngle += 15;
        var radius = 175;
        var rRad = hoaxAngle * Math.PI / 180;
        hoax.x = 200 + Math.cos(rRad) * radius;
        hoax.y = 200 + Math.sin(rRad) * radius;
        hoax.rotation = hoaxAngle + 90;
        if (player.isTouching(hoax)) { lastHitBy = "hoax"; isGameOver = true; }
        for (var i = 0; i < decoys.length; i++) {
          var oAng = hoaxAngle + ((i + 1) * 90); 
          var dRad = oAng * Math.PI / 180;
          decoys.get(i).x = 200 + Math.cos(dRad) * radius;
          decoys.get(i).y = 200 + Math.sin(dRad) * radius;
          decoys.get(i).rotation = oAng + 90;
        }
      } else {
        // Phase 3: Dash to Middle
        for (var d = 0; d < decoys.length; d++) { decoys.get(d).x = 5000; }
        if (hoax.velocityX === 0 && hoax.velocityY === 0) {
          hoax.setSpeedAndDirection(45, pointDirection(hoax.x, hoax.y, 200, 200));
        }
        hoax.immovable = true;
        hoax.setCollider("circle", 0, 0, 150);
        rock.bounceOff(hoax); jame.bounceOff(hoax); linarHead.bounceOff(hoax); linarBody.bounceOff(hoax);
        hoax.setCollider("circle", 0, 0, 30); 
        if (player.isTouching(hoax)) { lastHitBy = "hoax"; isGameOver = true; }
        if (hoax.x < -300 || hoax.x > 700 || hoax.y < -300 || hoax.y > 700) {
          hoaxMode = "idle"; hoax.x = 5000; hoax.setVelocity(0,0); hoax.immovable = false;
        }
      }
    }

    // --- LINAR AI ---
    if (linarHead.x > 1000 && !linarInd.visible) {
      if (score >= 10 || (score >= 3 && randomNumber(1, 100) <= (Math.pow((score - 2), 2) * 1.5) + 1)) {
        scoreAtSpawn = score; linarWarpEntrance();
      }
    }
    if (linarInd.visible) {
      linarIndTimer--;
      if (linarIndTimer <= 0) {
        linarHead.x = linarInd.x; linarHead.y = linarInd.y; linarInd.visible = false; linarInd.x = 5000;
        linarHistoryX = []; linarHistoryY = [];
        for (var h = 0; h < 500; h++) { linarHistoryX.push(linarHead.x); linarHistoryY.push(linarHead.y); }
      }
    } else if (linarHead.x < 1000) {
      if (linarDir == "right") { linarHead.x += 1.5; linarHead.rotation = 90; if (linarHead.x > 450) linarWarpEntrance(); }
      else if (linarDir == "left") { linarHead.x -= 1.5; linarHead.rotation = 270; if (linarHead.x < -50) linarWarpEntrance(); }
      else if (linarDir == "up") { linarHead.y -= 1.5; linarHead.rotation = 0; if (linarHead.y < -50) linarWarpEntrance(); }
      else if (linarDir == "down") { linarHead.y += 1.5; linarHead.rotation = 180; if (linarHead.y > 450) linarWarpEntrance(); }
      var tSegs = manualSegments + 1 + Math.floor((score - scoreAtSpawn) / 2);
      if (linarBody.length < tSegs) { var seg = createSprite(linarHead.x, linarHead.y); seg.setAnimation("Linar"); seg.scale = 0.4; linarBody.add(seg); }
      linarHead.bounciness = 1.2 + (linarBody.length * 0.2);
      for(var k=0; k<linarBody.length; k++) linarBody.get(k).bounciness = 1.0 + (linarBody.length * 0.2);
      linarHistoryX.unshift(linarHead.x); linarHistoryY.unshift(linarHead.y);
      for (var j = 0; j < linarBody.length; j++) {
        var idx = (j + 1) * 20; if (linarHistoryX[idx] !== undefined) { linarBody.get(j).x = linarHistoryX[idx]; linarBody.get(j).y = linarHistoryY[idx]; linarBody.get(j).rotation = linarHead.rotation; }
      }
      if (player.isTouching(linarHead)) { lastHitBy = "linar"; killerSegment = linarHead; isGameOver = true; }
      if (player.isTouching(linarBody)) {
        lastHitBy = "linar";
        for(var b=0; b<linarBody.length; b++){ if(player.isTouching(linarBody.get(b))) killerSegment = linarBody.get(b); }
        isGameOver = true;
      }
      rock.bounceOff(linarHead); rock.bounceOff(linarBody);
    }

    // --- OTHER ENEMIES ---
    if (rockCooldown > 0) { rockCooldown--; if (rockCooldown === 0) respawnInCorner(rock); } 
    else { if (player.x < rock.x) rock.x -= 1; else rock.x += 1; if (player.y > rock.y) rock.y += 1; else rock.y -= 1; }
    if (score >= 12) {
      if (jame.x > 1000) jame.x = 100;
      if (player.x < jame.x) jame.x -= 1.5; else jame.x += 1.5; if (player.y > jame.y) jame.y += 1.5; else jame.y -= 1.5;
    }
    if (score >= 7) {
      if (orbit.x > 1000) { orbit.x = player.x; orbit.y = player.y; }
      orbitAngle += 5; orbit.x = player.x + Math.cos(orbitAngle * Math.PI / 180) * 80; orbit.y = player.y + Math.sin(orbitAngle * Math.PI / 180) * 80;
    }

    // --- POWER UP & COLLISIONS ---
    if (player.isTouching(power)) { power.x = 5000; player.setAnimation("powerbot"); powerTimer = 180; score++; }
    if (score == 4 && power.x > 1000) { power.x = 200; power.y = 200; }
    if (powerTimer > 0) {
      powerTimer--; rock.bounceOff(player); jame.bounceOff(player);
      if (powerTimer <= 0) player.setAnimation("fly_bot");
    } else {
      if (player.isTouching(rock)) { lastHitBy = "rock"; player.bounceOff(rock); }
      if (player.isTouching(jame)) { lastHitBy = "jame"; player.bounceOff(jame); }
      if (player.isTouching(orbit)) { lastHitBy = "orbit"; player.bounceOff(orbit); }
    }
    if (player.x < -100 || player.x > 500 || player.y < -100 || player.y > 500) isGameOver = true;
  

  // --- GAME OVER ---
  if (isGameOver === true) {
    if (score > highScore) highScore = score;
    var target;
    if (lastHitBy === "rock") { target = rock; player.setAnimation("DeathRock"); deathMessage = "This alien means business! Avoid running into him."; messageColor = "green"; }
    else if (lastHitBy === "jame") { target = jame; player.setAnimation("DeathJames"); deathMessage = "James will dash in random directions, providing an indicator before then. Be sure to stay on your toes!"; messageColor = "magenta"; }
    else if (lastHitBy === "hoax") { target = hoax; player.setAnimation("DeathHoax"); deathMessage = "This rare eyeball will blend in with the stars, and go on the attack once you pick up a coin near her. This will also fling other enemies"; messageColor = "gray"; }
    else if (lastHitBy === "orbit") { target = orbit; player.setAnimation("DeathOrbit"); deathMessage = "Orbit...orbits...around you, and periodically will dash, which will kill you!"; messageColor = "teal"; }
    else if (lastHitBy === "linar") { target = killerSegment; player.setAnimation("DeathLinar"); deathMessage = "Linar grows as you get more score, try not to bump into him!"; messageColor = "orange"; }
    else { deathMessage = "You're clumsy! This is space, so be sparing when jumping as to not fly off the map."; messageColor = "white"; }
    if (target) { var angle = pointDirection(target.x, target.y, player.x, player.y); player.x = target.x + Math.cos(angle * Math.PI / 180) * 60; player.y = target.y + Math.sin(angle * Math.PI / 180) * 60; }
    allSprites.setVelocityEach(0, 0); background("black"); textAlign(CENTER, CENTER); fill("green"); textSize(50); text("Game Over!", 200, 150);
    fill("white"); textSize(20); text("Press 'R' to Restart", 200, 240); fill(messageColor); textSize(16); text(deathMessage, 20, 250, 360, 100);
    if (keyDown("r")) resetGame();
  }
  drawSprites();
}

function linarWarpEntrance() {
  linarHead.x = 5000; var side = randomNumber(1, 4); linarInd.visible = true;
  if (side === 1) { linarInd.x = randomNumber(50, 350); linarInd.y = 20; linarDir = "down"; }
  else if (side === 2) { linarInd.x = randomNumber(50, 350); linarInd.y = 380; linarDir = "up"; }
  else if (side === 3) { linarInd.x = 20; linarInd.y = randomNumber(50, 350); linarDir = "right"; }
  else if (side === 4) { linarInd.x = 380; linarInd.y = randomNumber(50, 350); linarDir = "left"; }
  linarIndTimer = 30; 
}
function pointDirection(x1, y1, x2, y2) { return Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI; }
function distance(x1, y1, x2, y2) { return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)); }

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
