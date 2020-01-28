const {perfis} = require('../data/db')

module.exports = {
    salario(usuario){
        return usuario.salario_real
    },
    
    perfil(usuario){
        const perf = perfis.filter(p => p.id === usuario.perfil_id)
        return perf ? perf[0] : null
    }
}