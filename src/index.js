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
/*
const btnLimpiar= document.getElementById("limpiar");
btnLimpiar.addEventListener("click", () => {
  const textoInicial= document.getElementById("textoACifrar");
  textoInicial.value="";
  const offset= document.getElementById("offset");
  offset.value="";
  textareaFinal.value="";
});
*/
const btnErase= document.getElementById("limpiar");
btnErase.addEventListener("click", () => {
    document.getElementById("formulario").reset();
});
/*
const btnVolver= document.getElementById("volver");
btnVolver.addEventListener("click", ()=> {
  const textoInicial= document.getElementById("textoACifrar");
  textoInicial.value="";
  const offset= document.getElementById("offset");
  offset.value="";
  textareaFinal.value="";
  document.getElementById("section2").style.display='none';
  document.getElementById("section1").style.display='block';
});
*/
const btnVolver= document.getElementById("volver");
btnVolver.addEventListener("click", () => {
    window.location.href = 'index.html';
});
