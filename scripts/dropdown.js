$(document).ready(function () {
  $('.articleContent').each(function () {
    $('.body').each(function () {
      //Inicio do script para o componente
      var boxeAbertura = $('.container_fica_a_dica');
      boxeAbertura.on('click', function () {
        var randomId = Math.floor(Math.random() * 100000) + 1;

        if ($(this).find('input').attr('id').length == "0") {
          $(this).find('input').attr('id', randomId);
        }

        if ($(this).find('label').attr('for').length == "0") {
          $(this).find('label').attr('for', randomId);
        }
      });
      //Fim do script para o componente
      //Inicio do script para o componente
      var ficaAdicaTeoria = $('.container_fica_a_dica_teoria');
      ficaAdicaTeoria.on('click', function () {
        var randomId = Math.floor(Math.random() * 100000) + 1;

        if ($(this).find('input').attr('id').length == "0") {
          $(this).find('input').attr('id', randomId);
        }

        if ($(this).find('label').attr('for').length == "0") {
          $(this).find('label').attr('for', randomId);
        }
      });
      //Fim do script para o componente
      //Inicio do script para o componente
      var repertorioCulturalTeoria = $('.container_repertorio_cultural_teoria');
      repertorioCulturalTeoria.on('click', function () {
        var randomId = Math.floor(Math.random() * 100000) + 1;

        if ($(this).find('input').attr('id').length == "0") {
          $(this).find('input').attr('id', randomId);
        }

        if ($(this).find('label').attr('for').length == "0") {
          $(this).find('label').attr('for', randomId);
        }
      });
      //Fim do script para o componente
      //Inicio do script para o componente
      var boxeAbertura = $('.container_repertorio_cultural');
      boxeAbertura.on('click', function () {
        var randomId = Math.floor(Math.random() * 100000) + 1;

        if ($(this).find('input').attr('id').length == "0") {
          $(this).find('input').attr('id', randomId);
        }

        if ($(this).find('label').attr('for').length == "0") {
          $(this).find('label').attr('for', randomId);
        }
      });
      //Fim do script para o componente

      //Inicio do script para o componente
      var cultureBox = $('.container_culture_box');
      cultureBox.on('click', function () {
        var randomId = Math.floor(Math.random() * 100000) + 1;

        if ($(this).find('input').attr('id').length == "0") {
          $(this).find('input').attr('id', randomId);
        }

        if ($(this).find('label').attr('for').length == "0") {
          $(this).find('label').attr('for', randomId);
        }
      });
      //Fim do script para o componente

      //Inicio do script para o componente
      var fastFacts = $('.container_fast_facts');
      fastFacts.on('click', function () {
        var randomId = Math.floor(Math.random() * 100000) + 1;

        if ($(this).find('input').attr('id').length == "0") {
          $(this).find('input').attr('id', randomId);
        }

        if ($(this).find('label').attr('for').length == "0") {
          $(this).find('label').attr('for', randomId);
        }
      });
      //Fim do script para o componente

      //Inicio do script para o componente
      var takeAtip = $('.container_take_a_tip');
      takeAtip.on('click', function () {
        var randomId = Math.floor(Math.random() * 100000) + 1;

        if ($(this).find('input').attr('id').length == "0") {
          $(this).find('input').attr('id', randomId);
        }

        if ($(this).find('label').attr('for').length == "0") {
          $(this).find('label').attr('for', randomId);
        }
      });
      //Fim do script para o componente

      //Inicio do script para o componente
      var saibaMais = $('.container_saiba_mais');
      saibaMais.on('click', function () {
        var randomId = Math.floor(Math.random() * 100000) + 1;

        if ($(this).find('input').attr('id').length == "0") {
          $(this).find('input').attr('id', randomId);
        }

        if ($(this).find('label').attr('for').length == "0") {
          $(this).find('label').attr('for', randomId);
        }
      });
      //Fim do script para o componente

      //Inicio do script para o componente
      var saibaMaisexercicios = $('.container_saiba_mais_exercicios');
      saibaMaisexercicios.on('click', function () {
        var randomId = Math.floor(Math.random() * 100000) + 1;

        if ($(this).find('input').attr('id').length == "0") {
          $(this).find('input').attr('id', randomId);
        }

        if ($(this).find('label').attr('for').length == "0") {
          $(this).find('label').attr('for', randomId);
        }
      });
      //Fim do script para o componente

      //Inicio do script para o componente
      var fiqueLigado = $('.css_06_boxe_fique_ligado');
      fiqueLigado.on('click', function () {
        var randomId = Math.floor(Math.random() * 100000) + 1;

        if ($(this).find('input').attr('id').length == "0") {
          $(this).find('input').attr('id', randomId);
        }

        if ($(this).find('label').attr('for').length == "0") {
          $(this).find('label').attr('for', randomId);
        }
      });
      //Fim do script para o componente
      //Inicio do script para o componente
      var fiqueLigadoCont = $('.css_06_boxe_fique_ligado');
      fiqueLigadoCont.on('click', function () {
        var randomId = Math.floor(Math.random() * 100000) + 1;

        if ($(this).find('input').attr('id').length == "0") {
          $(this).find('input').attr('id', randomId);
        }

        if ($(this).find('label').attr('for').length == "0") {
          $(this).find('label').attr('for', randomId);
        }
      });
      //Fim do script para o componente
      //Inicio do script para o componente
      var emArte = $('.css_06_boxe_em_arte');
      emArte.on('click', function () {
        var randomId = Math.floor(Math.random() * 100000) + 1;

        if ($(this).find('input').attr('id').length == "0") {
          $(this).find('input').attr('id', randomId);
        }

        if ($(this).find('label').attr('for').length == "0") {
          $(this).find('label').attr('for', randomId);
        }
      });
      //Fim do script para o componente
      var radioExercicio = $('.container_questao_checkbox');

      radioExercicio.on('click', function () {
        var randomId = Math.floor(Math.random() * 1000000) + 1;

        if ($(this).find('input').attr('name').length == "0") {
          $(this).find('input').attr('name', randomId);
        }


      });
      //Inicio do script para o componente
      var emBiologia = $('.css_06_boxe_em_biologia');
      emBiologia.on('click', function () {
        var randomId = Math.floor(Math.random() * 100000) + 1;

        if ($(this).find('input').attr('id').length == "0") {
          $(this).find('input').attr('id', randomId);
        }

        if ($(this).find('label').attr('for').length == "0") {
          $(this).find('label').attr('for', randomId);
        }
      });
      //Fim do script para o componente
      //Inicio do script para o componente
      var emFilosofia = $('.css_06_boxe_em_filosofia');
      emFilosofia.on('click', function () {
        var randomId = Math.floor(Math.random() * 100000) + 1;

        if ($(this).find('input').attr('id').length == "0") {
          $(this).find('input').attr('id', randomId);
        }

        if ($(this).find('label').attr('for').length == "0") {
          $(this).find('label').attr('for', randomId);
        }
      });
      //Fim do script para o componente
      //Inicio do script para o componente
      var emFisica = $('.css_06_boxe_em_fisica');
      emFisica.on('click', function () {
        var randomId = Math.floor(Math.random() * 100000) + 1;

        if ($(this).find('input').attr('id').length == "0") {
          $(this).find('input').attr('id', randomId);
        }

        if ($(this).find('label').attr('for').length == "0") {
          $(this).find('label').attr('for', randomId);
        }
      });
      //Fim do script para o componente
      //Inicio do script para o componente
      var emGeografia = $('.css_06_boxe_em_geografia');
      emGeografia.on('click', function () {
        var randomId = Math.floor(Math.random() * 100000) + 1;

        if ($(this).find('input').attr('id').length == "0") {
          $(this).find('input').attr('id', randomId);
        }

        if ($(this).find('label').attr('for').length == "0") {
          $(this).find('label').attr('for', randomId);
        }
      });
      //Fim do script para o componente
      //Inicio do script para o componente
      var emHistoria = $('.css_06_boxe_em_historia');
      emHistoria.on('click', function () {
        var randomId = Math.floor(Math.random() * 100000) + 1;

        if ($(this).find('input').attr('id').length == "0") {
          $(this).find('input').attr('id', randomId);
        }

        if ($(this).find('label').attr('for').length == "0") {
          $(this).find('label').attr('for', randomId);
        }
      });
      //Fim do script para o componente
      //Inicio do script para o componente
      var emLinguaInglesa = $('.css_06_boxe_em_lingua_inglesa');
      emLinguaInglesa.on('click', function () {
        var randomId = Math.floor(Math.random() * 100000) + 1;

        if ($(this).find('input').attr('id').length == "0") {
          $(this).find('input').attr('id', randomId);
        }

        if ($(this).find('label').attr('for').length == "0") {
          $(this).find('label').attr('for', randomId);
        }
      });
      //Fim do script para o componente
      //Inicio do script para o componente
      var emLinguaPortuguesa = $('.css_06_boxe_em_lingua_portuguesa');
      emLinguaPortuguesa.on('click', function () {
        var randomId = Math.floor(Math.random() * 100000) + 1;

        if ($(this).find('input').attr('id').length == "0") {
          $(this).find('input').attr('id', randomId);
        }

        if ($(this).find('label').attr('for').length == "0") {
          $(this).find('label').attr('for', randomId);
        }
      });
      //Fim do script para o componente
      //Inicio do script para o componente
      var emMatematica = $('.css_06_boxe_em_matematica');
      emMatematica.on('click', function () {
        var randomId = Math.floor(Math.random() * 100000) + 1;

        if ($(this).find('input').attr('id').length == "0") {
          $(this).find('input').attr('id', randomId);
        }

        if ($(this).find('label').attr('for').length == "0") {
          $(this).find('label').attr('for', randomId);
        }
      });
      //Fim do script para o componente
      //Inicio do script para o componente
      var emProducaoDeTexto = $('.css_06_boxe_em_producao_de_texto');
      emProducaoDeTexto.on('click', function () {
        var randomId = Math.floor(Math.random() * 100000) + 1;

        if ($(this).find('input').attr('id').length == "0") {
          $(this).find('input').attr('id', randomId);
        }

        if ($(this).find('label').attr('for').length == "0") {
          $(this).find('label').attr('for', randomId);
        }
      });
      //Fim do script para o componente
      //Inicio do script para o componente
      var emQuimica = $('.css_06_boxe_em_quimica');
      emQuimica.on('click', function () {
        var randomId = Math.floor(Math.random() * 100000) + 1;

        if ($(this).find('input').attr('id').length == "0") {
          $(this).find('input').attr('id', randomId);
        }

        if ($(this).find('label').attr('for').length == "0") {
          $(this).find('label').attr('for', randomId);
        }
      });
      //Fim do script para o componente
      //Inicio do script para o componente
      var watchOut = $('.css_06_boxe_watch_out');
      watchOut.on('click', function () {
        var randomId = Math.floor(Math.random() * 100000) + 1;

        if ($(this).find('input').attr('id').length == "0") {
          $(this).find('input').attr('id', randomId);
        }

        if ($(this).find('label').attr('for').length == "0") {
          $(this).find('label').attr('for', randomId);
        }
      });
      //Fim do script para o componente
      //Inicio do script para o componente
      var watchOutCont = $('.css_06_boxe_watch_out');
      watchOutCont.on('click', function () {
        var randomId = Math.floor(Math.random() * 100000) + 1;

        if ($(this).find('input').attr('id').length == "0") {
          $(this).find('input').attr('id', randomId);
        }

        if ($(this).find('label').attr('for').length == "0") {
          $(this).find('label').attr('for', randomId);
        }
      });
      //Fim do script para o componente
      //Inicio do script para o componente
      var emSociologia = $('.css_06_boxe_em_sociologia');
      emSociologia.on('click', function () {
        var randomId = Math.floor(Math.random() * 100000) + 1;

        if ($(this).find('input').attr('id').length == "0") {
          $(this).find('input').attr('id', randomId);
        }

        if ($(this).find('label').attr('for').length == "0") {
          $(this).find('label').attr('for', randomId);
        }
      });
      //Fim do script para o componente
    });
  });
});
