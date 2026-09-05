export interface CourseSection {
  title: string;
  lectures: number;
  length: string;
}

export interface Course {
  slug: string;
  name: string;
  fullTitle: string;
  headline: string;
  description: string;
  language: string;
  rating: number;
  ratingsCount?: number;
  students: number;
  totalLength: string;
  lecturesCount: number;
  sectionsCount: number;
  lastUpdated: string;
  image: string;
  udemyUrl: string;
  learn: string[];
  includes: string[];
  requirements: string[];
  sections: CourseSection[];
  tags: string[];
}

export const courses: Course[] = [
  {
    slug: "asp-net-core-web-api",
    name: "Web API .NET 8 + Clean Architecture",
    fullTitle: "ASP.NET Core 8 Web API: Clean architecture + Azure services",
    headline:
      "Build .NET 8 APIs in Clean Architecture, user Identity system and Azure deployment using CI/CD + practical exercises",
    description:
      "This comprehensive course empowers you with the knowledge and skills to create modern web APIs using the powerful combination of ASP.NET Core 8, Clean Architecture, and Azure services. From REST fundamentals, through CQRS with MediatR, authentication and authorization with ASP.NET Identity, up to automated tests and CI/CD deployment to the Azure cloud.",
    language: "English",
    rating: 4.6,
    ratingsCount: 1165,
    students: 7184,
    totalLength: "14h 4m",
    lecturesCount: 112,
    sectionsCount: 14,
    lastUpdated: "2/2025",
    image: "/courses/asp-net-core-web-api.jpg",
    udemyUrl:
      "https://www.udemy.com/course/aspnet-core-web-api-clean-architecture-azure/?referralCode=15F1A59DBFE69895DDB6&couponCode=BACKTOSCHOOL2026",
    learn: [
      "Create a backend for a web application that will add, modify, delete, or return data",
      "Build an MS SQL database based on C# classes",
      "Add authentication and authorization for API users",
      "Create a Clean architecture solution following CQRS",
      "Implement custom middleware",
      "Handle files - return them from the API and upload to the server",
      "Log application information or errors to text files using Serilog",
      "Write CI/CD pipelines to automatically build and deploy the app",
      "Write automated unit & integration tests",
      "Deploy the application to the Azure cloud",
    ],
    includes: [
      "14 hours on-demand video",
      "3 articles",
      "1 downloadable resource",
      "Access on mobile and TV",
      "Closed captions",
      "Certificate of completion",
    ],
    requirements: [
      "Basic C# knowledge (LINQ, async/await and generic collections)",
    ],
    sections: [
      { title: "Course introduction", lectures: 4, length: "8min" },
      { title: "REST Web API", lectures: 11, length: "1hr 6min" },
      { title: "Solution architecture", lectures: 4, length: "16min" },
      { title: "Setting up infrastructure", lectures: 6, length: "43min" },
      { title: "API Controller", lectures: 9, length: "1hr 14min" },
      { title: "CQRS + MediatR", lectures: 5, length: "42min" },
      { title: "Web API utilities", lectures: 7, length: "55min" },
      { title: "Subentities", lectures: 6, length: "39min" },
      { title: "Authentication", lectures: 8, length: "57min" },
      { title: "Authorization", lectures: 11, length: "1hr 43min" },
      { title: "Results pagination", lectures: 7, length: "58min" },
      { title: "Automated testing", lectures: 14, length: "1hr 46min" },
      {
        title: "Azure Cloud deployment and services",
        lectures: 13,
        length: "2hr 12min",
      },
      {
        title: "Continuous Integration and Continuous Deployment",
        lectures: 7,
        length: "45min",
      },
    ],
    tags: [".NET 8", "Web API", "Clean Architecture", "CQRS", "Azure"],
  },
  {
    slug: "entity-framework-core",
    name: "Entity Framework Core Essentials",
    fullTitle: "Hands on C# .NET: Entity Framework Core",
    headline:
      "Complete Entity Framework Core Course: Covering Key Concepts, Performance, and Practical Exercises",
    description:
      "Creating mobile, web, or desktop applications almost always requires a robust database. This practical course teaches Entity Framework Core from its fundamentals to advanced techniques, including database creation, relationships, migrations, data seeding, CRUD operations, efficient queries, advanced features, and performance optimization.",
    language: "English",
    rating: 4.5,
    ratingsCount: 73,
    students: 422,
    totalLength: "8h 20m",
    lecturesCount: 53,
    sectionsCount: 8,
    lastUpdated: "5/2025",
    image: "/courses/entity-framework-core.jpg",
    udemyUrl:
      "https://www.udemy.com/course/c-sharp-net-entity-framework-core/?referralCode=2023EF7C360F8338252F&couponCode=BACKTOSCHOOL2026",
    learn: [
      "Create databases based on C# classes",
      "Write efficient database queries using LINQ",
      "Apply database schema changes through migrations",
      "Manage data and operate on data sets",
    ],
    includes: [
      "8 hours on-demand video",
      "Access on mobile and TV",
      "Certificate of completion",
    ],
    requirements: ["Proficiency in C#"],
    sections: [
      { title: "Introduction", lectures: 3, length: "6min" },
      {
        title: "Creating databases - Code first approach",
        lectures: 12,
        length: "1hr 39min",
      },
      { title: "Migrations", lectures: 6, length: "51min" },
      { title: "Data seeding", lectures: 4, length: "21min" },
      { title: "Queries", lectures: 10, length: "1hr 52min" },
      { title: "Advanced topics", lectures: 8, length: "1hr 37min" },
      { title: "Entity Framework performance", lectures: 7, length: "58min" },
      { title: "Extras", lectures: 3, length: "57min" },
    ],
    tags: ["C#", ".NET", "Entity Framework Core", "SQL", "LINQ"],
  },
  {
    slug: "azure-devops",
    name: "Azure DevOps Fundamentals",
    fullTitle: "Comprehensive Azure DevOps course for everyone",
    headline:
      "Build a solid foundation in Azure DevOps and create an effective work environment for your development team",
    description:
      "Automate your build and deployment processes with Azure DevOps. This course walks you through all key services - Boards, Repos, Pipelines, Artifacts and Test Plans - and shows how to configure projects, permissions and automation to create an effective work environment for your development team.",
    language: "English",
    rating: 4.5,
    students: 932,
    totalLength: "6h",
    lecturesCount: 50,
    sectionsCount: 8,
    lastUpdated: "2/2025",
    image: "/courses/azure-devops.jpg",
    udemyUrl:
      "https://www.udemy.com/course/complete-azure-devops/?referralCode=E1597C6B22F31193C91D&couponCode=BACKTOSCHOOL2026",
    learn: [
      "You will learn all the most important features of Azure DevOps",
      "You will learn how to create CI/CD pipelines",
      "You will be able to manage the project and its backlog",
      "You will configure the project and group permissions to suit your needs",
    ],
    includes: [
      "6 hours on-demand video",
      "Access on mobile and TV",
      "Certificate of completion",
    ],
    requirements: ["No prior Azure DevOps experience required"],
    sections: [
      { title: "Azure DevOps - Introduction", lectures: 6, length: "30min" },
      { title: "Azure DevOps - Boards", lectures: 7, length: "59min" },
      { title: "Azure DevOps - Repos", lectures: 6, length: "39min" },
      { title: "Azure DevOps - Pipelines", lectures: 14, length: "2hr 15min" },
      { title: "Azure DevOps - Artifacts", lectures: 6, length: "35min" },
      { title: "Azure DevOps - Tests plan", lectures: 5, length: "27min" },
      { title: "Azure DevOps Administration", lectures: 3, length: "27min" },
      { title: "Azure DevOps Automation", lectures: 3, length: "23min" },
    ],
    tags: ["Azure DevOps", "CI/CD", "Pipelines", "Boards", "Repos"],
  },
];
