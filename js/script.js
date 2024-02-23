function Sumar() {
    let num1 = document.getElementById("Numero1").value
    let num2 = document.getElementById("Numero2").value
    let sum = parseFloat(num1) + parseFloat(num2)
    document.getElementById("valor").innerHTML = sum
    document.getElementById("Numero1").value = ""
    document.getElementById("Numero2").value = ""
}

function Resta() {
    let num1 = [parseFloat(document.getElementById("numero").value)]
    document.getElementById("numero").value = ""

    if (onclick = "respuesta") {
        function respuesta() {
            let primero = num1[num1.length]
            let num2 = document.getElementById("numero").value
            let res = primero - parseFloat(num2)
            document.getElementById("numero").value = ""
            document.getElementById("valor").innerHTML = res
        }
    }
}





