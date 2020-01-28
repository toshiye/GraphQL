const perfis = [
    {
        id: 1,
        nome: 'comum'
    },
    {
        id: 2,
        nome: 'administrador'
    }
]

const usuarios = [
    {
        id: 1,
        nome: 'Sarinha',
        email: 'sara@sasaki.com',
        idade: 2,
        perfil_id: 2,
        status: 'ATIVO'
    },
    {
        id: 2,
        nome: 'Samara',
        email: 'samara@sasaki.com',
        idade: 32,
        perfil_id: 1,
        status: 'ATIVO'
    },
    {
        id: 3,
        nome: 'Gabriel',
        email: 'sasaki@sasaki.com',
        idade: 33,
        perfil_id: 1,
        status: 'ATIVO'
    }
]

module.exports = {usuarios, perfis}