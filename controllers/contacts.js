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

const postContacts = async (req, res) => {
    const body = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday,
    }
    const url = process.env.MONGODB; 
    const client = new MongoClient(url);

    try {
        await client.connect();
        const contacts = await post(client, body);
        res.json(contacts);

    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Internal Server Error' });

    } finally {
        await client.close();
    }
};

async function post(client, body) {
    const contactsCollection = client.db('Contacts').collection('Contacts');
    const contacts = await contactsCollection.insertOne(body);
    return contacts;
}

const putContacts = async (req, res) => {
    const body = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday,
    }
    const id = new ObjectId(req.params.id) 
    const url = process.env.MONGODB; 
    const client = new MongoClient(url);

    try {
        await client.connect();
        const contacts = await put(client, body, id);
        res.json(contacts);

    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Internal Server Error' });

    } finally {
        await client.close();
    }
};

async function put(client, body, id) {
    const contactsCollection = client.db('Contacts').collection('Contacts');
    const contacts = await contactsCollection.replaceOne({_id: id},body);
    return contacts;
}

module.exports = {findContacts, findContact, postContacts, putContacts}
