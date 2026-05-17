// === SVG Icons ===
const checkIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
const xIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-500"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`;

const itPmTest1Data = [
  { section: "Questions 1 - 24", questions: [
    { id:'itpm1_1', q:"What is \"Float\" (or Slack) in CPM?", options:["The extra time a project manager has for vacation.","The amount of time a task can be delayed without delaying the project completion.","The total cost of a task.","The distance between the start and end nodes."], answer:"The amount of time a task can be delayed without delaying the project completion." },
    { id:'itpm1_2', q:"Businesses use Project Cost Management to keep track of a project's budget. This process guarantees that they spend money wisely and have the economic means to carry out a project plan. A Project Manager's ability to assess the financial sustainability of their initiatives is dependent on effective project cost management: True or False?", options:["True","False"], answer:"True" },
    { id:'itpm1_3', q:"What technique is used to adjust project activity dates to balance the demand for resources with the available supply?", options:["Resource Leveling","Crashing","Fast Tracking","Critical Path Method"], answer:"Resource Leveling" },
    { id:'itpm1_4', q:"A project manager uses a chart to show the relationship between work packages and team members, ensuring every task has an owner. This is known as a:", options:["Resource Breakdown Structure (RBS)","RACI Matrix (Responsible, Accountable, Consulted, Informed)","Resource Histogram","Project Organization Chart"], answer:"RACI Matrix (Responsible, Accountable, Consulted, Informed)" },
    { id:'itpm1_5', q:"Which technique involves a structured, independent process to determine if project activities comply with organizational and project policies and procedures?", options:["Quality Audit","Statistical Sampling","Benchmarking"], answer:"Quality Audit" },
    { id:'itpm1_6', q:"In IT-Computing Project Management, by understanding the cost component, you can prioritize resource allocation to specific components. This prioritization is important because of the limited budgets usually available for projects. To use a limited budget, you can identify all contributing costs and maximize value for every project element that receives allocation: True or False?", options:["True","False"], answer:"True" },
    { id:'itpm1_7', q:"Project Time Management is the process of planning, scheduling, and controlling project activities to ensure completion within a specified timeframe. It involves analyzing project work, creating a schedule, and implementing control procedures to stay on track and meet deadlines. This encompasses defining tasks, allocating time, monitoring progress, and making adjustments as needed: True or False?", options:["True","False"], answer:"True" },
    { id:'itpm1_8', q:"When an IT-Computing Project Manager delivers more than what was required in the project scope, this practice is known as:", options:["Scope Creep","Gold Plating","Progressive Elaboration","Scope Verification"], answer:"Gold Plating" },
    { id:'itpm1_9', q:"A project manager wants to determine if a process is stable or has predictable performance. Which tool should they use?", options:["Histogram","Control Chart","Flowchart","Metrix Diagram"], answer:"Control Chart" },
    { id:'itpm1_10', q:"Project Scope Management is needed throughout the entire lifecycle of an IT-Computing Project, specifically when defining project boundaries, managing evolving requirements, controlling \"scope creep,\" and ensuring alignment with stakeholder expectations. It is critical during the planning phase to create a scope statement and Work Breakdown Structure (WBS), and during execution to manage changes, verify deliverables, and control costs: True or False?", options:["True","False"], answer:"True" },
    { id:'itpm1_11', q:"Cost estimates for activities generally include which of the following?", options:["Labour and materials only","Equipment and services only","Labour, materials, equipment, services, and facilities","Only direct units of currency"], answer:"Labour, materials, equipment, services, and facilities" },
    { id:'itpm1_12', q:"Using different time management strategies to manage your workday can help you make sure you meet all your deadlines and complete every project on time. Typically, determining which strategies to choose to manage your work time requires that you analyze your thought process and behaviour at work. Learning about different strategies for managing your time during a project can help you work more effectively. Some effective prioritization & focus strategies are:\n\nI. Eat the Frog: A strategy where the most difficult or \"unpleasant\" task is tackled first thing in the morning.\nII. Prioritize Tasks (MoSCoW Method): Segment tasks into \"Must haves,\" \"Should haves,\" \"Could haves,\" and \"Won't haves\" to manage efforts efficiently.\nIII. 4 Ds of Time Management: A decision-making tool where you choose to Do, Defer, Delegate, or Delete any incoming task.\nIV. The 80/20 Rule (Pareto Principle): Focuses resources on the 20% of activities that generate 80% of the project's results.\nV. Use the Eisenhower Matrix: Divide tasks into four quadrants based on urgency and importance to focus on high-impact work.", options:["I, III, IV and V only","I, II, IV and V only","II, III and IV only","I, II, III, IV and V","I, II and III only"], answer:"I, II, III, IV and V" },
    { id:'itpm1_13', q:"The Cost Management Plan is a primary output of which process?", options:["Estimate Costs","Determine Budget","Control Costs","Plan Cost Management"], answer:"Plan Cost Management" },
    { id:'itpm1_14', q:"What is the purpose of \"Manage Quality\" (often called Quality Assurance)?", options:["Monitoring and recording results of quality activities to assess performance.","Identifying quality requirements and standards for the project.","Translating the quality management plan into executable quality activities that incorporate the organization's quality policies.","Physically inspecting every deliverable before it is sent to the customer."], answer:"Translating the quality management plan into executable quality activities that incorporate the organization's quality policies." },
    { id:'itpm1_15', q:"What is a \"Virtual Team\" in the context of resource management?", options:["A team that only exists in project management software","A group of people with a shared goal who fulfill their roles with little or no time spent meeting face-to-face","A team of automated bots and AI agents","A group of stakeholders who are not officially part of the project"], answer:"A group of people with a shared goal who fulfill their roles with little or no time spent meeting face-to-face" },
    { id:'itpm1_16', q:"What is the primary goal of the \"Plan Resource Management\" process?", options:["To acquire all project personnel","To define how to estimate, acquire, manage, and use physical and team resources","To create a list of specific individuals for the project team","To manage team conflicts and performance"], answer:"To define how to estimate, acquire, manage, and use physical and team resources" },
    { id:'itpm1_17', q:"If a project has multiple paths with the same maximum duration, which of the following is true?", options:["There is no critical path.","Only one path is selected as the critical path.","All of those paths are considered critical paths.","The project is impossible to complete."], answer:"All of those paths are considered critical paths." },
    { id:'itpm1_18', q:"Time Management allows you to complete a project more productively. When you learn to organize your time well, you're more likely to meet your deadlines and complete more assignments. Seven (7) main processes In Project Time Management are:\n\nI. Plan Schedule Management: Defining the rules, software, and methods used to create and control the timeline.\nII. Define Activities: Breaking down the Work Breakdown Structure (WBS) into individual, actionable tasks.\nIII. Sequence Activities: Determining the logical order and dependencies between tasks (e.g., Task A must finish before Task B starts).\nIV. Estimate Resources: Identifying the personnel, equipment, and materials needed for each activity.\nV. Estimate Activity Durations: Predicting how long each task will take using techniques like Three-Point Estimating (optimistic, pessimistic, and likely scenarios).\nVI. Develop Schedule: Compiling tasks, durations, and dependencies into a master project timeline.\nVII. Control Schedule: Continuously monitoring progress against the baseline and adjusting to stay on track.\nVIII. Distribute Time: Giving time to various teams.\nIX. Repeat Schedule: Carrying all over again activities.", options:["I, III, IV, V, VI, VII and VIII only","I, II, III, IV, VII, VIII and IX only","II, III, IV, V, VI, VII and VIII only","III, IV, V, VI, VII, VIII and IX only","I, II, III, IV, V, VI and VII only"], answer:"I, II, III, IV, V, VI and VII only" },
    { id:'itpm1_19', q:"What is the main purpose of the \"Control Scope\" process?", options:["Decomposing work packages.","Managing changes to the scope baseline to prevent scope creep.","Gathering stakeholder requirements.","Formally accepting completed deliverables."], answer:"Managing changes to the scope baseline to prevent scope creep." },
    { id:'itpm1_20', q:"Who is ultimately responsible for quality management on a project?", options:["The Quality Assurance Manager","The Project Team","The Project Manager","The Customer"], answer:"The Project Manager" },
    { id:'itpm1_21', q:"\"Student Syndrome\" in resource management refers to:", options:["High levels of enthusiasm at the start of a project","Procrastinating and only applying significant effort right before a deadline","A tendency for team members to over-research tasks","The need for constant training during the project"], answer:"Procrastinating and only applying significant effort right before a deadline" },
    { id:'itpm1_22', q:"Which type of project cost estimate is considered the most accurate?", options:["Preliminary","Order of Magnitude","Conceptual","Definitive"], answer:"Definitive" },
    { id:'itpm1_23', q:"If a project has multiple paths with the same maximum duration, which of the following is true?\n(Note: These options reflect the mismatched set shown in the quiz screenshot)", options:["There is no critical path.","The amount of time a task can be delayed without delaying the project completion.","The total cost of a task.","The distance between the start and end nodes."], answer:"The amount of time a task can be delayed without delaying the project completion." },
    { id:'itpm1_24', q:"The Work Breakdown Structure (WBS) is best described as:", options:["A list of all project activities in chronological order.","A deliverable-oriented hierarchical decomposition of the work to be executed.","A tool for assigning resources to specific tasks.","A diagram showing the critical path of the project."], answer:"A deliverable-oriented hierarchical decomposition of the work to be executed." }
  ]}
];

const itPmTest2Data = [
  { section: "Questions 1 - 23", questions: [
    { id:'itpm2_1', q:"Which document is created to define all project inclusions, exclusions, and acceptance criteria?", options:["Project Charter","Work Breakdown Structure (WBS)","Project Scope Statement","Requirements Traceability Matrix"], answer:"Project Scope Statement" },
    { id:'itpm2_2', q:"In a hybrid project, how should a manager integrate cost management across predictive and agile elements?", options:["Use only predictive techniques","Align practices with the overall project governance framework.","Create entirely separate budgets that never meet.","Use a unified agile tool for everything."], answer:"Align practices with the overall project governance framework." },
    { id:'itpm2_3', q:"What is the process of formalizing stakeholder acceptance of the completed project deliverables?", options:["Control Scope","Define Scope","Validate Scope","Quality Control"], answer:"Validate Scope" },
    { id:'itpm2_4', q:"The team members on your project have been complaining that they do not have any sense of identity as a team because they are located in different areas of the building. To remedy this situation, you developed a project logo and had it printed on T-shirts to promote the project, but this action has not worked. Your next step is to—", options:["Initiate a newsletter","Establish a project vision","Establish a team charter","Encourage problem solving"], answer:"Establish a team charter" },
    { id:'itpm2_5', q:"In IT-Computing projects, where complex software development, infrastructure deployment, and tight technical deadlines converge, effective time management is not merely a productivity tool but a fundamental determinant of success. Four Basic Project Time Management Techniques are:\n\nI. Define Activities: Identifying and listing all the tasks needed to complete the project.\nII. Sequence Activities: Determining the order in which tasks should be performed.\nIII. Estimate Activity Durations: Predicting the time required to complete each task.\nIV. Develop Schedule: Creating a timeline for project activities, incorporating estimated durations and dependencies.\nV. Calculate Cost: Paying for relaxing time when carrying out activities", options:["I, II, IV and V only","II, III, IV and V only","I, III, IV and V only","I, II, III and IV only","None of above"], answer:"I, II, III and IV only" },
    { id:'itpm2_6', q:"To assist in budget control, at which level of the Work Breakdown Structure (WBS) should an estimate be created?", options:["Highest level","Major work effort level","Lowest level (Work Package)","Third level"], answer:"Lowest level (Work Package)" },
    { id:'itpm2_7', q:"If a project has a negative Cost Variance (CV), what does this indicate?", options:["The project is ahead of schedule.","The project is over budget.","The project is under budget.","The project is behind schedule."], answer:"The project is over budget." },
    { id:'itpm2_8', q:"Which tool is used to sum the cost of each work package to form the entire project budget?", options:["Expert Judgment","Cost Aggregation","Historical Relationships","Cost of Quality"], answer:"Cost Aggregation" },
    { id:'itpm2_9', q:"The \"Resource Breakdown Structure\" (RBS) is a hierarchical breakdown of resources by:", options:["Skill level","Category and type","Cost per hour","Reporting structure"], answer:"Category and type" },
    { id:'itpm2_10', q:"The process of identifying quality requirements and/or standards for the project and its deliverables and documenting how the project will demonstrate compliance with quality requirements and/or standards is called--", options:["Plan Quality Management","Control Quality","Perform Quality Assurance","Both A & B"], answer:"Plan Quality Management" },
    { id:'itpm2_11', q:"Which of the following outputs of the Plan Quality Management is not used as an input in the Perform Quality Assurance process?", options:["Quality Management Plan","Process Improvement Plan","Quality Metrics","Quality Checklists"], answer:"Quality Checklists" },
    { id:'itpm2_12', q:"Project Cost Management is one of the key pillars of IT-Computing Project Management and is relevant regardless of the domain, be it manufacturing, retail, technology, construction and so on. It helps to create a financial baseline against which project managers can benchmark the current status of their project costs and realign the direction if needed:", options:["True","False"], answer:"True" },
    { id:'itpm2_13', q:"The Project Cost Performance Baseline is usually displayed in the form of:", options:["A Pie-chart","A Z-curve","An S-curve","An inverted S-curve"], answer:"An S-curve" },
    { id:'itpm2_14', q:"To assist in budget control, at which level of the Work Breakdown Structure (WBS) should an estimate be created?", options:["Highest level","Major work effort level","Lowest level (Work Package)","Third level"], answer:"Lowest level (Work Package)" },
    { id:'itpm2_15', q:"What is the \"Critical Path\" in a project?", options:["The path with the most tasks.","The sequence of activities that takes the shortest amount of time.","The longest sequence of dependent tasks that determines the shortest possible project duration.","The path with the most available slack time."], answer:"The longest sequence of dependent tasks that determines the shortest possible project duration." },
    { id:'itpm2_16', q:"Your organization is characterized by hierarchical organizational structures with rigid rules and policies and strict supervisory controls. Individual team members are not expected to engage in problem solving or use creative approaches to plan and execute work; management has these responsibilities. Your organization is characterized by which one of the following theories?", options:["Ouchi's Theory","McGregor's Theory X","Maslow's self-esteem level","Vroom's Expectancy Theory"], answer:"McGregor's Theory X" },
    { id:'itpm2_17', q:"Which process involves tracking team member performance, providing feedback, and managing changes to optimize project performance?", options:["Develop Team","Acquire Resources","Manage Team","Control Resources"], answer:"Manage Team" },
    { id:'itpm2_18', q:"In order to effectively manage project time, the right tools and processes must be used. Different projects may require different tools and processes for project time management, depending on various factors, such as project size, complexity, and industry. Project time management tools are software and methods used to plan, sequence, and monitor project activities to ensure they are completed on schedule. These tools range from visual scheduling charts and analytical frameworks to integrated software platforms that track hours and manage team workloads. Common tools used are:\n\nI. Gantt Charts: The most common visual tool, using horizontal\\visual bar charts to represent task durations, start/end dates, and dependencies over time.\nII. Kanban Boards: Visual cards used to track the flow of work from \"To Do\" to \"Done\".\nIII. Timesheets: Tracking software like Toggl or Clockify to measure actual time spent vs. planned estimates.\nIV. Critical Path Method (CPM): A technique to identify the longest sequence of dependent tasks; determining the minimum time needed to complete a project. any delay here directly impacts the final delivery date.\nV. PERT Charts: Used to estimate project duration by analyzing task sequences and managing uncertainty through optimistic and pessimistic timeframes.\nVI. Work Breakdown Structure (WBS): A hierarchical tool that decomposes large goals into smaller, manageable tasks for easier estimation.\nVII. All-in-One Suites: Platforms like monday.com, Asana, and Wrike integrate Gantt charts, Kanban boards, and real-time dashboards to monitor progress and resource allocation.\nVIII. Dedicated Time Trackers: Tools like Clockify, Harvest, and Toggl focus specifically on logging billable and non-billable hours to compare actual work against estimates.\nIX. Specialized Industry Tools: Jira is optimized for Agile software teams, while Microsoft Project is preferred for large-scale enterprise planning within the Microsoft ecosystem.", options:["All the above","II, III, IV, VII, VIII and IX only","I, II, III, IV, V, VI and VII only","I, III, IV, V, VI, VII and IXI only","II, III, IV, V, VI, VII and VIII only"], answer:"All the above" },
    { id:'itpm2_19', q:"In Project Management, the project scope defines the boundaries and work required for a project; — what is included and what is not; — while deliverables are the specific, tangible results produced to meet those objectives. Together, they form the foundation of a project plan, ensuring stakeholders have a shared understanding of what success looks like: True or False?", options:["True","False"], answer:"False" },
    { id:'itpm2_20', q:"A project manager's main responsibility in a project meant to create a product is —", options:["Ensuring it is high grade","To pack exciting features in the product","Ensuring it is high quality","Creating a product within allocated cost and schedule"], answer:"Ensuring it is high quality" },
    { id:'itpm2_21', q:"The Project Charter is a type of agreement that sets the goals and objectives of a project. It is used by the Project Manager, the sponsor, and the team members to define their responsibilities and roles. A Project Charter refers to the authorization given to the Project Manager to start a project. It allows them to utilize various resources such as money, technology, and people to complete the Project's objectives: True or False?", options:["True","False"], answer:"False" },
    { id:'itpm2_22', q:"Agile Methods purposefully build and review prototypes and release versions in order to refine the requirements. As a result, scope is defined and redefined throughout the Project. A key difference between an Agile approach and others is that it provides several usable products during the project, while other approaches only deliver the final product at the end of the project: True or False?", options:["True","False"], answer:"False" },
    { id:'itpm2_23', q:"A Work Breakdown Structure (WBS) is a method used to break down a Project into smaller and more manageable components. This technique helps to illustrate the scope of the Project and identify all the necessary tasks, activities, and deliverables needed for its completion: True or False?", options:["True","False"], answer:"False" }
  ]}
];

// === State ===
let answers = {};
let pendingAnswers = {};
let score = 0;
let totalAnswered = 0;
let totalQuestions = 0;
let currentQuizData = null;

// === Views Logic ===
const viewItpm = document.getElementById('view-itpm');
const viewItpmQuiz = document.getElementById('view-itpm-quiz');
const headerBar = document.getElementById('header-bar');
const headerControls = document.getElementById('header-controls');

function showView(view) {
    viewItpm.classList.add('hidden');
    viewItpmQuiz.classList.add('hidden');
    view.classList.remove('hidden');

    if (view === viewItpm) {
        headerBar.classList.add('hidden');
    } else {
        headerBar.classList.remove('hidden');
    }
}

// Start IT PM Test 1
document.getElementById('btn-itpm-test1').addEventListener('click', () => {
    showView(viewItpmQuiz);
    document.getElementById('itpm-quiz-title').textContent = "Test 1 (Questions 1 - 24)";
    renderQuiz(itPmTest1Data, 'itpm-quiz-container');
});

// Start IT PM Test 2
document.getElementById('btn-itpm-test2').addEventListener('click', () => {
    showView(viewItpmQuiz);
    document.getElementById('itpm-quiz-title').textContent = "Test 2 (Questions 1 - 23)";
    renderQuiz(itPmTest2Data, 'itpm-quiz-container');
});

// Back Buttons
document.getElementById('btn-back-itpm-from-quiz').addEventListener('click', () => showView(viewItpm));

// === Render MCQ Quiz ===
function renderQuiz(data, containerId) {
    currentQuizData = data;
    
    // reset globals
    answers = {};
    pendingAnswers = {};
    score = 0;
    totalAnswered = 0;
    totalQuestions = 0;

    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    
    let num = 1;
    data.forEach(section => {
        totalQuestions += section.questions.length;
        const sDiv = document.createElement('div');
        const h3 = document.createElement('h3');
        h3.className = "text-xl font-bold text-slate-800 border-b-2 border-emerald-500 inline-block pb-1 mb-6";
        h3.textContent = section.section;
        sDiv.appendChild(h3);
        
        const wrap = document.createElement('div');
        wrap.className = "space-y-6";
        
        section.questions.forEach(q => {
            const qDiv = document.createElement('div');
            qDiv.className = "question-block bg-white rounded-xl p-6 shadow-sm border border-slate-200";
            qDiv.dataset.qid = q.id;
            
            const p = document.createElement('p');
            p.className = "text-slate-800 mb-4 text-lg flex gap-2 whitespace-pre-wrap";
            
            // Format bullet lists to make the bullet titles bold
            const formattedQ = q.q.replace(/^([IVX]+\.\s[^:\n]+:)/gm, '<strong>$1</strong>');
            
            p.innerHTML = `<span class="text-emerald-600 font-bold">${num}.</span> <span>${formattedQ}</span>`;
            qDiv.appendChild(p);
            
            const opts = document.createElement('div');
            opts.className = "space-y-3";
            q.options.forEach(option => {
                const btn = document.createElement('button');
                btn.className = `option-btn w-full text-left p-4 rounded-lg border-2 flex items-center justify-between transition-all duration-200 border-slate-100 bg-slate-50 hover:bg-emerald-50 hover:border-emerald-200 cursor-pointer`;
                btn.dataset.qid = q.id;
                btn.dataset.option = option;
                btn.dataset.correctOption = q.answer;
                btn.innerHTML = `<span>${option}</span><span class="icon-slot"></span>`;
                opts.appendChild(btn);
            });
            qDiv.appendChild(opts);

            const confirmWrap = document.createElement('div');
            confirmWrap.className = "mt-6 hidden confirm-wrap";
            const confirmBtn = document.createElement('button');
            confirmBtn.className = `confirm-btn w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold transition flex items-center justify-center gap-2 shadow-md`;
            confirmBtn.dataset.qid = q.id;
            confirmBtn.innerHTML = `Confirm Answer <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5l10 -10"></path></svg>`;
            confirmWrap.appendChild(confirmBtn);
            qDiv.appendChild(confirmWrap);

            wrap.appendChild(qDiv);
            num++;
        });
        sDiv.appendChild(wrap);
        container.appendChild(sDiv);
    });
    
    document.getElementById('score-display').textContent = score;
    document.getElementById('answered-display').textContent = totalAnswered;
    const totalDisplay = document.getElementById('total-display');
    if (totalDisplay) {
        totalDisplay.textContent = `(${totalQuestions} total)`;
    }
}

// === MCQ Click Handler ===
document.getElementById('itpm-quiz-container').addEventListener('click', function (e) {
    const optBtn = e.target.closest('.option-btn');
    const confBtn = e.target.closest('.confirm-btn');

    if (optBtn && !optBtn.disabled) {
        const qId = optBtn.dataset.qid;
        if (answers[qId]) return; 

        // check toggle
        const toggleEl = document.getElementById('itpm-confirm-toggle');
        const isConfirmMode = toggleEl ? toggleEl.checked : true;
        const block = optBtn.closest('.question-block');

        if (isConfirmMode) {
            block.querySelectorAll('.option-btn').forEach(b => {
                b.className = `option-btn w-full text-left p-4 rounded-lg border-2 flex items-center justify-between transition-all duration-200 border-slate-100 bg-slate-50 hover:bg-emerald-50 hover:border-emerald-200 cursor-pointer`;
                b.querySelector('.icon-slot').innerHTML = ''; 
            });
            optBtn.className = `option-btn w-full text-left p-4 rounded-lg border-2 flex items-center justify-between transition-all duration-200 border-emerald-500 bg-emerald-50 ring-emerald-200 cursor-pointer ring-2 shadow-sm`;
            optBtn.querySelector('.icon-slot').innerHTML = `<div class="w-3 h-3 bg-emerald-600 rounded-full"></div>`;
            pendingAnswers[qId] = optBtn.dataset.option;
            block.querySelector('.confirm-wrap').classList.remove('hidden');
        } else {
            finalizeAnswer(qId, optBtn.dataset.option, optBtn.dataset.correctOption, block);
        }
    } else if (confBtn) {
        const qId = confBtn.dataset.qid;
        if (answers[qId]) return;
        const selected = pendingAnswers[qId];
        if (!selected) return;
        const block = confBtn.closest('.question-block');
        const correctOpt = block.querySelector('.option-btn').dataset.correctOption;
        
        finalizeAnswer(qId, selected, correctOpt, block);
        confBtn.parentElement.classList.add('hidden');
    }
});

function finalizeAnswer(qId, selectedOption, correctOption, questionBlock) {
    answers[qId] = selectedOption;
    totalAnswered++;
    if (selectedOption === correctOption) {
        score++;
    }

    document.getElementById('score-display').textContent = score;
    document.getElementById('answered-display').textContent = totalAnswered;

    const allBtns = questionBlock.querySelectorAll('.option-btn');
    allBtns.forEach(b => {
        b.disabled = true;
        const opt = b.dataset.option;
        const isSelected = (opt === selectedOption);
        const isCorrect = (opt === correctOption);
        const iconSlot = b.querySelector('.icon-slot');

        b.className = "option-btn w-full text-left p-4 rounded-lg border-2 flex items-center justify-between transition-all duration-200 cursor-default ";

        if (isSelected && isCorrect) {
            b.className += "bg-green-50 border-green-500 text-green-900";
            iconSlot.innerHTML = checkIcon;
        } else if (isSelected && !isCorrect) {
            b.className += "bg-red-50 border-red-500 text-red-900";
            iconSlot.innerHTML = xIcon;
        } else if (!isSelected && isCorrect) {
            b.className += "bg-green-50 border-green-500 text-green-900";
            iconSlot.innerHTML = checkIcon;
        } else {
            b.className += "bg-slate-50 border-slate-100 text-slate-400 opacity-50";
            iconSlot.innerHTML = '';
        }
    });

    checkQuizCompletion();
}

function checkQuizCompletion() {
    if (totalAnswered === totalQuestions && totalQuestions > 0) {
        setTimeout(showResultsModal, 500); 
    }
}

function showResultsModal() {
    const modal = document.getElementById('results-modal');
    if (!modal) return;
    
    document.getElementById('modal-score').textContent = score;
    document.getElementById('modal-total').textContent = totalQuestions;
    
    let pct = score / totalQuestions;
    let msg = "Keep Practicing!";
    if (pct >= 0.9) msg = "Outstanding! You're a Project Manager.";
    else if (pct >= 0.7) msg = "Great Job! You're a Project Manager.";
    else msg = "Keep Practicing! You're a Project Manager.";
    
    document.getElementById('modal-message').textContent = msg;
    
    const waLink = document.getElementById('whatsapp-link');
    if(waLink) {
        const text = encodeURIComponent(`Hey Rodney! I just scored ${score}/${totalQuestions} on the IT Project Management Practice Quiz!`);
        waLink.href = `https://wa.me/233534882761?text=${text}`;
    }
    
    modal.classList.remove('hidden');
    // Trigger animation
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modal.querySelector('.transform').classList.remove('scale-95');
        modal.querySelector('.transform').classList.add('scale-100');
    }, 10);
}

function hideResultsModal() {
    const modal = document.getElementById('results-modal');
    if (!modal) return;
    modal.classList.add('opacity-0');
    modal.querySelector('.transform').classList.remove('scale-100');
    modal.querySelector('.transform').classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

document.addEventListener('DOMContentLoaded', () => {
    // IT PM toggle
    const itpmConfirmToggle = document.getElementById('itpm-confirm-toggle');
    if(itpmConfirmToggle) {
        const toggleBgItpm = document.querySelector('.toggle-bg-itpm');
        const toggleDotItpm = document.querySelector('.dot-itpm');
        itpmConfirmToggle.addEventListener('change', (e) => {
            if (e.target.checked) {
                toggleBgItpm.classList.replace('bg-slate-300', 'bg-emerald-600');
                toggleDotItpm.classList.replace('translate-x-0', 'translate-x-5');
            } else {
                toggleBgItpm.classList.replace('bg-emerald-600', 'bg-slate-300');
                toggleDotItpm.classList.replace('translate-x-5', 'translate-x-0');
            }
        });
    }

    const modalDownloadBtn = document.getElementById('modal-download-btn');
    if (modalDownloadBtn) {
        modalDownloadBtn.addEventListener('click', () => {
            const originalText = modalDownloadBtn.innerHTML;
            modalDownloadBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg> Generating...`;
            
            const modalContent = document.querySelector('#results-modal > div');
            
            // Temporarily hide buttons for screenshot
            const buttonsDiv = modalContent.querySelector('.space-y-4');
            if(buttonsDiv) buttonsDiv.style.display = 'none';
            
            html2canvas(modalContent, { backgroundColor: '#ffffff', scale: 2, useCORS: true }).then(canvas => {
                if(buttonsDiv) buttonsDiv.style.display = 'block';
                
                const image = canvas.toDataURL("image/png");
                const link = document.createElement('a');
                link.href = image;
                link.download = `IT_Project_Management_Quiz_Results.png`;
                link.click();
                
                modalDownloadBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><polyline points="20 6 9 17 4 12"></polyline></svg> Downloaded!`;
                setTimeout(() => {
                    modalDownloadBtn.innerHTML = originalText;
                }, 2000);
            }).catch(err => {
                if(buttonsDiv) buttonsDiv.style.display = 'block';
                modalDownloadBtn.innerHTML = originalText;
                console.error("Screenshot failed", err);
            });
        });
    }

    const modalTryAgainBtn = document.getElementById('modal-try-again-btn');
    if (modalTryAgainBtn) {
        modalTryAgainBtn.addEventListener('click', () => {
            hideResultsModal();
            document.getElementById('reset-btn').click();
        });
    }
});

// === Reset ===
document.getElementById('reset-btn').addEventListener('click', () => {
    answers = {};
    pendingAnswers = {};
    score = 0;
    totalAnswered = 0;
    document.getElementById('score-display').textContent = score;
    document.getElementById('answered-display').textContent = totalAnswered;
    
    if (currentQuizData) {
        renderQuiz(currentQuizData, 'itpm-quiz-container');
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// === Font Size Slider ===
document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("font-size-slider");
    if (slider) {
        slider.addEventListener("input", (e) => {
            document.documentElement.style.setProperty("--base-font-size", e.target.value + "px");
        });
    }
});

