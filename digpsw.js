function digpsw(psw){

const hashValue = psw =>
  crypto.subtle
    .digest('SHA-256', new TextEncoder('utf-8').encode(psw))
    .then(h => {
      let hexes = [],
        view = new DataView(h);
      for (let i = 0; i < view.byteLength; i += 4)
        hexes.push(('00000000' + view.getUint32(i).toString(16)).slice(-8));
      return hexes.join('');
    });


	if(hashValue=="e1fc45f7880e0505ff0b6a079b9af149f225e260f59b1d20225357a8cce8ffd8"){
		window.location.href='pag1.html';
	}
	else{
		alert('Soooca');
	}
}
