import { storageService } from "./storage.service"
import {utilService} from "./util.service"

export const userService = {
    getUser,
    login,
}


const user = {
    _id: utilService.makeId(),
    email: 'admin@admin.com',
    password: '1234',
    name: 'Admin',
    balance: 100,
    isAdmin: true,
    moves: []
}


function getUser(filterBy = null) {
    return new Promise((resolve, reject) => {
        userToReturn = storageService.load('USER')
        var userToReturn = user

        if (filterBy && filterBy.term) {
            userToReturn = filter(filterBy.term)
        }
        storageService.save('USER', userToReturn)
        resolve((userToReturn))
    })
}

function login(cred) {
    if (!user) prompt('ddw')
    user = JSON.parse(user)
    const user = user.filter(user => {
        return user.email === cred.email && user.password === cred.password
    })[0]

}