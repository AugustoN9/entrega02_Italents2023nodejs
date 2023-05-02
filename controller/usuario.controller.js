const usuarios = [
    {
        id: 1,
        username: "usuario_01",
        email: "user_one@italents.com",
        categoria: "studant",
        cpf: 12345678901
    },
    {
        id: 2,
        username: "usuario_02",
        email: "user_two@italents.com",
        categoria: "studant",
        cpf: 34567890121
    },
    {
        id: 3,
        username: "usuario 03",
        email: "user_three@italents.com",
        categoria: "teacher",
        cpf: 156789011234
    },
    {
        id: 4,
        username: "usuario 04",
        email: "user_four@italents.com",
        categoria: "admin",
        cpf: 90234516178
    }

];

const find = (request, response) => {
    const id = request.params.id;
    let found = false;
    usuarios.map(function (valor) {
        if (valor.id == id) {
            found = true;
            return response.send(valor);
        }
    });
    if (!found) {
        response.status(404).send({ message: "Usuário NÃO foi encontrado!" });
    }
}

const findAllUsuarios = (requeste, response) => {
    response.send(usuarios);
}

const createUsuario = (request, response) => {
    const usuario = request.body;

    if (Object.keys(usuario).length === 0) {
        return response.status(400).send({ message: "O corpo da mensagem esta vazio" });
    }

    if (!usuario.id) {
        return response.status(400).send({ message: "O campo 'id' não foi encontrado!" });
    }
    else if (!usuario.username) {
        return response.status(400).send({ message: "O campo 'username' não foi encontrado!" });
    }
    else if (!usuario.email) {
        return response.status(400).send({ message: "O campo 'email' não foi encontrado!" });
    }
    else if (!usuario.categoria) {
        return response.status(400).send({ message: "O campo 'categoria' não foi encontrado!" });
    }
    else if (!usuario.cpf) {
        return response.status(400).send({ message: "O campo 'cpf' não foi encontrado!" });
    }


    usuario.nacionalidade = "brasileira";


    usuarios.push(usuario);
    response.send(usuarios);
}

const updateUsuario = (request, response) => {
    const id = request.params.id;
    const usuario = request.body;

    let found = false;

    if (Object.keys(usuario).length === 0) {
        return response.status(400).send({ message: "O corpo da mensagem esta vazio" });
    }

    if (!usuario.id) {
        return response.status(400).send({ message: "O campo 'id' não foi encontrado!" });
    }
    else if (!usuario.username) {
        return response.status(400).send({ message: "O campo 'username' não foi encontrado!" });
    }
    else if (!usuario.email) {
        return response.status(400).send({ message: "O campo 'email' não foi encontrado!" });
    }
    else if (!usuario.categoria) {
        return response.status(400).send({ message: "O campo 'categoria' não foi encontrado!" });
    }
    else if (!usuario.cpf) {
        return response.status(400).send({ message: "O campo 'cpf' não foi encontrado!" });
    }

    usuarios.map(function (valor, index) {
        if (valor.id == id) {
            found = true;
            usuarios[index] = usuario;
            return response.send(usuarios[index]);
        }
    });
    if (!found) {
        response.status(404).send({ message: "Não foi encontrado!" });
    }
}

const deleteUsuario = (request, response) => {
    const id = request.params.id;
    let found = false;

    usuarios.map(function (valor, index) {
        if (valor.id == id) {
            found = true;
            usuarios.splice(index, 1);
            return response.send(valor);
        }
    });
    if (!found) {
        response.status(404).send({ message: "Não foi encontrado!" });
    }
}

module.exports = {
    find,
    findAllUsuarios,
    createUsuario,
    updateUsuario,
    deleteUsuario
}