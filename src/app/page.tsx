import CardDescriptionSection from "@/components/CardDescriptionSection";
import Categories from "@/components/Categories";
import HeroSlider from "@/components/HeroSlider";
import OffersSection from "@/components/OffersSection";
import ProductGrid from "@/components/ProductGrid";
import StoreLocate from "@/components/StoreLocate";
import TestimonialSection from "@/components/TestimonialSection";

import sonyImage from "@/assets/sony-audio.png";
import jblImage from "@/assets/jbl-speaker.png";
import ShippingSection from "@/components/ShippingSection";
import mobileImage from "@/assets/mobile.png";
import CompanyCard from "@/components/CompanyCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <HeroSlider />
      <TestimonialSection />
      <OffersSection />
      <ProductGrid />
      <Categories />
      <CardDescriptionSection
        heading="Sony Audio"
        descriptions={[
          "Elevate your listening experience",
          "bring music to your life",
        ]}
        link="#explore"
        image={sonyImage}
      />
      <ProductGrid />
      <StoreLocate />
      <CardDescriptionSection
        heading="JBL amplifiers"
        descriptions={[
          "Elevate your listening experience",
          "bring music to your life",
        ]}
        rtl={true}
        link="#explore"
        image={jblImage}
      />
      <ProductGrid />
      <ShippingSection />
      <CardDescriptionSection
        heading="Media Players"
        descriptions={[
          "Elevate your listening experience",
          "bring music to your life",
        ]}
        link="#explore"
        image={mobileImage}
      />
      <CompanyCard />
      <Footer />
    </div>
  );
}
