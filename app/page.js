import { mongooseConnect } from "./lib/mongoose";
import { Category } from "./models/Category";
import { Product } from "./models/Product";
import { Fira_Sans } from "next/font/google"
// components

import Featured from "./components/Featured";
import Header from "./components/Header";
import LatestProducts from "./components/LatestProducts";

const fira = Fira_Sans({
  subsets: ['latin'],
  variable: '--fira-font',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export default async function Home() {
  const prods = await dynamicData();
  return (
      <main className={`main ${fira.variable}`}>
        <Header />
        <Featured prodInfo={prods.featProduct} />
        <LatestProducts categories={prods.categories} prods={prods.latestProducts} />
      </main>
  )
};

export const dynamicData = async () => {
  await mongooseConnect();
  const featProduct = await Product.findById('6515b033683918ae34f5c711');
  const latestProducts = await Product.find({}, null, { sort: { 'updatedAt': -1 } })
  const categories = await Category.find({}, null)
  return {
    featProduct: JSON.parse(JSON.stringify(featProduct)),
    latestProducts: JSON.parse(JSON.stringify(latestProducts)),
    categories: JSON.parse(JSON.stringify(categories))
  }
};