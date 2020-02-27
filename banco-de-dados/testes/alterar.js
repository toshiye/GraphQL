const db = require('../config/db')

const novoUsuario = {
    nome: 'Sara',
    email: 'sara@sasaki.com',
    senha: '123456789'
}

// UPDATE... db('...').where({...}).update({...})

async function exercicio(){
    // count
    const {qtde} = await db('usuarios')
        .count('* as qtde').first()
   
    // inserir
    if(qtde === 0){
        await db('usuarios').insert(novoUsuario)
    }

    // consultar
    let {id} = await db('usuarios')
        .select('id').limit(1).first()

    // alterar
    await db('usuraios').where({id})
        .update({nome: 'Sara Leone Sassaki'})

    return await db('usuarios').where({id})
}

exercicio()
    .then(usuario => console.log(usuario))
    .finally(() => db.destroy())