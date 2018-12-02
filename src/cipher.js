const cifrar = (offset, string) => {
  let textoFinal="";
  for(var i=0; i<string.length; i++){
    const ubicacionAscii= string.charCodeAt(i);
    const newOffset= (26 + (offset%26));
      if (string[i]===" "){
        textoFinal+=" ";
      } else if (ubicacionAscii>=65 && ubicacionAscii<=90) {
        textoFinal+= String.fromCharCode((ubicacionAscii-65+newOffset)%26+65);
      } else if (ubicacionAscii>=97 && ubicacionAscii<=122) {
        textoFinal+= String.fromCharCode((ubicacionAscii-97+newOffset)%26+97);
      } else {
        textoFinal+=string[i];
      }
  }
return textoFinal;
}

const descifrar = (offset, string) => {
  let textoFinal="";
  for(var i=0; i<string.length; i++){
    const ubicacionAscii= string.charCodeAt(i);
    const newOffset= (26 - (offset%26));
      if (string[i]===" "){
        textoFinal+=" ";
      } else if (ubicacionAscii>=65 && ubicacionAscii<=90) {
        textoFinal+= String.fromCharCode((ubicacionAscii-65+newOffset)%26+65);
      } else if (ubicacionAscii>=97 && ubicacionAscii<=122) {
        textoFinal+= String.fromCharCode((ubicacionAscii-97+newOffset)%26+97);
      } else {
        textoFinal+=string[i];
      }
  }
return textoFinal;
}
window.cipher = {
  encode: cifrar,
  decode: descifrar
};
