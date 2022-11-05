var placar = 0
var jumpSound = new Audio('./sound/jump.mp3')
jumpSound.volume = 0.2;
jumpSound.playbackRate = 1.3

const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const placarText = document.querySelector("#placar")

const jump = () => {
    mario.classList.add('jump');

    jumpSound.play()

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).all

    console.log(pipePosition)
    // console.log(marioPosition)

    if (!(pipePosition <= 120 && pipePosition > 0 && marioPosition < 200)) {
        if(pipePosition < 320){
            aumentaPlacar()
        }
    }


    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}


const aumentaPlacar = () => {
    placar = placar + 1
    placarText.textContent = "Score: " + placar
}


function start(){
    const loop = setInterval(() => {
    
        // console.log('loop')
        
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
        // console.log(pipePosition);
    
        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
    
            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;
    
            mario.src = './images/game-over.png';
            mario.style.width = '85px'
            mario.style.marginLeft = '35px'
    
            clearInterval(loop);
            document.removeEventListener('keydown', jump)
            endGame()
        }
    
    }, 10);
}

function endGame(){
    const screen = document.querySelector('#gameOverScreen');
    const textAndButton = document.querySelector('#gameOverTextAndButton')

    screen.classList.remove('none');
    screen.classList.add('game-over');
    textAndButton.classList.remove('none')
    textAndButton.classList.add('game-over-text')
}


start()
document.addEventListener('keydown', jump);

document.querySelector('button').addEventListener('click', ()=> {
    document.location.reload(true)
})