const theContainer = document.querySelector("#container");
const newButton = document.querySelector("#btn-config");

const sizeSquare = 930;

function colorRandom(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgba(${r}, ${g}, ${b})`;
}

function nuevoCuadro(cuadrosPorLado){
    theContainer.innerHTML = '';

    const miniContainerSize = sizeSquare/cuadrosPorLado;
    const totalCuadrados = cuadrosPorLado * cuadrosPorLado;

    for(let i = 0; i < totalCuadrados; i++){
        const miniSquare = document.createElement('div');
        
        miniSquare.classList.add("square");
        miniSquare.style.width = `${miniContainerSize}px`;
        miniSquare.style.height = `${miniContainerSize}px`;
       

        miniSquare.addEventListener('mouseover',() => {
        miniSquare.style.backgroundColor = colorRandom();
}); 
            
        theContainer.appendChild(miniSquare);
    }
}

newButton.addEventListener('click', () => {
    let userInput = prompt("Cuantos cuadros por lado quieres? (maximo 100)");

    let num = parseInt(userInput);

    if(num > 0 && num <= 100){
        nuevoCuadro(num);
    } else if (userInput !== null){ 
        alert("Por favor ingresa un numero valido");
    }
});
nuevoCuadro(16);
