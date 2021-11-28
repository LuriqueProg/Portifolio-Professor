document.querySelector('#materias').addEventListener('change',function(){
    let portugues = document.querySelector('#por')
    let matematica = document.querySelector('#mat')
    let biologia = document.querySelector('#bio')
    let quimica = document.querySelector('#qui')
    let fisica = document.querySelector('#fis')
    let historia = document.querySelector('#his')
    let geografia = document.querySelector('#geo')
    let ingles = document.querySelector('#ing')
    let sociologia = document.querySelector('#soc')
    let filosofia = document.querySelector('#fil')
    if(matematica.selected){
        document.querySelector('.matematica').classList.add('open')
    }else{
        document.querySelector('.matematica').classList.remove('open')
    }
    if(biologia.selected){
        document.querySelector('.biologia').classList.add('open')
    }else{
        document.querySelector('.biologia').classList.remove('open')
    }
    if(portugues.selected){
        document.querySelector('.pt').classList.add('open')
    }else{
        document.querySelector('.pt').classList.remove('open')
    }
    if(quimica.selected){
        document.querySelector('.quimica').classList.add('open')
    }else{
        document.querySelector('.quimica').classList.remove('open')
    }
    if(fisica.selected){
        document.querySelector('.fisica').classList.add('open')
    }else{
        document.querySelector('.fisica').classList.remove('open')
    }
    if(historia.selected){
        document.querySelector('.historia').classList.add('open')
    }else{
        document.querySelector('.historia').classList.remove('open')
    }
    if(geografia.selected){
        document.querySelector('.geografia').classList.add('open')
    }else{
        document.querySelector('.geografia').classList.remove('open')
    }
    if(sociologia.selected){
        document.querySelector('.sociologia').classList.add('open')
    }else{
        document.querySelector('.sociologia').classList.remove('open')
    }
    if(filosofia.selected){
        document.querySelector('.filosofia').classList.add('open')
    }else{
        document.querySelector('.filosofia').classList.remove('open')
    }
    if(ingles.selected){
        document.querySelector('.ingles').classList.add('open')
    }else{
        document.querySelector('.ingles').classList.remove('open')
    }
})