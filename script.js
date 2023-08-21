const buttonClick = document.querySelector('button')
let input = document.querySelector('input')
let paragraph = document.querySelector('p')

const myContacts = [
    {name: 'Bill', phoneNumber: '(19) 99345-9089'},
    {name: 'Job', phoneNumber: '(21) 99672-0951'},
    {name: 'Naoki', phoneNumber: '(53) 99233-4321'},
    {name: 'Beatriz', phoneNumber: '(11) 99422-1271'},
    {name: 'Júlia', phoneNumber: '(22) 99903-2019'},
    {name: 'Rútila', phoneNumber: '(25) 99321-9922'}

]

function search(){
    for(let i = 0; i < myContacts.length; i++){
        if(input.value.toLowerCase() === myContacts[i].name.toLowerCase()){
            paragraph.innerHTML = `Contato encontrado Nome: ${myContacts[i].name} e o número de telefone é: ${myContacts[i].phoneNumber}`

            break

        } else  {
            paragraph.innerHTML = 'Contato não encontrado, tente novamente'
        }
    } console.log(input.value)
}

buttonClick.addEventListener('click', search)