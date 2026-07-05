// =============================================================================
// Layer 3 — Cognitive & Aptitude Test | Grade 9–10 (Challenging Level)
// 50 questions across 10 sections. Source: layer3_9-12_.pdf
// =============================================================================

import type { CognitiveQuestion, CognitiveSection } from "../../types/assessment.type";

export const layer3Grade9to10Sections: CognitiveSection[] = [
  {
    id: "logical-reasoning",
    title: "Logical Reasoning",
    questionCount: 10,
    skillsTested: ["Syllogisms", "Coding-Decoding", "Circular Arrangement", "Clock Angles", "Pattern Recognition"],
  },
  {
    id: "numerical-ability",
    title: "Numerical Ability",
    questionCount: 8,
    skillsTested: ["Trains & Speed", "Profit & Loss", "Ratios", "Pipes & Cisterns", "Simple Interest"],
  },
  {
    id: "verbal-ability",
    title: "Verbal Ability",
    questionCount: 8,
    skillsTested: ["Vocabulary", "Grammar", "Idioms", "Analogies", "Sentence Rearrangement"],
  },
  {
    id: "critical-thinking",
    title: "Critical Thinking",
    questionCount: 6,
    skillsTested: ["Correlation vs Causation", "Argument Weakening", "Logical Fallacies", "Paradoxes", "Assumptions"],
  },
  {
    id: "problem-solving",
    title: "Problem Solving",
    questionCount: 6,
    skillsTested: ["Water-Jug Puzzles", "Lateral Thinking", "Relative Speed", "Combinatorics", "Digit Patterns"],
  },
  {
    id: "analytical-thinking",
    title: "Analytical Thinking",
    questionCount: 4,
    skillsTested: ["Rate Normalisation", "Means", "Ranking Logic", "Set Theory"],
  },
  {
    id: "spatial-ability",
    title: "Spatial Ability",
    questionCount: 3,
    skillsTested: ["3D Cube Painting", "Paper Folding", "Mirror/Clock Reflection"],
  },
  { id: "memory", title: "Memory", questionCount: 2, skillsTested: ["Sequence Recall", "Ordinal Recall"] },
  {
    id: "attention",
    title: "Attention",
    questionCount: 1,
    skillsTested: ["Letter Counting"],
  },
  {
    id: "scientific-aptitude",
    title: "Scientific / Math / Technology Aptitude",
    questionCount: 2,
    skillsTested: ["Kinematics", "Data Structures"],
  },
];

export const layer3Grade9to10Questions: CognitiveQuestion[] = [
  // ---------------------------------------------------------------------------
  // Section A — Logical Reasoning (Q1–Q10)
  // ---------------------------------------------------------------------------
  {
    id: "L3-910-Q01",
    model: "knowledge-mcq",
    section: "logical-reasoning",
    questionNumber: 1,
    prompt:
      "All prime numbers greater than 2 are odd. p is a prime number greater than 2. Which conclusion MUST be true?",
    options: [
      { id: "A", text: "p is divisible by 4" },
      { id: "B", text: "p is an odd number" },
      { id: "C", text: "p + 1 is prime" },
      { id: "D", text: "p is not divisible by 3" },
    ],
    correctOptionId: "B",
    explanation: "By definition, all primes greater than 2 are odd, so p must be odd.",
  },
  {
    id: "L3-910-Q02",
    model: "knowledge-mcq",
    section: "logical-reasoning",
    questionNumber: 2,
    prompt:
      "In a row of 8 students, Riya is 3rd from the left and Karan is 5th from the right. How many students are between them?",
    options: [
      { id: "A", text: "0" },
      { id: "B", text: "1" },
      { id: "C", text: "2" },
      { id: "D", text: "3" },
    ],
    correctOptionId: "A",
    explanation: "Riya is at position 3 from the left. Karan, 5th from the right of 8, is at position 8−5+1=4 from the left. They are adjacent, so 0 students between them.",
  },
  {
    id: "L3-910-Q03",
    model: "knowledge-mcq",
    section: "logical-reasoning",
    questionNumber: 3,
    prompt: "If MANGO is coded as NBNHP (each letter shifted +1), what is the code for GRAPE?",
    options: [
      { id: "A", text: "HSBQF" },
      { id: "B", text: "HSAQF" },
      { id: "C", text: "GSBQF" },
      { id: "D", text: "HRBQF" },
    ],
    correctOptionId: "A",
    explanation: "Shifting each letter forward by one: G→H, R→S, A→B, P→Q, E→F, giving HSBQF.",
  },
  {
    id: "L3-910-Q04",
    model: "knowledge-mcq",
    section: "logical-reasoning",
    questionNumber: 4,
    prompt:
      "Six friends (A,B,C,D,E,F) sit in a circle. A is between F and B; C is directly opposite A. Who sits directly opposite B?",
    options: [
      { id: "A", text: "D" },
      { id: "B", text: "E" },
      { id: "C", text: "F" },
      { id: "D", text: "C" },
    ],
    correctOptionId: "B",
    explanation: "Arranging the circle as F–A–B–D–C–E, the person directly opposite B (position 3) is E (position 6).",
  },
  {
    id: "L3-910-Q05",
    model: "knowledge-mcq",
    section: "logical-reasoning",
    questionNumber: 5,
    prompt:
      "Statement: 'Some doctors are singers. All singers are dancers.' Conclusion I: Some doctors are dancers. Conclusion II: All dancers are doctors. Which follows?",
    options: [
      { id: "A", text: "Only I" },
      { id: "B", text: "Only II" },
      { id: "C", text: "Both I and II" },
      { id: "D", text: "Neither" },
    ],
    correctOptionId: "A",
    explanation: "Some doctors → singers → dancers, so Conclusion I follows. Not all dancers need be doctors, so Conclusion II does not follow.",
  },
  {
    id: "L3-910-Q06",
    model: "knowledge-mcq",
    section: "logical-reasoning",
    questionNumber: 6,
    prompt: "A clock shows 3:15. What is the angle between the hour and minute hands?",
    options: [
      { id: "A", text: "0°" },
      { id: "B", text: "7.5°" },
      { id: "C", text: "15°" },
      { id: "D", text: "22.5°" },
    ],
    correctOptionId: "B",
    explanation: "Minute hand at 90°. Hour hand at 3×30 + 15×0.5 = 97.5°. Difference = 7.5°.",
  },
  {
    id: "L3-910-Q07",
    model: "knowledge-mcq",
    section: "logical-reasoning",
    questionNumber: 7,
    prompt: "Find the odd one out: 8, 27, 64, 100, 125",
    options: [
      { id: "A", text: "8" },
      { id: "B", text: "27" },
      { id: "C", text: "100" },
      { id: "D", text: "125" },
    ],
    correctOptionId: "C",
    explanation: "8=2³, 27=3³, 64=4³, 125=5³ are perfect cubes; 100=10² is not a perfect cube.",
  },
  {
    id: "L3-910-Q08",
    model: "knowledge-mcq",
    section: "logical-reasoning",
    questionNumber: 8,
    prompt:
      "If '+' means '×', '×' means '−', '−' means '÷', '÷' means '+', evaluate: 6 + 4 − 2 × 3 ÷ 1",
    options: [
      { id: "A", text: "10" },
      { id: "B", text: "9" },
      { id: "C", text: "11" },
      { id: "D", text: "8" },
    ],
    correctOptionId: "A",
    explanation: "Substituting the swapped operators: 6×4÷2−3+1 = 12−3+1 = 10.",
  },
  {
    id: "L3-910-Q09",
    model: "knowledge-mcq",
    section: "logical-reasoning",
    questionNumber: 9,
    prompt: "Which number replaces '?' in the pattern: 4, 9, 16, 25, 36, 49, 64, 81, ?",
    options: [
      { id: "A", text: "90" },
      { id: "B", text: "100" },
      { id: "C", text: "121" },
      { id: "D", text: "144" },
    ],
    correctOptionId: "B",
    explanation: "The pattern is n²: 2² through 9², so the next term is 10² = 100.",
  },
  {
    id: "L3-910-Q10",
    model: "knowledge-mcq",
    section: "logical-reasoning",
    questionNumber: 10,
    prompt:
      "Statement: 'The government raised fuel prices.' Assumption I: Public transport will become expensive. Assumption II: People will reduce personal vehicle use. Which is implicit?",
    options: [
      { id: "A", text: "Only I" },
      { id: "B", text: "Only II" },
      { id: "C", text: "Both" },
      { id: "D", text: "Neither" },
    ],
    correctOptionId: "C",
    explanation: "Both assumptions follow logically from higher fuel prices affecting transport costs and consumer behaviour.",
  },

  // ---------------------------------------------------------------------------
  // Section B — Numerical Ability (Q11–Q18)
  // ---------------------------------------------------------------------------
  {
    id: "L3-910-Q11",
    model: "knowledge-mcq",
    section: "numerical-ability",
    questionNumber: 11,
    prompt:
      "A train 120 m long passes a pole in 6 s. How long (in seconds) will it take to cross a 180 m long platform?",
    options: [
      { id: "A", text: "12 s" },
      { id: "B", text: "15 s" },
      { id: "C", text: "18 s" },
      { id: "D", text: "9 s" },
    ],
    correctOptionId: "B",
    explanation: "Speed = 120/6 = 20 m/s. Total distance to cross platform = 120+180 = 300 m. Time = 300/20 = 15 s.",
  },
  {
    id: "L3-910-Q12",
    model: "knowledge-mcq",
    section: "numerical-ability",
    questionNumber: 12,
    prompt: "A shopkeeper marks an item 40% above cost price and gives a 20% discount. What is the profit %?",
    options: [
      { id: "A", text: "12% profit" },
      { id: "B", text: "12% loss" },
      { id: "C", text: "8% profit" },
      { id: "D", text: "20% loss" },
    ],
    correctOptionId: "A",
    explanation: "CP=100, MP=140, SP after 20% discount = 140×0.8=112. Profit = 12%.",
  },
  {
    id: "L3-910-Q13",
    model: "knowledge-mcq",
    section: "numerical-ability",
    questionNumber: 13,
    prompt: "The sum of three consecutive even integers is 78. What is the largest integer?",
    options: [
      { id: "A", text: "24" },
      { id: "B", text: "26" },
      { id: "C", text: "28" },
      { id: "D", text: "30" },
    ],
    correctOptionId: "C",
    explanation: "n + (n+2) + (n+4) = 78 → 3n+6=78 → n=24. The largest integer is n+4=28.",
  },
  {
    id: "L3-910-Q14",
    model: "knowledge-mcq",
    section: "numerical-ability",
    questionNumber: 14,
    prompt: "If 20% of (x+y) = 15% of (x−y), find x : y.",
    options: [
      { id: "A", text: "7 : 1" },
      { id: "B", text: "3 : 1" },
      { id: "C", text: "5 : 1" },
      { id: "D", text: "9 : 1" },
    ],
    correctOptionId: "A",
    explanation: "4(x+y)=3(x−y) → 4x+4y=3x−3y → x=7y, so x:y = 7:1.",
  },
  {
    id: "L3-910-Q15",
    model: "knowledge-mcq",
    section: "numerical-ability",
    questionNumber: 15,
    prompt:
      "Two pipes fill a cistern in 10 min and 15 min. A drain empties it in 30 min. How long to fill the cistern with all three open?",
    options: [
      { id: "A", text: "7.5 min" },
      { id: "B", text: "8 min" },
      { id: "C", text: "10 min" },
      { id: "D", text: "12 min" },
    ],
    correctOptionId: "A",
    explanation: "Net rate = 1/10 + 1/15 − 1/30 = 3/30+2/30−1/30 = 4/30 = 2/15 per minute. Time = 15/2 = 7.5 min.",
  },
  {
    id: "L3-910-Q16",
    model: "knowledge-mcq",
    section: "numerical-ability",
    questionNumber: 16,
    prompt: "Find the value of √0.0256.",
    options: [
      { id: "A", text: "0.016" },
      { id: "B", text: "0.16" },
      { id: "C", text: "0.0016" },
      { id: "D", text: "1.6" },
    ],
    correctOptionId: "B",
    explanation: "√(256/10000) = 16/100 = 0.16.",
  },
  {
    id: "L3-910-Q17",
    model: "knowledge-mcq",
    section: "numerical-ability",
    questionNumber: 17,
    prompt:
      "Simple interest on ₹5,000 at 8% p.a. for 3 years equals SI on ₹x at 6% for 4 years. Find x.",
    options: [
      { id: "A", text: "₹4,000" },
      { id: "B", text: "₹4,500" },
      { id: "C", text: "₹5,000" },
      { id: "D", text: "₹5,500" },
    ],
    correctOptionId: "C",
    explanation: "SI₁ = 5000×8×3/100 = 1200. 1200 = x×6×4/100 = 0.24x → x = 5000.",
  },
  {
    id: "L3-910-Q18",
    model: "knowledge-mcq",
    section: "numerical-ability",
    questionNumber: 18,
    prompt:
      "The ratio of boys to girls in a class is 3:2. If 10 more boys join, the ratio becomes 2:1. How many girls are there?",
    options: [
      { id: "A", text: "15" },
      { id: "B", text: "20" },
      { id: "C", text: "25" },
      { id: "D", text: "30" },
    ],
    correctOptionId: "B",
    explanation: "Let boys=3k, girls=2k. (3k+10)/2k = 2/1 → 3k+10=4k → k=10. Girls = 2k = 20.",
  },

  // ---------------------------------------------------------------------------
  // Section C — Verbal Ability (Q19–Q26)
  // ---------------------------------------------------------------------------
  {
    id: "L3-910-Q19",
    model: "knowledge-mcq",
    section: "verbal-ability",
    questionNumber: 19,
    prompt: "Choose the word most similar in meaning to EPHEMERAL:",
    options: [
      { id: "A", text: "Eternal" },
      { id: "B", text: "Transient" },
      { id: "C", text: "Robust" },
      { id: "D", text: "Significant" },
    ],
    correctOptionId: "B",
    explanation: "Ephemeral means lasting a very short time, which is synonymous with transient.",
  },
  {
    id: "L3-910-Q20",
    model: "knowledge-mcq",
    section: "verbal-ability",
    questionNumber: 20,
    prompt: "Choose the word most OPPOSITE in meaning to TACITURN:",
    options: [
      { id: "A", text: "Silent" },
      { id: "B", text: "Reserved" },
      { id: "C", text: "Garrulous" },
      { id: "D", text: "Timid" },
    ],
    correctOptionId: "C",
    explanation: "Taciturn means habitually silent; its antonym is garrulous (excessively talkative).",
  },
  {
    id: "L3-910-Q21",
    model: "knowledge-mcq",
    section: "verbal-ability",
    questionNumber: 21,
    prompt: "Fill in the blank: 'The committee ______ its decision after fresh evidence emerged.'",
    options: [
      { id: "A", text: "rescinded" },
      { id: "B", text: "reiterated" },
      { id: "C", text: "fabricated" },
      { id: "D", text: "instigated" },
    ],
    correctOptionId: "A",
    explanation: "Rescinded means officially cancelled or revoked — fitting given fresh evidence prompted a reversal.",
  },
  {
    id: "L3-910-Q22",
    model: "knowledge-mcq",
    section: "verbal-ability",
    questionNumber: 22,
    prompt: "Identify the grammatically correct sentence:",
    options: [
      { id: "A", text: "Neither of the boys have done their homework." },
      { id: "B", text: "Neither of the boys has done his homework." },
      { id: "C", text: "Neither of the boys have done his homework." },
      { id: "D", text: "Neither of the boys has done their homework." },
    ],
    correctOptionId: "B",
    explanation: "'Neither of' takes a singular verb and a singular pronoun: 'has done his homework.'",
  },
  {
    id: "L3-910-Q23",
    model: "knowledge-mcq",
    section: "verbal-ability",
    questionNumber: 23,
    prompt: "What does the idiom 'Burning the midnight oil' mean?",
    options: [
      { id: "A", text: "Wasting electricity" },
      { id: "B", text: "Working late into the night" },
      { id: "C", text: "Setting things on fire" },
      { id: "D", text: "Celebrating noisily" },
    ],
    correctOptionId: "B",
    explanation: "The idiom describes working or studying late into the night.",
  },
  {
    id: "L3-910-Q24",
    model: "knowledge-mcq",
    section: "verbal-ability",
    questionNumber: 24,
    prompt:
      "What does 'eschewing' mean in: 'Despite his affluence, Arvind lived frugally, eschewing luxury and donating generously.'",
    options: [
      { id: "A", text: "Embracing" },
      { id: "B", text: "Deliberately avoiding" },
      { id: "C", text: "Displaying" },
      { id: "D", text: "Purchasing" },
    ],
    correctOptionId: "B",
    explanation: "Eschewing means deliberately avoiding or abstaining from something.",
  },
  {
    id: "L3-910-Q25",
    model: "knowledge-mcq",
    section: "verbal-ability",
    questionNumber: 25,
    prompt: "Choose the pair with the SAME relationship as AUTHOR : NOVEL",
    options: [
      { id: "A", text: "Artist : Museum" },
      { id: "B", text: "Sculptor : Statue" },
      { id: "C", text: "Reader : Library" },
      { id: "D", text: "Singer : Concert" },
    ],
    correctOptionId: "B",
    explanation: "An author creates a novel; a sculptor creates a statue — both follow a creator : creation relationship.",
  },
  {
    id: "L3-910-Q26",
    model: "knowledge-mcq",
    section: "verbal-ability",
    questionNumber: 26,
    prompt: "Rearrange (P) convinced (Q) was (R) nobody (S) the theory by — to form a meaningful sentence.",
    options: [
      { id: "A", text: "RQPS" },
      { id: "B", text: "RPQS" },
      { id: "C", text: "QRSP" },
      { id: "D", text: "SQRP" },
    ],
    correctOptionId: "A",
    explanation: "The correct order gives: Nobody (R) was (Q) convinced (P) by the theory (S).",
  },

  // ---------------------------------------------------------------------------
  // Section D — Critical Thinking (Q27–Q32)
  // ---------------------------------------------------------------------------
  {
    id: "L3-910-Q27",
    model: "knowledge-mcq",
    section: "critical-thinking",
    questionNumber: 27,
    prompt:
      "80% of students who eat breakfast daily score above average. A student concludes 'Eating breakfast causes better scores.' What is wrong?",
    options: [
      { id: "A", text: "The sample is too small." },
      { id: "B", text: "Correlation is mistaken for causation." },
      { id: "C", text: "'Above average' is undefined." },
      { id: "D", text: "The study is not peer-reviewed." },
    ],
    correctOptionId: "B",
    explanation: "An observed association does not establish that breakfast causes the better scores; this is a correlation-causation error.",
  },
  {
    id: "L3-910-Q28",
    model: "knowledge-mcq",
    section: "critical-thinking",
    questionNumber: 28,
    prompt: "Which statement WEAKENS: 'Increasing screen time leads to poor sleep in teenagers'?",
    options: [
      { id: "A", text: "Blue light suppresses melatonin." },
      { id: "B", text: "Teenagers who sleep poorly use screens more before bed." },
      { id: "C", text: "Most teenagers with poor sleep also consume excess caffeine." },
      { id: "D", text: "Screen use fell among academically stressed students." },
    ],
    correctOptionId: "C",
    explanation: "Caffeine offers an alternative explanation for poor sleep, weakening the claim that screen time is the cause.",
  },
  {
    id: "L3-910-Q29",
    model: "knowledge-mcq",
    section: "critical-thinking",
    questionNumber: 29,
    prompt:
      "Identify the logical fallacy: 'You can't trust Meena's views on nutrition — she doesn't even exercise.'",
    options: [
      { id: "A", text: "Slippery slope" },
      { id: "B", text: "False dilemma" },
      { id: "C", text: "Ad hominem" },
      { id: "D", text: "Appeal to authority" },
    ],
    correctOptionId: "C",
    explanation: "Attacking Meena personally instead of addressing her argument is a classic ad hominem fallacy.",
  },
  {
    id: "L3-910-Q30",
    model: "knowledge-mcq",
    section: "critical-thinking",
    questionNumber: 30,
    prompt: "If 'All hardworking students pass' is TRUE, which must also be TRUE?",
    options: [
      { id: "A", text: "All students who pass are hardworking." },
      { id: "B", text: "No hardworking student fails." },
      { id: "C", text: "Some students who fail are hardworking." },
      { id: "D", text: "Passing depends only on hard work." },
    ],
    correctOptionId: "B",
    explanation: "The contrapositive of 'hardworking → pass' is 'fails → not hardworking', equivalent to 'no hardworking student fails.'",
  },
  {
    id: "L3-910-Q31",
    model: "knowledge-mcq",
    section: "critical-thinking",
    questionNumber: 31,
    prompt: "A barber shaves all those, and only those, who do not shave themselves. Who shaves the barber?",
    options: [
      { id: "A", text: "Himself" },
      { id: "B", text: "No one" },
      { id: "C", text: "Another barber" },
      { id: "D", text: "This is a paradox — no valid answer exists." },
    ],
    correctOptionId: "D",
    explanation: "This is Russell's Paradox: either answer (he shaves himself or he doesn't) leads to a direct contradiction.",
  },
  {
    id: "L3-910-Q32",
    model: "knowledge-mcq",
    section: "critical-thinking",
    questionNumber: 32,
    prompt: "What is the key assumption in: 'We should ban fast food advertising to reduce childhood obesity.'?",
    options: [
      { id: "A", text: "Childhood obesity is increasing." },
      { id: "B", text: "Children's food choices are influenced by advertising." },
      { id: "C", text: "Fast food companies earn large profits." },
      { id: "D", text: "Obesity is always caused by fast food." },
    ],
    correctOptionId: "B",
    explanation: "The argument only makes sense if advertising actually influences children's food choices — that is the load-bearing assumption.",
  },

  // ---------------------------------------------------------------------------
  // Section E — Problem Solving (Q33–Q38)
  // ---------------------------------------------------------------------------
  {
    id: "L3-910-Q33",
    model: "knowledge-mcq",
    section: "problem-solving",
    questionNumber: 33,
    prompt: "You have a 3 L jug and a 5 L jug (no markings). How do you measure exactly 4 L?",
    options: [
      {
        id: "A",
        text: "Fill 5L→pour into 3L→empty 3L→pour 2L into 3L→fill 5L→pour 1L into 3L → 4L remains in 5L.",
      },
      { id: "B", text: "Fill 3L twice and add 1L from 5L." },
      { id: "C", text: "Estimate halfway in the 5L jug." },
      { id: "D", text: "It is impossible." },
    ],
    correctOptionId: "A",
    explanation: "This classic water-jug sequence leaves exactly 4 L in the 5 L jug after the described transfers.",
  },
  {
    id: "L3-910-Q34",
    model: "knowledge-mcq",
    section: "problem-solving",
    questionNumber: 34,
    prompt: "A farmer has 17 sheep. All but 9 die. How many sheep are left?",
    options: [
      { id: "A", text: "8" },
      { id: "B", text: "9" },
      { id: "C", text: "17" },
      { id: "D", text: "0" },
    ],
    correctOptionId: "B",
    explanation: "'All but 9' means exactly 9 sheep survive, regardless of the starting total.",
  },
  {
    id: "L3-910-Q35",
    model: "knowledge-mcq",
    section: "problem-solving",
    questionNumber: 35,
    prompt:
      "You are in a dark room with one match. There is a candle, an oil lamp, and a fireplace. What do you light FIRST?",
    options: [
      { id: "A", text: "The candle" },
      { id: "B", text: "The oil lamp" },
      { id: "C", text: "The fireplace" },
      { id: "D", text: "The match" },
    ],
    correctOptionId: "D",
    explanation: "You must light the match itself before it can be used to light anything else — a classic lateral-thinking trap.",
  },
  {
    id: "L3-910-Q36",
    model: "knowledge-mcq",
    section: "problem-solving",
    questionNumber: 36,
    prompt:
      "Two cyclists start 300 km apart, riding toward each other at 40 km/h and 60 km/h. A fly starts from Cyclist A at 100 km/h and shuttles between them until they meet. How far does the fly travel?",
    options: [
      { id: "A", text: "200 km" },
      { id: "B", text: "250 km" },
      { id: "C", text: "300 km" },
      { id: "D", text: "350 km" },
    ],
    correctOptionId: "C",
    explanation: "The cyclists meet after 300/(40+60)=3 hours. The fly, flying for that entire 3 hours at 100 km/h, covers 300 km.",
  },
  {
    id: "L3-910-Q37",
    model: "knowledge-mcq",
    section: "problem-solving",
    questionNumber: 37,
    prompt:
      "A 4-digit password uses digits from {1,2,3,4,5} with no repeats and digits summing to 10. How many such passwords exist?",
    options: [
      { id: "A", text: "12" },
      { id: "B", text: "24" },
      { id: "C", text: "6" },
      { id: "D", text: "18" },
    ],
    correctOptionId: "B",
    explanation: "Only the digit set {1,2,3,4} sums to 10; arranging 4 distinct digits gives 4! = 24 passwords.",
  },
  {
    id: "L3-910-Q38",
    model: "knowledge-mcq",
    section: "problem-solving",
    questionNumber: 38,
    prompt: "How many times does the digit '1' appear in integers from 1 to 100?",
    options: [
      { id: "A", text: "20" },
      { id: "B", text: "21" },
      { id: "C", text: "11" },
      { id: "D", text: "19" },
    ],
    correctOptionId: "B",
    explanation:
      "Units digit is 1 ten times (1,11,...,91); tens digit is 1 ten times (10–19). The number 11 is counted in both, but the total count of the digit '1' across all positions is 21.",
  },

  // ---------------------------------------------------------------------------
  // Section F — Analytical Thinking (Q39–Q42)
  // ---------------------------------------------------------------------------
  {
    id: "L3-910-Q39",
    model: "knowledge-mcq",
    section: "analytical-thinking",
    questionNumber: 39,
    prompt:
      "City A: 500 crimes, population 1,000,000. City B: 300 crimes, population 200,000. Which city is safer PER CAPITA?",
    options: [
      { id: "A", text: "City A" },
      { id: "B", text: "City B" },
      { id: "C", text: "Both equal" },
      { id: "D", text: "Cannot determine" },
    ],
    correctOptionId: "A",
    explanation: "Crime rate per 100,000: City A = 50, City B = 150. City A has the lower rate and is safer per capita.",
  },
  {
    id: "L3-910-Q40",
    model: "knowledge-mcq",
    section: "analytical-thinking",
    questionNumber: 40,
    prompt: "Five friends scored: 72, 85, 91, 68, 74. A 6th friend joins and the mean becomes 80. What did the 6th friend score?",
    options: [
      { id: "A", text: "85" },
      { id: "B", text: "88" },
      { id: "C", text: "90" },
      { id: "D", text: "95" },
    ],
    correctOptionId: "C",
    explanation: "Sum of first 5 = 390. New total for 6 at mean 80 = 480. 6th score = 480 − 390 = 90.",
  },
  {
    id: "L3-910-Q41",
    model: "knowledge-mcq",
    section: "analytical-thinking",
    questionNumber: 41,
    prompt:
      "P is taller than Q but shorter than R. S is shorter than P but taller than Q. T is the tallest. Rank from tallest to shortest:",
    options: [
      { id: "A", text: "T>R>P>S>Q" },
      { id: "B", text: "T>R>S>P>Q" },
      { id: "C", text: "T>P>R>S>Q" },
      { id: "D", text: "T>R>P>Q>S" },
    ],
    correctOptionId: "A",
    explanation: "T>R>P>S>Q is the only ordering consistent with all the given comparisons.",
  },
  {
    id: "L3-910-Q42",
    model: "knowledge-mcq",
    section: "analytical-thinking",
    questionNumber: 42,
    prompt: "30 students study Maths, 25 study Science, and 10 study both. How many study at least one subject?",
    options: [
      { id: "A", text: "45" },
      { id: "B", text: "55" },
      { id: "C", text: "35" },
      { id: "D", text: "65" },
    ],
    correctOptionId: "A",
    explanation: "|M∪S| = |M|+|S|−|M∩S| = 30+25−10 = 45.",
  },

  // ---------------------------------------------------------------------------
  // Section G — Spatial Ability (Q43–Q45)
  // ---------------------------------------------------------------------------
  {
    id: "L3-910-Q43",
    model: "knowledge-mcq",
    section: "spatial-ability",
    questionNumber: 43,
    prompt: "A 3×3×3 cube is painted on all faces then cut into 27 small cubes. How many small cubes have exactly 2 painted faces?",
    options: [
      { id: "A", text: "8" },
      { id: "B", text: "12" },
      { id: "C", text: "6" },
      { id: "D", text: "1" },
    ],
    correctOptionId: "B",
    explanation: "Cubes at edge positions (not corners) have exactly 2 painted faces; a 3×3×3 cube has 12 such edge pieces.",
  },
  {
    id: "L3-910-Q44",
    model: "knowledge-mcq",
    section: "spatial-ability",
    questionNumber: 44,
    prompt:
      "A sheet of paper is folded once (left over right), and a circular hole is punched in the centre. How many holes appear when fully unfolded?",
    options: [
      { id: "A", text: "1" },
      { id: "B", text: "2" },
      { id: "C", text: "3" },
      { id: "D", text: "4" },
    ],
    correctOptionId: "B",
    explanation: "One fold creates two layers; punching through both and unfolding reveals 2 symmetric holes.",
  },
  {
    id: "L3-910-Q45",
    model: "knowledge-mcq",
    section: "spatial-ability",
    questionNumber: 45,
    prompt: "A clock viewed from the back shows 8:20. What is the actual time?",
    options: [
      { id: "A", text: "3:40" },
      { id: "B", text: "4:40" },
      { id: "C", text: "3:20" },
      { id: "D", text: "5:40" },
    ],
    correctOptionId: "A",
    explanation: "Mirror formula: 11:60 − 8:20 = 3:40.",
  },

  // ---------------------------------------------------------------------------
  // Section H — Memory (Q46–Q47)
  // ---------------------------------------------------------------------------
  {
    id: "L3-910-Q46",
    model: "knowledge-mcq",
    section: "memory",
    questionNumber: 46,
    context: "Sequence to memorise: 7, 14, 3, 22, 9, 17, 5, 11",
    prompt: "Which number was in the 6th position?",
    options: [
      { id: "A", text: "9" },
      { id: "B", text: "17" },
      { id: "C", text: "5" },
      { id: "D", text: "11" },
    ],
    correctOptionId: "B",
    explanation: "Counting positions: 7(1), 14(2), 3(3), 22(4), 9(5), 17(6). The 6th position holds 17.",
  },
  {
    id: "L3-910-Q47",
    model: "knowledge-mcq",
    section: "memory",
    questionNumber: 47,
    context: "Story introduces characters in order: Arjun, Bhavna, Chetan, Deepa, Esha.",
    prompt: "Which character was introduced 3rd?",
    options: [
      { id: "A", text: "Bhavna" },
      { id: "B", text: "Chetan" },
      { id: "C", text: "Deepa" },
      { id: "D", text: "Esha" },
    ],
    correctOptionId: "B",
    explanation: "Order of introduction: 1st Arjun, 2nd Bhavna, 3rd Chetan.",
  },

  // ---------------------------------------------------------------------------
  // Section I — Attention (Q48)
  // ---------------------------------------------------------------------------
  {
    id: "L3-910-Q48",
    model: "knowledge-mcq",
    section: "attention",
    questionNumber: 48,
    prompt:
      "Count the letter 'F' in: 'FINISHED FILES ARE THE RESULT OF YEARS OF SCIENTIFIC STUDY COMBINED WITH THE EXPERIENCE OF YEARS.'",
    options: [
      { id: "A", text: "3" },
      { id: "B", text: "4" },
      { id: "C", text: "5" },
      { id: "D", text: "6" },
    ],
    correctOptionId: "D",
    explanation:
      "F's appear in: FINISHED, FILES, oF (result of), oF (years of), scientiFic, oF (experience of) — 6 total. The word 'of' is frequently missed.",
  },

  // ---------------------------------------------------------------------------
  // Section J — Scientific / Math / Technology Aptitude (Q49–Q50)
  // ---------------------------------------------------------------------------
  {
    id: "L3-910-Q49",
    model: "knowledge-mcq",
    section: "scientific-aptitude",
    questionNumber: 49,
    prompt: "A ball is thrown vertically upward with initial velocity 20 m/s (g=10 m/s²). What is the maximum height reached?",
    options: [
      { id: "A", text: "10 m" },
      { id: "B", text: "20 m" },
      { id: "C", text: "40 m" },
      { id: "D", text: "5 m" },
    ],
    correctOptionId: "B",
    explanation: "H = v²/(2g) = (20×20)/(2×10) = 400/20 = 20 m.",
  },
  {
    id: "L3-910-Q50",
    model: "knowledge-mcq",
    section: "scientific-aptitude",
    questionNumber: 50,
    prompt: "Which data structure operates on the LIFO (Last In, First Out) principle?",
    options: [
      { id: "A", text: "Queue" },
      { id: "B", text: "Stack" },
      { id: "C", text: "Linked List" },
      { id: "D", text: "Array" },
    ],
    correctOptionId: "B",
    explanation: "A stack follows LIFO: the last element pushed onto it is the first one popped off.",
  },
];