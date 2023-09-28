const router = require('express').Router();

const contacts = require("../controllers/contacts")

router.get('/', contacts.findContacts)
router.get('/:id', contacts.findContact)

module.exports = router;