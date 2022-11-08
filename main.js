$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#imagen-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem);
        $(`
        <div class="imagen-link">
            <a href="${enderecoDaNovaImagem}" target="_blank" title= "Ver imagem em tamnho real">
                Ver imagem em tamnaho real
            </a>
        <div/>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#imagen-nova').val('');
    })
})

