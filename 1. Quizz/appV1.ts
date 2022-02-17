const form = document.getElementById("form") as HTMLFormElement;
const score = document.getElementById('score') as HTMLElement;
const resultatFinal = document.getElementById('resultat') as HTMLElement;
const aide = document.getElementById('aide') as HTMLElement;
const appreciation = document.getElementById('appreciation') as HTMLElement;
let resultat = 0;

form.addEventListener('submit', function(e) {
    e.preventDefault();
    resultatFinal.classList.add('resultat2');
    const formData = new FormData(this);
    const formResponses = Object.fromEntries(formData);
    if (formResponses.q1 == 'Napoleon Bonaparte') {
        document.getElementById('q1')!.classList.add('true');
        resultat++
    }else {
        document.getElementById('q1')!.classList.add('false')
    }
    if (formResponses.q2 == '4 juillet 1776') {
        document.getElementById('q2')!.classList.add('true')
        resultat++
    }else {
        document.getElementById('q2')!.classList.add('false')
    }
    if (formResponses.q3 == '395 après J.C') {
        document.getElementById('q3')!.classList.add('true')
        resultat++
    }else {
        document.getElementById('q3')!.classList.add('false')
    }
    if (formResponses.q4 == 'Ljubljana') {
        document.getElementById('q4')!.classList.add('true')
        resultat++
    }else {
        document.getElementById('q4')!.classList.add('false')
    }
    if (formResponses.q5 == '4,9 Millions') {
        document.getElementById('q5')!.classList.add('true')
        resultat++
    }else {
        document.getElementById('q5')!.classList.add('false')
    }
    switch (resultat) {
        case 0:
            appreciation.textContent = "C'est nul, Recommences !"
            aide.textContent = 'Re-tente une autre réponse dans les cases rouges, puis re-valides !'
            break;
    
        case 1:
            appreciation.textContent = "C'est pas fameux.. Recommences !"
            aide.textContent = 'Re-tente une autre réponse dans les cases rouges, puis re-valides !'
            break;
    
        case 2:
            appreciation.textContent = "C'est insuffisant.. Recommences !"
            aide.textContent = 'Re-tente une autre réponse dans les cases rouges, puis re-valides !'
            break;
    
        case 3:
            appreciation.textContent = "C'est moyen.. Recommences !"
            aide.textContent = 'Re-tente une autre réponse dans les cases rouges, puis re-valides !'
            break;
    
        case 4:
            appreciation.textContent = "C'est presque parfait, Recommences !"
            aide.textContent = 'Re-tente une autre réponse dans les cases rouges, puis re-valides !'
            break;
        case 5:
            appreciation.textContent = "Bravo, C'est un sans faute !"
            break;
    
        default:
            break;
    }
    score.textContent = `${resultat}/5`;
    resultat = 0;
})
export{} //regle le probleme du meme nom de variable entre les fichiers appV1.ts et appV2.ts