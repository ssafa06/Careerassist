
export interface Option {
  id: string;
  label: string;

  score?: number;

  value?: string;

  image?: string;
};export type QuestionType =
  | "text"
  | "textarea"
  | "number"
  | "date"
  | "radio"
  | "checkbox"
  | "dropdown"
  | "search-dropdown"
  | "likert"
  | "rating"
  | "ranking"
  | "scenario"
  | "forced-choice"
  | "image-choice";
export interface AssessmentQuestion {

  id: string;

  layer: number;

  section: string;

  competency?: string;

  question: string;

  description?: string;

  type: QuestionType;

  required: boolean;

  weight?: number;

  placeholder?: string;

  options?: Option[];

  min?: number;

  max?: number;

  maxSelections?: number;

  grade?: string[];

  stream?: string[];

  reportCategory?: string;

  aiWeight?: number;
}
export interface AssessmentSection {
  id: string;
  title: string;
  description?: string;
  questions: AssessmentQuestion[];
}

// =======================================================
// COMMON OPTIONS
// =======================================================

const genderOptions: Option[] = [
  { id: "male", label: "Male" },
  { id: "female", label: "Female" },
  { id: "other", label: "Other" },
  { id: "prefer_not", label: "Prefer not to say" },
];

const languageOptions: Option[] = [
  { id: "english", label: "English" },
  { id: "tamil", label: "Tamil" },
  { id: "hindi", label: "Hindi" },
  { id: "telugu", label: "Telugu" },
  { id: "kannada", label: "Kannada" },
  { id: "malayalam", label: "Malayalam" },
  { id: "marathi", label: "Marathi" },
  { id: "gujarati", label: "Gujarati" },
  { id: "bengali", label: "Bengali" },
  { id: "odia", label: "Odia" },
  { id: "punjabi", label: "Punjabi" },
  { id: "urdu", label: "Urdu" },
];

const classOptions: Option[] = [
  { id: "6", label: "Grade 6" },
  { id: "7", label: "Grade 7" },
  { id: "8", label: "Grade 8" },
  { id: "9", label: "Grade 9" },
  { id: "10", label: "Grade 10" },
  { id: "11", label: "Grade 11" },
  { id: "12", label: "Grade 12" },
];

const boardOptions: Option[] = [
  { id: "cbse", label: "CBSE" },
  { id: "icse", label: "ICSE" },
  { id: "state", label: "State Board" },
  { id: "ib", label: "IB" },
  { id: "igcse", label: "IGCSE" },
  { id: "others", label: "Others" },
];

const subjects: Option[] = [
  { id: "maths", label: "Mathematics" },
  { id: "physics", label: "Physics" },
  { id: "chemistry", label: "Chemistry" },
  { id: "biology", label: "Biology" },
  { id: "computer", label: "Computer Science" },
  { id: "english", label: "English" },
  { id: "social", label: "Social Science" },
  { id: "economics", label: "Economics" },
  { id: "commerce", label: "Commerce" },
  { id: "accounts", label: "Accountancy" },
  { id: "business", label: "Business Studies" },
  { id: "history", label: "History" },
  { id: "geography", label: "Geography" },
  { id: "political", label: "Political Science" },
  { id: "art", label: "Art" },
  { id: "music", label: "Music" },
  { id: "physical", label: "Physical Education" },
];

const occupationOptions: Option[] = [
  { id: "government", label: "Government Employee" },
  { id: "private", label: "Private Employee" },
  { id: "business", label: "Business Owner" },
  { id: "entrepreneur", label: "Entrepreneur" },
  { id: "teacher", label: "Teacher" },
  { id: "doctor", label: "Doctor" },
  { id: "engineer", label: "Engineer" },
  { id: "lawyer", label: "Lawyer" },
  { id: "farmer", label: "Farmer" },
  { id: "homemaker", label: "Homemaker" },
  { id: "retired", label: "Retired" },
  { id: "other", label: "Other" },
];

const qualificationOptions: Option[] = [
  { id: "below10", label: "Below Grade 10" },
  { id: "10", label: "Grade 10" },
  { id: "12", label: "Grade 12" },
  { id: "diploma", label: "Diploma" },
  { id: "ug", label: "Bachelor's Degree" },
  { id: "pg", label: "Master's Degree" },
  { id: "doctorate", label: "Doctorate" },
];

const schoolTypeOptions: Option[] = [
  { id: "government", label: "Government School" },
  { id: "government_aided", label: "Government Aided School" },
  { id: "private", label: "Private School" },
  { id: "international", label: "International School" },
];

const learningMethodOptions: Option[] = [
  { id: "visual", label: "Watching videos / diagrams" },
  { id: "audio", label: "Listening to explanations" },
  { id: "reading", label: "Reading textbooks / notes" },
  { id: "practical", label: "Hands-on practical learning" },
];

const studyHoursOptions: Option[] = [
  { id: "lt1", label: "Less than 1 hour" },
  { id: "1", label: "1 hour" },
  { id: "2", label: "2 hours" },
  { id: "3", label: "3 hours" },
  { id: "4", label: "4 hours" },
  { id: "5plus", label: "More than 5 hours" },
];

const extracurricularOptions: Option[] = [
  { id: "sports", label: "Sports" },
  { id: "music", label: "Music" },
  { id: "dance", label: "Dance" },
  { id: "art", label: "Art" },
  { id: "coding", label: "Coding" },
  { id: "robotics", label: "Robotics" },
  { id: "debate", label: "Debate" },
  { id: "quiz", label: "Quiz Club" },
  { id: "volunteering", label: "Volunteering" },
  { id: "ncc", label: "NCC / Scouts" },
];

const industryOptions: Option[] = [
  { id: "engineering", label: "Engineering" },
  { id: "medicine", label: "Medicine" },
  { id: "law", label: "Law" },
  { id: "business", label: "Business" },
  { id: "finance", label: "Finance" },
  { id: "technology", label: "Technology" },
  { id: "art", label: "Arts & Design" },
  { id: "media", label: "Media" },
  { id: "government", label: "Government" },
  { id: "education", label: "Education" },
  { id: "research", label: "Research" },
  { id: "aviation", label: "Aviation" },
  { id: "agriculture", label: "Agriculture" },
];

// =======================================================
// LAYER 1
// =======================================================

export const layerOneSections: AssessmentSection[] = [
  {
    id: "personal_information",
    title: "Personal Information",
    questions: [
      {
        id: "full_name",
        layer: 1,
        section: "Personal Information",
        question: "What is your full name?",
        type: "text",
        required: true,
      },
      {
        id: "dob",
        layer: 1,
        section: "Personal Information",
        question: "What is your date of birth?",
        type: "date",
        required: true,
      },
      {
        id: "gender",
        layer: 1,
        section: "Personal Information",
        question: "What is your gender?",
        type: "radio",
        required: true,
        options: genderOptions,
      },
      {
        id: "location",
        layer: 1,
        section: "Personal Information",
        question:
          "Which city, district and state do you currently live in?",
        type: "search-dropdown",
        required: true,
      },
      {
        id: "languages",
        layer: 1,
        section: "Personal Information",
        question:
          "Which languages can you comfortably read, write and speak?",
        type: "checkbox",
        required: true,
        options: languageOptions,
      },
    ],
  },

  {
    id: "academic_background",
    title: "Academic Background",
    questions: [
      {
        id: "class",
        layer: 1,
        section: "Academic Background",
        question: "Which class or grade are you currently studying?",
        type: "dropdown",
        required: true,
        options: classOptions,
      },
      {
        id: "board",
        layer: 1,
        section: "Academic Background",
        question: "Which education board are you studying under?",
        type: "radio",
        required: true,
        options: boardOptions,
      },
      {
        id: "gpa",
        layer: 1,
        section: "Academic Background",
        question: "What was your GPA in your last academic year?",
        type: "number",
        required: true,
      },
      {
        id: "favorite_subjects",
        layer: 1,
        section: "Academic Background",
        question:
          "Which subjects do you enjoy studying the most?",
        type: "checkbox",
        required: true,
        maxSelections: 3,
        options: subjects,
      },
      {
        id: "difficult_subjects",
        layer: 1,
        section: "Academic Background",
        question:
          "Which subjects do you find the most difficult?",
        type: "checkbox",
        required: true,
        maxSelections: 3,
        options: subjects,
      },
    ],
  },

  {
    id: "family_background",
    title: "Family Background",
    questions: [
      {
        id: "father_occupation",
        layer: 1,
        section: "Family Background",
        question:
          "What is your father's or guardian's occupation?",
        type: "dropdown",
        required: true,
        options: occupationOptions,
      },
      {
        id: "mother_occupation",
        layer: 1,
        section: "Family Background",
        question:
          "What is your mother's or guardian's occupation?",
        type: "dropdown",
        required: true,
        options: occupationOptions,
      },
      {
        id: "parent_education",
        layer: 1,
        section: "Family Background",
        question:
          "What is the highest educational qualification of your parents or guardians?",
        type: "dropdown",
        required: true,
        options: qualificationOptions,
      },
      {
        id: "family_business",
        layer: 1,
        section: "Family Background",
        question:
          "Does anyone in your family own a business or work as an entrepreneur?",
        type: "radio",
        required: true,
        options: [
          { id: "yes", label: "Yes" },
          { id: "no", label: "No" },
        ],
      },
      {
        id: "family_support",
        layer: 1,
        section: "Family Background",
        question:
          "My family supports my educational and career decisions.",
        type: "likert",
        required: true,
        min: 1,
        max: 5,
      },
    ],
  },

  {
    id: "school_context",
    title: "School & Learning Context",
    questions: [
      {
        id: "school_type",
        layer: 1,
        section: "School",
        question: "What type of school do you study in?",
        type: "radio",
        required: true,
        options: schoolTypeOptions,
      },
      {
        id: "teaching_quality",
        layer: 1,
        section: "School",
        question:
          "How would you rate the quality of teaching in your school?",
        type: "rating",
        required: true,
        min: 1,
        max: 5,
      },
      {
        id: "learning_method",
        layer: 1,
        section: "School",
        question:
          "Which learning method helps you understand concepts best?",
        type: "radio",
        required: true,
        options: learningMethodOptions,
      },
      {
        id: "study_hours",
        layer: 1,
        section: "School",
        question:
          "On average, how many hours do you study outside school each day?",
        type: "dropdown",
        required: true,
        options: studyHoursOptions,
      },
      {
        id: "activities",
        layer: 1,
        section: "School",
        question:
          "Which extracurricular activities do you regularly participate in?",
        type: "checkbox",
        required: true,
        options: extracurricularOptions,
      },
    ],
  },

  {
    id: "aspirations",
    title: "Aspirations & Exposure",
    questions: [
      {
        id: "career",
        layer: 1,
        section: "Aspirations",
        question:
          "What career would you like to pursue at present?",
        type: "search-dropdown",
        required: true,
      },
      {
        id: "career_confidence",
        layer: 1,
        section: "Aspirations",
        question:
          "How confident are you about your current career choice?",
        type: "rating",
        required: true,
        min: 1,
        max: 10,
      },
      {
        id: "career_exposure",
        layer: 1,
        section: "Aspirations",
        question:
          "Have you attended any career guidance sessions, workshops, competitions, internships, or industrial visits?",
        type: "radio",
        required: true,
        options: [
          { id: "yes", label: "Yes" },
          { id: "no", label: "No" },
        ],
      },
      {
        id: "industries",
        layer: 1,
        section: "Aspirations",
        question:
          "Which industries or fields interest you the most?",
        type: "checkbox",
        required: true,
        maxSelections: 5,
        options: industryOptions,
      },
      {
        id: "goal",
        layer: 1,
        section: "Aspirations",
        question:
          "What is the biggest goal you want to achieve in the next 10–15 years?",
        type: "textarea",
        required: true,
      },
    ],
  },
];

// =======================================================
// LAYER 2
// BIG FIVE PERSONALITY ASSESSMENT
// =======================================================

export const bigFiveSection: AssessmentSection = {
  id: "big_five",
  title: "Big Five Personality Assessment",
  description:
    "Understand your personality traits using scenario-based questions.",

  questions: [

    {
      id: "bf_1",
      layer: 2,
      section: "Big Five",
      competency: "Extraversion",
      question:
        "You enter a classroom where you don't know anyone. What would you most likely do?",
      type: "radio",
      required: true,
      weight: 2,

      options: [
        { id: "A", label: "Start conversations with new people", score: 5 },
        { id: "B", label: "Smile and wait for someone to approach you", score: 4 },
        { id: "C", label: "Sit with someone you know", score: 3 },
        { id: "D", label: "Stay quiet until necessary", score: 2 },
      ],
    },

    {
      id: "bf_2",
      layer: 2,
      section: "Big Five",
      competency: "Extraversion",
      question:
        "Which activity sounds most enjoyable after school?",
      type: "radio",
      required: true,
      weight: 2,

      options: [
        { id: "A", label: "Hanging out with friends", score: 5 },
        { id: "B", label: "Playing online games with friends", score: 4 },
        { id: "C", label: "Reading a book alone", score: 3 },
        { id: "D", label: "Spending time with family", score: 2 },
      ],
    },

    {
      id: "bf_3",
      layer: 2,
      section: "Big Five",
      competency: "Agreeableness",
      question:
        "Your teammate forgot to complete their part of the project. What would you do?",
      type: "radio",
      required: true,
      weight: 2,

      options: [
        { id: "A", label: "Help them finish it", score: 5 },
        { id: "B", label: "Ask why they couldn't finish", score: 4 },
        { id: "C", label: "Inform the teacher", score: 3 },
        { id: "D", label: "Complete only my own work", score: 2 },
      ],
    },

    {
      id: "bf_4",
      layer: 2,
      section: "Big Five",
      competency: "Conscientiousness",
      question:
        "Before starting a project, what do you usually do first?",
      type: "radio",
      required: true,
      weight: 2,

      options: [
        { id: "A", label: "Make a complete plan", score: 5 },
        { id: "B", label: "Gather ideas", score: 4 },
        { id: "C", label: "Start immediately", score: 3 },
        { id: "D", label: "Wait until the deadline is close", score: 2 },
      ],
    },

    {
      id: "bf_5",
      layer: 2,
      section: "Big Five",
      competency: "Openness",
      question:
        "Which two topics would you be most excited to learn?",
      type: "checkbox",
      required: true,
      maxSelections: 2,
      weight: 2,

      options: [
        { id: "ai", label: "Artificial Intelligence", score: 5 },
        { id: "space", label: "Space Science", score: 5 },
        { id: "music", label: "Music Production", score: 5 },
        { id: "business", label: "Business", score: 5 },
        { id: "photo", label: "Photography", score: 5 },
        { id: "cook", label: "Cooking", score: 5 },
      ],
    },

    {
      id: "bf_6",
      layer: 2,
      section: "Big Five",
      competency: "Emotional Stability",
      question:
        "Your teacher gives you unexpected criticism. What do you usually do?",
      type: "radio",
      required: true,
      weight: 2,

      options: [
        { id: "A", label: "Feel upset for a long time", score: 2 },
        { id: "B", label: "Ask how you can improve", score: 5 },
        { id: "C", label: "Ignore it", score: 3 },
        { id: "D", label: "Defend yourself immediately", score: 1 },
      ],
    },

    {
      id: "bf_7",
      layer: 2,
      section: "Big Five",
      competency: "Extraversion",
      question:
        "Rank these activities from most enjoyable to least enjoyable.",
      type: "ranking",
      required: true,
      weight: 2,

      options: [
        { id: "presentation", label: "Giving a Presentation" },
        { id: "party", label: "Attending a Party" },
        { id: "puzzle", label: "Solving Puzzles Alone" },
        { id: "sports", label: "Playing Team Sports" },
      ],
    },

    {
      id: "bf_8",
      layer: 2,
      section: "Big Five",
      competency: "Agreeableness",
      question:
        "Which statement describes you better?",
      type: "radio",
      required: true,
      weight: 2,

      options: [
        {
          id: "A",
          label: "I enjoy helping others whenever possible.",
          score: 5,
        },
        {
          id: "B",
          label: "I focus on achieving my own goals first.",
          score: 2,
        },
      ],
    },

    {
      id: "bf_9",
      layer: 2,
      section: "Big Five",
      competency: "Openness",
      question:
        "If you had an entire month free, what would you choose?",
      type: "radio",
      required: true,
      weight: 2,

      options: [
        { id: "travel", label: "Travel somewhere new", score: 5 },
        { id: "skill", label: "Learn a new skill", score: 5 },
        { id: "home", label: "Relax at home", score: 2 },
        { id: "project", label: "Build a personal project", score: 5 },
      ],
    },

    {
      id: "bf_10",
      layer: 2,
      section: "Big Five",
      competency: "Conscientiousness",
      question:
        "How do you usually complete assignments?",
      type: "radio",
      required: true,
      weight: 2,

      options: [
        { id: "A", label: "Several days before the deadline", score: 5 },
        { id: "B", label: "One day before", score: 4 },
        { id: "C", label: "On the deadline", score: 3 },
        { id: "D", label: "Sometimes after the deadline", score: 1 },
      ],
    },
       {
      id: "bf_11",
      layer: 2,
      section: "Big Five",
      competency: "Emotional Stability",
      question:
        "You score much lower than expected in an important exam. What would you most likely do?",
      type: "radio",
      required: true,
      weight: 2,
      options: [
        { id: "A", label: "Analyze your mistakes and improve.", score: 5 },
        { id: "B", label: "Feel discouraged for several days.", score: 2 },
        { id: "C", label: "Forget about it quickly.", score: 3 },
        { id: "D", label: "Blame the exam or teacher.", score: 1 },
      ],
    },

    {
      id: "bf_12",
      layer: 2,
      section: "Big Five",
      competency: "Agreeableness",
      question:
        "During a group discussion, someone strongly disagrees with your idea. What do you do?",
      type: "radio",
      required: true,
      weight: 2,
      options: [
        { id: "A", label: "Listen carefully to understand them.", score: 5 },
        { id: "B", label: "Explain your point politely.", score: 4 },
        { id: "C", label: "Ignore them.", score: 2 },
        { id: "D", label: "Argue until they agree.", score: 1 },
      ],
    },

    {
      id: "bf_13",
      layer: 2,
      section: "Big Five",
      competency: "Openness",
      question:
        "Which YouTube channel would you subscribe to first?",
      type: "radio",
      required: true,
      weight: 2,
      options: [
        { id: "science", label: "Science & Experiments", score: 5 },
        { id: "travel", label: "Travel & Culture", score: 4 },
        { id: "business", label: "Business & Startups", score: 4 },
        { id: "gaming", label: "Gaming", score: 2 },
        { id: "art", label: "Art & Design", score: 5 },
      ],
    },

    {
      id: "bf_14",
      layer: 2,
      section: "Big Five",
      competency: "Conscientiousness",
      question:
        "Which workspace looks most like yours?",
      type: "image-choice",
      required: true,
      weight: 2,
      options: [
        {
          id: "A",
          label: "Very organized",
          image: "/images/personality/workspace-1.png",
          score: 5,
        },
        {
          id: "B",
          label: "Mostly organized",
          image: "/images/personality/workspace-2.png",
          score: 4,
        },
        {
          id: "C",
          label: "Slightly messy",
          image: "/images/personality/workspace-3.png",
          score: 2,
        },
        {
          id: "D",
          label: "Very messy",
          image: "/images/personality/workspace-4.png",
          score: 1,
        },
      ],
    },

    {
      id: "bf_15",
      layer: 2,
      section: "Big Five",
      competency: "Extraversion",
      question:
        "If you could attend only one event, which would you choose?",
      type: "radio",
      required: true,
      weight: 2,
      options: [
        { id: "network", label: "Networking Event", score: 5 },
        { id: "concert", label: "Music Concert", score: 4 },
        { id: "books", label: "Book Fair", score: 3 },
        { id: "hackathon", label: "Coding Hackathon", score: 4 },
      ],
    },

    {
      id: "bf_16",
      layer: 2,
      section: "Big Five",
      competency: "Emotional Stability",
      question:
        "Your plans suddenly change at the last minute. How do you usually react?",
      type: "radio",
      required: true,
      weight: 2,
      options: [
        { id: "A", label: "Adapt quickly.", score: 5 },
        { id: "B", label: "Feel slightly stressed but continue.", score: 4 },
        { id: "C", label: "Get frustrated.", score: 2 },
        { id: "D", label: "Cancel everything.", score: 1 },
      ],
    },

    {
      id: "bf_17",
      layer: 2,
      section: "Big Five",
      competency: "Agreeableness",
      question:
        "Which compliment would make you happiest?",
      type: "radio",
      required: true,
      weight: 2,
      options: [
        { id: "kind", label: "You're kind.", score: 5 },
        { id: "smart", label: "You're intelligent.", score: 3 },
        { id: "creative", label: "You're creative.", score: 4 },
        { id: "hardworking", label: "You're hardworking.", score: 4 },
      ],
    },

    {
      id: "bf_18",
      layer: 2,
      section: "Big Five",
      competency: "Openness",
      question:
        "If you could invent something, which two would you choose?",
      type: "checkbox",
      required: true,
      weight: 2,
      maxSelections: 2,
      options: [
        { id: "car", label: "Flying Car", score: 5 },
        { id: "teacher", label: "AI Teacher", score: 5 },
        { id: "robot", label: "Medical Robot", score: 5 },
        { id: "space", label: "Space Habitat", score: 5 },
        { id: "farm", label: "Smart Farming System", score: 5 },
        { id: "energy", label: "Clean Energy Device", score: 5 },
      ],
    },

    {
      id: "bf_19",
      layer: 2,
      section: "Big Five",
      competency: "Conscientiousness",
      question:
        "Which statement fits you better?",
      type: "forced-choice",
      required: true,
      weight: 2,
      options: [
        {
          id: "A",
          label: "I prefer finishing one task before starting another.",
          score: 5,
        },
        {
          id: "B",
          label: "I enjoy working on multiple tasks at the same time.",
          score: 3,
        },
      ],
    },

    {
      id: "bf_20",
      layer: 2,
      section: "Big Five",
      competency: "Overall Personality",
      question:
        "Imagine your best friend describing you. Which three words would they most likely choose?",
      type: "checkbox",
      required: true,
      weight: 2,
      maxSelections: 3,
      options: [
        { id: "friendly", label: "Friendly", score: 5 },
        { id: "curious", label: "Curious", score: 5 },
        { id: "calm", label: "Calm", score: 4 },
        { id: "organized", label: "Organized", score: 5 },
        { id: "creative", label: "Creative", score: 5 },
        { id: "confident", label: "Confident", score: 4 },
        { id: "helpful", label: "Helpful", score: 5 },
        { id: "independent", label: "Independent", score: 4 },
        { id: "adventurous", label: "Adventurous", score: 4 },
        { id: "responsible", label: "Responsible", score: 5 },
      ],
    },
],
};
// =======================================================
// ASSESSMENT FLOW CONFIGURATION
// =======================================================

export const assessmentFlow = [
  {
    id: "layer1",
    title: "Personal & Academic Profile",
    layer: 1,
    sections: [
      "personal_information",
      "academic_background",
      "family_background",
      "school_context",
      "aspirations",
    ],
    progressWeight: 10,
  },

  {
    id: "layer2",
    title: "Psychometric Assessment",
    layer: 2,
    sections: [
      "big_five",
      "riasec",
      "multiple_intelligence",
      "learning_style",
      "emotional_intelligence",
      "growth_mindset",
      "grit",
      "motivation",
      "self_confidence",
      "values_ethics",
    ],
    progressWeight: 35,
  },

  {
    id: "layer3",
    title: "Cognitive Assessment",
    layer: 3,
    sections: [
      "cognitive_6_8",
      "cognitive_9_12",
    ],
    progressWeight: 20,
  },

  {
    id: "layer4",
    title: "Skill Competency",
    layer: 4,
    sections: [
      "skills_6_8",
      "skills_9_10",
      "skills_11_12_common",
      "science_stream",
      "commerce_stream",
      "arts_stream",
      "vocational_stream",
    ],
    progressWeight: 20,
  },

  {
    id: "layer5",
    title: "Behaviour Assessment",
    layer: 5,
    sections: [
      "behaviour",
    ],
    progressWeight: 15,
  },
];

// =======================================================
// GRADE CONFIGURATION
// =======================================================

export type StudentGroup =
  | "6-8"
  | "9-10"
  | "11-12";

export type Stream =
  | "science"
  | "commerce"
  | "arts"
  | "vocational"
  | null;

export interface StudentProfile {
  grade: StudentGroup;
  stream: Stream;
}

// =======================================================
// CONDITIONAL DISPLAY HELPERS
// =======================================================

export const shouldShowSection = (
  sectionId: string,
  profile: StudentProfile
): boolean => {
  switch (sectionId) {
    case "cognitive_6_8":
    case "skills_6_8":
      return profile.grade === "6-8";

    case "cognitive_9_12":
      return profile.grade === "9-10" || profile.grade === "11-12";

    case "skills_9_10":
      return profile.grade === "9-10";

    case "skills_11_12_common":
      return profile.grade === "11-12";

    case "science_stream":
      return (
        profile.grade === "11-12" &&
        profile.stream === "science"
      );

    case "commerce_stream":
      return (
        profile.grade === "11-12" &&
        profile.stream === "commerce"
      );

    case "arts_stream":
      return (
        profile.grade === "11-12" &&
        profile.stream === "arts"
      );

    case "vocational_stream":
      return (
        profile.grade === "11-12" &&
        profile.stream === "vocational"
      );

    default:
      return true;
  }
};

// =======================================================
// LIKERT SCALE
// =======================================================

export const likertScale = [
  { id: "1", label: "Strongly Disagree", score: 1 },
  { id: "2", label: "Disagree", score: 2 },
  { id: "3", label: "Neutral", score: 3 },
  { id: "4", label: "Agree", score: 4 },
  { id: "5", label: "Strongly Agree", score: 5 },
];
// =======================================================
// PROGRESS CALCULATION
// =======================================================

export interface AssessmentProgress {
  currentLayer: number;
  currentSection: string;
  completedQuestions: number;
  totalQuestions: number;
  percentage: number;
}

export const calculateProgress = (
  answered: number,
  total: number
): number => {
  if (total === 0) return 0;

  return Math.round((answered / total) * 100);
};

// =======================================================
// VALIDATION
// =======================================================

export const validateQuestion = (
  question: AssessmentQuestion,
  value: any
): boolean => {

  if (!question.required)
    return true;

  if (question.type === "checkbox") {

    return (
      Array.isArray(value) &&
      value.length > 0
    );

  }

  if (
    question.type === "text" ||
    question.type === "textarea"
  ) {

    return value?.trim()?.length > 0;

  }

  if (
    question.type === "number"
  ) {

    return value !== undefined &&
      value !== null &&
      value !== "";

  }

  return value !== undefined &&
    value !== null &&
    value !== "";
};

// =======================================================
// QUESTION LOOKUP
// =======================================================

export const getQuestionById = (
  id: string,
  sections: AssessmentSection[]
): AssessmentQuestion | undefined => {

  for (const section of sections) {

    const question = section.questions.find(
      q => q.id === id
    );

    if (question)
      return question;

  }

};

// =======================================================
// ANSWER TYPE
// =======================================================

export interface UserAnswer {

  questionId: string;

  value: any;

  score?: number;

}

// =======================================================
// ASSESSMENT RESPONSE
// =======================================================

export interface AssessmentResponse {

  studentId: string;

  startedAt: string;

  submittedAt?: string;

  answers: UserAnswer[];

}

// =======================================================
// LAYER MAPPING
// =======================================================

export const layerTitles = {

  1: "Personal Profile",

  2: "Psychometric Assessment",

  3: "Cognitive Assessment",

  4: "Skill Competency",

  5: "Behaviour Assessment",

};

// =======================================================
// REPORT CATEGORIES
// =======================================================

export const reportCategories = [

  "Personality",

  "Interest",

  "Intelligence",

  "Learning",

  "Emotional",

  "Mindset",

  "Motivation",

  "Confidence",

  "Behaviour",

  "Skills",

  "Cognitive",

  "Career",

];

// =======================================================
// SCORING PLACEHOLDERS
// =======================================================

export interface CompetencyScore {

  competency: string;

  score: number;

  maxScore: number;

  percentage: number;

}

export interface AssessmentScores {

  personality: CompetencyScore[];

  interests: CompetencyScore[];

  intelligence: CompetencyScore[];

  emotional: CompetencyScore[];

  mindset: CompetencyScore[];

  behaviour: CompetencyScore[];

  cognitive: CompetencyScore[];

  skills: CompetencyScore[];

}

// =======================================================
// CAREER MATCH
// =======================================================

export interface CareerRecommendation {

  title: string;

  description: string;

  confidence: number;

  strengths: string[];

  improvements: string[];

}

// =======================================================
// STREAM TYPES
// =======================================================

export const streamOptions = [

  {
    id: "science",
    label: "Science",
  },

  {
    id: "commerce",
    label: "Commerce",
  },

  {
    id: "arts",
    label: "Arts",
  },

  {
    id: "vocational",
    label: "Vocational",
  },

];

// =======================================================
// GRADE HELPERS
// =======================================================

export const isJuniorStudent = (
  grade: string
) =>
  ["6", "7", "8"].includes(
    grade
  );

export const isSecondaryStudent = (
  grade: string
) =>
  ["9", "10"].includes(
    grade
  );

export const isSeniorStudent = (
  grade: string
) =>
  ["11", "12"].includes(
    grade
  );

// =======================================================
// LAYER 2
// CAREER INTEREST ASSESSMENT (RIASEC INSPIRED)
// =======================================================

export const careerInterestSection: AssessmentSection = {
  id: "career_interest",
  title: "Career Interest Assessment",
  description:
    "Discover the types of careers and work environments that naturally match your interests.",

  questions: [

    // ==========================
    // REALISTIC
    // ==========================

    {
      id: "ci_1",
      layer: 2,
      section: "Career Interests",
      competency: "Realistic",
      question:
        "Which activity would you enjoy the most during a school exhibition?",
      type: "radio",
      required: true,
      weight: 2,
      reportCategory: "Career Interests",
      options: [
        { id: "robot", label: "Build a working robot", score: 5 },
        { id: "paint", label: "Create an art display", score: 2 },
        { id: "speech", label: "Host the event", score: 1 },
        { id: "survey", label: "Collect visitor feedback", score: 2 },
      ],
    },

    {
      id: "ci_2",
      layer: 2,
      section: "Career Interests",
      competency: "Realistic",
      question:
        "Which weekend activity sounds most enjoyable?",
      type: "checkbox",
      required: true,
      weight: 2,
      maxSelections: 2,
      reportCategory: "Career Interests",
      options: [
        { id: "bike", label: "Repair a bicycle", score: 5 },
        { id: "garden", label: "Work in a garden", score: 5 },
        { id: "cook", label: "Cook a new recipe", score: 4 },
        { id: "read", label: "Read a novel", score: 2 },
        { id: "movie", label: "Watch movies", score: 1 },
      ],
    },

    {
      id: "ci_3",
      layer: 2,
      section: "Career Interests",
      competency: "Realistic",
      question:
        "I enjoy building or fixing things with my hands.",
      type: "likert",
      required: true,
      weight: 2,
      reportCategory: "Career Interests",
      options: likertScale,
    },

    // ==========================
    // INVESTIGATIVE
    // ==========================

    {
      id: "ci_4",
      layer: 2,
      section: "Career Interests",
      competency: "Investigative",
      question:
        "Which school club would you most likely join?",
      type: "radio",
      required: true,
      weight: 2,
      reportCategory: "Career Interests",
      options: [
        { id: "science", label: "Science Club", score: 5 },
        { id: "music", label: "Music Club", score: 2 },
        { id: "drama", label: "Drama Club", score: 1 },
        { id: "sports", label: "Sports Club", score: 2 },
      ],
    },

    {
      id: "ci_5",
      layer: 2,
      section: "Career Interests",
      competency: "Investigative",
      question:
        "You discover an unusual plant. What do you do first?",
      type: "radio",
      required: true,
      weight: 2,
      reportCategory: "Career Interests",
      options: [
        { id: "research", label: "Research about it online", score: 5 },
        { id: "photo", label: "Take photos", score: 3 },
        { id: "ignore", label: "Ignore it", score: 1 },
        { id: "teacher", label: "Ask a science teacher", score: 4 },
      ],
    },

    {
      id: "ci_6",
      layer: 2,
      section: "Career Interests",
      competency: "Investigative",
      question:
        "I enjoy solving puzzles and logical problems.",
      type: "likert",
      required: true,
      weight: 2,
      reportCategory: "Career Interests",
      options: likertScale,
    },

    // ==========================
    // ARTISTIC
    // ==========================

    {
      id: "ci_7",
      layer: 2,
      section: "Career Interests",
      competency: "Artistic",
      question:
        "If you had an empty room, what would you enjoy creating?",
      type: "radio",
      required: true,
      weight: 2,
      reportCategory: "Career Interests",
      options: [
        { id: "studio", label: "Art Studio", score: 5 },
        { id: "lab", label: "Science Lab", score: 2 },
        { id: "office", label: "Office", score: 1 },
        { id: "gym", label: "Gym", score: 2 },
      ],
    },

    {
      id: "ci_8",
      layer: 2,
      section: "Career Interests",
      competency: "Artistic",
      question:
        "Which hobby would you happily spend hours doing?",
      type: "checkbox",
      required: true,
      maxSelections: 2,
      weight: 2,
      reportCategory: "Career Interests",
      options: [
        { id: "draw", label: "Drawing", score: 5 },
        { id: "music", label: "Music", score: 5 },
        { id: "dance", label: "Dance", score: 5 },
        { id: "coding", label: "Coding", score: 2 },
        { id: "accounts", label: "Accounting", score: 1 },
      ],
    },

    {
      id: "ci_9",
      layer: 2,
      section: "Career Interests",
      competency: "Artistic",
      question:
        "I like expressing ideas creatively.",
      type: "likert",
      required: true,
      weight: 2,
      reportCategory: "Career Interests",
      options: likertScale,
    },
      // ==========================
    // SOCIAL
    // ==========================

    {
      id: "ci_10",
      layer: 2,
      section: "Career Interests",
      competency: "Social",
      question:
        "A new student joins your class and looks nervous. What would you most likely do?",
      type: "radio",
      required: true,
      weight: 2,
      reportCategory: "Career Interests",
      options: [
        { id: "help", label: "Introduce yourself and help them settle in.", score: 5 },
        { id: "teacher", label: "Tell the teacher.", score: 3 },
        { id: "ignore", label: "Wait for someone else to help.", score: 1 },
        { id: "observe", label: "Observe from a distance.", score: 2 },
      ],
    },

    {
      id: "ci_11",
      layer: 2,
      section: "Career Interests",
      competency: "Social",
      question:
        "Which activity would make you feel most satisfied?",
      type: "checkbox",
      required: true,
      maxSelections: 2,
      weight: 2,
      reportCategory: "Career Interests",
      options: [
        { id: "teach", label: "Teaching younger students", score: 5 },
        { id: "volunteer", label: "Volunteering", score: 5 },
        { id: "mentor", label: "Mentoring friends", score: 5 },
        { id: "gaming", label: "Playing video games", score: 1 },
        { id: "shopping", label: "Shopping", score: 2 },
      ],
    },

    {
      id: "ci_12",
      layer: 2,
      section: "Career Interests",
      competency: "Social",
      question:
        "I enjoy helping people solve their problems.",
      type: "likert",
      required: true,
      weight: 2,
      reportCategory: "Career Interests",
      options: likertScale,
    },

    // ==========================
    // ENTERPRISING
    // ==========================

    {
      id: "ci_13",
      layer: 2,
      section: "Career Interests",
      competency: "Enterprising",
      question:
        "Your class is organizing a fundraiser. Which role would you prefer?",
      type: "radio",
      required: true,
      weight: 2,
      reportCategory: "Career Interests",
      options: [
        { id: "leader", label: "Lead the entire event", score: 5 },
        { id: "finance", label: "Manage money", score: 4 },
        { id: "poster", label: "Design posters", score: 2 },
        { id: "helper", label: "Help wherever needed", score: 3 },
      ],
    },

    {
      id: "ci_14",
      layer: 2,
      section: "Career Interests",
      competency: "Enterprising",
      question:
        "If you started a business, what would excite you the most?",
      type: "radio",
      required: true,
      weight: 2,
      reportCategory: "Career Interests",
      options: [
        { id: "lead", label: "Leading a team", score: 5 },
        { id: "product", label: "Creating products", score: 4 },
        { id: "customers", label: "Meeting customers", score: 5 },
        { id: "planning", label: "Planning strategy", score: 4 },
      ],
    },

    {
      id: "ci_15",
      layer: 2,
      section: "Career Interests",
      competency: "Enterprising",
      question:
        "I enjoy convincing others about my ideas.",
      type: "likert",
      required: true,
      weight: 2,
      reportCategory: "Career Interests",
      options: likertScale,
    },

    // ==========================
    // CONVENTIONAL
    // ==========================

    {
      id: "ci_16",
      layer: 2,
      section: "Career Interests",
      competency: "Conventional",
      question:
        "Which workspace would you prefer?",
      type: "radio",
      required: true,
      weight: 2,
      reportCategory: "Career Interests",
      options: [
        { id: "organized", label: "Well-organized office", score: 5 },
        { id: "creative", label: "Creative studio", score: 2 },
        { id: "lab", label: "Research laboratory", score: 3 },
        { id: "field", label: "Outdoor worksite", score: 2 },
      ],
    },

    {
      id: "ci_17",
      layer: 2,
      section: "Career Interests",
      competency: "Conventional",
      question:
        "Which task would you enjoy the most?",
      type: "checkbox",
      required: true,
      maxSelections: 2,
      weight: 2,
      reportCategory: "Career Interests",
      options: [
        { id: "organize", label: "Organizing files", score: 5 },
        { id: "excel", label: "Working with spreadsheets", score: 5 },
        { id: "records", label: "Maintaining records", score: 4 },
        { id: "paint", label: "Painting", score: 2 },
        { id: "travel", label: "Travelling", score: 1 },
      ],
    },

    {
      id: "ci_18",
      layer: 2,
      section: "Career Interests",
      competency: "Conventional",
      question:
        "I prefer working in a structured and organized environment.",
      type: "likert",
      required: true,
      weight: 2,
      reportCategory: "Career Interests",
      options: likertScale,
    },
  ],
};
// =======================================================
// LAYER 2
// MULTIPLE INTELLIGENCE ASSESSMENT
// =======================================================

export const multipleIntelligenceSection: AssessmentSection = {
  id: "multiple_intelligence",
  title: "Multiple Intelligence Assessment",
  description:
    "Discover the ways in which you naturally learn, think and solve problems.",

  questions: [

    // ==================================================
    // Logical Intelligence
    // ==================================================

    {
      id: "mi_1",
      layer: 2,
      section: "Multiple Intelligence",
      competency: "Logical",
      reportCategory: "Multiple Intelligence",
      question:
        "I enjoy identifying patterns and solving logical puzzles.",
      type: "likert",
      required: true,
      weight: 2,
      options: likertScale,
    },

    {
      id: "mi_2",
      layer: 2,
      section: "Multiple Intelligence",
      competency: "Logical",
      reportCategory: "Multiple Intelligence",
      question:
        "Which activity sounds most interesting?",
      type: "radio",
      required: true,
      weight: 2,
      options: [
        { id:"math",label:"Solve math puzzles",score:5 },
        { id:"art",label:"Paint a landscape",score:2 },
        { id:"music",label:"Learn guitar",score:2 },
        { id:"sports",label:"Play football",score:2 },
      ],
    },

    {
      id:"mi_3",
      layer:2,
      section:"Multiple Intelligence",
      competency:"Logical",
      reportCategory:"Multiple Intelligence",
      question:"Friends usually ask me to solve difficult problems.",
      type:"likert",
      required:true,
      weight:2,
      options:likertScale
    },

    // ==================================================
    // Linguistic
    // ==================================================

    {
      id:"mi_4",
      layer:2,
      section:"Multiple Intelligence",
      competency:"Linguistic",
      reportCategory:"Multiple Intelligence",
      question:"I enjoy writing stories, blogs or essays.",
      type:"likert",
      required:true,
      weight:2,
      options:likertScale
    },

    {
      id:"mi_5",
      layer:2,
      section:"Multiple Intelligence",
      competency:"Linguistic",
      reportCategory:"Multiple Intelligence",
      question:"Which competition would you participate in first?",
      type:"radio",
      required:true,
      weight:2,
      options:[
        {id:"speech",label:"Speech Competition",score:5},
        {id:"coding",label:"Coding Contest",score:3},
        {id:"painting",label:"Painting Competition",score:2},
        {id:"sports",label:"Sports Meet",score:2}
      ]
    },

    {
      id:"mi_6",
      layer:2,
      section:"Multiple Intelligence",
      competency:"Linguistic",
      reportCategory:"Multiple Intelligence",
      question:"Reading books is enjoyable for me.",
      type:"likert",
      required:true,
      weight:2,
      options:likertScale
    },

    // ==================================================
    // Spatial
    // ==================================================

    {
      id:"mi_7",
      layer:2,
      section:"Multiple Intelligence",
      competency:"Spatial",
      reportCategory:"Multiple Intelligence",
      question:"I can easily imagine how something will look before it is built.",
      type:"likert",
      required:true,
      weight:2,
      options:likertScale
    },

    {
      id:"mi_8",
      layer:2,
      section:"Multiple Intelligence",
      competency:"Spatial",
      reportCategory:"Multiple Intelligence",
      question:"Which hobby sounds most exciting?",
      type:"radio",
      required:true,
      weight:2,
      options:[
        {id:"design",label:"Graphic Design",score:5},
        {id:"music",label:"Music",score:2},
        {id:"business",label:"Business Planning",score:2},
        {id:"teaching",label:"Teaching",score:2}
      ]
    },

    {
      id:"mi_9",
      layer:2,
      section:"Multiple Intelligence",
      competency:"Spatial",
      reportCategory:"Multiple Intelligence",
      question:"Maps and diagrams help me understand things quickly.",
      type:"likert",
      required:true,
      weight:2,
      options:likertScale
    },

    // ==================================================
    // Musical
    // ==================================================

    {
      id:"mi_10",
      layer:2,
      section:"Multiple Intelligence",
      competency:"Musical",
      reportCategory:"Multiple Intelligence",
      question:"I easily recognize rhythms and melodies.",
      type:"likert",
      required:true,
      weight:2,
      options:likertScale
    },

    {
      id:"mi_11",
      layer:2,
      section:"Multiple Intelligence",
      competency:"Musical",
      reportCategory:"Multiple Intelligence",
      question:"If you had free time, what would you prefer?",
      type:"radio",
      required:true,
      weight:2,
      options:[
        {id:"instrument",label:"Practice an instrument",score:5},
        {id:"movie",label:"Watch a movie",score:2},
        {id:"sports",label:"Play sports",score:2},
        {id:"coding",label:"Code a project",score:2}
      ]
    },

    {
      id:"mi_12",
      layer:2,
      section:"Multiple Intelligence",
      competency:"Musical",
      reportCategory:"Multiple Intelligence",
      question:"Music helps me learn and remember information.",
      type:"likert",
      required:true,
      weight:2,
      options:likertScale
    },

    // ==================================================
    // Bodily Kinesthetic
    // ==================================================

    {
      id:"mi_13",
      layer:2,
      section:"Multiple Intelligence",
      competency:"Bodily",
      reportCategory:"Multiple Intelligence",
      question:"I learn better by doing rather than reading.",
      type:"likert",
      required:true,
      weight:2,
      options:likertScale
    },

    {
      id:"mi_14",
      layer:2,
      section:"Multiple Intelligence",
      competency:"Bodily",
      reportCategory:"Multiple Intelligence",
      question:"Which activity would you enjoy most?",
      type:"radio",
      required:true,
      weight:2,
      options:[
        {id:"sports",label:"Sports Tournament",score:5},
        {id:"reading",label:"Reading Club",score:2},
        {id:"music",label:"Music Club",score:2},
        {id:"science",label:"Science Fair",score:3}
      ]
    },

    {
      id:"mi_15",
      layer:2,
      section:"Multiple Intelligence",
      competency:"Bodily",
      reportCategory:"Multiple Intelligence",
      question:"I enjoy building physical models and prototypes.",
      type:"likert",
      required:true,
      weight:2,
      options:likertScale
    },

  ],
};
// =======================================================
// LAYER 2
// LEARNING STYLE ASSESSMENT
// =======================================================

export const learningStyleSection: AssessmentSection = {
  id: "learning_style",
  title: "Learning Style Assessment",
  description:
    "Understand how you naturally prefer to learn new concepts.",

  questions: [

    // =========================
    // Visual
    // =========================

    {
      id: "ls_1",
      layer: 2,
      section: "Learning Style",
      competency: "Visual",
      reportCategory: "Learning Style",
      question: "Diagrams and flowcharts help me understand topics quickly.",
      type: "likert",
      required: true,
      weight: 2,
      options: likertScale,
    },

    {
      id: "ls_2",
      layer: 2,
      section: "Learning Style",
      competency: "Visual",
      reportCategory: "Learning Style",
      question: "When learning something new, I prefer to:",
      type: "radio",
      required: true,
      weight: 2,
      options: [
        { id: "videos", label: "Watch videos or animations", score: 5 },
        { id: "notes", label: "Read notes", score: 4 },
        { id: "listen", label: "Listen to explanations", score: 2 },
        { id: "practice", label: "Practice directly", score: 3 },
      ],
    },

    {
      id: "ls_3",
      layer: 2,
      section: "Learning Style",
      competency: "Visual",
      reportCategory: "Learning Style",
      question: "Color coding improves my memory.",
      type: "likert",
      required: true,
      weight: 2,
      options: likertScale,
    },

    // =========================
    // Auditory
    // =========================

    {
      id: "ls_4",
      layer: 2,
      section: "Learning Style",
      competency: "Auditory",
      reportCategory: "Learning Style",
      question: "I remember things better after hearing someone explain them.",
      type: "likert",
      required: true,
      weight: 2,
      options: likertScale,
    },

    {
      id: "ls_5",
      layer: 2,
      section: "Learning Style",
      competency: "Auditory",
      reportCategory: "Learning Style",
      question: "Which method helps you prepare best for an exam?",
      type: "radio",
      required: true,
      weight: 2,
      options: [
        { id: "teacher", label: "Teacher explanation", score: 5 },
        { id: "discussion", label: "Discuss with friends", score: 4 },
        { id: "reading", label: "Read textbook", score: 2 },
        { id: "practice", label: "Solve problems", score: 3 },
      ],
    },

    {
      id: "ls_6",
      layer: 2,
      section: "Learning Style",
      competency: "Auditory",
      reportCategory: "Learning Style",
      question: "I enjoy learning through podcasts or lectures.",
      type: "likert",
      required: true,
      weight: 2,
      options: likertScale,
    },

    // =========================
    // Reading / Writing
    // =========================

    {
      id: "ls_7",
      layer: 2,
      section: "Learning Style",
      competency: "Reading",
      reportCategory: "Learning Style",
      question: "Writing my own notes improves my understanding.",
      type: "likert",
      required: true,
      weight: 2,
      options: likertScale,
    },

    {
      id: "ls_8",
      layer: 2,
      section: "Learning Style",
      competency: "Reading",
      reportCategory: "Learning Style",
      question: "Which activity do you enjoy the most?",
      type: "radio",
      required: true,
      weight: 2,
      options: [
        { id: "books", label: "Reading books", score: 5 },
        { id: "videos", label: "Watching tutorials", score: 3 },
        { id: "podcast", label: "Listening to podcasts", score: 2 },
        { id: "lab", label: "Lab experiments", score: 2 },
      ],
    },

    {
      id: "ls_9",
      layer: 2,
      section: "Learning Style",
      competency: "Reading",
      reportCategory: "Learning Style",
      question: "I prefer written instructions over verbal instructions.",
      type: "likert",
      required: true,
      weight: 2,
      options: likertScale,
    },

    // =========================
    // Kinesthetic
    // =========================

    {
      id: "ls_10",
      layer: 2,
      section: "Learning Style",
      competency: "Kinesthetic",
      reportCategory: "Learning Style",
      question: "I learn faster when I perform an activity myself.",
      type: "likert",
      required: true,
      weight: 2,
      options: likertScale,
    },

    {
      id: "ls_11",
      layer: 2,
      section: "Learning Style",
      competency: "Kinesthetic",
      reportCategory: "Learning Style",
      question: "Which workshop would you attend first?",
      type: "radio",
      required: true,
      weight: 2,
      options: [
        { id: "robotics", label: "Robotics Workshop", score: 5 },
        { id: "writing", label: "Creative Writing", score: 2 },
        { id: "seminar", label: "Career Seminar", score: 3 },
        { id: "music", label: "Music Session", score: 2 },
      ],
    },

    {
      id: "ls_12",
      layer: 2,
      section: "Learning Style",
      competency: "Kinesthetic",
      reportCategory: "Learning Style",
      question: "Hands-on activities help me remember concepts for a long time.",
      type: "likert",
      required: true,
      weight: 2,
      options: likertScale,
    },
  ],
};
// =======================================================
// LAYER 2
// EMOTIONAL INTELLIGENCE ASSESSMENT
// =======================================================

export const emotionalIntelligenceSection: AssessmentSection = {
  id: "emotional_intelligence",
  title: "Emotional Intelligence",
  description:
    "Understand how you recognize, manage and respond to emotions in different situations.",

  questions: [

    // ==================================================
    // Self Awareness
    // ==================================================

    {
      id: "eq_1",
      layer: 2,
      section: "Emotional Intelligence",
      competency: "Self Awareness",
      reportCategory: "Emotional Intelligence",
      question:
        "When I feel stressed, I usually recognize the reason quickly.",
      type: "likert",
      required: true,
      weight: 2,
      options: likertScale,
    },

    {
      id: "eq_2",
      layer: 2,
      section: "Emotional Intelligence",
      competency: "Self Awareness",
      reportCategory: "Emotional Intelligence",
      question:
        "After receiving feedback, what do you usually do first?",
      type: "radio",
      required: true,
      weight: 2,
      options: [
        {
          id: "reflect",
          label: "Reflect and think about how to improve",
          score: 5,
        },
        {
          id: "accept",
          label: "Accept it but don't think much about it",
          score: 4,
        },
        {
          id: "ignore",
          label: "Ignore the feedback",
          score: 2,
        },
        {
          id: "defend",
          label: "Immediately defend myself",
          score: 1,
        },
      ],
    },

    {
      id: "eq_3",
      layer: 2,
      section: "Emotional Intelligence",
      competency: "Self Awareness",
      reportCategory: "Emotional Intelligence",
      question:
        "I can usually identify my strengths and weaknesses accurately.",
      type: "likert",
      required: true,
      weight: 2,
      options: likertScale,
    },

    // ==================================================
    // Self Management
    // ==================================================

    {
      id: "eq_4",
      layer: 2,
      section: "Emotional Intelligence",
      competency: "Self Management",
      reportCategory: "Emotional Intelligence",
      question:
        "You receive a poor test result despite working hard. What do you do?",
      type: "radio",
      required: true,
      weight: 2,
      options: [
        {
          id: "analyse",
          label: "Analyse mistakes and prepare better",
          score: 5,
        },
        {
          id: "teacher",
          label: "Discuss with the teacher",
          score: 4,
        },
        {
          id: "upset",
          label: "Feel discouraged and stop trying",
          score: 1,
        },
        {
          id: "ignore",
          label: "Ignore the result",
          score: 2,
        },
      ],
    },

    {
      id: "eq_5",
      layer: 2,
      section: "Emotional Intelligence",
      competency: "Self Management",
      reportCategory: "Emotional Intelligence",
      question:
        "I stay calm when unexpected changes happen.",
      type: "likert",
      required: true,
      weight: 2,
      options: likertScale,
    },

    {
      id: "eq_6",
      layer: 2,
      section: "Emotional Intelligence",
      competency: "Self Management",
      reportCategory: "Emotional Intelligence",
      question:
        "How do you usually respond when you make a mistake?",
      type: "radio",
      required: true,
      weight: 2,
      options: [
        {
          id: "learn",
          label: "Learn from it and move forward",
          score: 5,
        },
        {
          id: "apologize",
          label: "Accept responsibility",
          score: 4,
        },
        {
          id: "blame",
          label: "Blame someone else",
          score: 1,
        },
        {
          id: "avoid",
          label: "Avoid thinking about it",
          score: 2,
        },
      ],
    },

    // ==================================================
    // Empathy
    // ==================================================

    {
      id: "eq_7",
      layer: 2,
      section: "Emotional Intelligence",
      competency: "Empathy",
      reportCategory: "Emotional Intelligence",
      question:
        "A classmate looks upset during lunch. What would you most likely do?",
      type: "radio",
      required: true,
      weight: 2,
      options: [
        {
          id: "talk",
          label: "Talk to them privately",
          score: 5,
        },
        {
          id: "teacher",
          label: "Inform a teacher if needed",
          score: 4,
        },
        {
          id: "observe",
          label: "Wait to see what happens",
          score: 2,
        },
        {
          id: "ignore",
          label: "Continue with your day",
          score: 1,
        },
      ],
    },

    {
      id: "eq_8",
      layer: 2,
      section: "Emotional Intelligence",
      competency: "Empathy",
      reportCategory: "Emotional Intelligence",
      question:
        "I try to understand another person's perspective before judging.",
      type: "likert",
      required: true,
      weight: 2,
      options: likertScale,
    },

    {
      id: "eq_9",
      layer: 2,
      section: "Emotional Intelligence",
      competency: "Empathy",
      reportCategory: "Emotional Intelligence",
      question:
        "Which quality is most important in a friend?",
      type: "radio",
      required: true,
      weight: 2,
      options: [
        { id: "kind", label: "Kindness", score: 5 },
        { id: "funny", label: "Humour", score: 3 },
        { id: "smart", label: "Intelligence", score: 3 },
        { id: "popular", label: "Popularity", score: 1 },
      ],
    },

    // ==================================================
    // Relationship Management
    // ==================================================

    {
      id: "eq_10",
      layer: 2,
      section: "Emotional Intelligence",
      competency: "Relationship Management",
      reportCategory: "Emotional Intelligence",
      question:
        "How comfortable are you resolving disagreements respectfully?",
      type: "likert",
      required: true,
      weight: 2,
      options: likertScale,
    },

    {
      id: "eq_11",
      layer: 2,
      section: "Emotional Intelligence",
      competency: "Relationship Management",
      reportCategory: "Emotional Intelligence",
      question:
        "In a team project, one member isn't contributing. What would you do?",
      type: "radio",
      required: true,
      weight: 2,
      options: [
        {
          id: "support",
          label: "Talk privately and offer support",
          score: 5,
        },
        {
          id: "teacher",
          label: "Discuss with the teacher",
          score: 4,
        },
        {
          id: "complain",
          label: "Complain in front of everyone",
          score: 1,
        },
        {
          id: "ignore",
          label: "Do all the work yourself",
          score: 2,
        },
      ],
    },

    {
      id: "eq_12",
      layer: 2,
      section: "Emotional Intelligence",
      competency: "Relationship Management",
      reportCategory: "Emotional Intelligence",
      question:
        "I enjoy encouraging and appreciating others when they perform well.",
      type: "likert",
      required: true,
      weight: 2,
      options: likertScale,
    },

  ],
};
// =======================================================
// LAYER 3
// COGNITIVE ASSESSMENT (GRADE 6-8)
// =======================================================

export const cognitive68Section: AssessmentSection = {

  id: "cognitive_68",

  title: "Cognitive Assessment (Grades 6–8)",

  description:
    "Evaluate logical thinking, reasoning and problem-solving abilities.",

  questions: [

    // ==========================================
    // Numerical
    // ==========================================

    {

      id:"cg68_1",

      layer:3,

      section:"Cognitive 6-8",

      competency:"Numerical Reasoning",

      reportCategory:"Cognitive",

      question:
        "What comes next?\n\n2, 4, 8, 16, ?",

      type:"radio",

      required:true,

      weight:3,

      options:[

        {id:"18",label:"18",score:0},

        {id:"24",label:"24",score:0},

        {id:"32",label:"32",score:5},

        {id:"34",label:"34",score:0}

      ]

    },

    {

      id:"cg68_2",

      layer:3,

      section:"Cognitive 6-8",

      competency:"Numerical Reasoning",

      reportCategory:"Cognitive",

      question:
        "25 + 18 = ?",

      type:"radio",

      required:true,

      weight:2,

      options:[

        {id:"41",label:"41",score:0},

        {id:"42",label:"42",score:0},

        {id:"43",label:"43",score:5},

        {id:"44",label:"44",score:0}

      ]

    },

    // ==========================================
    // Logical
    // ==========================================

    {

      id:"cg68_3",

      layer:3,

      section:"Cognitive 6-8",

      competency:"Logical Reasoning",

      reportCategory:"Cognitive",

      question:
        "If ALL roses are flowers and SOME flowers fade quickly, which statement is definitely true?",

      type:"radio",

      required:true,

      weight:3,

      options:[

        {id:"1",label:"All flowers are roses",score:0},

        {id:"2",label:"Some roses are flowers",score:5},

        {id:"3",label:"All roses fade quickly",score:0},

        {id:"4",label:"No flowers fade",score:0}

      ]

    },

    {

      id:"cg68_4",

      layer:3,

      section:"Cognitive 6-8",

      competency:"Pattern Recognition",

      reportCategory:"Cognitive",

      question:
        "Find the missing number.\n\n3 6 9\n6 12 18\n9 18 ?",

      type:"radio",

      required:true,

      weight:3,

      options:[

        {id:"24",label:"24",score:0},

        {id:"27",label:"27",score:5},

        {id:"30",label:"30",score:0},

        {id:"36",label:"36",score:0}

      ]

    },

    // ==========================================
    // Spatial
    // ==========================================

    {

      id:"cg68_5",

      layer:3,

      section:"Cognitive 6-8",

      competency:"Spatial",

      reportCategory:"Cognitive",

      question:
        "Which shape is different from the others?",

      type:"image-choice",

      required:true,

      weight:3,

      options:[

        {
          id:"a",
          label:"Shape A",
          image:"/images/cognitive/shape1.png",
          score:0
        },

        {
          id:"b",
          label:"Shape B",
          image:"/images/cognitive/shape2.png",
          score:5
        },

        {
          id:"c",
          label:"Shape C",
          image:"/images/cognitive/shape3.png",
          score:0
        },

        {
          id:"d",
          label:"Shape D",
          image:"/images/cognitive/shape4.png",
          score:0
        }

      ]

    }

  ]

};
// =======================================================
// LAYER 3
// COGNITIVE ASSESSMENT (GRADE 9-12)
// =======================================================

export const cognitive912Section: AssessmentSection = {
  id: "cognitive_912",

  title: "Cognitive Assessment (Grades 9-12)",

  description:
    "Measure numerical reasoning, analytical thinking, verbal ability and abstract reasoning.",

  questions: [

    // ==========================================
    // Numerical Ability
    // ==========================================

    {
      id: "cg912_1",
      layer: 3,
      section: "Cognitive 9-12",
      competency: "Numerical Ability",
      reportCategory: "Cognitive",
      question:
        "If the average of 15, 20 and x is 25, what is x?",
      type: "radio",
      required: true,
      weight: 3,
      options: [
        { id: "35", label: "35", score: 0 },
        { id: "40", label: "40", score: 5 },
        { id: "45", label: "45", score: 0 },
        { id: "50", label: "50", score: 0 },
      ],
    },

    {
      id: "cg912_2",
      layer: 3,
      section: "Cognitive 9-12",
      competency: "Numerical Ability",
      reportCategory: "Cognitive",
      question:
        "What is 25% of 480?",
      type: "radio",
      required: true,
      weight: 2,
      options: [
        { id: "100", label: "100", score: 0 },
        { id: "110", label: "110", score: 0 },
        { id: "120", label: "120", score: 5 },
        { id: "140", label: "140", score: 0 },
      ],
    },

    // ==========================================
    // Logical Reasoning
    // ==========================================

    {
      id: "cg912_3",
      layer: 3,
      section: "Cognitive 9-12",
      competency: "Logical Reasoning",
      reportCategory: "Cognitive",
      question:
        "All doctors are graduates. Some graduates are researchers. Which statement must be true?",
      type: "radio",
      required: true,
      weight: 3,
      options: [
        {
          id: "a",
          label: "Some doctors are researchers.",
          score: 0,
        },
        {
          id: "b",
          label: "All doctors are graduates.",
          score: 5,
        },
        {
          id: "c",
          label: "All graduates are doctors.",
          score: 0,
        },
        {
          id: "d",
          label: "Researchers are doctors.",
          score: 0,
        },
      ],
    },

    {
      id: "cg912_4",
      layer: 3,
      section: "Cognitive 9-12",
      competency: "Logical Reasoning",
      reportCategory: "Cognitive",
      question:
        "Complete the series:\n\n3, 6, 12, 24, ?",
      type: "radio",
      required: true,
      weight: 3,
      options: [
        { id: "36", label: "36", score: 0 },
        { id: "42", label: "42", score: 0 },
        { id: "48", label: "48", score: 5 },
        { id: "54", label: "54", score: 0 },
      ],
    },

    // ==========================================
    // Analytical Thinking
    // ==========================================

    {
      id: "cg912_5",
      layer: 3,
      section: "Cognitive 9-12",
      competency: "Analytical Thinking",
      reportCategory: "Cognitive",
      question:
        "A company sells 120 laptops in January and 150 in February. What is the percentage increase?",
      type: "radio",
      required: true,
      weight: 3,
      options: [
        { id: "20", label: "20%", score: 0 },
        { id: "25", label: "25%", score: 5 },
        { id: "30", label: "30%", score: 0 },
        { id: "35", label: "35%", score: 0 },
      ],
    },

    {
      id: "cg912_6",
      layer: 3,
      section: "Cognitive 9-12",
      competency: "Analytical Thinking",
      reportCategory: "Cognitive",
      question:
        "You have limited time to prepare for four exams. What is the best approach?",
      type: "radio",
      required: true,
      weight: 2,
      options: [
        {
          id: "priority",
          label: "Prioritize subjects based on importance and difficulty.",
          score: 5,
        },
        {
          id: "random",
          label: "Study whichever subject you feel like.",
          score: 1,
        },
        {
          id: "easy",
          label: "Only study easy subjects.",
          score: 2,
        },
        {
          id: "skip",
          label: "Skip difficult subjects.",
          score: 0,
        },
      ],
    },

    // ==========================================
    // Verbal Ability
    // ==========================================

    {
      id: "cg912_7",
      layer: 3,
      section: "Cognitive 9-12",
      competency: "Verbal Ability",
      reportCategory: "Cognitive",
      question:
        "Choose the word closest in meaning to 'Diligent'.",
      type: "radio",
      required: true,
      weight: 2,
      options: [
        { id: "lazy", label: "Lazy", score: 0 },
        { id: "careful", label: "Hardworking", score: 5 },
        { id: "slow", label: "Slow", score: 0 },
        { id: "happy", label: "Happy", score: 0 },
      ],
    },

    {
      id: "cg912_8",
      layer: 3,
      section: "Cognitive 9-12",
      competency: "Verbal Ability",
      reportCategory: "Cognitive",
      question:
        "Complete the analogy:\n\nTeacher : School :: Doctor : ?",
      type: "radio",
      required: true,
      weight: 2,
      options: [
        { id: "clinic", label: "Hospital", score: 5 },
        { id: "market", label: "Market", score: 0 },
        { id: "bank", label: "Bank", score: 0 },
        { id: "library", label: "Library", score: 0 },
      ],
    },

    // ==========================================
    // Abstract Reasoning
    // ==========================================

    {
      id: "cg912_9",
      layer: 3,
      section: "Cognitive 9-12",
      competency: "Abstract Reasoning",
      reportCategory: "Cognitive",
      question:
        "Which figure should replace the question mark?",
      type: "image-choice",
      required: true,
      weight: 3,
      options: [
        {
          id: "a",
          label: "Option A",
          image: "/images/abstract/a.png",
          score: 0,
        },
        {
          id: "b",
          label: "Option B",
          image: "/images/abstract/b.png",
          score: 5,
        },
        {
          id: "c",
          label: "Option C",
          image: "/images/abstract/c.png",
          score: 0,
        },
        {
          id: "d",
          label: "Option D",
          image: "/images/abstract/d.png",
          score: 0,
        },
      ],
    },

    {
      id: "cg912_10",
      layer: 3,
      section: "Cognitive 9-12",
      competency: "Abstract Reasoning",
      reportCategory: "Cognitive",
      question:
        "Choose the shape that does NOT belong with the others.",
      type: "image-choice",
      required: true,
      weight: 3,
      options: [
        {
          id: "1",
          label: "Shape A",
          image: "/images/abstract/s1.png",
          score: 0,
        },
        {
          id: "2",
          label: "Shape B",
          image: "/images/abstract/s2.png",
          score: 0,
        },
        {
          id: "3",
          label: "Shape C",
          image: "/images/abstract/s3.png",
          score: 5,
        },
        {
          id: "4",
          label: "Shape D",
          image: "/images/abstract/s4.png",
          score: 0,
        },
      ],
    },

  ],
};
// =======================================================
// LAYER 4
// SKILL COMPETENCY (GRADE 6-8)
// =======================================================

export const skills68Section: AssessmentSection = {

  id: "skills_68",

  title: "Skill Competency (Grades 6–8)",

  description:
    "Evaluate practical skills developed during school life.",

  questions: [

    // =====================================
    // Communication
    // =====================================

    {

      id:"sk68_1",

      layer:4,

      section:"Skills 6-8",

      competency:"Communication",

      reportCategory:"Skills",

      question:
        "How comfortable are you explaining an idea in front of your classmates?",

      type:"likert",

      required:true,

      weight:3,

      options:likertScale

    },

    {

      id:"sk68_2",

      layer:4,

      section:"Skills 6-8",

      competency:"Communication",

      reportCategory:"Skills",

      question:
        "During a group activity, what role do you usually take?",

      type:"radio",

      required:true,

      weight:3,

      options:[

        {id:"leader",label:"Explain ideas",score:5},

        {id:"writer",label:"Write notes",score:4},

        {id:"observer",label:"Observe others",score:2},

        {id:"silent",label:"Stay quiet",score:1}

      ]

    },

    // =====================================
    // Creativity
    // =====================================

    {

      id:"sk68_3",

      layer:4,

      section:"Skills 6-8",

      competency:"Creativity",

      reportCategory:"Skills",

      question:
        "You are given waste materials. What would you most likely do?",

      type:"radio",

      required:true,

      weight:3,

      options:[

        {id:"craft",label:"Build something useful",score:5},

        {id:"draw",label:"Decorate them",score:4},

        {id:"store",label:"Keep them",score:2},

        {id:"throw",label:"Throw them away",score:1}

      ]

    },

    {

      id:"sk68_4",

      layer:4,

      section:"Skills 6-8",

      competency:"Creativity",

      reportCategory:"Skills",

      question:
        "I enjoy finding different ways to solve the same problem.",

      type:"likert",

      required:true,

      weight:2,

      options:likertScale

    },

    // =====================================
    // Teamwork
    // =====================================

    {

      id:"sk68_5",

      layer:4,

      section:"Skills 6-8",

      competency:"Teamwork",

      reportCategory:"Skills",

      question:
        "Your team is struggling to finish a project. What do you do?",

      type:"radio",

      required:true,

      weight:3,

      options:[

        {id:"help",label:"Help everyone finish",score:5},

        {id:"teacher",label:"Ask teacher",score:4},

        {id:"own",label:"Finish only my work",score:2},

        {id:"leave",label:"Leave the team",score:1}

      ]

    },

    {

      id:"sk68_6",

      layer:4,

      section:"Skills 6-8",

      competency:"Teamwork",

      reportCategory:"Skills",

      question:
        "I enjoy working with classmates on projects.",

      type:"likert",

      required:true,

      weight:2,

      options:likertScale

    },

    // =====================================
    // Problem Solving
    // =====================================

    {

      id:"sk68_7",

      layer:4,

      section:"Skills 6-8",

      competency:"Problem Solving",

      reportCategory:"Skills",

      question:
        "A robot in your science project stops working. What would you do first?",

      type:"radio",

      required:true,

      weight:3,

      options:[

        {id:"check",label:"Check each connection",score:5},

        {id:"teacher",label:"Ask teacher immediately",score:3},

        {id:"friend",label:"Ask friend",score:3},

        {id:"quit",label:"Give up",score:1}

      ]

    },

    {

      id:"sk68_8",

      layer:4,

      section:"Skills 6-8",

      competency:"Problem Solving",

      reportCategory:"Skills",

      question:
        "I enjoy solving challenging problems.",

      type:"likert",

      required:true,

      weight:2,

      options:likertScale

    },

    // =====================================
    // Digital Skills
    // =====================================

    {

      id:"sk68_9",

      layer:4,

      section:"Skills 6-8",

      competency:"Digital Literacy",

      reportCategory:"Skills",

      question:
        "How confident are you using computers or tablets for learning?",

      type:"rating",

      required:true,

      min:1,

      max:5,

      weight:2

    },

    {

      id:"sk68_10",

      layer:4,

      section:"Skills 6-8",

      competency:"Digital Literacy",

      reportCategory:"Skills",

      question:
        "Which activity interests you the most?",

      type:"radio",

      required:true,

      weight:3,

      options:[

        {id:"coding",label:"Coding Games",score:5},

        {id:"design",label:"Graphic Design",score:4},

        {id:"editing",label:"Video Editing",score:4},

        {id:"typing",label:"Typing Documents",score:2}
      ]
    }
  ]
};
// =======================================================
// LAYER 4
// SKILL COMPETENCY (GRADE 9-10)
// =======================================================

export const skills910Section: AssessmentSection = {

  id: "skills_910",

  title: "Skill Competency (Grades 9–10)",

  description:
    "Assess essential career readiness and practical competencies.",

  questions: [

    // ======================================
    // Critical Thinking
    // ======================================

    {
      id:"sk910_1",
      layer:4,
      section:"Skills 9-10",
      competency:"Critical Thinking",
      reportCategory:"Skills",
      question:"When faced with a difficult problem, I first analyze all possible solutions before deciding.",
      type:"likert",
      required:true,
      weight:3,
      options:likertScale
    },

    {
      id:"sk910_2",
      layer:4,
      section:"Skills 9-10",
      competency:"Critical Thinking",
      reportCategory:"Skills",
      question:"Your school plans to reduce plastic usage. What would you suggest first?",
      type:"radio",
      required:true,
      weight:3,
      options:[
        {id:"survey",label:"Collect student opinions before deciding",score:5},
        {id:"ban",label:"Immediately ban plastic",score:3},
        {id:"ignore",label:"No changes are required",score:1},
        {id:"teacher",label:"Wait for teachers to decide",score:2},
      ]
    },

    // ======================================
    // Leadership
    // ======================================

    {
      id:"sk910_3",
      layer:4,
      section:"Skills 9-10",
      competency:"Leadership",
      reportCategory:"Skills",
      question:"I enjoy motivating others to complete a task successfully.",
      type:"likert",
      required:true,
      weight:3,
      options:likertScale
    },

    {
      id:"sk910_4",
      layer:4,
      section:"Skills 9-10",
      competency:"Leadership",
      reportCategory:"Skills",
      question:"Your team misses an important deadline. What would you do?",
      type:"radio",
      required:true,
      weight:3,
      options:[
        {id:"review",label:"Review what went wrong and improve",score:5},
        {id:"blame",label:"Blame team members",score:1},
        {id:"teacher",label:"Ask the teacher to solve it",score:2},
        {id:"ignore",label:"Ignore the issue",score:0},
      ]
    },

    // ======================================
    // Digital Literacy
    // ======================================

    {
      id:"sk910_5",
      layer:4,
      section:"Skills 9-10",
      competency:"Digital Literacy",
      reportCategory:"Skills",
      question:"How confident are you using productivity tools like PowerPoint, Excel or Google Docs?",
      type:"rating",
      required:true,
      min:1,
      max:5,
      weight:2
    },

    {
      id:"sk910_6",
      layer:4,
      section:"Skills 9-10",
      competency:"Digital Literacy",
      reportCategory:"Skills",
      question:"Which digital activity interests you the most?",
      type:"radio",
      required:true,
      weight:3,
      options:[
        {id:"coding",label:"Programming",score:5},
        {id:"design",label:"Graphic Design",score:4},
        {id:"editing",label:"Video Editing",score:4},
        {id:"office",label:"Office Applications",score:3},
      ]
    },

    // ======================================
    // Financial Awareness
    // ======================================

    {
      id:"sk910_7",
      layer:4,
      section:"Skills 9-10",
      competency:"Financial Awareness",
      reportCategory:"Skills",
      question:"Suppose you receive ₹5,000 as prize money. What would you do first?",
      type:"radio",
      required:true,
      weight:3,
      options:[
        {id:"save",label:"Save or invest part of it",score:5},
        {id:"spend",label:"Spend everything immediately",score:1},
        {id:"family",label:"Discuss with parents before deciding",score:4},
        {id:"donate",label:"Donate all of it",score:3},
      ]
    },

    {
      id:"sk910_8",
      layer:4,
      section:"Skills 9-10",
      competency:"Financial Awareness",
      reportCategory:"Skills",
      question:"I usually compare options before making purchases.",
      type:"likert",
      required:true,
      weight:2,
      options:likertScale
    },

    // ======================================
    // Entrepreneurship
    // ======================================

    {
      id:"sk910_9",
      layer:4,
      section:"Skills 9-10",
      competency:"Entrepreneurship",
      reportCategory:"Skills",
      question:"If you started a small business, what would excite you most?",
      type:"radio",
      required:true,
      weight:3,
      options:[
        {id:"idea",label:"Creating a new product",score:5},
        {id:"sales",label:"Selling to customers",score:4},
        {id:"marketing",label:"Marketing the brand",score:4},
        {id:"accounts",label:"Managing accounts",score:3},
      ]
    },

    {
      id:"sk910_10",
      layer:4,
      section:"Skills 9-10",
      competency:"Entrepreneurship",
      reportCategory:"Skills",
      question:"I enjoy identifying opportunities where others see problems.",
      type:"likert",
      required:true,
      weight:3,
      options:likertScale
    },

    // ======================================
    // Time Management
    // ======================================

    {
      id:"sk910_11",
      layer:4,
      section:"Skills 9-10",
      competency:"Time Management",
      reportCategory:"Skills",
      question:"How often do you plan your study schedule in advance?",
      type:"likert",
      required:true,
      weight:2,
      options:likertScale
    },

    {
      id:"sk910_12",
      layer:4,
      section:"Skills 9-10",
      competency:"Time Management",
      reportCategory:"Skills",
      question:"When several assignments are due together, you usually:",
      type:"radio",
      required:true,
      weight:3,
      options:[
        {id:"priority",label:"Prioritize tasks by deadline and importance",score:5},
        {id:"random",label:"Do whichever seems easiest",score:2},
        {id:"last",label:"Start on the last day",score:1},
        {id:"avoid",label:"Avoid difficult assignments",score:0},
      ]
    }
  ]
};
// =======================================================
// LAYER 4
// SKILL COMPETENCY (GRADE 11-12 COMMON)
// =======================================================

export const skills1112CommonSection: AssessmentSection = {

  id: "skills_1112_common",

  title: "Skill Competency (Grades 11–12)",

  description:
    "Assess advanced competencies required for higher education and future careers.",

  questions: [

    // ===========================================
    // Critical Thinking
    // ===========================================

    {
      id:"sk1112_1",
      layer:4,
      section:"Skills 11-12",
      competency:"Critical Thinking",
      reportCategory:"Skills",
      question:
        "I enjoy analysing complex problems before making decisions.",
      type:"likert",
      required:true,
      weight:3,
      options:likertScale
    },

    {
      id:"sk1112_2",
      layer:4,
      section:"Skills 11-12",
      competency:"Critical Thinking",
      reportCategory:"Skills",
      question:
        "Which approach best describes how you solve unfamiliar problems?",
      type:"radio",
      required:true,
      weight:3,
      options:[
        {
          id:"research",
          label:"Research, analyse and compare solutions",
          score:5
        },
        {
          id:"friends",
          label:"Ask friends immediately",
          score:3
        },
        {
          id:"guess",
          label:"Try random solutions",
          score:1
        },
        {
          id:"avoid",
          label:"Avoid the problem",
          score:0
        }
      ]
    },

    // ===========================================
    // Decision Making
    // ===========================================

    {
      id:"sk1112_3",
      layer:4,
      section:"Skills 11-12",
      competency:"Decision Making",
      reportCategory:"Skills",
      question:
        "Before making important decisions, I evaluate both risks and benefits.",
      type:"likert",
      required:true,
      weight:3,
      options:likertScale
    },

    {
      id:"sk1112_4",
      layer:4,
      section:"Skills 11-12",
      competency:"Decision Making",
      reportCategory:"Skills",
      question:
        "You receive two college offers. What would you compare first?",
      type:"radio",
      required:true,
      weight:3,
      options:[
        {
          id:"career",
          label:"Career opportunities, curriculum and placements",
          score:5
        },
        {
          id:"fees",
          label:"Only fees",
          score:2
        },
        {
          id:"friends",
          label:"Where friends are joining",
          score:1
        },
        {
          id:"random",
          label:"Choose randomly",
          score:0
        }
      ]
    },

    // ===========================================
    // Leadership
    // ===========================================

    {
      id:"sk1112_5",
      layer:4,
      section:"Skills 11-12",
      competency:"Leadership",
      reportCategory:"Skills",
      question:
        "I naturally take responsibility during team projects.",
      type:"likert",
      required:true,
      weight:3,
      options:likertScale
    },

    {
      id:"sk1112_6",
      layer:4,
      section:"Skills 11-12",
      competency:"Leadership",
      reportCategory:"Skills",
      question:
        "A project is failing because team members disagree. What would you do?",
      type:"radio",
      required:true,
      weight:3,
      options:[
        {
          id:"mediate",
          label:"Facilitate discussion and resolve conflicts",
          score:5
        },
        {
          id:"teacher",
          label:"Ask the teacher to intervene",
          score:3
        },
        {
          id:"ignore",
          label:"Ignore the conflict",
          score:1
        },
        {
          id:"quit",
          label:"Leave the team",
          score:0
        }
      ]
    },

    // ===========================================
    // Communication
    // ===========================================

    {
      id:"sk1112_7",
      layer:4,
      section:"Skills 11-12",
      competency:"Communication",
      reportCategory:"Skills",
      question:
        "How confident are you presenting ideas to a large audience?",
      type:"rating",
      required:true,
      min:1,
      max:5,
      weight:2
    },

    {
      id:"sk1112_8",
      layer:4,
      section:"Skills 11-12",
      competency:"Communication",
      reportCategory:"Skills",
      question:
        "I can explain difficult concepts in a simple way.",
      type:"likert",
      required:true,
      weight:3,
      options:likertScale
    },

    // ===========================================
    // Innovation
    // ===========================================

    {
      id:"sk1112_9",
      layer:4,
      section:"Skills 11-12",
      competency:"Innovation",
      reportCategory:"Skills",
      question:
        "I enjoy generating new ideas to improve existing products or processes.",
      type:"likert",
      required:true,
      weight:3,
      options:likertScale
    },

    {
      id:"sk1112_10",
      layer:4,
      section:"Skills 11-12",
      competency:"Innovation",
      reportCategory:"Skills",
      question:
        "Which project would excite you the most?",
      type:"radio",
      required:true,
      weight:3,
      options:[
        {
          id:"startup",
          label:"Build a startup idea",
          score:5
        },
        {
          id:"research",
          label:"Research a scientific problem",
          score:5
        },
        {
          id:"volunteer",
          label:"Organize a community campaign",
          score:4
        },
        {
          id:"routine",
          label:"Perform routine office work",
          score:2
        }
      ]
    }
  ]
};
// =======================================================
// LAYER 4
// SCIENCE STREAM ASSESSMENT
// =======================================================

export const scienceStreamSection: AssessmentSection = {

  id: "science_stream",

  title: "Science Stream Assessment",

  description:
    "Assess aptitude for engineering, medicine, research and scientific careers.",

  questions: [

    // ==========================================
    // Scientific Curiosity
    // ==========================================

    {
      id:"sci_1",
      layer:4,
      section:"Science Stream",
      competency:"Scientific Curiosity",
      reportCategory:"Science",
      question:"I enjoy understanding why natural phenomena occur.",
      type:"likert",
      required:true,
      weight:3,
      options:likertScale
    },

    {
      id:"sci_2",
      layer:4,
      section:"Science Stream",
      competency:"Scientific Curiosity",
      reportCategory:"Science",
      question:"Which project would you choose for a science exhibition?",
      type:"radio",
      required:true,
      weight:3,
      options:[
        {id:"robot",label:"Build an autonomous robot",score:5},
        {id:"solar",label:"Create a solar-powered device",score:5},
        {id:"medical",label:"Design a healthcare solution",score:5},
        {id:"poster",label:"Prepare a science poster",score:3}
      ]
    },

    // ==========================================
    // Mathematics
    // ==========================================

    {
      id:"sci_3",
      layer:4,
      section:"Science Stream",
      competency:"Mathematical Thinking",
      reportCategory:"Science",
      question:"Complex mathematical problems motivate me rather than discourage me.",
      type:"likert",
      required:true,
      weight:3,
      options:likertScale
    },

    {
      id:"sci_4",
      layer:4,
      section:"Science Stream",
      competency:"Mathematical Thinking",
      reportCategory:"Science",
      question:"Which subject do you enjoy solving the most?",
      type:"radio",
      required:true,
      weight:3,
      options:[
        {id:"math",label:"Mathematics",score:5},
        {id:"physics",label:"Physics",score:5},
        {id:"chemistry",label:"Chemistry",score:4},
        {id:"biology",label:"Biology",score:4}
      ]
    },

    // ==========================================
    // Research
    // ==========================================

    {
      id:"sci_5",
      layer:4,
      section:"Science Stream",
      competency:"Research",
      reportCategory:"Science",
      question:"I enjoy collecting data before making conclusions.",
      type:"likert",
      required:true,
      weight:3,
      options:likertScale
    },

    {
      id:"sci_6",
      layer:4,
      section:"Science Stream",
      competency:"Research",
      reportCategory:"Science",
      question:"You discover conflicting information online. What do you do?",
      type:"radio",
      required:true,
      weight:3,
      options:[
        {id:"verify",label:"Verify using reliable sources",score:5},
        {id:"teacher",label:"Ask a teacher",score:4},
        {id:"trust",label:"Trust the first website",score:1},
        {id:"ignore",label:"Ignore the difference",score:0}
      ]
    },

    // ==========================================
    // Innovation
    // ==========================================

    {
      id:"sci_7",
      layer:4,
      section:"Science Stream",
      competency:"Innovation",
      reportCategory:"Science",
      question:"I enjoy creating solutions using technology.",
      type:"likert",
      required:true,
      weight:3,
      options:likertScale
    },

    {
      id:"sci_8",
      layer:4,
      section:"Science Stream",
      competency:"Innovation",
      reportCategory:"Science",
      question:"Which field interests you the most?",
      type:"radio",
      required:true,
      weight:3,
      options:[
        {id:"ai",label:"Artificial Intelligence",score:5},
        {id:"robotics",label:"Robotics",score:5},
        {id:"space",label:"Space Technology",score:5},
        {id:"biotech",label:"Biotechnology",score:5}
      ]
    },

    // ==========================================
    // Engineering Mindset
    // ==========================================

    {
      id:"sci_9",
      layer:4,
      section:"Science Stream",
      competency:"Engineering",
      reportCategory:"Science",
      question:"When something breaks, I enjoy understanding how it works before fixing it.",
      type:"likert",
      required:true,
      weight:3,
      options:likertScale
    },

    {
      id:"sci_10",
      layer:4,
      section:"Science Stream",
      competency:"Engineering",
      reportCategory:"Science",
      question:"Which career appeals to you the most?",
      type:"radio",
      required:true,
      weight:3,
      options:[
        {id:"engineer",label:"Engineer",score:5},
        {id:"doctor",label:"Doctor",score:5},
        {id:"scientist",label:"Scientist",score:5},
        {id:"researcher",label:"Researcher",score:5}
      ]
    }
  ]
};
// =======================================================
// LAYER 4
// COMMERCE STREAM ASSESSMENT
// =======================================================

export const commerceStreamSection: AssessmentSection = {

  id: "commerce_stream",

  title: "Commerce Stream Assessment",

  description:
    "Evaluate aptitude for business, finance, economics, accounting and entrepreneurship.",

  questions: [

    // ==========================================
    // Business Thinking
    // ==========================================

    {
      id:"com_1",
      layer:4,
      section:"Commerce Stream",
      competency:"Business Thinking",
      reportCategory:"Commerce",
      question:"I enjoy identifying opportunities to improve products or services.",
      type:"likert",
      required:true,
      weight:3,
      options:likertScale
    },

    {
      id:"com_2",
      layer:4,
      section:"Commerce Stream",
      competency:"Business Thinking",
      reportCategory:"Commerce",
      question:"If you started a company, what would excite you the most?",
      type:"radio",
      required:true,
      weight:3,
      options:[
        {id:"idea",label:"Creating innovative products",score:5},
        {id:"marketing",label:"Marketing the business",score:4},
        {id:"finance",label:"Managing finances",score:4},
        {id:"operations",label:"Managing day-to-day operations",score:3}
      ]
    },

    // ==========================================
    // Financial Literacy
    // ==========================================

    {
      id:"com_3",
      layer:4,
      section:"Commerce Stream",
      competency:"Financial Literacy",
      reportCategory:"Commerce",
      question:"I enjoy planning budgets and tracking expenses.",
      type:"likert",
      required:true,
      weight:3,
      options:likertScale
    },

    {
      id:"com_4",
      layer:4,
      section:"Commerce Stream",
      competency:"Financial Literacy",
      reportCategory:"Commerce",
      question:"You receive ₹20,000. What would you do first?",
      type:"radio",
      required:true,
      weight:3,
      options:[
        {id:"invest",label:"Invest part of it",score:5},
        {id:"save",label:"Save it in a bank",score:4},
        {id:"spend",label:"Spend everything",score:1},
        {id:"family",label:"Discuss financial options with family",score:3}
      ]
    },

    // ==========================================
    // Economics
    // ==========================================

    {
      id:"com_5",
      layer:4,
      section:"Commerce Stream",
      competency:"Economics",
      reportCategory:"Commerce",
      question:"I am interested in understanding how markets and economies work.",
      type:"likert",
      required:true,
      weight:3,
      options:likertScale
    },

    {
      id:"com_6",
      layer:4,
      section:"Commerce Stream",
      competency:"Economics",
      reportCategory:"Commerce",
      question:"If the price of a product suddenly increases, what would you most likely do?",
      type:"radio",
      required:true,
      weight:3,
      options:[
        {id:"compare",label:"Compare alternatives before buying",score:5},
        {id:"wait",label:"Wait for prices to reduce",score:4},
        {id:"buy",label:"Buy immediately",score:2},
        {id:"ignore",label:"Ignore the price difference",score:1}
      ]
    },

    // ==========================================
    // Marketing
    // ==========================================

    {
      id:"com_7",
      layer:4,
      section:"Commerce Stream",
      competency:"Marketing",
      reportCategory:"Commerce",
      question:"I enjoy understanding what customers want.",
      type:"likert",
      required:true,
      weight:3,
      options:likertScale
    },

    {
      id:"com_8",
      layer:4,
      section:"Commerce Stream",
      competency:"Marketing",
      reportCategory:"Commerce",
      question:"Your school launches a new event. Which responsibility would you prefer?",
      type:"radio",
      required:true,
      weight:3,
      options:[
        {id:"promotion",label:"Promote the event on social media",score:5},
        {id:"design",label:"Design posters",score:4},
        {id:"finance",label:"Manage ticket sales",score:3},
        {id:"registration",label:"Registration desk",score:2}
      ]
    },

    // ==========================================
    // Entrepreneurship
    // ==========================================

    {
      id:"com_9",
      layer:4,
      section:"Commerce Stream",
      competency:"Entrepreneurship",
      reportCategory:"Commerce",
      question:"Taking calculated risks excites me.",
      type:"likert",
      required:true,
      weight:3,
      options:likertScale
    },

    {
      id:"com_10",
      layer:4,
      section:"Commerce Stream",
      competency:"Entrepreneurship",
      reportCategory:"Commerce",
      question:"Which business idea would you most like to build?",
      type:"radio",
      required:true,
      weight:3,
      options:[
        {id:"startup",label:"Technology Startup",score:5},
        {id:"ecommerce",label:"Online Store",score:5},
        {id:"consulting",label:"Consulting Company",score:4},
        {id:"restaurant",label:"Restaurant",score:4}
      ]
    }
  ]
};
// =======================================================
// LAYER 4
// ARTS & HUMANITIES STREAM ASSESSMENT
// =======================================================

export const artsStreamSection: AssessmentSection = {

  id: "arts_stream",

  title: "Arts & Humanities Stream Assessment",

  description:
    "Assess aptitude for humanities, psychology, literature, design, communication and social sciences.",

  questions: [

    // ==========================================
    // Creativity
    // ==========================================

    {
      id:"arts_1",
      layer:4,
      section:"Arts Stream",
      competency:"Creativity",
      reportCategory:"Arts",
      question:"I enjoy expressing ideas creatively through writing, drawing, music or design.",
      type:"likert",
      required:true,
      weight:3,
      options:likertScale
    },

    {
      id:"arts_2",
      layer:4,
      section:"Arts Stream",
      competency:"Creativity",
      reportCategory:"Arts",
      question:"Which activity excites you the most?",
      type:"radio",
      required:true,
      weight:3,
      options:[
        {id:"painting",label:"Painting or Illustration",score:5},
        {id:"film",label:"Film Making",score:5},
        {id:"photography",label:"Photography",score:5},
        {id:"craft",label:"Craft & Design",score:4}
      ]
    },

    // ==========================================
    // Communication
    // ==========================================

    {
      id:"arts_3",
      layer:4,
      section:"Arts Stream",
      competency:"Communication",
      reportCategory:"Arts",
      question:"I enjoy expressing my ideas confidently in front of others.",
      type:"likert",
      required:true,
      weight:3,
      options:likertScale
    },

    {
      id:"arts_4",
      layer:4,
      section:"Arts Stream",
      competency:"Communication",
      reportCategory:"Arts",
      question:"Which activity would you enjoy the most?",
      type:"radio",
      required:true,
      weight:3,
      options:[
        {id:"debate",label:"Debate Competition",score:5},
        {id:"speech",label:"Public Speaking",score:5},
        {id:"podcast",label:"Podcast Hosting",score:4},
        {id:"blog",label:"Writing Blogs",score:4}
      ]
    },

    // ==========================================
    // Psychology & People
    // ==========================================

    {
      id:"arts_5",
      layer:4,
      section:"Arts Stream",
      competency:"Psychology",
      reportCategory:"Arts",
      question:"I enjoy understanding people's emotions and behaviour.",
      type:"likert",
      required:true,
      weight:3,
      options:likertScale
    },

    {
      id:"arts_6",
      layer:4,
      section:"Arts Stream",
      competency:"Psychology",
      reportCategory:"Arts",
      question:"If two friends have an argument, what would you most likely do?",
      type:"radio",
      required:true,
      weight:3,
      options:[
        {id:"mediate",label:"Help them resolve the issue",score:5},
        {id:"listen",label:"Listen to both sides first",score:4},
        {id:"ignore",label:"Stay away from the situation",score:2},
        {id:"support",label:"Take one friend's side immediately",score:1}
      ]
    },

    // ==========================================
    // Research & Humanities
    // ==========================================

    {
      id:"arts_7",
      layer:4,
      section:"Arts Stream",
      competency:"Research",
      reportCategory:"Arts",
      question:"I enjoy researching historical, cultural or social topics.",
      type:"likert",
      required:true,
      weight:3,
      options:likertScale
    },

    {
      id:"arts_8",
      layer:4,
      section:"Arts Stream",
      competency:"Research",
      reportCategory:"Arts",
      question:"Which school project would you choose?",
      type:"radio",
      required:true,
      weight:3,
      options:[
        {id:"history",label:"History Documentary",score:5},
        {id:"culture",label:"Cultural Research",score:5},
        {id:"social",label:"Social Awareness Campaign",score:5},
        {id:"travel",label:"Travel Blog",score:4}
      ]
    },

    // ==========================================
    // Media & Design
    // ==========================================

    {
      id:"arts_9",
      layer:4,
      section:"Arts Stream",
      competency:"Media & Design",
      reportCategory:"Arts",
      question:"Visual storytelling interests me.",
      type:"likert",
      required:true,
      weight:3,
      options:likertScale
    },

    {
      id:"arts_10",
      layer:4,
      section:"Arts Stream",
      competency:"Media & Design",
      reportCategory:"Arts",
      question:"Which profession sounds most exciting?",
      type:"radio",
      required:true,
      weight:3,
      options:[
        {id:"journalist",label:"Journalist",score:5},
        {id:"designer",label:"Graphic Designer",score:5},
        {id:"psychologist",label:"Psychologist",score:5},
        {id:"filmmaker",label:"Film Director",score:5}
      ]
    }
  ]
};
// =======================================================
// LAYER 4
// VOCATIONAL STREAM ASSESSMENT
// =======================================================

export const vocationalStreamSection: AssessmentSection = {

  id: "vocational_stream",

  title: "Vocational Stream Assessment",

  description:
    "Assess practical skills, technical aptitude and career readiness for vocational education.",

  questions: [

    // ==========================================
    // Practical Skills
    // ==========================================

    {
      id:"voc_1",
      layer:4,
      section:"Vocational Stream",
      competency:"Practical Skills",
      reportCategory:"Vocational",
      question:"I enjoy learning by doing practical activities rather than only reading.",
      type:"likert",
      required:true,
      weight:3,
      options:likertScale
    },

    {
      id:"voc_2",
      layer:4,
      section:"Vocational Stream",
      competency:"Practical Skills",
      reportCategory:"Vocational",
      question:"Which activity would you enjoy the most?",
      type:"radio",
      required:true,
      weight:3,
      options:[
        {id:"repair",label:"Repairing electronic devices",score:5},
        {id:"cook",label:"Cooking or baking",score:5},
        {id:"wood",label:"Building furniture",score:5},
        {id:"garden",label:"Gardening & Landscaping",score:4}
      ]
    },

    // ==========================================
    // Technical Aptitude
    // ==========================================

    {
      id:"voc_3",
      layer:4,
      section:"Vocational Stream",
      competency:"Technical Aptitude",
      reportCategory:"Vocational",
      question:"I enjoy understanding how machines and tools work.",
      type:"likert",
      required:true,
      weight:3,
      options:likertScale
    },

    {
      id:"voc_4",
      layer:4,
      section:"Vocational Stream",
      competency:"Technical Aptitude",
      reportCategory:"Vocational",
      question:"Which workshop would you choose first?",
      type:"radio",
      required:true,
      weight:3,
      options:[
        {id:"automobile",label:"Automobile Technology",score:5},
        {id:"electronics",label:"Electronics Repair",score:5},
        {id:"electrician",label:"Electrical Installation",score:5},
        {id:"welding",label:"Welding & Fabrication",score:4}
      ]
    },

    // ==========================================
    // Service Orientation
    // ==========================================

    {
      id:"voc_5",
      layer:4,
      section:"Vocational Stream",
      competency:"Service Orientation",
      reportCategory:"Vocational",
      question:"Helping customers or clients gives me satisfaction.",
      type:"likert",
      required:true,
      weight:3,
      options:likertScale
    },

    {
      id:"voc_6",
      layer:4,
      section:"Vocational Stream",
      competency:"Service Orientation",
      reportCategory:"Vocational",
      question:"Which career sounds most interesting?",
      type:"radio",
      required:true,
      weight:3,
      options:[
        {id:"chef",label:"Chef",score:5},
        {id:"hotel",label:"Hotel Management",score:5},
        {id:"beauty",label:"Beauty & Wellness",score:5},
        {id:"healthcare",label:"Healthcare Technician",score:5}
      ]
    },

    // ==========================================
    // Entrepreneurship
    // ==========================================

    {
      id:"voc_7",
      layer:4,
      section:"Vocational Stream",
      competency:"Entrepreneurship",
      reportCategory:"Vocational",
      question:"I would like to start my own business someday.",
      type:"likert",
      required:true,
      weight:3,
      options:likertScale
    },

    {
      id:"voc_8",
      layer:4,
      section:"Vocational Stream",
      competency:"Entrepreneurship",
      reportCategory:"Vocational",
      question:"If you opened a small business, which would you choose?",
      type:"radio",
      required:true,
      weight:3,
      options:[
        {id:"cafe",label:"Cafe / Restaurant",score:5},
        {id:"garage",label:"Automobile Garage",score:5},
        {id:"salon",label:"Salon & Spa",score:5},
        {id:"repairshop",label:"Electronics Repair Shop",score:5}
      ]
    },

    // ==========================================
    // Workplace Readiness
    // ==========================================

    {
      id:"voc_9",
      layer:4,
      section:"Vocational Stream",
      competency:"Workplace Readiness",
      reportCategory:"Vocational",
      question:"I enjoy following safety procedures and work instructions carefully.",
      type:"likert",
      required:true,
      weight:3,
      options:likertScale
    },

    {
      id:"voc_10",
      layer:4,
      section:"Vocational Stream",
      competency:"Workplace Readiness",
      reportCategory:"Vocational",
      question:"Which quality best describes you?",
      type:"radio",
      required:true,
      weight:3,
      options:[
        {id:"disciplined",label:"Disciplined",score:5},
        {id:"patient",label:"Patient",score:4},
        {id:"creative",label:"Creative",score:4},
        {id:"adaptable",label:"Adaptable",score:5}
      ]
    }
  ]
};
// =======================================================
// LAYER 5
// BEHAVIOUR ASSESSMENT
// =======================================================

export const behaviourAssessmentSection: AssessmentSection = {

  id: "behaviour_assessment",

  title: "Behaviour Assessment",

  description:
    "Evaluate workplace behaviour, ethics, teamwork and professional readiness.",

  questions: [

    // ==========================================
    // Responsibility
    // ==========================================

    {
      id:"beh_1",
      layer:5,
      section:"Behaviour",
      competency:"Responsibility",
      reportCategory:"Behaviour",
      question:"You promised to complete your part of a group project but realize you cannot finish on time. What would you do?",
      type:"radio",
      required:true,
      weight:4,
      options:[
        {id:"inform",label:"Inform the team immediately and ask for help",score:5},
        {id:"late",label:"Submit it late without informing anyone",score:2},
        {id:"ignore",label:"Do nothing",score:0},
        {id:"copy",label:"Copy someone else's work",score:0}
      ]
    },

    {
      id:"beh_2",
      layer:5,
      section:"Behaviour",
      competency:"Responsibility",
      reportCategory:"Behaviour",
      question:"I complete my assigned work before the deadline.",
      type:"likert",
      required:true,
      weight:3,
      options:likertScale
    },

    // ==========================================
    // Teamwork
    // ==========================================

    {
      id:"beh_3",
      layer:5,
      section:"Behaviour",
      competency:"Teamwork",
      reportCategory:"Behaviour",
      question:"A teammate is struggling with their work. What would you most likely do?",
      type:"radio",
      required:true,
      weight:4,
      options:[
        {id:"assist",label:"Help them complete the task",score:5},
        {id:"guide",label:"Guide them but let them do it",score:4},
        {id:"ignore",label:"Focus only on my own work",score:1},
        {id:"complain",label:"Complain to the teacher immediately",score:2}
      ]
    },

    {
      id:"beh_4",
      layer:5,
      section:"Behaviour",
      competency:"Teamwork",
      reportCategory:"Behaviour",
      question:"I enjoy working with people who have different opinions.",
      type:"likert",
      required:true,
      weight:3,
      options:likertScale
    },

    // ==========================================
    // Integrity
    // ==========================================

    {
      id:"beh_5",
      layer:5,
      section:"Behaviour",
      competency:"Integrity",
      reportCategory:"Behaviour",
      question:"During an exam you notice a friend cheating. What would you do?",
      type:"radio",
      required:true,
      weight:4,
      options:[
        {id:"teacher",label:"Report the situation appropriately",score:5},
        {id:"advise",label:"Ask them to stop after the exam",score:4},
        {id:"ignore",label:"Ignore it",score:2},
        {id:"join",label:"Help them cheat",score:0}
      ]
    },

    {
      id:"beh_6",
      layer:5,
      section:"Behaviour",
      competency:"Integrity",
      reportCategory:"Behaviour",
      question:"I choose honesty even when it is difficult.",
      type:"likert",
      required:true,
      weight:3,
      options:likertScale
    },

    // ==========================================
    // Adaptability
    // ==========================================

    {
      id:"beh_7",
      layer:5,
      section:"Behaviour",
      competency:"Adaptability",
      reportCategory:"Behaviour",
      question:"Your teacher changes the project requirements one day before submission.",
      type:"radio",
      required:true,
      weight:4,
      options:[
        {id:"adjust",label:"Adjust the plan and continue",score:5},
        {id:"discuss",label:"Clarify expectations and revise",score:4},
        {id:"complain",label:"Complain without changing anything",score:1},
        {id:"quit",label:"Give up on the project",score:0}
      ]
    },

    {
      id:"beh_8",
      layer:5,
      section:"Behaviour",
      competency:"Adaptability",
      reportCategory:"Behaviour",
      question:"I adapt quickly when plans change unexpectedly.",
      type:"likert",
      required:true,
      weight:3,
      options:likertScale
    },

    // ==========================================
    // Leadership
    // ==========================================

    {
      id:"beh_9",
      layer:5,
      section:"Behaviour",
      competency:"Leadership",
      reportCategory:"Behaviour",
      question:"A team cannot decide what to do next. What would you most likely do?",
      type:"radio",
      required:true,
      weight:4,
      options:[
        {id:"lead",label:"Help everyone agree on a plan",score:5},
        {id:"vote",label:"Suggest taking a vote",score:4},
        {id:"wait",label:"Wait for someone else to decide",score:2},
        {id:"leave",label:"Leave the discussion",score:0}
      ]
    },

    {
      id:"beh_10",
      layer:5,
      section:"Behaviour",
      competency:"Leadership",
      reportCategory:"Behaviour",
      question:"I remain calm while leading a team during challenging situations.",
      type:"likert",
      required:true,
      weight:3,
      options:likertScale
    }
  ]
};
// =======================================================
// ALL ASSESSMENT SECTIONS
// =======================================================

export const assessmentSections = {

  layerOne: layerOneSections,

  layerTwo: {
    bigFive: bigFiveSection,
    careerInterest: careerInterestSection,
    multipleIntelligence: multipleIntelligenceSection,
    learningStyle: learningStyleSection,
    emotionalIntelligence: emotionalIntelligenceSection,
    growthMindset: [],
    grit: [],
    motivation: [],
    selfConfidence: [],
    valuesEthics: [],
  },

  layerThree: {
    cognitive68: cognitive68Section,
    cognitive912: cognitive912Section,
  },

  layerFour: {
    skills68: skills68Section,
    skills910: skills910Section,
    skills1112: skills1112CommonSection,
    scienceStream: scienceStreamSection,
    commerceStream: commerceStreamSection,
    artsStream: artsStreamSection,
    vocationalStream: vocationalStreamSection,
  },

  layerFive: {
    behaviour: behaviourAssessmentSection,
  },
};

export default {
  assessmentFlow,
  assessmentSections,
  layerTitles,
  reportCategories,
  streamOptions,
};