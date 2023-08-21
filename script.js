const buttonClick = document.querySelector('button')
let input = document.querySelector('input')
let paragraph = document.querySelector('p')

const myContacts = [
    {name: 'Bill', phoneNumber: '(99) 99999-9999'},
    {name: 'Job', phoneNumber: '(99) 99999-9999'},
    {name: 'Naoki', phoneNumber: '(99) 99999-9999'},
    {name: 'Beatriz', phoneNumber: '(99) 99999-9999'},
    {name: 'Júlia', phoneNumber: '(99) 99999-9999'},
    {name: 'Rútila', phoneNumber: '(99) 99999-9999'}

]

function search(){
    for(let i = 0; i < myContacts.length; i++){
        if(input.value === myContacts[i].name){
            paragraph.innerHTML = `O número de telefone de ${myContacts[i].name}   é: ${myContacts[i].phoneNumber}`

            break

        } else  {
            paragraph.innerHTML = 'Contato não encontrado, tente novamente'
        }
    } console.log(input.value)
}

buttonClick.addEventListener('click', search)