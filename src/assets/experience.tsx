interface JobData {
    frontmatter: {
      title: string;
      company: string;
      location: string;
      range: string;
      url: string;
    };
    html: string;
}

export const jobsData: JobData[] = [
    {
      frontmatter: {
        title: 'Software Engineer',
        company: 'Siemens',
        location: 'Pune',
        range: 'March 2024 - Present',
        url: 'https://www.siemens-advanta.com'
      },
      html: `<ul>
                <li>Developed scalable APIs from scratch, following best design patterns for bulk data processing.</li>
                <li>Enhanced event processing efficiency by 5x, optimizing AWS SQS and DynamoDB usage.</li>
                <li>Designed and implemented a data masking utility to ensure compliance with ISO certification requirements.</li>
                <li>Built custom utility scripts and automation tools to streamline development and testing, improving team efficiency.</li>
                <li>Worked closely with product owners and engineers to translate creative concepts into production-ready solutions.</li>
                <li>Delivered high-quality, robust production code in Golang and Java across multiple services.</li>
            </ul>`,
    },
    {
      frontmatter: {
        title: 'Developer Intern',
        company: 'Embedded Creations',
        location: 'Nagpur',
        range: 'April 2023 - Jan 2024',
        url: 'https://embeddedcreation.in/index.php'
      },
      html: `<ul>
                <li>Designed and developed E-Nirikshan, an Android application tailored for schools and buildings under the Tribal Department Nagpur, contributing to the enhancement of educational evaluation processes.</li>
                <li>Implemented a robust MVVM architecture for the Android application using Kotlin, leveraging the Retrofit library for seamless communication between the frontend and backend.</li>
                <li>Spearheaded the development of a scalable backend system using PHP and utilized MySQL as the database, ensuring efficient data management and retrieval.</li>
                <li>Played a key role in the creation of a comprehensive portal for E-Nirikshan, streamlining the evaluation process and providing real-time insights into the performance of schools and hostels under the Tribal Department Nagpur.</li>
            </ul>`
    },
  ];