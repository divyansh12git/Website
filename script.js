const number=document.getElementById('count')
const incbut=document.getElementById('click')
const decbut=document.getElementById('dec')
let counter=0
const ulelement=document.querySelector('#list')

function increase(){
    counter++
    number.innerText=counter
    let text=document.createTextNode('lier'+counter)
    let li=document.createElement('li')
    ulelement.appendChild(li)
    li.appendChild(text)
}
function decrease(){
    if(counter>0){
        counter--
        li.document.removeChild('li')
    }
    number.innerText=counter
    
}
incbut.addEventListener('click',increase)
decbut.addEventListener('click',decrease)



const button=document.getElementById('check')
button.addEventListener('click',addelement)
function addelement(){
    let text=document.createTextNode('lier'+counter)
    let li=document.createElement('li')
    ulelement.appendChild(li)
    li.innerHTML='lier'
 
}