const btn = document.querySelector('#btn')

console.log(btn)

btn.addEventListener('click', () => {
    alert('click en el boton')
})

// jquery
$(() => {
 

    $("#btn").click(() => {
        console.log('Hola, estoy utilizando jquery')
    })

})