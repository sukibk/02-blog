import HomePageContainer from "@/components/HomePageContainer/HomePageContainer";
import {MongoClient} from "mongodb";
import Head from "next/head";

export default function HomePage(props){
  return <>
    <Head>
      <title>Blog</title>
      <meta name='description' contetnt='Website for blogging'/>
    </Head>
    <HomePageContainer blogs={props.blogs}/>
  </>
}

export async function getStaticProps(){
  const client = await MongoClient.connect('mongodb+srv://suki_admin:TenisMarkoSudar1@cluster0.yqzrdpi.mongodb.net/blogs?retryWrites=true&w=majority');

  const db = client.db();

  const blogsCollection = db.collection('blogs');

  const results = await blogsCollection.find().toArray();

  client.close();

  return {
    revalidate: 1,
    props: {
      blogs: results.map(blog => ({
        ...blog,
        id: blog._id.toString(),
        _id: null
      }))
    }
  }
}