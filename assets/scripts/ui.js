'use strict'
const entrysTemplate = require('./templates/entrys.handlebars')
const store = require('./store')
// const api = require('./api')
// const getFormFields = require('../../lib/get-form-fields.js')

const successMessage = (newText) => {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const failureMessage = newText => {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onSignUpSuccess = function (response) {
  successMessage('Signed up successfully!')
  // const formFields = getFormFields(response.target)
  // api.signIn(formFields)
  //   .then(onSignInSuccess)
  //   .catch(onSignInFailure)
}

const onSignUpFailure = function (response) {
  failureMessage('Sign up failed')
  // $('#sign-up').trigger('reset')
  console.log(response)
}

const onSignInSuccess = function (responseData) {
  successMessage('Signed in successfully!')
  store.user = responseData.user
  // api.()
  //   .then()
  //   .catch()
}

const onSignInFailure = function (response) {
  failureMessage('Sign in failed')
  // $('#sign-in').trigger('reset')
  console.log(response)
}

const onChangePasswordSuccess = function (response) {
  // $('#change-password').trigger('reset')
  successMessage('Changed password successfully!')
}

const onChangePasswordFailure = function (response) {
  failureMessage('Change password failed')
  console.log(response)
}

const onSignOutSuccess = function (response) {
  successMessage('Signed out successfully!')
  // $('#change-password').hide()
  // $('#sign-out').hide()
  // $('#sign-up').show()
  // $('#sign-in').show()
}

const onSignOutFailure = function (response) {
  failureMessage('Sign out failed')
  console.log(response)
}

const onCreateEntrySuccess = function (response) {
  successMessage('Created entry successfully')
  console.log(response)
}

const onCreateEntryFailure = function (response) {
  failureMessage('Create entry failed')
  console.log(response)
}

const onUpdateEntrySuccess = function (response) {
  successMessage('Updated entry successfully')
  console.log(response)
}

const onUpdateEntryFailure = function (response) {
  failureMessage('Update entry failed')
  console.log(response)
}

const onDeleteEntrySuccess = function (response) {
  successMessage('Deleted entry successfully')
  console.log(response)
}

const onDeleteEntryFailure = function (response) {
  failureMessage('Delete entry failed')
  console.log(response)
}

const onIndexEntrysSuccess = function (response) {
  successMessage('Indexed entrys success')
  const indexEntrysHTML = entrysTemplate({ entrys: response.entrys })
  $('#handlebars-test').html(indexEntrysHTML)
}

const onIndexEntrysFailure = function (response) {
  failureMessage('Indexed entrys failed')
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
