const { json } = require('express');
const db = require('../database/conection');

module.exports = {
    async listarUsuarios(request, responsive) {
        try {
            return response.status(200).json({confirma: 'Listar Usuarios'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }
}