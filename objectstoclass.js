const mario = {
    width: '40px',
    height: '60px',
    x: 0,
    y: 0,
    imgSet: 'marioImageSet.png',
    interface: {
        a: () => {
            //Mario jumps
        },

        x: () => {
            //does action
        },

        r1: () => {
            //runfast 
        }


    }


}

const badGuy = {
    width: '40px',
    height : '60px',
    x : 0,
    y : 0
}

function badGuuuy (id){
    this.id = id
    this.with = '40px'
    this.height = '60px'
    x = 0
    y = 0
}


function gameRanning(mario) {
}


console.log(badGuy)
const badGuy1 = new badGuuuy(1)
console.log(badGuy1)