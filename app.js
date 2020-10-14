const friends = ['Tucker', 'Brent', 'Brodie', 'Hunter', 'Chad'];

//create button to activate song
let button = document.createElement('button');
let sing = document.createTextNode('Sing!');
button.appendChild(sing);
document.body.appendChild(button);

//looping through friends
function friendLoop() {
    for (let i = 0; i < friends.length; i++) {
        let div = document.createElement('div');
        div.className = 'friend';

        let h3 = document.createElement('h3');
        let h3text = document.createTextNode(friends[i]);
        h3.appendChild(h3text);
        div.appendChild(h3);


        let p = document.createElement('p');
        let pText;
        for (let i = 0; i < friends.length; i++) {
            for (let j = 99; j > 0; j--) {
                if (j > 1) {
                    pText = document.createTextNode(j + ' lines of code in the file, ' + j + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + (j - 1) + ' lines of code in the file');
                } else {
                    (j + ' line of code in the file, ' + j + ' line of code; ' + friends[i] + ' strikes one out, clears it all out, no more lines of code in the file');
                }
            }
        }

        p.appendChild(pText);
        div.appendChild(p);

        document.body.appendChild(div);
    }
}
//combining friend loop with click
button.addEventListener('click', friendLoop);