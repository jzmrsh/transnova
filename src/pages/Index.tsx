import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ScheduleDashboard from "@/components/ScheduleDashboard";
import Fares from "@/components/Fares";
import RouteMap from "@/components/RouteMap";
import NewsCarousel from "@/components/NewsCarousel";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Header />
    <main>
      <Hero />
      <ScheduleDashboard />
      <Fares />
      <RouteMap />
      <NewsCarousel />
    </main>
    <Footer />
  </>
);

export default Index;
