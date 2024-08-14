import prisma from "@/lib/prisma";

export async function CreatePortFolio(data: any) {
  const Portfolio = await prisma.portfolio.create({
    data: {
      userId: data.id,
      link: data.link,
      porPic: data.porPic,
    },
  });
  if (Portfolio) {
    return {
      success: true,
      error: "",
    };
  }
}

// export async function CreateJobPost(data: any) {
//   const JobPost = await prisma.jobpost.create({
//     data: {
//       userId: data.id,
//       jobTitle: data.jobTitle,
//       jobDescription: data.jobDescription,
//       jobSalary: data.jobSalary,
//       skills: data.skills,
//       link: data.link,
//     },
//   });

//   if (JobPost) {
//     return {
//       success: true,
//       error: "",
//     };
//   } else {
//     return {
//       success: false,
//       error: "Something went wrong",
//     };
//   }
// }