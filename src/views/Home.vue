<template>
  <div class="home">
    <Header />
    <Activity />
    <MakePizza />
    <CafeCalendar />
    <BestChefs />
    <DesertCard />
    <Reviews />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Activity from "@/components/Activity";
import MakePizza from "@/components/MakePizza";
import CafeCalendar from "@/components/CafeCalendar";
import BestChefs from "@/components/BestChefs";
import DesertCard from "@/components/desert/DesertCard";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default {
  name: "Home",

  components: {
    Header,
    Activity,
    MakePizza,
    CafeCalendar,
    BestChefs,
    DesertCard,
    Reviews,
    Contact,
    Footer,
  },
};
</script>

<style lang="scss" scoped></style>
