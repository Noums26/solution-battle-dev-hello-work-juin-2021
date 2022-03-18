const decollage = (input) => {
    let btn = [[input[0],1]];
    let stat;

    for (let i = 1; i < input.length; i++) {
        for (let j = 0; j < btn.length; j++) {
            if (btn[j][0] == input[i]) {
                stat = j;
                break;                
            } else stat = -1;            
        }
        stat != -1 ? (btn[stat][1] += 1) : (btn.push([input[i], 1]))
    }

    for (let i = 0; i < btn.length; i++) {
        if (btn[i][1] == 2) {
            stat = btn[i][0];
            break;
        }
    }
    return stat;
}
