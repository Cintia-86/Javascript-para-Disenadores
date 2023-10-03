function calcularArea(base, altura) {
	return base + altura;
}

function init(event)
{
	var zonaResultado = document.querySelector('#resultado>pre');
	var botonCalcular = document.querySelector('#calcular');

	botonCalcular.addEventListener('click', function(event)
	{
		var base = document.querySelector('#base').value;
		zonaResultado.innerHTML = calcularArea(base, altura);
	});

	botonCalcular.addEventListener('mouseover', function(event)
	{
		event.target.classsName += 'sobre';
		event.target.innerHTML = 'Click';
	});

	botonCalcular.addEventListener('mouseover', function(event)
	{
		event.target.classsName = event.target.className.replace(' sobre', '');
		event.target.innerHTML = 'Calcular';

	});

}
	

