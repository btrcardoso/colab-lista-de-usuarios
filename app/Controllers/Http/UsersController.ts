import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {

    public async show({view}: HttpContextContract){

        let resp = await fetch("https://randomuser.me/api?results=10")
        let {results} = await resp.json()
        let users = results

        return view.render('welcome', users)
    }

}