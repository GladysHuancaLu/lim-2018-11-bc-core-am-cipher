const comenzarResponse= document.getElementById("comenzar");
const limpiarResponse= document.getElementById("limpiar");
const volverResponse= document.getElementById("volver");

btnCifrar.addEventListener("click" , () => {
  const textoInicial= document.getElementById("textoACifrar").value;
  let offset=document.getElementById("offset").value;
  let resultado= window.cipher.encode(offset, texto);
  let textareaFinal= document.getElementById("AquiTextoCifrado");
  textareaFinal.value = resultado;
});

btnDescifrar.addEventListener("click" , () => {
  const textoInicial= document.getElementById("textoACifrar").value;
  let offset=document.getElementById("offset").value;
  let resultado= window.cipher.decode(offset, texto);
  let textareaFinal= document.getElementById("AquiTextoCifrado");
  textareaFinal.value = resultado;
});

comenzarResponse.addEventListener("click", () =>{
     document.getElementById("section2").style.display='block';
     document.getElementById("section1").style.display='none';
});
