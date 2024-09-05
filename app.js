// console.log(dados)

function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")
    console.log(section);

    let resultados = ""

    for (let dado of dados) {
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
    section.innerHTML = resultados
    }
}