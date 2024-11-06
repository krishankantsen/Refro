import { PortfolioCard } from "@/components/component/portfolio-card";
import { ProfileCard } from "@/components/component/ProfileCard";
import { WorkExp } from "@/components/component/work-exp";
import { UserList } from "@/components/component/user-list";
import { JobCard } from "@/components/component/job-card";

import { useAppSelector } from "@/lib/store/hooks";
import CenterTop from "@/components/component/CenterTop";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Jobs from "@/components/component/Jobs";

export default function Dashboard() {
  return (
    <main className="max-w-screen   m-0 p-0 overflow-hidden flex flex-col md:flex-row  pt-12">
      <div className="sticky max-h-fit top-0 z-100 lg:w-[26%] md:w-[40%] p-2 lg:p-3 xl:p-16 md:p-1 gap-4 flex flex-col xl:pr-0 xl:pt-8 ">
        <ProfileCard />
        <WorkExp />
        <PortfolioCard />
      </div>
      <div className="gap-4 flex flex-col lg:w-[51%] md:w-[60%] md:p-1 lg:p-3  xl:p-16 p-2 xl:pt-8">
        <Jobs />
      </div>
      <div className=" top-0 lg:w-[23%] lg:p-3 xl:p-16 md:hidden lg:block p-2  xl:pl-0 xl:pt-8">
        <UserList />
      </div>
    </main>
  );
}
