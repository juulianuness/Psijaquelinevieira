function pesquisar(){
    let section = document.getElementById("resultados-pesquisa")


    let campoPesquisa = document.getElementById("campo-pesquisa").value
    

    campoPesquisa = campoPesquisa.toLowerCase()
    let resultados = "";
    let titulo = "";
    let descricao = "";
    

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        

        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) ) {
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

if(!resultados) { 
        resultados = "<p>Nada foi encontrado. O item digitado não consta na base de dados<p/>"}
    section.innerHTML = resultados  
}