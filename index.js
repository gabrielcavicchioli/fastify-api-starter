require('dotenv-safe').config({ example: './.env.example' })
require('module-alias/register')
require('./server')()
