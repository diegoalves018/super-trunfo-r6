// carta verso
var carta0 = {
    nome: "",
    img:
      "https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/4080604233881c0f38054e2655fe4461/large.jpg",
    atributos: {
      Ataque: "",
      Agilidade: "",
      Gadget: "",
      Saúde: ""
    }
  };
  
  var carta1 = {
    nome: "Ash",
    atributos: { Ataque: 9, Agilidade: 10, Gadget: 8, Saúde: 100 },
    img:
      "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/QOEBDfqjtUxVBc31l8L9f/ae4d2c218c71e8916c234c4aa28b91b8/r6-operators-list-ash_317253.png"
  };

  var carta2 = {
    nome: "Ela",
    atributos: { Ataque: 8, Agilidade: 10, Gadget: 8, Saúde: 100 },
    img:
      "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3cpkHAvjm3RLhEoTqs090m/35a7595eb2f2431213656d66da8a9af8/R6-operator-ela.png"
  };

  var carta3 = {
    nome: "Nomad",
    atributos: { Ataque: 8, Agilidade: 9, Gadget: 9, Saúde: 110 },
    img:
      "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3VHhiyMOUkBOW1u1Zh5eGH/32b7a527bad166279973cf4ae79089dd/r6-operators-list-nomad.png"
  };

  var carta4 = {
    nome: "Maestro",
    atributos: { Ataque: 8, Agilidade: 7, Gadget: 9, Saúde: 125 },
    img:
      "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5DSFt6OEgGRcIOjC8YmdEV/e858ba7e2b695d4d792b84f2fcd95c3a/R6-operator-maestro.png"
  };
  var carta5 = {
    nome: "Hibana",
    atributos: { Ataque: 8, Agilidade: 10, Gadget: 8, Saúde: 100 },
    img:
      "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5qYxU2qr7IeRDycHrcil16/5e72cbd649ea0a2bd9276a1ce2a5dead/R6-operator-hibana-elite.png"
  };
  var carta6 = {
    nome: "Jäger",
    atributos: { Ataque: 9, Agilidade: 8, Gadget: 9, Saúde: 110 },
    img:
      "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4wTCCby4i1HLQr6AH0zGhl/a9eae6e4ffe2d833f191b21fe6c431a0/R6-operator-jager-elite.png"
  };
  var carta7 = {
    nome: "Dokkaebi",
    atributos: { Ataque: 8, Agilidade: 8, Gadget: 7, Saúde: 110 },
    img:
      "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2s5BCj0po76sK50EyDeNH5/63779ec1228021893847b361865956d1/R6-operator-dokkaebi.png"
  };
  var carta8 = {
    nome: "Castle",
    atributos: { Ataque: 7, Agilidade: 8, Gadget: 8, Saúde: 110 },
    img:
      "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/569euf91mHD0ZceUnO5tVl/d2c58485cf44e51c130373fe8007f4d0/R6-operator-castle.png"
  };
  
  var carta9 = {
    nome: "Thermite",
    atributos: { Ataque: 8, Agilidade: 8, Gadget: 9, Saúde: 110 },
    img:
      "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2ILhbxn12rNUwM42Mj75BQ/d9558dfbb8916d73b8e843882cd2f98f/R6-operator-thermite-elite.png"
  };
  
  var carta10 = {
    nome: "Valkyrie",
    atributos: { Ataque: 7, Agilidade: 9, Gadget: 9, Saúde: 110 },
    img:
      "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1v0yVqKd0KJQdCA3qjEwjV/dbad934cc218b68d8aa25ce0c93dff30/R6-operator-valkyrie-elite.png"
  };
  
  var carta11 = {
    nome: "Jackal",
    atributos: { Ataque: 8, Agilidade: 8, Gadget: 8, Saúde: 110 },
    img:
      "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2YoFmkuQL4r8odEWB7K60w/b5fd30cf9c7f407753bd921dfe6a1d28/R6-operator-jackal.png"
  };
  
  var carta12 = {
    nome: "Mute",
    atributos: { Ataque: 7, Agilidade: 7, Gadget: 8, Saúde: 110 },
    img:
      "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6y0K3PtPwhW62U8fBODcXB/ecc359d6f4c8987aa4c8dfa1c3fcb8be/R6-operator-mute-elite.png"
  };
  
  var carta13 = {
    nome: "Ace",
    atributos: { Ataque: 9, Agilidade: 8, Gadget: 9, Saúde: 110 },
    img:
      "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5snW47tH4a5VuPhidr61sm/4bee3d218c40a6aeeedb97afbcea82cb/r6s-operator-list-ace.png"
  };
  
  var carta14 = {
    nome: "Thunderbird",
    atributos: { Ataque: 7, Agilidade: 8, Gadget: 10, Saúde: 110 },
    img:
      "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3gadEIZqtSfsHstfPMe3bz/424c7e4c21276e99f41a8c75478aa5e5/r6s-operators-list-thunderbird.png"
  };
  
  var carta15 = {
    nome: "Buck",
    atributos: { Ataque: 9, Agilidade: 8, Gadget: 8, Saúde: 110 },
    img:
      "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1G1Bt1APEBlRWFpfGvK6vA/d3fd78e9da98a9100aab5ca2bf788295/r6s-operator-buck-elite.png"
  };
  
  var carta16 = {
    nome: "Kaid",
    atributos: { Ataque: 7, Agilidade: 7, Gadget: 9, Saúde: 125 },
    img:
      "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4WdfMUlABk6Pr9FjV3kV4x/42ffacc4a2cd75ff9539dcb00e1e28ee/R6-operator-kaid.png"
  };
  
  var carta17 = {
    nome: "Zofia",
    atributos: { Ataque: 8, Agilidade: 8, Gadget: 9, Saúde: 110 },
    img:
      "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7ycEV9v7ZTD58p8P5S8GM2/b6f27fb11988306ac82c2de5ffb07798/r6s-operator-zofia-elite.png"
  };
  
  var carta18 = {
    nome: "Rook",
    atributos: { Ataque: 7, Agilidade: 7, Gadget: 8, Saúde: 145 },
    img:
      "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4WKXxM30CuFX6bq9VJjFSG/2df89c4f023e44a74b242a70585409d2/R6-operator-rook-elite.png"
  };
  
  var carta19 = {
    nome: "Twitch",
    atributos: { Ataque: 9, Agilidade: 8, Gadget: 8, Saúde: 110 },
    img:
      "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/58ahgDNd1zYs4bAeq4merH/0db477d5a093fe034ad198a23ed7cfe7/R6-operator-twitch-elite.png"
  };
  
  var carta20 = {
    nome: "Mozzie",
    atributos: { Ataque: 8, Agilidade: 9, Gadget: 8, Saúde: 110 },
    img:
      "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/76lOVtLHOIUPbSLnmN2Gdy/0fc9f0815ee770d77c64f5b6fa499177/r6s-operator-mozzie-elite.png"
  };
  
  var carta21 = {
    nome: "Finka",
    atributos: { Ataque: 10, Agilidade: 9, Gadget: 8, Saúde: 130 },
    img:
      "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1ihKzLryOLc5JNkejAdUh2/1b7a9f866afdc07b86a604a681f23b1b/R6-operator-finka.png"
  };
  
  var carta22 = {
    nome: "Pulse",
    atributos: { Ataque: 8, Agilidade: 8, Gadget: 9, Saúde: 110 },
    img:
      "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6kpaeujVzv0DhxXm9IXUyC/c70ad171a4629fbe91231e1c1062b7bf/R6-operator-pulse-elite.png"
  };
  
  var carta23 = {
    nome: "Iana",
    atributos: { Ataque: 8, Agilidade: 9, Gadget: 8, Saúde: 110 },
    img:
      "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6Fiy7YExswMn1Cf13GUU9t/7bb697bf32c0d79c2852b354e3045fff/r6s-operator-iana.png"
  };
  
  var carta24 = {
    nome: "Clash",
    atributos: { Ataque: 7, Agilidade: 7, Gadget: 9, Saúde: 125 },
    img:
      "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/snhm8UctuxdKTEcvnWi2K/17e5c888c0407d74a658eefbf91e60b6/R6-operator-clash.png"
  };

  var carta25 = {
    nome: "Montagne",
    atributos: { Ataque: 8, Agilidade: 7, Gadget: 10, Saúde: 125 },
    img:
      "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1hxlGxmToB93urkgbIzUvW/fa894cd6ab38358284a3a1858cabbeee/r6-operators-list-montagne.png"
  };

  var carta26 = {
    nome: "Osa",
    atributos: { Ataque: 8, Agilidade: 8, Gadget: 8, Saúde: 125 },
    img:
      "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3Dg95rvyhPtw588r60vIPM/75e609068a0b205cc4dbc7bf3e517f51/r6s-operators-list-osa.png"
  };

  var carta27 = {
    nome: "Deimos",
    atributos: { Ataque: 9, Agilidade: 8, Gadget: 9, Saúde: 110 },
    img:
      "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2TV52rbjzuWtMGezWio1ox/2ec949f545995fc79fb3dc393a650992/r6s-operators-list-deimos.png"
  };

  var carta28 = {
    nome: "Kali",
    atributos: { Ataque: 9, Agilidade: 8, Gadget: 8, Saúde: 110 },
    img:
      "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/41NACeIbkdnIWgnwq0HzD4/9713f8e58b9a8c253b7507b59169bb3c/r6-operators-list-kali_358317.png"
  };

  var carta29 = {
    nome: "Brava",
    atributos: { Ataque: 8, Agilidade: 8, Gadget: 9, Saúde: 100 },
    img:
      "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7piw6czbaAsv6NnYXtJZay/02683e035ab9481bbe8cbf669113c84d/r6s-operators-list-brava.png"
  };

  var carta30 = {
    nome: "Zero",
    atributos: { Ataque: 8, Agilidade: 8, Gadget: 9, Saúde: 100 },
    img:
      "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/24jDQIfDdVMLX5K54pKNe5/58dec3b1e7d32a637bc76560e0cf0385/r6s-operator-list-zero.png"
  };

  var carta31 = {
    nome: "Grim",
    atributos: { Ataque: 8, Agilidade: 8, Gadget: 9, Saúde: 100 },
    img:
      "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7fwxcTrdNLQbXkfBJglLaN/38d901042d7debc709c266a46f856d7e/r6s-operators-list-grim.png"
  };

  var carta32 = {
    nome: "Azami",
    atributos: { Ataque: 8, Agilidade: 9, Gadget: 9, Saúde: 110 },
    img:
      "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5M7OGhXfAf5Q0Cdo1YJkRE/2e4c141357cf97d54c6840ee38f6bf76/r6s-operators-list-azami.png"
  };

  var carta33 = {
    nome: "Caveira",
    atributos: { Ataque: 8, Agilidade: 9, Gadget: 8, Saúde: 100 },
    img:
      "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4RZ2Vwk7HozKMCtS5gFMp7/e1b930e3c80590a316939d9df0d88660/r6-operators-list-caveira.png"
  };

  var carta34 = {
    nome: "Fenrir",
    atributos: { Ataque: 8, Agilidade: 8, Gadget: 8, Saúde: 110 },
    img:
      "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5kQRPxRMPTHlnvyo20ux8A/c2236dceb523970d9e5e19e5b58feba3/r6s-operator-fenrir-elite.png"
  };

  var carta35 = {
    nome: "Gridloock",
    atributos: { Ataque: 8, Agilidade: 7, Gadget: 8, Saúde: 125 },
    img:
      "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5kQRPxRMPTHlnvyo20ux8A/c2236dceb523970d9e5e19e5b58feba3/r6s-operator-fenrir-elite.png"
  };

  var carta36 = {
    nome: "Lesion",
    atributos: { Ataque: 8, Agilidade: 8, Gadget: 9, Saúde: 110 },
    img:
      "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5kQRPxRMPTHlnvyo20ux8A/c2236dceb523970d9e5e19e5b58feba3/r6s-operator-fenrir-elite.png"
  };


  
  var baralho = [
    carta1,
    carta2,
    carta3,
    carta4,
    carta5,
    carta6,
    carta7,
    carta8,
    carta9,
    carta10,
    carta11,
    carta12,
    carta13,
    carta14,
    carta15,
    carta16,
    carta17,
    carta18,
    carta19,
    carta20,
    carta21,
    carta22,
    carta23,
    carta24,
    carta25,
    carta26,
    carta27,
    carta28,
    carta29,
    carta30,
    carta31,
    carta32,
    carta33,
    carta34,
    carta35,
    carta36,
  ];

  var baralhoJogador = [];
  var baralhoMaquina = [];
  var cartaMaquina;
  var cartaJogador;
  var ganhador;
  var partidas = 0;
  var placar = [0, 0, 0];

  
  //-------------------------------------------------------------------------
  // Função iniciar jogo
  function iniciarJogo() {
    resetaTela();
  
    divideCartas();
    sorteiaCartas();
  
    exibeCarta(baralhoJogador[cartaJogador], "left");
    exibeCarta(carta0, "right");
  
    // Escolhendo o atributo de batalha
    document.getElementById("info-center").innerHTML =
      "Escolha o Atributo<br><br> do Combate";
  
    // muda o contexto do botão para a opção duelar
    document.getElementById("btnJogar").disabled = true;
    document.getElementById("btnJogar").innerHTML = "Batalhar";

    document.getElementById("partidas").innerHTML = "Partidas: 0";
    document.getElementById("cartas-jogador").innerHTML = `Cartas: ${baralho.length /2}`;
    document.getElementById("cartas-maquina").innerHTML = `Cartas: ${baralho.length /2}`;
  }
  
  //-------------------------------------------------------------------------
  function continuarDuelando() {
    resetaTela();
    sorteiaCartas();
  
    exibeCarta(baralhoJogador[cartaJogador], "left");
    exibeCarta(carta0, "right");
  
    // Escolhendo o atributo de batalha
    document.getElementById("info-center").innerHTML =
      "Escolha o Atributo<br><br> do Combate";
  
    // muda o contexto do botão para a opção duelar
    document.getElementById("btnJogar").disabled = true;
    document.getElementById("btnJogar").innerHTML = "Batalhar";
  }
  
  //-------------------------------------------------------------------------
  function divideCartas() {
    var baralhoTemp = baralho.slice();
    var carta;
  
    // Limpa os baralhos
    baralhoJogador = [];
    baralhoMaquina = [];
  
    while (baralhoTemp.length > 0) {
      // Adiciona uma carta para o Jogador
      carta = parseInt(Math.random() * baralhoTemp.length);
      baralhoJogador.push(baralhoTemp[carta]);
      baralhoTemp.splice(carta, 1);
  
      // Adiciona uma carta para a maquina
      carta = parseInt(Math.random() * baralhoTemp.length);
      baralhoMaquina.push(baralhoTemp[carta]);
      baralhoTemp.splice(carta, 1);
    }
  }
  
  //-------------------------------------------------------------------------
  function sorteiaCartas() {
    cartaJogador = parseInt(Math.random() * baralhoJogador.length);
    cartaMaquina = parseInt(Math.random() * baralhoMaquina.length);
  }
  
  //-------------------------------------------------------------------------
  function resetaTela() {
    // resetanto o painel da esquerda
    document.getElementById("left-label").style.color = "rgba(0, 0, 0, 0)";
    document.getElementById("card-left").style.backgroundImage = "";
    document.getElementById("attribs-left").innerHTML = "";
  
    // resetanto o painel central
    document.getElementById("info-center").innerHTML =
      "Vamos Duelar! <br><br> Aceita o Desafio?";
  
    // resetanto o painel da dieita
    document.getElementById("right-label").style.color = "rgba(0, 0, 0, 0)";
    document.getElementById("card-right").style.backgroundImage = "";
    document.getElementById("attribs-right").innerHTML = "";
  }
  
  //-------------------------------------------------------------------------
  function exibeCarta(carta, posicao) {
    //var card = carta0;
    var label = document.getElementById(posicao + "-label");
    var divCard = document.getElementById("card-" + posicao);
    var divAttribs = document.getElementById("attribs-" + posicao);
    var attribs = "";
  
    if (posicao == "left") {
      // mostra os atributos da carta
      attribs = '<br><div class="line-info">' + carta.nome + "</div><br>";
      for (var atributo in carta.atributos) {
        attribs +=
          '<div class="line-info"><input type="radio" name="atributo"value="' +
          atributo +
          '" onchange="testaRadio()">';
        attribs += atributo + ": " + carta.atributos[atributo] + "</div>";
      }
      divAttribs.innerHTML = attribs + "<br><br>";
    }
  
    // deixa o label principal do div visivel
    label.style.color = "#dcdcdc";
  
    // mostra a carta
    divCard.style.backgroundImage = 'url("' + carta.img + '")';
  
    //exibe o painel final de informações
    document.getElementById("div-end").style.opacity = "0.8";
  }
  
  //-------------------------------------------------------------------------
  function testaRadio() {
    var radioAtributo = document.getElementsByName("atributo");
    for (var radio in radioAtributo) {
      if (radioAtributo[radio].checked) {
        document.getElementById("btnJogar").disabled = false;
        document.getElementById("btnJogar").onclick = function () {
          jogar();
        };
      }
    }
  }
  
  //-------------------------------------------------------------------------
  function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName("atributo");
    for (var radio in radioAtributo) {
      if (radioAtributo[radio].checked) {
        return radioAtributo[radio].value;
      }
    }
  }
  
  //-------------------------------------------------------------------------
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var resultado = document.getElementById("info-center");
    var radios = document.getElementsByName("atributo");
  
    if (
      baralhoJogador[cartaJogador].atributos[atributoSelecionado] >
      baralhoMaquina[cartaMaquina].atributos[atributoSelecionado]
    ) {
      computaResultado(1);
    } else if (
      baralhoJogador[cartaJogador].atributos[atributoSelecionado] <
      baralhoMaquina[cartaMaquina].atributos[atributoSelecionado]
    ) {
      computaResultado(2);
    } else {
      computaResultado(0);
    }
  
    if (baralhoJogador.length == 0 || baralhoMaquina.length == 0) {
      fimDeJogo();
    } else {
      document.getElementById("btnJogar").onclick = function () {
        continuarDuelando();
      };
    }
  }
  
  //-------------------------------------------------------------------------
  function computaResultado(resultado) {
    var painelInfo = document.getElementById("info-center");
    ganhador = resultado;
    placar[resultado] += 1;
    partidas++;
  
    exibeCarta(baralhoMaquina[cartaMaquina], "right");
    imprimeResultado();
  
    // transfere para o jogador a carta da máquina
    if (ganhador == 1) {
      baralhoJogador.push(baralhoMaquina[cartaMaquina]);
      baralhoMaquina.splice(cartaMaquina, 1);
    }
  
    // transfere para a máquina a carta do jogador
    if (ganhador == 2) {
      baralhoMaquina.push(baralhoJogador[cartaJogador]);
      baralhoJogador.splice(cartaJogador, 1);
    }
    atualizaPlacar();
  }
  
  //-------------------------------------------------------------------------
  function imprimeResultado() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var divDest;
    var text;
    var carta;
    var id = "empatou";
    var idMaquina;
  
    if (ganhador == 1) {
      id = "ganhou";
      idMaquina = "perdeu";
      mensagemResultado = "Você Ganhou!";
    } else if (ganhador == 2) {
      id = "perdeu";
      idMaquina = "ganhou";
      mensagemResultado = "Você Perdeu!";
    }
  
    // imprime os blocos de resultado sobre as cartas
    for (var local of ["attribs-left", "attribs-right"]) {
      divDest = document.getElementById(local);
      if (local == "attribs-left") {
        carta = baralhoJogador[cartaJogador];
      } else {
        carta = baralhoMaquina[cartaMaquina];
        if (ganhador != 0) {
          id = idMaquina;
        }
      }
  
      text = '<br><div class="line-info">' + carta.nome + "</div><br>";
      var inicio = '<div class="line-info" ';
      for (var linha in carta.atributos) {
        text += inicio;
        if (linha == atributoSelecionado) {
          text += 'id="' + id + '" ';
        }
        text += ">" + linha + ": " + carta.atributos[linha] + "</div>";
      }
      divDest.innerHTML = text + "<br>";
    }
  }
  
  //-------------------------------------------------------------------------
  function atualizaPlacar() {
    var painelInfo = document.getElementById("info-center");
    var labelCentral = document.getElementById("center-label");
    var labelPartidas = document.getElementById("partidas");
    var cartasJogador = document.getElementById("cartas-jogador");
    var cartasMaquina = document.getElementById("cartas-maquina");
    var mensagemResultado = "<br>Deu Empate!";
    var id = "empatou";
  
    if (ganhador == 1) {
      id = "ganhou";
      mensagemResultado = "<br>Você Ganhou!";
    } else if (ganhador == 2) {
      id = "perdeu";
      mensagemResultado = "<br>Você Perdeu!";
    }
  
    // imprime as informações do painel central
    painelInfo.innerHTML = mensagemResultado;
  
    //exibe placar
    labelCentral.style.color = "#dcdcdc";
    labelCentral.innerHTML = placar[1] + " x " + placar[2];
  
    // exibe contagem de cartas e partida
    labelPartidas.innerHTML = "Partidas: " + partidas;
    cartasJogador.innerHTML = "Cartas: " + baralhoJogador.length;
    cartasMaquina.innerHTML = "Cartas: " + baralhoMaquina.length;
  }
  
  //-------------------------------------------------------------------------
  function fimDeJogo() {
    var painelInfo = document.getElementById("info-center");
    var botao = document.getElementById("btnJogar");
    var mensagem;
  
    if (ganhador == 1) {
      mensagem = "<font color='green'>Parabéns!!!<br>Você venceu<br>o Torneio!";
    } else {
      mensagem =
        "<font color='red'>Que Pena!<br><br>Você perdeu<br><br>o Torneio!";
    }
  
    painelInfo.innerHTML = mensagem;
    botao.innerHTML = "Reiniciar Jogo";
    botao.setAttribute("onclick", "reiniciarJogo()");
  }
  
  //-------------------------------------------------------------------------
  function reiniciarJogo() {
    var painelInfo = document.getElementById("info-center");
    var botao = document.getElementById("btnJogar");
  
    partidas = 0;
    placar = [0, 0, 0];
  
    resetaTela();
    document.getElementById("center-label").style.color = "rgba(0, 0, 0, 0)";
    document.getElementById("div-end").style.opacity = "0";
    document.getElementById("partidas").innerHTML = "Partidas: 0";
    document.getElementById("cartas-jogador").innerHTML = `Cartas: ${baralho.length /2}`;
    document.getElementById("cartas-maquina").innerHTML = `Cartas: ${baralho.length /2}`;
  
    painelInfo.innerHTML = "Encare seu oponente! <br><br> Aceita o Desafio?";
  
    botao.innerHTML = "Iniciar Torneio";
    botao.onclick = function () {
      iniciarJogo();
    };
  }

  //------------------------------------------------------------------------

  