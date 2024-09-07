function pesquisar(){
    let section = document.getElementById("resultados-pesquisa")


    let campoPesquisa = document.getElementById("campo-pesquisa").value

    console.log(section);
    
    let resultados = ""
    
    // para cada dado dentro da lista de dados
    
    for (let dado of dados) {
        // se titulo includes campoPesquisa
        if(dado.titulo.includes(campoPesquisa)) {
                //cria um novo elemento
                resultados +=  `
                <div class="item-resultado"> 
                    <h2>
                            <a href="${dado.link}"
                            target="_blank"> ${dado.titulo}</a>
                    </h2> 
                    <p> ${dado.descricao}
                
                            </p>
                    </div>
            `
    }
}
    section.innerHTML = resultados  
}