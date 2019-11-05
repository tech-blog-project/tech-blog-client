'use strict'

const store = require('./store')
// const api = require('./api')
// const getFormFields = require('../../lib/get-form-fields.js')

const onSignUpSuccess = function (response) {
  console.log('Signed up successfully!')
  // const formFields = getFormFields(response.target)
  // api.signIn(formFields)
  //   .then(onSignInSuccess)
  //   .catch(onSignInFailure)
}

const onSignUpFailure = function (response) {
  console.log('Sign up failed')
  // $('#sign-up').trigger('reset')
  console.log(response)
}

const onSignInSuccess = function (responseData) {
  console.log('Signed in successfully!')
  store.user = responseData.user
  // api.()
  //   .then()
  //   .catch()
}

const onSignInFailure = function (response) {
  console.log('Sign in failed')
  // $('#sign-in').trigger('reset')
  console.log(response)
}

const onChangePasswordSuccess = function (response) {
  // $('#change-password').trigger('reset')
  console.log('Changed password successfully!')
}

const onChangePasswordFailure = function (response) {
  console.log('Change password failed')
  console.log(response)
}

const onSignOutSuccess = function (response) {
  console.log('Signed out successfully!')
  // $('#change-password').hide()
  // $('#sign-out').hide()
  // $('#sign-up').show()
  // $('#sign-in').show()
  location.reload()
}

const onSignOutFailure = function (response) {
  console.log('Sign out failed')
  console.log(response)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
