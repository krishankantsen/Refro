'use client'
import { SearchIcon } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import CenterTop from './CenterTop';
import { JobCard } from './job-card';
const data=[
    {
      "jobRole": "Frontend Developer",
      "companyName": "Tech Solutions Inc.",
      "companyLogo": "/placeholder-user.jpg",
      "skills": ["JavaScript", "React", "HTML", "CSS"],
      "salary": "$80,000 - $100,000 per year",
      "description": "We are looking for a skilled Frontend Developer to join our team. You will be responsible for developing user interfaces using JavaScript frameworks like React, and ensuring the application's responsiveness and performance."
    },
    {
      "jobRole": "Data Scientist",
      "companyName": "Data Insights Co.",
      "companyLogo": "/placeholder-user.jpg",
      "skills": ["Python", "Machine Learning", "Data Analysis"],
      "salary": "$90,000 - $110,000 per year",
      "description": "Data Insights Co. is seeking a Data Scientist with strong programming skills in Python and experience in machine learning algorithms. You will work on analyzing large datasets to uncover insights and make data-driven decisions."
    },
    {
      "jobRole": "UX/UI Designer",
      "companyName": "Creative Designs Ltd.",
      "companyLogo": "/placeholder-user.jpg",
      "skills": ["UI Design", "Adobe XD", "Wireframing", "Prototyping"],
      "salary": "$70,000 - $90,000 per year",
      "description": "Join our team as a UX/UI Designer and help create intuitive and user-friendly interfaces. You should have experience with tools like Adobe XD and a strong portfolio showcasing your design skills."
    },
    {
      "jobRole": "Backend Developer",
      "companyName": "Cloud Systems Co.",
      "companyLogo": "/placeholder-user.jpg",
      "skills": ["Java", "Spring Boot", "SQL", "RESTful APIs"],
      "salary": "$85,000 - $105,000 per year",
      "description": "Cloud Systems Co. is looking for a Backend Developer proficient in Java and Spring Boot. You will be responsible for designing and implementing backend services, ensuring scalability and performance."
    },
    {
      "jobRole": "Marketing Manager",
      "companyName": "Global Marketing Solutions",
      "companyLogo": "/placeholder-user.jpg",
      "skills": ["Digital Marketing", "SEO", "Campaign Management", "Analytics"],
      "salary": "$95,000 - $115,000 per year",
      "description": "Global Marketing Solutions is hiring a Marketing Manager to lead digital marketing campaigns and strategies. You should have a strong background in SEO, analytics, and proven experience in managing marketing campaigns."
    },
    {
      "jobRole": "Product Manager",
      "companyName": "Innovative Tech Ventures",
      "companyLogo": "/placeholder-user.jpg",
      "skills": ["Product Management", "Agile", "Market Research", "Product Development"],
      "salary": "$100,000 - $120,000 per year",
      "description": "Join Innovative Tech Ventures as a Product Manager and drive the development and launch of new products. You should have experience in Agile methodologies, market research, and defining product roadmaps."
    },
    {
      "jobRole": "Network Engineer",
      "companyName": "Network Solutions Group",
      "companyLogo": "/placeholder-user.jpg",
      "skills": ["Networking", "Cisco", "Firewalls", "Network Security"],
      "salary": "$85,000 - $105,000 per year",
      "description": "Network Solutions Group is seeking a Network Engineer with expertise in networking technologies. You will be responsible for designing and implementing network solutions, ensuring the security and reliability of our network infrastructure."
    },
    {
      "jobRole": "Financial Analyst",
      "companyName": "Financial Insights Corp.",
      "companyLogo": "/placeholder-user.jpg",
      "skills": ["Financial Analysis", "Excel", "Financial Modeling", "Budgeting"],
      "salary": "$80,000 - $100,000 per year",
      "description": "Financial Insights Corp. is hiring a Financial Analyst to analyze financial data, create forecasts, and support strategic decision-making. Proficiency in Excel and financial modeling techniques is required."
    },
    {
      "jobRole": "HR Manager",
      "companyName": "People Dynamics Ltd.",
      "companyLogo": "/placeholder-user.jpg",
      "skills": ["Human Resources", "Employee Relations", "Recruitment", "HR Policies"],
      "salary": "$90,000 - $110,000 per year",
      "description": "Join People Dynamics Ltd. as an HR Manager and oversee recruitment, employee relations, and HR policies. You should have a strong background in human resources and experience in managing HR functions."
    },
    {
      "jobRole": "Sales Executive",
      "companyName": "Sales Innovations Inc.",
      "companyLogo": "/placeholder-user.jpg",
      "skills": ["Sales", "Negotiation", "Customer Relationship Management", "Business Development"],
      "salary": "$85,000 - $105,000 per year",
      "description": "Sales Innovations Inc. is seeking a Sales Executive to drive sales initiatives and expand our customer base. You should have a proven track record in sales, excellent negotiation skills, and the ability to build strong client relationships."
    }
  ] 

export type Job = {
  jobRole: string;
  companyName: string;
  companyLogo: string;
  skills: string[];
  salary: string;
  description: string;
};

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredJobs = data.filter((job) => {
    const jobRole = job.jobRole.toLowerCase();
    const companyName = job.companyName.toLowerCase();
    const skills = job.skills.join(' ').toLowerCase();
    const description = job.description.toLowerCase();

    const searchQueryLower = searchQuery.toLowerCase();

    return (
      jobRole.includes(searchQueryLower) ||
      companyName.includes(searchQueryLower) ||
      skills.includes(searchQueryLower) ||
      description.includes(searchQueryLower)
    );
  });

  return (
    <div>
      <CenterTop />
      <Card className="w-full">
        <CardContent className="">
          <div className="flex items-center space-x-2 mt-5 align-middle">
            <Input
              type="search"
              placeholder="Search..."
              className="flex-1"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              
            />
            <Button className="shrink-0">
              <SearchIcon className="w-5 h-5" />
            </Button>
          </div>
        </CardContent>
      </Card>
      {filteredJobs.map((job, index) => (
        <JobCard
          key={index}
          jobRole={job.jobRole}
          companyName={job.companyName}
          companyLogo={job.companyLogo}
          skills={job.skills}
          salary={job.salary}
          description={job.description}
        />
      ))}
    </div>
  );
};

export default Jobs;