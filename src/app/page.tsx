import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import RevenueSection from "@/components/RevenueSection";
import CampaignsSection from "@/components/CampaignsSection";
import RightSidebar from "@/components/RightSidebar";

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-8">
          <RevenueSection />
          <CampaignsSection />
        </main>
      </div>
      
      <RightSidebar />
    </div>
  );
}

