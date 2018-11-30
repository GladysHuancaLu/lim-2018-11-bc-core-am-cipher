const comenzarResponse= document.getElementById("comenzar");
const btnCifrar= document.getElementById("cifrar");
const btnDescifrar= document.getElementById("descifrar");

btnCifrar.addEventListener("click" , () => {
  const textoInicial= document.getElementById("textoACifrar").value;
  let offset= parseInt(document.getElementById("offset").value);
  let resultado= window.cipher.encode(offset, textoInicial);
  let textareaFinal= document.getElementById("AquiTextoCifrado");
  textareaFinal.value = resultado;
});

btnDescifrar.addEventListener("click" , () => {
  const textoInicial= document.getElementById("textoACifrar").value;
  let offset= parseInt(document.getElementById("offset").value);
  let resultado= window.cipher.decode(offset, textoInicial);
  let textareaFinal= document.getElementById("AquiTextoCifrado");
  textareaFinal.value = resultado;
});

comenzarResponse.addEventListener("click", () =>{
     document.getElementById("section2").style.display='block';
     document.getElementById("section1").style.display='none';
});

const btnLimpiar= document.getElementById("limpiar");
btnLimpiar.addEventListener("click", () => {
  const textoInicial= document.getElementById("textoACifrar").value="";
  let offset= document.getElementById("offset").value="";
  let textareaFinal= document.getElementById("AquiTextoCifrado").value="";
})

const btnVolver= document.getElementById("volver");
btnVolver.addEventListener("click", ()=> {
  const textoInicial= document.getElementById("textoACifrar").value="";
  let offset= document.getElementById("offset").value="";
  let textareaFinal= document.getElementById("AquiTextoCifrado").value="";
  document.getElementById("section2").style.display='none';
  document.getElementById("section1").style.display='block';
})
