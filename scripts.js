
const cartao = { //===========================================
	gastos() {

		let valorNoCartao = 0

		let p = document.getElementById('mostraValor')

		// pegar todas as transações
        // para cada transação,
		valoresNaTabela.forEach(function(valoresNaTabela) {

			// se ela for maior que zero
			if (valoresNaTabela.valor > 0) {
				
				// somar a variavel e retornar ela
				valorNoCartao = valorNoCartao + valoresNaTabela.valor
				
				// p.className = 'sinalMais'

			} else if (valoresNaTabela.valor < 0) {

				valorNoCartao = valorNoCartao + valoresNaTabela.valor				

			}		 
			

		})// foreach

		console.log("valor atual do cartão " + valorNoCartao)

		if (valorNoCartao < 0) {
					p.className = 'negativo'
			} else {
				p.className = 'positivo'
			}

		return valorNoCartao
		

	},// func gastos ==========================================



}// obj cartao ==================================================


const valoresNaTabela = [ //=======================================
	{
		id: 1,
		descricao: 'Salário',
		valor: 5000,
	},//obj 1

	{
		id: 2,
		descricao: 'Água',
		valor: -100,
	},// obj 2

	{
		id: 3,
		descricao: 'Gás',
		valor: -150,
	},// obj 3

	{
		id: 4,
		descricao: 'Financiamento',
		valor: -2000,
	},// obj 4

	{
		id: 5,
		descricao: 'Luz',
		valor: -300,
	},// obj 5


] // Array de objs valoresNaTabela ==================================


const DOM = { // =============================================

	// Seleciona as tags #dados-tabela tbody e coloca na var idTabela
	// idTabela: document.querySelector('#tabela tbody'),

	// Cria a tag tr
	adicionarValoresTabela(valoresNaTabela, indice) {//==============

		console.log(valoresNaTabela)

		// const tr = document.createElement('tr')

		// Cria o tr e Dentro dele coloca os tds
		// tr.innerHTML = DOM.criarTds(valoresNaTabela)

		// document.createElement('tr').innerHTML = DOM.criarTds(valoresNaTabela)


		const tr = document.createElement('tr')

		tr.innerHTML = DOM.criarTds(valoresNaTabela)


		// console.log(tr) //console apagar


		// Adiciona o tr dentro de #tabela no tbody. Child é o tr
		// DOM.idTabela.appendChild(tr)

		//Seleciona as tags #dados-tabela tbody e coloca na var idTabela
		const selIdTabela = document.querySelector('#tabela tbody')

		selIdTabela.appendChild(tr)


		// document.querySelector('#tabela tbody').appendChild(document.createElement('tr').innerHTML = DOM.criarTds(valoresNaTabela))


	}, // func adicionarValoresTabela======================================


	criarTds(valoresNaTabela) {//==========================================

		// mostra se colocou o - na frente do valor ao cadastrar
		const CSSclasse = valoresNaTabela.valor > 0 ? "positivo" : "negativo"
		console.log(valoresNaTabela.valor)

		const html = 
		`
			<td class="descricao">${valoresNaTabela.descricao}</td>
			<td class="${CSSclasse}">${valoresNaTabela.valor}</td>
		`

		// Cria os tds e retorna para fora
		return html
	
	}, // func criarTds ===============================================


	atualizarValorCartao() {
		document
			.getElementById('mostraValor')
			.innerHTML = cartao.gastos()
	}


}// DOM=============================================


valoresNaTabela.forEach(function(valoresNaTabela) {
	DOM.adicionarValoresTabela(valoresNaTabela)
})

DOM.atualizarValorCartao()