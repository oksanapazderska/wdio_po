const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        expect(await LoginPage.flashMsg.getText()).toHaveText('You logged into a secure area!')
    })
})

