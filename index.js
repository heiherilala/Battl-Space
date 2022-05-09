
    

const GameBody = document.querySelector('#GameBody')
const grid = document.querySelector('#bodyGame')
const strart = document.querySelector("#startGame")
const resultGame = document.querySelector("#EnTete")

strart.addEventListener("click",function(e){
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    resultGame.classList.add('noActiv')
    //document.querySelector('#bodyGame div').remove()
    //document.querySelector("#startGame").remove()
    startGame()
    
})



function startGame() {
    
    grid.classList.remove('noActiv')
    let robo1Div = document.querySelector(".alierGame")
    let width = 15
    
    const robo1 = {
        place : 208,
        direction : "up",
        tourneRigth(){
            switch (this.direction) {
                case "up":
                    this.direction = "rigth"
                    squares[robo1.place].classList.remove('up')
                    squares[robo1.place].classList.add('rigth')
                    break;
    
                case "rigth":
                    this.direction = "down"
                    squares[robo1.place].classList.remove('rigth')
                    squares[robo1.place].classList.add('down')
                    break;
    
                case "down":
                    this.direction = "left"
                    squares[robo1.place].classList.remove('down')
                    squares[robo1.place].classList.add('left')
                    break;
    
                case "left":
                    this.direction = "up"
                    squares[robo1.place].classList.remove('left')
                    squares[robo1.place].classList.add('up')
                    break;
                default:
                    break;

            }
        },
        move(){
            squares[this.place].classList.remove('alierGame')
            squares[this.place].classList.remove(this.direction)
            switch (this.direction) {
                case "up":
                    if (this.place>=width*2) {
                        this.place -= width
                    }
                    break;
    
                case "rigth":
                    if (this.place%width!=width-2) {
                        this.place += 1
                    }
                    break;
    
                case "down":
                    if (this.place<=width*width-width*2-1) {
                        this.place += width
                    }
                    break;
    
                case "left":
                    if (this.place%width!=1) {
                        this.place -= 1
                    }
                    break;
                default:
                    break;
            }
            squares[this.place].classList.add('alierGame')
            squares[this.place].classList.add(this.direction)
    
        }
    }

    const robo2 = {
        place : width+1,
        direction : "down",
        tourneRigth(){
            switch (this.direction) {
                case "up":
                    this.direction = "rigth"
                    squares[this.place].classList.remove('up')
                    squares[this.place].classList.add('rigth')
                    break;
    
                case "rigth":
                    this.direction = "down"
                    squares[this.place].classList.remove('rigth')
                    squares[this.place].classList.add('down')
                    break;
    
                case "down":
                    this.direction = "left"
                    squares[this.place].classList.remove('down')
                    squares[this.place].classList.add('left')
                    break;
    
                case "left":
                    this.direction = "up"
                    squares[this.place].classList.remove('left')
                    squares[this.place].classList.add('up')
                    break;
                default:
                    break;
    
            }
        },
        move(){
            squares[this.place].classList.remove('playeur2')
            squares[this.place].classList.remove(this.direction)
            switch (this.direction) {
                case "up":
                    if (this.place>=width*2) {
                        this.place -= width
                    }
                    break;
    
                case "rigth":
                    if (this.place%width!=width-2) {
                        this.place += 1
                    }
                    break;
    
                case "down":
                    if (this.place<=width*width-width*2-1) {
                        this.place += width
                    }
                    break;
    
                case "left":
                    if (this.place%width!=1) {
                        this.place -= 1
                    }
                    break;
                default:
                    break;
            }
            squares[this.place].classList.add('playeur2')
            squares[this.place].classList.add(this.direction)
    
        }
    }



    
    
    function scorefunction() {
        score ++
    }
    
    for (let i = 0; i < 225; i++) {
        const caseGame = document.createElement('div');
        //"caseGame" veu dir créé un div
        grid.appendChild(caseGame)
        
        //apliqué "caseGame" comme enfent de "grid"
    }
    
    const squares = Array.from(document.querySelectorAll('#bodyGame div'));
    //construire un tableau dans les cases sont tout le div dans "bodyGame"
    

    squares[robo2.place].classList.add('playeur2')
    squares[robo2.place].classList.add('down')
    squares[robo1.place].classList.add('alierGame')
    squares[robo1.place].classList.add('up')
    
    function moveAlier(clik) {
        switch (clik.key) {
            //clik.key renvoi un array contenont le nom de l'ogjet "clik"
            case 'ArrowLeft':
                robo1.tourneRigth()
                robo1.tourneRigth()
                robo1.tourneRigth()
                break;
            case 'ArrowRight'://ArrowRight
                //le touche lefte
                robo1.tourneRigth()
                break;
            case 'ArrowUp':
                robo1.move()
                break
            default:
                break;
        }
    }
    








    document.addEventListener('keydown', moveAlier)
    //a chaque foi qu'un "kaydown"(clic) se passe dans le "document" activer la fonction "moveAlier" de variable 

    function movePlayer2(clik) {
        switch (clik.key) {
            //clik.key renvoi un array contenont le nom de l'ogjet "clik"
            case 'q':
                robo2.tourneRigth()
                robo2.tourneRigth()
                robo2.tourneRigth()
                break;
            case 'd'://ArrowRight
                //le touche lefte
                robo2.tourneRigth()
                break;
            case 'z':
                robo2.move()
                break
            default:
                break;
        }
    }
    
    document.addEventListener('keydown', movePlayer2)














    
    function gameOver() {
        console.log("GAME OVER");
        setTimeout(() => {resultGame.classList.remove('noActiv');}, 500)
        setTimeout(() => {grid.classList.add('noActiv');}, 500)
    }
    
    
    
    function shoot1(e) {
        let laserId
        let currentlaser = robo1.place
        let micildirection
        if (robo1.direction=="up") micildirection = -width
        else if(robo1.direction=="rigth") micildirection = 1
        else if(robo1.direction=="down") micildirection = width
        else if(robo1.direction=="left") micildirection = -1

        function movelaser1() {
            squares[currentlaser].classList.remove("micilame")
            currentlaser += micildirection
            squares[currentlaser].classList.add("micilame")
            if (squares[currentlaser].classList.contains('playeur2')) {
                squares[currentlaser].classList.remove("micilame")
                squares[currentlaser].classList.remove("playeur2")
                squares[currentlaser].classList.add("explosionGame")
                clearTimeout(laserId)
                setTimeout(() => {squares[currentlaser].classList.remove("explosionGame");}, 100)
                gameOver()
                // console.log(alienInvaders.indexOf(currentlaser));
            }
            if (((currentlaser<width)||(currentlaser>width*width-width-1))||((currentlaser%width<=0)||(currentlaser%width>width-1))) {
                squares[currentlaser].classList.remove("micilame")
                clearTimeout(laserId)
            }
        }
        
    
        switch (e.key) {
            case 'ArrowDown':
                laserId = setInterval(movelaser1, 100)
                break;
            default:
                break;
        }
    }
    document.addEventListener('keydown', shoot1)
    
    
    
    function shoot2(e) {
        let laserId
        let currentlaser = robo2.place
        let micildirection
        if (robo2.direction=="up") micildirection = -width
        else if(robo2.direction=="rigth") micildirection = 1
        else if(robo2.direction=="down") micildirection = width
        else if(robo2.direction=="left") micildirection = -1

        function movelaser1() {
            squares[currentlaser].classList.remove("micilame")
            currentlaser += micildirection
            squares[currentlaser].classList.add("micilame")
            if (squares[currentlaser].classList.contains('alierGame')) {
                squares[currentlaser].classList.remove("micilame")
                squares[currentlaser].classList.remove("alierGame")
                squares[currentlaser].classList.add("explosionGame")
                clearTimeout(laserId)
                setTimeout(() => {squares[currentlaser].classList.remove("explosionGame");}, 100)
                gameOver()
                // console.log(alienInvaders.indexOf(currentlaser));
            }
            if (((currentlaser<width)||(currentlaser>width*width-width-1))||((currentlaser%width<=0)||(currentlaser%width>width-1))) {
                squares[currentlaser].classList.remove("micilame")
                clearTimeout(laserId)
            }
        }
        
    
        switch (e.key) {
            case 's':
                laserId = setInterval(movelaser1, 100)
                break;
            default:
                break;
        }
    }
    document.addEventListener('keydown', shoot2)

}




