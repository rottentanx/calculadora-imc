 function imcCalculator(weight, height) {
            return weight / (height * height);
        }

        function showButton(){
            document.querySelector("button[onclick='refreshPage()']").style.display = "inline-block";
                document.querySelector("button[onclick='startCalculator()']").style.display = "none";
        }

        function startCalculator() {
            var peso = Number(prompt("Por favor insira seu peso em kilogramas:").replace(",", "."));
            var altura = Number(prompt("Por favor insira sua altura em metros:").replace(",", "."));
            // Verifica se os valores inseridos são válidos
            if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) { 
                alert("Por favor insira valores válidos para o calculo.");
                document.getElementById("invalidValue").style.display = "block";
                document.getElementById("validValue").style.display = "none";
                // Toca a música de fundo para valores inválidos
                var audio2 = document.getElementById("backgroundMusic2");
                audio2.play();
                showButton();
                
            }
            // Se os valores forem válidos, calcula o IMC e exibe o resultado
            else {
                var imc = imcCalculator(peso, altura).toFixed(2);
                document.getElementById("demo").innerHTML = "Seu IMC é: " + imc;
                // Toca a música de fundo para valores válidos
                var audio = document.getElementById("backgroundMusic");
                audio.play();
                document.getElementById("invalidValue").style.display = "none";
                document.getElementById("validValue").style.display = "block";
                showButton();
            }
        }
        
        function refreshPage(){
            window.location.reload();
        }