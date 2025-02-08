const jogadores = [
    {
        primeiraLetra: "N",
        primeiroNome: "Neymar",
        bg: "https://example.com/imagens/neymar_fundo.png",
        efeito: "https://example.com/imagens/neymar_efeito.png",
        carachter: "https://example.com/imagens/neymar_personagem.png",
        descricao: "Jogador brasileiro conhecido por sua habilidade, agilidade e estilo de jogo.",
        ataque: 90,
        defesa: 55
    },
    {
        primeiraLetra: "R",
        primeiroNome: "Ronaldinho Gaúcho",
        bg: "https://example.com/imagens/ronaldinho_fundo.png",
        efeito: "https://example.com/imagens/ronaldinho_efeito.png",
        carachter: "https://example.com/imagens/ronaldinho_personagem.png",
        descricao: "Ícone brasileiro do futebol, famoso por sua criatividade e controle de bola.",
        ataque: 88,
        defesa: 60
    },
    {
        primeiraLetra: "L",
        primeiroNome: "Lionel Messi",
        bg: "https://example.com/imagens/messi_fundo.png",
        efeito: "https://example.com/imagens/messi_efeito.png",
        carachter: "https://example.com/imagens/messi_personagem.png",
        descricao: "Lenda argentina do futebol, reconhecido por sua visão e habilidade técnica.",
        ataque: 95,
        defesa: 45
    },
    {
        primeiraLetra: "C",
        primeiroNome: "Cristiano Ronaldo",
        bg: "https://example.com/imagens/cristiano_fundo.png",
        efeito: "https://example.com/imagens/cristiano_efeito.png",
        carachter: "https://example.com/imagens/cristiano_personagem.png",
        descricao: "Superstar português do futebol, conhecido por sua velocidade e força.",
        ataque: 92,
        defesa: 60
    },
    {
        primeiraLetra: "Z",
        primeiroNome: "Zinedine Zidane",
        bg: "https://example.com/imagens/zidane_fundo.png",
        efeito: "https://example.com/imagens/zidane_efeito.png",
        carachter: "https://example.com/imagens/zidane_personagem.png",
        descricao: "Famoso jogador francês, conhecido por sua elegância e liderança em campo.",
        ataque: 85,
        defesa: 70
    },
    {
        primeiraLetra: "D",
        primeiroNome: "Diego Maradona",
        bg: "https://example.com/imagens/maradona_fundo.png",
        efeito: "https://example.com/imagens/maradona_efeito.png",
        carachter: "https://example.com/imagens/maradona_personagem.png",
        descricao: "Ícone argentino do futebol, famoso por sua criatividade e visão de jogo.",
        ataque: 90,
        defesa: 55
    },
    {
        primeiraLetra: "P",
        primeiroNome: "Pelé",
        bg: "https://example.com/imagens/pele_fundo.png",
        efeito: "https://example.com/imagens/pele_efeito.png",
        carachter: "https://example.com/imagens/pele_personagem.png",
        descricao: "Lenda brasileira do futebol, considerado um dos maiores jogadores de todos os tempos.",
        ataque: 94,
        defesa: 50
    },
    {
        primeiraLetra: "H",
        primeiroNome: "Harry Kane",
        bg: "https://example.com/imagens/kane_fundo.png",
        efeito: "https://example.com/imagens/kane_efeito.png",
        carachter: "https://example.com/imagens/kane_personagem.png",
        descricao: "Atacante inglês conhecido por sua habilidade de finalização e liderança.",
        ataque: 88,
        defesa: 55
    },
    {
        primeiraLetra: "K",
        primeiroNome: "Kylian Mbappé",
        bg: "https://example.com/imagens/mbappe_fundo.png",
        efeito: "https://example.com/imagens/mbappe_efeito.png",
        carachter: "https://example.com/imagens/mbappe_personagem.png",
        descricao: "Jovem prodígio francês, reconhecido por sua velocidade e técnica.",
        ataque: 93,
        defesa: 50
    },
    {
        primeiraLetra: "E",
        primeiroNome: "Eden Hazard",
        bg: "https://example.com/imagens/hazard_fundo.png",
        efeito: "https://example.com/imagens/hazard_efeito.png",
        carachter: "https://example.com/imagens/hazard_personagem.png",
        descricao: "Meia belga conhecido por sua drible e visão de jogo.",
        ataque: 85,
        defesa: 60
    },
    {
        primeiraLetra: "A",
        primeiroNome: "Antoine Griezmann",
        bg: "https://example.com/imagens/griezmann_fundo.png",
        efeito: "https://example.com/imagens/griezmann_efeito.png",
        carachter: "https://example.com/imagens/griezmann_personagem.png",
        descricao: "Atacante francês conhecido por sua versatilidade e inteligência em campo.",
        ataque: 87,
        defesa: 60
    },
    {
        primeiraLetra: "T",
        primeiroNome: "Thierry Henry",
        bg: "https://example.com/imagens/henry_fundo.png",
        efeito: "https://example.com/imagens/henry_efeito.png",
        carachter: "https://example.com/imagens/henry_personagem.png",
        descricao: "Atacante francês celebrado por sua velocidade e habilidade técnica.",
        ataque: 91,
        defesa: 55
    },
    {
        primeiraLetra: "R",
        primeiroNome: "Raúl González",
        bg: "https://example.com/imagens/raul_fundo.png",
        efeito: "https://example.com/imagens/raul_efeito.png",
        carachter: "https://example.com/imagens/raul_personagem.png",
        descricao: "Atacante espanhol conhecido por sua liderança e consistência em campo.",
        ataque: 85,
        defesa: 65
    },
    {
        primeiraLetra: "S",
        primeiroNome: "Sergio Ramos",
        bg: "https://example.com/imagens/ramos_fundo.png",
        efeito: "https://example.com/imagens/ramos_efeito.png",
        carachter: "https://example.com/imagens/ramos_personagem.png",
        descricao: "Zagueiro espanhol famoso por sua liderança e habilidade aérea.",
        ataque: 80,
        defesa: 90
    },
]









const FactoryCard = (primeiraLetra, primeiroNome, bg, efeito,
    carachter, descricao, primeiraLetraTitulo, titulo, ataque, defesa) => {


    return  `    
<div class="card-container">
<div class="card-inner">
        <div class="card">
            <div class="effect"></div>
            <div class="content">
                <header>
                    <h2>
                        <span>${primeiraLetra}</span>${primeiroNome} <span>${primeiraLetra}</span>${segundoNome}
                    </h2>
                    <div class="element">
                    </div>
                </header>
                <div class="star-container">
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                </div>
                <figure>
                    <div class="bg-figure">
                        <div class="background-character">
                            <img src="${bg}" alt="">
                        </div>
                        <div class="circle">
                            <img src="${efeito}" alt="">
                        </div>
                        <div class="character">
                            <img src="${carachter}" alt="">
                        </div>
                    </div>
                </figure>
                <div class="description-container">
                        <div class="square s1"></div>
                        <div class="square s2"></div>
                        <div class="square s3"></div>
                        <div class="square s4"></div>
                        <div class="text-container">
                            <div class="tipo">[<span>${primeiraLetraTitulo}</span>${titulo}]</div>
                            <p>${descricao}
                            </p>
                        </div>
                        <div class="points-container">
                            <div class="atak"> ATK/ ${ataque}    </div>
                            <div class="def"> DEF/  ${defesa}  </div>
                        </div>
                    </div>
                </div>
            </div><!--content end-->
        </div> <!--card end-->
        <div class="back-card"> test</div>
</div> <!---->
</div> <!-- card-container -->

`

}


