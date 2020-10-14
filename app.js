const friends = ['Chad', 'Chadd', 'Chaz', 'Chaddington', 'Chaddy'];

//create button to activate song
let button = document.createElement('button');
let sing = document.createTextNode('Sing!');
button.appendChild(sing);
document.body.appendChild(button);

//looping through friends
function friendLoop() {
    for (const friend of friends) {

        let div = document.createElement('div');
        div.className = 'friend';

        let h3 = document.createElement('h3');
        let h3text = document.createTextNode(friend);
        h3.appendChild(h3text);
        div.appendChild(h3);


        for (let j = 99; j > 0; j--) {
            let p = document.createElement('p');
            let pText;

            //if should catch the smallest amount possible //Leave the majority to else
            if (j === 1) {
                pText = document.createTextNode(j + ' line of code in the file, ' + j + ' line of code; ' + friend + ' strikes one out, clears it all out, no more lines of code in the file');
            } else if (j === 2) {
                pText = document.createTextNode(j + ' lines of code in the file, ' + j + ' lines of code; ' + friend + ' strikes one out, clears it all out, ' + (j - 1) + ' line of code in the file');
            } else {
                pText = document.createTextNode(j + ' lines of code in the file, ' + j + ' lines of code; ' + friend + ' strikes one out, clears it all out, ' + (j - 1) + ' lines of code in the file');
            }
        
            p.appendChild(pText);
            div.appendChild(p);
            document.body.appendChild(div);
        }
    }

   
   
}

//combining friend loop with click
button.addEventListener('click', friendLoop);