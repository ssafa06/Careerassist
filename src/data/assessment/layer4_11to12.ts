// =============================================================================
// Layer 4 — Skills & Competencies Assessment | Grade 11–12
// 10 scenario-based questions, ONE best answer per question (per the official
// answer key), unlike the 6–8/9–10 multi-graded behavioural model.
// Source: layer4__11-12th_.pdf
//
// To stay structurally compatible with the shared ScenarioQuestion model used
// by Layer 4 6–8 and 9–10, every question is encoded with 4 options where the
// officially-correct option scores 5/5 and the rest are scored using the same
// "BEST vs reasonable vs weak" logic implied by the explanations in the
// source answer key. The hidden-competency tags reuse the four "soft skill"
// competencies most clearly implicated by each explanation.
// =============================================================================

import type { CompetencyMeta, ScenarioQuestion } from "../../types/assessment.type";

export const layer4Grade11to12Competencies: CompetencyMeta[] = [
  { id: "decision-making", label: "Decision Making", questionCount: 1, maxScore: 5 },
  { id: "time-management", label: "Time Management", questionCount: 1, maxScore: 5 },
  { id: "communication", label: "Communication", questionCount: 1, maxScore: 5 },
  { id: "leadership", label: "Leadership", questionCount: 1, maxScore: 5 },
  { id: "teamwork", label: "Teamwork", questionCount: 1, maxScore: 5 },
  { id: "adaptability", label: "Adaptability", questionCount: 1, maxScore: 5 },
  { id: "creativity", label: "Creativity & Innovation", questionCount: 1, maxScore: 5 },
  { id: "digital-literacy", label: "Digital Literacy", questionCount: 1, maxScore: 5 },
  { id: "entrepreneurship", label: "Entrepreneurship", questionCount: 1, maxScore: 5 },
  { id: "discipline", label: "Discipline", questionCount: 1, maxScore: 5 },
];

export const layer4Grade11to12Questions: ScenarioQuestion[] = [
  {
    id: "L4-1112-Q01",
    model: "scenario-likert",
    primaryCompetency: "decision-making",
    hiddenCompetencies: ["Planning", "Prioritisation", "Teamwork", "Leadership"],
    questionNumber: 1,
    scenario:
      "Your school project group has 3 days left. Two members want to add a new section that will take 2 days to research, but your current work is still incomplete. The deadline is fixed.",
    prompt: "As the group leader, what is the BEST decision?",
    options: [
      { id: "A", text: "Add the new section — it will make the project stand out", indicator: "Expands scope despite incomplete core work and a fixed deadline — high risk of not finishing on time.", primaryScore: 2 },
      { id: "B", text: "Focus on completing and polishing the current work first", indicator: "Secures what is already in progress before expanding scope — finishing over starting.", primaryScore: 5 },
      { id: "C", text: "Ask the teacher to extend the deadline", indicator: "Relies on an external change rather than managing the fixed constraint that is actually given.", primaryScore: 2 },
      { id: "D", text: "Let each member decide individually what to work on", indicator: "Avoids making a leadership decision; risks fragmented, uncoordinated effort.", primaryScore: 1 },
    ],
  },
  {
    id: "L4-1112-Q02",
    model: "scenario-likert",
    primaryCompetency: "time-management",
    hiddenCompetencies: ["Discipline", "Decision Making", "Self-Awareness"],
    questionNumber: 2,
    scenario:
      "Priya has Board exams in 6 weeks. She has 5 subjects — strong in 3, hasn't started the other 2. Her habit is to study what she enjoys most first.",
    prompt: "Which time management strategy should Priya follow?",
    options: [
      { id: "A", text: "Continue studying her strong subjects since she enjoys them more", indicator: "Plays to comfort rather than need; leaves the two weak subjects dangerously underprepared.", primaryScore: 1 },
      { id: "B", text: "Divide time equally across all 5 subjects every day", indicator: "Treats all subjects as equally urgent, ignoring that two need disproportionately more attention.", primaryScore: 2 },
      { id: "C", text: "Spend more hours on the 2 weak subjects and revise the strong ones briefly", indicator: "Prioritises weak areas while maintaining strengths — maximises total marks across all subjects.", primaryScore: 5 },
      { id: "D", text: "Focus only on the 2 weak subjects and ignore the strong ones", indicator: "Overcorrects — risks her existing strong subjects slipping from lack of revision.", primaryScore: 2 },
    ],
  },
  {
    id: "L4-1112-Q03",
    model: "scenario-likert",
    primaryCompetency: "communication",
    hiddenCompetencies: ["Integrity", "Teamwork", "Discipline"],
    questionNumber: 3,
    scenario:
      "During a group presentation, your teammate gives incorrect data on a slide. The audience, including your teacher, doesn't notice the mistake.",
    prompt: "What is the most professional and honest response?",
    options: [
      { id: "A", text: "Stay quiet — pointing it out will embarrass your teammate", indicator: "Avoids the discomfort of correction but lets inaccurate information stand uncorrected.", primaryScore: 2 },
      { id: "B", text: "Interrupt immediately and correct it loudly in front of everyone", indicator: "Prioritises accuracy but at the cost of publicly embarrassing a teammate mid-presentation.", primaryScore: 2 },
      { id: "C", text: "After the presentation, privately inform your teammate and offer to help correct it", indicator: "Honest and tactful — preserves trust and accuracy without public humiliation.", primaryScore: 5 },
      { id: "D", text: "Tell your friends about the mistake but don't say anything official", indicator: "Spreads the information informally without addressing the actual problem or the teammate.", primaryScore: 1 },
    ],
  },
  {
    id: "L4-1112-Q04",
    model: "scenario-likert",
    primaryCompetency: "leadership",
    hiddenCompetencies: ["Conflict Resolution", "Teamwork", "Decision Making"],
    questionNumber: 4,
    scenario:
      "Two students in your project team refuse to work together due to a personal argument. The submission is in 48 hours. As the assigned group leader, the rest of the team is looking to you.",
    prompt: "What is the most effective leadership action?",
    options: [
      { id: "A", text: "Tell them to sort it out themselves — it's not your problem", indicator: "Avoids leadership responsibility at a critical moment for the team.", primaryScore: 1 },
      { id: "B", text: "Remove one of them from the team and reassign their work", indicator: "Resolves the friction but is an extreme, unilateral step that may be unfair or unnecessary.", primaryScore: 2 },
      { id: "C", text: "Meet both briefly, acknowledge the tension, and reassign tasks so they don't need to directly collaborate", indicator: "Contains the conflict pragmatically without escalating it, keeping the team moving toward the goal.", primaryScore: 5 },
      { id: "D", text: "Ignore the conflict and just submit whatever work is done", indicator: "Neither resolves the conflict nor protects the quality of the final submission.", primaryScore: 1 },
    ],
  },
  {
    id: "L4-1112-Q05",
    model: "scenario-likert",
    primaryCompetency: "teamwork",
    hiddenCompetencies: ["Empathy", "Communication", "Leadership"],
    questionNumber: 5,
    scenario:
      "In a group of 5, you notice one member hasn't contributed anything in 2 weeks. They seem stressed but haven't communicated with the group.",
    prompt: "What is the best teamwork response?",
    options: [
      { id: "A", text: "Complain about them to the teacher immediately", indicator: "Escalates without first attempting to understand the underlying situation.", primaryScore: 1 },
      { id: "B", text: "Divide their work among the others without telling them", indicator: "Solves the immediate workload problem but does not address the member's wellbeing or the team dynamic.", primaryScore: 2 },
      { id: "C", text: "Reach out to them privately to check in and understand what's happening", indicator: "Leads with empathy before assuming the worst — both human and effective as a first step.", primaryScore: 5 },
      { id: "D", text: "Post about their lack of contribution in the group chat to call them out", indicator: "Publicly shames a possibly struggling teammate, which can worsen the situation.", primaryScore: 1 },
    ],
  },
  {
    id: "L4-1112-Q06",
    model: "scenario-likert",
    primaryCompetency: "adaptability",
    hiddenCompetencies: ["Composure Under Pressure", "Communication", "Problem Solving"],
    questionNumber: 6,
    scenario:
      "You prepared an entire science project presentation using PowerPoint. On the day, the classroom computer isn't working and there's no time to fix it.",
    prompt: "What shows the BEST adaptability?",
    options: [
      { id: "A", text: "Refuse to present and ask to reschedule", indicator: "Avoids the challenge entirely rather than adapting to the constraint.", primaryScore: 1 },
      { id: "B", text: "Present verbally using the printed report as a reference, engaging the class with questions", indicator: "Adjusts to the unexpected constraint without losing effectiveness — composed and resourceful.", primaryScore: 5 },
      { id: "C", text: "Read out your entire PowerPoint script from your phone", indicator: "Technically adapts the medium but risks a flat, disengaged delivery by reading verbatim.", primaryScore: 2 },
      { id: "D", text: "Ask a classmate to present instead of you", indicator: "Avoids personally adapting to the situation by offloading the responsibility.", primaryScore: 1 },
    ],
  },
  {
    id: "L4-1112-Q07",
    model: "scenario-likert",
    primaryCompetency: "creativity",
    hiddenCompetencies: ["Innovation", "Practical Thinking", "Digital Literacy"],
    questionNumber: 7,
    scenario:
      "Your school's annual magazine has always been a printed black-and-white booklet. You're on the student editorial committee asked for ideas to make it more engaging this year.",
    prompt: "Which idea reflects BOTH creativity and practical innovation?",
    options: [
      { id: "A", text: "Print it in colour — that's already different enough", indicator: "A modest visual upgrade, but not a meaningfully new format or experience.", primaryScore: 2 },
      { id: "B", text: "Create a free digital version with QR codes in the print edition linking to videos, interviews, and behind-the-scenes content", indicator: "New, practical, engaging, and free to implement — enhances the existing format with a hybrid model.", primaryScore: 5 },
      { id: "C", text: "Just improve the writing quality — content is what matters most", indicator: "A valid improvement but doesn't address engagement through format or innovation.", primaryScore: 3 },
      { id: "D", text: "Make it longer than last year's edition", indicator: "Adds volume without adding genuine creativity or engagement value.", primaryScore: 1 },
    ],
  },
  {
    id: "L4-1112-Q08",
    model: "scenario-likert",
    primaryCompetency: "digital-literacy",
    hiddenCompetencies: ["Critical Thinking", "Discipline", "Online Safety"],
    questionNumber: 8,
    scenario:
      "You receive a WhatsApp message from an unknown number claiming your 'Aadhaar card is suspended' and asking you to click a link and enter your details within 2 hours or face a fine.",
    prompt: "What is the most digitally literate response?",
    options: [
      { id: "A", text: "Click the link quickly — government deadlines are serious", indicator: "Falls directly for the urgency tactic used in phishing scams, risking data theft.", primaryScore: 1 },
      { id: "B", text: "Forward it to family members to warn them", indicator: "Well-intentioned but spreads an unverified message rather than stopping or reporting it.", primaryScore: 2 },
      { id: "C", text: "Ignore the message, don't click the link, and report it as spam", indicator: "Correctly identifies and neutralises a phishing attempt — government agencies never suspend Aadhaar via WhatsApp.", primaryScore: 5 },
      { id: "D", text: "Call the number back to verify if it's real", indicator: "Engaging directly with an unknown suspicious number can itself lead to further fraud.", primaryScore: 2 },
    ],
  },
  {
    id: "L4-1112-Q09",
    model: "scenario-likert",
    primaryCompetency: "entrepreneurship",
    hiddenCompetencies: ["Financial Literacy", "Strategic Thinking", "Decision Making"],
    questionNumber: 9,
    scenario:
      "Ravi sells handmade bookmarks at school — 40 units at Rs. 30 each in month 1. A classmate suggests lowering the price to Rs. 20 to sell more. Materials cost Rs. 15 per unit.",
    prompt: "What is the most entrepreneurially sound decision?",
    options: [
      { id: "A", text: "Lower the price to Rs. 20 as suggested — volume is everything", indicator: "Cuts profit margin to Rs. 5/unit (33%) from Rs. 15/unit (100%) — a race to the bottom on price.", primaryScore: 1 },
      { id: "B", text: "Keep the price at Rs. 30, focus on quality and marketing to increase sales", indicator: "Grows revenue through better marketing while protecting a healthy 100% margin — smarter than discounting.", primaryScore: 5 },
      { id: "C", text: "Stop selling and wait for a better market", indicator: "Abandons a working business with no clear justification or plan.", primaryScore: 1 },
      { id: "D", text: "Raise the price to Rs. 50 to earn more per unit", indicator: "Risks losing customers without first testing whether demand can sustain a sharply higher price.", primaryScore: 2 },
    ],
  },
  {
    id: "L4-1112-Q10",
    model: "scenario-likert",
    primaryCompetency: "discipline",
    hiddenCompetencies: ["Time Management", "Decision Making", "Self-Management"],
    questionNumber: 10,
    scenario:
      "You have a Hindi essay submission tomorrow. You also have a cricket match this evening that your team is counting on you for. You haven't started the essay. It is currently 3 PM.",
    prompt: "What shows BOTH discipline and good decision-making?",
    options: [
      { id: "A", text: "Skip the match — academics always come first", indicator: "Treats academics as an absolute priority, but lets the team down unnecessarily when both could be managed.", primaryScore: 2 },
      { id: "B", text: "Go to the match and write the essay quickly at midnight", indicator: "Honours the team commitment but leaves the essay rushed with a tired mind late at night.", primaryScore: 2 },
      { id: "C", text: "Write for 90 minutes before the match, attend the match, then finish the essay by 10 PM with a clear head", indicator: "Manages competing responsibilities through smart planning — shows commitment to both duties with integrity.", primaryScore: 5 },
      { id: "D", text: "Ask a friend to write the essay while you play", indicator: "Avoids personal responsibility for the assignment entirely — an integrity failure.", primaryScore: 1 },
    ],
  },
];