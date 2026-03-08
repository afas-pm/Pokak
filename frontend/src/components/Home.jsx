import CategoryRibbon from './CategoryRibbon'
import Herobanner from './Herobanner'
import FeatureCards from './FeatureCards'
import GroceryAssistant from './GroceryAssistant'
import RecommendedSection from './RecommendedSection'
import FlashSale from './Flashsale'
import TopBrands from './TopBrands'
import CategoryGrid from './CategoryGrid'

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-[#ECF0F1] min-h-screen pb-10 overflow-hidden gap-8">
      <CategoryRibbon />
      <Herobanner />
      <FeatureCards />
      <GroceryAssistant />
      <RecommendedSection />
      <FlashSale />
      <TopBrands />
      <CategoryGrid />
    </div>
  )
}
