const cifrar = (offset, textoInicial) => {
  let textoFinal="";
  const textoMayuscula= textoInicial.toUpperCase();
  for(var i=0; i<textoMayuscula.length; i++){
    if(textoMayuscula[i]===" "){
      textoFinal+=" ";
    }
    else{
  textoFinal+= String.fromCharCode((textoMayuscula.charCodeAt(i)+65+(offset%26))%26+65);
}}
return textoFinal;
}
const descifrar = (offset, textoInicial) => {
  let textoFinal="";
  const textoMayuscula = textoInicial.toUpperCase();
  for(var i=0; i<textoMayuscula.length; i++){
    if(textoMayuscula[i]==" "){
      textoFinal+=" ";
    }
    else{
  textoFinal+= String.fromCharCode((textoMayuscula.charCodeAt(i)+65-(offset%26))%26+65);
  }
  }
return textoFinal;
}
window.cipher = {
  encode: cifrar,
  decode: descifrar
};
