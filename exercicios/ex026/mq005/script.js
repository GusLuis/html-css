// function mudouTamanho () {
//     if (window.innerWidth >= 768) {
//         itens.style.display = 'block'
//     }
//     else {
//         itens.style.display = 'none'
//     }
// }

function clickMenu() {

    // Verifica se o estilo do elemento itens está com o display igual a 'block' (ou seja, está visível).

    // Se no CSS está display: none, por que o JavaScript verifica se itens.style.display == 'block'?
    // itens.style.display só acessa o estilo inline (ou seja, definido diretamente no HTML com style="...", ou atribuído via JavaScript). Ele não acessa os estilos definidos via CSS externo ou <style> no <head>.

    // Se estiver, ele esconde o elemento alterando o display para 'none'.

    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    }

    // Caso contrário (ou seja, se o menu estiver escondido ou com outro valor), ele mostra o elemento colocando o display como 'block'.
    else {
        itens.style.display = 'block'
    }
}