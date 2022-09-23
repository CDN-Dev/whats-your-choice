const readline = require('readline-sync')

const perguntas =[
    "Você prefere encontrar o amor verdadeiro uma vez, perdê-lo e nunca mais encontrá-lo ou ter vários relacionamentos felizes, mas nunca encontrar o amor?",
    "Você prefere ser o motorista designado e ficar sóbrio por uma noite ou caminhar 15 quilômetros para casa com todo o seu grupo de amigos?",
    "Você prefere dar uma topada no dedo do pé ou pisar em um Lego?",
    "Você prefere que cada filme que você assiste substitua o papel principal por Nicolas Cage ou que cada música que você ouve seja interpretada por Nickelback?",
    "Você prefere ficar sozinho pelo resto de sua vida ou estar sempre cercado de pessoas chatas?",
    "Você prefere ter esperma no cabelo ou nos olhos?",
    "Você prefere sempre ter gás incontrolável na escola ou sempre ter gás incontrolável em cada primeiro encontro para o resto de sua vida?",
    "Você prefere cagar no seu parceiro ou vomitar no seu parceiro?",
    "Ter diarreia explosiva cada vez que você encontra o seu chefe ou cada vez que você encontra a família do seu namorado ou namorada?",
    "Ser rico ou ser um mágico poderoso?",
    "Viver no deserto ou no frio do Alasca?",
    "Ter cabeça do tamanho de uma bola de tênis ou do tamanho de uma melancia?",
    "Não ter um órgão genital (pênis ou vagina) ou ter 5 órgãos genitais?",
    "Congelar até à morte ou ser queimado até à morte?",
    "Ter o superpoder de voar ou de ficar invisível?",
    "Ter amor infinito ou dinheiro infinito?",
    "Ter tudo o que você sempre desejou e morrer em um ano ou viver sua vida como ela é agora?",
    "Ser um gênio feio ou um idiota bonito?",
    "Ter acne horrível nas zonas do seu corpo que estão cobertas por roupas ou ter acne moderada apenas no rosto?",
    "Ser esquecido ou ser lembrado com uma pessoa muito ruim?",
    "Voltar no tempo ou saber o futuro?",
    "Perder todo o seu dinheiro e objetos de valor ou as fotos e vídeos da sua vida inteira?",
    "Férias na Europa ou no Caribe?",
    "Ser a primeira pessoa a explorar um planeta novo ou descobrir a cura de alguma doença?",
    "Morrer de sede ou fome?",
    "Lidar com a verdade do mundo ou viver em uma mentira bonita?",
    "Ser capaz de ler os pensamentos ou prever o futuro?",
    "Cheirar mal para o resto da sua vida (e não notar o cheiro) ou ficar com alguém que cheira mal para sempre?",
    "Passar a noite toda acordada para ajudar um familiar com problemas ou cuidando de um bebê que não para de chorar?",
    "Perder a mão direita ou pé esquerdo?",
    "Viver na casa dos seus sonhos sem Internet ou continuar na sua casa atual para sempre com Internet?",
    "Ter 20 filhos durante toda a sua vida ou não poder conceber ou adotar nunca?",
    "Mudar o seu nome legal para Hitler ou nunca comer chocolate de novo?",
    "Saber a data ou a causa da sua morte?",
    "Doar o seu corpo para a ciência ou os seus órgãos para pessoas que precisam deles?",
    "Ser presidente do seu país ou o CEO de uma grande empresa?",
    "Perder o seu melhor amigo ou perder todos os seus amigos menos o seu melhor amigo?",
    "Ser um diretor ou um ator famoso?",
    "Perder a capacidade de ler ou de falar?",
    "Ser um atleta nas Olimpíadas ou um jogador na Copa do Mundo de Futebol?",
    "Não ter todos os dedos ou não ter os cotovelos?",
    "Viver na praia ou em uma montanha com vista para a floresta?",
    "Para o resto da vida: um voto de celibato ou um voto de silêncio?",
    "Não tomar banho por uma semana ou não escovar os dentes por uma semana?",
    "Passar 1 mês sem tomar banho ou 1 mês sem internet?",
    "Que o mundo todo fique sabendo os detalhes da sua vida financeira ou sobre a sua vida amorosa?",
    "Você prefere viver uma vida que dure 1.000 anos ou viver 10 vidas de 100 anos?",
    "Ser a pessoa mais popular da escola ou a pessoa mais inteligente da escola?",
    "Viver sem música ou viver sem televisão?",
    "Falar sempre rimando ou sempre cantando?",
    "Ser acordado com um barulho muito alto ou que tirem seu cobertor em um dia de inverno?",
    "Esquecer quem você mesmo é ou que todos esqueçam quem você é?",
    "Ter 3 pés ou 3 mãos?",
    "Não sentir mais nenhum cheiro ou não sentir mais nenhum sabor?",
    "Saber quando você vai morrer ou como você vai morrer?",
    "Ter o mesmo celular para sempre ou o mesmo corte de cabelo?",
    "Ter energia ou dinheiro infinito?",
    "Estar sempre fedendo mas nunca sentir o cheiro ou sempre sentir um cheiro ruim que ninguém mais percebe?",
    "Lamber a axila de um conhecido ou deixar um desconhecido lamber sua axila?",
    "Nunca mais encontrar um amor romântico ou nunca mais conseguir fazer novas amizades?",
    "Viver num lugar super vazio e silencioso ou no centro movimentado de uma grande cidade?",
    "Nunca mais conseguir sentir emoções ou senti-las mas nunca conseguir demonstrá-las?",
    "Passar uma semana no meio de uma floresta sozinho(a) ou em uma casa assombrada?",
    "Nunca mais poder dirigir ou não poder mais usar transporte público?",
    "Não poder mais usar abreviações ou não poder usar emojis quando manda mensagens?",
    "Passar 5 anos em uma prisão e ser milionário(a) quando sair ou nunca ser preso e passar a vida sendo da classe média?",
    "Ter dinheiro, respeito e poder ilimitados (sem poder transar) ou sexo ilimitado?",
    "Ser famoso enquanto vivo e esquecido depois de morrer ou ter uma vida solitária e ser reconhecido como um gênio legendário após morrer?",
    "Estar sempre 10 minutos atrasado para tudo ou chegar sempre 20 minutos antes de todos?",
    "Fazer xixi na calça sempre que alguém te cumprimentar ou cagar nas calças sempre que for se despedir de alguém?",
    "Comer a mesma comida para o resto da sua vida ou nunca mais poder usar redes sociais?",
    "Que ninguém apareça no seu velório ou no seu casamento?",
    "Chupar os restos de unha cortada de um estranho ou engolir os pelos pubianos de alguém que você não conhece?",
    "Viver no mundo real ou para sempre em uma realidade virtual em que todos os seus desejos são realizados?",
    "Ficar sozinho para o resto da vida ou estar sempre rodeado de gente insuportável?",
    "Ter os poderes do Homem Aranha ou do Super Homem?",
    "Ser um vampiro ou zumbi?",
    "Estar com a roupa sempre dois tamanhos maiores ou um tamanho menor?",
    "Encontrar amor verdadeiro ou uma mala com 5 milhões de dólares?",
    "Que o seu dedo nunca funcione para usar uma tela touch ou para usar o teclado e o mouse do computador?",
    "Ter poderes de fogo ou de água?",
    "Ser um pintor incrível ou um gênio da matemática?",
    "Não poder se depilar nunca ou que nenhum desodorante funcione para você?",
    "Nunca mais precisar trabalhar ou nunca mais poder dormir?",
    "Nunca mais poder tomar refrigerante ou só poder tomar refrigerante para o resto da vida?",
    "Ter os olhos sempre secos ou nariz o tempo todo escorrendo?",
    "Ter uma casa 100% automática ou um carro que se dirige sozinho?",
    "udar-se para a lua ou para marte?",
    "Ter um dragão ou ser um dragão?",
    "Nunca mais ficar no trânsito ou nunca mais ficar resfriado?",
    "Ser um centauro ou uma sereia?",
    "Sair sempre lindo em selfies ou tirar sempre fotos maravilhosas de qualquer coisa?",
    "Comer macarrão cru ou arroz cru?",
    "Ser uma árvore ou morar em uma árvore para o resto de sua vida?",
    "Encontrar um dinossauro ou um extraterrestre?",
    "Conhecer um extraterrestre ou viajar para outro planeta?",
    "Ter só um mamilo ou dois umbigos?",
    "Usar colírio feito de vinagre ou papel higiênico feito de areia?",
    "Ter um tapete voador ou poder dirigir embaixo d'água?",
    "Não ter as duas sobrancelhas ou ter só uma sobrancelha?",
    "Que os cachorros sempre te ataquem quando te olham ou que os pássaro sempre te ataquem quando te olham?",
    "Poder falar todos os idiomas do mundo ou conseguir conversar com os animais?",
    "Saber o histórico de todos os objetos que você toca ou conversar com animais?",
    "Poder realizar 3 desejos ou ter apenas superpoder?",
    "Lutar com 100 cavalos do tamanho de uma pomba ou com 1 pomba do tamanho de um cavalo?",
    "Viver um dia normal da sua rotina pelado ou dormir por 1 ano inteiro?",
    "Publicar um livro ou ter um filme sobre a sua vida?",
    "Ter a voz do Mickey ou do Pato Donald?",
    "Ser super rápido ou super forte?",
    "Ser o castelo de areia ou a onda?",
    "Ser a pessoa que recebe maus conselhos ou a pessoa que dá má conselhos?",
    "Ser um unicórnio ou um dragão?",
    "Nunca mais comer doce ou nunca mais tomar refrigerante?",
    "Ter um super talento e não ser reconhecido ou ser famoso por alguma coisa muito idiota?",
    "Tomar sempre a sua comida em uma mamadeira ou usar fraldas todos os dias sem que ninguém saiba?",
    "Nunca mais poder sentar ou não poder ficar em pé?",
    "Ter uma super audição ou um olfato super apurado?",
    "Ter visão de raio-x ou ser capaz de voar?",
    "Namorar com seu(a) último(a) ex ou namorar com seu(a) melhor amigo(a)?",
    "Ver seu pior inimigo todo dia ou nunca mais poder ver seu melhor amigo?",
    "Que o mundo fosse dominado por robôs malignos ou por extraterrestres?",
    "Sempre estar 1 hora atrasado ou sempre 1 hora adiantado para seus compromissos?",
    "Nunca mais conseguir abrir uma porta fechada ou fechar uma porta aberta?",
    "Conseguir sentir o gosto ou sentir o cheiro das cores?",
    "Ser o(a) melhor dançarino(a) ou cantor(a) do mundo?",
    "Ter comida de graça para sempre ou passagens de avião gratuitas para qualquer lugar?",
    "Ter que usar sempre uma escova de dentes usada ou nunca poder comprar roupas novas?",
    "Nunca mais poder usar um garfo ou nunca mais poder usar uma faca?",
    "Ter o pescoço de uma girafa ou as pernas de um flamingo?",
    "Ter uma tatuagem vergonhosa no braço ou um corte de cabelo ridículo?",
    "Saber com quem você vai se casar ou como será o futuro da sua vida resumida?",
    "Saber todas todos os instrumentos musicais ou saber falar todas as línguas?",
    "Ter que usar suas camisetas sempre ao contrário ou sapatos de pares diferentes?",
    "Nunca mais poder sair de casa durante o dia ou durante a noite?",
    "Nunca mais poder comer comida doce ou salgada?",
    "Ter o seu histórico do WhatsApp lido em rede nacional ou nunca mais entrar em nenhuma rede social?"
]

function getRandom(max) {
    return Math.floor(Math.random() * max + 1)
}

function getPergunta(){
    n = getRandom(perguntas.length);
    console.log(perguntas[n]);
}

let resposta;

function start(){
    console.log("O que você prefere ?\n");

    getPergunta()

    console.log("\n")

    resposta = readline.question("Proxima ?\n\n");

    if(resposta == "s"){
        console.log("------------------------------------");
        start();
    }else{
        return;
    }

}

start();