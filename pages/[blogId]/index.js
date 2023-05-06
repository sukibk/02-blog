import Blog from "@/components/Blog/Blog";
import {MongoClient, ObjectId} from "mongodb";

export default function BlogPage(props){
    return <Blog blog={props.blog}/>
}

export async function getStaticPaths(){

    const client = await MongoClient.connect('mongodb+srv://suki_admin:TenisMarkoSudar1@cluster0.yqzrdpi.mongodb.net/blogs?retryWrites=true&w=majority')

    const db = client.db();

    const blogCollection = db.collection('blogs');

    const blogPaths = await blogCollection.find({}, {_id: 1}).toArray();

    client.close();

    return {
        fallback: 'blocking',
        paths: [
            {
                params: {
                    blogId: '446821BC16138CCC077A73C8'
                }
            }
        ]

    }
}



export async function getStaticProps(context){
    const blogId = context.params.blogId;

    const client = await MongoClient.connect('mongodb+srv://suki_admin:TenisMarkoSudar1@cluster0.yqzrdpi.mongodb.net/blogs?retryWrites=true&w=majority')

    const db = client.db();

    const collection = db.collection('blogs');

    const blog = await collection.findOne({_id: new ObjectId(blogId)})

    client.close()

    return {
        props: {
            blog: {
                ...blog,
                id: blog._id.toString(),
                _id: null
            }
        }
    }
}