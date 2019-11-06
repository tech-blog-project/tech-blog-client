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
    .then(function () {
      // should re-index the entrys
      onIndexEntrys(event)
    })
    .then(ui.onCreateEntrySuccess)
    .catch(ui.onCreateEntryFailure)
}

const onUpdateEntry = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updateEntry(formData)
    .then(function () {
    // should re-index the entrys
      onIndexEntrys(event)
    })
    .then(ui.onUpdateEntrySuccess)
    .catch(ui.onUpdateEntryFailure)
}

const onDeleteEntry = function (event) {
  event.preventDefault()
  // set const id to be the button's value attr
  // which we'd made the entry.id in handlebars
  const id = $(event.target).attr('value')
  // pass id
  api.deleteEntry(id)
    .then(function () {
      // should re-index the entrys
      onIndexEntrys(event)
    })
    .then(ui.onDeleteEntrySuccess)
    .catch(ui.onDeleteEntryFailure)
}

const onIndexEntrys = function (event) {
  event.preventDefault()
  api.indexEntrys()
    .then(ui.onIndexEntrysSuccess)
    .catch(ui.onIndexEntrysFailure)
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
