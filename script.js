const Gameboard = (() => {
    const grid = Array(9).fill('');

    const getSquare = (i) => {
        if (i > 8 || i < 0) {
            return 'Invalid index';
        }
        return grid[i];
    }

    const setSquare =() => {
        if (i > 8 || i < 0) {
            return 'Invalid index';
        }
        grid[i] = sign;
    }

    const reset = () => {
        for (let i = 0; i < 9; i++) {
            grid[i] = '';
        }
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

