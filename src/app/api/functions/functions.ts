import prisma from "@/lib/prisma";

export async function CreatePortFolio(data: any) {
  const CheckPortFolioExists = await prisma.portfolio.findFirst({
    where:{
      userId:parseInt(data.userId)
    }
  })

  if(CheckPortFolioExists){
    const Portfolio = await prisma.portfolio.update({
      where:{
       id:CheckPortFolioExists.id
      }, 
      data: {
         link: data.link,
         porPic:data.porPic
       },
     });
     if (Portfolio) {
      return {
        success: true,
        error: "",
        Portfolio:Portfolio
      };
    }
  }else{
    const CreatePortFolios = await prisma.portfolio.create({
      data: {
       userId:  parseInt(data.userId),
       link: data.link,
       porPic:data.porPic
     },});

     if (CreatePortFolios) {
      return {
        success: true,
        error: "",
        Portfolio:CreatePortFolios
      };
    }
  }
   
 
  
  
}

export async function CreateJobPost(data: any) {

 
  const JobPost = await prisma.jobpost.create(
    {
data: {
  userId: parseInt(data.userId),
  jobTitle: data.jobTitle,
  jobDescription: data.jobDescription,
  jobSalary: data.jobSalary,
  skills: data.skills,
  link: data.link,
  companyName: data.companyName,
  companyLogo: data.companyLogo,
},
    }
  );

  if (JobPost) {
    return {
      success: true,
      error: "",
    };
  } else {
    return {
      success: false,
      error: "Something went wrong",
    };
  }
}
export const GetAllPosts = async()=>{
  const posts = await prisma.jobpost.findMany({
    
    select: {
      id: true,
      userId: true,
      jobTitle: true,
      jobDescription: true,
      jobSalary: true,
      skills: true,
      link: true,
      companyName: true,
      companyLogo: true,
    },}
  )

      return posts;
}
export const GetAllPlacedUser = async (userId: number) => {
  try {
    const placedUsers = await prisma.user.findMany({
      where: {
        role: 'Placed',
        id: {
          not: userId,
        },
      },
      select: {
        name: true,
        jobRole: true,
        profilePic: true,
      },
    });

   
    return placedUsers;
  } catch (error) {
    console.error('Error fetching placed users:', error);
    // return [];
  }
};
