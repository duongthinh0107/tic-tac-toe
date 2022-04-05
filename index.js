let table = "";
const player1 = "X";
const player2 = "O";
let turn = player1

function createBoard(row, col) {
    for (let i = 0; i < row; i++) {
        table += "<tr>";
        for (let j = 0; j < col; j++) {
            table += `<td onclick='checkCell(this)' id=${i}-${j} class="cell" ></td>`
        }
        table += "<tr/>"
    }
    document.getElementById('board').innerHTML = table
}
function checkCell(cell) {
    if (cell.innerText === '') {
        if (turn === player1) {
            cell.innerText = player1
        } else {
            cell.innerText = player2
        }
    }
    // tach id
    let row = '';
    let col = '';
    let check = false;
    let text = cell.id
    for (let index = 0; index < text.length; index++) {
        const element = text[index];
        if (element === '-') {
            check = true;
            continue;
        }
        if (!check) {
            row += element;

        } else {
            col += element;
        }
    }
    let total = 0;
    total = checkLeftRight(cell.id,row,col,turn)
    if (total === 4) {
        setTimeout(function (){checkwinandreset()},200)
        return;
    }
    total = checkTopBottom(cell.id,row,col,turn)
    if (total === 4) {
        setTimeout(function () {checkwinandreset()},200)
        return;
    }
    total = checkCross(cell.id,row,col,turn)
    if (total === 4) {
        setTimeout(function () { checkwinandreset()},200)
        return;
    }
    total = checkCross2(cell.id,row,col,turn)
    if (total === 4) {
        setTimeout(function () {checkwinandreset()},200)
        return;
    }
        if (turn === player1) {
            turn = player2
        } else {
            turn = player1
        }
}
function checkwinandreset() {
    alert("win")
    let array = document.getElementsByClassName("cell")
    for (const cell in array) {
        array[cell].innerText = '';
    }
}
function checkLeftRight(cell,row,col,player) {
    let total = 0;
    for (let i = 1; i < 5; i++) {
        let rowI = row ;
        let colJ = col * 1 - i;
        if (colJ < 0) {
            continue;
        }
        let newId = `${rowI}-${colJ}`

        if (document.getElementById(newId).innerText === player) {
            total += 1;
        } else {
            total -= 1;
        }
    }
    if (total === 4) {
        return total;
    }
    for (let i = 1; i < 5; i++) {
        let rowI = row ;
        let colJ = col * 1 + i;
        if (colJ > 9) {
            continue
        }
        let newId = `${rowI}-${colJ}`
        if (document.getElementById(newId).innerText === player) {
            total += 1;
            if (total === 4) {
                return total;
            }
        } else {
            total -= 1
        }
    }
    return total;
}
function checkTopBottom(cell,row,col,player) {
    let total = 0;
    for (let i = 1; i < 5; i++) {
        let rowI = row * 1 - i;
        let colJ = col;
        if (rowI < 0) {
            continue;
        }
        let newId = `${rowI}-${colJ}`
        if (document.getElementById(newId).innerText === player) {
            total += 1;
        } else {
            total -= 1;
        }
    }
    if (total === 4) {
        return total;
    }
    for (let i = 1; i < 5; i++) {
        let rowI = row * 1 + i;
        let colJ = col ;
        if (rowI > 9) {
            continue
        }
        let newId = `${rowI}-${colJ}`
        if (document.getElementById(newId).innerText === player) {
            total += 1;
            if (total === 4) {
                return total;
            }
        } else {
            total -= 1;
        }

    }
    return total;
}
function checkCross(cell,row,col,player) {
    let total = 0;
    for (let i = 1; i < 5; i++) {
        let rowI = row * 1 - i;
        let colJ = col * 1 - i;
        if (colJ < 0 || rowI < 0) {
            continue;
        }
        let newId = `${rowI}-${colJ}`
        if (document.getElementById(newId).innerText === player) {
            total += 1;
        } else {
            total -= 1;
        }

    }
    if (total === 4) {
        return total;
    }
    for (let i = 1; i < 5; i++) {
        let rowI = row * 1 + i;
        let colJ = col * 1 + i;
        if (colJ > 9 || rowI > 9) {
            continue
        }
        let newId = `${rowI}-${colJ}`
        if (document.getElementById(newId).innerText === player) {
            total += 1;
            if (total === 4) {
                return total;
            }
        } else {
            total -= 1;
        }
    }
    return total;
}
function checkCross2(cell,row,col,player) {
    let total = 0;
    for (let i = 1; i < 5; i++) {
        let rowI = row * 1 - i;
        let colJ = col * 1 + i;
        if (colJ > 9 || rowI < 0) {
            continue;
        }
        let newId = `${rowI}-${colJ}`
        if (document.getElementById(newId).innerText === player) {
            total += 1;
        } else {
            total -= 1;
        }
    }
    if (total === 4) {
        return total;
    }
    for (let i = 1; i < 5; i++) {
        let rowI = row * 1 + i;
        let colJ = col * 1 - i;
        if (rowI > 9 || colJ < 0) {
            continue
        }
        let newId = `${rowI}-${colJ}`
        if (document.getElementById(newId).innerText === player) {
            total += 1;
            if (total === 4) {
                return total;
            }
        } else {
            total -= 1;
        }
    }
    return total;
}
createBoard(10, 10);