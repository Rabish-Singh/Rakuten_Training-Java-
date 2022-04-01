/**
 * 
 */
 function save(){
	const element=document.getElementById('firstname');
	console.log(element.value);
	const elements=document.getElementsByTagName('input');
	console.log(elements);
	for(let i=0;i<elements.length;i++){
		console.log(elements[i].value);
	}
}

function age(){
	const element2=document.getElementById('age');
	console.log(element2.value);
}