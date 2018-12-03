const comenzarResponse= document.getElementById("comenzar");
const btnCifrar= document.getElementById("cifrar");
const btnDescifrar= document.getElementById("descifrar");
const textareaFinal= document.getElementById("AquiTextoCifrado");

btnCifrar.addEventListener("click" , () => {
  const textoInicial= document.getElementById("textoACifrar").value;
  const offset= parseInt(document.getElementById("offset").value);
  let resultado= window.cipher.encode(offset, textoInicial);
  textareaFinal.value = resultado;
});

btnDescifrar.addEventListener("click" , () => {
  const textoInicial= document.getElementById("textoACifrar").value;
  const offset= parseInt(document.getElementById("offset").value);
  let resultado= window.cipher.decode(offset, textoInicial);
  textareaFinal.value = resultado;
});

comenzarResponse.addEventListener("click", () =>{
     document.getElementById("section2").style.display='block';
     document.getElementById("section1").style.display='none';
});

const btnErase= document.getElementById("limpiar");
btnErase.addEventListener("click", () => {
    document.getElementById("formulario").reset();
});

const btnVolver= document.getElementById("volver");
btnVolver.addEventListener("click", () => {
    window.location.href = 'index.html';
});
