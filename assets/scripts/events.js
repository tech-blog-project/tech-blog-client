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

const setEditFields = function (event) {
  event.preventDefault()
  const entryId = $(event.target).attr('data-id')
  const entryTitle = $(event.target).attr('title')
  const entryText = $(event.target).attr('text')
  console.log(entryId, entryTitle, entryText)
  $('#entry-id').attr('value', entryId)
  $('#update-title').attr('value', entryTitle)
  $('#update-text').text(entryText)
}

const setEditCommentFields = function (event) {
  event.preventDefault()
  const commentId = $(event.target).attr('data-id')
  const commentOwner = $(event.target).attr('user')
  const commentText = $(event.target).attr('text')
  console.log(commentId, commentOwner, commentText)
  $('#comment-id').attr('value', commentId)
  $('#update-owner').attr('value', commentOwner)
  $('#update-comment-text').text(commentText)
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

const onDeleteComment = function (event) {
  event.preventDefault()
  // set const id to be the button's value attr
  // which we'd made the entry.id in handlebars
  const id = $(event.target).attr('value')
  // pass id
  api.deleteComment(id)
    .then(function () {
      // should re-index the entrys
      onIndexEntrys(event)
    })
    .then(ui.onDeleteCommentSuccess)
    .catch(ui.onDeleteCommentFailure)
}

const onIndexEntrys = function (event) {
  event.preventDefault()
  api.indexEntrys()
    .then(api.indexComments())
    .then(ui.onIndexEntrysSuccess)
    .catch(ui.onIndexEntrysFailure)
}

const onCreateComment = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log('entry id', $(event.target).attr('value'))
  formData.comment.entry = $(event.target).attr('value')
  console.log('create comment form data: ', formData)
  api.createComment(formData)
    .then(function () {
    // should re-index the entrys
      onIndexEntrys(event)
    })
    .then(ui.onCreateCommentSuccess)
    .catch(ui.onCreateCommentFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateEntry,
  onUpdateEntry,
  onDeleteEntry,
  onIndexEntrys,
  setEditFields,
  onCreateComment,
  setEditCommentFields,
  onDeleteComment
}
