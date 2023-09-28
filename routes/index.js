const router = require('express').Router();

const contacts = require("../controllers/contacts")

router.get('/', contacts.findContacts)
router.get('/:id', contacts.findContact)
router.post('/', contacts.postContacts)
router.put('/:id', contacts.putContacts)

module.exports = router;