const express = require('express')
const passport = require('passport')
const router = express.Router()

// @desc    Auth with Google
// @route   GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

// @desc    Google auth callback
// @route   GET /auth/google/callback
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/dashboard')
  }
)

//@desc Auth with facebook
// @route GET /auth/facebook

router.get('/facebook', passport.authenticate('facebook', { scope: ["profile"] }))

// @desc    facebook auth callback
// @route   GET /auth/facebook/callback
router.get(
    '/google/callback',
    passport.authenticate('facebook', { failureRedirect: '/' }),
    (req, res) => {
      res.redirect('/dashboard')
    }
  )

  //@desc Auth with Linkenin
// @route GET /auth/linked

router.get('/linkedin', passport.authenticate('linkedin', { scope: ['r_emailaddress', 'r_liteprofile'] }))

// @desc    linked in auth callback
// @route   GET /auth/linked in/callback
router.get(
    '/linkedin/callback',
    passport.authenticate('linkedin', { failureRedirect: '/' }),
    (req, res) => {
      res.redirect('/dashboard')
    }
  )

// @desc    Logout user
// @route   /auth/logout
router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

module.exports = router