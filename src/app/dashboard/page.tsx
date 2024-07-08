
import { PortfolioCard } from "@/components/component/portfolio-card";
import { ProfileCard } from "@/components/component/ProfileCard";
import { WorkExp } from "@/components/component/work-exp";
import { UserList } from "@/components/component/user-list";
import { JobCard } from "@/components/component/job-card";
import { CreateSearchPost } from "@/components/component/create-search-post";
import { SearchPost } from "@/components/component/search-post";
import { useAppSelector } from "@/lib/store/hooks";
import CenterTop from "@/components/component/CenterTop";

const data=[
  {
    "jobRole": "Frontend Developer",
    "companyName": "Tech Solutions Inc.",
    "companyLogo": "https://example.com/logos/techsolutions.png",
    "skills": ["JavaScript", "React", "HTML", "CSS"],
    "salary": "$80,000 - $100,000 per year",
    "description": "We are looking for a skilled Frontend Developer to join our team. You will be responsible for developing user interfaces using JavaScript frameworks like React, and ensuring the application's responsiveness and performance."
  },
  {
    "jobRole": "Data Scientist",
    "companyName": "Data Insights Co.",
    "companyLogo": "https://example.com/logos/datainsights.png",
    "skills": ["Python", "Machine Learning", "Data Analysis"],
    "salary": "$90,000 - $110,000 per year",
    "description": "Data Insights Co. is seeking a Data Scientist with strong programming skills in Python and experience in machine learning algorithms. You will work on analyzing large datasets to uncover insights and make data-driven decisions."
  },
  {
    "jobRole": "UX/UI Designer",
    "companyName": "Creative Designs Ltd.",
    "companyLogo": "https://example.com/logos/creativedesigns.png",
    "skills": ["UI Design", "Adobe XD", "Wireframing", "Prototyping"],
    "salary": "$70,000 - $90,000 per year",
    "description": "Join our team as a UX/UI Designer and help create intuitive and user-friendly interfaces. You should have experience with tools like Adobe XD and a strong portfolio showcasing your design skills."
  },
  {
    "jobRole": "Backend Developer",
    "companyName": "Cloud Systems Co.",
    "companyLogo": "https://example.com/logos/cloudsystems.png",
    "skills": ["Java", "Spring Boot", "SQL", "RESTful APIs"],
    "salary": "$85,000 - $105,000 per year",
    "description": "Cloud Systems Co. is looking for a Backend Developer proficient in Java and Spring Boot. You will be responsible for designing and implementing backend services, ensuring scalability and performance."
  },
  {
    "jobRole": "Marketing Manager",
    "companyName": "Global Marketing Solutions",
    "companyLogo": "https://example.com/logos/globalmarketingsolutions.png",
    "skills": ["Digital Marketing", "SEO", "Campaign Management", "Analytics"],
    "salary": "$95,000 - $115,000 per year",
    "description": "Global Marketing Solutions is hiring a Marketing Manager to lead digital marketing campaigns and strategies. You should have a strong background in SEO, analytics, and proven experience in managing marketing campaigns."
  },
  {
    "jobRole": "Product Manager",
    "companyName": "Innovative Tech Ventures",
    "companyLogo": "https://example.com/logos/innovativetechventures.png",
    "skills": ["Product Management", "Agile", "Market Research", "Product Development"],
    "salary": "$100,000 - $120,000 per year",
    "description": "Join Innovative Tech Ventures as a Product Manager and drive the development and launch of new products. You should have experience in Agile methodologies, market research, and defining product roadmaps."
  },
  {
    "jobRole": "Network Engineer",
    "companyName": "Network Solutions Group",
    "companyLogo": "https://example.com/logos/networksolutionsgroup.png",
    "skills": ["Networking", "Cisco", "Firewalls", "Network Security"],
    "salary": "$85,000 - $105,000 per year",
    "description": "Network Solutions Group is seeking a Network Engineer with expertise in networking technologies. You will be responsible for designing and implementing network solutions, ensuring the security and reliability of our network infrastructure."
  },
  {
    "jobRole": "Financial Analyst",
    "companyName": "Financial Insights Corp.",
    "companyLogo": "https://example.com/logos/financialinsights.png",
    "skills": ["Financial Analysis", "Excel", "Financial Modeling", "Budgeting"],
    "salary": "$80,000 - $100,000 per year",
    "description": "Financial Insights Corp. is hiring a Financial Analyst to analyze financial data, create forecasts, and support strategic decision-making. Proficiency in Excel and financial modeling techniques is required."
  },
  {
    "jobRole": "HR Manager",
    "companyName": "People Dynamics Ltd.",
    "companyLogo": "https://example.com/logos/peopledynamics.png",
    "skills": ["Human Resources", "Employee Relations", "Recruitment", "HR Policies"],
    "salary": "$90,000 - $110,000 per year",
    "description": "Join People Dynamics Ltd. as an HR Manager and oversee recruitment, employee relations, and HR policies. You should have a strong background in human resources and experience in managing HR functions."
  },
  {
    "jobRole": "Sales Executive",
    "companyName": "Sales Innovations Inc.",
    "companyLogo": "https://example.com/logos/salesinnovations.png",
    "skills": ["Sales", "Negotiation", "Customer Relationship Management", "Business Development"],
    "salary": "$85,000 - $105,000 per year",
    "description": "Sales Innovations Inc. is seeking a Sales Executive to drive sales initiatives and expand our customer base. You should have a proven track record in sales, excellent negotiation skills, and the ability to build strong client relationships."
  }
]
export type Job= {
  jobRole: string;
  companyName: string;
  companyLogo: string;
  skills: string[];
  salary: string;
  description: string;
}
export default function Dashboard() {

  return (
    <main className="max-w-screen   m-0 p-0 overflow-hidden flex flex-col md:flex-row  pt-12">
      <div className=" lg:w-[26%] md:w-[40%] p-2 lg:p-3 xl:p-16 md:p-1 gap-4 flex flex-col xl:pr-0 xl:pt-8">
        <ProfileCard />
        <WorkExp />
        <PortfolioCard />{" "}
      </div>
      <div className="gap-4 flex flex-col  lg:w-[51%] md:w-[60%] md:p-1 lg:p-3  xl:p-16 p-2 xl:pt-8">
        <CenterTop/>
        {data.map((job,index)=><JobCard  job={job as Job} />)}
        
        
      </div>
      <div className=" lg:w-[23%] lg:p-3 xl:p-16 md:hidden lg:block p-2  xl:pl-0 xl:pt-8">
        <UserList />
      </div>
    </main>
  );
}
