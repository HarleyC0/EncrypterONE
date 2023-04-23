const encryptButton = document.getElementById("encrypter__buttons_encrypt");
const decryptButton = document.getElementById("encrypter__buttons_decrypt");
const input = document.getElementById("input");
const solution__noMessage = document.getElementById("solution__noMessage");
const solution__message = document.getElementById("solution__message");
const messageSolve = document.getElementById("messageSolve");
const titleSolution = document.getElementById("titleSolution");
const encrypter__title = document.getElementById("encrypter__title");

let lectura = "";
let respuesta = [];
let respuestaString = "";

encryptButton.addEventListener("click", () => {
    lectura = input.value;

    if (lectura !== "") {
        solution__noMessage.style.display = "none";
        encrypter__title.style.display = "none";

        respuesta = Array.from(lectura);

        for (let i = 0; i < lectura.length; i++) {
            switch (respuesta[i]) {
                case "e":
                    respuesta[i] = "enter";
                    break;
                case "i":
                    respuesta[i] = "imes";
                    break;
                case "a":
                    respuesta[i] = "ai";
                    break;
                case "o":
                    respuesta[i] = "ober";
                    break;
                case "u":
                    respuesta[i] = "ufat";
                    break;
                default:
                    respuesta[i] = respuesta[i];
                    break;
            }
        }

        respuestaString = respuesta.join("");
        messageSolve.innerText = respuestaString;
        titleSolution.innerText = "Encrypt Message:";
        solution__message.style.display = "flex";
    } else {
        solution__message.style.display = "none";
        solution__noMessage.style.display = "block";
        encrypter__title.style.display = "block";
        messageSolve.innerText = null;
        titleSolution.innerText = null;
    }
});

decryptButton.addEventListener("click", () => {
    lectura = input.value;

    if (lectura !== "") {
        solution__noMessage.style.display = "none";
        encrypter__title.style.display = "none";

        respuestaString = lectura.replace(
            /enter|imes|ai|ober|ufat/g,
            function (match) {
                switch (match) {
                    case "enter":
                        return "e";
                    case "imes":
                        return "i";
                    case "ai":
                        return "a";
                    case "ober":
                        return "o";
                    case "ufat":
                        return "u";
                    default:
                }
            }
        );

        messageSolve.innerText = respuestaString;
        titleSolution.innerText = "Decrypt Message:";
        solution__message.style.display = "flex";
    } else {
        solution__message.style.display = "none";
        solution__noMessage.style.display = "block";
        encrypter__title.style.display = "block";
        messageSolve.innerText = null;
        titleSolution.innerText = null;
    }
});
