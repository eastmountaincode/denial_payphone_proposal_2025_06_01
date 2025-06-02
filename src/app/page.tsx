import LeadSlide from "@/components/DenialWebsite/LeadSlide";
import DenialWebsite1 from "@/components/DenialWebsite/DenialWebsite1";
import DenialWebsite2 from "@/components/DenialWebsite/DenialWebsite2";
import DenialWebsite3 from "@/components/DenialWebsite/DenialWebsite3";
import DenialWebsiteSysArch from "@/components/DenialWebsite/DenialWebsiteSysArch";
import StoneLaila from "@/components/DenialWebsite/StoneLaila";
import OperatingCosts from "@/components/DenialWebsite/OperatingCosts";
import DenialWebsiteSummary from "@/components/DenialWebsite/DenialWebsiteSummary";
import DenialPayphone1 from "@/components/DenialPayphone/DenialPayphone1";
import DenialPayphone2 from "@/components/DenialPayphone/DenialPayphone2";
import DenialPayphone3 from "@/components/DenialPayphone/DenialPayphone3";
import DenialPayphoneAppFlow from "@/components/DenialPayphone/DenialPayphoneAppFlow";
import DenialPayphoneDataCollection from "@/components/DenialPayphone/DenialPayphoneDataCollection";
import DenialPayphoneButtonsCloseup from "@/components/DenialPayphone/DenialPayphoneButtonsCloseup";
import DenialPayphoneOperatingCosts from "@/components/DenialPayphone/DenialPayphoneOperatingCosts";
import DenialPayphoneSummary from "@/components/DenialPayphone/DenialPayphoneSummary";
import ProjectProposalOverview from "@/components/ProjectProposalOverview";
import HourlyBreakdown from "@/components/HourlyBreakdown";
import EndSlide from "@/components/EndSlide";

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
      <DenialPayphone1 />
      <DenialPayphone2 />
      <DenialPayphoneButtonsCloseup />  
      <DenialPayphone3 />
      <DenialPayphoneAppFlow />
      <DenialPayphoneDataCollection />
      <DenialPayphoneOperatingCosts />
      <DenialPayphoneSummary />
      <ProjectProposalOverview />
      <HourlyBreakdown />
      <EndSlide />
    </div>
  );
}
    