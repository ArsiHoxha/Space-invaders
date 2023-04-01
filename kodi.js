const canvas = document.getElementById("canv")
const ctx = canvas.getContext("2d")
canvas.width = innerWidth
canvas.height = innerHeight

class LOJTARI{
  constructor({position,velocity,ngjyra}){
    const image = new Image()
    image.src = 'ar.png'
    this.position = position
    this.velocity = velocity
    this.width = 60
    this.height = 60
    this.image = image
    
  }
  ars
  vizato(){
    ctx.drawImage(this.image, this.position.x, this.position.y,this.width,this.height);
  }
  update(){
    this.vizato()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

  }
}
class PLUMBI{
  constructor({position,velocity}){
    this.position = position
    this.velocity = velocity
    this.width = 10
    this.height = 10
    

  }
  vizatoP(){
    ctx.beginPath();
    ctx.rect(this.position.x, this.position.y,this.width, this.height);
    ctx.fillStyle = "white";
    ctx.fill();
  }
  updateP(){
    this.vizatoP()
    this.position.y += this.velocity.y

  }
}
const lojtari = new LOJTARI({
  position:{
    x:canvas.width/2,
    y:canvas.height - 60
  },
  
  velocity:{
    x:0,
    y:0
  }
})
class MOLLA{
  constructor({position}){
    this.position = position
    this.height = 10
    this.width = 10

  }
  vizatoM(){
    ctx.beginPath();
    ctx.rect(this.position.x, this.position.y,this.width, this.height);
    ctx.fillStyle = 'red';
    ctx.fill();
      
  }
}
class Armiku{
  constructor({position,velocity}){
    const image = new Image()
    image.src = 'push.png'
    this.image = image
    this.position = position
    this.velocity = velocity
    this.width = 70
    this.height = 70
  }
  
  vizatoA(){
    ctx.drawImage(this.image, this.position.x, this.position.y,this.width,this.height);

  }
  drejtimi(){
    this.vizatoA()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
  

  }
}
const armiku = new Armiku({
  position:{
    x:0,
    y:0
  },
  velocity:{
    x:10,
    y:0
  }

  
})
const armiku1 = new Armiku({
  position:{
    x:60,
    y:0
  },
  velocity:{
    x:10,
    y:0
  }

  
})

const armiku2 = new Armiku({
  position:{
    x:120,
    y:0
  },
  velocity:{
    x:10,
    y:0
  }

  
})
const armiku3= new Armiku({
  position:{
    x:180,
    y:0
  },
  velocity:{
    x:10,
    y:0
  }

  
})
const armiku4 = new Armiku({
  position:{
    x:240,
    y:0
  },
  velocity:{
    x:10,
    y:0
  }

  
})
const armiku5= new Armiku({
  position:{
    x:300,
    y:0
  },
  velocity:{
    x:10,
    y:0
  }

  
})
const armiku6 = new Armiku({
  position:{
    x:360,
    y:0
  },
  velocity:{
    x:10,
    y:0
  }

  
})
const armiku7 = new Armiku({
  position:{
    x:420,
    y:0
  },
  velocity:{
    x:10,
    y:0
  }

  
})
const armiku8 = new Armiku({
  position:{
    x:480,
    y:0
  },
  velocity:{
    x:10,
    y:0
  }

  
})
const armiku9 = new Armiku({
  position:{
    x:540,
    y:0
  },
  velocity:{
    x:10,
    y:0
  }

  
})
const armiku10 = new Armiku({
  position:{
    x:0,
    y:40
  },
  velocity:{
    x:10,
    y:0
  }

  
})

const armiku11 = new Armiku({
  position:{
    x:60,
    y:40
  },
  velocity:{
    x:10,
    y:0
  }

  
})

const armiku12 = new Armiku({
  position:{
    x:120,
    y:40
  },
  velocity:{
    x:10,
    y:0
  }

  
})

const armiku13 = new Armiku({
  position:{
    x:180,
    y:40
  },
  velocity:{
    x:10,
    y:0
  }

  
})

const armiku14 = new Armiku({
  position:{
    x:240,
    y:40
  },
  velocity:{
    x:10,
    y:0
  }

  
})

const armiku15 = new Armiku({
  position:{
    x:300,
    y:40
  },
  velocity:{
    x:10,
    y:0
  }

  
})

const armiku16 = new Armiku({
  position:{
    x:360,
    y:40
  },
  velocity:{
    x:10,
    y:0
  }

  
})

const armiku17 = new Armiku({
  position:{
    x:420,
    y:40
  },
  velocity:{
    x:10,
    y:0
  }

  
})

const armiku18 = new Armiku({
  position:{
    x:480,
    y:40
  },
  velocity:{
    x:10,
    y:0
  }

  
})




const molla = new MOLLA({
  position:{
    x:Math.floor(Math.random() * 200),
    y:Math.floor(Math.random() * 100)
  }
})
const plumbat = []


let levizja = [armiku,armiku1,armiku2,armiku3,armiku4,armiku5,armiku6,armiku7,armiku8,armiku9]
let levizj2 = [armiku10,armiku11,armiku12,armiku13,armiku14,armiku15,armiku16,armiku17,armiku18]


function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height)
requestAnimationFrame(animate)
lojtari.update()
molla.vizatoM()
armiku.drejtimi()
armiku1.drejtimi()
armiku2.drejtimi()
armiku3.drejtimi()
armiku4.drejtimi()
armiku5.drejtimi()
armiku6.drejtimi()
armiku7.drejtimi()
armiku8.drejtimi()
armiku9.drejtimi()


levizja.forEach(armik => {
  plumbat.forEach(element => {

  element.updateP()


if (armik.position.x < element.position.x + element.width &&
  armik.position.x + armik.width > element.position.x &&
  armik.position.y < element.position.y + element.height &&
  armik.position.y + armik.height > element.position.y) {
    plumbat.splice(1,1)
    console.log(levizja)

    levizja.splice(armik.velocity.x = 9999999999)

  }

    
  });
//kontrollojme nese prek muret
if(armik.position.x == 1700 &&  armik.position.y == 0){
  armik.position.y = 60
  armik.velocity.x = -10
}
else if(armik.position.x == 0 && armik.position.y == 60){
  armik.position.y = 120
  armik.velocity.x = 10
}
else if(armik.position.x == 1700 && armik.position.y == 120){
  armik.position.y = 180
  armik.velocity.x = -10
}
else if(armik.position.x == 0 && armik.position.y == 180){
  armik.position.y = 240
  armik.velocity.x = 10
}
else if(armik.position.x == 1700 && armik.position.y == 240){
  armik.position.y = 300
  armik.velocity.x = -10
}
else if(armik.position.x == 0 && armik.position.y == 300){
  armik.position.y = 360
  armik.velocity.x = 10
}
else if(armik.position.x == 1700 && armik.position.y == 360){
  armik.position.y = 420
  armik.velocity.x = -10
}
else if(armik.position.x == 0 && armik.position.y == 420){
  armik.position.y = 480
  armik.velocity.x = 10
}
else if(armik.position.x == 1700 && armik.position.y == 480){
  armik.position.y = 540
  armik.velocity.x = -10
}
else if(armik.position.x == 0 && armik.position.y == 540){
  armik.position.y = 600
  armik.velocity.x = 10
}
else if(armik.position.x == 1700 && armik.position.y == 600){
  armik.position.y = 660
  armik.velocity.x = -10
}
else if(armik.position.x == 0 && armik.position.y ==660){
  armik.position.y = 720
  armik.velocity.x = 10
}
else if(armik.position.x == 1700 && armik.position.y ==720){
  armik.position.y = 780
  armik.velocity.x = 10
}


if (lojtari.position.x < armik.position.x + armik.width &&
  lojtari.position.x + lojtari.width > armik.position.x &&
  lojtari.position.y < armik.position.y + armik.height &&
  lojtari.position.y + lojtari.height > armik.position.y) {
   // collision detected!
  lojtari.position.x = 999999999999999
  lojtari.position.y = 999999999999999
}



});





//ANETTTTTT

if (lojtari.position.x < molla.position.x + molla.width &&
  lojtari.position.x + lojtari.width > molla.position.x &&
  lojtari.position.y < molla.position.y + molla.height &&
  lojtari.position.y + lojtari.height > molla.position.y) {
   // collision detected!
   molla.position.x = Math.floor(Math.random() * 200),
   molla.position.y = Math.floor(Math.random() * 100)
  

}


}
animate()
addEventListener("keydown",(e)=>{
  if(e.key == "d"){
    lojtari.velocity.x = 14

  }
  if(e.key == "a"){
    lojtari.velocity.x = -14

  }/*
  if(e.key == "s"){
    lojtari.velocity.y = 14

  }/*
  if(e.key == "w"){
    lojtari.velocity.y = -14

  }*/
    if(e.key == "f"){
setInterval(plumbat,1000)
    plumbat.push(new PLUMBI({
      position:{
        x:lojtari.position.x + 20,
        y:lojtari.position.y

      },
      velocity:{
        x:0,
        y:-2
      }
    }))


  }

})
addEventListener("keyup",(e)=>{
  if(e.key == "d"){
    lojtari.velocity.x = 0

  }
  if(e.key == "a"){
    lojtari.velocity.x = 0

  }
  if(e.key == "s"){
    lojtari.velocity.y = 0

  }
  if(e.key == "w"){
    lojtari.velocity.y = 0

  }

})