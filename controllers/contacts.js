const {MongoClient} = require('mongodb');


const main = async (req, res) => {
    const url = process.env.MONGODB; // Replace with your MongoDB URL
    const client = new MongoClient(url);
    console.log(res)

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

main().catch(console.error);

async function getContacts(client) {
    const contactsCollection = client.db('Contacts').collection('Contacts');
    const contacts = await contactsCollection.find().toArray();
    return contacts;
}


module.exports = {main}