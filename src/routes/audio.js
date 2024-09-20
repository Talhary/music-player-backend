import express from 'express'
const route = express.Router()
import {getYtInfo} from '../yt'

route.route('/video').get(getYtInfo)

export  {route}