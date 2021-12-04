let login = document.querySelector('.perfil')
let tipologin = document.querySelector('.tipologin')
login.addEventListener('click',function(){
    document.querySelector('.body').classList.toggle('abrirlogin')   
    tipologin.classList.remove('liberartipo')
    document.querySelector('.entrar').classList.remove('abrirentrar')
    document.querySelector('.body').classList.remove('liberaracesso') 
})
document.querySelector('.entrar').addEventListener('click',function(){      
    document.querySelector('.entrar').classList.toggle('abrirentrar')
    document.querySelector('.body').classList.toggle('liberaracesso')    
    tipologin.classList.toggle('liberartipo')
})