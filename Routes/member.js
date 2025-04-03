const express = require("express");
const router = express.Router();
const MemberController = require('../Controllers/member');
const auth = require('../Auth/auth');

router.get('/all-member', auth, MemberController.getAllMember);
router.post('/register-member',auth,MemberController.registerMember);

router.get('/searched-members',auth,MemberController.searchMember);

module.exports = router;
