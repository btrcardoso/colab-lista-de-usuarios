import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {

    public async show({view}: HttpContextContract){

        return view.render('welcome')
    }

}