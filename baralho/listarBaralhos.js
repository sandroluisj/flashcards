let {baralho} = require("../data")
function listarBaralhos(){
    baralho.forEach((baralhos) => {
        console.log(`${baralhos.id} baralho: ${baralhos.nomebaralho}`)
    })
}
module.exports = listarBaralhos