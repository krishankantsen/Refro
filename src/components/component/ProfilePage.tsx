import { ChevronLeft, ChevronRight, Pencil, Save, X } from 'lucide-react'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar'
import { Label } from '@radix-ui/react-dropdown-menu'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { JobCard } from './job-card'
import { DemoPortfolioPic } from '../utils/skills'

function ProfilePage(props: any) {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Software developer and tech enthusiast',
    avatar: 'https://i.pravatar.cc/150?img=68'
  })
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 3

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfile(prev => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    // Here you would typically send the updated profile to your backend
    console.log('Saving profile:', profile)
    setIsEditing(false)
  }

  return (
    <div className='fixed  top-0 left-0 w-screen h-screen  backdrop-blur-lg flex flex-col gap-2 items-center p-2' >
      <X onClick={()=>props.setIsProfile(!props.isProfile)} className='cursor-pointer h-16'/>
            <Card className="lg:w-[51%] md:w-[60%] mx-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Profile</CardTitle>
          <Button variant="ghost" size="icon" onClick={() => setIsEditing(!isEditing)}>
            <Pencil className="h-4 w-4" />
            <span className="sr-only">Edit profile</span>
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center space-y-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src={profile.avatar} alt={profile.name} />
              <AvatarFallback>{profile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            {isEditing ? (
              <form className="space-y-4 w-full">
                <div>
                  
                  <Input id="name" name="name" value={profile.name} onChange={handleInputChange} />
                </div>
                <div>
                 
                  <Input id="email" name="email" type="email" value={profile.email} onChange={handleInputChange} />
                </div>
                <div>
                
                  <Input id="bio" name="bio" value={profile.bio} onChange={handleInputChange} />
                </div>
              </form>
            ) : (
              <div className="text-center">
                <h2 className="text-2xl font-bold">{profile.name}</h2>
                <p className="text-gray-500">{profile.email}</p>
                <p className="mt-2">{profile.bio}</p>
              </div>
            )}
          </div>
        </CardContent>
        {isEditing && (
          <CardFooter>
            <Button className="w-full" onClick={handleSave}>
              <Save className="mr-2 h-4 w-4" /> Save Changes
            </Button>
          </CardFooter>
        )}
      </Card>

      <Card className="lg:w-[51%] md:w-[60%] mx-auto p-8 overflow-y-scroll">
      <CardHeader>
          <CardTitle>My Posts</CardTitle>
        </CardHeader>
        <CardContent className='flex flex-col gap-3' >
          <JobCard 
          jobTitle={"job.jobTitle"}
          companyName={"job.companyName"}
          companyLogo={DemoPortfolioPic}
          skills={["job.skills"]}
          jobSalary={"job.jobSalar"}
          jobDescription={"job.jobDescription"}
          link={"job.link"}
        />
         <JobCard 
          jobTitle={"job.jobTitle"}
          companyName={"job.companyName"}
          companyLogo={DemoPortfolioPic}
          skills={["job.skills"]}
          jobSalary={"job.jobSalar"}
          jobDescription={"job.jobDescription"}
          link={"job.link"}
        /></CardContent>
        <CardFooter></CardFooter>
      
      </Card>
    </div>
  )
}


export default ProfilePage
