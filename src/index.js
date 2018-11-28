const comenzarResponse= document.getElementById("comenzar");
const btnCifrar= document.getElementById("cifrar");
const btnDescifrar= document.getElementById("descifrar");

btnCifrar.addEventListener("click" , () => {
  const textoInicial= document.getElementById("textoACifrar").value;
  let offset= (parseInt(document.getElementById("offset").value))%26;
  let resultado= window.cipher.encode(offset, textoInicial);
  let textareaFinal= document.getElementById("AquiTextoCifrado");
  textareaFinal.value = resultado;
});

btnDescifrar.addEventListener("click" , () => {
  const textoInicial= document.getElementById("textoACifrar").value;
  let offset= (parseInt(document.getElementById("offset").value))%26;
  let resultado= window.cipher.decode(offset, textoInicial);
  let textareaFinal= document.getElementById("AquiTextoCifrado");
  textareaFinal.value = resultado;
});

comenzarResponse.addEventListener("click", () =>{
     document.getElementById("section2").style.display='block';
     document.getElementById("section1").style.display='none';
});
