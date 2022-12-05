document.querySelector('div#gif').addEventListener('click', ()=>{
    const body = document.querySelector('#container')
    const trailerYoutuber = document.querySelector('#trailerYoutuber')

    trailerYoutuber.style.display = 'block'
    body.style.opacity = '0.5'

    body.addEventListener('dblclick', ()=> {
        body.style.opacity = '1'
        trailerYoutuber.style.display = 'none'
    })

    trailerYoutuber.addEventListener('mouseenter', ()=>{
        const aviso = document.querySelector('p#aviso')
        aviso.style.display = 'block'
    })
    trailerYoutuber.addEventListener('mouseout', ()=>{
        const aviso = document.querySelector('p#aviso')
        aviso.style.display = 'none'
    })
})