'use strict'

const config = require('./config')

const store = require('./store')

const signUp = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: formData
  })
}

const signIn = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: formData
  })
}

const changePassword = function (formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createEntry = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/entrys',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const updateEntry = function (formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/entrys/' + formData.entry.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const deleteEntry = function (formData) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/entrys/' + formData, // .entry.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const indexEntrys = function (formData) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/entrys'
  })
}

const createComment = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/comments',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const indexComments = function (formData) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/comments'
  })
}

const deleteComment = function (formData) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/comments/' + formData, // .entry.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateComment = function (formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/comments/' + formData.comment.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createEntry,
  updateEntry,
  deleteEntry,
  indexEntrys,
  createComment,
  indexComments,
  deleteComment,
  updateComment
}
