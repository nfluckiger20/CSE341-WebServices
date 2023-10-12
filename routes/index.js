const router = require('express').Router();

const contacts = require("../controllers/contacts")

router.get('/', contacts.findContacts)
router.get('/:id', contacts.findContact)
router.post('/', contacts.postContacts)
router.put('/:id', contacts.putContacts)
router.delete('/:id', contacts.deleteContacts)

routes.use('/inventory', /*requiresAuth(),*/ require('./inventory'));
routes.use('/location', /*requiresAuth(),*/ require('./location'));

module.exports = router;