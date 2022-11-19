import Banner from "../components/Banner";
import BestSeller from "../components/BestSeller";
import GenderProduct from "../components/GenderProduct";
import HotProduct from "../components/HotProduct";
import Layout from "../components/Layout";
import productAPI from "../service/productAPI";
import { Product } from "../interface/product";
import { GetServerSideProps } from "next";

export default async function Home() {
  const products = await getProductList();
  console.log(products);
  return (
    <Layout title="Phong&rsquo;s Perfume">
      <main className="relative bg-perfume_red-bg">
        <Banner />

        <BestSeller />

        <HotProduct />

        <GenderProduct />
      </main>
    </Layout>
  );
}

// export async function getServerSideProps:GetServerSideProps<{products: Product[]}> {
//   const products = await productAPI.getProductList();
//   return { props: { products } };
// }

async function getProductList(): Promise<Product[]> {
  const url = "http://localhost:5000/api/products/";
  const response = await fetch(url);
  return response.json();
}
