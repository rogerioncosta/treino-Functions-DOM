
const transacao = { //===========================================
	gastos() {

		let valorNoCartao = 0

		// pegar todas as transações
        // para cada transação,
		valoresNaTabela.forEach(function(valoresNaTabela) {

			// se ela for maior que zero
			if (valoresNaTabela.valor > 0) {

				// somar a variavel e retornar ela
				valorNoCartao = valorNoCartao + valoresNaTabela.valor

			}// if

		})// foreach

		return valorNoCartao

	}// func gastos

}// obj transacao ==================================================


const valoresNaTabela = [ //=======================================
	{
		id: 1,
		descricao: 'Luz',
		valor: 500.51,
	},//obj 1

	{
		id: 2,
		descricao: 'Água',
		valor: -100,
	},// obj 2

	{
		id: 3,
		descricao: 'Gás',
		valor: 150,
	}// obj 2

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


		console.log(tr) //console apagar


		// Adiciona o tr dentro de #tabela no tbody. Child é o tr
		// DOM.idTabela.appendChild(tr)

		//Seleciona as tags #dados-tabela tbody e coloca na var idTabela
		const selIdTabela = document.querySelector('#tabela tbody')

		selIdTabela.appendChild(tr)


		// document.querySelector('#tabela tbody').appendChild(document.createElement('tr').innerHTML = DOM.criarTds(valoresNaTabela))


	}, // func adicionarValoresTabela======================================


	criarTds(valoresNaTabela) {//==========================================

		// mostra se colocou o - na frente do valor ao cadastrar
		const CSSclasse = valoresNaTabela.valor > 0 ? "sinalMais" : "sinalMenos"

		const html = 
		`
			<td class="descricao">${valoresNaTabela.descricao}</td>
			<td class="${CSSclasse}">${valoresNaTabela.valor}</td>
		`

		// Cria os tds e retorna para fora
		return html
	
	} // func criarTds ==========================


}// DOM=============================================


valoresNaTabela.forEach(function(valoresNaTabela) {
	DOM.adicionarValoresTabela(valoresNaTabela)
})