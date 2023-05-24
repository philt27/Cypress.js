describe('Авторизация на login.qa.studio', function () {
 
/* Открытие сайта авторизации */
    it('Доступность сайта', function () {
        cy.visit('https://login.qa.studio');
         })

/* Успешная авторизация */
    it('Успешная авторизация с валидными данными', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         })

/* Успешная авторизация с багом разработчика */
it('Успешная авторизация с багом разработчика', function () {
    cy.visit('https://login.qa.studio');
    cy.get('#mail').type('GerMan@Dolnikov.ru');
    cy.get('#loginButton').should('be.disabled');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').should('be.enabled');
    cy.get('#loginButton').click();
    cy.contains('Такого логина или пароля нет');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })

/* Ошибка авторизации, неверный Логин */
    it('Ошибка авторизации, неверный Логин', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolnikovv.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

/* Ошибка авторизации, неверный Пароль */
    it('Ошибка авторизации, неверный Пароль', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio2');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

/* Ошибка авторизации, отсутствует @ */
    it('Ошибка авторизации, отсутствует @', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio2');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
      
/* Восстановление пароля - Успешное */
    it('Восстановление пароля - Успешное', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#forgotEmailButton').click();
        cy.contains('Восстановите пароль');
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#exitRestoreButton > .exitIcon').should('be.visible');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

 /*  Восстановление пароля - не указан домен .ru */
    it('Восстановление пароля - не указан домен .ru', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#forgotEmailButton').click();
        cy.contains('Восстановите пароль');
        cy.get('#mailForgot').type('german@dolnikov');
        cy.get('#exitRestoreButton > .exitIcon').should('be.visible');
        cy.get('#restoreEmailButton').click();
        cy.contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

/* Восстановление пароля - не указана @ */
    it('Восстановление пароля - не указана @', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#forgotEmailButton').click();
        cy.contains('Восстановите пароль');
        cy.get('#mailForgot').type('germandolnikov.ru');
        cy.get('#exitRestoreButton > .exitIcon').should('be.visible');
        cy.get('#restoreEmailButton').click();
        cy.contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })


})



