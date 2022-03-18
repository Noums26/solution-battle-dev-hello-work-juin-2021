const inputConversion = (input) => {
	let data = []
	for(let elt of input){
		let item = elt.split('')
		data.push(item)
	}
	return data
}
const tetris = (input) => {
	let dataBase = inputConversion(input)
	
	for(let i = 0; i < dataBase.length; i++) {
		if(dataBase[i].filter(e=>{return e=='.'}).length > 1){
			continue
		}
		let place = dataBase[i].indexOf('.')
		if(i+1 < dataBase.length){
			if (dataBase[i+1][place] == '.') {continue}
		}
		let stat = true
		for(i; i>=0; i--){			
			if(dataBase[i][place] != '.') {
				stat = false
			}
		}
		return stat == true ? `BOOM ${place+1}` : `NOPE`
	}
	return 'NOPE'
}
