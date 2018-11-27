const cifrar = (offset, texto) => {
  let textoFinal="";
  const textoMayuscula= texto.toUpperCase();
  for(var i=0; i<textoMayuscula.length; i++){
    if(textoMayuscula[i]===" "){
      textoFinal+=" ";
    }
    else{
  textoFinal+= String.fromCharCode((textoMayuscula.charCodeAt(i)+65+offset)%26+65);
}}
return textoFinal;

}

const descifrar = (offset, texto) => {
  let textoFinal="";
  const textoMayuscula = texto.toUpperCase();
  for(var i=0; i<textoMayuscula.length; i++){
    if(textoMayuscula[i]==" "){
      textoFinal+=" ";
    }
    else{
  textoFinal+= String.fromCharCode((textoMayuscula.charCodeAt(i)+65-offset)%26+65);
  }
  }
return textoFinal;
}

window.cipher = {
  encode: cifrar,
  decode: descifrar
};
