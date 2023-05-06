import { MongoClient } from "mongodb";

export default async function addBlog(req, res){
    if(req.method === 'POST'){
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://suki_admin:TenisMarkoSudar1@cluster0.yqzrdpi.mongodb.net/blogs?retryWrites=true&w=majority');

        const db = client.db();

        const blogsCollection = db.collection('blogs');

        const result = await blogsCollection.insertOne(data);

        console.log(result)

        client.close();

        res.status(201).json({message: 'Successfully inserted'})
    }
}