const Player = (name, sign) => {
    this.name = name;
    this.sign = sign;
    const getSign = () => {
        return sign;
    }
}

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


    const squareElement = document.querySelectorAll('.square');
    const resetButton = document.querySelector('#reset');

    const squareClick = (e) => {
        if(gameController.gameOver() || e.target.textContent !== '') {
            return;
        }
        gameController.playGame(e.target.id);
        updateGameboard();
    }

    const resetClick = (e) => {
        Gameboard.reset();
        gameController.restart();
        updateGameboard();
        updateMessage('Player 1\'s turn');
    }

    resetButton.addEventListener('click', resetClick);
    squareElement.forEach(square => {
        square.addEventListener('click', squareClick);
    });

    //issues to resolve here
    const updateGameboard = () => {
        for (let i = 0; i < 9; i++) {
            const square = document.querySelector(`.square${i}`);
            square.textContent = Gameboard.getSquare(i);
        }
    }


    const updateMessage = (message) => {
        const messageElement = document.querySelector('#message');
        messageElement.textContent = message;
    }

    return {squareClick, updateGameboard, updateMessage, resetButton};
})();


const gameController = (() => {
    const Player1 = Player('Player 1', 'X');
    const Player2 = Player('Player 2', 'O');
    let currentPlayer = Player1;
    let round = 0;
    let isOver = false;
    
    const playGame = (squareIndex) => {
        if (isOver) {
            return;
        }
        if (Gameboard.getSquare(squareIndex) === '') {
            Gameboard.setSquare(squareIndex, currentPlayer.getSign());
            displayController.updateGameboard();
            round++;
            if (checkWin(squareIndex)) {
                displayController.updateMessage(`${currentPlayer.name} wins!`);
                isOver = true;
                return;
            }
            if (round === 9) {
                displayController.updateMessage("Draw!");
                isOver = true;
                return;
            }
            currentPlayer = currentPlayer === Player1 ? Player2 : Player1;
        }

    }

    const checkWin = (squareIndex) => {
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < winConditions.length; i++) {
            if (winConditions[i].includes(squareIndex)) {
                if (Gameboard.getSquare(winConditions[i][0]) === Gameboard.getSquare(winConditions[i][1]) && Gameboard.getSquare(winConditions[i][1]) === Gameboard.getSquare(winConditions[i][2])) {
                    return true;
                }
            }
        }
    }

    const gameOver = () => {
        return isOver;
    }

    const restart = () => {
        Gameboard.reset();
        displayController.updateGameboard();
        round = 0;
        isOver = false;
    }

    return {playGame, gameOver, restart};
})();
