'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const events = require('./events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-password').on('submit', events.onChangePassword)
  $('#sign-out').on('submit', events.onSignOut)
  $('#create-entry').on('submit', events.onCreateEntry)
  $('#update-entry').on('submit', events.onUpdateEntry)
  //  $('#delete-entry').on('submit', events.onDeleteEntry)
  $('#index-entrys').on('submit', events.onIndexEntrys)
  // $('#hb-delete-entry').on('submit', events.onDeleteEntry)
  $('#handlebars-test').on('click', '#delete-button', events.onDeleteEntry)
  $('#handlebars-test').on('click', '#edit-id-button', events.setEditFields)
  $('#handlebars-test').on('click', '#delete-comment-button', events.onDeleteComment)
  $('#handlebars-test').on('click', '#edit-comment-button', events.setEditCommentFields)
  $(document.body).on('submit', '#comment-form', events.onCreateComment)
  $('#update-comment').on('submit', events.onUpdateComment)
})
