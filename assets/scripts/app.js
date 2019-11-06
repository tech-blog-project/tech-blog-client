'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const events = require('./events.js')
// const entrysTemplate = require('./templates/entrys.handlebars')
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
  $('#delete-entry').on('submit', events.onDeleteEntry)
  $('#index-entrys').on('submit', events.onIndexEntrys)
  // grabbing the #comment-form from handlebars
  $(document.body).on('submit', '#comment-form', events.onCreateComment)
})
