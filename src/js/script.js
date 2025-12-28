 function imcCalculator(weight, height) {
            return weight / (height * height);
        }

        function showButton(){
            document.querySelector("button[onclick='refreshPage()']").style.display = "inline-block";
                document.querySelector("button[onclick='startCalculator()']").style.display = "none";
        } // Shows the "Try Again" button and hides the "Calculate" button.
        
        function hideForm(){
            document.getElementById("imcForm").style.display="none";

        } // Hides the form after calculations are done.

        function startCalculator() {
            var peso = Number(document.getElementById("weight").value.replace(",", "."));
            var altura = Number(document.getElementById("height").value.replace(",", "."));
            showButton();
                hideForm();
            // Verifica se os valores inseridos são válidos
            if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) { 
                alert("Por favor insira valores válidos para o calculo.");
                document.getElementById("invalidValue").style.display = "block";
                document.getElementById("validValue").style.display = "none";
                
                // Toca a música de fundo para valores inválidos
                var audio2 = document.getElementById("backgroundMusic2");
                audio2.play();

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
                
            }
        }
        
        function refreshPage(){
            window.location.reload();
        } // Refreshes the page to allow a new calculation.
