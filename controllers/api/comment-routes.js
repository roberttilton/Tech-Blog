const router = require('express').Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

// URL: 
router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      // TODO: COMMENT BODY IN REQUEST USING SPREAD
      ...req.body,
      // TODO: SET USERID TO SESSION LOGGEDIN USERID
      userid: req.session.userid
    });
    res.json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
