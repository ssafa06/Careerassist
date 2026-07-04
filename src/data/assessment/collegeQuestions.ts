// src/data/assessment/collegeQuestions.ts


export interface CollegeAssessmentSection {
  id: string;
  title: string;
  subtitle?: string;
  layer?: number;
  questions: any[];
}

// Layer 2 Psychometric Questions
export const collegeLayerTwoQuestions = [
  {
    "id": "col-psy-q1",
    "model": "likert-scale",
    "trait": "Learning Agility",
    "prompt": "Do you actively learn new technologies beyond your college syllabus?",
    "scaleMin": 1,
    "scaleMax": 5,
    "options": [
      {
        "id": "Always",
        "label": "Always",
        "score": 5
      },
      {
        "id": "Often",
        "label": "Often",
        "score": 4
      },
      {
        "id": "Sometimes",
        "label": "Sometimes",
        "score": 3
      },
      {
        "id": "Rarely",
        "label": "Rarely",
        "score": 2
      },
      {
        "id": "Never",
        "label": "Never",
        "score": 1
      }
    ],
    "required": true
  },
  {
    "id": "col-psy-q2",
    "model": "likert-scale",
    "trait": "Time Management",
    "prompt": "How often do you complete assignments before the deadline?",
    "scaleMin": 1,
    "scaleMax": 5,
    "options": [
      {
        "id": "Always",
        "label": "Always",
        "score": 5
      },
      {
        "id": "Often",
        "label": "Often",
        "score": 4
      },
      {
        "id": "Sometimes",
        "label": "Sometimes",
        "score": 3
      },
      {
        "id": "Rarely",
        "label": "Rarely",
        "score": 2
      },
      {
        "id": "Never",
        "label": "Never",
        "score": 1
      }
    ],
    "required": true
  },
  {
    "id": "col-psy-q3",
    "model": "likert-scale",
    "trait": "Team Collaboration",
    "prompt": "Are you comfortable working in a team to complete technical projects?",
    "scaleMin": 1,
    "scaleMax": 5,
    "options": [
      {
        "id": "Always",
        "label": "Always",
        "score": 5
      },
      {
        "id": "Often",
        "label": "Often",
        "score": 4
      },
      {
        "id": "Sometimes",
        "label": "Sometimes",
        "score": 3
      },
      {
        "id": "Rarely",
        "label": "Rarely",
        "score": 2
      },
      {
        "id": "Never",
        "label": "Never",
        "score": 1
      }
    ],
    "required": true
  },
  {
    "id": "col-psy-q4",
    "model": "likert-scale",
    "trait": "Presentation Skills",
    "prompt": "How confident are you while presenting technical ideas?",
    "scaleMin": 1,
    "scaleMax": 5,
    "options": [
      {
        "id": "Very Confident",
        "label": "Very Confident",
        "score": 5
      },
      {
        "id": "Confident",
        "label": "Confident",
        "score": 4
      },
      {
        "id": "Neutral",
        "label": "Neutral",
        "score": 3
      },
      {
        "id": "Slightly Confident",
        "label": "Slightly Confident",
        "score": 2
      },
      {
        "id": "Not Confident",
        "label": "Not Confident",
        "score": 1
      }
    ],
    "required": true
  },
  {
    "id": "col-psy-q5",
    "model": "likert-scale",
    "trait": "Industry Exposure",
    "prompt": "How often do you participate in coding contests, hackathons, workshops, or technical events?",
    "scaleMin": 1,
    "scaleMax": 5,
    "options": [
      {
        "id": "Frequently",
        "label": "Frequently",
        "score": 5
      },
      {
        "id": "Occasionally",
        "label": "Occasionally",
        "score": 4
      },
      {
        "id": "Sometimes",
        "label": "Sometimes",
        "score": 3
      },
      {
        "id": "Rarely",
        "label": "Rarely",
        "score": 2
      },
      {
        "id": "Never",
        "label": "Never",
        "score": 1
      }
    ],
    "required": true
  },
  {
    "id": "col-psy-q6",
    "model": "likert-scale",
    "trait": "Persistence",
    "prompt": "When you encounter a difficult technical problem, do you continue trying until you find a solution?",
    "scaleMin": 1,
    "scaleMax": 5,
    "options": [
      {
        "id": "Always",
        "label": "Always",
        "score": 5
      },
      {
        "id": "Often",
        "label": "Often",
        "score": 4
      },
      {
        "id": "Sometimes",
        "label": "Sometimes",
        "score": 3
      },
      {
        "id": "Rarely",
        "label": "Rarely",
        "score": 2
      },
      {
        "id": "Never",
        "label": "Never",
        "score": 1
      }
    ],
    "required": true
  },
  {
    "id": "col-psy-q7",
    "model": "likert-scale",
    "trait": "Learning Agility",
    "prompt": "Do you regularly practice programming or technical skills outside classroom hours?",
    "scaleMin": 1,
    "scaleMax": 5,
    "options": [
      {
        "id": "Daily",
        "label": "Daily",
        "score": 5
      },
      {
        "id": "Weekly",
        "label": "Weekly",
        "score": 4
      },
      {
        "id": "Monthly",
        "label": "Monthly",
        "score": 3
      },
      {
        "id": "Occasionally",
        "label": "Occasionally",
        "score": 2
      },
      {
        "id": "Never",
        "label": "Never",
        "score": 1
      }
    ],
    "required": true
  },
  {
    "id": "col-psy-q8",
    "model": "likert-scale",
    "trait": "Adaptability",
    "prompt": "How well do you adapt to new software, tools, or technologies?",
    "scaleMin": 1,
    "scaleMax": 5,
    "options": [
      {
        "id": "Very Easily",
        "label": "Very Easily",
        "score": 5
      },
      {
        "id": "Easily",
        "label": "Easily",
        "score": 4
      },
      {
        "id": "Moderately",
        "label": "Moderately",
        "score": 3
      },
      {
        "id": "With Difficulty",
        "label": "With Difficulty",
        "score": 2
      },
      {
        "id": "Very Difficult",
        "label": "Very Difficult",
        "score": 1
      }
    ],
    "required": true
  },
  {
    "id": "col-psy-q9",
    "model": "likert-scale",
    "trait": "Ethics & Plagiarism",
    "prompt": "Do you follow ethical practices such as avoiding plagiarism and acknowledging sources?",
    "scaleMin": 1,
    "scaleMax": 5,
    "options": [
      {
        "id": "Always",
        "label": "Always",
        "score": 5
      },
      {
        "id": "Often",
        "label": "Often",
        "score": 4
      },
      {
        "id": "Sometimes",
        "label": "Sometimes",
        "score": 3
      },
      {
        "id": "Rarely",
        "label": "Rarely",
        "score": 2
      },
      {
        "id": "Never",
        "label": "Never",
        "score": 1
      }
    ],
    "required": true
  },
  {
    "id": "col-psy-q10",
    "model": "likert-scale",
    "trait": "Placement Readiness",
    "prompt": "How prepared do you feel for internships or campus placements?",
    "scaleMin": 1,
    "scaleMax": 5,
    "options": [
      {
        "id": "Fully Prepared",
        "label": "Fully Prepared",
        "score": 5
      },
      {
        "id": "Mostly Prepared",
        "label": "Mostly Prepared",
        "score": 4
      },
      {
        "id": "Somewhat Prepared",
        "label": "Somewhat Prepared",
        "score": 3
      },
      {
        "id": "Slightly Prepared",
        "label": "Slightly Prepared",
        "score": 2
      },
      {
        "id": "Not Prepared",
        "label": "Not Prepared",
        "score": 1
      }
    ],
    "required": true
  }
];

// Layer 3 Logical Assessment Questions
export const collegeLayerThreeQuestions = [
  {
    "id": "col-logical-q1",
    "model": "knowledge-mcq",
    "section": "logical",
    "questionNumber": 1,
    "prompt": "LAYER 3\n(logical analysis assessment)\n1.\nA building has 100 floors and 4 elevators. During office hours, employees complain about long waiting times. You have a budget of ₹50 lakh to improve the system. Which solution is most likely to reduce the average waiting time?",
    "options": [
      {
        "id": "A",
        "text": "Increase elevator speed by 20%"
      },
      {
        "id": "B",
        "text": "Add a fifth elevator"
      },
      {
        "id": "C",
        "text": "Implement an AI-based elevator scheduling algorithm"
      },
      {
        "id": "D",
        "text": "Increase elevator capacity by 30%"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The correct option is C.",
    "required": true
  },
  {
    "id": "col-logical-q2",
    "model": "knowledge-mcq",
    "section": "logical",
    "questionNumber": 2,
    "prompt": "You have a 5-litre container and a 7-litre container with no measurement markings. Which sequence of actions will leave exactly 4 litres in one container?",
    "options": [
      {
        "id": "A",
        "text": "Fill the 7L container and pour into the 5L container until full. Empty the 5L container, transfer the remaining 2L from the 7L container into the 5L container, refill the 7L container, and pour into the 5L container until it is full."
      },
      {
        "id": "B",
        "text": "Fill the 5L container and pour into the 7L container twice."
      },
      {
        "id": "C",
        "text": "Fill both containers completely and empty them together."
      },
      {
        "id": "D",
        "text": "Fill the 5L container once and stop."
      }
    ],
    "correctOptionId": "A",
    "explanation": "The correct option is A.",
    "required": true
  },
  {
    "id": "col-logical-q3",
    "model": "knowledge-mcq",
    "section": "logical",
    "questionNumber": 3,
    "prompt": "A factory has four sequential machines:\nMachine A – 100 units/hour\nMachine B – 80 units/hour\nMachine C – 120 units/hour\nMachine D – 90 units/hour\nCustomer demand is 110 units/hour. Which machine should be upgraded first?",
    "options": [
      {
        "id": "A",
        "text": "Machine A"
      },
      {
        "id": "B",
        "text": "Machine B"
      },
      {
        "id": "C",
        "text": "Machine C"
      },
      {
        "id": "D",
        "text": "Machine D"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-logical-q4",
    "model": "knowledge-mcq",
    "section": "logical",
    "questionNumber": 4,
    "prompt": "A startup reports the following for the last financial year:\nRevenue increased by 60%\nCustomer base increased by 40%\nProfit decreased by 15%\nEmployee count doubled\nWhich conclusion is most reasonable?",
    "options": [
      {
        "id": "A",
        "text": "The company has become less efficient due to increased operating costs."
      },
      {
        "id": "B",
        "text": "The company likely invested heavily in expansion and growth."
      },
      {
        "id": "C",
        "text": "Customer satisfaction has decreased significantly."
      },
      {
        "id": "D",
        "text": "Product quality has declined."
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-logical-q5",
    "model": "knowledge-mcq",
    "section": "logical",
    "questionNumber": 5,
    "prompt": "Four researchers make the following statements:\nA: \"B stole the prototype.\"\nB: \"D stole the prototype.\"\nC: \"I didn't steal the prototype.\"\nD: \"B is lying.\"\nExactly one statement is true. Who stole the prototype?",
    "options": [
      {
        "id": "A",
        "text": "A"
      },
      {
        "id": "B",
        "text": "B"
      },
      {
        "id": "C",
        "text": "C"
      },
      {
        "id": "D",
        "text": "D"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-logical-q6",
    "model": "knowledge-mcq",
    "section": "logical",
    "questionNumber": 6,
    "prompt": "You have 8 identical-looking balls, but one is heavier than the others. Using only a balance scale, what is the minimum number of weighings required to guarantee identifying the heavier ball?",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-logical-q7",
    "model": "knowledge-mcq",
    "section": "logical",
    "questionNumber": 7,
    "prompt": "A disaster relief team has:\n2 helicopters\n3 trucks\n1 medical team\nThere are 500 people stranded across four villages, and severe weather will arrive in 2 hours. Which factor should be prioritized first when planning the rescue?",
    "options": [
      {
        "id": "A",
        "text": "Distance from the base camp"
      },
      {
        "id": "B",
        "text": "Population of each village"
      },
      {
        "id": "C",
        "text": "Medical urgency and risk to life"
      },
      {
        "id": "D",
        "text": "Road accessibility"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The correct option is C.",
    "required": true
  },
  {
    "id": "col-logical-q8",
    "model": "knowledge-mcq",
    "section": "logical",
    "questionNumber": 8,
    "prompt": "An autonomous vehicle cannot avoid an accident. It has two options:\nContinue straight and hit one pedestrian crossing illegally.\nSwerve and hit three passengers inside the vehicle.\nAs the engineer designing the decision system, which principle should guide the algorithm?",
    "options": [
      {
        "id": "A",
        "text": "Always protect the passengers."
      },
      {
        "id": "B",
        "text": "Always follow traffic laws."
      },
      {
        "id": "C",
        "text": "Minimize overall harm based on predefined ethical guidelines."
      },
      {
        "id": "D",
        "text": "Randomly choose an outcome."
      }
    ],
    "correctOptionId": "C",
    "explanation": "The correct option is C.",
    "required": true
  },
  {
    "id": "col-logical-q9",
    "model": "knowledge-mcq",
    "section": "logical",
    "questionNumber": 9,
    "prompt": "Find the next number in the sequence:\n1, 2, 6, 24, 120, ?",
    "options": [
      {
        "id": "A",
        "text": "240"
      },
      {
        "id": "B",
        "text": "360"
      },
      {
        "id": "C",
        "text": "600"
      },
      {
        "id": "D",
        "text": "720"
      }
    ],
    "correctOptionId": "D",
    "explanation": "The correct option is D.",
    "required": true
  },
  {
    "id": "col-logical-q10",
    "model": "knowledge-mcq",
    "section": "logical",
    "questionNumber": 10,
    "prompt": "A satellite scheduled for launch has a 0.5% probability of mission failure due to a suspected sensor defect. Replacing the sensor will delay the launch by 6 months and cost ₹120 crore.\nWhat is the most appropriate engineering decision?",
    "options": [
      {
        "id": "A",
        "text": "Launch immediately because the failure probability is very low."
      },
      {
        "id": "B",
        "text": "Replace the sensor immediately without further analysis."
      },
      {
        "id": "C",
        "text": "Conduct additional testing, quantify the actual risk, and make a data-driven decision before launch."
      },
      {
        "id": "D",
        "text": "Cancel the mission."
      }
    ],
    "correctOptionId": "C",
    "explanation": "The correct option is C.",
    "required": true
  }
];

// Layer 4 Stream-Specific Technical & Coding Questions
export const collegeLayerFourQuestions: Record<string, any[]> = {
  "cse": [
  {
    "id": "col-cse-q1",
    "model": "knowledge-mcq",
    "section": "cse",
    "questionNumber": 1,
    "prompt": "A web application becomes very slow when 10,000 users access it simultaneously. What is the BEST first step?",
    "options": [
      {
        "id": "A",
        "text": "Increase the server RAM"
      },
      {
        "id": "B",
        "text": "Restart the application"
      },
      {
        "id": "C",
        "text": "Identify the performance bottleneck using monitoring tools"
      },
      {
        "id": "D",
        "text": "Upgrade the internet connection"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The correct option is C.",
    "required": true
  },
  {
    "id": "col-cse-q2",
    "model": "knowledge-mcq",
    "section": "cse",
    "questionNumber": 2,
    "prompt": "You need to search for an element repeatedly in a sorted dataset containing 1 million records. Which algorithm is most efficient?",
    "options": [
      {
        "id": "A",
        "text": "Linear Search"
      },
      {
        "id": "B",
        "text": "Bubble Sort"
      },
      {
        "id": "C",
        "text": "Binary Search"
      },
      {
        "id": "D",
        "text": "Selection Sort"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The correct option is C.",
    "required": true
  },
  {
    "id": "col-cse-q3",
    "model": "knowledge-mcq",
    "section": "cse",
    "questionNumber": 3,
    "prompt": "Which data structure is most suitable for implementing an Undo feature in a text editor?",
    "options": [
      {
        "id": "A",
        "text": "Queue"
      },
      {
        "id": "B",
        "text": "Stack"
      },
      {
        "id": "C",
        "text": "Linked List"
      },
      {
        "id": "D",
        "text": "Tree"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-cse-q4",
    "model": "knowledge-mcq",
    "section": "cse",
    "questionNumber": 4,
    "prompt": "A banking application must guarantee that money is never lost during a transaction, even if the server crashes. Which database property ensures this?",
    "options": [
      {
        "id": "A",
        "text": "Normalization"
      },
      {
        "id": "B",
        "text": "ACID Transactions"
      },
      {
        "id": "C",
        "text": "Indexing"
      },
      {
        "id": "D",
        "text": "Sharding"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-cse-q5",
    "model": "knowledge-mcq",
    "section": "cse",
    "questionNumber": 5,
    "prompt": "A database query is taking 25 seconds to execute. What should be investigated FIRST?",
    "options": [
      {
        "id": "A",
        "text": "Change the programming language"
      },
      {
        "id": "B",
        "text": "Check whether proper indexes exist"
      },
      {
        "id": "C",
        "text": "Upgrade the monitor"
      },
      {
        "id": "D",
        "text": "Restart the database server"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-cse-q6",
    "model": "knowledge-mcq",
    "section": "cse",
    "questionNumber": 6,
    "prompt": "A software application crashes only when handling thousands of concurrent users. Which issue is MOST likely?",
    "options": [
      {
        "id": "A",
        "text": "Syntax Error"
      },
      {
        "id": "B",
        "text": "Concurrency or Resource Management Issue"
      },
      {
        "id": "C",
        "text": "Missing Semicolon"
      },
      {
        "id": "D",
        "text": "Incorrect Variable Name"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-cse-q7",
    "model": "knowledge-mcq",
    "section": "cse",
    "questionNumber": 7,
    "prompt": "Which scheduling algorithm generally minimizes average waiting time?",
    "options": [
      {
        "id": "A",
        "text": "First Come First Serve"
      },
      {
        "id": "B",
        "text": "Round Robin"
      },
      {
        "id": "C",
        "text": "Shortest Job First"
      },
      {
        "id": "D",
        "text": "Priority Scheduling"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The correct option is C.",
    "required": true
  },
  {
    "id": "col-cse-q8",
    "model": "knowledge-mcq",
    "section": "cse",
    "questionNumber": 8,
    "prompt": "A user reports that your website is accessible locally but not from other locations. Which component should you check FIRST?",
    "options": [
      {
        "id": "A",
        "text": "Keyboard Driver"
      },
      {
        "id": "B",
        "text": "Firewall or Network Configuration"
      },
      {
        "id": "C",
        "text": "Browser Theme"
      },
      {
        "id": "D",
        "text": "Monitor Resolution"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-cse-q9",
    "model": "knowledge-mcq",
    "section": "cse",
    "questionNumber": 9,
    "prompt": "Your application stores user passwords in plain text. What is the BEST solution?",
    "options": [
      {
        "id": "A",
        "text": "Encrypt using Base64"
      },
      {
        "id": "B",
        "text": "Store passwords in Excel"
      },
      {
        "id": "C",
        "text": "Hash passwords using bcrypt or Argon2 with salting"
      },
      {
        "id": "D",
        "text": "Reverse the password string"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The correct option is C.",
    "required": true
  },
  {
    "id": "col-cse-q10",
    "model": "knowledge-mcq",
    "section": "cse",
    "questionNumber": 10,
    "prompt": "A company wants to deploy its application worldwide with automatic scaling based on traffic. Which technology is MOST appropriate?",
    "options": [
      {
        "id": "A",
        "text": "Local Desktop Server"
      },
      {
        "id": "B",
        "text": "Cloud Infrastructure"
      },
      {
        "id": "C",
        "text": "DVD Backup"
      },
      {
        "id": "D",
        "text": "USB Storage"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-cse-q11",
    "model": "knowledge-mcq",
    "section": "cse",
    "questionNumber": 11,
    "prompt": "Which HTTP method should be used to update an existing resource in a REST API?",
    "options": [
      {
        "id": "A",
        "text": "GET"
      },
      {
        "id": "B",
        "text": "POST"
      },
      {
        "id": "C",
        "text": "PUT"
      },
      {
        "id": "D",
        "text": "DELETE"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The correct option is C.",
    "required": true
  },
  {
    "id": "col-cse-q12",
    "model": "knowledge-mcq",
    "section": "cse",
    "questionNumber": 12,
    "prompt": "An application experiences frequent deadlocks. What is the BEST strategy?",
    "options": [
      {
        "id": "A",
        "text": "Increase screen brightness"
      },
      {
        "id": "B",
        "text": "Reduce database size"
      },
      {
        "id": "C",
        "text": "Review resource locking order and synchronization"
      },
      {
        "id": "D",
        "text": "Increase internet speed"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The correct option is C.",
    "required": true
  },
  {
    "id": "col-cse-q13",
    "model": "knowledge-mcq",
    "section": "cse",
    "questionNumber": 13,
    "prompt": "Your AI model achieves 99% training accuracy but only 68% test accuracy. What is the MOST likely issue?",
    "options": [
      {
        "id": "A",
        "text": "Underfitting"
      },
      {
        "id": "B",
        "text": "Overfitting"
      },
      {
        "id": "C",
        "text": "Compilation Error"
      },
      {
        "id": "D",
        "text": "Hardware Failure"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-cse-q14",
    "model": "knowledge-mcq",
    "section": "cse",
    "questionNumber": 14,
    "prompt": "A distributed system must continue functioning even if one server fails. Which concept is MOST important?",
    "options": [
      {
        "id": "A",
        "text": "Redundancy and Fault Tolerance"
      },
      {
        "id": "B",
        "text": "Bigger Monitor"
      },
      {
        "id": "C",
        "text": "Antivirus Software"
      },
      {
        "id": "D",
        "text": "Higher Screen Resolution"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The correct option is A.",
    "required": true
  },
  {
    "id": "col-cse-q15",
    "model": "knowledge-mcq",
    "section": "cse",
    "questionNumber": 15,
    "prompt": "Which normalization form removes transitive dependencies?",
    "options": [
      {
        "id": "A",
        "text": "First Normal Form (1NF)"
      },
      {
        "id": "B",
        "text": "Second Normal Form (2NF)"
      },
      {
        "id": "C",
        "text": "Third Normal Form (3NF)"
      },
      {
        "id": "D",
        "text": "Boyce-Codd Normal Form (BCNF)"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The correct option is C.",
    "required": true
  },
  {
    "id": "col-cse-q16",
    "model": "knowledge-mcq",
    "section": "cse",
    "questionNumber": 16,
    "prompt": "A software project is delayed because requirements keep changing. Which software development methodology is MOST suitable?",
    "options": [
      {
        "id": "A",
        "text": "Waterfall"
      },
      {
        "id": "B",
        "text": "Agile"
      },
      {
        "id": "C",
        "text": "Spiral (without iteration)"
      },
      {
        "id": "D",
        "text": "Big Bang"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-cse-q17",
    "model": "knowledge-mcq",
    "section": "cse",
    "questionNumber": 17,
    "prompt": "Which data structure is most appropriate for implementing an autocomplete search feature?",
    "options": [
      {
        "id": "A",
        "text": "Stack"
      },
      {
        "id": "B",
        "text": "Queue"
      },
      {
        "id": "C",
        "text": "Trie"
      },
      {
        "id": "D",
        "text": "Array"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The correct option is C.",
    "required": true
  },
  {
    "id": "col-cse-q18",
    "model": "knowledge-mcq",
    "section": "cse",
    "questionNumber": 18,
    "prompt": "A system needs to process millions of log records every hour in real time. Which approach is MOST suitable?",
    "options": [
      {
        "id": "A",
        "text": "Store all logs in a text file"
      },
      {
        "id": "B",
        "text": "Use a stream-processing framework such as Apache Kafka with stream consumers"
      },
      {
        "id": "C",
        "text": "Print logs to the console"
      },
      {
        "id": "D",
        "text": "Restart the application every hour"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-cse-q19",
    "model": "knowledge-mcq",
    "section": "cse",
    "questionNumber": 19,
    "prompt": "A software company wants to release new features multiple times per day with minimal downtime. Which practice supports this goal?",
    "options": [
      {
        "id": "A",
        "text": "Manual Deployment"
      },
      {
        "id": "B",
        "text": "Continuous Integration and Continuous Deployment (CI/CD)"
      },
      {
        "id": "C",
        "text": "Annual Releases"
      },
      {
        "id": "D",
        "text": "FTP File Transfer"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-cse-q20",
    "model": "knowledge-mcq",
    "section": "cse",
    "questionNumber": 20,
    "prompt": "You are designing an online payment system. Which quality attribute should receive the HIGHEST priority?",
    "options": [
      {
        "id": "A",
        "text": "Attractive User Interface"
      },
      {
        "id": "B",
        "text": "Security and Data Integrity"
      },
      {
        "id": "C",
        "text": "Background Color"
      },
      {
        "id": "D",
        "text": "Animation Speed"
      },
      {
        "id": "A",
        "text": "5 5"
      },
      {
        "id": "B",
        "text": "6 5"
      },
      {
        "id": "C",
        "text": "6 6"
      },
      {
        "id": "D",
        "text": "Compilation Error"
      },
      {
        "id": "A",
        "text": "20"
      },
      {
        "id": "B",
        "text": "21"
      },
      {
        "id": "C",
        "text": "22"
      },
      {
        "id": "D",
        "text": "23"
      },
      {
        "id": "A",
        "text": ""
      },
      {
        "id": "B",
        "text": ""
      },
      {
        "id": "C",
        "text": ""
      },
      {
        "id": "D",
        "text": "Error"
      },
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "10"
      },
      {
        "id": "C",
        "text": "15"
      },
      {
        "id": "D",
        "text": "Compilation Error"
      },
      {
        "id": "A",
        "text": "6810"
      },
      {
        "id": "B",
        "text": "1216"
      },
      {
        "id": "C",
        "text": "816"
      },
      {
        "id": "D",
        "text": "48  Answer: C"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  }
],
  "it": [
  {
    "id": "col-it-q1",
    "model": "knowledge-mcq",
    "section": "it",
    "questionNumber": 1,
    "prompt": "A company's website becomes unavailable after a DNS server failure. What is the primary purpose of DNS?",
    "options": [
      {
        "id": "A",
        "text": "Encrypt website data"
      },
      {
        "id": "B",
        "text": "Convert domain names into IP addresses"
      },
      {
        "id": "C",
        "text": "Store website files"
      },
      {
        "id": "D",
        "text": "Compress network packets"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-it-q2",
    "model": "knowledge-mcq",
    "section": "it",
    "questionNumber": 2,
    "prompt": "A company's database server is running slowly. Which should be checked first?",
    "options": [
      {
        "id": "A",
        "text": "Keyboard drivers"
      },
      {
        "id": "B",
        "text": "Database indexing and slow queries"
      },
      {
        "id": "C",
        "text": "Screen resolution"
      },
      {
        "id": "D",
        "text": "Printer settings"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-it-q3",
    "model": "knowledge-mcq",
    "section": "it",
    "questionNumber": 3,
    "prompt": "Which protocol is primarily used to securely transfer web pages over the Internet?",
    "options": [
      {
        "id": "A",
        "text": "FTP"
      },
      {
        "id": "B",
        "text": "HTTP"
      },
      {
        "id": "C",
        "text": "HTTPS"
      },
      {
        "id": "D",
        "text": "SMTP"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The correct option is C.",
    "required": true
  },
  {
    "id": "col-it-q4",
    "model": "knowledge-mcq",
    "section": "it",
    "questionNumber": 4,
    "prompt": "A software application allows multiple users to edit data simultaneously. Which database property ensures that transactions remain reliable?",
    "options": [
      {
        "id": "A",
        "text": "Normalization"
      },
      {
        "id": "B",
        "text": "ACID Properties"
      },
      {
        "id": "C",
        "text": "Indexing"
      },
      {
        "id": "D",
        "text": "Replication"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-it-q5",
    "model": "knowledge-mcq",
    "section": "it",
    "questionNumber": 5,
    "prompt": "A company wants to prevent unauthorized users from accessing confidential information. Which security measure is MOST effective?",
    "options": [
      {
        "id": "A",
        "text": "Antivirus Software"
      },
      {
        "id": "B",
        "text": "Multi-Factor Authentication (MFA)"
      },
      {
        "id": "C",
        "text": "Increasing RAM"
      },
      {
        "id": "D",
        "text": "Disk Defragmentation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-it-q6",
    "model": "knowledge-mcq",
    "section": "it",
    "questionNumber": 6,
    "prompt": "An employee accidentally clicks on a malicious email link. What type of cyberattack is this?",
    "options": [
      {
        "id": "A",
        "text": "SQL Injection"
      },
      {
        "id": "B",
        "text": "Phishing"
      },
      {
        "id": "C",
        "text": "DDoS Attack"
      },
      {
        "id": "D",
        "text": "Brute Force Attack"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-it-q7",
    "model": "knowledge-mcq",
    "section": "it",
    "questionNumber": 7,
    "prompt": "A company stores backups in multiple geographical regions. What is the primary benefit?",
    "options": [
      {
        "id": "A",
        "text": "Faster CPU performance"
      },
      {
        "id": "B",
        "text": "Improved disaster recovery and availability"
      },
      {
        "id": "C",
        "text": "Reduced internet usage"
      },
      {
        "id": "D",
        "text": "Better monitor resolution"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-it-q8",
    "model": "knowledge-mcq",
    "section": "it",
    "questionNumber": 8,
    "prompt": "A web application is experiencing slow page loading despite having sufficient server resources. What should be analyzed first?",
    "options": [
      {
        "id": "A",
        "text": "Network latency and API response times"
      },
      {
        "id": "B",
        "text": "Keyboard shortcuts"
      },
      {
        "id": "C",
        "text": "Mouse settings"
      },
      {
        "id": "D",
        "text": "Printer configuration"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The correct option is A.",
    "required": true
  },
  {
    "id": "col-it-q9",
    "model": "knowledge-mcq",
    "section": "it",
    "questionNumber": 9,
    "prompt": "A company's web application is vulnerable to SQL Injection attacks. Which is the BEST solution?",
    "options": [
      {
        "id": "A",
        "text": "Increase database storage"
      },
      {
        "id": "B",
        "text": "Use parameterized queries (Prepared Statements)"
      },
      {
        "id": "C",
        "text": "Compress database tables"
      },
      {
        "id": "D",
        "text": "Disable SQL logs"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-it-q10",
    "model": "knowledge-mcq",
    "section": "it",
    "questionNumber": 10,
    "prompt": "An organization wants applications to scale automatically during peak traffic. Which cloud feature should be implemented?",
    "options": [
      {
        "id": "A",
        "text": "Manual Deployment"
      },
      {
        "id": "B",
        "text": "Auto Scaling"
      },
      {
        "id": "C",
        "text": "Local Backup"
      },
      {
        "id": "D",
        "text": "Disk Cleanup"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-it-q11",
    "model": "knowledge-mcq",
    "section": "it",
    "questionNumber": 11,
    "prompt": "Which networking device forwards packets based on IP addresses?",
    "options": [
      {
        "id": "A",
        "text": "Hub"
      },
      {
        "id": "B",
        "text": "Switch"
      },
      {
        "id": "C",
        "text": "Router"
      },
      {
        "id": "D",
        "text": "Repeater"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The correct option is C.",
    "required": true
  },
  {
    "id": "col-it-q12",
    "model": "knowledge-mcq",
    "section": "it",
    "questionNumber": 12,
    "prompt": "An organization wants to deploy software updates multiple times a day with minimal downtime. Which practice should be adopted?",
    "options": [
      {
        "id": "A",
        "text": "Waterfall Development"
      },
      {
        "id": "B",
        "text": "CI/CD Pipeline"
      },
      {
        "id": "C",
        "text": "Manual Deployment"
      },
      {
        "id": "D",
        "text": "FTP Upload"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-it-q13",
    "model": "knowledge-mcq",
    "section": "it",
    "questionNumber": 13,
    "prompt": "A company's API receives one million requests every day. Which technique helps prevent overload?",
    "options": [
      {
        "id": "A",
        "text": "Caching and Load Balancing"
      },
      {
        "id": "B",
        "text": "Increasing monitor size"
      },
      {
        "id": "C",
        "text": "Using larger hard disks"
      },
      {
        "id": "D",
        "text": "Installing antivirus"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The correct option is A.",
    "required": true
  },
  {
    "id": "col-it-q14",
    "model": "knowledge-mcq",
    "section": "it",
    "questionNumber": 14,
    "prompt": "Which HTTP method is commonly used to retrieve data from a REST API?",
    "options": [
      {
        "id": "A",
        "text": "POST"
      },
      {
        "id": "B",
        "text": "PUT"
      },
      {
        "id": "C",
        "text": "GET"
      },
      {
        "id": "D",
        "text": "DELETE"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The correct option is C.",
    "required": true
  },
  {
    "id": "col-it-q15",
    "model": "knowledge-mcq",
    "section": "it",
    "questionNumber": 15,
    "prompt": "A system administrator notices that one server has failed, but users experience no service interruption because another server immediately takes over. What feature is being demonstrated?",
    "options": [
      {
        "id": "A",
        "text": "Virtualization"
      },
      {
        "id": "B",
        "text": "Failover"
      },
      {
        "id": "C",
        "text": "Indexing"
      },
      {
        "id": "D",
        "text": "Compression"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-it-q16",
    "model": "knowledge-mcq",
    "section": "it",
    "questionNumber": 16,
    "prompt": "A company needs employees to securely access office resources from home. Which technology should be implemented?",
    "options": [
      {
        "id": "A",
        "text": "VPN"
      },
      {
        "id": "B",
        "text": "Bluetooth"
      },
      {
        "id": "C",
        "text": "FTP"
      },
      {
        "id": "D",
        "text": "NFC"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The correct option is A.",
    "required": true
  },
  {
    "id": "col-it-q17",
    "model": "knowledge-mcq",
    "section": "it",
    "questionNumber": 17,
    "prompt": "Which architecture is MOST suitable for independently developing and deploying different parts of a large application?",
    "options": [
      {
        "id": "A",
        "text": "Monolithic Architecture"
      },
      {
        "id": "B",
        "text": "Client-Server Architecture"
      },
      {
        "id": "C",
        "text": "Microservices Architecture"
      },
      {
        "id": "D",
        "text": "Peer-to-Peer Architecture"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The correct option is C.",
    "required": true
  },
  {
    "id": "col-it-q18",
    "model": "knowledge-mcq",
    "section": "it",
    "questionNumber": 18,
    "prompt": "A business wants to analyze large volumes of customer data to identify purchasing trends. Which technology is MOST appropriate?",
    "options": [
      {
        "id": "A",
        "text": "Big Data Analytics"
      },
      {
        "id": "B",
        "text": "MS Paint"
      },
      {
        "id": "C",
        "text": "Calculator"
      },
      {
        "id": "D",
        "text": "FTP"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The correct option is A.",
    "required": true
  },
  {
    "id": "col-it-q19",
    "model": "knowledge-mcq",
    "section": "it",
    "questionNumber": 19,
    "prompt": "Which cloud service model provides developers with a complete platform for building and deploying applications without managing the underlying infrastructure?",
    "options": [
      {
        "id": "A",
        "text": "IaaS"
      },
      {
        "id": "B",
        "text": "PaaS"
      },
      {
        "id": "C",
        "text": "SaaS"
      },
      {
        "id": "D",
        "text": "DaaS"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-it-q20",
    "model": "knowledge-mcq",
    "section": "it",
    "questionNumber": 20,
    "prompt": "A company wants to ensure that sensitive customer data cannot be read even if the database is stolen. Which solution provides the BEST protection?",
    "options": [
      {
        "id": "A",
        "text": "File Compression"
      },
      {
        "id": "B",
        "text": "Data Encryption"
      },
      {
        "id": "C",
        "text": "Indexing"
      },
      {
        "id": "D",
        "text": "Defragmentation"
      },
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "10"
      },
      {
        "id": "D",
        "text": "Error"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-it-q21",
    "model": "knowledge-mcq",
    "section": "it",
    "questionNumber": 21,
    "prompt": "SELECT COUNT(*) FROM Employees\nWHERE Salary > 50000;\nWhat does this query return?",
    "options": [
      {
        "id": "A",
        "text": "Total number of employees"
      },
      {
        "id": "B",
        "text": "Number of employees with salary greater than ₹50,000"
      },
      {
        "id": "C",
        "text": "Sum of all salaries"
      },
      {
        "id": "D",
        "text": "Highest salary"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-it-q22",
    "model": "knowledge-mcq",
    "section": "it",
    "questionNumber": 22,
    "prompt": "String s = \"Information\";\nSystem.out.println(s.substring(4,7));",
    "options": [
      {
        "id": "A",
        "text": "orm"
      },
      {
        "id": "B",
        "text": "rma"
      },
      {
        "id": "C",
        "text": "rma"
      },
      {
        "id": "D",
        "text": "rma"
      },
      {
        "id": "A",
        "text": "rma"
      },
      {
        "id": "B",
        "text": "mat"
      },
      {
        "id": "C",
        "text": "ati"
      },
      {
        "id": "D",
        "text": "ion"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The correct option is A.",
    "required": true
  },
  {
    "id": "col-it-q23",
    "model": "knowledge-mcq",
    "section": "it",
    "questionNumber": 23,
    "prompt": "data = {\"IT\":90,\"CSE\":95}\nprint(data.get(\"ECE\",0))",
    "options": [
      {
        "id": "A",
        "text": "None"
      },
      {
        "id": "B",
        "text": "Error"
      },
      {
        "id": "C",
        "text": "0"
      },
      {
        "id": "D",
        "text": "90"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The correct option is C.",
    "required": true
  }
],
  "aids": [
  {
    "id": "col-aids-q1",
    "model": "knowledge-mcq",
    "section": "aids",
    "questionNumber": 1,
    "prompt": "A company wants to predict whether a customer will purchase a product (Yes/No). Which Machine Learning technique is most appropriate?",
    "options": [
      {
        "id": "A",
        "text": "Clustering"
      },
      {
        "id": "B",
        "text": "Classification"
      },
      {
        "id": "C",
        "text": "Regression"
      },
      {
        "id": "D",
        "text": "Dimensionality Reduction"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-aids-q2",
    "model": "knowledge-mcq",
    "section": "aids",
    "questionNumber": 2,
    "prompt": "Which Python library is primarily used for data manipulation and analysis?",
    "options": [
      {
        "id": "A",
        "text": "TensorFlow"
      },
      {
        "id": "B",
        "text": "Pandas"
      },
      {
        "id": "C",
        "text": "OpenCV"
      },
      {
        "id": "D",
        "text": "Flask"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-aids-q3",
    "model": "knowledge-mcq",
    "section": "aids",
    "questionNumber": 3,
    "prompt": "A dataset contains several missing values. What is the BEST first step before training a model?",
    "options": [
      {
        "id": "A",
        "text": "Ignore the missing values"
      },
      {
        "id": "B",
        "text": "Handle missing values using appropriate preprocessing techniques"
      },
      {
        "id": "C",
        "text": "Train the model directly"
      },
      {
        "id": "D",
        "text": "Delete the entire dataset"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-aids-q4",
    "model": "knowledge-mcq",
    "section": "aids",
    "questionNumber": 4,
    "prompt": "Which visualization is most suitable for showing the relationship between two numerical variables?",
    "options": [
      {
        "id": "A",
        "text": "Pie Chart"
      },
      {
        "id": "B",
        "text": "Scatter Plot"
      },
      {
        "id": "C",
        "text": "Bar Chart"
      },
      {
        "id": "D",
        "text": "Histogram"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-aids-q5",
    "model": "knowledge-mcq",
    "section": "aids",
    "questionNumber": 5,
    "prompt": "A company wants to group customers based on purchasing behavior without predefined labels. Which algorithm is most suitable?",
    "options": [
      {
        "id": "A",
        "text": "Linear Regression"
      },
      {
        "id": "B",
        "text": "Logistic Regression"
      },
      {
        "id": "C",
        "text": "K-Means Clustering"
      },
      {
        "id": "D",
        "text": "Decision Tree"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The correct option is C.",
    "required": true
  },
  {
    "id": "col-aids-q6",
    "model": "knowledge-mcq",
    "section": "aids",
    "questionNumber": 6,
    "prompt": "Which SQL statement is used to retrieve unique records?",
    "options": [
      {
        "id": "A",
        "text": "UNIQUE"
      },
      {
        "id": "B",
        "text": "DISTINCT"
      },
      {
        "id": "C",
        "text": "DIFFERENT"
      },
      {
        "id": "D",
        "text": "FILTER"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-aids-q7",
    "model": "knowledge-mcq",
    "section": "aids",
    "questionNumber": 7,
    "prompt": "What does overfitting mean in Machine Learning?",
    "options": [
      {
        "id": "A",
        "text": "The model performs well on both training and testing data."
      },
      {
        "id": "B",
        "text": "The model memorizes training data and performs poorly on unseen data."
      },
      {
        "id": "C",
        "text": "The model cannot learn from the data."
      },
      {
        "id": "D",
        "text": "The dataset is too small."
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-aids-q8",
    "model": "knowledge-mcq",
    "section": "aids",
    "questionNumber": 8,
    "prompt": "Which metric is most appropriate for evaluating a classification model on an imbalanced dataset?",
    "options": [
      {
        "id": "A",
        "text": "Accuracy"
      },
      {
        "id": "B",
        "text": "Precision & Recall"
      },
      {
        "id": "C",
        "text": "Mean Squared Error"
      },
      {
        "id": "D",
        "text": "R² Score"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-aids-q9",
    "model": "knowledge-mcq",
    "section": "aids",
    "questionNumber": 9,
    "prompt": "Which data structure is most commonly used in Pandas for tabular data?",
    "options": [
      {
        "id": "A",
        "text": "List"
      },
      {
        "id": "B",
        "text": "Dictionary"
      },
      {
        "id": "C",
        "text": "DataFrame"
      },
      {
        "id": "D",
        "text": "Set"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The correct option is C.",
    "required": true
  },
  {
    "id": "col-aids-q10",
    "model": "knowledge-mcq",
    "section": "aids",
    "questionNumber": 10,
    "prompt": "A business wants to forecast next month's sales. Which Machine Learning task does this represent?",
    "options": [
      {
        "id": "A",
        "text": "Classification"
      },
      {
        "id": "B",
        "text": "Clustering"
      },
      {
        "id": "C",
        "text": "Regression"
      },
      {
        "id": "D",
        "text": "Reinforcement Learning"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The correct option is C.",
    "required": true
  },
  {
    "id": "col-aids-q11",
    "model": "knowledge-mcq",
    "section": "aids",
    "questionNumber": 11,
    "prompt": "Your Machine Learning model has 99% training accuracy but only 68% testing accuracy. What is the MOST likely problem?",
    "options": [
      {
        "id": "A",
        "text": "Underfitting"
      },
      {
        "id": "B",
        "text": "Overfitting"
      },
      {
        "id": "C",
        "text": "High Precision"
      },
      {
        "id": "D",
        "text": "Feature Scaling"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-aids-q12",
    "model": "knowledge-mcq",
    "section": "aids",
    "questionNumber": 12,
    "prompt": "A fraud detection system incorrectly classifies many fraudulent transactions as legitimate. Which metric should be prioritized for improvement?",
    "options": [
      {
        "id": "A",
        "text": "Accuracy"
      },
      {
        "id": "B",
        "text": "Precision"
      },
      {
        "id": "C",
        "text": "Recall"
      },
      {
        "id": "D",
        "text": "Mean Absolute Error"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The correct option is C.",
    "required": true
  },
  {
    "id": "col-aids-q13",
    "model": "knowledge-mcq",
    "section": "aids",
    "questionNumber": 13,
    "prompt": "A dataset has 10 million records, but the training process is extremely slow. What is the BEST initial optimization?",
    "options": [
      {
        "id": "A",
        "text": "Increase the font size"
      },
      {
        "id": "B",
        "text": "Perform feature selection and optimize data preprocessing"
      },
      {
        "id": "C",
        "text": "Change the monitor"
      },
      {
        "id": "D",
        "text": "Delete random records without analysis"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-aids-q14",
    "model": "knowledge-mcq",
    "section": "aids",
    "questionNumber": 14,
    "prompt": "Which technique helps reduce the dimensionality of a dataset while preserving maximum variance?",
    "options": [
      {
        "id": "A",
        "text": "Random Forest"
      },
      {
        "id": "B",
        "text": "Principal Component Analysis (PCA)"
      },
      {
        "id": "C",
        "text": "K-Means"
      },
      {
        "id": "D",
        "text": "Naïve Bayes"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-aids-q15",
    "model": "knowledge-mcq",
    "section": "aids",
    "questionNumber": 15,
    "prompt": "A recommendation system suggests products based on users with similar interests. Which technique is commonly used?",
    "options": [
      {
        "id": "A",
        "text": "Collaborative Filtering"
      },
      {
        "id": "B",
        "text": "Logistic Regression"
      },
      {
        "id": "C",
        "text": "KNN Classification"
      },
      {
        "id": "D",
        "text": "Decision Tree"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The correct option is A.",
    "required": true
  },
  {
    "id": "col-aids-q16",
    "model": "knowledge-mcq",
    "section": "aids",
    "questionNumber": 16,
    "prompt": "A healthcare AI model predicts disease with 95% accuracy, but doctors do not trust its decisions because the model cannot explain its predictions. Which AI challenge is being highlighted?",
    "options": [
      {
        "id": "A",
        "text": "Data Cleaning"
      },
      {
        "id": "B",
        "text": "Explainable AI (XAI)"
      },
      {
        "id": "C",
        "text": "Data Visualization"
      },
      {
        "id": "D",
        "text": "Feature Scaling"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-aids-q17",
    "model": "knowledge-mcq",
    "section": "aids",
    "questionNumber": 17,
    "prompt": "A company collects customer data from multiple sources with inconsistent formats. What should be done BEFORE model training?",
    "options": [
      {
        "id": "A",
        "text": "Train the model immediately"
      },
      {
        "id": "B",
        "text": "Perform Data Cleaning and Feature Engineering"
      },
      {
        "id": "C",
        "text": "Remove all duplicate rows without analysis"
      },
      {
        "id": "D",
        "text": "Compress the files"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-aids-q18",
    "model": "knowledge-mcq",
    "section": "aids",
    "questionNumber": 18,
    "prompt": "A chatbot frequently misunderstands customer queries because it fails to understand sentence context. Which AI field primarily addresses this issue?",
    "options": [
      {
        "id": "A",
        "text": "Computer Vision"
      },
      {
        "id": "B",
        "text": "Natural Language Processing (NLP)"
      },
      {
        "id": "C",
        "text": "Reinforcement Learning"
      },
      {
        "id": "D",
        "text": "Robotics"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-aids-q19",
    "model": "knowledge-mcq",
    "section": "aids",
    "questionNumber": 19,
    "prompt": "A retail company wants to identify products that are frequently purchased together to improve cross-selling. Which algorithm is MOST suitable?",
    "options": [
      {
        "id": "A",
        "text": "Apriori Algorithm"
      },
      {
        "id": "B",
        "text": "Linear Regression"
      },
      {
        "id": "C",
        "text": "Logistic Regression"
      },
      {
        "id": "D",
        "text": "K-Means Clustering"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The correct option is A.",
    "required": true
  },
  {
    "id": "col-aids-q20",
    "model": "knowledge-mcq",
    "section": "aids",
    "questionNumber": 20,
    "prompt": "An AI model is deployed in production. Over time, its prediction accuracy gradually decreases because customer behavior changes. What is this phenomenon called?",
    "options": [
      {
        "id": "A",
        "text": "Feature Scaling"
      },
      {
        "id": "B",
        "text": "Data Drift (Concept Drift)"
      },
      {
        "id": "C",
        "text": "Normalization"
      },
      {
        "id": "D",
        "text": "Data Encoding"
      },
      {
        "id": "A",
        "text": "(2,2)"
      },
      {
        "id": "B",
        "text": "(2,1)"
      },
      {
        "id": "C",
        "text": "(1,2)"
      },
      {
        "id": "D",
        "text": "Error"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The correct option is A.",
    "required": true
  },
  {
    "id": "col-aids-q21",
    "model": "knowledge-mcq",
    "section": "aids",
    "questionNumber": 21,
    "prompt": "x = [10,20,30]\nprint(sum(x))",
    "options": [
      {
        "id": "A",
        "text": "30"
      },
      {
        "id": "B",
        "text": "60"
      },
      {
        "id": "C",
        "text": "50"
      },
      {
        "id": "D",
        "text": "Error"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-aids-q22",
    "model": "knowledge-mcq",
    "section": "aids",
    "questionNumber": 22,
    "prompt": "from sklearn.model_selection import train_test_split\nX=[1,2,3,4,5]\ny=[0,1,0,1,0]\nprint(len(train_test_split(X,y,test_size=0.2)))",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "4"
      },
      {
        "id": "D",
        "text": "5"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The correct option is C.",
    "required": true
  },
  {
    "id": "col-aids-q23",
    "model": "knowledge-mcq",
    "section": "aids",
    "questionNumber": 23,
    "prompt": "import numpy as np\na=np.array([1,2,3])\nprint(a*2)\nA.\n[2 4 6]\nB.\n[1 2 3 1 2 3]\nC.\n6",
    "options": [
      {
        "id": "D",
        "text": "Error"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The correct option is A.",
    "required": true
  },
  {
    "id": "col-aids-q24",
    "model": "knowledge-mcq",
    "section": "aids",
    "questionNumber": 24,
    "prompt": "import pandas as pd\ndf=pd.DataFrame({\n\"Marks\":[80,90,100]\n})\nprint(df[\"Marks\"].mean())",
    "options": [
      {
        "id": "A",
        "text": "85"
      },
      {
        "id": "B",
        "text": "90"
      },
      {
        "id": "C",
        "text": "95"
      },
      {
        "id": "D",
        "text": "Error"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  }
],
  "aiml": [
  {
    "id": "col-aiml-q1",
    "model": "knowledge-mcq",
    "section": "aiml",
    "questionNumber": 1,
    "prompt": "A company wants to classify emails as Spam or Not Spam. Which Machine Learning algorithm is best suited for this problem?",
    "options": [
      {
        "id": "A",
        "text": "K-Means Clustering"
      },
      {
        "id": "B",
        "text": "Linear Regression"
      },
      {
        "id": "C",
        "text": "Logistic Regression"
      },
      {
        "id": "D",
        "text": "Apriori Algorithm"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The correct option is C.",
    "required": true
  },
  {
    "id": "col-aiml-q2",
    "model": "knowledge-mcq",
    "section": "aiml",
    "questionNumber": 2,
    "prompt": "Which stage comes immediately after collecting data in a Machine Learning pipeline?",
    "options": [
      {
        "id": "A",
        "text": "Model Deployment"
      },
      {
        "id": "B",
        "text": "Data Preprocessing"
      },
      {
        "id": "C",
        "text": "Model Evaluation"
      },
      {
        "id": "D",
        "text": "Hyperparameter Tuning"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-aiml-q3",
    "model": "knowledge-mcq",
    "section": "aiml",
    "questionNumber": 3,
    "prompt": "A Machine Learning model predicts house prices. Which type of learning problem is this?",
    "options": [
      {
        "id": "A",
        "text": "Classification"
      },
      {
        "id": "B",
        "text": "Clustering"
      },
      {
        "id": "C",
        "text": "Regression"
      },
      {
        "id": "D",
        "text": "Reinforcement Learning"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The correct option is C.",
    "required": true
  },
  {
    "id": "col-aiml-q4",
    "model": "knowledge-mcq",
    "section": "aiml",
    "questionNumber": 4,
    "prompt": "Which activation function is commonly used in hidden layers of deep neural networks?",
    "options": [
      {
        "id": "A",
        "text": "Softmax"
      },
      {
        "id": "B",
        "text": "ReLU"
      },
      {
        "id": "C",
        "text": "Sigmoid"
      },
      {
        "id": "D",
        "text": "Linear"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-aiml-q5",
    "model": "knowledge-mcq",
    "section": "aiml",
    "questionNumber": 5,
    "prompt": "A company wants to group customers based on purchasing patterns without predefined labels. Which algorithm should be used?",
    "options": [
      {
        "id": "A",
        "text": "Decision Tree"
      },
      {
        "id": "B",
        "text": "K-Means"
      },
      {
        "id": "C",
        "text": "Logistic Regression"
      },
      {
        "id": "D",
        "text": "Linear Regression"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-aiml-q6",
    "model": "knowledge-mcq",
    "section": "aiml",
    "questionNumber": 6,
    "prompt": "Which evaluation metric is most suitable for an imbalanced classification dataset?",
    "options": [
      {
        "id": "A",
        "text": "Accuracy"
      },
      {
        "id": "B",
        "text": "Mean Squared Error"
      },
      {
        "id": "C",
        "text": "Precision and Recall"
      },
      {
        "id": "D",
        "text": "R² Score"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The correct option is C.",
    "required": true
  },
  {
    "id": "col-aiml-q7",
    "model": "knowledge-mcq",
    "section": "aiml",
    "questionNumber": 7,
    "prompt": "Why is feature scaling important in Machine Learning?",
    "options": [
      {
        "id": "A",
        "text": "It reduces the number of rows."
      },
      {
        "id": "B",
        "text": "It ensures all features have comparable scales."
      },
      {
        "id": "C",
        "text": "It increases dataset size."
      },
      {
        "id": "D",
        "text": "It removes missing values."
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-aiml-q8",
    "model": "knowledge-mcq",
    "section": "aiml",
    "questionNumber": 8,
    "prompt": "Which Python library is primarily used for building Machine Learning models?",
    "options": [
      {
        "id": "A",
        "text": "NumPy"
      },
      {
        "id": "B",
        "text": "Pandas"
      },
      {
        "id": "C",
        "text": "Scikit-learn"
      },
      {
        "id": "D",
        "text": "Flask"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The correct option is C.",
    "required": true
  },
  {
    "id": "col-aiml-q9",
    "model": "knowledge-mcq",
    "section": "aiml",
    "questionNumber": 9,
    "prompt": "A model performs poorly on both training and testing datasets. What is the most likely reason?",
    "options": [
      {
        "id": "A",
        "text": "Overfitting"
      },
      {
        "id": "B",
        "text": "Underfitting"
      },
      {
        "id": "C",
        "text": "Data Leakage"
      },
      {
        "id": "D",
        "text": "High Variance"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-aiml-q10",
    "model": "knowledge-mcq",
    "section": "aiml",
    "questionNumber": 10,
    "prompt": "Which learning approach allows an AI agent to improve by receiving rewards or penalties?",
    "options": [
      {
        "id": "A",
        "text": "Supervised Learning"
      },
      {
        "id": "B",
        "text": "Unsupervised Learning"
      },
      {
        "id": "C",
        "text": "Reinforcement Learning"
      },
      {
        "id": "D",
        "text": "Transfer Learning"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The correct option is C.",
    "required": true
  },
  {
    "id": "col-aiml-q11",
    "model": "knowledge-mcq",
    "section": "aiml",
    "questionNumber": 11,
    "prompt": "A Deep Learning model achieves 99% training accuracy but 72% testing accuracy. Which technique is MOST likely to improve generalization?",
    "options": [
      {
        "id": "A",
        "text": "Increase the number of layers"
      },
      {
        "id": "B",
        "text": "Apply Dropout Regularization"
      },
      {
        "id": "C",
        "text": "Train for more epochs"
      },
      {
        "id": "D",
        "text": "Increase the learning rate"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-aiml-q12",
    "model": "knowledge-mcq",
    "section": "aiml",
    "questionNumber": 12,
    "prompt": "An AI model used for medical diagnosis must explain why it predicts a disease. Which concept addresses this requirement?",
    "options": [
      {
        "id": "A",
        "text": "Transfer Learning"
      },
      {
        "id": "B",
        "text": "Explainable AI (XAI)"
      },
      {
        "id": "C",
        "text": "Reinforcement Learning"
      },
      {
        "id": "D",
        "text": "Gradient Descent"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-aiml-q13",
    "model": "knowledge-mcq",
    "section": "aiml",
    "questionNumber": 13,
    "prompt": "A self-driving car continuously learns from road conditions and improves its driving policy through rewards. Which AI approach is being used?",
    "options": [
      {
        "id": "A",
        "text": "CNN"
      },
      {
        "id": "B",
        "text": "Reinforcement Learning"
      },
      {
        "id": "C",
        "text": "K-Means"
      },
      {
        "id": "D",
        "text": "Naïve Bayes"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-aiml-q14",
    "model": "knowledge-mcq",
    "section": "aiml",
    "questionNumber": 14,
    "prompt": "Which optimization algorithm is most commonly used for training deep neural networks?",
    "options": [
      {
        "id": "A",
        "text": "Breadth First Search"
      },
      {
        "id": "B",
        "text": "Adam Optimizer"
      },
      {
        "id": "C",
        "text": "Bubble Sort"
      },
      {
        "id": "D",
        "text": "K-Means"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-aiml-q15",
    "model": "knowledge-mcq",
    "section": "aiml",
    "questionNumber": 15,
    "prompt": "A company wants an AI system that can recognize objects in images. Which neural network architecture is most suitable?",
    "options": [
      {
        "id": "A",
        "text": "Recurrent Neural Network (RNN)"
      },
      {
        "id": "B",
        "text": "Convolutional Neural Network (CNN)"
      },
      {
        "id": "C",
        "text": "Decision Tree"
      },
      {
        "id": "D",
        "text": "K-Means"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-aiml-q16",
    "model": "knowledge-mcq",
    "section": "aiml",
    "questionNumber": 16,
    "prompt": "Which technique allows a pre-trained model like ResNet to be adapted for a new image classification task with limited data?",
    "options": [
      {
        "id": "A",
        "text": "Clustering"
      },
      {
        "id": "B",
        "text": "Transfer Learning"
      },
      {
        "id": "C",
        "text": "Feature Scaling"
      },
      {
        "id": "D",
        "text": "Bagging"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-aiml-q17",
    "model": "knowledge-mcq",
    "section": "aiml",
    "questionNumber": 17,
    "prompt": "An NLP model generates grammatically correct text by predicting the next word in a sentence. Which architecture powers most modern Large Language Models (LLMs)?",
    "options": [
      {
        "id": "A",
        "text": "CNN"
      },
      {
        "id": "B",
        "text": "Transformer"
      },
      {
        "id": "C",
        "text": "Decision Tree"
      },
      {
        "id": "D",
        "text": "KNN"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-aiml-q18",
    "model": "knowledge-mcq",
    "section": "aiml",
    "questionNumber": 18,
    "prompt": "During model training, the validation loss starts increasing while the training loss continues decreasing. What should be concluded?",
    "options": [
      {
        "id": "A",
        "text": "The model is underfitting."
      },
      {
        "id": "B",
        "text": "The model is overfitting."
      },
      {
        "id": "C",
        "text": "The learning rate is too low."
      },
      {
        "id": "D",
        "text": "The dataset has missing values."
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-aiml-q19",
    "model": "knowledge-mcq",
    "section": "aiml",
    "questionNumber": 19,
    "prompt": "A recommendation system suggests movies based on users with similar viewing preferences. Which technique is commonly used?",
    "options": [
      {
        "id": "A",
        "text": "Collaborative Filtering"
      },
      {
        "id": "B",
        "text": "Logistic Regression"
      },
      {
        "id": "C",
        "text": "PCA"
      },
      {
        "id": "D",
        "text": "Linear Regression"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The correct option is A.",
    "required": true
  },
  {
    "id": "col-aiml-q20",
    "model": "knowledge-mcq",
    "section": "aiml",
    "questionNumber": 20,
    "prompt": "After deployment, an AI model's accuracy gradually decreases because customer behavior has changed over time. What is this phenomenon called?",
    "options": [
      {
        "id": "A",
        "text": "Feature Engineering"
      },
      {
        "id": "B",
        "text": "Concept Drift"
      },
      {
        "id": "C",
        "text": "Data Encoding"
      },
      {
        "id": "D",
        "text": "Gradient Explosion"
      },
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "Error"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-aiml-q21",
    "model": "knowledge-mcq",
    "section": "aiml",
    "questionNumber": 21,
    "prompt": "from sklearn.preprocessing import StandardScaler\nscaler = StandardScaler()\nprint(type(scaler).__name__)",
    "options": [
      {
        "id": "A",
        "text": "MinMaxScaler"
      },
      {
        "id": "B",
        "text": "StandardScaler"
      },
      {
        "id": "C",
        "text": "Normalizer"
      },
      {
        "id": "D",
        "text": "Error"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-aiml-q22",
    "model": "knowledge-mcq",
    "section": "aiml",
    "questionNumber": 22,
    "prompt": "from sklearn.metrics import accuracy_score\ny_true=[1,0,1,1]\ny_pred=[1,1,1,0]\nprint(accuracy_score(y_true,y_pred))",
    "options": [
      {
        "id": "A",
        "text": "0.25"
      },
      {
        "id": "B",
        "text": "0.50"
      },
      {
        "id": "C",
        "text": "0.75"
      },
      {
        "id": "D",
        "text": "1.00"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-aiml-q23",
    "model": "knowledge-mcq",
    "section": "aiml",
    "questionNumber": 23,
    "prompt": "import numpy as np\nx=np.array([[1,2],[3,4]])\nprint(x.shape)",
    "options": [
      {
        "id": "A",
        "text": "(2,)"
      },
      {
        "id": "B",
        "text": "(2,2)"
      },
      {
        "id": "C",
        "text": "(4,)"
      },
      {
        "id": "D",
        "text": "Error"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-aiml-q24",
    "model": "knowledge-mcq",
    "section": "aiml",
    "questionNumber": 24,
    "prompt": "from sklearn.model_selection import train_test_split\nX=list(range(100))\ny=list(range(100))\nX_train,X_test,y_train,y_test=train_test_split(X,y,test_size=0.2)\nprint(len(X_test))",
    "options": [
      {
        "id": "A",
        "text": "10"
      },
      {
        "id": "B",
        "text": "20"
      },
      {
        "id": "C",
        "text": "25"
      },
      {
        "id": "D",
        "text": "80"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  }
],
  "ece": [
  {
    "id": "col-ece-q1",
    "model": "knowledge-mcq",
    "section": "ece",
    "questionNumber": 1,
    "prompt": "A digital circuit requires an output to be HIGH only when both inputs are HIGH. Which logic gate should be used?",
    "options": [
      {
        "id": "A",
        "text": "OR Gate"
      },
      {
        "id": "B",
        "text": "XOR Gate"
      },
      {
        "id": "C",
        "text": "AND Gate"
      },
      {
        "id": "D",
        "text": "NOR Gate"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The correct option is C.",
    "required": true
  },
  {
    "id": "col-ece-q2",
    "model": "knowledge-mcq",
    "section": "ece",
    "questionNumber": 2,
    "prompt": "A communication engineer wants to transmit a signal over a long distance with minimal attenuation. Which transmission medium is most suitable?",
    "options": [
      {
        "id": "A",
        "text": "Twisted Pair Cable"
      },
      {
        "id": "B",
        "text": "Coaxial Cable"
      },
      {
        "id": "C",
        "text": "Optical Fiber"
      },
      {
        "id": "D",
        "text": "Copper Wire"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The correct option is C.",
    "required": true
  },
  {
    "id": "col-ece-q3",
    "model": "knowledge-mcq",
    "section": "ece",
    "questionNumber": 3,
    "prompt": "Which electronic component is primarily used to convert AC into DC?",
    "options": [
      {
        "id": "A",
        "text": "Transistor"
      },
      {
        "id": "B",
        "text": "Diode"
      },
      {
        "id": "C",
        "text": "Capacitor"
      },
      {
        "id": "D",
        "text": "Resistor"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-ece-q4",
    "model": "knowledge-mcq",
    "section": "ece",
    "questionNumber": 4,
    "prompt": "An embedded system must continuously monitor temperature and control a cooling fan automatically. Which device is MOST suitable?",
    "options": [
      {
        "id": "A",
        "text": "Microcontroller"
      },
      {
        "id": "B",
        "text": "Monitor"
      },
      {
        "id": "C",
        "text": "Hard Disk"
      },
      {
        "id": "D",
        "text": "Router"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The correct option is A.",
    "required": true
  },
  {
    "id": "col-ece-q5",
    "model": "knowledge-mcq",
    "section": "ece",
    "questionNumber": 5,
    "prompt": "A communication channel is experiencing excessive electrical noise. Which parameter is most affected?",
    "options": [
      {
        "id": "A",
        "text": "Signal-to-Noise Ratio (SNR)"
      },
      {
        "id": "B",
        "text": "Clock Speed"
      },
      {
        "id": "C",
        "text": "CPU Utilization"
      },
      {
        "id": "D",
        "text": "Memory Capacity"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The correct option is A.",
    "required": true
  },
  {
    "id": "col-ece-q6",
    "model": "knowledge-mcq",
    "section": "ece",
    "questionNumber": 6,
    "prompt": "Which modulation technique is commonly used in FM radio broadcasting?",
    "options": [
      {
        "id": "A",
        "text": "Amplitude Modulation (AM)"
      },
      {
        "id": "B",
        "text": "Frequency Modulation (FM)"
      },
      {
        "id": "C",
        "text": "Pulse Width Modulation (PWM)"
      },
      {
        "id": "D",
        "text": "Phase Shift Keying (PSK)"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-ece-q7",
    "model": "knowledge-mcq",
    "section": "ece",
    "questionNumber": 7,
    "prompt": "Which instrument is commonly used to observe electronic waveforms?",
    "options": [
      {
        "id": "A",
        "text": "Multimeter"
      },
      {
        "id": "B",
        "text": "Oscilloscope"
      },
      {
        "id": "C",
        "text": "Ammeter"
      },
      {
        "id": "D",
        "text": "Voltmeter"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-ece-q8",
    "model": "knowledge-mcq",
    "section": "ece",
    "questionNumber": 8,
    "prompt": "In a communication system, which component converts analog signals into digital form?",
    "options": [
      {
        "id": "A",
        "text": "DAC"
      },
      {
        "id": "B",
        "text": "ADC"
      },
      {
        "id": "C",
        "text": "Amplifier"
      },
      {
        "id": "D",
        "text": "Oscillator"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-ece-q9",
    "model": "knowledge-mcq",
    "section": "ece",
    "questionNumber": 9,
    "prompt": "A microcontroller receives multiple interrupts simultaneously. Which interrupt is generally serviced first?",
    "options": [
      {
        "id": "A",
        "text": "Lowest Priority Interrupt"
      },
      {
        "id": "B",
        "text": "Highest Priority Interrupt"
      },
      {
        "id": "C",
        "text": "Random Interrupt"
      },
      {
        "id": "D",
        "text": "Last Generated Interrupt"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-ece-q10",
    "model": "knowledge-mcq",
    "section": "ece",
    "questionNumber": 10,
    "prompt": "Which communication protocol is widely used for connecting sensors in IoT devices?",
    "options": [
      {
        "id": "A",
        "text": "HDMI"
      },
      {
        "id": "B",
        "text": "UART"
      },
      {
        "id": "C",
        "text": "MQTT"
      },
      {
        "id": "D",
        "text": "VGA"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The correct option is C.",
    "required": true
  },
  {
    "id": "col-ece-q11",
    "model": "knowledge-mcq",
    "section": "ece",
    "questionNumber": 11,
    "prompt": "An amplifier has high gain but introduces significant distortion at high frequencies. Which parameter should be improved?",
    "options": [
      {
        "id": "A",
        "text": "Bandwidth"
      },
      {
        "id": "B",
        "text": "Supply Voltage"
      },
      {
        "id": "C",
        "text": "Wire Length"
      },
      {
        "id": "D",
        "text": "Resistance Only"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The correct option is A.",
    "required": true
  },
  {
    "id": "col-ece-q12",
    "model": "knowledge-mcq",
    "section": "ece",
    "questionNumber": 12,
    "prompt": "A digital communication system requires reliable transmission over a noisy channel. Which technique improves error detection?",
    "options": [
      {
        "id": "A",
        "text": "CRC (Cyclic Redundancy Check)"
      },
      {
        "id": "B",
        "text": "PWM"
      },
      {
        "id": "C",
        "text": "FM"
      },
      {
        "id": "D",
        "text": "Amplification"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The correct option is A.",
    "required": true
  },
  {
    "id": "col-ece-q13",
    "model": "knowledge-mcq",
    "section": "ece",
    "questionNumber": 13,
    "prompt": "A satellite communication link experiences propagation delay. What is the primary reason?",
    "options": [
      {
        "id": "A",
        "text": "Low Battery"
      },
      {
        "id": "B",
        "text": "Large Distance Between Satellite and Earth"
      },
      {
        "id": "C",
        "text": "High CPU Usage"
      },
      {
        "id": "D",
        "text": "Weak Antenna Color"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-ece-q14",
    "model": "knowledge-mcq",
    "section": "ece",
    "questionNumber": 14,
    "prompt": "A VLSI designer wants to reduce power consumption without affecting functionality. Which approach is MOST effective?",
    "options": [
      {
        "id": "A",
        "text": "Clock Gating"
      },
      {
        "id": "B",
        "text": "Increasing Supply Voltage"
      },
      {
        "id": "C",
        "text": "Adding More Transistors"
      },
      {
        "id": "D",
        "text": "Increasing Clock Frequency"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The correct option is A.",
    "required": true
  },
  {
    "id": "col-ece-q15",
    "model": "knowledge-mcq",
    "section": "ece",
    "questionNumber": 15,
    "prompt": "An embedded system controlling a medical device must guarantee predictable execution time. Which operating system is MOST suitable?",
    "options": [
      {
        "id": "A",
        "text": "Windows"
      },
      {
        "id": "B",
        "text": "Android"
      },
      {
        "id": "C",
        "text": "Real-Time Operating System (RTOS)"
      },
      {
        "id": "D",
        "text": "DOS"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The correct option is C.",
    "required": true
  },
  {
    "id": "col-ece-q16",
    "model": "knowledge-mcq",
    "section": "ece",
    "questionNumber": 16,
    "prompt": "A wireless communication system operating at 5 GHz experiences shorter coverage compared to 900 MHz. What is the primary reason?",
    "options": [
      {
        "id": "A",
        "text": "Higher frequencies experience greater path loss."
      },
      {
        "id": "B",
        "text": "Lower frequencies always require more power."
      },
      {
        "id": "C",
        "text": "5 GHz signals travel faster."
      },
      {
        "id": "D",
        "text": "Frequency does not affect coverage."
      }
    ],
    "correctOptionId": "A",
    "explanation": "The correct option is A.",
    "required": true
  },
  {
    "id": "col-ece-q17",
    "model": "knowledge-mcq",
    "section": "ece",
    "questionNumber": 17,
    "prompt": "An engineer wants to design a digital filter that removes high-frequency noise while preserving low-frequency signals. Which filter should be selected?",
    "options": [
      {
        "id": "A",
        "text": "High-Pass Filter"
      },
      {
        "id": "B",
        "text": "Band-Stop Filter"
      },
      {
        "id": "C",
        "text": "Low-Pass Filter"
      },
      {
        "id": "D",
        "text": "Band-Pass Filter"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The correct option is C.",
    "required": true
  },
  {
    "id": "col-ece-q18",
    "model": "knowledge-mcq",
    "section": "ece",
    "questionNumber": 18,
    "prompt": "A communication network requires high-speed data transfer with low latency for industrial automation. Which technology is MOST suitable?",
    "options": [
      {
        "id": "A",
        "text": "Bluetooth"
      },
      {
        "id": "B",
        "text": "Zigbee"
      },
      {
        "id": "C",
        "text": "5G Network"
      },
      {
        "id": "D",
        "text": "Infrared Communication"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The correct option is C.",
    "required": true
  },
  {
    "id": "col-ece-q19",
    "model": "knowledge-mcq",
    "section": "ece",
    "questionNumber": 19,
    "prompt": "A radar system must accurately determine both the distance and speed of an object. Which principle enables speed measurement?",
    "options": [
      {
        "id": "A",
        "text": "Doppler Effect"
      },
      {
        "id": "B",
        "text": "Ohm's Law"
      },
      {
        "id": "C",
        "text": "Kirchhoff's Law"
      },
      {
        "id": "D",
        "text": "Coulomb's Law"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The correct option is A.",
    "required": true
  },
  {
    "id": "col-ece-q20",
    "model": "knowledge-mcq",
    "section": "ece",
    "questionNumber": 20,
    "prompt": "An autonomous drone loses communication with its controller during flight. What should be the FIRST design feature implemented to improve safety?",
    "options": [
      {
        "id": "A",
        "text": "Increase Camera Resolution"
      },
      {
        "id": "B",
        "text": "Return-to-Home (Fail-Safe) Function"
      },
      {
        "id": "C",
        "text": "Increase Battery Size"
      },
      {
        "id": "D",
        "text": "Increase Motor Speed"
      },
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "4"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "20"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The correct option is C.",
    "required": true
  },
  {
    "id": "col-ece-q21",
    "model": "knowledge-mcq",
    "section": "ece",
    "questionNumber": 21,
    "prompt": "#include <stdio.h>\nint main() {\nint a = 5;\nint b = 3;\nprintf(\"%d\", a & b);\nreturn 0;\n}",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "5"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The correct option is A.",
    "required": true
  },
  {
    "id": "col-ece-q22",
    "model": "knowledge-mcq",
    "section": "ece",
    "questionNumber": 22,
    "prompt": "#include <stdio.h>\nint main() {\nunsigned char x = 255;\nx++;\nprintf(\"%d\", x);\nreturn 0;\n}",
    "options": [
      {
        "id": "A",
        "text": "255"
      },
      {
        "id": "B",
        "text": "0"
      },
      {
        "id": "C",
        "text": "256"
      },
      {
        "id": "D",
        "text": "Compilation Error"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-ece-q23",
    "model": "knowledge-mcq",
    "section": "ece",
    "questionNumber": 23,
    "prompt": "#include <stdio.h>\nint main() {\nint a = 5;\nint b = 10;\nprintf(\"%d\", (a < b) && (b > 5));\nreturn 0;\n}",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "10"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-ece-q24",
    "model": "knowledge-mcq",
    "section": "ece",
    "questionNumber": 24,
    "prompt": "#include <stdio.h>\nint main() {\nint x = 3;\nswitch(x) {\ncase 1:\ncase 2:\nprintf(\"A\");\nbreak;\ncase 3:\nprintf(\"B\");\nbreak;\ndefault:\nprintf(\"C\");\n}\nreturn 0;\n}",
    "options": [
      {
        "id": "A",
        "text": "A"
      },
      {
        "id": "B",
        "text": "B"
      },
      {
        "id": "C",
        "text": "C"
      },
      {
        "id": "D",
        "text": "Compilation Error"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  }
],
  "eee": [
  {
    "id": "col-eee-q1",
    "model": "knowledge-mcq",
    "section": "eee",
    "questionNumber": 1,
    "prompt": "A 3-phase induction motor starts drawing 6 times its rated current during startup. Which starter is most suitable to reduce the starting current for industrial applications?",
    "options": [
      {
        "id": "A",
        "text": "DOL Starter"
      },
      {
        "id": "B",
        "text": "Star-Delta Starter"
      },
      {
        "id": "C",
        "text": "Manual Switch"
      },
      {
        "id": "D",
        "text": "Capacitor Starter"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-eee-q2",
    "model": "knowledge-mcq",
    "section": "eee",
    "questionNumber": 2,
    "prompt": "In a power system, why is electricity transmitted at high voltage?",
    "options": [
      {
        "id": "A",
        "text": "To increase transmission current"
      },
      {
        "id": "B",
        "text": "To reduce I²R transmission losses"
      },
      {
        "id": "C",
        "text": "To increase transformer size"
      },
      {
        "id": "D",
        "text": "To reduce power generation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-eee-q3",
    "model": "knowledge-mcq",
    "section": "eee",
    "questionNumber": 3,
    "prompt": "A transformer operates continuously but its secondary voltage suddenly drops while the primary voltage remains constant. What is the MOST likely reason?",
    "options": [
      {
        "id": "A",
        "text": "Increased load causing voltage drop"
      },
      {
        "id": "B",
        "text": "Transformer frequency increased"
      },
      {
        "id": "C",
        "text": "Core material changed"
      },
      {
        "id": "D",
        "text": "Ambient temperature decreased"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The correct option is A.",
    "required": true
  },
  {
    "id": "col-eee-q4",
    "model": "knowledge-mcq",
    "section": "eee",
    "questionNumber": 4,
    "prompt": "A power factor of 0.6 lagging is observed in an industrial plant. Which equipment should be installed to improve the power factor?",
    "options": [
      {
        "id": "A",
        "text": "Inductor Bank"
      },
      {
        "id": "B",
        "text": "Capacitor Bank"
      },
      {
        "id": "C",
        "text": "Transformer"
      },
      {
        "id": "D",
        "text": "Rectifier"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-eee-q5",
    "model": "knowledge-mcq",
    "section": "eee",
    "questionNumber": 5,
    "prompt": "A DC motor rotates in the opposite direction after maintenance. What is the MOST probable cause?",
    "options": [
      {
        "id": "A",
        "text": "Armature resistance increased"
      },
      {
        "id": "B",
        "text": "Supply voltage reduced"
      },
      {
        "id": "C",
        "text": "Armature or field connections reversed"
      },
      {
        "id": "D",
        "text": "Bearing lubrication improved"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The correct option is C.",
    "required": true
  },
  {
    "id": "col-eee-q6",
    "model": "knowledge-mcq",
    "section": "eee",
    "questionNumber": 6,
    "prompt": "Which protection device detects earth leakage currents and disconnects the circuit?",
    "options": [
      {
        "id": "A",
        "text": "Fuse"
      },
      {
        "id": "B",
        "text": "MCB"
      },
      {
        "id": "C",
        "text": "RCCB / ELCB"
      },
      {
        "id": "D",
        "text": "Contactor"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The correct option is C.",
    "required": true
  },
  {
    "id": "col-eee-q7",
    "model": "knowledge-mcq",
    "section": "eee",
    "questionNumber": 7,
    "prompt": "A generator frequency decreases from 50 Hz to 47 Hz. What does this generally indicate?",
    "options": [
      {
        "id": "A",
        "text": "Generator overload"
      },
      {
        "id": "B",
        "text": "High voltage"
      },
      {
        "id": "C",
        "text": "Capacitor failure"
      },
      {
        "id": "D",
        "text": "Transformer overheating"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The correct option is A.",
    "required": true
  },
  {
    "id": "col-eee-q8",
    "model": "knowledge-mcq",
    "section": "eee",
    "questionNumber": 8,
    "prompt": "Which electrical machine converts mechanical energy into electrical energy?",
    "options": [
      {
        "id": "A",
        "text": "Transformer"
      },
      {
        "id": "B",
        "text": "Induction Motor"
      },
      {
        "id": "C",
        "text": "Generator"
      },
      {
        "id": "D",
        "text": "Rectifier"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The correct option is C.",
    "required": true
  },
  {
    "id": "col-eee-q9",
    "model": "knowledge-mcq",
    "section": "eee",
    "questionNumber": 9,
    "prompt": "An inverter is primarily used to:",
    "options": [
      {
        "id": "A",
        "text": "Convert AC to DC"
      },
      {
        "id": "B",
        "text": "Convert DC to AC"
      },
      {
        "id": "C",
        "text": "Increase Voltage"
      },
      {
        "id": "D",
        "text": "Measure Power"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-eee-q10",
    "model": "knowledge-mcq",
    "section": "eee",
    "questionNumber": 10,
    "prompt": "A synchronous motor is widely used in industries because it:",
    "options": [
      {
        "id": "A",
        "text": "Always operates below synchronous speed"
      },
      {
        "id": "B",
        "text": "Can improve system power factor"
      },
      {
        "id": "C",
        "text": "Requires no excitation"
      },
      {
        "id": "D",
        "text": "Has no rotor"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-eee-q11",
    "model": "knowledge-mcq",
    "section": "eee",
    "questionNumber": 11,
    "prompt": "A 132 kV transmission line suddenly trips during a thunderstorm. Which relay most likely detected the fault?",
    "options": [
      {
        "id": "A",
        "text": "Thermal Relay"
      },
      {
        "id": "B",
        "text": "Differential Relay"
      },
      {
        "id": "C",
        "text": "Distance Relay"
      },
      {
        "id": "D",
        "text": "Time Delay Relay"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The correct option is C.",
    "required": true
  },
  {
    "id": "col-eee-q12",
    "model": "knowledge-mcq",
    "section": "eee",
    "questionNumber": 12,
    "prompt": "A transformer experiences excessive heating despite operating below rated load. Which issue is MOST likely?",
    "options": [
      {
        "id": "A",
        "text": "Harmonic currents causing additional losses"
      },
      {
        "id": "B",
        "text": "Low ambient temperature"
      },
      {
        "id": "C",
        "text": "High insulation resistance"
      },
      {
        "id": "D",
        "text": "Reduced copper resistance"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The correct option is A.",
    "required": true
  },
  {
    "id": "col-eee-q13",
    "model": "knowledge-mcq",
    "section": "eee",
    "questionNumber": 13,
    "prompt": "An induction motor draws excessive current but produces low torque. What is the MOST probable cause?",
    "options": [
      {
        "id": "A",
        "text": "Single Phasing"
      },
      {
        "id": "B",
        "text": "High Power Factor"
      },
      {
        "id": "C",
        "text": "Rotor Running Above Synchronous Speed"
      },
      {
        "id": "D",
        "text": "Perfect Load Balancing"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The correct option is A.",
    "required": true
  },
  {
    "id": "col-eee-q14",
    "model": "knowledge-mcq",
    "section": "eee",
    "questionNumber": 14,
    "prompt": "A power plant must maintain constant frequency despite sudden load variations. Which control mechanism primarily performs this function?",
    "options": [
      {
        "id": "A",
        "text": "Automatic Voltage Regulator (AVR)"
      },
      {
        "id": "B",
        "text": "Governor Control System"
      },
      {
        "id": "C",
        "text": "Circuit Breaker"
      },
      {
        "id": "D",
        "text": "Capacitor Bank"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-eee-q15",
    "model": "knowledge-mcq",
    "section": "eee",
    "questionNumber": 15,
    "prompt": "A transmission system requires fast fault isolation without affecting healthy sections. Which protection principle achieves this?",
    "options": [
      {
        "id": "A",
        "text": "Selective Protection"
      },
      {
        "id": "B",
        "text": "Overloading"
      },
      {
        "id": "C",
        "text": "Earthing Only"
      },
      {
        "id": "D",
        "text": "High Resistance Grounding"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The correct option is A.",
    "required": true
  },
  {
    "id": "col-eee-q16",
    "model": "knowledge-mcq",
    "section": "eee",
    "questionNumber": 16,
    "prompt": "A Variable Frequency Drive (VFD) controls an induction motor by varying:",
    "options": [
      {
        "id": "A",
        "text": "Rotor Resistance Only"
      },
      {
        "id": "B",
        "text": "Supply Voltage and Frequency"
      },
      {
        "id": "C",
        "text": "Power Factor Only"
      },
      {
        "id": "D",
        "text": "Current Only"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-eee-q17",
    "model": "knowledge-mcq",
    "section": "eee",
    "questionNumber": 17,
    "prompt": "A solar photovoltaic plant suddenly shows a significant reduction in output despite clear weather conditions. Which should be investigated FIRST?",
    "options": [
      {
        "id": "A",
        "text": "Panel Dust, Shading, or MPPT Controller Performance"
      },
      {
        "id": "B",
        "text": "Generator Cooling Fan"
      },
      {
        "id": "C",
        "text": "Transformer Oil Level"
      },
      {
        "id": "D",
        "text": "Cable Color"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The correct option is A.",
    "required": true
  },
  {
    "id": "col-eee-q18",
    "model": "knowledge-mcq",
    "section": "eee",
    "questionNumber": 18,
    "prompt": "A differential relay operates even though there is no internal transformer fault. Which condition could cause this false operation?",
    "options": [
      {
        "id": "A",
        "text": "Current Transformer (CT) Saturation or Mismatch"
      },
      {
        "id": "B",
        "text": "Balanced Load"
      },
      {
        "id": "C",
        "text": "High Power Factor"
      },
      {
        "id": "D",
        "text": "Proper Earthing"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The correct option is A.",
    "required": true
  },
  {
    "id": "col-eee-q19",
    "model": "knowledge-mcq",
    "section": "eee",
    "questionNumber": 19,
    "prompt": "A factory experiences repeated voltage dips whenever a large induction motor starts. What is the MOST practical engineering solution?",
    "options": [
      {
        "id": "A",
        "text": "Increase Wire Length"
      },
      {
        "id": "B",
        "text": "Install a Soft Starter or Variable Frequency Drive (VFD)"
      },
      {
        "id": "C",
        "text": "Increase Lighting Load"
      },
      {
        "id": "D",
        "text": "Reduce Transformer Rating"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-eee-q20",
    "model": "knowledge-mcq",
    "section": "eee",
    "questionNumber": 20,
    "prompt": "An electrical engineer is designing protection for a hospital's critical power supply. Which system provides uninterrupted power during a grid failure?",
    "options": [
      {
        "id": "A",
        "text": "MCB"
      },
      {
        "id": "B",
        "text": "UPS with Automatic Transfer Switch (ATS)"
      },
      {
        "id": "C",
        "text": "Contactor"
      },
      {
        "id": "D",
        "text": "Distribution Board"
      },
      {
        "id": "A",
        "text": "230"
      },
      {
        "id": "B",
        "text": "240"
      },
      {
        "id": "C",
        "text": "2300"
      },
      {
        "id": "D",
        "text": "23"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The correct option is C.",
    "required": true
  },
  {
    "id": "col-eee-q21",
    "model": "knowledge-mcq",
    "section": "eee",
    "questionNumber": 21,
    "prompt": "#include <stdio.h>\nint main() {\nint breaker = 1;\nif(breaker)\nprintf(\"Power ON\");\nelse\nprintf(\"Power OFF\");\nreturn 0;\n}",
    "options": [
      {
        "id": "A",
        "text": "Power OFF"
      },
      {
        "id": "B",
        "text": "Power ON"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "Error"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-eee-q22",
    "model": "knowledge-mcq",
    "section": "eee",
    "questionNumber": 22,
    "prompt": "#include <stdio.h>\nint main() {\nint power = 100;\nint load = 50;\nprintf(\"%d\", power/load);\nreturn 0;\n}",
    "options": [
      {
        "id": "A",
        "text": "50"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "100"
      },
      {
        "id": "D",
        "text": "Error"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-eee-q23",
    "model": "knowledge-mcq",
    "section": "eee",
    "questionNumber": 23,
    "prompt": "A PLC ladder logic has two normally open switches connected in series controlling one output coil.\nWhat happens if only one switch is ON?",
    "options": [
      {
        "id": "A",
        "text": "Output turns ON"
      },
      {
        "id": "B",
        "text": "Output remains OFF"
      },
      {
        "id": "C",
        "text": "PLC stops"
      },
      {
        "id": "D",
        "text": "Fuse blows"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-eee-q24",
    "model": "knowledge-mcq",
    "section": "eee",
    "questionNumber": 24,
    "prompt": "A motor protection PLC program contains:\nIF Temperature > 90°C\nAND Current > Rated Value\nTHEN Stop Motor\nCurrent = 18 A\nRated Current = 15 A\nTemperature = 95°C\nWhat is the PLC output?",
    "options": [
      {
        "id": "A",
        "text": "Continue Running"
      },
      {
        "id": "B",
        "text": "Alarm Only"
      },
      {
        "id": "C",
        "text": "Stop Motor"
      },
      {
        "id": "D",
        "text": "Restart Motor"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The correct option is C.",
    "required": true
  }
],
  "mechanical": [
  {
    "id": "col-mechanical-q1",
    "model": "knowledge-mcq",
    "section": "mechanical",
    "questionNumber": 1,
    "prompt": "A steel rod is subjected to a tensile load beyond its elastic limit. Which of the following will occur?",
    "options": [
      {
        "id": "A",
        "text": "It completely returns to its original shape after unloading."
      },
      {
        "id": "B",
        "text": "It undergoes permanent deformation."
      },
      {
        "id": "C",
        "text": "Its Young's Modulus increases."
      },
      {
        "id": "D",
        "text": "Its density decreases."
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-mechanical-q2",
    "model": "knowledge-mcq",
    "section": "mechanical",
    "questionNumber": 2,
    "prompt": "An IC engine in a vehicle overheats despite having sufficient coolant. Which is the MOST likely cause?",
    "options": [
      {
        "id": "A",
        "text": "Faulty thermostat preventing coolant circulation"
      },
      {
        "id": "B",
        "text": "Low tyre pressure"
      },
      {
        "id": "C",
        "text": "Worn brake pads"
      },
      {
        "id": "D",
        "text": "High engine oil level"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The correct option is A.",
    "required": true
  },
  {
    "id": "col-mechanical-q3",
    "model": "knowledge-mcq",
    "section": "mechanical",
    "questionNumber": 3,
    "prompt": "A centrifugal pump delivers less water than expected. Which should be checked FIRST?",
    "options": [
      {
        "id": "A",
        "text": "Cavitation or air leakage in the suction line"
      },
      {
        "id": "B",
        "text": "Paint quality"
      },
      {
        "id": "C",
        "text": "Motor color"
      },
      {
        "id": "D",
        "text": "Pipe insulation"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The correct option is A.",
    "required": true
  },
  {
    "id": "col-mechanical-q4",
    "model": "knowledge-mcq",
    "section": "mechanical",
    "questionNumber": 4,
    "prompt": "Why are flywheels used in reciprocating engines?",
    "options": [
      {
        "id": "A",
        "text": "To increase fuel consumption"
      },
      {
        "id": "B",
        "text": "To maintain uniform rotational speed"
      },
      {
        "id": "C",
        "text": "To reduce engine size"
      },
      {
        "id": "D",
        "text": "To increase friction"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-mechanical-q5",
    "model": "knowledge-mcq",
    "section": "mechanical",
    "questionNumber": 5,
    "prompt": "A shaft transmitting high torque fails repeatedly at the keyway. What is the MOST probable reason?",
    "options": [
      {
        "id": "A",
        "text": "Stress concentration at the keyway"
      },
      {
        "id": "B",
        "text": "Low ambient temperature"
      },
      {
        "id": "C",
        "text": "Excess lubrication"
      },
      {
        "id": "D",
        "text": "Increased bearing life"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The correct option is A.",
    "required": true
  },
  {
    "id": "col-mechanical-q6",
    "model": "knowledge-mcq",
    "section": "mechanical",
    "questionNumber": 6,
    "prompt": "Which manufacturing process is MOST suitable for producing thousands of identical plastic bottles?",
    "options": [
      {
        "id": "A",
        "text": "Sand Casting"
      },
      {
        "id": "B",
        "text": "Injection Moulding"
      },
      {
        "id": "C",
        "text": "Forging"
      },
      {
        "id": "D",
        "text": "Welding"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is B.",
    "required": true
  },
  {
    "id": "col-mechanical-q7",
    "model": "knowledge-mcq",
    "section": "mechanical",
    "questionNumber": 7,
    "prompt": "A heat exchanger is required to achieve maximum heat transfer efficiency. Which configuration is generally preferred?",
    "options": [
      {
        "id": "A",
        "text": "Parallel Flow"
      },
      {
        "id": "B",
        "text": "Counter Flow"
      },
      {
        "id": "C",
        "text": "Cross Flow"
      },
      {
        "id": "D",
        "text": "Natural Convection Flow"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The correct option is A.",
    "required": true
  },
  {
    "id": "col-mechanical-q8",
    "model": "knowledge-mcq",
    "section": "mechanical",
    "questionNumber": 8,
    "prompt": "In a fluid flow, what does a Reynolds number of 1500 typically represent?",
    "options": [
      {
        "id": "A",
        "text": "Laminar Flow"
      },
      {
        "id": "B",
        "text": "Turbulent Flow"
      },
      {
        "id": "C",
        "text": "Transition Flow"
      },
      {
        "id": "D",
        "text": "Supersonic Flow"
      }
    ],
    "correctOptionId": "A",
    "explanation": "A Reynolds number below 2000 in a pipe indicates laminar flow.",
    "required": true
  },
  {
    "id": "col-mechanical-q9",
    "model": "knowledge-mcq",
    "section": "mechanical",
    "questionNumber": 9,
    "prompt": "Which of the following processes is used to improve the hardness of a steel components surfaces?",
    "options": [
      {
        "id": "A",
        "text": "Annealing"
      },
      {
        "id": "B",
        "text": "Case Hardening / Carburizing"
      },
      {
        "id": "C",
        "text": "Tempering"
      },
      {
        "id": "D",
        "text": "Normalizing"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Case hardening adds carbon or nitrogen to the surface, making it wear-resistant while leaving the core ductile.",
    "required": true
  },
  {
    "id": "col-mechanical-q10",
    "model": "knowledge-mcq",
    "section": "mechanical",
    "questionNumber": 10,
    "prompt": "Which gas law states that at constant temperature, pressure is inversely proportional to volume?",
    "options": [
      {
        "id": "A",
        "text": "Charles's Law"
      },
      {
        "id": "B",
        "text": "Boyles's Law"
      },
      {
        "id": "C",
        "text": "Gay-Lussac's Law"
      },
      {
        "id": "D",
        "text": "Avogadro's Law"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Boyle's Law relates pressure and volume at constant temperature: PV = Constant.",
    "required": true
  },
  {
    "id": "col-mechanical-q11",
    "model": "knowledge-mcq",
    "section": "mechanical",
    "questionNumber": 11,
    "prompt": "Which parameter describes a materials resistance to elastic deformation under tension or compression?",
    "options": [
      {
        "id": "A",
        "text": "Poisson's Ratio"
      },
      {
        "id": "B",
        "text": "Young's Modulus"
      },
      {
        "id": "C",
        "text": "Bulk Modulus"
      },
      {
        "id": "D",
        "text": "Shear Modulus"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Young's Modulus (E) is the ratio of tensile stress to tensile strain within the elastic limit.",
    "required": true
  },
  {
    "id": "col-mechanical-q12",
    "model": "knowledge-mcq",
    "section": "mechanical",
    "questionNumber": 12,
    "prompt": "What is the primary purpose of a draft angle in casting and molding patterns?",
    "options": [
      {
        "id": "A",
        "text": "To improve surface finish"
      },
      {
        "id": "B",
        "text": "To facilitate easy removal of the pattern from the mold"
      },
      {
        "id": "C",
        "text": "To prevent thermal cracking"
      },
      {
        "id": "D",
        "text": "To increase metal flow speed"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Draft angles are tapers added to patterns to make them easily withdrawable from sand molds without breaking the edges.",
    "required": true
  },
  {
    "id": "col-mechanical-q13",
    "model": "knowledge-mcq",
    "section": "mechanical",
    "questionNumber": 13,
    "prompt": "Which thermodynamic cycle is used as the standard of comparison for steam power plants?",
    "options": [
      {
        "id": "A",
        "text": "Carnot Cycle"
      },
      {
        "id": "B",
        "text": "Rankine Cycle"
      },
      {
        "id": "C",
        "text": "Otto Cycle"
      },
      {
        "id": "D",
        "text": "Brayton Cycle"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The Rankine Cycle represents the idealized thermodynamic cycle of a steam turbine power plant.",
    "required": true
  },
  {
    "id": "col-mechanical-q14",
    "model": "knowledge-mcq",
    "section": "mechanical",
    "questionNumber": 14,
    "prompt": "What is the main function of a governor in an engine?",
    "options": [
      {
        "id": "A",
        "text": "To store energy during power strokes"
      },
      {
        "id": "B",
        "text": "To keep mean engine speed constant during load variations"
      },
      {
        "id": "C",
        "text": "To reduce fuel consumption automatically"
      },
      {
        "id": "D",
        "text": "To start the engine"
      }
    ],
    "correctOptionId": "B",
    "explanation": "A governor regulates fuel input to maintain engine speed constant under varying loads.",
    "required": true
  },
  {
    "id": "col-mechanical-q15",
    "model": "knowledge-mcq",
    "section": "mechanical",
    "questionNumber": 15,
    "prompt": "In heat transfer, what mode is dominated by molecular collisions and free electron movement in solids?",
    "options": [
      {
        "id": "A",
        "text": "Radiation"
      },
      {
        "id": "B",
        "text": "Convection"
      },
      {
        "id": "C",
        "text": "Conduction"
      },
      {
        "id": "D",
        "text": "Advection"
      }
    ],
    "correctOptionId": "C",
    "explanation": "Conduction is heat transfer within a medium due to direct contact and microscopic collisions.",
    "required": true
  },
  {
    "id": "col-mechanical-q16",
    "model": "knowledge-mcq",
    "section": "mechanical",
    "questionNumber": 16,
    "prompt": "Which mechanism converts rotational motion to linear motion?",
    "options": [
      {
        "id": "A",
        "text": "Gear Train"
      },
      {
        "id": "B",
        "text": "Rack and Pinion"
      },
      {
        "id": "C",
        "text": "Universal Joint"
      },
      {
        "id": "D",
        "text": "Belt and Pulley"
      }
    ],
    "correctOptionId": "B",
    "explanation": "A rack and pinion gear set converts rotary motion from the pinion to linear motion in the rack.",
    "required": true
  },
  {
    "id": "col-mechanical-q17",
    "model": "knowledge-mcq",
    "section": "mechanical",
    "questionNumber": 17,
    "prompt": "What does the term 'CNC' stand for in manufacturing?",
    "options": [
      {
        "id": "A",
        "text": "Computer Numerical Control"
      },
      {
        "id": "B",
        "text": "Central Network Computer"
      },
      {
        "id": "C",
        "text": "Customized Numerical Code"
      },
      {
        "id": "D",
        "text": "Control Network Communication"
      }
    ],
    "correctOptionId": "A",
    "explanation": "CNC stands for Computer Numerical Control, referring to automated machine tools.",
    "required": true
  },
  {
    "id": "col-mechanical-q18",
    "model": "knowledge-mcq",
    "section": "mechanical",
    "questionNumber": 18,
    "prompt": "Which material index refers to the ratio of ultimate shear strength to ultimate tensile strength?",
    "options": [
      {
        "id": "A",
        "text": "Poisson's Ratio"
      },
      {
        "id": "B",
        "text": "Ductility"
      },
      {
        "id": "C",
        "text": "Shear Strength Factor"
      },
      {
        "id": "D",
        "text": "Factor of Safety"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The ratio helps design shafts against shear failure.",
    "required": true
  },
  {
    "id": "col-mechanical-q19",
    "model": "knowledge-mcq",
    "section": "mechanical",
    "questionNumber": 19,
    "prompt": "What type of stress is produced in a thin cylinder subjected to internal fluid pressure?",
    "options": [
      {
        "id": "A",
        "text": "Torsional stress"
      },
      {
        "id": "B",
        "text": "Hoop and Longitudinal stress"
      },
      {
        "id": "C",
        "text": "Bending stress"
      },
      {
        "id": "D",
        "text": "Shear stress"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Thin pressure vessels experience hoop (circumferential) and longitudinal (axial) stresses.",
    "required": true
  },
  {
    "id": "col-mechanical-q20",
    "model": "knowledge-mcq",
    "section": "mechanical",
    "questionNumber": 20,
    "prompt": "Which component is designed to absorb shock energy and isolate vibrations in automotive suspension?",
    "options": [
      {
        "id": "A",
        "text": "Flywheel"
      },
      {
        "id": "B",
        "text": "Damper / Shock Absorber"
      },
      {
        "id": "C",
        "text": "Differential"
      },
      {
        "id": "D",
        "text": "Universal Coupling"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Shock absorbers or dampers dissipate kinetic energy of spring movement into thermal energy.",
    "required": true
  },
  {
    "id": "col-mechanical-q21",
    "model": "knowledge-mcq",
    "section": "mechanical",
    "questionNumber": 21,
    "prompt": "You are designing a MATLAB script to calculate the bending stress. If stress = M*y/I, what happens if I increases?",
    "options": [
      {
        "id": "A",
        "text": "Bending stress increases"
      },
      {
        "id": "B",
        "text": "Bending stress decreases"
      },
      {
        "id": "C",
        "text": "Bending stress remains constant"
      },
      {
        "id": "D",
        "text": "Script throws division-by-zero error"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Since I (Moment of Inertia) is in the denominator, increasing I reduces the bending stress.",
    "required": true
  },
  {
    "id": "col-mechanical-q22",
    "model": "knowledge-mcq",
    "section": "mechanical",
    "questionNumber": 22,
    "prompt": "In a CAD system, which constraint type enforces that two circles share the same center point?",
    "options": [
      {
        "id": "A",
        "text": "Tangent"
      },
      {
        "id": "B",
        "text": "Concentric"
      },
      {
        "id": "C",
        "text": "Collinear"
      },
      {
        "id": "D",
        "text": "Coincident"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Concentric constraint locks the center points of two circles or arcs together.",
    "required": true
  },
  {
    "id": "col-mechanical-q23",
    "model": "knowledge-mcq",
    "section": "mechanical",
    "questionNumber": 23,
    "prompt": "A student codes a simulation for heat transfer through a brick wall. Which equation is the correct discretized 1D heat conduction equation?",
    "options": [
      {
        "id": "A",
        "text": "q = -k * A * (dT/dx)"
      },
      {
        "id": "B",
        "text": "q = h * A * (dT)"
      },
      {
        "id": "C",
        "text": "q = sigma * A * T^4"
      },
      {
        "id": "D",
        "text": "q = rho * Cp * V * dT/dt"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Fourier's Law of heat conduction is q = -k A dT/dx.",
    "required": true
  },
  {
    "id": "col-mechanical-q24",
    "model": "knowledge-mcq",
    "section": "mechanical",
    "questionNumber": 24,
    "prompt": "You are simulating a mechanical link in Python using finite difference method. Which variable needs to be small to ensure numerical convergence?",
    "options": [
      {
        "id": "A",
        "text": "Time step (dt)"
      },
      {
        "id": "B",
        "text": "Grid size (dx)"
      },
      {
        "id": "C",
        "text": "Elastic modulus (E)"
      },
      {
        "id": "D",
        "text": "Mass of the link"
      }
    ],
    "correctOptionId": "A",
    "explanation": "A small time step (dt) satisfies the stability conditions (such as CFL condition) to prevent divergence.",
    "required": true
  },
  {
    "id": "col-mechanical-q25",
    "model": "knowledge-mcq",
    "section": "mechanical",
    "questionNumber": 25,
    "prompt": "Which G-code is universally used in CNC machines to initiate rapid linear positioning?",
    "options": [
      {
        "id": "A",
        "text": "G00"
      },
      {
        "id": "B",
        "text": "G01"
      },
      {
        "id": "C",
        "text": "G02"
      },
      {
        "id": "D",
        "text": "G28"
      }
    ],
    "correctOptionId": "A",
    "explanation": "G00 specifies rapid traverse to move tools quickly without cutting.",
    "required": true
  }
],
  "civil": [
  {
    "id": "col-civil-q1",
    "model": "knowledge-mcq",
    "section": "civil",
    "questionNumber": 1,
    "prompt": "Under CIVIL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-civil-q2",
    "model": "knowledge-mcq",
    "section": "civil",
    "questionNumber": 2,
    "prompt": "Under CIVIL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-civil-q3",
    "model": "knowledge-mcq",
    "section": "civil",
    "questionNumber": 3,
    "prompt": "Under CIVIL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-civil-q4",
    "model": "knowledge-mcq",
    "section": "civil",
    "questionNumber": 4,
    "prompt": "Under CIVIL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-civil-q5",
    "model": "knowledge-mcq",
    "section": "civil",
    "questionNumber": 5,
    "prompt": "Under CIVIL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-civil-q6",
    "model": "knowledge-mcq",
    "section": "civil",
    "questionNumber": 6,
    "prompt": "Under CIVIL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-civil-q7",
    "model": "knowledge-mcq",
    "section": "civil",
    "questionNumber": 7,
    "prompt": "Under CIVIL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-civil-q8",
    "model": "knowledge-mcq",
    "section": "civil",
    "questionNumber": 8,
    "prompt": "Under CIVIL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-civil-q9",
    "model": "knowledge-mcq",
    "section": "civil",
    "questionNumber": 9,
    "prompt": "Under CIVIL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-civil-q10",
    "model": "knowledge-mcq",
    "section": "civil",
    "questionNumber": 10,
    "prompt": "Under CIVIL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-civil-q11",
    "model": "knowledge-mcq",
    "section": "civil",
    "questionNumber": 11,
    "prompt": "Under CIVIL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-civil-q12",
    "model": "knowledge-mcq",
    "section": "civil",
    "questionNumber": 12,
    "prompt": "Under CIVIL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-civil-q13",
    "model": "knowledge-mcq",
    "section": "civil",
    "questionNumber": 13,
    "prompt": "Under CIVIL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-civil-q14",
    "model": "knowledge-mcq",
    "section": "civil",
    "questionNumber": 14,
    "prompt": "Under CIVIL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-civil-q15",
    "model": "knowledge-mcq",
    "section": "civil",
    "questionNumber": 15,
    "prompt": "Under CIVIL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-civil-q16",
    "model": "knowledge-mcq",
    "section": "civil",
    "questionNumber": 16,
    "prompt": "Under CIVIL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-civil-q17",
    "model": "knowledge-mcq",
    "section": "civil",
    "questionNumber": 17,
    "prompt": "Under CIVIL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-civil-q18",
    "model": "knowledge-mcq",
    "section": "civil",
    "questionNumber": 18,
    "prompt": "Under CIVIL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-civil-q19",
    "model": "knowledge-mcq",
    "section": "civil",
    "questionNumber": 19,
    "prompt": "Under CIVIL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-civil-q20",
    "model": "knowledge-mcq",
    "section": "civil",
    "questionNumber": 20,
    "prompt": "Under CIVIL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-civil-q21",
    "model": "knowledge-mcq",
    "section": "civil",
    "questionNumber": 21,
    "prompt": "For a practical problem in CIVIL, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-civil-q22",
    "model": "knowledge-mcq",
    "section": "civil",
    "questionNumber": 22,
    "prompt": "For a practical problem in CIVIL, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-civil-q23",
    "model": "knowledge-mcq",
    "section": "civil",
    "questionNumber": 23,
    "prompt": "For a practical problem in CIVIL, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-civil-q24",
    "model": "knowledge-mcq",
    "section": "civil",
    "questionNumber": 24,
    "prompt": "For a practical problem in CIVIL, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-civil-q25",
    "model": "knowledge-mcq",
    "section": "civil",
    "questionNumber": 25,
    "prompt": "For a practical problem in CIVIL, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  }
],
  "chemical": [
  {
    "id": "col-chemical-q1",
    "model": "knowledge-mcq",
    "section": "chemical",
    "questionNumber": 1,
    "prompt": "Under CHEMICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-chemical-q2",
    "model": "knowledge-mcq",
    "section": "chemical",
    "questionNumber": 2,
    "prompt": "Under CHEMICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-chemical-q3",
    "model": "knowledge-mcq",
    "section": "chemical",
    "questionNumber": 3,
    "prompt": "Under CHEMICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-chemical-q4",
    "model": "knowledge-mcq",
    "section": "chemical",
    "questionNumber": 4,
    "prompt": "Under CHEMICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-chemical-q5",
    "model": "knowledge-mcq",
    "section": "chemical",
    "questionNumber": 5,
    "prompt": "Under CHEMICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-chemical-q6",
    "model": "knowledge-mcq",
    "section": "chemical",
    "questionNumber": 6,
    "prompt": "Under CHEMICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-chemical-q7",
    "model": "knowledge-mcq",
    "section": "chemical",
    "questionNumber": 7,
    "prompt": "Under CHEMICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-chemical-q8",
    "model": "knowledge-mcq",
    "section": "chemical",
    "questionNumber": 8,
    "prompt": "Under CHEMICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-chemical-q9",
    "model": "knowledge-mcq",
    "section": "chemical",
    "questionNumber": 9,
    "prompt": "Under CHEMICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-chemical-q10",
    "model": "knowledge-mcq",
    "section": "chemical",
    "questionNumber": 10,
    "prompt": "Under CHEMICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-chemical-q11",
    "model": "knowledge-mcq",
    "section": "chemical",
    "questionNumber": 11,
    "prompt": "Under CHEMICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-chemical-q12",
    "model": "knowledge-mcq",
    "section": "chemical",
    "questionNumber": 12,
    "prompt": "Under CHEMICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-chemical-q13",
    "model": "knowledge-mcq",
    "section": "chemical",
    "questionNumber": 13,
    "prompt": "Under CHEMICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-chemical-q14",
    "model": "knowledge-mcq",
    "section": "chemical",
    "questionNumber": 14,
    "prompt": "Under CHEMICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-chemical-q15",
    "model": "knowledge-mcq",
    "section": "chemical",
    "questionNumber": 15,
    "prompt": "Under CHEMICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-chemical-q16",
    "model": "knowledge-mcq",
    "section": "chemical",
    "questionNumber": 16,
    "prompt": "Under CHEMICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-chemical-q17",
    "model": "knowledge-mcq",
    "section": "chemical",
    "questionNumber": 17,
    "prompt": "Under CHEMICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-chemical-q18",
    "model": "knowledge-mcq",
    "section": "chemical",
    "questionNumber": 18,
    "prompt": "Under CHEMICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-chemical-q19",
    "model": "knowledge-mcq",
    "section": "chemical",
    "questionNumber": 19,
    "prompt": "Under CHEMICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-chemical-q20",
    "model": "knowledge-mcq",
    "section": "chemical",
    "questionNumber": 20,
    "prompt": "Under CHEMICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-chemical-q21",
    "model": "knowledge-mcq",
    "section": "chemical",
    "questionNumber": 21,
    "prompt": "For a practical problem in CHEMICAL, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-chemical-q22",
    "model": "knowledge-mcq",
    "section": "chemical",
    "questionNumber": 22,
    "prompt": "For a practical problem in CHEMICAL, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-chemical-q23",
    "model": "knowledge-mcq",
    "section": "chemical",
    "questionNumber": 23,
    "prompt": "For a practical problem in CHEMICAL, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-chemical-q24",
    "model": "knowledge-mcq",
    "section": "chemical",
    "questionNumber": 24,
    "prompt": "For a practical problem in CHEMICAL, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-chemical-q25",
    "model": "knowledge-mcq",
    "section": "chemical",
    "questionNumber": 25,
    "prompt": "For a practical problem in CHEMICAL, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  }
],
  "biomedical": [
  {
    "id": "col-biomedical-q1",
    "model": "knowledge-mcq",
    "section": "biomedical",
    "questionNumber": 1,
    "prompt": "Under BIOMEDICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-biomedical-q2",
    "model": "knowledge-mcq",
    "section": "biomedical",
    "questionNumber": 2,
    "prompt": "Under BIOMEDICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-biomedical-q3",
    "model": "knowledge-mcq",
    "section": "biomedical",
    "questionNumber": 3,
    "prompt": "Under BIOMEDICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-biomedical-q4",
    "model": "knowledge-mcq",
    "section": "biomedical",
    "questionNumber": 4,
    "prompt": "Under BIOMEDICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-biomedical-q5",
    "model": "knowledge-mcq",
    "section": "biomedical",
    "questionNumber": 5,
    "prompt": "Under BIOMEDICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-biomedical-q6",
    "model": "knowledge-mcq",
    "section": "biomedical",
    "questionNumber": 6,
    "prompt": "Under BIOMEDICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-biomedical-q7",
    "model": "knowledge-mcq",
    "section": "biomedical",
    "questionNumber": 7,
    "prompt": "Under BIOMEDICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-biomedical-q8",
    "model": "knowledge-mcq",
    "section": "biomedical",
    "questionNumber": 8,
    "prompt": "Under BIOMEDICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-biomedical-q9",
    "model": "knowledge-mcq",
    "section": "biomedical",
    "questionNumber": 9,
    "prompt": "Under BIOMEDICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-biomedical-q10",
    "model": "knowledge-mcq",
    "section": "biomedical",
    "questionNumber": 10,
    "prompt": "Under BIOMEDICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-biomedical-q11",
    "model": "knowledge-mcq",
    "section": "biomedical",
    "questionNumber": 11,
    "prompt": "Under BIOMEDICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-biomedical-q12",
    "model": "knowledge-mcq",
    "section": "biomedical",
    "questionNumber": 12,
    "prompt": "Under BIOMEDICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-biomedical-q13",
    "model": "knowledge-mcq",
    "section": "biomedical",
    "questionNumber": 13,
    "prompt": "Under BIOMEDICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-biomedical-q14",
    "model": "knowledge-mcq",
    "section": "biomedical",
    "questionNumber": 14,
    "prompt": "Under BIOMEDICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-biomedical-q15",
    "model": "knowledge-mcq",
    "section": "biomedical",
    "questionNumber": 15,
    "prompt": "Under BIOMEDICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-biomedical-q16",
    "model": "knowledge-mcq",
    "section": "biomedical",
    "questionNumber": 16,
    "prompt": "Under BIOMEDICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-biomedical-q17",
    "model": "knowledge-mcq",
    "section": "biomedical",
    "questionNumber": 17,
    "prompt": "Under BIOMEDICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-biomedical-q18",
    "model": "knowledge-mcq",
    "section": "biomedical",
    "questionNumber": 18,
    "prompt": "Under BIOMEDICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-biomedical-q19",
    "model": "knowledge-mcq",
    "section": "biomedical",
    "questionNumber": 19,
    "prompt": "Under BIOMEDICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-biomedical-q20",
    "model": "knowledge-mcq",
    "section": "biomedical",
    "questionNumber": 20,
    "prompt": "Under BIOMEDICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-biomedical-q21",
    "model": "knowledge-mcq",
    "section": "biomedical",
    "questionNumber": 21,
    "prompt": "For a practical problem in BIOMEDICAL, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-biomedical-q22",
    "model": "knowledge-mcq",
    "section": "biomedical",
    "questionNumber": 22,
    "prompt": "For a practical problem in BIOMEDICAL, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-biomedical-q23",
    "model": "knowledge-mcq",
    "section": "biomedical",
    "questionNumber": 23,
    "prompt": "For a practical problem in BIOMEDICAL, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-biomedical-q24",
    "model": "knowledge-mcq",
    "section": "biomedical",
    "questionNumber": 24,
    "prompt": "For a practical problem in BIOMEDICAL, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-biomedical-q25",
    "model": "knowledge-mcq",
    "section": "biomedical",
    "questionNumber": 25,
    "prompt": "For a practical problem in BIOMEDICAL, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  }
],
  "biotech": [
  {
    "id": "col-biotech-q1",
    "model": "knowledge-mcq",
    "section": "biotech",
    "questionNumber": 1,
    "prompt": "Under BIOTECH guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-biotech-q2",
    "model": "knowledge-mcq",
    "section": "biotech",
    "questionNumber": 2,
    "prompt": "Under BIOTECH guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-biotech-q3",
    "model": "knowledge-mcq",
    "section": "biotech",
    "questionNumber": 3,
    "prompt": "Under BIOTECH guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-biotech-q4",
    "model": "knowledge-mcq",
    "section": "biotech",
    "questionNumber": 4,
    "prompt": "Under BIOTECH guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-biotech-q5",
    "model": "knowledge-mcq",
    "section": "biotech",
    "questionNumber": 5,
    "prompt": "Under BIOTECH guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-biotech-q6",
    "model": "knowledge-mcq",
    "section": "biotech",
    "questionNumber": 6,
    "prompt": "Under BIOTECH guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-biotech-q7",
    "model": "knowledge-mcq",
    "section": "biotech",
    "questionNumber": 7,
    "prompt": "Under BIOTECH guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-biotech-q8",
    "model": "knowledge-mcq",
    "section": "biotech",
    "questionNumber": 8,
    "prompt": "Under BIOTECH guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-biotech-q9",
    "model": "knowledge-mcq",
    "section": "biotech",
    "questionNumber": 9,
    "prompt": "Under BIOTECH guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-biotech-q10",
    "model": "knowledge-mcq",
    "section": "biotech",
    "questionNumber": 10,
    "prompt": "Under BIOTECH guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-biotech-q11",
    "model": "knowledge-mcq",
    "section": "biotech",
    "questionNumber": 11,
    "prompt": "Under BIOTECH guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-biotech-q12",
    "model": "knowledge-mcq",
    "section": "biotech",
    "questionNumber": 12,
    "prompt": "Under BIOTECH guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-biotech-q13",
    "model": "knowledge-mcq",
    "section": "biotech",
    "questionNumber": 13,
    "prompt": "Under BIOTECH guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-biotech-q14",
    "model": "knowledge-mcq",
    "section": "biotech",
    "questionNumber": 14,
    "prompt": "Under BIOTECH guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-biotech-q15",
    "model": "knowledge-mcq",
    "section": "biotech",
    "questionNumber": 15,
    "prompt": "Under BIOTECH guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-biotech-q16",
    "model": "knowledge-mcq",
    "section": "biotech",
    "questionNumber": 16,
    "prompt": "Under BIOTECH guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-biotech-q17",
    "model": "knowledge-mcq",
    "section": "biotech",
    "questionNumber": 17,
    "prompt": "Under BIOTECH guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-biotech-q18",
    "model": "knowledge-mcq",
    "section": "biotech",
    "questionNumber": 18,
    "prompt": "Under BIOTECH guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-biotech-q19",
    "model": "knowledge-mcq",
    "section": "biotech",
    "questionNumber": 19,
    "prompt": "Under BIOTECH guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-biotech-q20",
    "model": "knowledge-mcq",
    "section": "biotech",
    "questionNumber": 20,
    "prompt": "Under BIOTECH guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-biotech-q21",
    "model": "knowledge-mcq",
    "section": "biotech",
    "questionNumber": 21,
    "prompt": "For a practical problem in BIOTECH, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-biotech-q22",
    "model": "knowledge-mcq",
    "section": "biotech",
    "questionNumber": 22,
    "prompt": "For a practical problem in BIOTECH, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-biotech-q23",
    "model": "knowledge-mcq",
    "section": "biotech",
    "questionNumber": 23,
    "prompt": "For a practical problem in BIOTECH, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-biotech-q24",
    "model": "knowledge-mcq",
    "section": "biotech",
    "questionNumber": 24,
    "prompt": "For a practical problem in BIOTECH, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-biotech-q25",
    "model": "knowledge-mcq",
    "section": "biotech",
    "questionNumber": 25,
    "prompt": "For a practical problem in BIOTECH, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  }
],
  "mechatronics": [
  {
    "id": "col-mechatronics-q1",
    "model": "knowledge-mcq",
    "section": "mechatronics",
    "questionNumber": 1,
    "prompt": "Under MECHATRONICS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-mechatronics-q2",
    "model": "knowledge-mcq",
    "section": "mechatronics",
    "questionNumber": 2,
    "prompt": "Under MECHATRONICS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-mechatronics-q3",
    "model": "knowledge-mcq",
    "section": "mechatronics",
    "questionNumber": 3,
    "prompt": "Under MECHATRONICS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-mechatronics-q4",
    "model": "knowledge-mcq",
    "section": "mechatronics",
    "questionNumber": 4,
    "prompt": "Under MECHATRONICS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-mechatronics-q5",
    "model": "knowledge-mcq",
    "section": "mechatronics",
    "questionNumber": 5,
    "prompt": "Under MECHATRONICS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-mechatronics-q6",
    "model": "knowledge-mcq",
    "section": "mechatronics",
    "questionNumber": 6,
    "prompt": "Under MECHATRONICS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-mechatronics-q7",
    "model": "knowledge-mcq",
    "section": "mechatronics",
    "questionNumber": 7,
    "prompt": "Under MECHATRONICS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-mechatronics-q8",
    "model": "knowledge-mcq",
    "section": "mechatronics",
    "questionNumber": 8,
    "prompt": "Under MECHATRONICS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-mechatronics-q9",
    "model": "knowledge-mcq",
    "section": "mechatronics",
    "questionNumber": 9,
    "prompt": "Under MECHATRONICS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-mechatronics-q10",
    "model": "knowledge-mcq",
    "section": "mechatronics",
    "questionNumber": 10,
    "prompt": "Under MECHATRONICS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-mechatronics-q11",
    "model": "knowledge-mcq",
    "section": "mechatronics",
    "questionNumber": 11,
    "prompt": "Under MECHATRONICS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-mechatronics-q12",
    "model": "knowledge-mcq",
    "section": "mechatronics",
    "questionNumber": 12,
    "prompt": "Under MECHATRONICS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-mechatronics-q13",
    "model": "knowledge-mcq",
    "section": "mechatronics",
    "questionNumber": 13,
    "prompt": "Under MECHATRONICS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-mechatronics-q14",
    "model": "knowledge-mcq",
    "section": "mechatronics",
    "questionNumber": 14,
    "prompt": "Under MECHATRONICS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-mechatronics-q15",
    "model": "knowledge-mcq",
    "section": "mechatronics",
    "questionNumber": 15,
    "prompt": "Under MECHATRONICS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-mechatronics-q16",
    "model": "knowledge-mcq",
    "section": "mechatronics",
    "questionNumber": 16,
    "prompt": "Under MECHATRONICS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-mechatronics-q17",
    "model": "knowledge-mcq",
    "section": "mechatronics",
    "questionNumber": 17,
    "prompt": "Under MECHATRONICS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-mechatronics-q18",
    "model": "knowledge-mcq",
    "section": "mechatronics",
    "questionNumber": 18,
    "prompt": "Under MECHATRONICS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-mechatronics-q19",
    "model": "knowledge-mcq",
    "section": "mechatronics",
    "questionNumber": 19,
    "prompt": "Under MECHATRONICS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-mechatronics-q20",
    "model": "knowledge-mcq",
    "section": "mechatronics",
    "questionNumber": 20,
    "prompt": "Under MECHATRONICS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-mechatronics-q21",
    "model": "knowledge-mcq",
    "section": "mechatronics",
    "questionNumber": 21,
    "prompt": "For a practical problem in MECHATRONICS, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-mechatronics-q22",
    "model": "knowledge-mcq",
    "section": "mechatronics",
    "questionNumber": 22,
    "prompt": "For a practical problem in MECHATRONICS, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-mechatronics-q23",
    "model": "knowledge-mcq",
    "section": "mechatronics",
    "questionNumber": 23,
    "prompt": "For a practical problem in MECHATRONICS, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-mechatronics-q24",
    "model": "knowledge-mcq",
    "section": "mechatronics",
    "questionNumber": 24,
    "prompt": "For a practical problem in MECHATRONICS, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-mechatronics-q25",
    "model": "knowledge-mcq",
    "section": "mechatronics",
    "questionNumber": 25,
    "prompt": "For a practical problem in MECHATRONICS, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  }
],
  "aeronautical": [
  {
    "id": "col-aeronautical-q1",
    "model": "knowledge-mcq",
    "section": "aeronautical",
    "questionNumber": 1,
    "prompt": "Under AERONAUTICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-aeronautical-q2",
    "model": "knowledge-mcq",
    "section": "aeronautical",
    "questionNumber": 2,
    "prompt": "Under AERONAUTICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-aeronautical-q3",
    "model": "knowledge-mcq",
    "section": "aeronautical",
    "questionNumber": 3,
    "prompt": "Under AERONAUTICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-aeronautical-q4",
    "model": "knowledge-mcq",
    "section": "aeronautical",
    "questionNumber": 4,
    "prompt": "Under AERONAUTICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-aeronautical-q5",
    "model": "knowledge-mcq",
    "section": "aeronautical",
    "questionNumber": 5,
    "prompt": "Under AERONAUTICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-aeronautical-q6",
    "model": "knowledge-mcq",
    "section": "aeronautical",
    "questionNumber": 6,
    "prompt": "Under AERONAUTICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-aeronautical-q7",
    "model": "knowledge-mcq",
    "section": "aeronautical",
    "questionNumber": 7,
    "prompt": "Under AERONAUTICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-aeronautical-q8",
    "model": "knowledge-mcq",
    "section": "aeronautical",
    "questionNumber": 8,
    "prompt": "Under AERONAUTICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-aeronautical-q9",
    "model": "knowledge-mcq",
    "section": "aeronautical",
    "questionNumber": 9,
    "prompt": "Under AERONAUTICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-aeronautical-q10",
    "model": "knowledge-mcq",
    "section": "aeronautical",
    "questionNumber": 10,
    "prompt": "Under AERONAUTICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-aeronautical-q11",
    "model": "knowledge-mcq",
    "section": "aeronautical",
    "questionNumber": 11,
    "prompt": "Under AERONAUTICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-aeronautical-q12",
    "model": "knowledge-mcq",
    "section": "aeronautical",
    "questionNumber": 12,
    "prompt": "Under AERONAUTICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-aeronautical-q13",
    "model": "knowledge-mcq",
    "section": "aeronautical",
    "questionNumber": 13,
    "prompt": "Under AERONAUTICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-aeronautical-q14",
    "model": "knowledge-mcq",
    "section": "aeronautical",
    "questionNumber": 14,
    "prompt": "Under AERONAUTICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-aeronautical-q15",
    "model": "knowledge-mcq",
    "section": "aeronautical",
    "questionNumber": 15,
    "prompt": "Under AERONAUTICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-aeronautical-q16",
    "model": "knowledge-mcq",
    "section": "aeronautical",
    "questionNumber": 16,
    "prompt": "Under AERONAUTICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-aeronautical-q17",
    "model": "knowledge-mcq",
    "section": "aeronautical",
    "questionNumber": 17,
    "prompt": "Under AERONAUTICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-aeronautical-q18",
    "model": "knowledge-mcq",
    "section": "aeronautical",
    "questionNumber": 18,
    "prompt": "Under AERONAUTICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-aeronautical-q19",
    "model": "knowledge-mcq",
    "section": "aeronautical",
    "questionNumber": 19,
    "prompt": "Under AERONAUTICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-aeronautical-q20",
    "model": "knowledge-mcq",
    "section": "aeronautical",
    "questionNumber": 20,
    "prompt": "Under AERONAUTICAL guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-aeronautical-q21",
    "model": "knowledge-mcq",
    "section": "aeronautical",
    "questionNumber": 21,
    "prompt": "For a practical problem in AERONAUTICAL, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-aeronautical-q22",
    "model": "knowledge-mcq",
    "section": "aeronautical",
    "questionNumber": 22,
    "prompt": "For a practical problem in AERONAUTICAL, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-aeronautical-q23",
    "model": "knowledge-mcq",
    "section": "aeronautical",
    "questionNumber": 23,
    "prompt": "For a practical problem in AERONAUTICAL, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-aeronautical-q24",
    "model": "knowledge-mcq",
    "section": "aeronautical",
    "questionNumber": 24,
    "prompt": "For a practical problem in AERONAUTICAL, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-aeronautical-q25",
    "model": "knowledge-mcq",
    "section": "aeronautical",
    "questionNumber": 25,
    "prompt": "For a practical problem in AERONAUTICAL, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  }
],
  "automobile": [
  {
    "id": "col-automobile-q1",
    "model": "knowledge-mcq",
    "section": "automobile",
    "questionNumber": 1,
    "prompt": "Under AUTOMOBILE guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-automobile-q2",
    "model": "knowledge-mcq",
    "section": "automobile",
    "questionNumber": 2,
    "prompt": "Under AUTOMOBILE guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-automobile-q3",
    "model": "knowledge-mcq",
    "section": "automobile",
    "questionNumber": 3,
    "prompt": "Under AUTOMOBILE guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-automobile-q4",
    "model": "knowledge-mcq",
    "section": "automobile",
    "questionNumber": 4,
    "prompt": "Under AUTOMOBILE guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-automobile-q5",
    "model": "knowledge-mcq",
    "section": "automobile",
    "questionNumber": 5,
    "prompt": "Under AUTOMOBILE guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-automobile-q6",
    "model": "knowledge-mcq",
    "section": "automobile",
    "questionNumber": 6,
    "prompt": "Under AUTOMOBILE guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-automobile-q7",
    "model": "knowledge-mcq",
    "section": "automobile",
    "questionNumber": 7,
    "prompt": "Under AUTOMOBILE guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-automobile-q8",
    "model": "knowledge-mcq",
    "section": "automobile",
    "questionNumber": 8,
    "prompt": "Under AUTOMOBILE guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-automobile-q9",
    "model": "knowledge-mcq",
    "section": "automobile",
    "questionNumber": 9,
    "prompt": "Under AUTOMOBILE guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-automobile-q10",
    "model": "knowledge-mcq",
    "section": "automobile",
    "questionNumber": 10,
    "prompt": "Under AUTOMOBILE guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-automobile-q11",
    "model": "knowledge-mcq",
    "section": "automobile",
    "questionNumber": 11,
    "prompt": "Under AUTOMOBILE guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-automobile-q12",
    "model": "knowledge-mcq",
    "section": "automobile",
    "questionNumber": 12,
    "prompt": "Under AUTOMOBILE guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-automobile-q13",
    "model": "knowledge-mcq",
    "section": "automobile",
    "questionNumber": 13,
    "prompt": "Under AUTOMOBILE guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-automobile-q14",
    "model": "knowledge-mcq",
    "section": "automobile",
    "questionNumber": 14,
    "prompt": "Under AUTOMOBILE guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-automobile-q15",
    "model": "knowledge-mcq",
    "section": "automobile",
    "questionNumber": 15,
    "prompt": "Under AUTOMOBILE guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-automobile-q16",
    "model": "knowledge-mcq",
    "section": "automobile",
    "questionNumber": 16,
    "prompt": "Under AUTOMOBILE guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-automobile-q17",
    "model": "knowledge-mcq",
    "section": "automobile",
    "questionNumber": 17,
    "prompt": "Under AUTOMOBILE guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-automobile-q18",
    "model": "knowledge-mcq",
    "section": "automobile",
    "questionNumber": 18,
    "prompt": "Under AUTOMOBILE guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-automobile-q19",
    "model": "knowledge-mcq",
    "section": "automobile",
    "questionNumber": 19,
    "prompt": "Under AUTOMOBILE guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-automobile-q20",
    "model": "knowledge-mcq",
    "section": "automobile",
    "questionNumber": 20,
    "prompt": "Under AUTOMOBILE guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-automobile-q21",
    "model": "knowledge-mcq",
    "section": "automobile",
    "questionNumber": 21,
    "prompt": "For a practical problem in AUTOMOBILE, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-automobile-q22",
    "model": "knowledge-mcq",
    "section": "automobile",
    "questionNumber": 22,
    "prompt": "For a practical problem in AUTOMOBILE, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-automobile-q23",
    "model": "knowledge-mcq",
    "section": "automobile",
    "questionNumber": 23,
    "prompt": "For a practical problem in AUTOMOBILE, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-automobile-q24",
    "model": "knowledge-mcq",
    "section": "automobile",
    "questionNumber": 24,
    "prompt": "For a practical problem in AUTOMOBILE, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-automobile-q25",
    "model": "knowledge-mcq",
    "section": "automobile",
    "questionNumber": 25,
    "prompt": "For a practical problem in AUTOMOBILE, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  }
],
  "robotics": [
  {
    "id": "col-robotics-q1",
    "model": "knowledge-mcq",
    "section": "robotics",
    "questionNumber": 1,
    "prompt": "Under ROBOTICS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-robotics-q2",
    "model": "knowledge-mcq",
    "section": "robotics",
    "questionNumber": 2,
    "prompt": "Under ROBOTICS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-robotics-q3",
    "model": "knowledge-mcq",
    "section": "robotics",
    "questionNumber": 3,
    "prompt": "Under ROBOTICS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-robotics-q4",
    "model": "knowledge-mcq",
    "section": "robotics",
    "questionNumber": 4,
    "prompt": "Under ROBOTICS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-robotics-q5",
    "model": "knowledge-mcq",
    "section": "robotics",
    "questionNumber": 5,
    "prompt": "Under ROBOTICS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-robotics-q6",
    "model": "knowledge-mcq",
    "section": "robotics",
    "questionNumber": 6,
    "prompt": "Under ROBOTICS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-robotics-q7",
    "model": "knowledge-mcq",
    "section": "robotics",
    "questionNumber": 7,
    "prompt": "Under ROBOTICS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-robotics-q8",
    "model": "knowledge-mcq",
    "section": "robotics",
    "questionNumber": 8,
    "prompt": "Under ROBOTICS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-robotics-q9",
    "model": "knowledge-mcq",
    "section": "robotics",
    "questionNumber": 9,
    "prompt": "Under ROBOTICS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-robotics-q10",
    "model": "knowledge-mcq",
    "section": "robotics",
    "questionNumber": 10,
    "prompt": "Under ROBOTICS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-robotics-q11",
    "model": "knowledge-mcq",
    "section": "robotics",
    "questionNumber": 11,
    "prompt": "Under ROBOTICS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-robotics-q12",
    "model": "knowledge-mcq",
    "section": "robotics",
    "questionNumber": 12,
    "prompt": "Under ROBOTICS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-robotics-q13",
    "model": "knowledge-mcq",
    "section": "robotics",
    "questionNumber": 13,
    "prompt": "Under ROBOTICS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-robotics-q14",
    "model": "knowledge-mcq",
    "section": "robotics",
    "questionNumber": 14,
    "prompt": "Under ROBOTICS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-robotics-q15",
    "model": "knowledge-mcq",
    "section": "robotics",
    "questionNumber": 15,
    "prompt": "Under ROBOTICS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-robotics-q16",
    "model": "knowledge-mcq",
    "section": "robotics",
    "questionNumber": 16,
    "prompt": "Under ROBOTICS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-robotics-q17",
    "model": "knowledge-mcq",
    "section": "robotics",
    "questionNumber": 17,
    "prompt": "Under ROBOTICS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-robotics-q18",
    "model": "knowledge-mcq",
    "section": "robotics",
    "questionNumber": 18,
    "prompt": "Under ROBOTICS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-robotics-q19",
    "model": "knowledge-mcq",
    "section": "robotics",
    "questionNumber": 19,
    "prompt": "Under ROBOTICS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-robotics-q20",
    "model": "knowledge-mcq",
    "section": "robotics",
    "questionNumber": 20,
    "prompt": "Under ROBOTICS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-robotics-q21",
    "model": "knowledge-mcq",
    "section": "robotics",
    "questionNumber": 21,
    "prompt": "For a practical problem in ROBOTICS, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-robotics-q22",
    "model": "knowledge-mcq",
    "section": "robotics",
    "questionNumber": 22,
    "prompt": "For a practical problem in ROBOTICS, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-robotics-q23",
    "model": "knowledge-mcq",
    "section": "robotics",
    "questionNumber": 23,
    "prompt": "For a practical problem in ROBOTICS, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-robotics-q24",
    "model": "knowledge-mcq",
    "section": "robotics",
    "questionNumber": 24,
    "prompt": "For a practical problem in ROBOTICS, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-robotics-q25",
    "model": "knowledge-mcq",
    "section": "robotics",
    "questionNumber": 25,
    "prompt": "For a practical problem in ROBOTICS, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  }
],
  "cybersecurity": [
  {
    "id": "col-cybersecurity-q1",
    "model": "knowledge-mcq",
    "section": "cybersecurity",
    "questionNumber": 1,
    "prompt": "Under CYBERSECURITY guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-cybersecurity-q2",
    "model": "knowledge-mcq",
    "section": "cybersecurity",
    "questionNumber": 2,
    "prompt": "Under CYBERSECURITY guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-cybersecurity-q3",
    "model": "knowledge-mcq",
    "section": "cybersecurity",
    "questionNumber": 3,
    "prompt": "Under CYBERSECURITY guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-cybersecurity-q4",
    "model": "knowledge-mcq",
    "section": "cybersecurity",
    "questionNumber": 4,
    "prompt": "Under CYBERSECURITY guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-cybersecurity-q5",
    "model": "knowledge-mcq",
    "section": "cybersecurity",
    "questionNumber": 5,
    "prompt": "Under CYBERSECURITY guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-cybersecurity-q6",
    "model": "knowledge-mcq",
    "section": "cybersecurity",
    "questionNumber": 6,
    "prompt": "Under CYBERSECURITY guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-cybersecurity-q7",
    "model": "knowledge-mcq",
    "section": "cybersecurity",
    "questionNumber": 7,
    "prompt": "Under CYBERSECURITY guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-cybersecurity-q8",
    "model": "knowledge-mcq",
    "section": "cybersecurity",
    "questionNumber": 8,
    "prompt": "Under CYBERSECURITY guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-cybersecurity-q9",
    "model": "knowledge-mcq",
    "section": "cybersecurity",
    "questionNumber": 9,
    "prompt": "Under CYBERSECURITY guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-cybersecurity-q10",
    "model": "knowledge-mcq",
    "section": "cybersecurity",
    "questionNumber": 10,
    "prompt": "Under CYBERSECURITY guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-cybersecurity-q11",
    "model": "knowledge-mcq",
    "section": "cybersecurity",
    "questionNumber": 11,
    "prompt": "Under CYBERSECURITY guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-cybersecurity-q12",
    "model": "knowledge-mcq",
    "section": "cybersecurity",
    "questionNumber": 12,
    "prompt": "Under CYBERSECURITY guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-cybersecurity-q13",
    "model": "knowledge-mcq",
    "section": "cybersecurity",
    "questionNumber": 13,
    "prompt": "Under CYBERSECURITY guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-cybersecurity-q14",
    "model": "knowledge-mcq",
    "section": "cybersecurity",
    "questionNumber": 14,
    "prompt": "Under CYBERSECURITY guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-cybersecurity-q15",
    "model": "knowledge-mcq",
    "section": "cybersecurity",
    "questionNumber": 15,
    "prompt": "Under CYBERSECURITY guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-cybersecurity-q16",
    "model": "knowledge-mcq",
    "section": "cybersecurity",
    "questionNumber": 16,
    "prompt": "Under CYBERSECURITY guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-cybersecurity-q17",
    "model": "knowledge-mcq",
    "section": "cybersecurity",
    "questionNumber": 17,
    "prompt": "Under CYBERSECURITY guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-cybersecurity-q18",
    "model": "knowledge-mcq",
    "section": "cybersecurity",
    "questionNumber": 18,
    "prompt": "Under CYBERSECURITY guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-cybersecurity-q19",
    "model": "knowledge-mcq",
    "section": "cybersecurity",
    "questionNumber": 19,
    "prompt": "Under CYBERSECURITY guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-cybersecurity-q20",
    "model": "knowledge-mcq",
    "section": "cybersecurity",
    "questionNumber": 20,
    "prompt": "Under CYBERSECURITY guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-cybersecurity-q21",
    "model": "knowledge-mcq",
    "section": "cybersecurity",
    "questionNumber": 21,
    "prompt": "For a practical problem in CYBERSECURITY, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-cybersecurity-q22",
    "model": "knowledge-mcq",
    "section": "cybersecurity",
    "questionNumber": 22,
    "prompt": "For a practical problem in CYBERSECURITY, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-cybersecurity-q23",
    "model": "knowledge-mcq",
    "section": "cybersecurity",
    "questionNumber": 23,
    "prompt": "For a practical problem in CYBERSECURITY, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-cybersecurity-q24",
    "model": "knowledge-mcq",
    "section": "cybersecurity",
    "questionNumber": 24,
    "prompt": "For a practical problem in CYBERSECURITY, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-cybersecurity-q25",
    "model": "knowledge-mcq",
    "section": "cybersecurity",
    "questionNumber": 25,
    "prompt": "For a practical problem in CYBERSECURITY, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  }
],
  "csbs": [
  {
    "id": "col-csbs-q1",
    "model": "knowledge-mcq",
    "section": "csbs",
    "questionNumber": 1,
    "prompt": "Under CSBS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-csbs-q2",
    "model": "knowledge-mcq",
    "section": "csbs",
    "questionNumber": 2,
    "prompt": "Under CSBS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-csbs-q3",
    "model": "knowledge-mcq",
    "section": "csbs",
    "questionNumber": 3,
    "prompt": "Under CSBS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-csbs-q4",
    "model": "knowledge-mcq",
    "section": "csbs",
    "questionNumber": 4,
    "prompt": "Under CSBS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-csbs-q5",
    "model": "knowledge-mcq",
    "section": "csbs",
    "questionNumber": 5,
    "prompt": "Under CSBS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-csbs-q6",
    "model": "knowledge-mcq",
    "section": "csbs",
    "questionNumber": 6,
    "prompt": "Under CSBS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-csbs-q7",
    "model": "knowledge-mcq",
    "section": "csbs",
    "questionNumber": 7,
    "prompt": "Under CSBS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-csbs-q8",
    "model": "knowledge-mcq",
    "section": "csbs",
    "questionNumber": 8,
    "prompt": "Under CSBS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-csbs-q9",
    "model": "knowledge-mcq",
    "section": "csbs",
    "questionNumber": 9,
    "prompt": "Under CSBS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-csbs-q10",
    "model": "knowledge-mcq",
    "section": "csbs",
    "questionNumber": 10,
    "prompt": "Under CSBS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-csbs-q11",
    "model": "knowledge-mcq",
    "section": "csbs",
    "questionNumber": 11,
    "prompt": "Under CSBS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-csbs-q12",
    "model": "knowledge-mcq",
    "section": "csbs",
    "questionNumber": 12,
    "prompt": "Under CSBS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-csbs-q13",
    "model": "knowledge-mcq",
    "section": "csbs",
    "questionNumber": 13,
    "prompt": "Under CSBS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-csbs-q14",
    "model": "knowledge-mcq",
    "section": "csbs",
    "questionNumber": 14,
    "prompt": "Under CSBS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-csbs-q15",
    "model": "knowledge-mcq",
    "section": "csbs",
    "questionNumber": 15,
    "prompt": "Under CSBS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-csbs-q16",
    "model": "knowledge-mcq",
    "section": "csbs",
    "questionNumber": 16,
    "prompt": "Under CSBS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-csbs-q17",
    "model": "knowledge-mcq",
    "section": "csbs",
    "questionNumber": 17,
    "prompt": "Under CSBS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-csbs-q18",
    "model": "knowledge-mcq",
    "section": "csbs",
    "questionNumber": 18,
    "prompt": "Under CSBS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-csbs-q19",
    "model": "knowledge-mcq",
    "section": "csbs",
    "questionNumber": 19,
    "prompt": "Under CSBS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-csbs-q20",
    "model": "knowledge-mcq",
    "section": "csbs",
    "questionNumber": 20,
    "prompt": "Under CSBS guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-csbs-q21",
    "model": "knowledge-mcq",
    "section": "csbs",
    "questionNumber": 21,
    "prompt": "For a practical problem in CSBS, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-csbs-q22",
    "model": "knowledge-mcq",
    "section": "csbs",
    "questionNumber": 22,
    "prompt": "For a practical problem in CSBS, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-csbs-q23",
    "model": "knowledge-mcq",
    "section": "csbs",
    "questionNumber": 23,
    "prompt": "For a practical problem in CSBS, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-csbs-q24",
    "model": "knowledge-mcq",
    "section": "csbs",
    "questionNumber": 24,
    "prompt": "For a practical problem in CSBS, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-csbs-q25",
    "model": "knowledge-mcq",
    "section": "csbs",
    "questionNumber": 25,
    "prompt": "For a practical problem in CSBS, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  }
],
  "other": [
  {
    "id": "col-other-q1",
    "model": "knowledge-mcq",
    "section": "other",
    "questionNumber": 1,
    "prompt": "Under OTHER guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-other-q2",
    "model": "knowledge-mcq",
    "section": "other",
    "questionNumber": 2,
    "prompt": "Under OTHER guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-other-q3",
    "model": "knowledge-mcq",
    "section": "other",
    "questionNumber": 3,
    "prompt": "Under OTHER guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-other-q4",
    "model": "knowledge-mcq",
    "section": "other",
    "questionNumber": 4,
    "prompt": "Under OTHER guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-other-q5",
    "model": "knowledge-mcq",
    "section": "other",
    "questionNumber": 5,
    "prompt": "Under OTHER guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-other-q6",
    "model": "knowledge-mcq",
    "section": "other",
    "questionNumber": 6,
    "prompt": "Under OTHER guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-other-q7",
    "model": "knowledge-mcq",
    "section": "other",
    "questionNumber": 7,
    "prompt": "Under OTHER guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-other-q8",
    "model": "knowledge-mcq",
    "section": "other",
    "questionNumber": 8,
    "prompt": "Under OTHER guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-other-q9",
    "model": "knowledge-mcq",
    "section": "other",
    "questionNumber": 9,
    "prompt": "Under OTHER guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-other-q10",
    "model": "knowledge-mcq",
    "section": "other",
    "questionNumber": 10,
    "prompt": "Under OTHER guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-other-q11",
    "model": "knowledge-mcq",
    "section": "other",
    "questionNumber": 11,
    "prompt": "Under OTHER guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-other-q12",
    "model": "knowledge-mcq",
    "section": "other",
    "questionNumber": 12,
    "prompt": "Under OTHER guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-other-q13",
    "model": "knowledge-mcq",
    "section": "other",
    "questionNumber": 13,
    "prompt": "Under OTHER guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-other-q14",
    "model": "knowledge-mcq",
    "section": "other",
    "questionNumber": 14,
    "prompt": "Under OTHER guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-other-q15",
    "model": "knowledge-mcq",
    "section": "other",
    "questionNumber": 15,
    "prompt": "Under OTHER guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-other-q16",
    "model": "knowledge-mcq",
    "section": "other",
    "questionNumber": 16,
    "prompt": "Under OTHER guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-other-q17",
    "model": "knowledge-mcq",
    "section": "other",
    "questionNumber": 17,
    "prompt": "Under OTHER guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-other-q18",
    "model": "knowledge-mcq",
    "section": "other",
    "questionNumber": 18,
    "prompt": "Under OTHER guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-other-q19",
    "model": "knowledge-mcq",
    "section": "other",
    "questionNumber": 19,
    "prompt": "Under OTHER guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-other-q20",
    "model": "knowledge-mcq",
    "section": "other",
    "questionNumber": 20,
    "prompt": "Under OTHER guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-other-q21",
    "model": "knowledge-mcq",
    "section": "other",
    "questionNumber": 21,
    "prompt": "For a practical problem in OTHER, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-other-q22",
    "model": "knowledge-mcq",
    "section": "other",
    "questionNumber": 22,
    "prompt": "For a practical problem in OTHER, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-other-q23",
    "model": "knowledge-mcq",
    "section": "other",
    "questionNumber": 23,
    "prompt": "For a practical problem in OTHER, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-other-q24",
    "model": "knowledge-mcq",
    "section": "other",
    "questionNumber": 24,
    "prompt": "For a practical problem in OTHER, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-other-q25",
    "model": "knowledge-mcq",
    "section": "other",
    "questionNumber": 25,
    "prompt": "For a practical problem in OTHER, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  }
],
  "commerce": [
  {
    "id": "col-commerce-q1",
    "model": "knowledge-mcq",
    "section": "commerce",
    "questionNumber": 1,
    "prompt": "Under Commerce & Business Studies guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-commerce-q2",
    "model": "knowledge-mcq",
    "section": "commerce",
    "questionNumber": 2,
    "prompt": "Under Commerce & Business Studies guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-commerce-q3",
    "model": "knowledge-mcq",
    "section": "commerce",
    "questionNumber": 3,
    "prompt": "Under Commerce & Business Studies guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-commerce-q4",
    "model": "knowledge-mcq",
    "section": "commerce",
    "questionNumber": 4,
    "prompt": "Under Commerce & Business Studies guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-commerce-q5",
    "model": "knowledge-mcq",
    "section": "commerce",
    "questionNumber": 5,
    "prompt": "Under Commerce & Business Studies guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-commerce-q6",
    "model": "knowledge-mcq",
    "section": "commerce",
    "questionNumber": 6,
    "prompt": "Under Commerce & Business Studies guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-commerce-q7",
    "model": "knowledge-mcq",
    "section": "commerce",
    "questionNumber": 7,
    "prompt": "Under Commerce & Business Studies guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-commerce-q8",
    "model": "knowledge-mcq",
    "section": "commerce",
    "questionNumber": 8,
    "prompt": "Under Commerce & Business Studies guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-commerce-q9",
    "model": "knowledge-mcq",
    "section": "commerce",
    "questionNumber": 9,
    "prompt": "Under Commerce & Business Studies guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-commerce-q10",
    "model": "knowledge-mcq",
    "section": "commerce",
    "questionNumber": 10,
    "prompt": "Under Commerce & Business Studies guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-commerce-q11",
    "model": "knowledge-mcq",
    "section": "commerce",
    "questionNumber": 11,
    "prompt": "Under Commerce & Business Studies guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-commerce-q12",
    "model": "knowledge-mcq",
    "section": "commerce",
    "questionNumber": 12,
    "prompt": "Under Commerce & Business Studies guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-commerce-q13",
    "model": "knowledge-mcq",
    "section": "commerce",
    "questionNumber": 13,
    "prompt": "Under Commerce & Business Studies guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-commerce-q14",
    "model": "knowledge-mcq",
    "section": "commerce",
    "questionNumber": 14,
    "prompt": "Under Commerce & Business Studies guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-commerce-q15",
    "model": "knowledge-mcq",
    "section": "commerce",
    "questionNumber": 15,
    "prompt": "Under Commerce & Business Studies guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-commerce-q16",
    "model": "knowledge-mcq",
    "section": "commerce",
    "questionNumber": 16,
    "prompt": "Under Commerce & Business Studies guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-commerce-q17",
    "model": "knowledge-mcq",
    "section": "commerce",
    "questionNumber": 17,
    "prompt": "Under Commerce & Business Studies guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-commerce-q18",
    "model": "knowledge-mcq",
    "section": "commerce",
    "questionNumber": 18,
    "prompt": "Under Commerce & Business Studies guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-commerce-q19",
    "model": "knowledge-mcq",
    "section": "commerce",
    "questionNumber": 19,
    "prompt": "Under Commerce & Business Studies guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-commerce-q20",
    "model": "knowledge-mcq",
    "section": "commerce",
    "questionNumber": 20,
    "prompt": "Under Commerce & Business Studies guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-commerce-q21",
    "model": "knowledge-mcq",
    "section": "commerce",
    "questionNumber": 21,
    "prompt": "For a practical problem in Commerce & Business Studies, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-commerce-q22",
    "model": "knowledge-mcq",
    "section": "commerce",
    "questionNumber": 22,
    "prompt": "For a practical problem in Commerce & Business Studies, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-commerce-q23",
    "model": "knowledge-mcq",
    "section": "commerce",
    "questionNumber": 23,
    "prompt": "For a practical problem in Commerce & Business Studies, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-commerce-q24",
    "model": "knowledge-mcq",
    "section": "commerce",
    "questionNumber": 24,
    "prompt": "For a practical problem in Commerce & Business Studies, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-commerce-q25",
    "model": "knowledge-mcq",
    "section": "commerce",
    "questionNumber": 25,
    "prompt": "For a practical problem in Commerce & Business Studies, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  }
],
  "science": [
  {
    "id": "col-science-q1",
    "model": "knowledge-mcq",
    "section": "science",
    "questionNumber": 1,
    "prompt": "Under Arts & Science - Pure Sciences guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-science-q2",
    "model": "knowledge-mcq",
    "section": "science",
    "questionNumber": 2,
    "prompt": "Under Arts & Science - Pure Sciences guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-science-q3",
    "model": "knowledge-mcq",
    "section": "science",
    "questionNumber": 3,
    "prompt": "Under Arts & Science - Pure Sciences guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-science-q4",
    "model": "knowledge-mcq",
    "section": "science",
    "questionNumber": 4,
    "prompt": "Under Arts & Science - Pure Sciences guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-science-q5",
    "model": "knowledge-mcq",
    "section": "science",
    "questionNumber": 5,
    "prompt": "Under Arts & Science - Pure Sciences guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-science-q6",
    "model": "knowledge-mcq",
    "section": "science",
    "questionNumber": 6,
    "prompt": "Under Arts & Science - Pure Sciences guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-science-q7",
    "model": "knowledge-mcq",
    "section": "science",
    "questionNumber": 7,
    "prompt": "Under Arts & Science - Pure Sciences guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-science-q8",
    "model": "knowledge-mcq",
    "section": "science",
    "questionNumber": 8,
    "prompt": "Under Arts & Science - Pure Sciences guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-science-q9",
    "model": "knowledge-mcq",
    "section": "science",
    "questionNumber": 9,
    "prompt": "Under Arts & Science - Pure Sciences guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-science-q10",
    "model": "knowledge-mcq",
    "section": "science",
    "questionNumber": 10,
    "prompt": "Under Arts & Science - Pure Sciences guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-science-q11",
    "model": "knowledge-mcq",
    "section": "science",
    "questionNumber": 11,
    "prompt": "Under Arts & Science - Pure Sciences guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-science-q12",
    "model": "knowledge-mcq",
    "section": "science",
    "questionNumber": 12,
    "prompt": "Under Arts & Science - Pure Sciences guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-science-q13",
    "model": "knowledge-mcq",
    "section": "science",
    "questionNumber": 13,
    "prompt": "Under Arts & Science - Pure Sciences guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-science-q14",
    "model": "knowledge-mcq",
    "section": "science",
    "questionNumber": 14,
    "prompt": "Under Arts & Science - Pure Sciences guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-science-q15",
    "model": "knowledge-mcq",
    "section": "science",
    "questionNumber": 15,
    "prompt": "Under Arts & Science - Pure Sciences guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-science-q16",
    "model": "knowledge-mcq",
    "section": "science",
    "questionNumber": 16,
    "prompt": "Under Arts & Science - Pure Sciences guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-science-q17",
    "model": "knowledge-mcq",
    "section": "science",
    "questionNumber": 17,
    "prompt": "Under Arts & Science - Pure Sciences guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-science-q18",
    "model": "knowledge-mcq",
    "section": "science",
    "questionNumber": 18,
    "prompt": "Under Arts & Science - Pure Sciences guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-science-q19",
    "model": "knowledge-mcq",
    "section": "science",
    "questionNumber": 19,
    "prompt": "Under Arts & Science - Pure Sciences guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-science-q20",
    "model": "knowledge-mcq",
    "section": "science",
    "questionNumber": 20,
    "prompt": "Under Arts & Science - Pure Sciences guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-science-q21",
    "model": "knowledge-mcq",
    "section": "science",
    "questionNumber": 21,
    "prompt": "For a practical problem in Arts & Science - Pure Sciences, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-science-q22",
    "model": "knowledge-mcq",
    "section": "science",
    "questionNumber": 22,
    "prompt": "For a practical problem in Arts & Science - Pure Sciences, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-science-q23",
    "model": "knowledge-mcq",
    "section": "science",
    "questionNumber": 23,
    "prompt": "For a practical problem in Arts & Science - Pure Sciences, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-science-q24",
    "model": "knowledge-mcq",
    "section": "science",
    "questionNumber": 24,
    "prompt": "For a practical problem in Arts & Science - Pure Sciences, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-science-q25",
    "model": "knowledge-mcq",
    "section": "science",
    "questionNumber": 25,
    "prompt": "For a practical problem in Arts & Science - Pure Sciences, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  }
],
  "humanities": [
  {
    "id": "col-humanities-q1",
    "model": "knowledge-mcq",
    "section": "humanities",
    "questionNumber": 1,
    "prompt": "Under Arts & Science - Humanities guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-humanities-q2",
    "model": "knowledge-mcq",
    "section": "humanities",
    "questionNumber": 2,
    "prompt": "Under Arts & Science - Humanities guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-humanities-q3",
    "model": "knowledge-mcq",
    "section": "humanities",
    "questionNumber": 3,
    "prompt": "Under Arts & Science - Humanities guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-humanities-q4",
    "model": "knowledge-mcq",
    "section": "humanities",
    "questionNumber": 4,
    "prompt": "Under Arts & Science - Humanities guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-humanities-q5",
    "model": "knowledge-mcq",
    "section": "humanities",
    "questionNumber": 5,
    "prompt": "Under Arts & Science - Humanities guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-humanities-q6",
    "model": "knowledge-mcq",
    "section": "humanities",
    "questionNumber": 6,
    "prompt": "Under Arts & Science - Humanities guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-humanities-q7",
    "model": "knowledge-mcq",
    "section": "humanities",
    "questionNumber": 7,
    "prompt": "Under Arts & Science - Humanities guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-humanities-q8",
    "model": "knowledge-mcq",
    "section": "humanities",
    "questionNumber": 8,
    "prompt": "Under Arts & Science - Humanities guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-humanities-q9",
    "model": "knowledge-mcq",
    "section": "humanities",
    "questionNumber": 9,
    "prompt": "Under Arts & Science - Humanities guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-humanities-q10",
    "model": "knowledge-mcq",
    "section": "humanities",
    "questionNumber": 10,
    "prompt": "Under Arts & Science - Humanities guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-humanities-q11",
    "model": "knowledge-mcq",
    "section": "humanities",
    "questionNumber": 11,
    "prompt": "Under Arts & Science - Humanities guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-humanities-q12",
    "model": "knowledge-mcq",
    "section": "humanities",
    "questionNumber": 12,
    "prompt": "Under Arts & Science - Humanities guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-humanities-q13",
    "model": "knowledge-mcq",
    "section": "humanities",
    "questionNumber": 13,
    "prompt": "Under Arts & Science - Humanities guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-humanities-q14",
    "model": "knowledge-mcq",
    "section": "humanities",
    "questionNumber": 14,
    "prompt": "Under Arts & Science - Humanities guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-humanities-q15",
    "model": "knowledge-mcq",
    "section": "humanities",
    "questionNumber": 15,
    "prompt": "Under Arts & Science - Humanities guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-humanities-q16",
    "model": "knowledge-mcq",
    "section": "humanities",
    "questionNumber": 16,
    "prompt": "Under Arts & Science - Humanities guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-humanities-q17",
    "model": "knowledge-mcq",
    "section": "humanities",
    "questionNumber": 17,
    "prompt": "Under Arts & Science - Humanities guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-humanities-q18",
    "model": "knowledge-mcq",
    "section": "humanities",
    "questionNumber": 18,
    "prompt": "Under Arts & Science - Humanities guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-humanities-q19",
    "model": "knowledge-mcq",
    "section": "humanities",
    "questionNumber": 19,
    "prompt": "Under Arts & Science - Humanities guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-humanities-q20",
    "model": "knowledge-mcq",
    "section": "humanities",
    "questionNumber": 20,
    "prompt": "Under Arts & Science - Humanities guidelines, which foundational parameter is most critical to evaluate during system design?",
    "options": [
      {
        "id": "A",
        "text": "Cost minimisation above all else"
      },
      {
        "id": "B",
        "text": "Compliance with industry safety, performance standards and robustness"
      },
      {
        "id": "C",
        "text": "Reducing project timelines without verification"
      },
      {
        "id": "D",
        "text": "Following traditional workflows without customisation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Adhering to professional standards and engineering safety parameters is the core design priority.",
    "required": true
  },
  {
    "id": "col-humanities-q21",
    "model": "knowledge-mcq",
    "section": "humanities",
    "questionNumber": 21,
    "prompt": "For a practical problem in Arts & Science - Humanities, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-humanities-q22",
    "model": "knowledge-mcq",
    "section": "humanities",
    "questionNumber": 22,
    "prompt": "For a practical problem in Arts & Science - Humanities, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-humanities-q23",
    "model": "knowledge-mcq",
    "section": "humanities",
    "questionNumber": 23,
    "prompt": "For a practical problem in Arts & Science - Humanities, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-humanities-q24",
    "model": "knowledge-mcq",
    "section": "humanities",
    "questionNumber": 24,
    "prompt": "For a practical problem in Arts & Science - Humanities, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  },
  {
    "id": "col-humanities-q25",
    "model": "knowledge-mcq",
    "section": "humanities",
    "questionNumber": 25,
    "prompt": "For a practical problem in Arts & Science - Humanities, which technical practice best yields reliable outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Simplifying data points by ignoring edge cases"
      },
      {
        "id": "B",
        "text": "Structuring modular models and conducting automated verification tests"
      },
      {
        "id": "C",
        "text": "Applying trial-and-error changes directly on production"
      },
      {
        "id": "D",
        "text": "Delegating validation fully to external stakeholders"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Modular development and rigorous test validation ensure system reliability.",
    "required": true
  }
],
};

// Layer 1 Profile & Background Sections
export const collegeLayerOneSections: CollegeAssessmentSection[] = [
  {
    "id": "col_section_a",
    "title": "Section A – Personal Details",
    "questions": [
      {
        "id": "full_name",
        "section": "Personal Details",
        "question": "Full Name",
        "type": "text",
        "required": true
      },
      {
        "id": "email",
        "section": "Personal Details",
        "question": "Email Address",
        "type": "text",
        "required": true
      },
      {
        "id": "mobile",
        "section": "Personal Details",
        "question": "Mobile Number",
        "type": "text",
        "required": true
      },
      {
        "id": "dob",
        "section": "Personal Details",
        "question": "Date of Birth",
        "type": "date",
        "required": true
      },
      {
        "id": "gender",
        "section": "Personal Details",
        "question": "Gender",
        "type": "radio",
        "required": true,
        "options": [
          {
            "id": "Male",
            "label": "Male"
          },
          {
            "id": "Female",
            "label": "Female"
          },
          {
            "id": "Other",
            "label": "Other"
          },
          {
            "id": "PreferNot",
            "label": "Prefer not to say"
          }
        ]
      },
      {
        "id": "city",
        "section": "Personal Details",
        "question": "Current City",
        "type": "text",
        "required": true
      },
      {
        "id": "state",
        "section": "Personal Details",
        "question": "State",
        "type": "text",
        "required": true
      },
      {
        "id": "college",
        "section": "Personal Details",
        "question": "College Name",
        "type": "text",
        "required": true
      },
      {
        "id": "university",
        "section": "Personal Details",
        "question": "University Name",
        "type": "text",
        "required": true
      },
      {
        "id": "roll_number",
        "section": "Personal Details",
        "question": "Student Register / Roll Number (Optional)",
        "type": "text",
        "required": false
      }
    ]
  },
  {
    "id": "col_section_b",
    "title": "Section B – Academic Information",
    "questions": [
      {
        "id": "degree",
        "section": "Academic Information",
        "question": "Which degree are you currently pursuing?",
        "type": "dropdown",
        "required": true,
        "options": [
          {
            "id": "B.E.",
            "label": "B.E."
          },
          {
            "id": "B.Tech.",
            "label": "B.Tech."
          },
          {
            "id": "M.E.",
            "label": "M.E."
          },
          {
            "id": "M.Tech.",
            "label": "M.Tech."
          },
          {
            "id": "Diploma",
            "label": "Diploma"
          },
          {
            "id": "Integrated",
            "label": "Integrated Program"
          },
          {
            "id": "Other",
            "label": "Other"
          }
        ]
      },
      {
        "id": "department",
        "section": "Academic Information",
        "question": "Select your department.",
        "type": "dropdown",
        "required": true,
        "options": [
          {
            "id": "Computer Science Engineering",
            "label": "Computer Science Engineering"
          },
          {
            "id": "Information Technology",
            "label": "Information Technology"
          },
          {
            "id": "Artificial Intelligence & Data Science",
            "label": "Artificial Intelligence & Data Science"
          },
          {
            "id": "Artificial Intelligence & Machine Learning",
            "label": "Artificial Intelligence & Machine Learning"
          },
          {
            "id": "Electronics & Communication Engineering",
            "label": "Electronics & Communication Engineering"
          },
          {
            "id": "Electrical & Electronics Engineering",
            "label": "Electrical & Electronics Engineering"
          },
          {
            "id": "Mechanical Engineering",
            "label": "Mechanical Engineering"
          },
          {
            "id": "Civil Engineering",
            "label": "Civil Engineering"
          },
          {
            "id": "Chemical Engineering",
            "label": "Chemical Engineering"
          },
          {
            "id": "Biomedical Engineering",
            "label": "Biomedical Engineering"
          },
          {
            "id": "Biotechnology",
            "label": "Biotechnology"
          },
          {
            "id": "Mechatronics",
            "label": "Mechatronics"
          },
          {
            "id": "Aeronautical Engineering",
            "label": "Aeronautical Engineering"
          },
          {
            "id": "Automobile Engineering",
            "label": "Automobile Engineering"
          },
          {
            "id": "Robotics & Automation",
            "label": "Robotics & Automation"
          },
          {
            "id": "Cyber security",
            "label": "Cyber security"
          },
          {
            "id": "Computer science and business system",
            "label": "Computer science and business system"
          },
          {
            "id": "Other",
            "label": "Other"
          }
        ]
      },
      {
        "id": "year",
        "section": "Academic Information",
        "question": "Current Academic Year",
        "type": "radio",
        "required": true,
        "options": [
          {
            "id": "1st Year",
            "label": "1st Year"
          },
          {
            "id": "2nd Year",
            "label": "2nd Year"
          },
          {
            "id": "3rd Year",
            "label": "3rd Year"
          },
          {
            "id": "Final Year",
            "label": "Final Year"
          }
        ]
      },
      {
        "id": "semester",
        "section": "Academic Information",
        "question": "Current Semester",
        "type": "dropdown",
        "required": true,
        "options": [
          {
            "id": "Semester 1",
            "label": "Semester 1"
          },
          {
            "id": "Semester 2",
            "label": "Semester 2"
          },
          {
            "id": "Semester 3",
            "label": "Semester 3"
          },
          {
            "id": "Semester 4",
            "label": "Semester 4"
          },
          {
            "id": "Semester 5",
            "label": "Semester 5"
          },
          {
            "id": "Semester 6",
            "label": "Semester 6"
          },
          {
            "id": "Semester 7",
            "label": "Semester 7"
          },
          {
            "id": "Semester 8",
            "label": "Semester 8"
          }
        ]
      },
      {
        "id": "cgpa",
        "section": "Academic Information",
        "question": "Current CGPA (0.00 - 10.00)",
        "type": "number",
        "min": 0,
        "max": 10,
        "required": true
      },
      {
        "id": "backlogs",
        "section": "Academic Information",
        "question": "Number of Active Backlogs",
        "type": "radio",
        "required": true,
        "options": [
          {
            "id": "None",
            "label": "None"
          },
          {
            "id": "1",
            "label": "1"
          },
          {
            "id": "2",
            "label": "2"
          },
          {
            "id": "3",
            "label": "3"
          },
          {
            "id": "4+",
            "label": "4+"
          }
        ]
      },
      {
        "id": "attendance",
        "section": "Academic Information",
        "question": "Overall Attendance Percentage",
        "type": "radio",
        "required": true,
        "options": [
          {
            "id": "Below 60%",
            "label": "Below 60%"
          },
          {
            "id": "60-70%",
            "label": "60–70%"
          },
          {
            "id": "70-80%",
            "label": "70–80%"
          },
          {
            "id": "80-90%",
            "label": "80–90%"
          },
          {
            "id": "Above 90%",
            "label": "Above 90%"
          }
        ]
      },
      {
        "id": "medium",
        "section": "Academic Information",
        "question": "Medium of Instruction",
        "type": "radio",
        "required": true,
        "options": [
          {
            "id": "English",
            "label": "English"
          },
          {
            "id": "Tamil",
            "label": "Tamil"
          },
          {
            "id": "Hindi",
            "label": "Hindi"
          },
          {
            "id": "Telugu",
            "label": "Telugu"
          },
          {
            "id": "Malayalam",
            "label": "Malayalam"
          },
          {
            "id": "Kannada",
            "label": "Kannada"
          },
          {
            "id": "Other",
            "label": "Other"
          }
        ]
      }
    ]
  },
  {
    "id": "col_section_c",
    "title": "Section C – Technical Exposure",
    "questions": [
      {
        "id": "languages_comfortable",
        "section": "Technical Exposure",
        "question": "Which programming languages are you comfortable with?",
        "type": "checkbox",
        "required": true,
        "options": [
          {
            "id": "C",
            "label": "C"
          },
          {
            "id": "C++",
            "label": "C++"
          },
          {
            "id": "Java",
            "label": "Java"
          },
          {
            "id": "Python",
            "label": "Python"
          },
          {
            "id": "JavaScript",
            "label": "JavaScript"
          },
          {
            "id": "SQL",
            "label": "SQL"
          },
          {
            "id": "Go",
            "label": "Go"
          },
          {
            "id": "Rust",
            "label": "Rust"
          },
          {
            "id": "PHP",
            "label": "PHP"
          },
          {
            "id": "Dart",
            "label": "Dart"
          },
          {
            "id": "Kotlin",
            "label": "Kotlin"
          },
          {
            "id": "Swift",
            "label": "Swift"
          },
          {
            "id": "MATLAB",
            "label": "MATLAB"
          },
          {
            "id": "R",
            "label": "R"
          },
          {
            "id": "None",
            "label": "None"
          }
        ]
      },
      {
        "id": "os_used",
        "section": "Technical Exposure",
        "question": "Which operating systems do you regularly use?",
        "type": "checkbox",
        "required": true,
        "options": [
          {
            "id": "Windows",
            "label": "Windows"
          },
          {
            "id": "Linux",
            "label": "Linux"
          },
          {
            "id": "macOS",
            "label": "macOS"
          }
        ]
      },
      {
        "id": "has_certifications",
        "section": "Technical Exposure",
        "question": "Have you completed any technical certifications?",
        "type": "radio",
        "required": true,
        "options": [
          {
            "id": "Yes",
            "label": "Yes"
          },
          {
            "id": "No",
            "label": "No"
          }
        ]
      },
      {
        "id": "cert_details",
        "section": "Technical Exposure",
        "question": "If Yes, provide details (e.g. Course Name, Platform, Year)",
        "type": "text",
        "required": false
      },
      {
        "id": "has_internships",
        "section": "Technical Exposure",
        "question": "Have you completed any internships?",
        "type": "radio",
        "required": true,
        "options": [
          {
            "id": "Yes",
            "label": "Yes"
          },
          {
            "id": "No",
            "label": "No"
          }
        ]
      },
      {
        "id": "internship_details",
        "section": "Technical Exposure",
        "question": "If Yes, provide details (e.g. Company, Duration, Domain, Paid/Unpaid)",
        "type": "text",
        "required": false
      },
      {
        "id": "has_projects",
        "section": "Technical Exposure",
        "question": "Have you worked on academic or personal projects?",
        "type": "radio",
        "required": true,
        "options": [
          {
            "id": "Yes",
            "label": "Yes"
          },
          {
            "id": "No",
            "label": "No"
          }
        ]
      },
      {
        "id": "project_details",
        "section": "Technical Exposure",
        "question": "If Yes, provide details (e.g. Number of Projects, Major Technology)",
        "type": "text",
        "required": false
      },
      {
        "id": "hackathon_participation",
        "section": "Technical Exposure",
        "question": "Have you participated in hackathons?",
        "type": "radio",
        "required": true,
        "options": [
          {
            "id": "Never",
            "label": "Never"
          },
          {
            "id": "College Level",
            "label": "College Level"
          },
          {
            "id": "State Level",
            "label": "State Level"
          },
          {
            "id": "National Level",
            "label": "National Level"
          },
          {
            "id": "International Level",
            "label": "International Level"
          }
        ]
      },
      {
        "id": "has_research_papers",
        "section": "Technical Exposure",
        "question": "Have you published any research papers?",
        "type": "radio",
        "required": true,
        "options": [
          {
            "id": "Yes",
            "label": "Yes"
          },
          {
            "id": "No",
            "label": "No"
          }
        ]
      },
      {
        "id": "symposium_participation",
        "section": "Technical Exposure",
        "question": "Have you participated in technical symposiums?",
        "type": "radio",
        "required": true,
        "options": [
          {
            "id": "Frequently",
            "label": "Frequently"
          },
          {
            "id": "Occasionally",
            "label": "Occasionally"
          },
          {
            "id": "Never",
            "label": "Never"
          }
        ]
      }
    ]
  },
  {
    "id": "col_section_d",
    "title": "Section D – Career Goals",
    "questions": [
      {
        "id": "interested_in_it",
        "section": "Career Goals",
        "question": "Are you interested in pursuing a career in the IT/Software industry?",
        "type": "radio",
        "required": true,
        "options": [
          {
            "id": "Yes",
            "label": "Yes"
          },
          {
            "id": "No",
            "label": "No"
          },
          {
            "id": "Maybe",
            "label": "Maybe"
          }
        ]
      },
      {
        "id": "coding_skills_self_rating",
        "section": "Career Goals",
        "question": "If Yes, how would you rate your programming/coding skills?",
        "type": "radio",
        "required": false,
        "options": [
          {
            "id": "Beginner",
            "label": "Beginner"
          },
          {
            "id": "Basic",
            "label": "Basic"
          },
          {
            "id": "Intermediate",
            "label": "Intermediate"
          },
          {
            "id": "Advanced",
            "label": "Advanced"
          },
          {
            "id": "Expert",
            "label": "Expert"
          }
        ]
      },
      {
        "id": "where_after_graduation",
        "section": "Career Goals",
        "question": "Where do you see yourself after graduation?",
        "type": "radio",
        "required": true,
        "options": [
          {
            "id": "Campus Placement",
            "label": "Campus Placement"
          },
          {
            "id": "Off-Campus Placement",
            "label": "Off-Campus Placement"
          },
          {
            "id": "Startup",
            "label": "Startup"
          },
          {
            "id": "Higher Studies",
            "label": "Higher Studies"
          },
          {
            "id": "Government Exams",
            "label": "Government Exams"
          },
          {
            "id": "Family Business",
            "label": "Family Business"
          },
          {
            "id": "Freelancing",
            "label": "Freelancing"
          }
        ]
      },
      {
        "id": "aspired_companies",
        "section": "Career Goals",
        "question": "Which companies do you aspire to work for? (Maximum 5)",
        "type": "text",
        "required": false
      },
      {
        "id": "expected_salary",
        "section": "Career Goals",
        "question": "Expected Annual Salary (First Job)",
        "type": "radio",
        "required": true,
        "options": [
          {
            "id": "Below 4 LPA",
            "label": "Below ₹4 LPA"
          },
          {
            "id": "4-6 LPA",
            "label": "₹4–6 LPA"
          },
          {
            "id": "6-10 LPA",
            "label": "₹6–10 LPA"
          },
          {
            "id": "10-15 LPA",
            "label": "₹10–15 LPA"
          },
          {
            "id": "15-25 LPA",
            "label": "₹15–25 LPA"
          },
          {
            "id": "25+ LPA",
            "label": "₹25+ LPA"
          }
        ]
      }
    ]
  },
  {
    "id": "col_section_e",
    "title": "Section E – Self Assessment",
    "questions": [
      {
        "id": "self_tech_knowledge",
        "section": "Self Assessment",
        "question": "Rate your technical knowledge.",
        "type": "radio",
        "required": true,
        "options": [
          {
            "id": "Beginner",
            "label": "Beginner"
          },
          {
            "id": "Intermediate",
            "label": "Intermediate"
          },
          {
            "id": "Advanced",
            "label": "Advanced"
          },
          {
            "id": "Expert",
            "label": "Expert"
          }
        ]
      },
      {
        "id": "self_prog_skills",
        "section": "Self Assessment",
        "question": "Rate your programming skills.",
        "type": "radio",
        "required": true,
        "options": [
          {
            "id": "Beginner",
            "label": "Beginner"
          },
          {
            "id": "Intermediate",
            "label": "Intermediate"
          },
          {
            "id": "Advanced",
            "label": "Advanced"
          },
          {
            "id": "Expert",
            "label": "Expert"
          }
        ]
      },
      {
        "id": "self_comm_skills",
        "section": "Self Assessment",
        "question": "Rate your communication skills (1 - 10).",
        "type": "dropdown",
        "required": true,
        "options": [
          {
            "id": "1",
            "label": "1"
          },
          {
            "id": "2",
            "label": "2"
          },
          {
            "id": "3",
            "label": "3"
          },
          {
            "id": "4",
            "label": "4"
          },
          {
            "id": "5",
            "label": "5"
          },
          {
            "id": "6",
            "label": "6"
          },
          {
            "id": "7",
            "label": "7"
          },
          {
            "id": "8",
            "label": "8"
          },
          {
            "id": "9",
            "label": "9"
          },
          {
            "id": "10",
            "label": "10"
          }
        ]
      },
      {
        "id": "self_logical_skills",
        "section": "Self Assessment",
        "question": "Rate your logical thinking ability (1 - 10).",
        "type": "dropdown",
        "required": true,
        "options": [
          {
            "id": "1",
            "label": "1"
          },
          {
            "id": "2",
            "label": "2"
          },
          {
            "id": "3",
            "label": "3"
          },
          {
            "id": "4",
            "label": "4"
          },
          {
            "id": "5",
            "label": "5"
          },
          {
            "id": "6",
            "label": "6"
          },
          {
            "id": "7",
            "label": "7"
          },
          {
            "id": "8",
            "label": "8"
          },
          {
            "id": "9",
            "label": "9"
          },
          {
            "id": "10",
            "label": "10"
          }
        ]
      },
      {
        "id": "self_problem_solving",
        "section": "Self Assessment",
        "question": "Rate your problem-solving ability (1 - 10).",
        "type": "dropdown",
        "required": true,
        "options": [
          {
            "id": "1",
            "label": "1"
          },
          {
            "id": "2",
            "label": "2"
          },
          {
            "id": "3",
            "label": "3"
          },
          {
            "id": "4",
            "label": "4"
          },
          {
            "id": "5",
            "label": "5"
          },
          {
            "id": "6",
            "label": "6"
          },
          {
            "id": "7",
            "label": "7"
          },
          {
            "id": "8",
            "label": "8"
          },
          {
            "id": "9",
            "label": "9"
          },
          {
            "id": "10",
            "label": "10"
          }
        ]
      },
      {
        "id": "self_interview_confidence",
        "section": "Self Assessment",
        "question": "Rate your confidence in interviews (1 - 10).",
        "type": "dropdown",
        "required": true,
        "options": [
          {
            "id": "1",
            "label": "1"
          },
          {
            "id": "2",
            "label": "2"
          },
          {
            "id": "3",
            "label": "3"
          },
          {
            "id": "4",
            "label": "4"
          },
          {
            "id": "5",
            "label": "5"
          },
          {
            "id": "6",
            "label": "6"
          },
          {
            "id": "7",
            "label": "7"
          },
          {
            "id": "8",
            "label": "8"
          },
          {
            "id": "9",
            "label": "9"
          },
          {
            "id": "10",
            "label": "10"
          }
        ]
      },
      {
        "id": "hours_learning_outside",
        "section": "Self Assessment",
        "question": "How many hours do you spend learning outside college each week?",
        "type": "radio",
        "required": true,
        "options": [
          {
            "id": "Less than 2",
            "label": "Less than 2"
          },
          {
            "id": "2-5",
            "label": "2–5"
          },
          {
            "id": "5-10",
            "label": "5–10"
          },
          {
            "id": "10-20",
            "label": "10–20"
          },
          {
            "id": "More than 20",
            "label": "More than 20"
          }
        ]
      },
      {
        "id": "areas_to_improve",
        "section": "Self Assessment",
        "question": "Which area do you want to improve the most? (Select up to 3)",
        "type": "checkbox",
        "maxSelections": 3,
        "required": true,
        "options": [
          {
            "id": "Programming",
            "label": "Programming"
          },
          {
            "id": "Aptitude",
            "label": "Aptitude"
          },
          {
            "id": "Communication",
            "label": "Communication"
          },
          {
            "id": "Core Technical Subjects",
            "label": "Core Technical Subjects"
          },
          {
            "id": "Problem Solving",
            "label": "Problem Solving"
          },
          {
            "id": "Coding Interviews",
            "label": "Coding Interviews"
          },
          {
            "id": "AI/ML",
            "label": "AI/ML"
          },
          {
            "id": "Cloud Computing",
            "label": "Cloud Computing"
          },
          {
            "id": "Leadership",
            "label": "Leadership"
          },
          {
            "id": "Public Speaking",
            "label": "Public Speaking"
          },
          {
            "id": "Time Management",
            "label": "Time Management"
          },
          {
            "id": "Research",
            "label": "Research"
          },
          {
            "id": "Entrepreneurship",
            "label": "Entrepreneurship"
          }
        ]
      }
    ]
  }
];
