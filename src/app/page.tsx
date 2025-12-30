import { MainLayout } from "@/components/templates/MainLayout";
import { HeroBanner } from "@/components/organisms/HeroBanner";
import { CategoryGrid } from "@/components/organisms/CategoryGrid";
import { FlashSale } from "@/components/organisms/FlashSale";
import { BestSeller } from "@/components/organisms/BestSeller";

export default function Home() {
  return (
    <MainLayout>
      <HeroBanner />
      <FlashSale />
      <BestSeller />
      <CategoryGrid />
    </MainLayout>
  );
}
