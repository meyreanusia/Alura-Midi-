// let telaPom = document.querySelector('.tecla_pom');
// let somPom = document.querySelector("#som_tecla_pom");
// document.querySelector("#som_tecla_pom").onclick = tocaSom;


// telaPom.addEventListener('click', (event) => somPom.play());



function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);
    
    if( elemento != null && elemento === 'audio'){ 
            elemento.play()   
    }
    else{
            return alert('elemento não encontrado')
    }

}

const listaDeTeclas = document.querySelectorAll(".tecla");

for(let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function(){
        tocaSom(idAudio)
    };

    tecla.onkeydown = function (event) {

        if(event.code === 'Enter' || event.code === 'Space'){
            tecla.classList.add('ativa');
        }
    }
    
    tecla.onkeyup = function(event) {
        
        if(event.code === 'Enter' || event.code === 'Space'){
            tecla.classList.remove('ativa')
        }
    }
}
