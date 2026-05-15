// Data for employment and projects

const the_home_depot = {
  start: "FEB 2026",
  end: "CURRENT",
  title: "Sales Associate",
  company: "The Home Depot",
  location: "Ashland, VA, United States",
  duties: [
    "Resolved customer issues and supported daily operations in a fast-paced retail environment",
    "Communicated technical and product information clearly to customers with varying experience levels",
    "Maintained inventory accuracy and organized merchandise while balancing multiple priorities",
  ],
};

const polycon_industries = {
  start: "SEP 2025",
  end: "DEC 2025",
  title: "Utility Packer",
  company: "Polycon Industries",
  location: "Winfield, IN, United States",
  duties: [
    "Verified and ensure accuracy of production orders",
    "Adhered strictly to all safety protocols and report safety breakdowns promptly",
    "Supported efficient plant operations and maintain compliance with quality standards",
  ],
};

const unifi_service_super = {
  start: "MAY 2024",
  end: "SEP 2024",
  title: "Bag Operations Supervisor",
  company: "Unifi Services",
  location: "Phoenix, AZ, United States",
  duties: [
    "Supervised baggage operations with a focus on efficiency and accuracy, fostering a motivated team environment",
    "Provided guidance and mentorship to team members, promoting a culture of learning and continuous improvement in baggage operations",
    "Implemented baggage operations procedures that reduced bag handling errors by 20%",
  ],
};

const unifi_service = {
  start: "JAN 2024",
  end: "MAY 2024",
  title: "Bag Operations Agent",
  company: "Unifi Services",
  location: "Phoenix, AZ, United States",
  duties: [
    "Identified and corrected misplaced fault codes to our Phoenix station",
    "Analyzed causes of failure to deliver passenger luggage and created improvement reports",
    "Served as a point of contact for passengers with luggage issues",
    "Collaborated with airlines to develop efficient processes for baggage handling and ensure smooth transfer of luggage between flights",
  ],
};

const self_math_tutor = {
  start: "APR 2023",
  end: "MAR 2024",
  title: "Freelance Tutor",
  company: "Self-Employed",
  location: "Phoenix, AZ, United States",
  duties: [
    "Simplified complicated math problems and presented them in an approachable manner",
    "Facilitated an open environment where asking questions was encouraged",
    "Gave insights into the most efficient way students could learn and raise their class grades",
    "Conducted reviews and practice tests to assure students were appropriately prepared for their exams",
    "Developed and implemented personalized learning plans for each student based on their learning style and strengths, fostering a more effective educational experience",
  ],
};

const fs_dev = {
  start: "AUG 2022",
  end: "OCT 2022",
  title: "Full Stack Developer",
  company: "Cook Systems",
  location: "REMOTE",
  duties: [
    "Utilized advanced front-end technologies and design principles to create visually appealing and user-friendly interfaces for web applications, ensuring a seamless and engaging user experience that aligns with the employer's brand and market positioning",
    "Implemented efficient and scalable backend solutions using cutting-edge technologies to enhance system performance and meet the dynamic demands of the market",
  ],
};

const math_tutor = {
  start: "APR 2021",
  end: "FEB 2022",
  title: "Math Tutor",
  company: "Mathnasium",
  location: "Phoenix, AZ, United States",
  duties: [
    "Tasked with ensuring high school students increased their overall understanding of core math topics, such as Algebra, Algebra II, Geometry, Trigonometry, Pre-Calculus, and Calculus",
    "Implemented creative and engaging math challenges and competitions to promote student participation and enhance their problem-solving skills",
  ],
};

const master_elec = {
  start: "NOV 2018",
  end: "JUN 2019",
  title: "Quality Assurance Associate",
  company: "Master Electronics",
  location: "Phoenix, AZ, United States",
  duties: [
    "Increased business shipping efficiency throughout the entire warehouse",
    "Evaluated performance reports to identify areas where efficiency could be increased",
    "Identified issues where shipments were processed incorrectly, whether wrong order or broken/defective parts, and promptly addressed them",
    "Ensured all safety protocols were always followed throughout the warehouse by performing random safety audits",
  ],
};

const micro_tronics = {
  start: "MAR 2018",
  end: "OCT 2018",
  title: "Quality Assurance Lab Technician",
  company: "Micro-tronics, Inc",
  location: "Tempe, AZ, United States",
  duties: [
    "Guaranteed products met and surpassed aerospace industry standards",
    "Tested received elastomer products ensuring they met/surpassed ISO9001 quality standards",
    "Performed product inspections confirming our products were within allowable tolerances",
    "Ensured that all safety protocols were always followed throughout the warehouse by performing random safety audits",
    "Conducted regular calibration checks on testing equipment to maintain accuracy and reliability in quality assurance assessments, ensuring consistent and precise results for all products tested",
  ],
};

const target = {
  start: "NOV 2017",
  end: "MAR 2018",
  title: "Logistics Team Member",
  company: "Target Corporation",
  location: "Phoenix, AZ, United States",
  duties: [
    "Ensured warehouse inventory accuracy and updated information as promptly as possible",
    "Processed different warehouse orders into database and flagged incorrect information",
    "Performed monthly warehouse audits ensuring product correctness",
    "Implemented quality control measures to ensure accurate and timely processing of warehouse orders, including conducting regular audits to identify and correct errors in product information",
  ],
};

const best_buy = {
  start: "JUN 2014",
  end: "OCT 2017",
  title: "Mobile Sales Associate",
  company: "Best Buy",
  location: "Glendale, AZ, United States",
  duties: [
    "Utilized knowledge of various mobile devices and accessories to recommend solutions that meet each customer's individual needs and preferences, ultimately enhancing their overall shopping experience",
    "Attended product workshops staying up-to-date on newest technology and trends available",
    "Demonstrate exceptional interpersonal skills by actively engaging with customers to understand their needs and providing personalized recommendations to drive sales and customer satisfaction",
  ],
};

export const work_history = [
  the_home_depot,
  polycon_industries,
  unifi_service_super,
  unifi_service,
  self_math_tutor,
  fs_dev,
  math_tutor,
  master_elec,
  micro_tronics,
  target,
  best_buy,
];

export const education = [
  {
    start: "AUG 2018",
    end: " MAY 2020",
    degree: "Associate of Science",
    school: "Glendale Community College",
    location: "Glendale, AZ, United States",
    major: "Software Engineering",
    extras: ["GPA: 3.52"],
  },
];

const photography_blog = {
  title: "Photography Blog - Full Stack",
  tech: "Next.js, TypeScript, Express, Python, FastAPI, Prisma, PostgreSQL, Immich API, Docker, TailwindCSS",
  duties: [
    "Designed and built a full-stack blogging platform with custom authentication, role-based access (admin/user), and protected admin routes",
    "Implemented a nested comment system supporting replies, pagination, lazy loading, and accurate total comment counts across threads",
    "Developed a real-time notification system for comment activity with read/unread state management",
    "Integrated Immich photo hosting, automatically creating albums for posts with uploaded images and persisting album metadata",
    "Structured backend APIs using a controller/service architecture to improve maintainability and scalability",
  ],
};

const davos_proj = {
  title: "Social Media and E-Commerce Platform - Google Cloud Platform (GCP)",
  tech: "React, TypeScript, Tailwind CSS, GCP (Cloud Run, Functions, Storage), Google Maps API",
  duties: [
    "Built frontend features including social sharing, event RSVPs, podcast streaming, and merchandise storefronts",
    "Integrated Google Maps API to enable geolocation-based features and event discovery",
    "Developed and deployed backend services using Cloud Run and Cloud Functions",
    "Implemented responsive UI designs to support mobile and desktop users",
    " Collaborated on feature planning and architecture to deliver a cohesive, scalable platform",
  ],
};

const resume_proj = {
  title: "Cloud Resume Challenge - Amazon Web Services (AWS)",
  tech: "S3, CloudFront, Route 53, Lambda, DynamoDB, JavaScript, React, Jest, GitHub Actions",
  duties: [
    "Built and deployed a serverless resume website using AWS S3, CloudFront, and Route 53 with a custom domain",
    "Implemented a visitor counter using AWS Lambda and DynamoDB",
    "Automated infrastructure provisioning and deployments using Infrastructure as Code and GitHub Actions",
    "Added automated testing to validate application behavior during CI/CD workflows",
    "Configured global CDN distribution to improve performance and availability",
  ],
};

export const projects = [photography_blog, resume_proj, davos_proj];
