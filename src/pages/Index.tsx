import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import TrendingProducts from "@/components/TrendingProducts";
import NewArrivals from "@/components/NewArrivals";
import LimitedEdition from "@/components/LimitedEdition";
import BrandManifesto from "@/components/BrandManifesto";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <TrendingProducts />
        <NewArrivals />
        <LimitedEdition />
        <BrandManifesto />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;