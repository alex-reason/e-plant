import Featured from "./components/Featured";
import Header from "./components/Header";
import { mongooseConnect } from "./lib/mongoose";
import { Product } from "./models/Product";

export default function Home() {
  return (
    <main className="main">
      <Header />
      <Featured />
    </main>
  )
};

export const getServerSideProps = async () => {
  await mongooseConnect();
  const product = Product.findById('651af350ab5230540206df77');
  return {
    props: {product}
  }
};