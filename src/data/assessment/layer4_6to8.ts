// =============================================================================
// Layer 4 — Skills & Competencies Assessment | Grade 6–8
// 35 scenario-based questions across 12 competency domains.
// Source: Layer4_Skills_Competencie_6-8th_.pdf
// Behavioural assessment — no single "correct" answer; each option carries a
// primary-competency score (1–5) plus a list of hidden competencies logged
// for the full behavioural profile.
// =============================================================================

import type { CompetencyMeta, ScenarioQuestion } from "../../types/assessment.type";

export const layer4Grade6to8Competencies: CompetencyMeta[] = [
  { id: "communication", label: "Communication Skills", questionCount: 4, maxScore: 20 },
  { id: "leadership", label: "Leadership", questionCount: 4, maxScore: 20 },
  { id: "teamwork", label: "Teamwork & Collaboration", questionCount: 4, maxScore: 20 },
  { id: "creativity", label: "Creativity", questionCount: 4, maxScore: 20 },
  { id: "innovation", label: "Innovation", questionCount: 3, maxScore: 15 },
  { id: "decision-making", label: "Decision Making", questionCount: 3, maxScore: 15 },
  { id: "time-management", label: "Time Management", questionCount: 3, maxScore: 15 },
  { id: "discipline", label: "Discipline & Responsibility", questionCount: 3, maxScore: 15 },
  { id: "adaptability", label: "Adaptability", questionCount: 2, maxScore: 10 },
  { id: "digital-literacy", label: "Digital Literacy", questionCount: 2, maxScore: 10 },
  { id: "entrepreneurship", label: "Entrepreneurship", questionCount: 2, maxScore: 10 },
  { id: "presentation", label: "Presentation & Public Speaking", questionCount: 1, maxScore: 5 },
];

export const layer4Grade6to8Questions: ScenarioQuestion[] = [
  {
    id: "L4-68-Q01",
    model: "scenario-likert",
    primaryCompetency: "communication",
    hiddenCompetencies: ["Adaptability", "Leadership", "Discipline & Responsibility", "Decision Making"],
    questionNumber: 1,
    scenario:
      "Your science teacher asks the class to explain an experiment you just did. You know the answer well, but when you start speaking, a few classmates start whispering among themselves. Two of your friends are not paying attention. The teacher is looking at you, waiting for you to continue. The class feels a little noisy and distracted.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Pause, wait for the noise to settle, then continue speaking clearly.", indicator: "Shows composure and audience awareness — pauses strategically to regain attention.", primaryScore: 5 },
      { id: "B", text: "Speak louder and faster to finish before anyone else distracts you.", indicator: "Shows task-completion drive but lacks audience sensitivity.", primaryScore: 3 },
      { id: "C", text: "Ask the teacher to tell the class to be quiet before you continue.", indicator: "Shows reliance on authority; prefers external help to manage the situation.", primaryScore: 2 },
      { id: "D", text: "Stop speaking and tell the teacher you would rather explain it in writing.", indicator: "Shows avoidance of verbal communication; prefers writing over speaking.", primaryScore: 1 },
    ],
  },
  {
    id: "L4-68-Q02",
    model: "scenario-likert",
    primaryCompetency: "leadership",
    hiddenCompetencies: ["Decision Making", "Teamwork & Collaboration", "Communication Skills", "Adaptability", "Creativity"],
    questionNumber: 2,
    scenario:
      "Your class has been asked to set up a stall for the school's annual science exhibition. There are six students in your group. Two of them are arguing about which topic to choose. One student wants to build a working model; another wants to make a chart display. No one is making a decision, and only three days are left. Everyone is looking around, but no one is taking charge.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Suggest combining both ideas — build a simple model and add a chart to explain it.", indicator: "Shows collaborative leadership — integrates competing ideas into a shared solution.", primaryScore: 5 },
      { id: "B", text: "Tell the group to vote and go with whatever the majority decides.", indicator: "Shows democratic approach — fair but may delay decision-making.", primaryScore: 4 },
      { id: "C", text: "Pick the idea you like most and start working on it, hoping others will follow.", indicator: "Shows assertive leadership — decisive but may not carry the team.", primaryScore: 3 },
      { id: "D", text: "Wait for the teacher to step in and assign the topic.", indicator: "Shows dependence on authority — avoids taking responsibility.", primaryScore: 1 },
    ],
  },
  {
    id: "L4-68-Q03",
    model: "scenario-likert",
    primaryCompetency: "teamwork",
    hiddenCompetencies: ["Empathy", "Decision Making", "Responsibility", "Communication Skills", "Leadership"],
    questionNumber: 3,
    scenario:
      "You are working on a group assignment about the water cycle. Your team has divided the work equally. However, one team member has not done their part, and the submission is tomorrow. The rest of the team is upset. Some want to submit without that person's section. Others want to wait. You know this team member is going through something difficult at home.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Quietly cover that person's part yourself so the team does not suffer.", indicator: "Shows selfless contribution — takes on extra load to protect the team.", primaryScore: 3 },
      { id: "B", text: "Talk to the team member privately and offer to help them finish quickly.", indicator: "Shows empathetic collaboration — addresses both the person and the problem.", primaryScore: 5 },
      { id: "C", text: "Tell the team to submit whatever is ready and explain the situation to the teacher.", indicator: "Shows pragmatism — prioritises completion with transparent communication.", primaryScore: 4 },
      { id: "D", text: "Ask the teacher for a one-day extension so the team can submit together.", indicator: "Shows team loyalty — seeks a collective solution through the right channel.", primaryScore: 4 },
    ],
  },
  {
    id: "L4-68-Q04",
    model: "scenario-likert",
    primaryCompetency: "creativity",
    hiddenCompetencies: ["Communication Skills", "Teamwork & Collaboration", "Innovation", "Leadership", "Presentation & Public Speaking"],
    questionNumber: 4,
    scenario:
      "Your class is organising a farewell event for your favourite teacher who is retiring. The students are expected to put together a small programme. Most students suggest the usual — a card, a cake, and a short speech. You feel there could be something more meaningful and memorable to make the teacher feel truly special.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Create a short video using photos and messages collected from all students and teachers.", indicator: "Shows digital creativity and inclusive thinking — uses technology to involve everyone.", primaryScore: 5 },
      { id: "B", text: "Write and perform an original poem or short skit about the teacher's journey.", indicator: "Shows expressive creativity and personal investment in the moment.", primaryScore: 4 },
      { id: "C", text: "Go ahead with the standard card and cake — it is familiar and the teacher will appreciate it.", indicator: "Shows comfort with convention — avoids risk of experimentation.", primaryScore: 2 },
      { id: "D", text: "Design a scrapbook with drawings, quotes, and memories contributed by every student.", indicator: "Shows hands-on artistic creativity and desire for collective participation.", primaryScore: 4 },
    ],
  },
  {
    id: "L4-68-Q05",
    model: "scenario-likert",
    primaryCompetency: "innovation",
    hiddenCompetencies: ["Creativity", "Decision Making", "Time Management", "Adaptability", "Leadership"],
    questionNumber: 5,
    scenario:
      "During a robotics club session, the task is to build a robot that can sort coloured balls into separate boxes. Your team's first design keeps failing because the arm is not strong enough. You have limited materials — some cardboard, rubber bands, and tape. The session ends in 40 minutes and the robot must be working before then.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Try a completely different mechanism using the rubber bands as a spring launcher instead of an arm.", indicator: "Shows innovative redesign — willingness to abandon the original plan for a better solution.", primaryScore: 5 },
      { id: "B", text: "Strengthen the arm by layering more cardboard and re-testing it step by step.", indicator: "Shows iterative problem-solving — improves existing design systematically.", primaryScore: 4 },
      { id: "C", text: "Ask the club mentor for advice before trying anything new.", indicator: "Shows guided learning — uses available expertise before experimenting.", primaryScore: 3 },
      { id: "D", text: "Focus on getting at least one colour sorted correctly before time runs out.", indicator: "Shows strategic prioritisation — accepts partial success over total failure.", primaryScore: 3 },
    ],
  },
  {
    id: "L4-68-Q06",
    model: "scenario-likert",
    primaryCompetency: "decision-making",
    hiddenCompetencies: ["Discipline & Responsibility", "Communication Skills", "Digital Literacy", "Adaptability"],
    questionNumber: 6,
    scenario:
      "You are on your way to school and find a wallet on the road near your school gate. It has some cash, an ID card, and a bus pass inside. You are already 10 minutes late to school because of a traffic delay. If you stop now, you might miss your first class. The road is busy and no one else seems to notice the wallet.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Pick it up, hand it to the security guard at the school gate, and inform the office.", indicator: "Shows civic responsibility — delegates to the right authority quickly.", primaryScore: 5 },
      { id: "B", text: "Leave it where it is — touching someone else's wallet could cause problems.", indicator: "Shows caution and avoidance — prioritises self-protection over civic duty.", primaryScore: 1 },
      { id: "C", text: "Pick it up, keep it safe, and look for the owner using the ID card after school.", indicator: "Shows proactive responsibility — takes ownership of the problem.", primaryScore: 4 },
      { id: "D", text: "Take a photo of it and post in the school WhatsApp group to find the owner.", indicator: "Shows digital resourcefulness — uses technology for community problem-solving.", primaryScore: 4 },
    ],
  },
  {
    id: "L4-68-Q07",
    model: "scenario-likert",
    primaryCompetency: "time-management",
    hiddenCompetencies: ["Discipline & Responsibility", "Decision Making", "Teamwork & Collaboration", "Leadership"],
    questionNumber: 7,
    scenario:
      "You have three things due on Friday — a history assignment, a maths worksheet, and you promised to help decorate the classroom for Children's Day on Thursday evening. It is Tuesday evening. You have about two hours each evening to study. You also have a football practice on Wednesday evening which you cannot skip.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Make a plan right now — decide which task to finish each evening before sleeping.", indicator: "Shows structured time management — proactive planning with priorities.", primaryScore: 5 },
      { id: "B", text: "Start with the easiest task first to feel motivated and then do the harder ones.", indicator: "Shows motivation-based planning — progress-oriented but lacks strategy.", primaryScore: 3 },
      { id: "C", text: "Skip the decoration help to focus fully on your assignments.", indicator: "Shows academic prioritisation — responsible to work, less loyal to commitments.", primaryScore: 2 },
      { id: "D", text: "Do a little of everything each day and hope everything gets finished on time.", indicator: "Shows multitasking tendency — optimistic but risks incomplete work.", primaryScore: 2 },
    ],
  },
  {
    id: "L4-68-Q08",
    model: "scenario-likert",
    primaryCompetency: "discipline",
    hiddenCompetencies: ["Leadership", "Communication Skills", "Decision Making", "Teamwork & Collaboration"],
    questionNumber: 8,
    scenario:
      "You are the class monitor for this week. During the lunch break, three students from your class go to the canteen, buy snacks, and eat inside the classroom — which is strictly against school rules. You saw it happen. The teacher has not noticed. These three students are your friends, and one of them is your best friend.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Tell your friends that they broke a rule and ask them to clean up and not do it again.", indicator: "Shows peer responsibility — addresses the issue directly without escalating.", primaryScore: 5 },
      { id: "B", text: "Ignore it — they are your friends and it is a small matter.", indicator: "Shows conflict avoidance — loyalty to friends over duty.", primaryScore: 1 },
      { id: "C", text: "Report it to the teacher exactly as you saw it.", indicator: "Shows rule adherence — strict accountability, potentially at social cost.", primaryScore: 4 },
      { id: "D", text: "Warn them quietly and note it in the monitor's diary without telling the teacher directly.", indicator: "Shows balanced responsibility — documents without immediately escalating.", primaryScore: 4 },
    ],
  },
  {
    id: "L4-68-Q09",
    model: "scenario-likert",
    primaryCompetency: "adaptability",
    hiddenCompetencies: ["Creativity", "Decision Making", "Discipline & Responsibility", "Communication Skills", "Teamwork & Collaboration"],
    questionNumber: 9,
    scenario:
      "Your school announces a surprise change — the annual day drama that you have rehearsed for two months has been replaced by a different cultural event. The new event requires you to do a solo folk dance performance instead of acting in a play. You have never danced in public before. The event is in five days.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Accept the change, ask a classmate who knows the dance to teach you the basics, and practise hard.", indicator: "Shows active adaptability — embraces change and seeks peer support to cope.", primaryScore: 5 },
      { id: "B", text: "Request the teacher to let you take a backstage or supporting role instead.", indicator: "Shows role-flexibility — adapts but avoids stepping out of comfort zone.", primaryScore: 3 },
      { id: "C", text: "Practise alone by watching videos online and prepare as best you can.", indicator: "Shows independent adaptability — self-directed, resourceful under pressure.", primaryScore: 4 },
      { id: "D", text: "Tell the teacher the change is unfair and that the original drama should be kept.", indicator: "Shows resistance to change — expresses frustration rather than adapting.", primaryScore: 1 },
    ],
  },
  {
    id: "L4-68-Q10",
    model: "scenario-likert",
    primaryCompetency: "digital-literacy",
    hiddenCompetencies: ["Communication Skills", "Decision Making", "Discipline & Responsibility", "Leadership", "Teamwork & Collaboration"],
    questionNumber: 10,
    scenario:
      "You are doing research for a school project on climate change. You find a very convincing article online that says global warming is a myth created by scientists to get more funding. The article has many numbers and graphs. A classmate shares it in the group saying it is very useful. Your teacher has asked you to use reliable sources.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Check the website name and author, then search for the same information on government or science websites.", indicator: "Shows critical digital literacy — cross-checks before trusting a source.", primaryScore: 5 },
      { id: "B", text: "Use the article since it has graphs and numbers — that makes it look accurate.", indicator: "Shows surface-level evaluation — judges credibility by appearance.", primaryScore: 1 },
      { id: "C", text: "Ignore the article and only use the textbook your teacher gave.", indicator: "Shows safe but limited information behaviour — avoids online risks entirely.", primaryScore: 3 },
      { id: "D", text: "Reply in the group pointing out that the article seems unreliable and share a better source.", indicator: "Shows digital citizenship — actively corrects misinformation in the group.", primaryScore: 5 },
    ],
  },
  {
    id: "L4-68-Q11",
    model: "scenario-likert",
    primaryCompetency: "entrepreneurship",
    hiddenCompetencies: ["Creativity", "Communication Skills", "Decision Making", "Innovation", "Leadership"],
    questionNumber: 11,
    scenario:
      "Your school is hosting a 'Student Startup Fair' where students can display their business ideas. You have always wanted to start something related to food. You notice that many students bring lunch from home but often trade or share snacks during breaks. You think there might be a business idea here.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Design a plan for a 'healthy snack exchange' service where students can swap home-cooked items and pay a small fee.", indicator: "Shows entrepreneurial thinking — identifies a gap and creates a model to fill it.", primaryScore: 4 },
      { id: "B", text: "Participate in the fair but choose a safer idea you have heard about before, like selling bookmarks.", indicator: "Shows risk aversion — participates but chooses safe, familiar ideas.", primaryScore: 2 },
      { id: "C", text: "Talk to at least 10 classmates about what snacks they wish they could get at school before deciding.", indicator: "Shows market research mindset — validates ideas before committing.", primaryScore: 5 },
      { id: "D", text: "Join a friend's startup idea instead of starting your own to avoid the risk.", indicator: "Shows collaboration preference — avoids solo venture risk.", primaryScore: 2 },
    ],
  },
  {
    id: "L4-68-Q12",
    model: "scenario-likert",
    primaryCompetency: "presentation",
    hiddenCompetencies: ["Adaptability", "Leadership", "Decision Making", "Communication Skills", "Discipline & Responsibility"],
    questionNumber: 12,
    scenario:
      "You are selected to present your school's environmental club report at the morning assembly in front of 400 students and teachers. You prepared well, but on the day of the presentation, the microphone stops working halfway through your speech. Students in the back cannot hear you. Some start talking. The principal is watching.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Signal to the back rows to move closer, raise your voice, and continue your speech confidently.", indicator: "Shows confident public speaking — adapts on the spot and stays in control.", primaryScore: 5 },
      { id: "B", text: "Pause and wait for someone to fix the microphone before continuing.", indicator: "Shows dependence on tools — calm but passive under pressure.", primaryScore: 3 },
      { id: "C", text: "Ask the principal or teacher to end the presentation and reschedule it.", indicator: "Shows avoidance — chooses comfort over completing the task.", primaryScore: 1 },
      { id: "D", text: "Speak only to the students in front and quickly wrap up so you can sit down.", indicator: "Shows reduced confidence — minimises the experience to escape pressure.", primaryScore: 2 },
    ],
  },
  {
    id: "L4-68-Q13",
    model: "scenario-likert",
    primaryCompetency: "communication",
    hiddenCompetencies: ["Teamwork & Collaboration", "Leadership", "Adaptability", "Discipline & Responsibility"],
    questionNumber: 13,
    scenario:
      "Your class has a new student who joined from another city and speaks a different language at home. During a group activity, this student tries to explain an idea but has difficulty expressing it in English. A few classmates start laughing. The student looks embarrassed and stops talking.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Encourage the student to continue and help translate or rephrase their idea for the group.", indicator: "Shows inclusive communication — actively bridges language barriers in real time.", primaryScore: 5 },
      { id: "B", text: "Tell the classmates who laughed that it was not funny and ask them to stop.", indicator: "Shows social courage — confronts inappropriate behaviour to protect others.", primaryScore: 5 },
      { id: "C", text: "Move the discussion along and give the student a written task instead so they feel included.", indicator: "Shows practical inclusion — adapts the task so everyone can participate.", primaryScore: 4 },
      { id: "D", text: "Quietly tell the student after class that they did well and that they should not feel bad.", indicator: "Shows private empathy — supportive but only after the moment passes.", primaryScore: 3 },
    ],
  },
  {
    id: "L4-68-Q14",
    model: "scenario-likert",
    primaryCompetency: "leadership",
    hiddenCompetencies: ["Decision Making", "Teamwork & Collaboration", "Communication Skills", "Creativity", "Discipline & Responsibility"],
    questionNumber: 14,
    scenario:
      "You are the head of your school's environment club. The club needs to plan an event for World Environment Day. Three members want to organise a tree-planting drive, two members want to do an awareness poster campaign, and one member has not shared any idea. You have two weeks to plan and execute the event.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Combine the ideas — organise the tree-planting event and create posters to publicise it.", indicator: "Shows integrative leadership — synthesises multiple ideas creatively.", primaryScore: 4 },
      { id: "B", text: "Go with the tree-planting idea since the majority support it.", indicator: "Shows majority-rule leadership — efficient but may sideline minority voices.", primaryScore: 3 },
      { id: "C", text: "Ask the quiet member to speak first, then make the final decision yourself.", indicator: "Shows inclusive leadership — ensures everyone's voice is heard.", primaryScore: 4 },
      { id: "D", text: "Divide the club into two subgroups — one plants trees, the other does posters — and run both.", indicator: "Shows organisational leadership — expands the club's output by doing both.", primaryScore: 5 },
    ],
  },
  {
    id: "L4-68-Q15",
    model: "scenario-likert",
    primaryCompetency: "teamwork",
    hiddenCompetencies: ["Leadership", "Communication Skills", "Decision Making", "Adaptability", "Discipline & Responsibility"],
    questionNumber: 15,
    scenario:
      "You are part of a five-person team preparing for an inter-school quiz competition. Two members are very knowledgeable but keep disagreeing with each other. One person barely speaks. You and another teammate feel stuck in the middle. The competition is in four days and you have not finalised your strategy yet.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Set up a team meeting, create a structure where each person covers one subject area, and stop the arguments.", indicator: "Shows team facilitation — organises the team around tasks to reduce conflict.", primaryScore: 5 },
      { id: "B", text: "Stay out of the conflict — let the two knowledgeable members figure it out themselves.", indicator: "Shows passive collaboration — avoids conflict but does not resolve it.", primaryScore: 1 },
      { id: "C", text: "Talk to each member separately to understand their concerns and then bring everyone together.", indicator: "Shows mediating empathy — addresses individuals before the group.", primaryScore: 5 },
      { id: "D", text: "Focus only on your own assigned topics and let others handle the team dynamics.", indicator: "Shows individual focus — prioritises personal contribution over team health.", primaryScore: 2 },
    ],
  },
  {
    id: "L4-68-Q16",
    model: "scenario-likert",
    primaryCompetency: "creativity",
    hiddenCompetencies: ["Innovation", "Adaptability", "Communication Skills", "Decision Making"],
    questionNumber: 16,
    scenario:
      "Your art teacher gives the class a free period with the instruction: 'Create something that shows what your city means to you.' You have white paper, pencils, and watercolour paints. Most students start drawing buildings or landmarks. You feel that the usual approach is too ordinary and want to do something that stands out.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Draw the city from the perspective of a bird flying above it — showing both the crowded streets and green areas.", indicator: "Shows perspective-shifting creativity — changes the viewing angle to create originality.", primaryScore: 4 },
      { id: "B", text: "Draw a split image — one half showing how the city looks today, the other how you want it to look in 20 years.", indicator: "Shows vision-driven creativity — uses contrast to express ideas about change.", primaryScore: 5 },
      { id: "C", text: "Create a simple but neat painting of your favourite street in the city.", indicator: "Shows conventional creativity — careful, personal, and well-executed but familiar.", primaryScore: 2 },
      { id: "D", text: "Use watercolour to blend the city skyline into a silhouette inside the shape of the city's name.", indicator: "Shows typographic-visual creativity — merges text and image in an original form.", primaryScore: 5 },
    ],
  },
  {
    id: "L4-68-Q17",
    model: "scenario-likert",
    primaryCompetency: "innovation",
    hiddenCompetencies: ["Entrepreneurship", "Leadership", "Teamwork & Collaboration", "Communication Skills", "Decision Making"],
    questionNumber: 17,
    scenario:
      "Your school recently started giving students reusable water bottles, but many students forget them at home and end up buying plastic bottles. You notice this problem every day. There are no rules against plastic, but the school wants to reduce waste. You think you can do something about this without waiting for the school to change its rules.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Design a simple 'borrow a bottle' system where students can take a spare bottle from a rack and return it at the end of the day.", indicator: "Shows systems-level innovation — creates a practical, self-sustaining solution.", primaryScore: 5 },
      { id: "B", text: "Write a letter to the principal proposing a school rule against single-use plastic bottles.", indicator: "Shows policy-level thinking — seeks structural change through the right channel.", primaryScore: 4 },
      { id: "C", text: "Make awareness posters about plastic waste and put them up near water stations.", indicator: "Shows awareness-led change — uses communication to influence behaviour.", primaryScore: 3 },
      { id: "D", text: "Talk to your classmates and ask them to remind each other to bring their bottles.", indicator: "Shows peer-influence strategy — relies on social networks to create habit change.", primaryScore: 3 },
    ],
  },
  {
    id: "L4-68-Q18",
    model: "scenario-likert",
    primaryCompetency: "decision-making",
    hiddenCompetencies: ["Discipline & Responsibility", "Communication Skills", "Leadership", "Teamwork & Collaboration"],
    questionNumber: 18,
    scenario:
      "Your school trip to a science museum is tomorrow. Your best friend calls you tonight and says they are not feeling well and might not come. They ask you to cover for them with the teacher and say they are on the bus even if they are not, because they do not want to miss their name in the attendance and lose marks. You want to help your friend.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Tell your friend you cannot lie to the teacher, but offer to explain their situation honestly if needed.", indicator: "Shows ethical loyalty — supports the friend honestly without crossing a line.", primaryScore: 5 },
      { id: "B", text: "Cover for them this once — it is a small thing and your friend really needs help.", indicator: "Shows blind loyalty — prioritises friendship over personal integrity.", primaryScore: 1 },
      { id: "C", text: "Suggest your friend inform the teacher themselves — a genuine reason will not get them in trouble.", indicator: "Shows responsible guidance — empowers the friend to do the right thing.", primaryScore: 5 },
      { id: "D", text: "Stay silent during attendance and avoid answering for your friend either way.", indicator: "Shows passive neutrality — avoids the dilemma without resolving it.", primaryScore: 2 },
    ],
  },
  {
    id: "L4-68-Q19",
    model: "scenario-likert",
    primaryCompetency: "time-management",
    hiddenCompetencies: ["Decision Making", "Discipline & Responsibility", "Adaptability", "Communication Skills"],
    questionNumber: 19,
    scenario:
      "It is Sunday. You have a science project due on Tuesday, a test in social studies on Monday, and your cousin's birthday lunch is this afternoon. Your mother says you must go for the lunch. You have done some studying for the test, but the project needs at least four more hours of work. It is 10 AM now.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Study for two hours before lunch, attend the lunch, and finish the project in the evening after returning home.", indicator: "Shows balanced time management — plans around fixed commitments efficiently.", primaryScore: 5 },
      { id: "B", text: "Skip studying today, enjoy the lunch, and wake up early tomorrow morning to cover everything.", indicator: "Shows delay optimism — relies on last-minute recovery rather than planning.", primaryScore: 2 },
      { id: "C", text: "Ask your mother if you can come back early from the lunch so you can work on the project.", indicator: "Shows negotiation and flexibility — adjusts social commitments to meet academic needs.", primaryScore: 4 },
      { id: "D", text: "Tell your mother you cannot attend the lunch because your studies must come first.", indicator: "Shows academic prioritisation — strict but may affect family relationships unnecessarily.", primaryScore: 3 },
    ],
  },
  {
    id: "L4-68-Q20",
    model: "scenario-likert",
    primaryCompetency: "discipline",
    hiddenCompetencies: ["Leadership", "Decision Making", "Communication Skills", "Adaptability"],
    questionNumber: 20,
    scenario:
      "During a school trip, your group visits a famous historical monument. The guide explains that touching or sitting on the old structures is strictly prohibited. Your friends start climbing on a low wall for a group photo. They ask you to join. Other tourists are watching. The security guard is not nearby at that moment.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Refuse to climb, tell your friends the rule, and suggest taking a photo in front of the wall instead.", indicator: "Shows civic responsibility and peer influence — respects rules and redirects others.", primaryScore: 5 },
      { id: "B", text: "Climb quickly for the photo — the rule seems a bit excessive for a low wall.", indicator: "Shows peer conformity — rationalises rule-breaking for social belonging.", primaryScore: 1 },
      { id: "C", text: "Stay back, watch them, and alert them if the guard is coming.", indicator: "Shows passive participation — helps indirectly but does not follow the rule either.", primaryScore: 2 },
      { id: "D", text: "Walk away and let them make their own choice — it is not your responsibility.", indicator: "Shows disengagement — avoids confrontation at the cost of responsibility.", primaryScore: 2 },
    ],
  },
  {
    id: "L4-68-Q21",
    model: "scenario-likert",
    primaryCompetency: "adaptability",
    hiddenCompetencies: ["Decision Making", "Communication Skills", "Creativity", "Discipline & Responsibility"],
    questionNumber: 21,
    scenario:
      "You have been preparing for the school debate competition for three weeks. Your topic was 'Technology is making students lazy.' Two days before the competition, the teacher changes the topic to 'Students should have shorter school hours.' Your old arguments no longer apply. The competition is a big deal and you had high hopes.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Spend the evening quickly researching the new topic and rewrite your main points from scratch.", indicator: "Shows full adaptability — immediately pivots and rebuilds from a new foundation.", primaryScore: 4 },
      { id: "B", text: "Talk to the teacher and request to keep the original topic at least for this round.", indicator: "Shows advocacy — uses communication to push back on unfair changes.", primaryScore: 3 },
      { id: "C", text: "Look for any points from your old preparation that can be connected to the new topic and build from there.", indicator: "Shows resourceful adaptability — salvages and repurposes existing preparation.", primaryScore: 5 },
      { id: "D", text: "Ask to withdraw from the competition — two days is not enough time to prepare well.", indicator: "Shows self-protective withdrawal — avoids risk of performing poorly.", primaryScore: 1 },
    ],
  },
  {
    id: "L4-68-Q22",
    model: "scenario-likert",
    primaryCompetency: "digital-literacy",
    hiddenCompetencies: ["Decision Making", "Communication Skills", "Discipline & Responsibility", "Leadership"],
    questionNumber: 22,
    scenario:
      "You receive a message on your school WhatsApp group from an unknown number. The message says: 'Urgent! School is closed tomorrow due to a government order. Share this message with all students.' The message has the school logo on it. None of your teachers have confirmed this. You check and school is not on the official holiday list.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Ignore the message and check the school website or call the school office to confirm.", indicator: "Shows verified digital behaviour — goes to official source before acting.", primaryScore: 5 },
      { id: "B", text: "Forward it to your friends — it has the logo and could be real.", indicator: "Shows uncritical forwarding — spreads unverified information due to visual cues.", primaryScore: 1 },
      { id: "C", text: "Post in the group asking others if anyone has confirmed this with a teacher.", indicator: "Shows crowd-sourcing tendency — seeks peer validation before verifying officially.", primaryScore: 3 },
      { id: "D", text: "Call the class teacher directly to ask if the message is genuine.", indicator: "Shows direct verification — contacts the right authority immediately.", primaryScore: 5 },
    ],
  },
  {
    id: "L4-68-Q23",
    model: "scenario-likert",
    primaryCompetency: "creativity",
    hiddenCompetencies: ["Communication Skills", "Innovation", "Adaptability", "Decision Making"],
    questionNumber: 23,
    scenario:
      "Your English teacher asks the class to write a short story about 'a journey'. Most students write about a family trip or a road journey. You want your story to stand out but you also want it to be meaningful, not just unusual for the sake of being different.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Write about a journey inside a raindrop — from a cloud to the sea — told from the raindrop's perspective.", indicator: "Shows imaginative creativity — uses a non-human, scientific perspective to tell a story.", primaryScore: 5 },
      { id: "B", text: "Write about a journey from being nervous on the first day of school to feeling confident by the end of the year.", indicator: "Shows emotionally grounded creativity — draws from lived experience with depth.", primaryScore: 4 },
      { id: "C", text: "Write a story about a family road trip with an unexpected event that changes something for the characters.", indicator: "Shows narrative creativity — works within the familiar but adds surprise.", primaryScore: 3 },
      { id: "D", text: "Write about a journey backwards in time, imagining what your city looked like 100 years ago.", indicator: "Shows historical creativity — blends imagination with research.", primaryScore: 5 },
    ],
  },
  {
    id: "L4-68-Q24",
    model: "scenario-likert",
    primaryCompetency: "innovation",
    hiddenCompetencies: ["Leadership", "Teamwork & Collaboration", "Communication Skills", "Entrepreneurship", "Decision Making"],
    questionNumber: 24,
    scenario:
      "Your school library is quiet most of the time except during free periods when it becomes very crowded. During crowded times, books are returned to the wrong shelves, students cannot find what they need, and the librarian gets overwhelmed. You observe this every week and think of a way to improve the system without adding more staff.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Suggest to the librarian a colour-coded sticker system so students can return books to the correct section easily.", indicator: "Shows systems innovation — creates a self-sustaining structural solution.", primaryScore: 5 },
      { id: "B", text: "Volunteer yourself and two friends to help organise books during free periods as a regular routine.", indicator: "Shows volunteer-driven problem solving — takes personal responsibility for the issue.", primaryScore: 3 },
      { id: "C", text: "Create a simple sign near the entrance explaining how to return books correctly.", indicator: "Shows communication-based innovation — uses information design to guide behaviour.", primaryScore: 3 },
      { id: "D", text: "Propose a student library committee that manages the space and helps the librarian during busy times.", indicator: "Shows organisational innovation — builds a student-led governance structure.", primaryScore: 5 },
    ],
  },
  {
    id: "L4-68-Q25",
    model: "scenario-likert",
    primaryCompetency: "decision-making",
    hiddenCompetencies: ["Discipline & Responsibility", "Digital Literacy", "Leadership", "Communication Skills"],
    questionNumber: 25,
    scenario:
      "You are in the computer lab working on an assignment. You accidentally open a folder and find what looks like next week's exam question paper. Your teacher is not in the room at that moment. No one else saw what you opened. The questions are clearly visible on screen.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Close it immediately without reading further and tell the teacher or school office what happened.", indicator: "Shows ethical decision-making — prioritises integrity and transparency.", primaryScore: 5 },
      { id: "B", text: "Quickly read the questions to get an idea, then close it — you worked hard and this helps.", indicator: "Shows rationalised dishonesty — uses effort as justification for an unfair advantage.", primaryScore: 1 },
      { id: "C", text: "Close it and say nothing — you did not ask for it and did not do anything wrong.", indicator: "Shows passive integrity — avoids using it but also avoids responsibility.", primaryScore: 3 },
      { id: "D", text: "Take a screenshot and decide later whether to use it or delete it.", indicator: "Shows delayed ethical judgement — defers the decision rather than making it now.", primaryScore: 2 },
    ],
  },
  {
    id: "L4-68-Q26",
    model: "scenario-likert",
    primaryCompetency: "teamwork",
    hiddenCompetencies: ["Leadership", "Communication Skills", "Decision Making", "Adaptability", "Discipline & Responsibility"],
    questionNumber: 26,
    scenario:
      "Your class is put into groups to create a short documentary video about your school. Your group has one person who is good with video editing, one who writes well, one who is great on camera, and one who keeps forgetting what they agreed to do. You are the fifth member. The submission is in one week.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Take on a coordinating role — send reminders, track progress, and make sure everyone's work connects.", indicator: "Shows coordination leadership — takes a glue role to hold the team together.", primaryScore: 5 },
      { id: "B", text: "Focus entirely on your own assigned task and trust others to do theirs.", indicator: "Shows task-focused collaboration — reliable but not proactive about team dynamics.", primaryScore: 2 },
      { id: "C", text: "Quietly take over the forgetful member's tasks yourself to avoid delays.", indicator: "Shows quiet responsibility — prevents failure but may cause resentment.", primaryScore: 3 },
      { id: "D", text: "Discuss with the group to reassign that person to a simpler task that requires less follow-up.", indicator: "Shows constructive team management — addresses the root issue with group awareness.", primaryScore: 4 },
    ],
  },
  {
    id: "L4-68-Q27",
    model: "scenario-likert",
    primaryCompetency: "communication",
    hiddenCompetencies: ["Decision Making", "Discipline & Responsibility", "Leadership", "Teamwork & Collaboration"],
    questionNumber: 27,
    scenario:
      "You disagree with the answer your teacher gave in class about a history event. You read about it in two different books last night and both say something different from what the teacher said. The teacher is very senior and the rest of the class is not questioning the answer. You are not 100% sure you are right, but you believe the books might be.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Raise your hand politely and share what you read, mentioning the books and asking the teacher to clarify.", indicator: "Shows confident, respectful communication — questions ideas, not the person.", primaryScore: 5 },
      { id: "B", text: "Stay quiet in class but talk to the teacher privately after class to share what you found.", indicator: "Shows diplomatic communication — raises the issue without public confrontation.", primaryScore: 4 },
      { id: "C", text: "Accept what the teacher said — they have more experience and are probably right.", indicator: "Shows deference — avoids conflict by accepting authority without critical evaluation.", primaryScore: 1 },
      { id: "D", text: "Ask a classmate to check the same books and bring it up as a group question.", indicator: "Shows collaborative advocacy — builds peer support before raising a concern.", primaryScore: 4 },
    ],
  },
  {
    id: "L4-68-Q28",
    model: "scenario-likert",
    primaryCompetency: "leadership",
    hiddenCompetencies: ["Discipline & Responsibility", "Teamwork & Collaboration", "Decision Making", "Communication Skills"],
    questionNumber: 28,
    scenario:
      "Your class has been asked to contribute to a charity event to support flood-affected families in a nearby district. The teacher asks for a volunteer to organise the class donation effort. No one raises their hand. The teacher says whoever volunteers will miss one period but will be responsible for collecting and recording all donations.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Volunteer immediately — this is a good cause and the responsibility sounds manageable.", indicator: "Shows initiative leadership — steps up without hesitation for a cause.", primaryScore: 4 },
      { id: "B", text: "Volunteer but ask for one more person to help share the work.", indicator: "Shows practical leadership — accepts responsibility while building support.", primaryScore: 5 },
      { id: "C", text: "Wait to see if anyone else volunteers first before deciding.", indicator: "Shows cautious followership — will engage but prefers someone else to go first.", primaryScore: 2 },
      { id: "D", text: "Suggest that the class monitor should do it since it is their job.", indicator: "Shows role-deflection — avoids personal responsibility by assigning it to a role.", primaryScore: 1 },
    ],
  },
  {
    id: "L4-68-Q29",
    model: "scenario-likert",
    primaryCompetency: "time-management",
    hiddenCompetencies: ["Decision Making", "Discipline & Responsibility", "Adaptability", "Communication Skills"],
    questionNumber: 29,
    scenario:
      "You have an important maths test tomorrow. Tonight, your school's cricket team — which you are part of — has a practice session from 5 to 7 PM that the coach says is mandatory. After practice, you will have about two hours before bedtime. You struggle with one chapter that is likely to be in the test.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Attend practice, come home, and spend both hours only on the difficult chapter.", indicator: "Shows clear prioritisation — balances both commitments by focusing tightly after.", primaryScore: 4 },
      { id: "B", text: "Attend practice but ask the coach during a break if you can leave 20 minutes early to get more study time.", indicator: "Shows negotiation and time-seeking — uses communication to gain extra preparation time.", primaryScore: 4 },
      { id: "C", text: "Skip practice — the test is more important and the coach will understand.", indicator: "Shows academic-first decision — drops one commitment for another without consultation.", primaryScore: 2 },
      { id: "D", text: "Revise the easy chapters before practice and tackle the difficult chapter after — even if briefly.", indicator: "Shows split strategy — covers something before and after to reduce pressure.", primaryScore: 5 },
    ],
  },
  {
    id: "L4-68-Q30",
    model: "scenario-likert",
    primaryCompetency: "discipline",
    hiddenCompetencies: ["Decision Making", "Communication Skills", "Leadership"],
    questionNumber: 30,
    scenario:
      "Your teacher handed back test papers and you notice that your maths teacher gave you 5 extra marks by mistake. Your actual score should be 72, but the paper shows 77. The teacher has already recorded the marks. Getting 77 will help your overall grade this term. No one else knows about the error.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Tell the teacher about the mistake and ask them to correct it.", indicator: "Shows strong personal integrity — voluntarily gives up an advantage to do right.", primaryScore: 5 },
      { id: "B", text: "Keep quiet — mistakes happen and it is not your fault the teacher made an error.", indicator: "Shows passive dishonesty — rationalises keeping the benefit through blame-shifting.", primaryScore: 1 },
      { id: "C", text: "Think about it for a day or two before deciding whether to tell the teacher.", indicator: "Shows ethical uncertainty — procrastinates on an integrity decision.", primaryScore: 2 },
      { id: "D", text: "Tell a close friend about it and see what they think you should do.", indicator: "Shows dependence on peer judgement — avoids making an ethical decision alone.", primaryScore: 2 },
    ],
  },
  {
    id: "L4-68-Q31",
    model: "scenario-likert",
    primaryCompetency: "creativity",
    hiddenCompetencies: ["Communication Skills", "Innovation", "Digital Literacy", "Teamwork & Collaboration"],
    questionNumber: 31,
    scenario:
      "Your social studies teacher gives the class a project: 'Show how your neighbourhood has changed over the last 20 years.' Most students are planning to make a poster or write a report. You want to present this in a format that will genuinely engage the class and make people think differently about their area.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Interview two older residents in the area and create a small photo-story combining their words with old and new photos.", indicator: "Shows research-driven creativity — combines community engagement with storytelling.", primaryScore: 5 },
      { id: "B", text: "Make a timeline showing the changes decade by decade with illustrations.", indicator: "Shows structured creativity — uses a visual format to organise information clearly.", primaryScore: 3 },
      { id: "C", text: "Create a 'then and now' split poster for 5 key places in the neighbourhood.", indicator: "Shows comparative creativity — uses contrast to highlight change simply and visually.", primaryScore: 3 },
      { id: "D", text: "Write a short story narrated by a tree that has 'seen' the neighbourhood change over time.", indicator: "Shows narrative creativity — uses an imaginative voice to make history personal.", primaryScore: 5 },
    ],
  },
  {
    id: "L4-68-Q32",
    model: "scenario-likert",
    primaryCompetency: "entrepreneurship",
    hiddenCompetencies: ["Decision Making", "Innovation", "Leadership", "Communication Skills", "Adaptability"],
    questionNumber: 32,
    scenario:
      "You and a friend notice that many students in your school forget to bring stationery like rulers, erasers, and pencils. The school canteen only sells food. You realise that if someone sold basic stationery items in school, students would buy them. Your friend suggests starting a small stationery shop inside school during breaks.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Agree to try it — figure out the starting cost, items to sell, where to source them, and when to operate.", indicator: "Shows entrepreneurial action — jumps into planning with structured thinking.", primaryScore: 4 },
      { id: "B", text: "Be interested but first check if the school allows students to sell things and what the rules are.", indicator: "Shows compliant entrepreneurship — validates legal and institutional ground first.", primaryScore: 5 },
      { id: "C", text: "Think it is a great idea but suggest asking an adult — a parent or teacher — to actually set it up.", indicator: "Shows dependent entrepreneurship — supports the idea but offloads execution risk.", primaryScore: 2 },
      { id: "D", text: "Feel it is too risky — what if you buy stock and no one buys? You could lose money.", indicator: "Shows risk aversion — lets fear of failure stop the venture before it begins.", primaryScore: 1 },
    ],
  },
  {
    id: "L4-68-Q33",
    model: "scenario-likert",
    primaryCompetency: "teamwork",
    hiddenCompetencies: ["Leadership", "Decision Making", "Communication Skills", "Adaptability", "Discipline & Responsibility"],
    questionNumber: 33,
    scenario:
      "During a group project on sustainable cities, your group is presenting tomorrow. The night before, your team realises one important section — transport systems — was never researched because everyone thought someone else was doing it. The section counts for a big part of the marks. You have the evening left.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Immediately split the transport section among all members — each person covers one aspect in 30 minutes.", indicator: "Shows collective problem-solving — distributes the crisis fairly and acts fast.", primaryScore: 5 },
      { id: "B", text: "Research and write the transport section yourself since you feel responsible for not catching this earlier.", indicator: "Shows individual responsibility under pressure — takes ownership to save the group.", primaryScore: 3 },
      { id: "C", text: "Decide to skip the transport section and present what you have, mentioning the gap to the teacher.", indicator: "Shows honest transparency — accepts the gap rather than producing rushed content.", primaryScore: 2 },
      { id: "D", text: "Suggest the team stay on a video call together while everyone researches their part simultaneously.", indicator: "Shows collaborative urgency — builds team momentum in a coordinated crisis response.", primaryScore: 5 },
    ],
  },
  {
    id: "L4-68-Q34",
    model: "scenario-likert",
    primaryCompetency: "communication",
    hiddenCompetencies: ["Leadership", "Adaptability", "Decision Making", "Discipline & Responsibility"],
    questionNumber: 34,
    scenario:
      "Your younger brother is upset because he failed a test and feels like he is not smart. He is in 4th standard and is refusing to study. Your parents are busy. He comes to you, crying. You know he is actually a good student who just had a bad day. He needs to prepare for another test next week.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Sit with him, listen to how he feels, and then gently explain that one test does not define how smart he is.", indicator: "Shows empathetic communication — validates feelings before offering perspective.", primaryScore: 5 },
      { id: "B", text: "Tell him to stop crying and start studying — the next test is coming.", indicator: "Shows direct communication — task-focused but emotionally dismissive.", primaryScore: 2 },
      { id: "C", text: "Share a time when you failed something and how you got through it.", indicator: "Shows relational communication — uses personal story to connect and reassure.", primaryScore: 4 },
      { id: "D", text: "Help him revise for next week's test right away to build his confidence through action.", indicator: "Shows action-based support — uses progress to rebuild confidence.", primaryScore: 4 },
    ],
  },
  {
    id: "L4-68-Q35",
    model: "scenario-likert",
    primaryCompetency: "leadership",
    hiddenCompetencies: ["Communication Skills", "Decision Making", "Digital Literacy", "Teamwork & Collaboration", "Discipline & Responsibility"],
    questionNumber: 35,
    scenario:
      "Your class teacher informs you that you have been selected as class representative for the school student council. One of your first tasks is to gather student feedback on what improvements they want in the school canteen. Some students want healthy food options, others want cheaper prices, and a few want more variety. You need to present a recommendation to the principal next Friday.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Create a simple Google Form or paper survey to collect feedback from all students and summarise the top three requests.", indicator: "Shows systematic representative leadership — gathers inclusive, data-driven feedback.", primaryScore: 5 },
      { id: "B", text: "Talk to five or six students from different classes to get a quick idea and present their views.", indicator: "Shows informal sampling leadership — fast but may miss important voices.", primaryScore: 3 },
      { id: "C", text: "Present only the ideas that most of your close friends suggested since you know them well.", indicator: "Shows biased representation — prioritises social comfort over fair advocacy.", primaryScore: 1 },
      { id: "D", text: "Organise a short open discussion during lunch where students can share ideas directly with you.", indicator: "Shows democratic engagement — creates open dialogue for direct participation.", primaryScore: 4 },
    ],
  },
];