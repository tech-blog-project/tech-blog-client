'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('./store.js')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onCreateEntry = function (event) {
  event.preventDefault()
  const form = event.target
  console.log(form)
  const formData = getFormFields(form)
  api.createEntry(formData)
    .then(ui.onCreateEntrySuccess)
    .catch(ui.onCreateEntryFailure)
}

const onUpdateEntry = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updateEntry(formData)
    .then(ui.onUpdateEntrySuccess)
    .catch(ui.onUpdateEntryFailure)
}

const onDeleteEntry = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.deleteEntry(formData)
    .then(ui.onDeleteEntrySuccess)
    .catch(ui.onDeleteEntryFailure)
}

const onIndexEntrys = function (event) {
  event.preventDefault()

  api.indexEntrys()
    .then(ui.onEntrysIndexSuccess)
    .catch(ui.onEntrysIndexFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateEntry,
  onUpdateEntry,
  onDeleteEntry,
  onIndexEntrys
}
