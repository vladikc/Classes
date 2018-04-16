const boxes = document.querySelectorAll(".col")

for (var i = 0; i < boxes.length; i++) {
    boxes[i].textContent = (i + 1).toString()
}

console.log(boxes);

class Squares {
    constructor() {
        this.colors = [
            'rgb(255, 255, 255)',
            'rgb(255, 165, 0)',
            'rgb(0, 128, 0)',
            'rgb(128, 0, 128)',
            'rgb(255, 192, 203)'
        ]
        this.addClickHandlers()
    }
    changeNumber(num) {
        // console.log("Running method changeNumber")
        for (var i = num; i > 0; i--) {
            let value = parseInt(boxes[i - 1].textContent) // turn string into a number
            value = (value >= boxes.length) ? 1 : value + 1;
            boxes[i - 1].textContent = value.toString()
        }
    }
    changeColor(num) {
        // console.log("Runing method changeColor")
        for (var i = num; i > 0; i--) {
            let style = window.getComputedStyle(boxes[i - 1])
            let index = this.colors.indexOf(style.backgroundColor)
            index = (index >= this.colors.length - 1) ? 0 : index + 1
            boxes[i - 1].style.backgroundColor = this.colors[index]
        }
    }
    addClickHandlers() {
        boxes.forEach(box => {
            box.addEventListener("click", e => {
                this.changeNumber(box.dataset.number)
                this.changeColor(box.dataset.number)
            })
        })
    }
}

const squares = new Squares