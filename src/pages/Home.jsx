import AddedProductsItems from "./AddedProductItems.jsx";
import Brands from "../components/Brands";
import FeaturedBrandes from "../components/FeaturedBrands";
import FeaturedMultiCarousel from "../components/FeaturedMultiCarousel.jsx";
import HomeOurProducts from "../components/HomeOurProducts.jsx";

function Home({ brands, search }) {
  return (
    <>
      <FeaturedMultiCarousel brands={brands} />
      <FeaturedBrandes search={search} brands={brands} />
      <Brands />
      <HomeOurProducts brands={brands} />
      <AddedProductsItems />
    </>
  );
}

export default Home;
