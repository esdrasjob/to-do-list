//arrays
//let metas = ["mayk", "alo"] 

//console.log(metas[1] + ", " + metas[0]) //concatenação


// objects
let meta = {
    value: 'ler um livro todo mês',
    checked: false,
    log: (info) => {
        console.log(info)
    }
}

meta.value = "não é mais ler um livro"
meta.log(meta.value)

// arrow funcion
// const criarMeta = () => {}

//named function
// function criarMeta() {}