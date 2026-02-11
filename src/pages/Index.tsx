import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Fares from "@/components/Fares";
import RouteMap from "@/components/RouteMap";
import NewsCarousel from "@/components/NewsCarousel";
import Footer from "@/components/Footer";
import ScheduleDashboard from "@/components/ScheduleDashboard";
import Market from "@/components/Market";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ScheduleDashboard />
        {/* <BusScheduleTable /> */}
        <Fares />
        <RouteMap />
        <Market />
        {/* <NewsCarousel /> */}
      </main>
      <Footer />
    </>
  );
};

export default Index;
