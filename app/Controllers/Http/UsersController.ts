import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {

    public async showAllUsers({view}: HttpContextContract){

        let resp = await fetch("https://randomuser.me/api/?results=10")
        let {results} = await resp.json()
        let users = results

        return view.render('users/showAllUsers', {users})
    }

    public async show({view, params}: HttpContextContract){

        // simulates searching for a user with the username brought by the params.username
        // The api won't necessarily bring the same user as it brings random users

        let resp = await fetch(`https://randomuser.me/api/`)
        let {results} = await resp.json()
        let user = results[0]
        user.login.username = params.username

        return view.render('users/show', {user})
    }

}