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
  console.log('signIn')
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
    url: config.apiUrl + '/entrys/' + formData.entry.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const indexEntrys = function (formData) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/entrys',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
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
  indexEntrys
}
