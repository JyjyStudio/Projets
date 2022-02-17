const form = document.getElementById("form") as HTMLFormElement;
const score = document.getElementById('score') as HTMLElement;
const allQuestions = document.querySelectorAll('.question') as NodeListOf<HTMLElement>;
const titleResult = document.querySelector('#resultat h5') as HTMLElement;
const help = document.getElementById('aide') as HTMLElement;
const reponses = ['c', 'a', 'b', 'a', 'c'] as Array<string>;
const emojis = ['✔️','✨','👀','😭','👎'];
let arrayCheck = [] as Array<boolean>;
let arrayResult = [] as Array<string>;

form.addEventListener('submit', function(e) {
    e.preventDefault();
    for (let i = 1; i < 6; i++) {
        let checkedInput = document.querySelector(`input[name='q${i}']:checked`) as HTMLInputElement;
        if(checkedInput){
            arrayResult.push(checkedInput.value);
        }else {
            arrayResult.push('')
        }
    }
    console.log(arrayResult);
    verifFunc(arrayResult);
    arrayResult = [];
})

function verifFunc(tabResultats : Array<string>) {

    for(let a = 0; a < 5; a++){

        if(tabResultats[a] === reponses[a]) {
            arrayCheck.push(true);
        } else {
            arrayCheck.push(false);
        }

    }
    // console.log(arrayCheck);
    afficherResultats(arrayCheck);
    couleursFonction(arrayCheck);
    arrayCheck = [];
}

function afficherResultats(tabCheck : Array<boolean>) {

    const nbDeFautes = tabCheck.filter(element => element !== true).length;
    console.log(nbDeFautes + ' fautes');

    switch(nbDeFautes) {

        case 0:
            titleResult.innerText = `✔️ Bravo, c'est un sans faute ! ✔️`
            help.innerText = ''
            score.innerText = '5/5'
            break;
        case 1:
            titleResult.innerText = `✨ Vous y êtes presque ! ✨`
            help.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !'
            score.innerText = '4/5'
            break;
        case 2:
            titleResult.innerText = `✨ Encore un effort ... 👀`
            help.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            score.innerText = '3/5'
            break;
        case 3:
            titleResult.innerText = `👀 Il reste quelques erreurs. 😭`
            help.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            score.innerText = '2/5'
            break;
        case 4:
            titleResult.innerText = `😭 Peux mieux faire ! 😭`
            help.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            score.innerText = '1/5'
            break;
        case 5:
            titleResult.innerText = `👎 Peux mieux faire ! 👎`
            help.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            score.innerText = '0/5'
        break;

        default:
            'Wops, cas innatendu.';
    }

}

function couleursFonction(tabValBool : Array<boolean>) {

    for(let question = 0; question < tabValBool.length; question++){

        if(tabValBool[question] === true){
            allQuestions[question].style.background = 'lightgreen';
        } else {
            allQuestions[question].style.background = '#ffb8b8';
            allQuestions[question].classList.add('false');

            setTimeout(() => {
                allQuestions[question].classList.remove('false');
            }, 500)
        }
        
    }

}

allQuestions.forEach(item => {
    item.addEventListener('click', () => {
        item.style.background = "white";
    })
})