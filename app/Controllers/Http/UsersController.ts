import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {

    public async showAllUsers({view}: HttpContextContract){

        let resp = await fetch("https://randomuser.me/api/?results=10")
        let {results} = await resp.json()
        let users = results

        return view.render('welcome', {users})
    }

    public async show({view, params}: HttpContextContract){

        let resp = await fetch(`https://randomuser.me/api/`)
        let {results} = await resp.json()
        let user = results[0]
        user.login.username = params.username

        return view.render('users/show', {user})
    }

}