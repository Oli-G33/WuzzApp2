const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const {
  accessChat,
  fetchChats,
  createGroup,
  renameGroup,
  removeFromGroup,
  addToGroup
} = require('../Controllers/chatControllers');

const router = express.Router();

router.route('/').post(protect, accessChat);
router.route('/').get(protect, fetchChats);
router.route('/group').post(protect, createGroup);
router.route('/rename').patch(protect, renameGroup);
router.route('/groupremove').patch(protect, removeFromGroup);
router.route('/groupadd').patch(protect, addToGroup);

module.exports = router;
