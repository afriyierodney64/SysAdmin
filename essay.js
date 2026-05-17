const essayQuestions = [
    {
        title: "Question 12: Scope Definition Steps",
        question: "Evaluate seven (7) key steps for defining the Scope of a Project.",
        answerHtml: `
            <ul class="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Identify Project Objectives:</strong> Establish the high-level business case, corporate goals, and the specific problems the project intends to solve.</li>
                <li><strong>Gather Stakeholder Requirements:</strong> Actively engage and interview stakeholders to collect detailed needs, expectations, and system feature requests.</li>
                <li><strong>Define Specific Deliverables:</strong> Explicitly state the tangible, measurable outcomes (e.g., software modules, API schemas, design documents) to be produced.</li>
                <li><strong>Explicitly State Exclusions:</strong> Formally document what is strictly out-of-scope to establish firm boundaries and prevent scope creep.</li>
                <li><strong>Identify Project Constraints:</strong> Recognize fixed operational limitations, such as hard budget limits, tight timelines, regulatory compliance rules, or technical parameters.</li>
                <li><strong>Document Assumptions:</strong> List any factors assumed to be true for planning purposes (e.g., resource availability, external vendor response times, technical platform stability).</li>
                <li><strong>Create the Scope Statement:</strong> Compile all these elements into a formal, approved document that acts as the absolute baseline for the project team.</li>
            </ul>
        `
    },
    {
        title: "Question 17: Precedence Diagramming Method (PDM)",
        question: "Using the Precedence Diagramming Method (PDM), evaluate the four (4) main types of dependencies or logical relationships between activities.",
        answerHtml: `
            <ul class="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Finish-to-Start (FS):</strong> The predecessor activity must completely finish before the successor activity can begin (e.g., system database design must finish before backend coding can start).</li>
                <li><strong>Start-to-Start (SS):</strong> The predecessor activity must start before the successor activity is allowed to start, allowing tasks to progress in parallel (e.g., database coding must start before database indexing can start).</li>
                <li><strong>Finish-to-Finish (FF):</strong> The predecessor activity must finish before the successor activity is allowed to finish (e.g., writing the user manual must finish before editing the user manual can finish).</li>
                <li><strong>Start-to-Finish (SF):</strong> The predecessor activity must start before the successor activity can finish (e.g., the new payment system must start live operations before the legacy billing mainframe can be officially decommissioned).</li>
            </ul>
        `
    },
    {
        title: "Question 21: Project Cost Management",
        question: "Define and evaluate the four (4) main processes involved in Project Cost Management.",
        answerHtml: `
            <ul class="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Plan Cost Management:</strong> Setting and documenting the policies, procedures, software tools, and systems that will be used to plan, estimate, budget, and control project costs.</li>
                <li><strong>Estimate Costs:</strong> Developing a granular mathematical approximation of the monetary and human resources required to complete all project activities.</li>
                <li><strong>Determine Budget:</strong> Aggregating the estimated costs of individual activities or work packages to establish an authorized, time-phased cost baseline.</li>
                <li><strong>Control Costs:</strong> Actively monitoring the actual financial status of the project, tracking expenditures against the baseline, and executing formal change control to manage changes.</li>
            </ul>
        `
    },
    {
        title: "Question 24: PMI Time Management Principles",
        question: "Based on the Project Management Institute (PMI) standards, evaluate twelve (12) key Principles that drive successful Project Time Management.",
        answerHtml: `
            <ul class="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Stewardship:</strong> Actively demonstrating professional, transparent, and honest scheduling; managing time resources responsibly without overpromising.</li>
                <li><strong>Team:</strong> Fostering a highly collaborative, psychologically safe team environment to optimize work flows and speed up blocker resolution.</li>
                <li><strong>Stakeholders:</strong> Proactively engaging stakeholders early to clearly freeze requirements, which avoids late-stage timeline-wrecking changes.</li>
                <li><strong>Value:</strong> Continually prioritizing work packages and scheduling slots based on the direct business value they deliver.</li>
                <li><strong>Systems Thinking:</strong> Recognizing how a micro-delay in a single technical task ripples outward to affect the entire critical path and end-delivery date.</li>
                <li><strong>Leadership:</strong> Removing project roadblocks quickly, managing conflicts, and keeping the team motivated to hit key milestone targets.</li>
                <li><strong>Tailoring:</strong> Customizing and matching the scheduling tools (Agile, Waterfall, or Hybrid) to the specific project size, speed, and complexity.</li>
                <li><strong>Quality:</strong> Planning realistic timelines for testing. Doing the work right the first time eliminates time-consuming debugging and rework.</li>
                <li><strong>Complexity:</strong> Breaking down highly intricate or ambiguous technical components into small, manageable work packages.</li>
                <li><strong>Risk:</strong> Proactively identifying timeline threats and building realistic buffer reserves (contingency and management) into the baseline.</li>
                <li><strong>Adaptability and Resiliency:</strong> Constructing flexible schedule tracking frameworks so the team can adjust workflows and recover from unexpected delays.</li>
                <li><strong>Change:</strong> Routing all timeline adjustments through a formal, rigorous change control process to maintain schedule integrity.</li>
            </ul>
        `
    },
    {
        title: "Question 26: Importance of Time Management in IT",
        question: "Evaluate five (5) key reasons why Time Management is critical in IT-Computing Projects.",
        answerHtml: `
            <ul class="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Meeting Strict Deadlines:</strong> IT systems must often align with fixed marketing campaigns, fiscal year constraints, or competitive windows; failure results in lost market advantage.</li>
                <li><strong>Preventing Scope Creep:</strong> Strict schedule tracking alerts the team immediately when unauthorized work begins to threaten established schedule baselines.</li>
                <li><strong>Cost Control:</strong> In IT projects, developer, QA, and engineer billable hours are the main cost drivers; schedule delays translate directly into massive budget overruns.</li>
                <li><strong>Sufficient Debugging and QA:</strong> Proper scheduling protects the testing window. When time is managed poorly, testing is compressed, leading to buggy production releases.</li>
                <li><strong>Enhanced Team Productivity and Morale:</strong> Clear, realistic milestones prevent "crunch culture" and late-night hotfixes, protecting developers from burnout and reducing employee turnover.</li>
            </ul>
        `
    },
    {
        title: "Question 30: Financial Terms in IT Projects",
        question: "In the context of IT-Computing Projects, present, define, and evaluate the following five (5) financial terms:\nb1: Life Cycle Costing\nb2: Cash Flow Analysis\nb3: Direct Costs\nb4: Indirect Costs\nb5: Sunk Costs",
        answerHtml: `
            <ul class="list-disc pl-5 space-y-2 mt-2">
                <li><strong>b1: Life Cycle Costing:</strong> Assessing the total cost of ownership (TCO) of an IT asset, covering initial planning, development, implementation, daily operations, upgrades, maintenance, and its eventual decommissioning.</li>
                <li><strong>b2: Cash Flow Analysis:</strong> Tracking the precise timing of money flowing into and out of the project to ensure the team has enough immediate liquidity to cover monthly payroll, API costs, and hosting bills.</li>
                <li><strong>b3: Direct Costs:</strong> Expenses that can be directly and exclusively attributed to a specific project (e.g., salaries of developers fully allocated to the project, specialized physical test hardware, software API keys).</li>
                <li><strong>b4: Indirect Costs:</strong> Shared organizational operational expenses that cannot be tied directly to one project (e.g., office electricity, physical office rent, general administrative or corporate HR payroll).</li>
                <li><strong>b5: Sunk Costs:</strong> Money already spent on a project that cannot be recovered. Sunk costs must be ignored when evaluating whether to continue or terminate a struggling project.</li>
            </ul>
        `
    },
    {
        title: "Question 43: Elements of a Project Charter",
        question: "In IT-Computing Project Management, evaluate the eleven (11) key elements that should be included in a Project Charter.",
        answerHtml: `
            <ul class="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Project Purpose:</strong> The underlying business case, problem statement, or strategic reason the project is being funded.</li>
                <li><strong>Measurable Project Objectives:</strong> High-level goals paired with clear, numeric success criteria (KPIs).</li>
                <li><strong>High-Level Requirements:</strong> The core, non-negotiable functional and technical needs of the system.</li>
                <li><strong>High-Level Project Description:</strong> A summary of boundaries, constraints, and major deliverable sets.</li>
                <li><strong>Overall Project Risk:</strong> An initial registry of major potential technical or schedule threats.</li>
                <li><strong>Summary Milestone Schedule:</strong> A high-level timeline showing major target release events and dates.</li>
                <li><strong>Summary Budget:</strong> The pre-approved financial budget baseline allocated for the project.</li>
                <li><strong>Stakeholder List:</strong> A registry of key individuals, departments, or external entities impacted by the project.</li>
                <li><strong>Project Approval Requirements:</strong> Explicit definitions of what constitutes success and who has sign-off authority.</li>
                <li><strong>Assigned Project Manager:</strong> The designated PM, along with their responsibilities, duties, and authority limits.</li>
                <li><strong>Name and Authority of Sponsor:</strong> The executive or sponsor who officially signs and authorizes the project.</li>
            </ul>
        `
    },
    {
        title: "Question 51: Project Scope Management Processes",
        question: "Evaluate the six (6) main processes involved in Project Scope Management.",
        answerHtml: `
            <ul class="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Plan Scope Management:</strong> Creating the Scope Management Plan, which documents how scope is defined, monitored, validated, and controlled.</li>
                <li><strong>Collect Requirements:</strong> Engaging stakeholders to determine and document all specific system expectations and user needs.</li>
                <li><strong>Define Scope:</strong> Developing a formal, granular Project Scope Statement that acts as the dividing line between what is in-scope and what is out-of-scope.</li>
                <li><strong>Create WBS (Work Breakdown Structure):</strong> Subdividing total project deliverables into smaller, highly manageable units called Work Packages.</li>
                <li><strong>Validate Scope:</strong> Meeting with customers/sponsors to perform formal inspection and secure signed acceptance of completed deliverables.</li>
                <li><strong>Control Scope:</strong> Monitoring actual work progress against the baseline and executing changes via a formal control board to prevent scope creep.</li>
            </ul>
        `
    },
    {
        title: "Question 62: Importance of Project Cost Management",
        question: "Project cost management is a fundamental pillar of project success that ensures a project is completed within its approved budget while delivering the intended value. Evaluate this assertion with five (5) key Importance points of Project Cost Management.",
        answerHtml: `
            <ul class="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Prevents Budget Overruns:</strong> Continuous tracking detects variances early, letting managers deploy corrective actions before the budget is completely exhausted.</li>
                <li><strong>Optimizes Resource Allocation:</strong> Accurate estimation ensures that human, physical, and infrastructure resources are routed where they generate the highest ROI.</li>
                <li><strong>Facilitates Data-Driven Decision Making:</strong> Real-time variance reports give stakeholders objective baseline data to evaluate scope and schedule trade-offs.</li>
                <li><strong>Enhances Stakeholder Confidence:</strong> Demonstrating fiscal control builds deep organizational trust with sponsors, showing that funds are used responsibly.</li>
                <li><strong>Improves Return on Investment (ROI):</strong> It safeguards the initial business case, assuring that deliverables are completed at a cost that makes economic sense.</li>
            </ul>
        `
    },
    {
        title: "Compulsory A: The Triple Constraint",
        question: "IT-Computing Projects may be constrained in different ways. Some limitations are sometimes referred to in Project Management as the \"Triple Constraint\". Support this statement with the components of the \"Triple Constraint\".",
        answerHtml: `
            <p class="mb-2">The Triple Constraint represents the structural boundary parameters within which any project must operate. Every project is limited by three competing, interdependent variables:</p>
            <ul class="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Scope:</strong> The specific goals, features, functional requirements, and physical/digital deliverables of the project. It defines what work must be executed to produce the final system.</li>
                <li><strong>Time (Schedule):</strong> The approved timeline, including task sequences, milestone deadlines, and the final delivery date. It defines when the project must be completed.</li>
                <li><strong>Cost (Budget):</strong> The authorized monetary resources, raw materials, software licensing fees, and specialized labor hours required. It defines how much money is allocated to complete the work.</li>
            </ul>
        `
    },
    {
        title: "Compulsory B: IT-Computing in Construction",
        question: "To expand the use of IT-Computing in Construction Project Management and to overcome the obstacles hindering or limiting utilizing all the benefits of IT-Computing, evaluate and support this assertion with five (5) recommendations or suggestions that should be taken into consideration at both the Organizational and State level (including universities):",
        answerHtml: `
            <p class="mb-2">Expanding IT-Computing in traditional industries like construction requires a unified, multi-tiered framework spanning academic institutions, private enterprises, and government policymakers:</p>
            <ul class="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Academic Curriculum Modernization (University Level):</strong> Universities teaching Civil Engineering, Construction, and Information Systems (IS) must merge their technical programs. Curricula should include mandatory modules on modern Construction Informatics, Building Information Modeling (BIM), cloud-based collaboration software (e.g., Autodesk Construction Cloud), and analytical software like Microsoft Project and Primavera P6.</li>
                <li><strong>Mandatory National BIM Standards (State Level):</strong> The State should pass legislation mandating digital delivery protocols for all public infrastructure works. Requiring 3D/4D BIM models for government bids forces private entities to rapidly adopt and train employees in IT-Computing architectures.</li>
                <li><strong>Subsidized Professional Development & Certification (Organizational & State Level):</strong> Organizations and state-funded training institutions (e.g., collaborating with GIMPA) should establish subsidized Continuing Professional Development (CPD) courses in modern IT Project Management to help current field managers upskill without high personal financial burdens.</li>
                <li><strong>Research and Development (R&D) Grants and Tax Incentives (State & Org Level):</strong> The government should provide specialized research funding to university laboratories focusing on digital twins, IoT integrations for real-time site safety, and automated cost estimation systems. Organizations investing in these local research partnerships should receive tax credits.</li>
                <li><strong>Establishment of Standardized Digital Interoperability Protocols (State Level):</strong> The state must support open data exchange frameworks (like Industry Foundation Classes - IFC) to ensure that diverse software environments used by architects, structural engineers, and contractors can cleanly communicate without expensive integration errors.</li>
            </ul>
        `
    },
    {
        title: "Compulsory C: Top Management Involvement",
        question: "By embracing Project Management best practices and leveraging the latest tools and technologies, organizations can ensure that their IT-Computing projects are completed on time, within budget, and to the highest quality standards. Support this assertion with four (4) reasons why Top Management involvement in IT-Computing Project Management is important:",
        answerHtml: `
            <p class="mb-2">IT-Computing projects possess high risk profiles due to technical complexity and rapid changes. Direct top-management involvement is critical for the following reasons:</p>
            <ul class="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Strategic Goal Alignment:</strong> Top management guarantees that the IT project's technical objectives directly map to the long-term business strategy of the organization. This prevents teams from executing projects that are technically impressive but provide zero business value.</li>
                <li><strong>Securing Critical Resources & Funding:</strong> IT projects often face shifting cost dynamics. Executive sponsors have the unique organizational power to rapidly authorize supplemental budgets, release bottlenecked physical hardware, or allocate premium human resources when tasks hit delays.</li>
                <li><strong>Facilitating Change Management & Overcoming Resistance:</strong> New IT system rollouts (like an ERP or CRM) often face intense internal user resistance. When top leadership visibly champions the project, it establishes organizational authority, ensuring standard policy compliance and driving rapid system adoption.</li>
                <li><strong>Providing High-Level Governance & Conflict Resolution:</strong> Many IT projects stall due to inter-departmental turf wars over data ownership or scheduling priorities. Top management involvement provides a formal, high-level governance structure to quickly resolve organizational conflicts and keep the critical path moving.</li>
            </ul>
        `
    },
    {
        title: "Compulsory D: Importance of Project Charter",
        question: "Successful projects don't just happen; they start with a solid foundation. Evaluate the assertion that a well-crafted project charter provides clarity, accountability, and direction, and support it with the fundamental importance of \"Project Charters\":",
        answerHtml: `
            <p class="mb-2">The Project Charter is the foundational document of any IT initiative. It serves as the formal starting baseline, and its structural importance is summarized in three core areas:</p>
            <ul class="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Grants Formal Authority to the Project Manager:</strong> Without a charter, a project manager is powerless. The charter formally authorizes the PM to apply organizational resources (money, technical personnel, and physical servers) to project tasks.</li>
                <li><strong>Establishes a Common Understanding / Baseline:</strong> It documents high-level scope, budget, success criteria, and major milestones. Having this signed by the key sponsor and stakeholders ensures that everyone agrees on what "success" looks like from day one, neutralizing early scope creep.</li>
                <li><strong>Connects the Project to Organizational Strategy:</strong> The charter explicitly lists the underlying "Business Case"—explaining why the project is being funded. This provides the project team with clear strategic direction and context during execution.</li>
            </ul>
        `
    },
    {
        title: "Compulsory E: IT-Computing Project Manager & Responsibilities",
        question: "Mastering project management for IT professionals requires a strategic approach and the right tools. Who is an \"IT-Computing Project Manager\"? Evaluate five (5) core responsibilities of IT-Computing Project Managers:",
        answerHtml: `
            <p class="mb-2">An IT-Computing Project Manager is a specialized professional responsible for leading the planning, execution, monitoring, control, and formal closure of information technology initiatives. This professional acts as the bridge translating complex technical development structures (software code, database queries, server architecture) into clear business outcomes for non-technical stakeholders.</p>
            <p class="mb-2 font-semibold">Five (5) Core Responsibilities:</p>
            <ul class="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Scope and Requirement Governance:</strong> Actively defining and locking project boundaries, documenting system requirements, and preventing unauthorized features ("gold plating" or "scope creep") from destabilizing the baseline.</li>
                <li><strong>Schedule & Time Tracking:</strong> Breaking down the WBS into manageable tasks, estimating durations, and mapping dependencies using critical path methods to ensure the final system is delivered on time.</li>
                <li><strong>Risk Identification and Mitigation:</strong> Anticipating and actively planning for technical risks (e.g., API compatibility issues, server downtime, security vulnerabilities, or database scaling bugs) before they impact operations.</li>
                <li><strong>Team Leadership & Resource Management:</strong> Acquiring the right developer skill sets, assigning roles via RACI matrices, managing work capacity to avoid bottleneck burnout (leveling), and keeping staff motivated.</li>
                <li><strong>Quality Assurance Oversight:</strong> Ensuring the final software build meets established usability, security, and stability metrics through structured, multi-stage testing processes (QA testing, user acceptance testing).</li>
            </ul>
        `
    },
    {
        title: "Compulsory F: IT Project Management Types & GIMPA Importance",
        question: "Project management types are specialized approaches tailored to industry needs. Evaluate IT-Computing Project Management in regards to its unique technical demands, and support it with five (5) areas of its importance to GIMPA:",
        answerHtml: `
            <p class="mb-2">Unlike Construction project management, which relies on linear, highly predictable physical steps (e.g., pouring concrete before raising walls), IT-Computing Project Management must handle highly abstract, intangible software modules and rapid technological obsolescence. It requires iterative, adaptive approaches (like Agile, Scrum, or Hybrid frameworks) that can pivot when requirements shift midway.</p>
            <p class="mb-2 font-semibold">Five (5) Areas of Importance to GIMPA:</p>
            <ul class="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Strategic Institutional Leadership Development:</strong> As Ghana's premier public-management university, GIMPA is responsible for training the next generation of civil and executive leaders. Preparing these students in IT-Computing Project Management equips them to steer the digital transformation of West African institutions.</li>
                <li><strong>Mitigation of High IT Project Failure Rates:</strong> Historically, public and private IT projects in Ghana face high failure rates due to cost overruns and poor time management. Teaching these PM methods at GIMPA directly raises the regional success rate of system deployments.</li>
                <li><strong>Internal Operational Excellence:</strong> GIMPA itself runs on complex academic, administrative, and student portals. Understanding these project management principles helps internal teams deploy campus software upgrades safely and on schedule.</li>
                <li><strong>Bridging Management and Technology:</strong> It allows GIMPA to establish interdisciplinary curriculum excellence, blending pure business management science with modern software engineering and data systems.</li>
                <li><strong>National Capacity Building:</strong> Training certified, capable IT-Computing PMs at GIMPA supports Ghana's national digitalization agenda, preparing professionals to lead large-scale government e-services and tech infrastructure projects.</li>
            </ul>
        `
    }
];

document.addEventListener("DOMContentLoaded", () => {
    // Font Size Slider
    const slider = document.getElementById("font-size-slider");
    if (slider) {
        slider.addEventListener("input", (e) => {
            document.documentElement.style.setProperty("--base-font-size", e.target.value + "px");
        });
    }

    const container = document.getElementById('essay-container');
    if(!container) return;

    essayQuestions.forEach((q, index) => {
        const card = document.createElement('div');
        card.className = "bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden relative written-card";
        
        card.innerHTML = `
            <div class="p-6">
                <h3 class="text-xl font-bold text-slate-800 mb-2 border-b pb-2">${q.title}</h3>
                <p class="text-slate-700 mb-4 leading-relaxed mt-4 whitespace-pre-wrap">${q.question}</p>

                <textarea class="w-full h-40 p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition shadow-inner bg-slate-50" placeholder="Type your practice answer here..."></textarea>

                <div class="mt-4 flex justify-end">
                    <button class="show-answer-btn px-6 py-2 bg-slate-800 text-white font-medium rounded hover:bg-slate-700 transition flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        Show Model Answer
                    </button>
                </div>
            </div>
            <div class="answer-reveal bg-emerald-50 px-6 border-t border-emerald-200">
                <h4 class="font-bold text-emerald-900 mb-2 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-600">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    Tutor's Breakdown
                </h4>
                <div class="text-emerald-900 prose prose-emerald max-w-none text-sm md:text-base">
                    ${q.answerHtml}
                </div>
            </div>
        `;
        
        container.appendChild(card);
    });

    // Reveal Logic
    container.addEventListener('click', (e) => {
        const btn = e.target.closest('.show-answer-btn');
        if (!btn) return;

        const answerDiv = btn.closest('.written-card').querySelector('.answer-reveal');
        
        if (answerDiv.classList.contains('show')) {
            answerDiv.classList.remove('show');
            btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> Show Model Answer`;
        } else {
            answerDiv.classList.add('show');
            btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path><line x1="2" y1="2" x2="22" y2="22"></line></svg> Hide Model Answer`;
        }
    });
});
