// Botões
const calcButton = document.getElementById("calcBtn");
const refreshButton = document.getElementById("refreshBtn");

// Páginas
const validValuePage = document.getElementById("validValue");
const invalidPage = document.getElementById("invalidValue");

//////////////////////////////////////////////////////////////////////////

function imcCalculator(weight, height) {
            return weight / (height * height);
        }

        function showButton(){
            refreshButton.style.display = "inline-block";
                calcButton.style.display = "none";
        } // Mostra o botão de refresh e esconde o botão de calcular.
        

        
        function hideForm(){
            document.getElementById("imcForm").style.display="none";

        } // Esconde o formulário após o cálculo do IMC.

        calcButton.addEventListener('click', startCalculator);
        refreshButton.addEventListener('click', refreshPage);
        // Listener para os resultados dos botões.

        function startCalculator() {
            const peso = Number(document.getElementById("weight").value.replace(",", "."));
            const altura = Number(document.getElementById("height").value.replace(",", "."));
            showButton();
                hideForm();
            // Verifica se os valores inseridos são válidos
            if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) { 
                alert("Por favor insira valores válidos para o calculo.");
                invalidPage.style.display = "block";
                validValuePage.style.display = "none";
                
                // Toca a música de fundo para valores inválidos
                const audio2 = document.getElementById("backgroundMusic2");
                audio2.play();

            }
            // Se os valores forem válidos, calcula o IMC e exibe o resultado
            else {
                let imc = imcCalculator(peso, altura).toFixed(2);
                document.getElementById("demo").innerHTML = "Seu IMC é: " + imc;
                // Toca a música de fundo para valores válidos
                const audio = document.getElementById("backgroundMusic");
                audio.play();
               invalidPage.style.display = "none";
                validValuePage.style.display =" block";
                
            }
        }
        
        
        function refreshPage(){
            window.location.reload();
        } // Recarrega a página para reiniciar o cálculo do IMC.
