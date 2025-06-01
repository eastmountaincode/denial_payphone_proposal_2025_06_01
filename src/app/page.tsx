import LeadSlide from "@/components/LeadSlide";
import DenialWebsite1 from "@/components/DenialWebsite1";
import DenialWebsite2 from "@/components/DenialWebsite2";
import DenialWebsite3 from "@/components/DenialWebsite3";
import DenialWebsiteSysArch from "@/components/DenialWebsiteSysArch";
import StoneLaila from "@/components/StoneLaila";
import OperatingCosts from "@/components/OperatingCosts";
import DenialWebsiteSummary from "@/components/DenialWebsiteSummary";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <LeadSlide />
      <DenialWebsite1 />
      <DenialWebsite2 />
      <DenialWebsite3 />
      <DenialWebsiteSysArch />
      <StoneLaila />
      <OperatingCosts />
      <DenialWebsiteSummary />
    </div>
  );
}
    