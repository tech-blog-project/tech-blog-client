'use strict'

const store = require('./store')
const api = require('./api')
// const getFormFields = require('../../lib/get-form-fields.js')
const entrysTemplate = require('./templates/entrys.handlebars')
// Hides everything
const hideEverything = () => {
  $('#handlebars-test').hide()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#create-entry').hide()
  $('#update-entry').hide()
  $('.btn-primary').hide()
  $('#edit-id-button').hide()
  $('#delete-button').hide()
  $('#edit-comment-button').hide()
  $('#delete-comment-button').hide()
  $('#comment-form').hide()
  // $('.signUpAndSignIn').hide()
}
// By default will show sign-up and sign-in
hideEverything()
$('#sign-up').show()
$('#sign-in').show()
$('#handlebars-test').show()

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
  hideEverything()
  $('#change-password').show()
  $('#sign-out').show()
  $('#create-entry').show()
  $('#update-entry').show()
  $('#handlebars-test').show()
  $('.btn-primary').show()
  $('#edit-id-button').show()
  $('#delete-button').show()
  $('#edit-comment-button').show()
  $('#delete-comment-button').show()
  $('#comment-form').show()
  // const formFields = getFormFields(response.target)
  // api.signIn(formFields)
  //   .then(onSignInSuccess)
  //   .catch(onSignInFailure)
  // successMessage('Signed up successfully!')
  const email = $('#sign-up-email').val()
  const password = $('#sign-up-password').val()
  const formFields = {
    credentials: {
      email: email,
      password: password
    }
  }
  api.signIn(formFields)
    .then(onSignInSuccess)
    .catch(onSignInFailure)
  $('form').trigger('reset')
}

const onSignUpFailure = function (response) {
  failureMessage('Sign up failed')
  // $('#sign-up').trigger('reset')
  $('form').trigger('reset')
}

const onSignInSuccess = function (responseData) {
  successMessage('Signed in successfully!')
  hideEverything()
  $('#change-password').show()
  $('#sign-out').show()
  $('#create-entry').show()
  $('#update-entry').show()
  $('#handlebars-test').show()
  $('.btn-primary').show()
  $('#edit-id-button').show()
  $('#delete-button').show()
  $('#edit-comment-button').show()
  $('#delete-comment-button').show()
  $('#comment-form').show()
  store.user = responseData.user
  $('form').trigger('reset')
  // api.()
  //   .then()
  //   .catch()
}

const onSignInFailure = function (response) {
  failureMessage('Sign in failed')
  // $('#sign-in').trigger('reset')
  $('form').trigger('reset')
}

const onChangePasswordSuccess = function (response) {
  // $('#change-password').trigger('reset')
  successMessage('Changed password successfully!')
  $('form').trigger('reset')
}

const onChangePasswordFailure = function (response) {
  failureMessage('Change password failed')
  $('form').trigger('reset')
}

const onSignOutSuccess = function (response) {
  successMessage('Signed out successfully!')
  hideEverything()
  $('#edit-id-button').hide()
  $('#delete-button').hide()
  $('#edit-comment-button').hide()
  $('#delete-comment-button').prop('disabled', true)
  $('#comment-form').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('form').trigger('reset')
}

const onSignOutFailure = function (response) {
  failureMessage('Sign out failed')
}

const onCreateEntrySuccess = function (response) {
  successMessage('Created entry successfully')
  $('form').trigger('reset')
  $(function () {
    $('#createModal').modal('toggle')
  })
}

const onCreateEntryFailure = function (response) {
  failureMessage('Create entry failed')
  $('form').trigger('reset')
}

const onUpdateEntrySuccess = function (response) {
  successMessage('Updated entry successfully')
  $('form').trigger('reset')
  $(function () {
    $('#updateModal').modal('toggle')
  })
//  console.log(response)
}

const onUpdateEntryFailure = function (response) {
  failureMessage('Update entry failed')
}

const onDeleteEntrySuccess = function (response) {
  successMessage('Deleted entry successfully')
  $('form').trigger('reset')
}

const onDeleteEntryFailure = function (response) {
  failureMessage('Delete entry failed')
  // console.log(response)
}

const onIndexEntrysSuccess = function (response) {
  // commented this out because it displays when a comment is posted which is
  // not user friendly and irrelevent
  // successMessage('Indexed entrys success')
  $('#handlebars-test').show()
  const indexEntrysHTML = entrysTemplate({ entrys: response.entrys })
  $('#handlebars-test').html(indexEntrysHTML)
}
// Hope this works

const onIndexEntrysFailure = function (response) {
  failureMessage('Indexed entrys failed')
}

const onCreateCommentSuccess = function (response) {
  successMessage('Created comment successfully')
  $('form').trigger('reset')
}

const onCreateCommentFailure = function (response) {
  failureMessage('Create comment failed')
  $('form').trigger('reset')
}

const onDeleteCommentSuccess = function (response) {
  successMessage('Deleted comment successfully')
  $('form').trigger('reset')
}

const onDeleteCommentFailure = function (response) {
  failureMessage('Delete comment failed')
}

const onUpdateCommentSuccess = function (response) {
  successMessage('Updated Comment successfully')
  $('form').trigger('reset')
  $(function () {
    $('#updateCommentModal').modal('toggle')
  })
//  console.log(response)
}

const onUpdateCommentFailure = function (response) {
  failureMessage('Update Comment failed')
  $('form').trigger('reset')
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
  onIndexEntrysSuccess,
  onDeleteEntryFailure,
  onIndexEntrysFailure,
  onCreateCommentSuccess,
  onCreateCommentFailure,
  onDeleteCommentSuccess,
  onDeleteCommentFailure,
  onUpdateCommentSuccess,
  onUpdateCommentFailure
}
