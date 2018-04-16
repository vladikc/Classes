// function Automobile(wheels){
//   this.wheels = wheels
//   this.setColor = (color)=>{
//     this.color = color
//   }
//   this.getColor = ()=>{
//     return this.color
//   }
// }

// function Sedan(){
//   //you need 4 doors and 4 wheels
//   this.doors = 4
// }

// Sedan.prototype = new Automobile(4)

// const sedan = new Sedan()
// console.log(sedan.doors)

function Camry(make, model, year){
    this.make = make
    this.model = model
    this.year = year
  }
  
  Camry.prototype = new Sedan('Toyota', 'Camry', 1997)
  
  const camry = new Camry()
  console.log(camry.wheels)
  console.log(camry.doors)
  camry.year = 2010
  console.log(camry.year)
  
  class Automobile{
    constructor(wheels){
      this.wheels = wheels
    }
    setColor(color){
      this.color = color
    }
    getColor(){
      return this.color
    }
  }
  
  class Motorcycle extends Automobile{
    constructor(make,model,year){
      super(2)
      this.make = make
      this.model = model
      this.year = year
    }
  }
  
  class Sedan extends Automobile{
    constructor(make, model, year){
      super(4)
      this.make = make
      this.year = year
      this.model = model
    }
  }
  
  class Maybach extends Sedan{
    constructor(){
      super('Merecedez', 'Maybach', 2012)
    }
  
    method1(){
  
    }
    method2(){
  
    }
  }