import { PortfolioCard } from "@/components/component/portfolio-card";
import { ProfileCard } from "@/components/component/ProfileCard";
import { WorkExp } from "@/components/component/work-exp";
import { UserList } from "@/components/component/user-list";
import { JobCard } from "@/components/component/job-card";
import { getCookie } from 'cookies-next';

import { CreateSearchPost } from "@/components/component/create-search-post";
import { SearchPost } from "@/components/component/search-post";

export default function Dashboard() {
  const role = getCookie("role");
console.log(role)
  return (
    <main className="max-w-screen   m-0 p-0 overflow-hidden flex flex-col md:flex-row  pt-12">
      <div className=" lg:w-[26%] md:w-[40%] p-2 lg:p-3 xl:p-16 md:p-1 gap-4 flex flex-col xl:pr-0 xl:pt-8">
        <ProfileCard />
        <WorkExp />
        <PortfolioCard />{" "}
      </div>
      <div className="gap-4 flex flex-col  lg:w-[51%] md:w-[60%] md:p-1 lg:p-3  xl:p-16 p-2 xl:pt-8">
        {role=="Placed"?<CreateSearchPost/>:<SearchPost/>}
        {role}
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
      </div>
      <div className=" lg:w-[23%] lg:p-3 xl:p-16 md:hidden lg:block p-2  xl:pl-0 xl:pt-8">
        <UserList />
      </div>
    </main>
  );
}
