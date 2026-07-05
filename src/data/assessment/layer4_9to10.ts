// =============================================================================
// Layer 4 — Behavioural Leadership / Situational Judgment Assessment | Grade 9–10
// 35 scenario-based questions across 12 competency domains.
// Source: Layer3_Cognitive_Assessment_50Q_6-8th.pdf companion —
//         "Situational Judgment Assessment | Grades 9–10" document.
// Unlike the 6–8 version, this SJT asks the student to pick the SINGLE option
// that best describes what they would do (not a ranked behavioural checklist),
// but each option still carries a primary-competency score (1–5) and a rich
// set of hidden competencies, scored identically to the 6–8 model.
// =============================================================================

import type { CompetencyMeta, ScenarioQuestion } from "../../types/assessment.type";

export const layer4Grade9to10Competencies: CompetencyMeta[] = [
  { id: "communication", label: "Communication Skills", questionCount: 4, maxScore: 20 },
  { id: "innovation", label: "Innovation", questionCount: 3, maxScore: 15 },
  { id: "leadership", label: "Leadership", questionCount: 4, maxScore: 20 },
  { id: "decision-making", label: "Decision Making", questionCount: 3, maxScore: 15 },
  { id: "teamwork", label: "Teamwork & Collaboration", questionCount: 4, maxScore: 20 },
  { id: "time-management", label: "Time Management", questionCount: 3, maxScore: 15 },
  { id: "creativity", label: "Creativity", questionCount: 4, maxScore: 20 },
  { id: "discipline", label: "Discipline & Responsibility", questionCount: 3, maxScore: 15 },
  { id: "adaptability", label: "Adaptability", questionCount: 2, maxScore: 10 },
  { id: "entrepreneurship", label: "Entrepreneurship", questionCount: 2, maxScore: 10 },
  { id: "digital-literacy", label: "Digital Literacy", questionCount: 2, maxScore: 10 },
  { id: "presentation", label: "Presentation & Public Speaking", questionCount: 1, maxScore: 5 },
];

export const layer4Grade9to10Questions: ScenarioQuestion[] = [
  {
    id: "L4-910-Q01",
    model: "scenario-likert",
    primaryCompetency: "communication",
    hiddenCompetencies: ["Leadership", "Responsibility", "Initiative", "Emotional Regulation", "Collaboration", "Planning", "Influence"],
    questionNumber: 1,
    scenario:
      "You are the student editor of your school's annual magazine. Two weeks before the submission deadline, your co-editor sends you a message saying she is overwhelmed with board exam preparation and cannot contribute to the final editing. Three junior students who volunteered to write articles have submitted their drafts — each draft needs significant improvement. A sponsor has also emailed asking for a preview of the magazine content before they confirm their funding. You have exactly four days to respond to everyone and keep the project moving forward.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Respond to the sponsor first with a confident update, then personally rewrite all three drafts to the required standard before the deadline.", indicator: "Action-oriented, self-reliant communicator who prioritises external stakeholders but may overlook team development.", primaryScore: 3 },
      { id: "B", text: "Call a quick meeting with the three junior writers, give them specific, kind feedback on each draft, and ask them to revise. Reply to the sponsor with a realistic but positive timeline update.", indicator: "Empathic communicator who balances relationships, accountability, and transparency under pressure.", primaryScore: 5 },
      { id: "C", text: "Ask a teacher-advisor to take over communication with the sponsor, focus entirely on editing the drafts yourself, and check in with your co-editor later.", indicator: "Delegation-focused, avoids difficult conversations, may underuse available resources.", primaryScore: 2 },
      { id: "D", text: "Send a group message to all volunteers with a shared editing checklist, divide responsibilities based on each person's strength, and update the sponsor once the team confirms revised timelines.", indicator: "Systematic communicator who distributes responsibility and maintains stakeholder trust through structured updates.", primaryScore: 4 },
    ],
  },
  {
    id: "L4-910-Q02",
    model: "scenario-likert",
    primaryCompetency: "communication",
    hiddenCompetencies: ["Integrity", "Critical Thinking", "Emotional Regulation", "Adaptability", "Resilience", "Ethical Reasoning", "Confidence"],
    questionNumber: 2,
    scenario:
      "During your school's inter-house science debate, your team is presenting a case for renewable energy adoption. Midway through your teammate's argument, a judge interrupts and says: 'Your data seems outdated. The IEA released new figures last month that contradict your point.' The audience goes quiet. Your teammate freezes and looks at you. You did read a recent article that partially supports your teammate's position, but you are not certain it directly addresses the judge's specific concern. You have approximately ten seconds to decide what to do.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Confidently cite the article you read, framing it as a direct response to the judge's concern, and continue the presentation.", indicator: "High confidence but risks integrity by overstating certainty; prioritises performance over accuracy.", primaryScore: 2 },
      { id: "B", text: "Acknowledge the judge's point respectfully, state that your team will verify the specific figures, and pivot to a stronger supporting argument you are fully confident about.", indicator: "Combines intellectual honesty with composure; redirects effectively without damaging credibility.", primaryScore: 5 },
      { id: "C", text: "Stay silent and allow your teammate to recover, giving them time to respond on their own.", indicator: "Conflict-avoidant under pressure; prioritises teammate autonomy but lacks proactive communication.", primaryScore: 2 },
      { id: "D", text: "Ask the judge to clarify which IEA data point they are referring to, then address it once you have more context.", indicator: "Analytical and precise; seeks clarification before committing, which is effective but may seem defensive.", primaryScore: 4 },
    ],
  },
  {
    id: "L4-910-Q03",
    model: "scenario-likert",
    primaryCompetency: "communication",
    hiddenCompetencies: ["Courage", "Integrity", "Initiative", "Critical Thinking", "Creativity", "Influence", "Self-Management"],
    questionNumber: 3,
    scenario:
      "You have been selected to represent your school at a regional youth summit. You are asked to give a three-minute speech on the theme: 'What one change would improve education in your city?' You have one evening to prepare. You know the audience includes school principals, government officials, and approximately 200 students. You have strong opinions about the lack of mental health support in schools, but you are worried this topic might be seen as too personal or controversial. Another student has already announced they will speak about digital classrooms.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Choose a safer, more widely accepted topic — such as improving library facilities — to avoid controversy and ensure a confident delivery.", indicator: "Risk-averse communicator who prioritises comfort over impact; may underperform in high-stakes settings.", primaryScore: 2 },
      { id: "B", text: "Speak about mental health support, using local research, personal observations (not personal disclosures), and a specific actionable recommendation to make it credible and constructive.", indicator: "Principled and purposeful communicator who balances authenticity with professional credibility.", primaryScore: 5 },
      { id: "C", text: "Change your topic to digital classrooms as well, since you have one evening and can build on the other student's research.", indicator: "Adaptive but lacks originality; follows rather than leads in competitive situations.", primaryScore: 2 },
      { id: "D", text: "Speak about mental health but frame it entirely through statistics and policy language to reduce emotional risk and appear more professional.", indicator: "Analytical framing is a strength but avoids emotional resonance, which limits audience connection.", primaryScore: 3 },
    ],
  },
  {
    id: "L4-910-Q04",
    model: "scenario-likert",
    primaryCompetency: "communication",
    hiddenCompetencies: ["Conflict Resolution", "Emotional Regulation", "Leadership", "Courage", "Collaboration", "Accountability", "Influence"],
    questionNumber: 4,
    scenario:
      "Your group project on climate solutions has been going well, but you have noticed that one member, Aryan, consistently interrupts others during team meetings and has taken credit for two ideas that were originally suggested by quieter members of the group. The teacher has not noticed. The rest of the team is frustrated but no one has said anything. A final group presentation is in five days. You are not the official group leader.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Speak privately with Aryan before the next meeting, describe what you have observed specifically, and ask if he is aware of how his behaviour is affecting the group.", indicator: "Direct but sensitive approach; shows interpersonal courage and respect for the individual.", primaryScore: 5 },
      { id: "B", text: "Bring up the issue in the next team meeting so the whole group can address it together and establish clearer communication norms.", indicator: "Collaborative but higher-risk; may embarrass Aryan and increase tension close to the deadline.", primaryScore: 3 },
      { id: "C", text: "Redesign the meeting format to include structured speaking turns and a shared idea-log, so the problem is solved without a direct confrontation.", indicator: "Structurally creative solution; avoids confrontation by changing the system rather than the person.", primaryScore: 4 },
      { id: "D", text: "Focus on the presentation outcome and manage the dynamics by quietly ensuring quieter members have visible roles in the final presentation.", indicator: "Pragmatic outcome focus; avoids conflict but does not resolve the underlying dynamic.", primaryScore: 3 },
    ],
  },
  {
    id: "L4-910-Q05",
    model: "scenario-likert",
    primaryCompetency: "leadership",
    hiddenCompetencies: ["Decision Making", "Conflict Resolution", "Critical Thinking", "Teamwork", "Adaptability", "Resilience", "Planning"],
    questionNumber: 5,
    scenario:
      "You are the student president of your school's robotics club. Your team of six has been working for three months on a robot for the state championship. Two days before the competition, your robot's sensor system fails during a practice run. One member, Priya, believes the problem is in the software code. Another member, Daniel, is convinced the sensors themselves are defective. Both are skilled, but they are now arguing and the rest of the team is unsure who to listen to. You have approximately eighteen hours before you need to leave for the competition.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Make an executive decision based on your own technical judgment, assign the fix to one person, and have the rest of the team prepare other aspects of the competition entry.", indicator: "Decisive and action-oriented leader; may dismiss valid perspectives under pressure.", primaryScore: 3 },
      { id: "B", text: "Divide the team into two parallel groups — one testing the software hypothesis, one testing the hardware hypothesis — with a one-hour checkpoint to compare findings.", indicator: "Strategic leader who uses parallel processing to manage uncertainty and time constraints effectively.", primaryScore: 5 },
      { id: "C", text: "Ask Priya and Daniel to spend 30 minutes together testing both theories collaboratively before anyone starts fixing anything.", indicator: "Collaborative facilitator who values consensus but risks losing time to interpersonal dynamics.", primaryScore: 4 },
      { id: "D", text: "Contact your faculty advisor immediately and ask them to make the technical call so the team can move forward without further conflict.", indicator: "Defers authority under pressure; avoids conflict but reduces team ownership of the outcome.", primaryScore: 2 },
    ],
  },
  {
    id: "L4-910-Q06",
    model: "scenario-likert",
    primaryCompetency: "leadership",
    hiddenCompetencies: ["Integrity", "Conflict Resolution", "Emotional Regulation", "Accountability", "Influence", "Communication", "Planning"],
    questionNumber: 6,
    scenario:
      "You are organising your school's annual social entrepreneurship fair. You have a team of eight students. Three weeks before the event, you discover that two of your most capable team members have secretly been working on a competing project for another school event happening the same week. They have not told you directly, but a third member informed you. The two members are popular and well-liked; confronting them could affect team morale. The event requires their specific skills.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Meet privately with the two members, share what you know, ask for transparency, and negotiate a realistic commitment they can actually honour for your event.", indicator: "Principled and direct leader who addresses issues transparently while respecting individual dignity.", primaryScore: 5 },
      { id: "B", text: "Redistribute their responsibilities to other team members without confronting them directly, so the event is not affected regardless of what they decide.", indicator: "Risk-mitigating approach that protects the event outcome but avoids accountability and may breed resentment.", primaryScore: 3 },
      { id: "C", text: "Call a full team meeting and make it clear that divided commitments are not acceptable, without naming the two members specifically.", indicator: "Indirect confrontation that may create anxiety without resolution; avoids specificity.", primaryScore: 2 },
      { id: "D", text: "Speak with your faculty supervisor, explain the situation, and ask for guidance on how to handle it professionally.", indicator: "Appropriate use of authority structures; may be seen as escalating rather than resolving at the peer level.", primaryScore: 3 },
    ],
  },
  {
    id: "L4-910-Q07",
    model: "scenario-likert",
    primaryCompetency: "leadership",
    hiddenCompetencies: ["Ethical Reasoning", "Stakeholder Awareness", "Decision Making", "Inclusivity", "Critical Thinking", "Influence", "Accountability"],
    questionNumber: 7,
    scenario:
      "Your school council has been given a budget of ₹50,000 to spend on one student initiative. Four proposals have been submitted: a mental health awareness week, a new sports equipment set, a school garden, and a digital learning lab. You are the council president. A survey shows students prefer sports equipment (42%), but a smaller group of students with learning disabilities strongly advocates for the digital lab. Teachers recommend the mental health week. The principal has not expressed a preference.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Go with the student survey majority — sports equipment — since the council's role is to represent the student body's expressed preferences.", indicator: "Democratic approach but may overlook minority needs and long-term impact considerations.", primaryScore: 3 },
      { id: "B", text: "Organise a follow-up structured discussion that includes student representatives from each interest group, then make a decision that balances impact, inclusivity, and evidence.", indicator: "Inclusive, evidence-based leadership that weighs multiple perspectives before committing.", primaryScore: 5 },
      { id: "C", text: "Follow the teachers' recommendation for the mental health week, since adults have more experience identifying what students need.", indicator: "Deference to authority; avoids leadership responsibility by relying on teacher recommendation.", primaryScore: 2 },
      { id: "D", text: "Propose splitting the budget to fund two smaller versions of the top two proposals to satisfy the largest number of stakeholders.", indicator: "Compromise-seeking but may result in two underfunded initiatives with limited impact.", primaryScore: 3 },
    ],
  },
  {
    id: "L4-910-Q08",
    model: "scenario-likert",
    primaryCompetency: "leadership",
    hiddenCompetencies: ["Emotional Intelligence", "Accountability", "Fairness", "Recognition", "Motivation", "Resilience", "Self-Management"],
    questionNumber: 8,
    scenario:
      "You have led a school volunteer team for a community clean-up drive for the past three weeks. The project has gone well, but you have noticed that one team member, Sofia, has been doing significantly more work than others without receiving any recognition. Meanwhile, two other members have consistently arrived late and contributed minimally. The final community report must list all team members equally, as it is a school requirement. Sofia has not complained, but you can see she is becoming disengaged.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Speak privately with Sofia to acknowledge her effort specifically and personally, and address the two underperforming members separately about your observations.", indicator: "Direct, fair leadership that addresses both recognition and accountability at the individual level.", primaryScore: 5 },
      { id: "B", text: "At the final team meeting, publicly highlight specific contributions from all members to create a culture of recognition, without calling out the underperformers directly.", indicator: "Positive reinforcement approach; strengthens culture but may not address underperformance.", primaryScore: 4 },
      { id: "C", text: "Write individual notes of appreciation to all members but make Sofia's note significantly more specific and meaningful, so the recognition is personal without being public.", indicator: "Thoughtful private recognition; respects Sofia's dignity and avoids public embarrassment.", primaryScore: 4 },
      { id: "D", text: "Focus entirely on completing the project report to the highest standard, since that is the measurable outcome, and address team dynamics in the next project.", indicator: "Outcome-focused avoidance; neglects relational dynamics that affect long-term team performance.", primaryScore: 2 },
    ],
  },
  {
    id: "L4-910-Q09",
    model: "scenario-likert",
    primaryCompetency: "teamwork",
    hiddenCompetencies: ["Decision Making", "Creativity", "Critical Thinking", "Initiative", "Conflict Resolution", "Planning", "Innovation"],
    questionNumber: 9,
    scenario:
      "Your school has entered a national innovation challenge. Your team of five has ten days to develop a prototype solution for urban food waste. On day three, you realize the team has split into two unofficial camps: those who want to build a technology-based app solution, and those who prefer a community-based non-tech approach. Both ideas have genuine merit. The competition judges will evaluate innovation, feasibility, and social impact. No single person is formally in charge.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Suggest that the team votes on one direction so you can stop discussing and start building within the time constraint.", indicator: "Efficiency-focused; respects time constraints but may force premature closure on a rich discussion.", primaryScore: 2 },
      { id: "B", text: "Propose mapping out both ideas against the judging criteria in a shared document, then deciding together which approach scores higher across all three criteria.", indicator: "Structured collaboration; uses objective criteria to depersonalise the debate and make a principled choice.", primaryScore: 5 },
      { id: "C", text: "Take personal initiative to research what has won similar competitions recently, share your findings with the group, and let the data guide the decision.", indicator: "Research-driven initiative; adds external evidence but may not fully honour the team's original thinking.", primaryScore: 4 },
      { id: "D", text: "Suggest combining the strongest elements of both ideas into a hybrid solution that integrates technology with community engagement.", indicator: "Integrative thinking; synthesises competing perspectives, though hybrid solutions risk being underdeveloped.", primaryScore: 4 },
    ],
  },
  {
    id: "L4-910-Q10",
    model: "scenario-likert",
    primaryCompetency: "teamwork",
    hiddenCompetencies: ["Communication", "Emotional Intelligence", "Accountability", "Integrity", "Collaboration", "Conflict Resolution", "Courage"],
    questionNumber: 10,
    scenario:
      "You are part of a four-member team preparing a research presentation on cybersecurity for your school's tech symposium. Three days before the event, one member, James, submits his section and it is significantly weaker than the rest of the team's work — poorly structured and full of factual errors. If his section goes in as-is, it will lower the overall quality of the presentation. James worked hard on it and seems proud of his contribution. The team has not yet reviewed it together.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Quietly rewrite James's section yourself before the group review so it matches the standard, without telling him.", indicator: "Protective of outcome but bypasses James's growth opportunity and risks resentment if discovered.", primaryScore: 2 },
      { id: "B", text: "Send James detailed written feedback on his section before the group review, framing it as your personal observations and asking for his thoughts.", indicator: "Empathic and direct; gives James agency to improve while maintaining respectful communication.", primaryScore: 5 },
      { id: "C", text: "Raise the quality issue during the group review meeting so the team can collectively provide feedback, making it a shared standard rather than a personal critique.", indicator: "Collaborative accountability; normalises quality expectations within the team context.", primaryScore: 4 },
      { id: "D", text: "Ask your teacher-supervisor to review all sections and provide feedback, so quality concerns are addressed by an authority figure rather than between peers.", indicator: "Avoids peer conflict by escalating; may damage James's confidence and team trust.", primaryScore: 2 },
    ],
  },
  {
    id: "L4-910-Q11",
    model: "scenario-likert",
    primaryCompetency: "teamwork",
    hiddenCompetencies: ["Inclusivity", "Planning", "Emotional Intelligence", "Leadership", "Motivation", "Accountability", "Communication"],
    questionNumber: 11,
    scenario:
      "Your school has assigned you to a group project with four students you have never worked with. Within the first meeting, you notice that two members are clearly high-performing and motivated, one member is quiet and unsure of their role, and one member has openly said they find the topic boring. The project requires equal contribution and will be peer-evaluated. You have three weeks.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Divide tasks based purely on individual interest and stated strengths, accepting that the unmotivated member will contribute less.", indicator: "Pragmatic but accepts unequal contribution; may create tension during peer evaluation.", primaryScore: 2 },
      { id: "B", text: "Design a project structure where each member has a specific, non-overlapping role with visible deliverables, including a role that is genuinely suited to the quieter member's strengths.", indicator: "Structural approach to inclusion; proactively designs roles that support engagement.", primaryScore: 4 },
      { id: "C", text: "Have a brief, honest team conversation at the start about expectations, individual concerns, and what each person hopes to contribute before assigning any tasks.", indicator: "Relationship-first approach; builds psychological safety before assigning tasks.", primaryScore: 5 },
      { id: "D", text: "Focus your energy on producing high-quality output with the two motivated members, and allow the others to find their natural level of contribution.", indicator: "Meritocratic efficiency; may marginalise less motivated members and reduce team cohesion.", primaryScore: 2 },
    ],
  },
  {
    id: "L4-910-Q12",
    model: "scenario-likert",
    primaryCompetency: "teamwork",
    hiddenCompetencies: ["Conflict Resolution", "Fairness", "Leadership", "Negotiation", "Emotional Intelligence", "Initiative", "Planning"],
    questionNumber: 12,
    scenario:
      "Your team is halfway through a community impact project when you discover that another team in your school is working on almost the identical idea — also targeting food security in your neighbourhood. Both teams have invested significant effort. A teacher suggests that the two teams consider merging. Your team is resistant because they feel their idea is more developed. The other team is open to merging but wants equal recognition. You have been asked by the teacher to facilitate a discussion between the two teams.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Facilitate the meeting by first having each team present their work independently, then identify specific areas of overlap and unique strengths before discussing any merger structure.", indicator: "Structured facilitator who builds consensus through evidence before negotiating structure.", primaryScore: 5 },
      { id: "B", text: "Propose a merger immediately, suggesting a shared leadership model with equal recognition, to demonstrate willingness to collaborate.", indicator: "Collaborative and generous; may move too fast without understanding both teams' concerns.", primaryScore: 3 },
      { id: "C", text: "Advise your team to agree to the merger only if you retain editorial control over the final project direction, since your team's idea is more developed.", indicator: "Protects team interest but may create an unequal partnership that breeds resentment.", primaryScore: 2 },
      { id: "D", text: "Recommend that both teams remain independent but formally share research data and avoid duplication of effort, preserving each team's identity.", indicator: "Pragmatic compromise that preserves autonomy; may result in ongoing duplication despite intent.", primaryScore: 3 },
    ],
  },
  {
    id: "L4-910-Q13",
    model: "scenario-likert",
    primaryCompetency: "creativity",
    hiddenCompetencies: ["Innovation", "Initiative", "Audience Awareness", "Collaboration", "Planning", "Influence", "Engagement Design"],
    questionNumber: 13,
    scenario:
      "Your school has been asked to create a campaign that raises awareness about water conservation among students aged 10–14. Your committee has a budget of ₹5,000, two weeks, and access to the school's social media accounts, notice boards, and one school assembly slot. A previous campaign three years ago used posters and a quiz competition. The teacher in charge says the committee is free to try anything new, as the old approach had very low engagement.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Design a challenge where student teams compete to reduce their classroom's water usage over one week, with live leaderboard results displayed in the school corridor.", indicator: "Behavioural design approach; uses competition and real data to drive measurable engagement.", primaryScore: 4 },
      { id: "B", text: "Produce a short documentary-style video series featuring real students and teachers discussing their personal relationship with water, shared on the school's social media platforms.", indicator: "Narrative creativity; builds emotional connection through authentic personal stories.", primaryScore: 4 },
      { id: "C", text: "Create an interactive story — posted daily on school notice boards — where students vote on decisions a character makes about water use, with consequences revealed the following day.", indicator: "Interactive storytelling; uses suspense and participation to sustain engagement over time.", primaryScore: 5 },
      { id: "D", text: "Organise a Water Innovation Pitchfest where student teams present one original idea for saving water in the school, judged by a panel that includes a student, a teacher, and an outside expert.", indicator: "Entrepreneurial creativity; empowers students as solution-creators rather than passive recipients.", primaryScore: 5 },
    ],
  },
  {
    id: "L4-910-Q14",
    model: "scenario-likert",
    primaryCompetency: "creativity",
    hiddenCompetencies: ["Empathy", "Adaptability", "Communication", "Innovation", "Critical Thinking", "Pedagogy Awareness", "Resourcefulness"],
    questionNumber: 14,
    scenario:
      "You have been given an unusual school assignment: design something that teaches a concept from any subject to a student who has never attended school and cannot read. You have one week, no budget, and no technology. You can use any materials available at home or in your classroom. The only requirement is that the person must genuinely understand the concept after your session without any written material.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Design a physical game using household objects that simulates the concept through play, so the learner understands through experience rather than explanation.", indicator: "Experiential designer who prioritises learning through doing; strong creativity and play instinct.", primaryScore: 5 },
      { id: "B", text: "Use storytelling — a detailed narrative where the concept appears naturally as part of the story's events — so the learner absorbs it without realising they are being taught.", indicator: "Narrative thinker; uses indirect instruction through story, which builds conceptual understanding subtly.", primaryScore: 4 },
      { id: "C", text: "Create a series of three short demonstrations using real-world objects, with each demonstration slightly more complex than the previous, building understanding incrementally.", indicator: "Sequential instructor; structures complexity progressively to avoid cognitive overload.", primaryScore: 4 },
      { id: "D", text: "Ask the learner questions about what they already know from daily life, then connect the concept directly to those existing experiences without introducing any new vocabulary.", indicator: "Constructivist approach; builds new knowledge on existing understanding, highly effective for novices.", primaryScore: 5 },
    ],
  },
  {
    id: "L4-910-Q15",
    model: "scenario-likert",
    primaryCompetency: "creativity",
    hiddenCompetencies: ["Risk Assessment", "Stakeholder Management", "Initiative", "Leadership", "Innovation", "Planning", "Courage"],
    questionNumber: 15,
    scenario:
      "Your school's annual cultural event has always followed the same format: dance performances, a few skits, and a singing competition. This year, you have been elected cultural secretary and are expected to organise the event. Three senior students have told you, separately, that the event feels repetitive and that student participation has dropped each year. Your teacher-advisor expects a well-organised event and says: 'Don't take unnecessary risks.'",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Keep the core format but add one genuinely new element — such as a spoken word competition or a live collaborative mural — to reduce risk while introducing fresh energy.", indicator: "Incremental innovator; introduces change within safe boundaries, balancing tradition and novelty.", primaryScore: 4 },
      { id: "B", text: "Completely reimagine the format as an immersive, student-designed experience where every element is created and curated by students across different grades.", indicator: "Bold reimaginer; prioritises transformation but may face institutional resistance.", primaryScore: 4 },
      { id: "C", text: "Conduct a student poll first to understand what people actually want, then design the event around the top three preferences — balancing innovation with audience demand.", indicator: "Data-driven creative; uses audience insight to guide innovation, reducing risk of misjudgment.", primaryScore: 5 },
      { id: "D", text: "Propose two formats to the teacher: a safe, traditional version and a bold reimagined version, and ask the teacher to choose based on their risk tolerance.", indicator: "Consultative approach; shares decision-making with authority, which avoids overstepping but may reduce ownership.", primaryScore: 3 },
    ],
  },
  {
    id: "L4-910-Q16",
    model: "scenario-likert",
    primaryCompetency: "creativity",
    hiddenCompetencies: ["Initiative", "Ethical Reasoning", "Critical Thinking", "Collaboration", "Evidence-Based Thinking", "Courage", "Innovation"],
    questionNumber: 16,
    scenario:
      "You are part of a team competing in a national design-thinking challenge. The brief asks teams to 'design a solution to reduce loneliness among elderly people in urban areas.' Your team has two days to develop and present a prototype. Three team members want to build a mobile app. You believe a technology-first approach might actually miss the real problem — loneliness is an emotional need, and elderly people in your city have limited smartphone access. You have data to support your concern.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Go with the app idea since three people support it and it is more feasible to prototype quickly within two days.", indicator: "Pragmatic conformist; prioritises speed and group harmony over problem quality.", primaryScore: 2 },
      { id: "B", text: "Present your data to the team, propose a non-tech alternative (such as a community matching programme), and ask the team to spend 30 minutes comparing both approaches before deciding.", indicator: "Evidence-led challenger; uses data to reframe the problem without dismissing the team's effort.", primaryScore: 5 },
      { id: "C", text: "Suggest designing a solution that has both a tech and a non-tech component, so the team's effort is not wasted and the problem is addressed more comprehensively.", indicator: "Integrative designer; expands the solution space but risks diluting the core insight.", primaryScore: 4 },
      { id: "D", text: "Design your own alternative prototype independently and present both solutions to the team, letting the quality of the ideas speak for themselves.", indicator: "Independent creative; demonstrates conviction but bypasses collaborative process.", primaryScore: 3 },
    ],
  },
  {
    id: "L4-910-Q17",
    model: "scenario-likert",
    primaryCompetency: "innovation",
    hiddenCompetencies: ["Systems Thinking", "Data Literacy", "Social Impact Awareness", "Creativity", "Stakeholder Collaboration", "Planning", "Initiative"],
    questionNumber: 17,
    scenario:
      "Your school is participating in a national student innovation award. The theme is: 'Use technology to solve a real problem in your school.' Your team has noticed that the school canteen wastes significant amounts of food daily, because they cook fixed quantities regardless of how many students actually attend that day. The canteen manager is open to suggestions. You have three weeks to develop a working solution.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Design a simple daily attendance-prediction model using historical attendance data, then work with the canteen manager to adjust cooking quantities based on weekly attendance patterns.", indicator: "Predictive and data-driven; tackles root cause using existing data, low implementation cost.", primaryScore: 4 },
      { id: "B", text: "Build a student pre-order system — using a basic Google Form or app — where students register their lunch choice in the morning so the canteen prepares only what is confirmed.", indicator: "Demand-side intervention; changes user behaviour to reduce supply-side waste, highly practical.", primaryScore: 5 },
      { id: "C", text: "Create a real-time digital waste-tracking dashboard that records daily waste quantities, identifies peak waste days, and displays data publicly to encourage canteen accountability.", indicator: "Transparency-based accountability; uses public data to drive behavioural change in the system.", primaryScore: 4 },
      { id: "D", text: "Design a surplus food redistribution system that connects leftover canteen food with a local charity, reducing waste impact while creating a social good benefit.", indicator: "Impact-extension approach; accepts waste but maximises social value, creative reframing of the problem.", primaryScore: 4 },
    ],
  },
  {
    id: "L4-910-Q18",
    model: "scenario-likert",
    primaryCompetency: "innovation",
    hiddenCompetencies: ["Courage", "Authenticity", "Empathy", "Innovation Framing", "Audience Awareness", "Critical Thinking", "Integrity"],
    questionNumber: 18,
    scenario:
      "You have been selected for a prestigious two-week youth innovation programme. On day one, participants are given this challenge: 'Identify one problem in your city that nobody is currently solving, and propose an original solution by Friday.' Other participants are pitching polished ideas about traffic apps, recycling platforms, and language-learning tools. You have noticed a problem that feels less glamorous but affects more people: elderly residents in your neighbourhood cannot easily navigate government paperwork for pensions and medical benefits. Most of them give up and go without support.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Pitch the elderly paperwork navigation problem, using specific local data you have observed, and propose a peer-volunteer programme where trained students assist elderly residents monthly.", indicator: "Human-centred innovator with genuine empathy; chooses impact over impressiveness.", primaryScore: 5 },
      { id: "B", text: "Pitch a more technology-visible idea — like the recycling platform — since it will appear more innovative to evaluators at a tech-focused programme.", indicator: "Audience-pleasing approach; compromises authenticity to appear more competitive.", primaryScore: 1 },
      { id: "C", text: "Pitch the elderly problem but reframe it as a tech solution: an AI-assisted form-filling chatbot, to make it feel more appropriate for the programme's innovation focus.", indicator: "Strategic reframing; adapts the problem to fit the context while retaining the original insight.", primaryScore: 4 },
      { id: "D", text: "Ask your assigned mentor whether a low-tech community-based solution would be considered 'innovative enough' before committing to your pitch direction.", indicator: "Seeks permission rather than conviction; appropriate caution but may signal low confidence.", primaryScore: 2 },
    ],
  },
  {
    id: "L4-910-Q19",
    model: "scenario-likert",
    primaryCompetency: "innovation",
    hiddenCompetencies: ["Resourcefulness", "Creative Repurposing", "Community Building", "Planning", "Systems Thinking", "Initiative", "Audience Awareness"],
    questionNumber: 19,
    scenario:
      "Your school library has declining usage — most students use their phones for research and do not visit the physical space. The librarian is frustrated and has asked student council to suggest one idea to revitalise the library within a limited budget. The library has empty shelf space, a large reading area, reliable Wi-Fi, and a 3D printer that was donated but has never been used.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Transform the library into a multi-use 'maker space' in the afternoons — using the 3D printer as the anchor — where students can work on projects, access design tools, and collaborate.", indicator: "Maker-culture innovator; repurposes unused assets to create hands-on learning experiences.", primaryScore: 5 },
      { id: "B", text: "Launch a student-curated section where different classes recommend books, display their reviews, and host monthly 'reading conversations' during lunch breaks.", indicator: "Community-building approach; uses peer social proof to create genuine literary culture.", primaryScore: 4 },
      { id: "C", text: "Partner with local professionals to run short evening skills sessions in the library space — coding, public speaking, basic finance — making it a learning hub beyond academics.", indicator: "External partnership model; brings new value into the school community through professional engagement.", primaryScore: 4 },
      { id: "D", text: "Create a digital catalogue and reservation system for library resources, combined with a social media presence, to make library access feel modern and easy.", indicator: "Digital transformation; improves access and visibility but may not increase physical engagement.", primaryScore: 3 },
    ],
  },
  {
    id: "L4-910-Q20",
    model: "scenario-likert",
    primaryCompetency: "decision-making",
    hiddenCompetencies: ["Emotional Intelligence", "Self-Management", "Empathy", "Integrity", "Prioritisation", "Resilience", "Communication"],
    questionNumber: 20,
    scenario:
      "You are three days away from your school's final selection exam for a national science olympiad. You have prepared thoroughly. The night before your final revision, a close friend calls you in distress — she has just had a serious argument with her parents and is very upset. She asks you to come over and spend the evening with her. You know she genuinely needs support. You also know that missing tonight's revision will significantly affect your performance tomorrow.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Go to your friend immediately — the olympiad is important, but a friend in genuine distress takes priority.", indicator: "Relationship-first decision; sacrifices personal goal for social responsibility.", primaryScore: 3 },
      { id: "B", text: "Call your friend, listen carefully for 30 minutes, help her calm down, then explain honestly that you need the rest of the evening to study — and check in on her the next morning.", indicator: "Balanced decision that honours both the relationship and personal responsibility; high emotional maturity.", primaryScore: 5 },
      { id: "C", text: "Ask another mutual friend who does not have an exam to go be with her tonight, so she has support and you can continue your preparation.", indicator: "Practical problem-solving with creative delegation; ensures friend has support without self-sacrifice.", primaryScore: 4 },
      { id: "D", text: "Tell your friend you cannot come tonight and encourage her to call a parent or another trusted person, then message her later in the evening to check how she is.", indicator: "Self-prioritising but provides minimal emotional support; friend may feel dismissed.", primaryScore: 2 },
    ],
  },
  {
    id: "L4-910-Q21",
    model: "scenario-likert",
    primaryCompetency: "decision-making",
    hiddenCompetencies: ["Crisis Management", "Adaptability", "Communication", "Problem Solving", "Resilience", "Leadership", "Planning"],
    questionNumber: 21,
    scenario:
      "You are the lead coordinator of your school's fundraising event. One hour before the event starts, the sound system breaks down. The technician says it will take at least two hours to repair. 200 guests are expected. The programme includes speeches, musical performances, and prize distribution. You have a portable Bluetooth speaker that can cover a small area, but not the full venue. Cancelling is not an option — the principal has already sent invitations to parents and community members.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Immediately reorganise the programme sequence: move all activities that do not require sound to the beginning, buy time for the technician to complete the repair.", indicator: "Time-buying sequencer; uses programme flexibility to manage the problem without guest awareness.", primaryScore: 4 },
      { id: "B", text: "Use the portable speaker and reconfigure the seating arrangement so guests sit in a smaller, more intimate cluster close to the speaker.", indicator: "Spatial redesign; creative use of constraints to make the available resource sufficient.", primaryScore: 3 },
      { id: "C", text: "Announce the technical difficulty to guests as they arrive, apologise sincerely, and ask for patience — transparency will likely generate more goodwill than pretending nothing is wrong.", indicator: "Transparent communicator; builds trust through honesty but may create negative first impression.", primaryScore: 4 },
      { id: "D", text: "Contact two or three nearby schools immediately to borrow a sound system, while continuing the non-sound portions of the programme to keep guests engaged.", indicator: "Resource mobiliser; solves the root problem rather than managing around it.", primaryScore: 5 },
    ],
  },
  {
    id: "L4-910-Q22",
    model: "scenario-likert",
    primaryCompetency: "decision-making",
    hiddenCompetencies: ["Integrity", "Ethical Reasoning", "Critical Thinking", "Courage", "Accountability", "Collaboration", "Academic Honesty"],
    questionNumber: 22,
    scenario:
      "You are working on a group science project. While doing research, you find a study that strongly supports your team's hypothesis and would significantly strengthen your report. However, when you read more carefully, you notice the study has a serious methodological flaw that may make its conclusions unreliable. Your teammates are excited about the study and want to include it prominently. Your project submission is tomorrow.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Include the study but add a footnote acknowledging its limitations, so you use it while maintaining academic honesty.", indicator: "Compromise approach; maintains partial honesty but the flaw disclosure may not be prominent enough.", primaryScore: 3 },
      { id: "B", text: "Tell your teammates about the methodological flaw immediately, explain why including it without disclosure would weaken your report's credibility, and spend the available time finding a more reliable source.", indicator: "Principled and courageous; prioritises long-term credibility over short-term convenience.", primaryScore: 5 },
      { id: "C", text: "Include the study without mentioning the flaw — the teacher probably will not notice, and the team needs a strong conclusion.", indicator: "Integrity failure; chooses outcome over ethical responsibility — clear negative indicator.", primaryScore: 1 },
      { id: "D", text: "Remove the study from the report entirely and rewrite the conclusion to reflect what your actual evidence genuinely supports.", indicator: "Intellectually honest but potentially undermines the report's strength without exploring alternatives.", primaryScore: 4 },
    ],
  },
  {
    id: "L4-910-Q23",
    model: "scenario-likert",
    primaryCompetency: "time-management",
    hiddenCompetencies: ["Planning", "Self-Management", "Prioritisation", "Accountability", "Communication", "Resilience", "Initiative"],
    questionNumber: 23,
    scenario:
      "You have a critical week ahead: a 1,500-word history essay is due Friday, a physics test is on Thursday, and you have promised to help organise a charity bake sale on Saturday. On Monday evening, you realise you have significantly underestimated the research time required for the essay, and you are behind on your physics revision. A friend also asks you to help them prepare for the physics test together on Wednesday evening.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Spend Monday and Tuesday entirely on the essay, accept that physics revision will be compressed, and decline the study session to protect your essay submission.", indicator: "Task-focused prioritiser; makes a binary trade-off without exploring alternative scheduling.", primaryScore: 3 },
      { id: "B", text: "Map out all commitments in a written schedule for the week, identify the minimum viable time for each task, and make an informed decision about whether the Wednesday study session is possible.", indicator: "Strategic planner who maps before acting; uses visible structure to make an informed decision.", primaryScore: 5 },
      { id: "C", text: "Start with physics revision since the test is first chronologically, then do the essay, since completing tasks in deadline order feels most logical.", indicator: "Chronological planner; logical but may not reflect actual urgency or effort required.", primaryScore: 3 },
      { id: "D", text: "Ask your history teacher for a one-day extension on the essay, which would free up Wednesday for physics revision and the study session.", indicator: "Resource-seeker who proactively manages constraints; appropriately uses available options.", primaryScore: 4 },
    ],
  },
  {
    id: "L4-910-Q24",
    model: "scenario-likert",
    primaryCompetency: "time-management",
    hiddenCompetencies: ["Strategic Prioritisation", "Accountability", "Leadership", "Resilience", "Planning", "Communication", "Self-Awareness"],
    questionNumber: 24,
    scenario:
      "You are leading a four-person team on a project that requires a working prototype to be presented in twelve days. On day four, you realise the project scope is larger than originally estimated — completing everything to full quality will require at least sixteen days. You have three options: reduce the scope, increase the hours worked per day by the full team, or submit an incomplete prototype with a clearly articulated plan for what remains.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Reduce the scope immediately — identify the core features that demonstrate the project's value and build only those to full quality within the remaining time.", indicator: "Scope-management discipline; identifies core value and delivers it fully — professional best practice.", primaryScore: 5 },
      { id: "B", text: "Ask the team to increase daily working hours for the next eight days to close the gap, accepting that it will require significant personal sacrifice from everyone.", indicator: "Effort-maximiser; relies on team sacrifice rather than smart scoping; may affect quality and wellbeing.", primaryScore: 2 },
      { id: "C", text: "Submit an incomplete prototype but prepare an exceptionally detailed and compelling presentation of the full vision, making the incompleteness a deliberate choice rather than a failure.", indicator: "Narrative strategy; reframes incompleteness as a design choice, which requires exceptional presentation skill.", primaryScore: 4 },
      { id: "D", text: "Inform the project evaluator now about the scope challenge, propose a brief extension with a revised milestone plan, and ask for their input.", indicator: "Proactive escalation; transparent communication allows evaluators to participate in the solution.", primaryScore: 4 },
    ],
  },
  {
    id: "L4-910-Q25",
    model: "scenario-likert",
    primaryCompetency: "time-management",
    hiddenCompetencies: ["Self-Management", "Resilience", "Integrity", "Prioritisation", "Accountability", "Responsibility", "Consequence Acceptance"],
    questionNumber: 25,
    scenario:
      "It is 9 PM. You have a chemistry lab report due at 8 AM tomorrow that you have not started. You estimate it will take five to six hours to complete properly. You also have a school sports match at 7 AM, which you have trained for over three months, and your coach has said your attendance is essential for the team. Skipping either feels wrong. You cannot ask for an extension on the lab report.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Stay up all night, complete the lab report as well as you can, attend the sports match, and accept that one or both will be below your usual standard.", indicator: "All-in effort approach; maximises attempt but risks exhaustion reducing quality in both.", primaryScore: 3 },
      { id: "B", text: "Write the lab report for three hours tonight to cover the essential sections, attend the sports match, then complete the remaining sections immediately after the match before submission.", indicator: "Split-optimisation strategy; uses available time blocks efficiently with a recovery plan.", primaryScore: 5 },
      { id: "C", text: "Prioritise the lab report entirely tonight, miss the sports match, and send your coach an honest explanation first thing in the morning.", indicator: "Academic-first prioritisation; accepts social consequence but maintains academic accountability.", primaryScore: 4 },
      { id: "D", text: "Attend the sports match, submit whatever portion of the lab report you can complete tonight, and accept the grade penalty as a consequence of your prior planning choices.", indicator: "Consequence-owning approach; honest about the trade-off rather than pretending to manage both.", primaryScore: 3 },
    ],
  },
  {
    id: "L4-910-Q26",
    model: "scenario-likert",
    primaryCompetency: "discipline",
    hiddenCompetencies: ["Process Integrity", "Critical Thinking", "Ethical Reasoning", "Accountability", "Leadership", "Communication", "Fairness"],
    questionNumber: 26,
    scenario:
      "You are part of a student committee tasked with reviewing proposed changes to your school's uniform policy. The committee has been given two weeks to consult students and submit a recommendation. Midway through the process, a classmate starts a social media poll outside the committee's process that gets 300 student responses in 24 hours. The results heavily favour removing the uniform requirement. Several committee members now want to simply adopt the poll results as the committee's recommendation.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Adopt the social media poll results as strong student sentiment data, incorporate them into the committee's report with appropriate context and qualification.", indicator: "Pragmatic inclusion; uses available data but risks confusing informal sentiment with structured evidence.", primaryScore: 3 },
      { id: "B", text: "Proceed with the committee's original consultation process — structured focus groups and a formal survey — noting the social media poll as additional context but not as a substitute.", indicator: "Process-disciplined approach; maintains methodological rigour even under social pressure.", primaryScore: 5 },
      { id: "C", text: "Recommend that the committee expand to include more students who participated in the social media poll, so the formal process better reflects actual student views.", indicator: "Inclusive expansion; strengthens the process by bringing in wider perspectives within the formal structure.", primaryScore: 4 },
      { id: "D", text: "Present both the social media poll and the committee's structured consultation results to the school administration, letting the administration weigh both inputs.", indicator: "Transparent delegation; shares both data streams with decision-makers rather than filtering for them.", primaryScore: 3 },
    ],
  },
  {
    id: "L4-910-Q27",
    model: "scenario-likert",
    primaryCompetency: "discipline",
    hiddenCompetencies: ["Integrity", "Ethical Reasoning", "Accountability", "Fairness", "Courage", "Leadership", "Judgment Under Uncertainty"],
    questionNumber: 27,
    scenario:
      "You are the captain of your school's quiz team. The night before the district championship, a team member privately tells you that during the morning's practice round, they saw another team member — one of your best players — accidentally glance at a question paper that a teacher had left on a desk. The player did not report it. You cannot verify what was seen. The competition starts in twelve hours.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Speak privately with the player who was seen, ask them directly and calmly what happened, and let their response guide your next action.", indicator: "Direct and proportionate; seeks truth before taking action, respects individual dignity.", primaryScore: 5 },
      { id: "B", text: "Report the incident to the supervising teacher before the competition, explaining that you cannot verify what occurred but feel it should be disclosed.", indicator: "Proactive accountability; prioritises process integrity over personal comfort — high moral courage.", primaryScore: 4 },
      { id: "C", text: "Do nothing — you only have one person's account, no direct evidence, and raising it now could destroy team morale and penalise someone for an accident.", indicator: "Avoidance under uncertainty; legitimate in some contexts but risks complicity if concern is valid.", primaryScore: 2 },
      { id: "D", text: "Tell the team member who reported it to speak to the teacher themselves if they feel it is serious enough, so you are not making a decision based on secondhand information.", indicator: "Responsible redirection; avoids overstepping but may leave the witness unsupported.", primaryScore: 3 },
    ],
  },
  {
    id: "L4-910-Q28",
    model: "scenario-likert",
    primaryCompetency: "discipline",
    hiddenCompetencies: ["Integrity", "Ethical Reasoning", "Courage", "Accountability", "Leadership", "Fairness", "Conflict Resolution"],
    questionNumber: 28,
    scenario:
      "You are a prefect. You discover that a group of classmates has been sharing an unofficial set of answers to an upcoming class test — not a major exam, but a marked assessment that contributes to the term grade. The answers were leaked accidentally by a student who found them in a teacher's unattended folder. About fifteen students now have access to them. You were not part of the group but found out through a friend.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Report the situation to the class teacher immediately, explaining what you know, who told you, and what you believe happened.", indicator: "Immediate accountability; transparent and direct, though it does not give students a chance to self-correct.", primaryScore: 4 },
      { id: "B", text: "Speak to the group of students directly and encourage them not to use the answers, explaining the consequences and giving them the chance to do the right thing before you escalate.", indicator: "Empowering accountability; gives students agency to act with integrity before formal consequences.", primaryScore: 5 },
      { id: "C", text: "Anonymously inform a teacher so that the situation is addressed without identifying yourself or the specific students involved.", indicator: "Anonymous disclosure; protects self but may be seen as lacking ownership of the responsibility.", primaryScore: 3 },
      { id: "D", text: "Do nothing — the leak was accidental, and reporting it would unfairly punish students who did not seek out the answers.", indicator: "Non-intervention; rationalises inaction with fairness argument, risks complicity.", primaryScore: 1 },
    ],
  },
  {
    id: "L4-910-Q29",
    model: "scenario-likert",
    primaryCompetency: "adaptability",
    hiddenCompetencies: ["Resilience", "Self-Management", "Communication", "Critical Thinking", "Confidence", "Planning", "Flexibility"],
    questionNumber: 29,
    scenario:
      "You have spent three weeks preparing a detailed presentation on artificial intelligence in healthcare for a youth technology conference. Two hours before your presentation slot, the conference organiser informs you that the session format has changed: instead of a 15-minute prepared talk, you will now participate in a live panel discussion with two other speakers and an audience Q&A. You can still reference your research, but a prepared presentation is no longer appropriate.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Quickly identify the three strongest points from your research that would translate into strong panel discussion talking points, and prepare two or three likely audience questions with brief answers.", indicator: "Proactive adapter; converts preparation into context-appropriate format quickly and strategically.", primaryScore: 5 },
      { id: "B", text: "Ask the organiser if you can still do a shortened 5-minute overview of your prepared content before the panel discussion begins, as a compromise.", indicator: "Negotiation-seeker; attempts to preserve original format rather than fully adapting.", primaryScore: 3 },
      { id: "C", text: "Accept the format change, attend the panel without additional preparation, and rely on your research knowledge and real-time listening to contribute authentically.", indicator: "Spontaneous adapter; trusts knowledge and real-time responsiveness without re-preparation.", primaryScore: 4 },
      { id: "D", text: "Contact the organiser and explain that you prepared specifically for a presentation format and request to either maintain your original slot or defer to the next available opportunity.", indicator: "Format-dependent; struggles to reframe effort; reasonable boundary-setting but limited flexibility.", primaryScore: 2 },
    ],
  },
  {
    id: "L4-910-Q30",
    model: "scenario-likert",
    primaryCompetency: "adaptability",
    hiddenCompetencies: ["Empathy", "Self-Awareness", "Communication", "Flexibility", "Creativity", "Resilience", "Audience Awareness"],
    questionNumber: 30,
    scenario:
      "Your school has just introduced a new peer-learning programme where students in Grade 10 teach concepts to Grade 8 students once a week. You have been assigned to teach a topic you understand well. In your first session, you quickly realise that your prepared explanation is not working — the Grade 8 students look confused, one is visibly bored, and another is trying to tell you something about how they learn. You still have 25 minutes remaining in the session.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Stop mid-session, ask the students directly what they already know about the topic and what would help them understand it better, then restart with that input.", indicator: "Learner-centred adapter; pauses and co-designs the session in real time with student input.", primaryScore: 5 },
      { id: "B", text: "Pause, try a different explanation strategy using an everyday example or visual, and continue from there without asking for feedback.", indicator: "Spontaneous adjustment; demonstrates flexibility without disrupting the session's flow.", primaryScore: 4 },
      { id: "C", text: "Continue with your prepared approach — the students may simply need more time to adjust to a new explanation style.", indicator: "Inflexible persistence; trusts original plan despite clear signals that it is not working.", primaryScore: 1 },
      { id: "D", text: "End the conceptual explanation early and turn the remaining time into a Q&A, letting students ask you anything related to the topic.", indicator: "Format pivot; preserves engagement through interaction but abandons instructional goal.", primaryScore: 3 },
    ],
  },
  {
    id: "L4-910-Q31",
    model: "scenario-likert",
    primaryCompetency: "digital-literacy",
    hiddenCompetencies: ["Critical Thinking", "Integrity", "Research Skills", "Intellectual Honesty", "Adaptability", "Ethical Reasoning", "Academic Rigour"],
    questionNumber: 31,
    scenario:
      "You are researching a topic on climate migration for a school debate. You find a highly detailed, well-written article that strongly supports your argument. The article appears on a website you have never heard of. It has no author listed, no publication date, and no citations — but it looks professional and the statistics seem impressive. Three other reputable sources you found partially contradict the article's main claim. Your debate is tomorrow.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Use the article's statistics since they are the most specific data points you have found, and the writing looks credible.", indicator: "Accepts surface credibility; does not apply source verification — high digital literacy gap.", primaryScore: 1 },
      { id: "B", text: "Trace the article's specific statistics to their original source — looking for primary reports, government databases, or academic publications that either confirm or deny them.", indicator: "Rigorous fact-checker; traces claims to primary sources, highest digital literacy standard.", primaryScore: 5 },
      { id: "C", text: "Discard the article entirely and use only the three reputable sources, even if they partially contradict your argument.", indicator: "Conservative exclusion; safe approach but may be too rigid and limits evidence diversity.", primaryScore: 3 },
      { id: "D", text: "Use the three reputable sources as your primary evidence, acknowledge in your argument that some data is contested, and make your case on the strength of the reliable evidence.", indicator: "Balanced researcher; uses reliable evidence and transparently acknowledges contested data.", primaryScore: 4 },
    ],
  },
  {
    id: "L4-910-Q32",
    model: "scenario-likert",
    primaryCompetency: "digital-literacy",
    hiddenCompetencies: ["Integrity", "Ethical Reasoning", "Digital Ethics", "Accountability", "Collaboration", "Leadership", "Academic Honesty"],
    questionNumber: 32,
    scenario:
      "Your school project team uses a shared online workspace to collaborate. One evening, a team member shares a message saying: 'I found an AI tool that can write the entire analysis section for us in ten minutes. Should we use it?' Two members immediately say yes. The analysis section is the part of the project your teacher said will be weighted most heavily in the grade. Your school has a policy that says AI assistance must be declared and cannot substitute for original student thinking.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Use the AI tool but review and rewrite the output substantially enough that it reflects the team's own understanding and thinking.", indicator: "Partial compliance; attempts to add value but the line between AI and original thinking is unclear.", primaryScore: 2 },
      { id: "B", text: "Decline to use it for the analysis section and explain the school policy to your teammates, then suggest using the AI tool only for formatting or non-graded sections if allowed.", indicator: "Policy-compliant and principled; declines misuse and redirects teammates constructively.", primaryScore: 5 },
      { id: "C", text: "Use the AI tool as a starting point and declare its use in your submission as required by policy, with a note explaining how the team built on its output.", indicator: "Transparent and compliant; uses AI within the declared policy framework — appropriate digital literacy.", primaryScore: 4 },
      { id: "D", text: "Take a team vote — if the majority want to use it, agree and use it, since all team members share responsibility for the submission.", indicator: "Diffuses accountability through vote; majority rule does not resolve individual ethical responsibility.", primaryScore: 1 },
    ],
  },
  {
    id: "L4-910-Q33",
    model: "scenario-likert",
    primaryCompetency: "entrepreneurship",
    hiddenCompetencies: ["Financial Literacy", "Risk Management", "Planning", "Initiative", "Adaptability", "Accountability", "Analytical Thinking"],
    questionNumber: 33,
    scenario:
      "You have developed an idea for a school-based business: a subscription service that delivers personalised study kits — printed notes, flashcards, and a weekly study planner — to students in your school for ₹150 per month. You have already spoken to 20 students and 14 said they would buy it. You have ₹2,000 of personal savings to invest. Your school principal has given you conditional approval to pilot the idea. You have one month to test it before the principal decides whether to allow it to continue.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Launch immediately to all 14 interested students, collect the first month's subscription, and use that revenue to fund production, so you do not spend your own savings.", indicator: "Revenue-first entrepreneur; minimises personal risk but may under-deliver on quality in first run.", primaryScore: 3 },
      { id: "B", text: "Spend two weeks designing a high-quality first kit, launch a pilot with just 5 students for free, get detailed feedback, then refine and scale before collecting any money.", indicator: "Lean-start approach; prioritises learning over revenue, high product development discipline.", primaryScore: 4 },
      { id: "C", text: "Use your ₹2,000 savings to produce 14 kits at full quality, deliver to all interested students, and treat the first month as a non-refundable test of market demand.", indicator: "Full-commitment launch; high ambition but spends all capital before validating market response.", primaryScore: 2 },
      { id: "D", text: "Before spending anything, create a simple one-page business model that identifies your cost per kit, break-even point, and minimum viable margin, then decide on a launch size based on the numbers.", indicator: "Finance-first planning; uses unit economics before committing capital — most analytically mature.", primaryScore: 5 },
    ],
  },
  {
    id: "L4-910-Q34",
    model: "scenario-likert",
    primaryCompetency: "entrepreneurship",
    hiddenCompetencies: ["Strategic Thinking", "Resilience", "Innovation", "Competitive Analysis", "Collaboration", "Adaptability", "Market Awareness"],
    questionNumber: 34,
    scenario:
      "You are three weeks into selling handmade eco-friendly notebooks at your school's entrepreneurship fair when you discover that a classmate has started selling almost identical notebooks at a price that is ₹30 lower than yours. Several customers who were buying from you regularly have now switched. Your production cost does not allow you to match their price profitably. You have two weeks left in the fair.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Lower your price to match the competition, even if it means breaking even or making a small loss, to retain your customer base for the remaining two weeks.", indicator: "Price-war response; sacrifices margin to retain volume, unsustainable without cost advantage.", primaryScore: 2 },
      { id: "B", text: "Differentiate your product immediately — add a visible customisation option, an insert card explaining your sustainability sourcing, or a bundle offer — to justify your higher price.", indicator: "Value differentiation; repositions the product rather than competing on price — strategic maturity.", primaryScore: 5 },
      { id: "C", text: "Approach the competing classmate and propose a collaboration: you design, they produce, and you share the profits from a joint product line.", indicator: "Collaborative pivot; converts competition into partnership, creative but requires trust and negotiation.", primaryScore: 4 },
      { id: "D", text: "Focus your remaining effort on reaching customers your competitor has not targeted — younger students, teachers, or parents attending the fair — rather than competing for the same buyers.", indicator: "Market expansion; avoids direct competition by finding untapped customer segments.", primaryScore: 4 },
    ],
  },
  {
    id: "L4-910-Q35",
    model: "scenario-likert",
    primaryCompetency: "presentation",
    hiddenCompetencies: ["Composure Under Pressure", "Integrity", "Adaptability", "Critical Thinking", "Communication", "Confidence", "Self-Awareness"],
    questionNumber: 35,
    scenario:
      "You are presenting your team's climate solution to a panel of five judges — two scientists, one businessperson, one government official, and one student representative. Halfway through your presentation, the business judge interrupts and says: 'This is interesting academically, but I do not see how it is commercially viable. Can you give me a realistic cost estimate right now?' You do not have cost data prepared. Your teammates are watching you. The other judges are listening.",
    prompt: "What would you most likely do?",
    options: [
      { id: "A", text: "Acknowledge the gap honestly: 'We focused on the technical model in this phase; a full cost analysis is the logical next step, and here is how we would approach it.'", indicator: "Honest and composed; acknowledges limitations with a forward plan — builds credibility under pressure.", primaryScore: 5 },
      { id: "B", text: "Offer a rough estimate on the spot, even if it is approximate, to demonstrate confidence and keep the presentation momentum going.", indicator: "Confidence-forward; improvises an estimate which may backfire if challenged for specifics.", primaryScore: 3 },
      { id: "C", text: "Invite the business judge to help the team think through the cost model as a follow-up after the presentation, framing it as an opportunity rather than a gap.", indicator: "Relationship-building reframe; turns a gap into a dialogue opportunity — high sophistication.", primaryScore: 5 },
      { id: "D", text: "Redirect the question: 'The commercial model depends on the policy framework, which our next slide addresses — may I continue and then return to the cost question?'", indicator: "Strategic redirect; buys time with a legitimate bridge — effective if delivered with confidence.", primaryScore: 4 },
    ],
  },
];