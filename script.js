const Gameboard = (() => {
    const grid = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'x', 'o'];

    const getSquare = () => {
        //pass
    }

    const setSquare =() => {
        //pass
    }

    const reset = () => {
        //pass
    }

    return {getSquare, setSquare, reset};
})();

const displayController = (() => {
    
    const drawSign = () => {
        //pass
    }
})();

const gameController = (() => {
    
    const playGame = () => {
        //pass
    }

    const gameOver = () => {
        //pass
    }

    const restart = () => {
        //pass
    }
})();

const Player = (name, sign) => {
    this.name = name;
    this.sign = sign;
    const getSign = () => {
        return sign;
    }
}

