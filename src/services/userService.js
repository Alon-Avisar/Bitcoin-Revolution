import { storageService } from "./storage.service"
import {utilService} from "./util.service"

export const userService = {
    getUser,
    login,
    // getTransactions,
}



const users = {
    _id: utilService.makeId(),
    email: 'admin@admin.com',
    password: '1234',
    name: 'Alon',
    balance: 1230,
    isAdmin: true,
    transactions: [
        {
          toId: "d99e3u2ih329",
          to: "Moshiko",
          at: 2652712571,
          amount: 85
  },  ]

    
}




function getUser() {
     return users
    // return new Promise((resolve, reject) => {
    //     resolve((storageService.save('loggedInUser', users)))
    // })
}



function login(cred) {
    let users = storageService.load('USER')
    console.log(':users' ,users )
    
    if (!users) return
    const user = users.filter(user => {
        return user.email === cred.email && user.password === cred.password
    })[0]

    if (user) {
        storageService.save('loggedInUser', user)        
        return user
    } 
}



