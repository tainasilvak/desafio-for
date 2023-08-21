const buttonClick = document.querySelector("button")

let p = document.querySelector("p")
let input = document.querySelector("input")

const contacts = [
    {
        name: 'Tainá', number: '(88) 92348-6789',
        name: 'Beatriz', number: '(11) 90459-2390',
        name: 'Eduardo', number: '(12) 94567-8964',
        name: 'Naoki', number: '(21) 98672-1256'
    }
]

function search(){

   for(let i = 0; i < contacts.length; i++){

    if(input.value === contacts[i].name){
        p.innerHTML = `Contato Encontrado Nome:${contacts[i].name} Tel:${contacts[i].number}`

        break
        
    } else {
        p.innerHTML = 'Contato não encontrado, tente novamente'
    }
   }
}

buttonClick.addEventListener('click', search)