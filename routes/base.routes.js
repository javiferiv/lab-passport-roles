const express = require('express')
const router = express.Router()

const ensureAuthenticated = (req, res, next) => req.isAuthenticated() ? next() : res.render('log-in', { errorMsg: 'Desautorizado, inicia sesión' })
const checkRole = admittedRoles => (req, res, next) => admittedRoles.includes(req.user.role) ? next() : res.render('log-in', { errorMsg: 'Desautorizado, no tienes permisos' })


// Endpoints


router.get('/', (req, res) => res.render('index'))


module.exports = router
