// =============================================================================
// Layer 3 — Cognitive & Aptitude Assessment | Grade 6–8
// 50 questions across 10 sections. Source: Layer3_Cognitive_Assessment_50Q_6-8th.pdf
// =============================================================================

import type { CognitiveQuestion, CognitiveSection } from "../../types/assessment.type";

export const layer3Grade6to8Sections: CognitiveSection[] = [
  {
    id: "logical-reasoning",
    title: "Logical Reasoning",
    questionCount: 10,
    skillsTested: ["Sequencing", "Analogies", "Coding-Decoding", "Syllogisms", "Arrangements"],
  },
  {
    id: "numerical-ability",
    title: "Numerical Ability",
    questionCount: 8,
    skillsTested: ["Percentages", "Ratios", "Fractions", "Averages", "Speed-Distance", "Number Patterns"],
  },
  {
    id: "verbal-ability",
    title: "Verbal Ability",
    questionCount: 8,
    skillsTested: ["Reading Comprehension", "Vocabulary", "Analogies", "Grammar", "Inference"],
  },
  {
    id: "critical-thinking",
    title: "Critical Thinking",
    questionCount: 6,
    skillsTested: ["Fact vs Opinion", "Evidence Evaluation", "Assumptions", "Conclusions", "Source Reliability"],
  },
  {
    id: "problem-solving",
    title: "Problem Solving",
    questionCount: 6,
    skillsTested: ["Real-life Scenarios", "Planning", "Optimisation", "Resource Allocation"],
  },
  {
    id: "analytical-thinking",
    title: "Analytical Thinking",
    questionCount: 4,
    skillsTested: ["Tables", "Patterns", "Comparisons", "Logical Analysis"],
  },
  {
    id: "spatial-ability",
    title: "Spatial Ability",
    questionCount: 3,
    skillsTested: ["Mirror Images", "Rotations", "Paper Folding"],
  },
  { id: "memory", title: "Memory", questionCount: 2, skillsTested: ["Sequence Recall", "Pattern Recall"] },
  {
    id: "attention",
    title: "Attention to Detail",
    questionCount: 1,
    skillsTested: ["Error Detection", "Identifying Inconsistencies"],
  },
  {
    id: "scientific-aptitude",
    title: "Scientific / Math / Technology Aptitude",
    questionCount: 2,
    skillsTested: ["Scientific Reasoning", "Experimental Thinking", "Mathematical Logic"],
  },
];

export const layer3Grade6to8Questions: CognitiveQuestion[] = [
  // ---------------------------------------------------------------------------
  // Section A — Logical Reasoning (Q1–Q10)
  // ---------------------------------------------------------------------------
  {
    id: "L3-68-Q01",
    model: "knowledge-mcq",
    section: "logical-reasoning",
    questionNumber: 1,
    prompt: "What comes next in the sequence? 3, 7, 15, 31, 63, ___",
    options: [
      { id: "A", text: "107" },
      { id: "B", text: "115" },
      { id: "C", text: "127" },
      { id: "D", text: "131" },
    ],
    correctOptionId: "C",
    explanation: "Each term is double the previous term plus 1 (×2 +1): 63 × 2 + 1 = 127.",
  },
  {
    id: "L3-68-Q02",
    model: "knowledge-mcq",
    section: "logical-reasoning",
    questionNumber: 2,
    prompt:
      "In a certain code language, MANGO is written as OCPIQ. How is APPLE written in the same code?",
    options: [
      { id: "A", text: "CRRNG" },
      { id: "B", text: "CRPNG" },
      { id: "C", text: "BQQMF" },
      { id: "D", text: "CRNNG" },
    ],
    correctOptionId: "A",
    explanation: "Each letter is shifted forward by +2: A→C, P→R, P→R, L→N, E→G, giving CRRNG.",
  },
  {
    id: "L3-68-Q03",
    model: "knowledge-mcq",
    section: "logical-reasoning",
    questionNumber: 3,
    prompt: "\"All roses are flowers. Some flowers fade quickly.\" Which conclusion is DEFINITELY true?",
    options: [
      { id: "A", text: "All roses fade quickly." },
      { id: "B", text: "Some roses fade quickly." },
      { id: "C", text: "No roses fade quickly." },
      { id: "D", text: "None of the above can be concluded with certainty." },
    ],
    correctOptionId: "D",
    explanation:
      "We only know roses are a subset of flowers, and that some flowers (not specified which) fade quickly. There is no guarantee the fading flowers include any roses, so no certain conclusion about roses follows.",
  },
  {
    id: "L3-68-Q04",
    model: "knowledge-mcq",
    section: "logical-reasoning",
    questionNumber: 4,
    prompt:
      "Five friends — Arun, Bela, Chetan, Divya, and Eva — stand in a row. Arun is to the right of Bela. Eva is to the left of Divya. Chetan stands between Bela and Divya. Who is standing in the MIDDLE?",
    options: [
      { id: "A", text: "Arun" },
      { id: "B", text: "Bela" },
      { id: "C", text: "Chetan" },
      { id: "D", text: "Divya" },
    ],
    correctOptionId: "C",
    explanation:
      "A valid order satisfying all clues is Eva–Bela–Chetan–Divya–Arun (or Bela–Chetan–Divya consistent variants); in the standard arrangement Chetan, sitting between Bela and Divya, lands in the middle (3rd of 5) position.",
  },
  {
    id: "L3-68-Q05",
    model: "knowledge-mcq",
    section: "logical-reasoning",
    questionNumber: 5,
    prompt:
      "Train A leaves Station P at 8:00 AM at 60 km/h heading toward Station Q. Train B leaves Station Q at 9:00 AM at 90 km/h heading toward Station P. The distance between P and Q is 300 km. At what time will the two trains meet?",
    options: [
      { id: "A", text: "10:30 AM" },
      { id: "B", text: "10:36 AM" },
      { id: "C", text: "10:40 AM" },
      { id: "D", text: "11:00 AM" },
    ],
    correctOptionId: "B",
    explanation:
      "By 9:00 AM, Train A has covered 60 km, leaving 240 km. Combined closing speed from 9:00 AM is 150 km/h, so they meet after 240/150 = 1.6 h = 1 h 36 min, i.e. at 10:36 AM.",
  },
  {
    id: "L3-68-Q06",
    model: "knowledge-mcq",
    section: "logical-reasoning",
    questionNumber: 6,
    prompt: "Architect : Blueprint :: Composer : ___",
    options: [
      { id: "A", text: "Music" },
      { id: "B", text: "Score" },
      { id: "C", text: "Symphony" },
      { id: "D", text: "Conductor" },
    ],
    correctOptionId: "B",
    explanation:
      "An architect plans a building using a blueprint; a composer plans music using a score — both are the planning document for the final creation.",
  },
  {
    id: "L3-68-Q07",
    model: "knowledge-mcq",
    section: "logical-reasoning",
    questionNumber: 7,
    prompt: "Find the ODD one out: 8, 27, 64, 100, 125",
    options: [
      { id: "A", text: "8" },
      { id: "B", text: "27" },
      { id: "C", text: "100" },
      { id: "D", text: "125" },
    ],
    correctOptionId: "C",
    explanation: "8, 27, 64, and 125 are perfect cubes (2³, 3³, 4³, 5³); 100 is not a perfect cube.",
  },
  {
    id: "L3-68-Q08",
    model: "knowledge-mcq",
    section: "logical-reasoning",
    questionNumber: 8,
    prompt: "\"All Glops are Blips. No Blips are Zings.\" Which of the following MUST be true?",
    options: [
      { id: "A", text: "All Glops are Zings." },
      { id: "B", text: "No Glops are Zings." },
      { id: "C", text: "Some Glops are Zings." },
      { id: "D", text: "Some Zings are Glops." },
    ],
    correctOptionId: "B",
    explanation:
      "Since every Glop is a Blip, and no Blip is a Zing, no Glop can be a Zing either — this follows necessarily.",
  },
  {
    id: "L3-68-Q09",
    model: "knowledge-mcq",
    section: "logical-reasoning",
    questionNumber: 9,
    prompt: "What comes next? 2, 3, 5, 8, 13, 21, ___",
    options: [
      { id: "A", text: "29" },
      { id: "B", text: "33" },
      { id: "C", text: "34" },
      { id: "D", text: "36" },
    ],
    correctOptionId: "C",
    explanation: "This is a Fibonacci-style sequence: each term is the sum of the two before it. 13 + 21 = 34.",
  },
  {
    id: "L3-68-Q10",
    model: "knowledge-mcq",
    section: "logical-reasoning",
    questionNumber: 10,
    prompt:
      "If DOG = 26 (based on sum of alphabetical positions: D=4, O=15, G=7), what is the value of CAT?",
    options: [
      { id: "A", text: "22" },
      { id: "B", text: "24" },
      { id: "C", text: "26" },
      { id: "D", text: "28" },
    ],
    correctOptionId: "B",
    explanation: "C=3, A=1, T=20. Sum = 3 + 1 + 20 = 24.",
  },

  // ---------------------------------------------------------------------------
  // Section B — Numerical Ability (Q11–Q18)
  // ---------------------------------------------------------------------------
  {
    id: "L3-68-Q11",
    model: "knowledge-mcq",
    section: "numerical-ability",
    questionNumber: 11,
    prompt:
      "A shirt originally costs ₹800. It is first discounted by 25%, then the discounted price is increased by 10%. What is the FINAL price of the shirt?",
    options: [
      { id: "A", text: "₹620" },
      { id: "B", text: "₹660" },
      { id: "C", text: "₹680" },
      { id: "D", text: "₹700" },
    ],
    correctOptionId: "B",
    explanation: "After 25% off: 800 × 0.75 = 600. After 10% increase: 600 × 1.10 = ₹660.",
  },
  {
    id: "L3-68-Q12",
    model: "knowledge-mcq",
    section: "numerical-ability",
    questionNumber: 12,
    prompt:
      "The ratio of boys to girls in a class is 3 : 4. If there are 35 students in total, how many MORE girls are there than boys?",
    options: [
      { id: "A", text: "3" },
      { id: "B", text: "4" },
      { id: "C", text: "5" },
      { id: "D", text: "6" },
    ],
    correctOptionId: "C",
    explanation: "35 ÷ 7 parts = 5 per part. Boys = 15, Girls = 20. Difference = 5.",
  },
  {
    id: "L3-68-Q13",
    model: "knowledge-mcq",
    section: "numerical-ability",
    questionNumber: 13,
    prompt: "What is 2/3 of (3/4 + 1/6)?",
    options: [
      { id: "A", text: "3/5" },
      { id: "B", text: "11/18" },
      { id: "C", text: "7/12" },
      { id: "D", text: "5/9" },
    ],
    correctOptionId: "B",
    explanation: "3/4 + 1/6 = 9/12 + 2/12 = 11/12. Then 2/3 × 11/12 = 22/36 = 11/18.",
  },
  {
    id: "L3-68-Q14",
    model: "knowledge-mcq",
    section: "numerical-ability",
    questionNumber: 14,
    prompt:
      "The average of five numbers is 24. When one number is removed, the average of the remaining four becomes 21. What was the removed number?",
    options: [
      { id: "A", text: "36" },
      { id: "B", text: "37" },
      { id: "C", text: "38" },
      { id: "D", text: "39" },
    ],
    correctOptionId: "A",
    explanation: "Total of 5 numbers = 120. Total of remaining 4 = 84. Removed number = 120 − 84 = 36.",
  },
  {
    id: "L3-68-Q15",
    model: "knowledge-mcq",
    section: "numerical-ability",
    questionNumber: 15,
    prompt:
      "Riya cycles from home to school at 12 km/h and returns at 8 km/h along the same route. What is her AVERAGE speed for the entire journey?",
    options: [
      { id: "A", text: "9.0 km/h" },
      { id: "B", text: "9.5 km/h" },
      { id: "C", text: "9.6 km/h" },
      { id: "D", text: "10.0 km/h" },
    ],
    correctOptionId: "C",
    explanation:
      "For equal distances, average speed = 2ab/(a+b) = 2×12×8/(12+8) = 192/20 = 9.6 km/h.",
  },
  {
    id: "L3-68-Q16",
    model: "knowledge-mcq",
    section: "numerical-ability",
    questionNumber: 16,
    prompt: "Find the missing term in the series: 1, 1, 2, 6, 24, ___",
    options: [
      { id: "A", text: "36" },
      { id: "B", text: "48" },
      { id: "C", text: "100" },
      { id: "D", text: "120" },
    ],
    correctOptionId: "D",
    explanation:
      "Each term is multiplied by an increasing factor (×1, ×2, ×3, ×4, ×5) — this is the factorial sequence: 24 × 5 = 120.",
  },
  {
    id: "L3-68-Q17",
    model: "knowledge-mcq",
    section: "numerical-ability",
    questionNumber: 17,
    prompt:
      "In a survey of 200 students, 45% preferred cricket, 30% preferred football, and the rest preferred badminton. How many students preferred badminton?",
    options: [
      { id: "A", text: "40" },
      { id: "B", text: "45" },
      { id: "C", text: "50" },
      { id: "D", text: "55" },
    ],
    correctOptionId: "C",
    explanation: "Remaining percentage = 100 − 45 − 30 = 25%. 25% of 200 = 50 students.",
  },
  {
    id: "L3-68-Q18",
    model: "knowledge-mcq",
    section: "numerical-ability",
    questionNumber: 18,
    prompt:
      "Pipe A can fill a tank in 12 hours; Pipe B can fill it in 6 hours. Both pipes are opened together. After 2 hours, Pipe A is closed. How many MORE hours will Pipe B alone take to fill the remaining tank?",
    options: [
      { id: "A", text: "1 hour" },
      { id: "B", text: "2 hours" },
      { id: "C", text: "3 hours" },
      { id: "D", text: "4 hours" },
    ],
    correctOptionId: "C",
    explanation:
      "Combined rate = 1/12 + 1/6 = 1/4 per hour. In 2 hours, 1/2 of the tank is filled. Remaining 1/2 ÷ (1/6 per hour for B alone) = 3 hours.",
  },

  // ---------------------------------------------------------------------------
  // Section C — Verbal Ability (Q19–Q26)
  // ---------------------------------------------------------------------------
  {
    id: "L3-68-Q19",
    model: "knowledge-mcq",
    section: "verbal-ability",
    questionNumber: 19,
    context:
      'The Amazon rainforest, often called the "lungs of the Earth," produces approximately 20% of the world\'s oxygen through photosynthesis. It is home to nearly 10% of all species found on Earth. However, deforestation has been destroying vast portions of this critical ecosystem. Between 2000 and 2020, the Amazon lost close to 400,000 square kilometres of forest — an area larger than the entire nation of Germany.',
    prompt: "According to the passage, approximately what fraction of all Earth's species live in the Amazon rainforest?",
    options: [
      { id: "A", text: "5%" },
      { id: "B", text: "10%" },
      { id: "C", text: "20%" },
      { id: "D", text: "40%" },
    ],
    correctOptionId: "B",
    explanation: "The passage states the Amazon is home to nearly 10% of all species found on Earth.",
  },
  {
    id: "L3-68-Q20",
    model: "knowledge-mcq",
    section: "verbal-ability",
    questionNumber: 20,
    context:
      'The Amazon rainforest, often called the "lungs of the Earth," produces approximately 20% of the world\'s oxygen through photosynthesis. It is home to nearly 10% of all species found on Earth. However, deforestation has been destroying vast portions of this critical ecosystem. Between 2000 and 2020, the Amazon lost close to 400,000 square kilometres of forest — an area larger than the entire nation of Germany.',
    prompt: "Which of the following can be BEST inferred from the passage above?",
    options: [
      { id: "A", text: "The Amazon is the only source of oxygen on Earth." },
      { id: "B", text: "More than half of all Earth's species live in the Amazon." },
      { id: "C", text: "Destruction of the Amazon could significantly reduce global oxygen levels." },
      { id: "D", text: "Germany has no forests of its own." },
    ],
    correctOptionId: "C",
    explanation:
      "Since the Amazon produces about 20% of the world's oxygen, its ongoing destruction logically threatens a meaningful share of global oxygen production.",
  },
  {
    id: "L3-68-Q21",
    model: "knowledge-mcq",
    section: "verbal-ability",
    questionNumber: 21,
    prompt: "What is the BEST meaning of the word TENACIOUS?",
    options: [
      { id: "A", text: "Easily frightened" },
      { id: "B", text: "Persistently holding firm" },
      { id: "C", text: "Quick to forgive" },
      { id: "D", text: "Lacking strength" },
    ],
    correctOptionId: "B",
    explanation: "Tenacious means holding firmly to something, persistent and determined.",
  },
  {
    id: "L3-68-Q22",
    model: "knowledge-mcq",
    section: "verbal-ability",
    questionNumber: 22,
    prompt: "Hesitant : Confident :: Frugal : ___",
    options: [
      { id: "A", text: "Thrifty" },
      { id: "B", text: "Generous" },
      { id: "C", text: "Wealthy" },
      { id: "D", text: "Poor" },
    ],
    correctOptionId: "B",
    explanation: "Hesitant and Confident are opposites; the pair must also be opposites. Frugal (careful with money) is the opposite of Generous.",
  },
  {
    id: "L3-68-Q23",
    model: "knowledge-mcq",
    section: "verbal-ability",
    questionNumber: 23,
    prompt:
      'Choose the word that BEST completes the sentence: "Although the evidence was ___, the detective refused to give up on solving the case."',
    options: [
      { id: "A", text: "overwhelming" },
      { id: "B", text: "conclusive" },
      { id: "C", text: "scanty" },
      { id: "D", text: "reliable" },
    ],
    correctOptionId: "C",
    explanation:
      "\"Although\" signals a contrast — the detective persists despite a difficulty, so the evidence must be lacking; \"scanty\" (meager, insufficient) fits.",
  },
  {
    id: "L3-68-Q24",
    model: "knowledge-mcq",
    section: "verbal-ability",
    questionNumber: 24,
    prompt:
      "Choose the sentence that CORRECTLY uses subject-verb agreement: Statement: Neither the captain nor the players ___ prepared for the match.",
    options: [
      { id: "A", text: "Neither the captain nor the players was prepared for the match." },
      { id: "B", text: "Neither the captain nor the players were prepared for the match." },
      { id: "C", text: "Neither the captain nor the players is prepared for the match." },
      { id: "D", text: "Neither the captain nor the players have been prepared for the match." },
    ],
    correctOptionId: "B",
    explanation:
      "With \"neither...nor\", the verb agrees with the noun closest to it. \"Players\" is plural, so the correct verb is \"were\".",
  },
  {
    id: "L3-68-Q25",
    model: "knowledge-mcq",
    section: "verbal-ability",
    questionNumber: 25,
    context:
      "Vikram arrived at the library 10 minutes before closing time. He noticed the librarian switching off some lights and placing a 'Final Call for Returns' sign at the entrance. The librarian, spotting Vikram, waved him in immediately and handed him a pre-packaged set of books without any discussion.",
    prompt: "What can MOST reasonably be inferred from the situation above?",
    options: [
      { id: "A", text: "Vikram is a brand-new member of the library." },
      { id: "B", text: "Vikram had a prior arrangement to collect specific books." },
      { id: "C", text: "Vikram came only to return books he had borrowed." },
      { id: "D", text: "The library was about to reopen after a short break." },
    ],
    correctOptionId: "B",
    explanation:
      "The librarian handing over a pre-packaged set of books without discussion, immediately on recognising Vikram, strongly implies a prior arrangement for those specific books.",
  },
  {
    id: "L3-68-Q26",
    model: "knowledge-mcq",
    section: "verbal-ability",
    questionNumber: 26,
    prompt: "What is the ANTONYM (opposite) of BENEVOLENT?",
    options: [
      { id: "A", text: "Kind" },
      { id: "B", text: "Generous" },
      { id: "C", text: "Malicious" },
      { id: "D", text: "Charitable" },
    ],
    correctOptionId: "C",
    explanation: "Benevolent means kind and generous; its opposite is malicious (intending harm).",
  },

  // ---------------------------------------------------------------------------
  // Section D — Critical Thinking (Q27–Q32)
  // ---------------------------------------------------------------------------
  {
    id: "L3-68-Q27",
    model: "knowledge-mcq",
    section: "critical-thinking",
    questionNumber: 27,
    prompt: "Which of the following is a FACT rather than an opinion?",
    options: [
      { id: "A", text: "Electric cars are better than petrol cars." },
      { id: "B", text: "The Eiffel Tower is the most beautiful structure in the world." },
      { id: "C", text: "Water boils at 100°C at sea level under standard atmospheric conditions." },
      { id: "D", text: "Vegetables taste better than meat." },
    ],
    correctOptionId: "C",
    explanation: "This is a verifiable, measurable scientific fact, not a matter of personal judgment.",
  },
  {
    id: "L3-68-Q28",
    model: "knowledge-mcq",
    section: "critical-thinking",
    questionNumber: 28,
    prompt:
      'A student claims: "Listening to classical music improves mathematics scores." Which evidence would BEST support this claim?',
    options: [
      { id: "A", text: "A famous mathematician says he enjoyed classical music." },
      {
        id: "B",
        text: "A controlled study of 500 students shows that those who listened to classical music scored 15% higher on maths tests.",
      },
      { id: "C", text: "A survey shows that 70% of students who listen to classical music enjoy school." },
      { id: "D", text: "Classical music has been played in schools for over 200 years." },
    ],
    correctOptionId: "B",
    explanation: "A large, controlled study directly testing the claim provides the strongest evidence; the other options are anecdotal or irrelevant.",
  },
  {
    id: "L3-68-Q29",
    model: "knowledge-mcq",
    section: "critical-thinking",
    questionNumber: 29,
    prompt:
      'A principal states: "We should ban all social media for students under 18 because it causes depression." What HIDDEN ASSUMPTION does this argument make?',
    options: [
      { id: "A", text: "All students under 18 actively use social media." },
      { id: "B", text: "Depression is caused only and exclusively by social media." },
      { id: "C", text: "Social media has no benefits that would justify keeping student access." },
      { id: "D", text: "Students under 18 are more emotionally vulnerable than adults." },
    ],
    correctOptionId: "C",
    explanation:
      "The argument for an outright ban implicitly assumes the harms outweigh any benefits — otherwise a full ban wouldn't be the proposed solution.",
  },
  {
    id: "L3-68-Q30",
    model: "knowledge-mcq",
    section: "critical-thinking",
    questionNumber: 30,
    prompt:
      '"Research shows that countries with higher chocolate consumption have more Nobel Prize winners per capita." What is the MOST logical conclusion?',
    options: [
      { id: "A", text: "Eating more chocolate increases a person's chances of winning a Nobel Prize." },
      { id: "B", text: "Nobel Prize winners tend to prefer chocolate over other foods." },
      {
        id: "C",
        text: "There is a correlation between the two, but this does NOT prove that chocolate consumption causes Nobel Prize wins.",
      },
      { id: "D", text: "Countries should increase chocolate production to earn more Nobel Prizes." },
    ],
    correctOptionId: "C",
    explanation: "A correlation between two variables doesn't establish that one causes the other — a classic correlation-vs-causation trap.",
  },
  {
    id: "L3-68-Q31",
    model: "knowledge-mcq",
    section: "critical-thinking",
    questionNumber: 31,
    prompt:
      "You want to find out whether a new energy drink is truly safe for teenagers. Which source would be MOST reliable?",
    options: [
      { id: "A", text: "The energy drink company's own official website." },
      { id: "B", text: "A fitness influencer who sponsors and regularly uses the drink." },
      { id: "C", text: "A peer-reviewed study published in a medical journal." },
      { id: "D", text: "Positive user reviews from teenagers on social media." },
    ],
    correctOptionId: "C",
    explanation: "Peer-reviewed medical research is independently vetted and far less prone to bias than sources with a commercial or promotional interest.",
  },
  {
    id: "L3-68-Q32",
    model: "knowledge-mcq",
    section: "critical-thinking",
    questionNumber: 32,
    prompt:
      "A school board is debating extending the school day by one hour to add sports time. Which factor is MOST directly relevant to this decision?",
    options: [
      { id: "A", text: "The age and condition of the school building." },
      { id: "B", text: "Whether students already have heavy evening homework loads." },
      { id: "C", text: "The colour of the school's sports uniforms." },
      { id: "D", text: "Whether the principal has personally won any sports awards." },
    ],
    correctOptionId: "B",
    explanation: "Existing evening workload directly affects whether students can absorb an extra hour of school — the other options are irrelevant to the decision.",
  },

  // ---------------------------------------------------------------------------
  // Section E — Problem Solving (Q33–Q38)
  // ---------------------------------------------------------------------------
  {
    id: "L3-68-Q33",
    model: "knowledge-mcq",
    section: "problem-solving",
    questionNumber: 33,
    prompt:
      "A baker makes chocolate, vanilla, and strawberry cookies in the ratio 4 : 3 : 2. He bakes 180 cookies in total. How many MORE chocolate cookies are there than strawberry cookies?",
    options: [
      { id: "A", text: "20" },
      { id: "B", text: "30" },
      { id: "C", text: "40" },
      { id: "D", text: "50" },
    ],
    correctOptionId: "C",
    explanation: "9 parts total = 180, so 1 part = 20. Chocolate = 80, Strawberry = 40. Difference = 40.",
  },
  {
    id: "L3-68-Q34",
    model: "knowledge-mcq",
    section: "problem-solving",
    questionNumber: 34,
    prompt:
      "Meera wants to save ₹3,600 in 12 months for a new bicycle. In the first 3 months, she saves ₹150 per month. How much must she save per month for the REMAINING 9 months to exactly meet her goal?",
    options: [
      { id: "A", text: "₹300" },
      { id: "B", text: "₹350" },
      { id: "C", text: "₹380" },
      { id: "D", text: "₹400" },
    ],
    correctOptionId: "B",
    explanation: "Saved so far = 3 × 150 = ₹450. Remaining = 3600 − 450 = ₹3150 over 9 months = ₹350/month.",
  },
  {
    id: "L3-68-Q35",
    model: "knowledge-mcq",
    section: "problem-solving",
    questionNumber: 35,
    prompt:
      "A rectangular garden is to be fenced on three sides — two widths and one length — using exactly 40 metres of fencing. If the width is 8 metres, what is the AREA of the garden?",
    options: [
      { id: "A", text: "160 m²" },
      { id: "B", text: "176 m²" },
      { id: "C", text: "192 m²" },
      { id: "D", text: "200 m²" },
    ],
    correctOptionId: "C",
    explanation: "Two widths use 16 m, leaving 24 m for the length. Area = 24 × 8 = 192 m².",
  },
  {
    id: "L3-68-Q36",
    model: "knowledge-mcq",
    section: "problem-solving",
    questionNumber: 36,
    prompt:
      "A school has 2 minibuses, each holding 12 students. For a field trip, 30 students need to be transported. Option 1: rent an additional minibus (12 seats) for ₹400. Option 2: rent a coach (20 seats) for ₹700. What is the MOST cost-effective option that successfully transports ALL students?",
    options: [
      { id: "A", text: "Use both minibuses + rent the additional minibus (₹400 extra)." },
      { id: "B", text: "Use both minibuses + rent the coach (₹700 extra)." },
      { id: "C", text: "Use only the coach and leave the minibuses behind." },
      { id: "D", text: "Rent two coaches and leave the minibuses behind." },
    ],
    correctOptionId: "A",
    explanation:
      "Two minibuses already seat 24; a third minibus adds the remaining 6+ seats needed for ₹400, cheaper than the ₹700 coach option while still covering all 30 students.",
  },
  {
    id: "L3-68-Q37",
    model: "knowledge-mcq",
    section: "problem-solving",
    questionNumber: 37,
    prompt:
      "Rohan must complete three tasks: Task A (2 hours), Task B (3 hours), and Task C (1 hour). Task C CANNOT begin until Task A is fully finished. Task B can be done at any time. Rohan starts at 9:00 AM. What is the EARLIEST he can finish ALL THREE tasks?",
    options: [
      { id: "A", text: "2:00 PM" },
      { id: "B", text: "3:00 PM" },
      { id: "C", text: "3:30 PM" },
      { id: "D", text: "4:00 PM" },
    ],
    correctOptionId: "B",
    explanation: "Doing all tasks sequentially (one person, one task at a time) takes 2 + 3 + 1 = 6 hours total. 9:00 AM + 6 hours = 3:00 PM.",
  },
  {
    id: "L3-68-Q38",
    model: "knowledge-mcq",
    section: "problem-solving",
    questionNumber: 38,
    prompt:
      "A trader buys 100 books at ₹4 each. He sells 60 books at ₹7 each. What is the MINIMUM selling price he must set for each of the remaining 40 books to earn exactly 50% profit on his total investment?",
    options: [
      { id: "A", text: "₹4.00" },
      { id: "B", text: "₹4.50" },
      { id: "C", text: "₹5.00" },
      { id: "D", text: "₹5.50" },
    ],
    correctOptionId: "B",
    explanation:
      "Total cost = 100 × 4 = ₹400. Target revenue (50% profit) = ₹600. Revenue from first 60 = 60 × 7 = ₹420. Remaining needed = ₹180 from 40 books = ₹4.50 each.",
  },

  // ---------------------------------------------------------------------------
  // Section F — Analytical Thinking (Q39–Q42)
  // ---------------------------------------------------------------------------
  {
    id: "L3-68-Q39",
    model: "knowledge-mcq",
    section: "analytical-thinking",
    questionNumber: 39,
    context:
      "Subject scores (out of 100): Mathematics 85, Science 78, English 92, History 65, Art 88.",
    prompt: "What is the AVERAGE score across all five subjects?",
    options: [
      { id: "A", text: "79.6" },
      { id: "B", text: "81.6" },
      { id: "C", text: "82.4" },
      { id: "D", text: "83.2" },
    ],
    correctOptionId: "B",
    explanation: "Sum = 85+78+92+65+88 = 408. Average = 408 ÷ 5 = 81.6.",
  },
  {
    id: "L3-68-Q40",
    model: "knowledge-mcq",
    section: "analytical-thinking",
    questionNumber: 40,
    context: "Rahul's monthly savings: January ₹200, February ₹300, March ₹450, April ₹650, May ₹900.",
    prompt: "If the pattern in Rahul's monthly savings continues, what will his savings be in June?",
    options: [
      { id: "A", text: "₹1,100" },
      { id: "B", text: "₹1,150" },
      { id: "C", text: "₹1,200" },
      { id: "D", text: "₹1,250" },
    ],
    correctOptionId: "C",
    explanation: "Differences increase by 50 each month: +100, +150, +200, +250, so June = 900 + 300 = ₹1,200.",
  },
  {
    id: "L3-68-Q41",
    model: "knowledge-mcq",
    section: "analytical-thinking",
    questionNumber: 41,
    context:
      "Number grid — Row 1: 3,5,7 | Row 2: 4,8,12 | Row 3: 5,11,17 | Row 4: 6,14,22 | Row 5: 7,?,?",
    prompt: "What is the value in Row 5, Column 3?",
    options: [
      { id: "A", text: "25" },
      { id: "B", text: "27" },
      { id: "C", text: "28" },
      { id: "D", text: "29" },
    ],
    correctOptionId: "B",
    explanation:
      "Column 1 increases by 1 each row (3,4,5,6,7). Column 3 increases by 5 each row (7,12,17,22,27), so Row 5 Column 3 = 27.",
  },
  {
    id: "L3-68-Q42",
    model: "knowledge-mcq",
    section: "analytical-thinking",
    questionNumber: 42,
    prompt:
      "Four students — Aditya, Bina, Chirag, and Deepa — each scored differently on a test. Aditya scored higher than Bina. Deepa scored lower than Aditya but higher than Bina. Bina scored higher than Chirag. Who scored THIRD highest?",
    options: [
      { id: "A", text: "Aditya" },
      { id: "B", text: "Bina" },
      { id: "C", text: "Chirag" },
      { id: "D", text: "Deepa" },
    ],
    correctOptionId: "B",
    explanation: "Order from highest to lowest: Aditya > Deepa > Bina > Chirag. Bina is third highest.",
  },

  // ---------------------------------------------------------------------------
  // Section G — Spatial Ability (Q43–Q45)
  // ---------------------------------------------------------------------------
  {
    id: "L3-68-Q43",
    model: "knowledge-mcq",
    section: "spatial-ability",
    questionNumber: 43,
    prompt:
      "A clock displays the time 4:30. When this clock face is viewed in a mirror (left-right reflection), what time does the mirror image appear to show?",
    options: [
      { id: "A", text: "4:30" },
      { id: "B", text: "7:30" },
      { id: "C", text: "5:30" },
      { id: "D", text: "6:30" },
    ],
    correctOptionId: "B",
    explanation: "Mirror time = 11:60 minus the actual time. 11:60 − 4:30 = 7:30.",
  },
  {
    id: "L3-68-Q44",
    model: "knowledge-mcq",
    section: "spatial-ability",
    questionNumber: 44,
    prompt:
      "A square piece of paper has the letter \"R\" written in the top-left corner. The paper is then rotated 90° CLOCKWISE. In which corner does the letter \"R\" now appear?",
    options: [
      { id: "A", text: "Top-left" },
      { id: "B", text: "Top-right" },
      { id: "C", text: "Bottom-left" },
      { id: "D", text: "Bottom-right" },
    ],
    correctOptionId: "B",
    explanation: "A 90° clockwise rotation moves the top-left corner to the top-right position.",
  },
  {
    id: "L3-68-Q45",
    model: "knowledge-mcq",
    section: "spatial-ability",
    questionNumber: 45,
    prompt:
      "A square sheet of paper is folded in half from right to left (so the right half lies exactly over the left half). A circular hole is then punched through the CENTRE of the folded paper. When the paper is fully unfolded, what do you see?",
    options: [
      { id: "A", text: "One hole in the exact centre of the paper." },
      {
        id: "B",
        text: "Two holes, one midway between the centre and the left edge, and one midway between the centre and the right edge.",
      },
      { id: "C", text: "Four holes arranged in a square pattern." },
      { id: "D", text: "Two holes, one directly above the other along the centre fold." },
    ],
    correctOptionId: "B",
    explanation:
      "The punch goes through both layers at the centre of the folded (half-width) sheet, which unfolds into two holes symmetric about the original centre line, one on each side.",
  },

  // ---------------------------------------------------------------------------
  // Section H — Memory (Q46–Q47)
  // ---------------------------------------------------------------------------
  {
    id: "L3-68-Q46",
    model: "knowledge-mcq",
    section: "memory",
    questionNumber: 46,
    context: "Number sequence to memorise: 7, 14, 3, 9, 22, 5, 18, 11",
    prompt: "If you add ONLY the numbers in EVEN positions (2nd, 4th, 6th, and 8th), what is the total?",
    options: [
      { id: "A", text: "37" },
      { id: "B", text: "39" },
      { id: "C", text: "41" },
      { id: "D", text: "43" },
    ],
    correctOptionId: "B",
    explanation: "Even positions are 14 (2nd), 9 (4th), 5 (6th), 11 (8th). Sum = 14+9+5+11 = 39.",
  },
  {
    id: "L3-68-Q47",
    model: "knowledge-mcq",
    section: "memory",
    questionNumber: 47,
    context: "Letter sequence to memorise: A B A A B A B B",
    prompt: "If the sequence above is written in REVERSE order, which option is correct?",
    options: [
      { id: "A", text: "B B A B A A B A" },
      { id: "B", text: "A B B A B A A B" },
      { id: "C", text: "B A B A A B A B" },
      { id: "D", text: "A B A A B A B B" },
    ],
    correctOptionId: "A",
    explanation: "Reversing A-B-A-A-B-A-B-B gives B-B-A-B-A-A-B-A.",
  },

  // ---------------------------------------------------------------------------
  // Section I — Attention to Detail (Q48)
  // ---------------------------------------------------------------------------
  {
    id: "L3-68-Q48",
    model: "knowledge-mcq",
    section: "attention",
    questionNumber: 48,
    context:
      'Passage: "The planet Mars is known as the Red Planet because of its iron oxide surface, which gives it a distinctive blue colour. It has two moons called Phobos and Deimos. Mars is also the largest planet in our solar system, with a year lasting approximately 687 Earth days." It contains EXACTLY TWO factual errors.',
    prompt: "Which option correctly identifies BOTH errors and their corrections?",
    options: [
      { id: "A", text: "\"blue colour\" should be \"red colour\"; \"largest planet\" should be \"smallest planet\"." },
      {
        id: "B",
        text: "\"blue colour\" should be \"red colour\"; \"largest planet\" should be \"fourth planet from the Sun\".",
      },
      {
        id: "C",
        text: "\"iron oxide\" should be \"calcium carbonate\"; \"largest planet\" should be \"smallest planet\".",
      },
      { id: "D", text: "\"blue colour\" should be \"red colour\"; \"two moons\" should be \"three moons\"." },
    ],
    correctOptionId: "B",
    explanation:
      "Mars appears red (not blue) due to iron oxide, and it is the fourth planet from the Sun, not the largest planet in the solar system (it is actually the second-smallest).",
  },

  // ---------------------------------------------------------------------------
  // Section J — Scientific / Math / Technology Aptitude (Q49–Q50)
  // ---------------------------------------------------------------------------
  {
    id: "L3-68-Q49",
    model: "knowledge-mcq",
    section: "scientific-aptitude",
    questionNumber: 49,
    prompt:
      "A scientist tests whether plants grow taller under blue light or red light. She uses 20 plants — 10 under blue light and 10 under red light — keeping all other conditions (water, soil, temperature) IDENTICAL throughout. This experiment BEST illustrates which concept?",
    options: [
      { id: "A", text: "Testing a hypothesis without any variables." },
      { id: "B", text: "A controlled experiment that isolates one independent variable." },
      { id: "C", text: "An uncontrolled study with multiple changing variables." },
      { id: "D", text: "A computer simulation of plant growth, not a real experiment." },
    ],
    correctOptionId: "B",
    explanation:
      "Light colour is the only thing that changes (the independent variable) while everything else is held constant — the defining feature of a controlled experiment.",
  },
  {
    id: "L3-68-Q50",
    model: "knowledge-mcq",
    section: "scientific-aptitude",
    questionNumber: 50,
    context:
      "Program logic: if divisible by both 3 and 5 → print \"FizzBuzz\"; if divisible by 3 only → print \"Fizz\"; if divisible by 5 only → print \"Buzz\"; otherwise → print the number itself.",
    prompt: "What will the program output for the number 30?",
    options: [
      { id: "A", text: "30" },
      { id: "B", text: "Fizz" },
      { id: "C", text: "Buzz" },
      { id: "D", text: "FizzBuzz" },
    ],
    correctOptionId: "D",
    explanation: "30 is divisible by both 3 and 5, so the program prints \"FizzBuzz\".",
  },
];