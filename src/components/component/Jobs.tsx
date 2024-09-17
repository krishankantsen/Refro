'use client'
import { SearchIcon } from 'lucide-react';
import React, { use, useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import CenterTop from './CenterTop';
import { JobCard } from './job-card';
import gql from 'graphql-tag';
import client from '@/lib/apolloClient';
import { Skeleton } from '../ui/skeleton';
import JobCardSkeleton from '../ui/joppostskeloton';

const GetAllPost_query = gql`
  query GetAllPosts {
  GetAllPosts {
    id
    userId
    companyName
    companyLogo
    jobTitle
    jobDescription
    jobSalary
    skills
    link
  }
}
`;

export type Job = 
{
  companyName:string
  companyLogo:string
  jobTitle:string
  jobDescription:string;
  jobSalary:string;
  skills:string[]
  link:string
}

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const[pending,setPending]=useState(true)
  const [data,setData]=useState<Job[]>([]);
  const GetAllJobPost = async()=>{
    const response = await client.query({
      query:GetAllPost_query
    })
    setData(response.data.GetAllPosts)
    setPending(false)
  }
  useEffect(() => {
    GetAllJobPost()
  }, []);
  const filteredJobs = data.filter((job) => {
    const jobRole = job.jobTitle.toLowerCase();
    const companyName = job.companyName.toLowerCase();
    const skills = job.skills.join(' ').toLowerCase();
    const description = job.jobDescription.toLowerCase();

    const searchQueryLower = searchQuery.toLowerCase();
 
    return (
      jobRole.includes(searchQueryLower) ||
      companyName.includes(searchQueryLower) ||
      skills.includes(searchQueryLower) ||
      description.includes(searchQueryLower)
    );
  });

  return (
    <div className=' flex flex-col gap-3'>
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
      {pending?<><JobCardSkeleton/></>:<>
        {filteredJobs.map((job, index) => (
        <JobCard
          key={index}
          jobTitle={job.jobTitle}
          companyName={job.companyName}
          companyLogo={job.companyLogo}
          skills={job.skills}
          jobSalary={job.jobSalary}
          jobDescription={job.jobDescription}
          link={job.link}
        />
      ))}
      </>}
     
    </div>
  );
};

export default Jobs;