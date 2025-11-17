// Static data for EduSphere LMS

// Course data
const courses = [
    {
        id: 1,
        title: "Web Design Fundamentals",
        category: "Tech",
        description: "Learn the basics of modern web design, including HTML5, CSS3, and responsive layouts. Perfect for beginners.",
        instructor: {
            name: "Sarah Johnson",
            email: "sarah.j@edusphere.com",
            bio: "Senior Web Designer with 10+ years of experience"
        },
        overview: "This comprehensive course covers everything you need to know about web design. From understanding the fundamentals of HTML and CSS to creating responsive, beautiful websites that work on all devices. You'll learn about color theory, typography, layout principles, and modern design trends.",
        resources: [
            { name: "Course Slides (PDF)", url: "#", icon: "📄" },
            { name: "Design Templates Pack", url: "#", icon: "🎨" },
            { name: "Color Palette Guide", url: "#", icon: "🌈" },
            { name: "Typography Cheat Sheet", url: "#", icon: "📝" }
        ]
    },
    {
        id: 2,
        title: "AI Basics & Machine Learning",
        category: "Tech",
        description: "Introduction to artificial intelligence and machine learning concepts. Explore the future of technology.",
        instructor: {
            name: "Dr. Michael Chen",
            email: "m.chen@edusphere.com",
            bio: "AI Researcher and Professor with expertise in ML algorithms"
        },
        overview: "Dive into the fascinating world of artificial intelligence and machine learning. This course introduces you to core concepts including neural networks, supervised and unsupervised learning, and practical applications of AI in various industries. No prior programming experience required.",
        resources: [
            { name: "AI Fundamentals Guide", url: "#", icon: "🤖" },
            { name: "ML Algorithms Reference", url: "#", icon: "📊" },
            { name: "Python Code Examples", url: "#", icon: "💻" },
            { name: "Case Studies Collection", url: "#", icon: "📚" }
        ]
    },
    {
        id: 3,
        title: "Data Ethics & Privacy",
        category: "Business",
        description: "Understand the ethical implications of data collection and learn to protect user privacy in the digital age.",
        instructor: {
            name: "Emily Rodriguez",
            email: "e.rodriguez@edusphere.com",
            bio: "Privacy Law Expert and Data Protection Consultant"
        },
        overview: "In an era where data is the new oil, understanding data ethics and privacy is crucial. This course covers GDPR, data protection principles, ethical data collection practices, and how to build privacy-first products. Essential for anyone working with user data.",
        resources: [
            { name: "GDPR Compliance Checklist", url: "#", icon: "✅" },
            { name: "Privacy Policy Template", url: "#", icon: "🔒" },
            { name: "Ethical Guidelines PDF", url: "#", icon: "📋" },
            { name: "Case Law Analysis", url: "#", icon: "⚖️" }
        ]
    },
    {
        id: 4,
        title: "Digital Marketing Strategies",
        category: "Business",
        description: "Master the art of digital marketing with SEO, social media, content marketing, and analytics.",
        instructor: {
            name: "James Wilson",
            email: "j.wilson@edusphere.com",
            bio: "Digital Marketing Strategist with proven track record"
        },
        overview: "Learn how to create effective digital marketing campaigns that drive results. This course covers search engine optimization (SEO), social media marketing, email campaigns, content strategy, and analytics. You'll learn to measure ROI and optimize your marketing efforts.",
        resources: [
            { name: "SEO Best Practices Guide", url: "#", icon: "🔍" },
            { name: "Social Media Templates", url: "#", icon: "📱" },
            { name: "Analytics Dashboard Setup", url: "#", icon: "📈" },
            { name: "Content Calendar Template", url: "#", icon: "📅" }
        ]
    },
    {
        id: 5,
        title: "Graphic Design Mastery",
        category: "Creative",
        description: "Create stunning visuals with professional design techniques, color theory, and composition principles.",
        instructor: {
            name: "Lisa Anderson",
            email: "l.anderson@edusphere.com",
            bio: "Award-winning Graphic Designer and Creative Director"
        },
        overview: "Unlock your creative potential with this comprehensive graphic design course. Learn about design principles, color theory, typography, composition, and how to use design tools effectively. Perfect for aspiring designers and marketers who want to create better visuals.",
        resources: [
            { name: "Design Principles Handbook", url: "#", icon: "🎨" },
            { name: "Color Theory Guide", url: "#", icon: "🌈" },
            { name: "Typography Rules PDF", url: "#", icon: "✍️" },
            { name: "Design Assets Library", url: "#", icon: "📦" }
        ]
    },
    {
        id: 6,
        title: "JavaScript Fundamentals",
        category: "Tech",
        description: "Master JavaScript from scratch. Learn variables, functions, DOM manipulation, and modern ES6+ features.",
        instructor: {
            name: "David Kim",
            email: "d.kim@edusphere.com",
            bio: "Full-stack Developer and JavaScript Expert"
        },
        overview: "JavaScript is the language of the web. This course takes you from zero to hero, covering everything from basic syntax to advanced concepts like closures, promises, and async/await. You'll build real projects and learn best practices used by professional developers.",
        resources: [
            { name: "JavaScript Cheat Sheet", url: "#", icon: "📝" },
            { name: "Practice Exercises", url: "#", icon: "💪" },
            { name: "Code Examples Repository", url: "#", icon: "💻" },
            { name: "ES6+ Features Guide", url: "#", icon: "🚀" }
        ]
    },
    {
        id: 7,
        title: "Creative Writing Workshop",
        category: "Creative",
        description: "Develop your writing skills and learn to craft compelling stories, characters, and narratives.",
        instructor: {
            name: "Robert Martinez",
            email: "r.martinez@edusphere.com",
            bio: "Published Author and Creative Writing Professor"
        },
        overview: "Whether you're writing fiction, non-fiction, or content for your blog, this course will help you improve your writing skills. Learn about story structure, character development, dialogue, pacing, and how to find your unique voice as a writer.",
        resources: [
            { name: "Writing Prompts Collection", url: "#", icon: "✍️" },
            { name: "Story Structure Template", url: "#", icon: "📖" },
            { name: "Character Development Guide", url: "#", icon: "👤" },
            { name: "Editing Checklist", url: "#", icon: "✓" }
        ]
    },
    {
        id: 8,
        title: "Project Management Essentials",
        category: "Business",
        description: "Learn to manage projects effectively using agile methodologies, tools, and best practices.",
        instructor: {
            name: "Amanda Taylor",
            email: "a.taylor@edusphere.com",
            bio: "Certified PMP with 15+ years managing enterprise projects"
        },
        overview: "Master the art and science of project management. This course covers project planning, risk management, team coordination, agile methodologies, and popular project management tools. Essential skills for anyone leading teams or managing initiatives.",
        resources: [
            { name: "Project Planning Template", url: "#", icon: "📋" },
            { name: "Agile Methodology Guide", url: "#", icon: "🔄" },
            { name: "Risk Assessment Framework", url: "#", icon: "⚠️" },
            { name: "Team Communication Best Practices", url: "#", icon: "💬" }
        ]
    }
];

// Quiz data - organized by course ID
const quizzes = {
    1: {
        courseId: 1,
        courseTitle: "Web Design Fundamentals",
        questions: [
            {
                id: 1,
                question: "What does CSS stand for?",
                options: [
                    "Computer Style Sheets",
                    "Cascading Style Sheets",
                    "Creative Style System",
                    "Colorful Style Sheets"
                ],
                correct: 1
            },
            {
                id: 2,
                question: "Which HTML5 element is used for semantic navigation?",
                options: [
                    "<nav>",
                    "<menu>",
                    "<navigation>",
                    "<navigate>"
                ],
                correct: 0
            },
            {
                id: 3,
                question: "What is the purpose of responsive design?",
                options: [
                    "To make websites load faster",
                    "To make websites work on all screen sizes",
                    "To improve SEO rankings",
                    "To reduce server costs"
                ],
                correct: 1
            },
            {
                id: 4,
                question: "Which CSS property is used to change text color?",
                options: [
                    "text-color",
                    "font-color",
                    "color",
                    "text-style"
                ],
                correct: 2
            },
            {
                id: 5,
                question: "What is the default display value for a <div> element?",
                options: [
                    "inline",
                    "block",
                    "flex",
                    "grid"
                ],
                correct: 1
            },
            {
                id: 6,
                question: "Which of the following is NOT a valid CSS selector?",
                options: [
                    ".class-name",
                    "#id-name",
                    "element-name",
                    "$variable-name"
                ],
                correct: 3
            }
        ]
    },
    2: {
        courseId: 2,
        courseTitle: "AI Basics & Machine Learning",
        questions: [
            {
                id: 1,
                question: "What is Machine Learning?",
                options: [
                    "A type of computer hardware",
                    "A subset of AI that enables systems to learn from data",
                    "A programming language",
                    "A database management system"
                ],
                correct: 1
            },
            {
                id: 2,
                question: "What is a neural network?",
                options: [
                    "A computer network",
                    "A computing system inspired by biological neural networks",
                    "A type of database",
                    "An internet protocol"
                ],
                correct: 1
            },
            {
                id: 3,
                question: "Which type of learning uses labeled data?",
                options: [
                    "Unsupervised Learning",
                    "Reinforcement Learning",
                    "Supervised Learning",
                    "Deep Learning"
                ],
                correct: 2
            },
            {
                id: 4,
                question: "What is overfitting in machine learning?",
                options: [
                    "When a model performs too well on training data but poorly on new data",
                    "When a model is too simple",
                    "When training takes too long",
                    "When data is missing"
                ],
                correct: 0
            },
            {
                id: 5,
                question: "What does 'AI' stand for?",
                options: [
                    "Automated Intelligence",
                    "Artificial Intelligence",
                    "Advanced Integration",
                    "Algorithmic Interface"
                ],
                correct: 1
            }
        ]
    },
    3: {
        courseId: 3,
        courseTitle: "Data Ethics & Privacy",
        questions: [
            {
                id: 1,
                question: "What does GDPR stand for?",
                options: [
                    "General Data Protection Regulation",
                    "Global Data Privacy Rules",
                    "Government Data Protection Requirements",
                    "General Digital Privacy Rights"
                ],
                correct: 0
            },
            {
                id: 2,
                question: "What is the principle of data minimization?",
                options: [
                    "Collect as much data as possible",
                    "Only collect data that is necessary for the purpose",
                    "Store data indefinitely",
                    "Share data with everyone"
                ],
                correct: 1
            },
            {
                id: 3,
                question: "What is informed consent in data collection?",
                options: [
                    "Automatic consent when using a service",
                    "Clear explanation and explicit agreement from users",
                    "Consent assumed from behavior",
                    "No consent needed for public data"
                ],
                correct: 1
            },
            {
                id: 4,
                question: "What is the right to be forgotten?",
                options: [
                    "Users can request deletion of their personal data",
                    "Users can forget their passwords",
                    "Data automatically deletes after 1 year",
                    "Users cannot access their data"
                ],
                correct: 0
            },
            {
                id: 5,
                question: "What is anonymization?",
                options: [
                    "Making data public",
                    "Removing personally identifiable information from data",
                    "Encrypting data",
                    "Backing up data"
                ],
                correct: 1
            },
            {
                id: 6,
                question: "Which is NOT a data protection principle?",
                options: [
                    "Lawfulness and fairness",
                    "Purpose limitation",
                    "Data maximization",
                    "Accuracy"
                ],
                correct: 2
            }
        ]
    },
    4: {
        courseId: 4,
        courseTitle: "Digital Marketing Strategies",
        questions: [
            {
                id: 1,
                question: "What does SEO stand for?",
                options: [
                    "Search Engine Optimization",
                    "Social Engagement Optimization",
                    "Sales Enhancement Operations",
                    "System Efficiency Optimization"
                ],
                correct: 0
            },
            {
                id: 2,
                question: "What is the purpose of A/B testing?",
                options: [
                    "To test website speed",
                    "To compare two versions of a webpage or campaign",
                    "To test email delivery",
                    "To check server performance"
                ],
                correct: 1
            },
            {
                id: 3,
                question: "What is a conversion rate?",
                options: [
                    "The speed of website loading",
                    "The percentage of visitors who complete a desired action",
                    "The number of social media followers",
                    "The cost per click"
                ],
                correct: 1
            },
            {
                id: 4,
                question: "Which metric measures email campaign success?",
                options: [
                    "Open rate",
                    "Click-through rate",
                    "Conversion rate",
                    "All of the above"
                ],
                correct: 3
            },
            {
                id: 5,
                question: "What is content marketing?",
                options: [
                    "Creating and sharing valuable content to attract customers",
                    "Buying advertising space",
                    "Sending spam emails",
                    "Creating fake reviews"
                ],
                correct: 0
            }
        ]
    },
    5: {
        courseId: 5,
        courseTitle: "Graphic Design Mastery",
        questions: [
            {
                id: 1,
                question: "What is the rule of thirds?",
                options: [
                    "A design should use three colors",
                    "Dividing an image into nine equal parts for better composition",
                    "Using three fonts maximum",
                    "A design should have three elements"
                ],
                correct: 1
            },
            {
                id: 2,
                question: "What are complementary colors?",
                options: [
                    "Colors that are next to each other on the color wheel",
                    "Colors opposite each other on the color wheel",
                    "Colors that are the same shade",
                    "Colors that are monochromatic"
                ],
                correct: 1
            },
            {
                id: 3,
                question: "What is typography?",
                options: [
                    "The study of colors",
                    "The art and technique of arranging type",
                    "The study of images",
                    "The layout of websites"
                ],
                correct: 1
            },
            {
                id: 4,
                question: "What is negative space?",
                options: [
                    "Dark colors in a design",
                    "The empty space around and between design elements",
                    "The background color",
                    "Invisible elements"
                ],
                correct: 1
            },
            {
                id: 5,
                question: "What does CMYK stand for?",
                options: [
                    "Color, Magenta, Yellow, Key",
                    "Cyan, Magenta, Yellow, Key",
                    "Creative, Modern, Youthful, Kinetic",
                    "Computer, Monitor, Yield, Keyboard"
                ],
                correct: 1
            },
            {
                id: 6,
                question: "What is visual hierarchy?",
                options: [
                    "The order of importance of visual elements",
                    "The size of images",
                    "The number of colors used",
                    "The file format of images"
                ],
                correct: 0
            }
        ]
    },
    6: {
        courseId: 6,
        courseTitle: "JavaScript Fundamentals",
        questions: [
            {
                id: 1,
                question: "Which keyword is used to declare a variable in ES6?",
                options: [
                    "var",
                    "let",
                    "const",
                    "All of the above"
                ],
                correct: 3
            },
            {
                id: 2,
                question: "What is a closure in JavaScript?",
                options: [
                    "A function that has access to variables in its outer scope",
                    "A way to close a browser tab",
                    "A type of loop",
                    "A method to stop code execution"
                ],
                correct: 0
            },
            {
                id: 3,
                question: "What does DOM stand for?",
                options: [
                    "Document Object Model",
                    "Data Object Management",
                    "Digital Output Method",
                    "Dynamic Order Management"
                ],
                correct: 0
            },
            {
                id: 4,
                question: "What is the result of: typeof null?",
                options: [
                    "null",
                    "undefined",
                    "object",
                    "boolean"
                ],
                correct: 2
            },
            {
                id: 5,
                question: "What is an arrow function?",
                options: [
                    "A function that uses => syntax",
                    "A function that points to something",
                    "A type of loop",
                    "A way to import modules"
                ],
                correct: 0
            }
        ]
    },
    7: {
        courseId: 7,
        courseTitle: "Creative Writing Workshop",
        questions: [
            {
                id: 1,
                question: "What is the three-act structure?",
                options: [
                    "A story divided into three parts: setup, confrontation, resolution",
                    "Using three main characters",
                    "Writing three drafts",
                    "A story with three settings"
                ],
                correct: 0
            },
            {
                id: 2,
                question: "What is 'show, don't tell'?",
                options: [
                    "Using dialogue instead of narration",
                    "Using descriptive details and actions instead of stating facts",
                    "Never explaining anything",
                    "Using only dialogue"
                ],
                correct: 1
            },
            {
                id: 3,
                question: "What is character development?",
                options: [
                    "How a character changes throughout a story",
                    "Creating a character's appearance",
                    "Naming a character",
                    "Describing a character's job"
                ],
                correct: 0
            },
            {
                id: 4,
                question: "What is the inciting incident?",
                options: [
                    "The climax of the story",
                    "The event that sets the story in motion",
                    "The resolution",
                    "The introduction"
                ],
                correct: 1
            },
            {
                id: 5,
                question: "What is point of view (POV)?",
                options: [
                    "The author's opinion",
                    "The perspective from which a story is told",
                    "The setting of the story",
                    "The theme of the story"
                ],
                correct: 1
            }
        ]
    },
    8: {
        courseId: 8,
        courseTitle: "Project Management Essentials",
        questions: [
            {
                id: 1,
                question: "What is the triple constraint in project management?",
                options: [
                    "Time, Cost, Quality",
                    "Time, Cost, Scope",
                    "Team, Budget, Timeline",
                    "Planning, Execution, Closure"
                ],
                correct: 1
            },
            {
                id: 2,
                question: "What is a sprint in Agile methodology?",
                options: [
                    "A quick meeting",
                    "A time-boxed period for completing work",
                    "A type of report",
                    "A project phase"
                ],
                correct: 1
            },
            {
                id: 3,
                question: "What is a Gantt chart?",
                options: [
                    "A bar chart showing project schedule",
                    "A pie chart showing budget",
                    "A line graph showing progress",
                    "A flowchart showing processes"
                ],
                correct: 0
            },
            {
                id: 4,
                question: "What is risk management?",
                options: [
                    "Avoiding all risks",
                    "Identifying, assessing, and mitigating project risks",
                    "Ignoring potential problems",
                    "Only planning for success"
                ],
                correct: 1
            },
            {
                id: 5,
                question: "What does PMP stand for?",
                options: [
                    "Project Management Process",
                    "Project Management Professional",
                    "Program Management Plan",
                    "Performance Management Protocol"
                ],
                correct: 1
            },
            {
                id: 6,
                question: "What is a stakeholder?",
                options: [
                    "Only the project manager",
                    "Anyone with an interest in the project",
                    "Only the client",
                    "Only team members"
                ],
                correct: 1
            }
        ]
    }
};


