import Banner from "../components/Banner";
import BestSeller from "../components/BestSeller";
import GenderProduct from "../components/GenderProduct";
import HotProduct from "../components/HotProduct";
import Layout from "../components/Layout";

export default function Home() {
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
