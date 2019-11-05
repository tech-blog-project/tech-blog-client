'use strict'
const entrysTemplate = require('./templates/entrys.handlebars')
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
}

const onSignOutFailure = function (response) {
  console.log('Sign out failed')
  console.log(response)
}

const onCreateEntrySuccess = function (response) {
  console.log('Created entry successfully')
  console.log(response)
}

const onCreateEntryFailure = function (response) {
  console.log('Create entry failed')
  console.log(response)
}

const onUpdateEntrySuccess = function (response) {
  console.log('Updated entry successfully')
  console.log(response)
}

const onUpdateEntryFailure = function (response) {
  console.log('Update entry failed')
  console.log(response)
}

const onDeleteEntrySuccess = function (response) {
  console.log('Deleted entry successfully')
  console.log(response)
}

const onDeleteEntryFailure = function (response) {
  console.log('Delete entry failed')
  console.log(response)
}

const onIndexEntrysSuccess = function (response) {
  console.log('response is', response)
  console.log('Indexed entrys success')
  const indexEntrysHTML = entrysTemplate({ entrys: response.entrys })
  $('#handlebars-test').html(indexEntrysHTML)
}

const onIndexEntrysFailure = function (response) {
  console.log('Indexed entrys failed')
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
  onSignOutFailure,
  onCreateEntrySuccess,
  onCreateEntryFailure,
  onUpdateEntrySuccess,
  onUpdateEntryFailure,
  onDeleteEntrySuccess,
  onDeleteEntryFailure,
  onIndexEntrysSuccess,
  onIndexEntrysFailure
}
