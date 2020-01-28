const {usuarios, perfis} = require('../data/db')

module.exports ={
    ola(){
        return 'Buon Giorno'
    },

    horaAtual(){
        return new Date
    },

    usuarioLogado() {
        return {
            id: 1,
            nome: 'Sarinha',
            email: 'sarinha@sasaki.com',
            idade: 2,
            salario_real: 5589.65,
            vip: true
        }
    },

    produtoEmDestaque(){
        return{
            nome: 'Notebook Gamer',
            preco: 4890.89,
            desconto: 0.5
        }            
    },

    numerosMegaSena(){
        /* return [4, 8, 13, 27, 33, 54] */
        const crescente = (a, b) => a - b 
        return Array(6).fill(0)
            .map(n => parseInt(Math.random() * 60 + 1))
            .sort(crescente)
    },

    usuarios(){
        return usuarios
    },

    usuario(_, {id}){
        const sels = usuarios.filter(u => u.id === id)
        return sels ? sels[0] : null
    },

    perfis(){
        return perfis
    },

    perfil(_, {id}){
        const perf = perfis.filter(p => p.id === id)
        return perf ? perf[0] : null
    }
}