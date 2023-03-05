function solve(array) {
    let fieldLength = array.shift();
    let field = [];
 
    for (let i = 0; i < fieldLength; i++) {
        field.push(0);
    }
 
    let bugs = array.shift()
        .split(" ")
        .map(Number);
 
    for (let el of bugs) {
        if (el >= 0 && el < fieldLength) {
            field[el] = 1;
        }
    }
 
 
    while (array.length > 0) {
        let command = array.shift()
            .split(' ');
        let position = Number(command[0]);  //index
        let direction = command[1];
        let jumpNumber = Number(command[2]);
 
        if (position < 0 || position >= field.length) {
            continue;
        }
 
        if (jumpNumber < 0) {
            jumpNumber = Math.abs(jumpNumber);
            if (direction == "right") {
                direction = "left";
            } else {
                direction = 'right';
            }
        }
 
        if (field[position] == 0) {
            continue;
        }
 
 
 
 
        field[position] = 0;
        let newPosition;
        let isCommandDone = false;
 
        switch (direction) {
            case 'right':
                newPosition = position + jumpNumber;
                isCommandDone = false;
                while (isCommandDone == false) {
                    if (field[newPosition] == 0) {
                        isCommandDone = true;
                        field[newPosition] = 1;
                    } else {
                        newPosition += jumpNumber;
                        if (newPosition >= fieldLength) {
                            break;
                        }
                    }
 
                }
                break;
            case 'left':
                newPosition = position - jumpNumber;
                isCommandDone = false;
                while (isCommandDone == false) {
                    if (field[newPosition] == 0) {
                        isCommandDone = true;
                        field[newPosition] = 1;
                    } else {
                        newPosition -= jumpNumber;
                        if (newPosition < 0) {
                            break;
                        }
                    }
 
                }
 
                break;
        }
    }
    console.log(field.join(" "));
 
 
}
solve([ 3, '0 1',
'0 right 1',
'2 right 1' ]);
/*solve([ 3, '0 1 2',
'0 right 1',
'1 right 1',
'2 right 1']); */