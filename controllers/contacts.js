const {MongoClient} = require('mongodb');
const ObjectId = require('mongodb'). ObjectId;


const findContacts = async (req, res) => {
    const url = process.env.MONGODB; // Replace with your MongoDB URL
    const client = new MongoClient(url);

    try {
        await client.connect();
        const contacts = await getContacts(client);
        res.json(contacts);

    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Internal Server Error' });

    } finally {
        await client.close();
    }
};

async function getContacts(client) {
    const contactsCollection = client.db('Contacts').collection('Contacts');
    const contacts = await contactsCollection.find().toArray();
    return contacts;
}

const findContact = async (req, res) => {
    const id = new ObjectId(req.params.id) 
    const url = process.env.MONGODB; 
    const client = new MongoClient(url);

    try {
        await client.connect();
        const contacts = await getContact(client, id);
        res.json(contacts);

    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Internal Server Error' });

    } finally {
        await client.close();
    }
};

async function getContact(client, id) {
    const contactsCollection = client.db('Contacts').collection('Contacts');
    const contacts = await contactsCollection.find({_id: id}).toArray();
    return contacts;
}


module.exports = {findContacts, findContact}
