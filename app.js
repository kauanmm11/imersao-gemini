// console.log(dados)

function pesquisar() {

    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML = "<p>NADA FOI ENCONTRADO.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase()
        descricao = dado.titulo.toLowerCase()
        tags = dado.titulo.toLowerCase()

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `

            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
            <div class="foto-texto">
                <img src= ${dado.foto} alt="Imagem de Alanzoka" class="imagem-resultado">
                <p class="descricao-meta">${dado.descricao}</p>
            </div>
                <a href= ${dado.links}>Mais Informações</a><br>
                <a href= ${dado.links}>Alanzoka na Twitch</a>
        </div>
        `
        }
    }

    if (!resultados) {
        resultados = "<p>NADA FOI ENCONTRADO.</p>"
    }

    section.innerHTML = resultados 
}