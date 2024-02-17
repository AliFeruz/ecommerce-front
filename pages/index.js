import Featured from "@/components/Featured";
import Header from "@/components/Header";
import NewProducts from "@/components/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/product";
import Head from "next/head";

export async function getServerSideProps(){
  const featuredProduct = '65ba62e1a3697bfdad7ed36d';
  await mongooseConnect();
  const product = await Product.findById(featuredProduct);
  const newproduct = await Product.find({}, null, {sort: {'_id': -1}, limit: 4})
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      newproducts: JSON.parse(JSON.stringify(newproduct))
    }
  }
}

export default function Home({product, newproducts}) {
 
  return (
    <>
      <Head>
        <title>ECommercE</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
       <Header/>
       <Featured product={product}/>
       <NewProducts products={newproducts}/>
      </main>
    </>
  );
}
