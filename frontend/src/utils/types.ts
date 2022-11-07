

export interface UserType {
    id: string
    name: string
    email: string
    password: string
  }
  
  export interface CompanyType {
    id: string
    name: string
    description: string
    createdAt: Date
    jobs:JobType[]
  }
export interface JobType {
    id: string
    title: string
    description: string
    companyId: string
    author: string
    createdAt: Date
    company:CompanyType
    user: UserType
  }

 export interface JobProps {
    title: string;
    description: string;
    company: CompanyType;
  }

  export interface CompanyProps {
    name: string;
    description: string;
    jobs: JobType[];
  }