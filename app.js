// === SVG Icons ===
const checkIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
const xIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-500"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`;
const showSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> Show Model Answer`;
const hideSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 3 18 18"></path><path d="M10.584 10.587a2 2 0 0 0 2.828 2.83"></path><path d="M9.363 5.365A9.466 9.466 0 0 1 12 5c7 0 10 7 10 7a11.663 11.663 0 0 1-1.671 2.451m-1.2 2.766A9.613 9.613 0 0 1 12 19c-7 0-10-7-10-7a11.673 11.673 0 0 1 5.01-5.021"></path></svg> Hide Answer`;

// === MCQ Quiz Data ===
const quizData = [
  { section: "1. Navigation & File Management", questions: [
    { id:'q1', q:"What is the primary purpose of the command line in Unix-like systems?", options:["To provide a graphical interface for easier file management","To enhance the security of the system by restricting access","To allow users to execute programs and manipulate files and directories using commands","To support programming in Java and Python"], answer:"To allow users to execute programs and manipulate files and directories using commands" },
    { id:'q2', q:"What does the pwd command display?", options:["The current user's username","The current directory path","The list of previously executed commands","The directory permissions"], answer:"The current directory path" },
    { id:'q3', q:"How do you create a new directory in Bash?", options:["mkfile","touch","mkdir","cp"], answer:"mkdir" },
    { id:'q4', q:"Which command is used to remove a directory?", options:["rmdir","cd","ls","mv"], answer:"rmdir" },
    { id:'q5', q:"To find out the type of a file, which command should be used?", options:["ls -l","file","chmod","chown"], answer:"file" },
    { id:'q6', q:"What does the whoami command display?", options:["All users currently logged in","The username of the current user","The groups to which the current user belongs","Information about the current user's session"], answer:"The username of the current user" },
    { id:'q7', q:"Which command is used to change the ownership of a file?", options:["chown","chgrp","chmod","usermod"], answer:"chown" },
    { id:'q8', q:"Which practice is recommended for safe command line usage?", options:["Always review commands carefully before executing, especially if running as the root user","Use complex commands as much as possible to perform operations in bulk","Use root access for daily operations to avoid permission issues","Avoid using command line interfaces in favor of GUI tools"], answer:"Always review commands carefully before executing, especially if running as the root user" }
  ]},
  { section: "2. Viewing & Searching", questions: [
    { id:'q9', q:"Which command allows you to view a large text file one page at a time?", options:["more","less","cat","tail"], answer:"less" },
    { id:'q10', q:"What does the -i option do when used with the grep command?", options:["Includes only the first instance of a match","Inverts the search to display non-matching lines","Ignores case when searching","Indicates the line number of each matching line"], answer:"Ignores case when searching" }
  ]},
  { section: "3. Process Management", questions: [
    { id:'q11', q:"Which command is used to display a list of currently running processes?", options:["ls","exec","ps","run"], answer:"ps" },
    { id:'q12', q:"What does the top command do in a Unix-like system?", options:["Displays dynamic real-time information about running processes","Lists the highest priority tasks","Shows the top directory of the file system","Sorts files in descending order"], answer:"Displays dynamic real-time information about running processes" },
    { id:'q13', q:"How can you terminate a process using its Process ID (PID)?", options:["del PID","kill PID","remove PID","clear PID"], answer:"kill PID" },
    { id:'q14', q:"What command would you use to change the priority of a running process?", options:["mod","chpri","nice","prichange"], answer:"nice" },
    { id:'q15', q:"Which option with the ps command shows all the processes running on the system, not just those tied to the current user?", options:["ps -u","ps -c","ps -e","ps -r"], answer:"ps -e" }
  ]},
  { section: "4. Pipes & Redirection", questions: [
    { id:'q16', q:"What is the main function of pipes in Unix-like systems?", options:["To increase the processing speed of the CPU","To create new files in the directory","To direct the output of one command to the input of another command","To display text files on the screen"], answer:"To direct the output of one command to the input of another command" },
    { id:'q17', q:"Which symbol is used to create a pipe in Unix-like command lines?", options:["&","\\\\","|","/"], answer:"|" },
    { id:'q18', q:"How would you use a pipe to count the number of lines in a file?", options:["cat filename | wc -l","cat filename < wc -l","wc -l > filename","wc -l filename | cat"], answer:"cat filename | wc -l" },
    { id:'q19', q:"What is the correct usage of a pipe in this command sequence to list all directories only?", options:["ls -l > grep '^d'","ls -l | grep '^d'","ls -l < grep '^d'","grep '^d' | ls -l"], answer:"ls -l | grep '^d'" },
    { id:'q20', q:"What key advantage do pipes provide in command line operations?", options:["They simplify syntax for complex commands.","They allow for the combination of multiple tools and commands to perform complex tasks efficiently.","They prevent errors by managing command dependencies.","They increase the security of command executions."], answer:"They allow for the combination of multiple tools and commands to perform complex tasks efficiently." }
  ]},
  { section: "5. Text Processing (SED, AWK, etc.)", questions: [
    { id:'q21', q:"What is the primary function of the SED command in Unix-like systems?", options:["File compression and archiving","Interactive text editing","Stream editing","Binary file editing"], answer:"Stream editing" },
    { id:'q22', q:"Which SED command replaces the first occurrence of 'text1' with 'text2' in a file?", options:["sed 's/text1/text2/' filename","sed 'd/text1/text2/' filename","sed 'r/text1/text2/' filename","sed 'm/text1/text2/' filename"], answer:"sed 's/text1/text2/' filename" },
    { id:'q23', q:"What is AWK primarily used for in Unix-like systems?", options:["Managing user permissions","System monitoring","Text processing and data extraction","Network configuration"], answer:"Text processing and data extraction" },
    { id:'q24', q:"How does GAWK differ from AWK?", options:["GAWK is a system monitoring tool, whereas AWK is for text processing","GAWK is older and less efficient than AWK","GAWK is the GNU version of AWK, offering additional features and extensions","There is no difference; GAWK is just another name for AWK"], answer:"GAWK is the GNU version of AWK, offering additional features and extensions" },
    { id:'q25', q:"Which scenario is ideal for using both AWK and SED together?", options:["Using AWK for file permissions adjustments and SED for system monitoring","Using SED to analyze data and AWK to modify files","There is no practical scenario where both would be used together","Using AWK for complex data analysis and SED for modifying the output"], answer:"Using AWK for complex data analysis and SED for modifying the output" },
    { id:'q26', q:"What is a key benefit of mastering both AWK and SED?", options:["Ability to efficiently process and manipulate text data within scripts","Improved system boot time","Enhanced ability to create graphical interfaces","Increased network security"], answer:"Ability to efficiently process and manipulate text data within scripts" },
    { id:'q27', q:"What does the sort command do when applied to a text file?", options:["Counts the number of lines that match a pattern","Changes the permissions of the file","Displays the first ten lines of the file","Arranges the lines of the text file in alphabetical or numerical order"], answer:"Arranges the lines of the text file in alphabetical or numerical order" },
    { id:'q28', q:"How can you sort a file numerically using the sort command?", options:["sort -p file","sort -c file","sort -n file","sort file -n"], answer:"sort -n file" },
    { id:'q29', q:"Which command is used to report or omit repeated lines, usually combined with sort?", options:["cut","uniq","grep","sed"], answer:"uniq" },
    { id:'q30', q:"What is the primary use of the cut command?", options:["To merge two files","To remove sections from each line of files","To sort data in a file","To find unique lines in a file"], answer:"To remove sections from each line of files" },
    { id:'q31', q:"How would you use the cut command to extract the first column from a CSV file?", options:["cut -d\\\".\\\" -f1 file","cut -c1 file","cut -d\\\",\\\" -f1 file","cut -b1 file"], answer:"cut -d\\\",\\\" -f1 file" }
  ]},
  { section: "6. Shell Scripting", questions: [
    { id:'q32', q:"What is the primary purpose of using functions in scripting?", options:["To increase the script's execution time","To add graphical elements to the script","To reduce code redundancy and simplify complex scripts","To interact directly with the hardware"], answer:"To reduce code redundancy and simplify complex scripts" },
    { id:'q33', q:"Which command within a function is used to return an exit status that signals an error?", options:["exit 1","return 1","return 0","exit 0"], answer:"return 1" },
    { id:'q34', q:"Why is error handling critical in function development?", options:["It allows the script to fail silently","It prevents the programmer from debugging","It ensures the script continues to operate under unexpected conditions","It reduces the memory usage of the script"], answer:"It ensures the script continues to operate under unexpected conditions" },
    { id:'q35', q:"How can Bash functions be nested within other functions?", options:["By declaring them outside the script","By defining one function inside another","Using a special keyword nested","This is not possible in Bash"], answer:"By defining one function inside another" },
    { id:'q36', q:"What is the correct extension typically used for Bash scripts?", options:[".txt",".bash",".sh",".script"], answer:".sh" },
    { id:'q37', q:"How do you make a Bash script executable?", options:["chown ubuntu scriptname","chmod 777 scriptname.sh","chmod +x scriptname.sh","chown 755 scriptname"], answer:"chmod +x scriptname.sh" },
    { id:'q38', q:"How do you read input during script execution and store it in a variable named user_input?", options:["read $user_input","read user_input","input user_input","capture user_input"], answer:"read user_input" },
    { id:'q39', q:"What is the correct syntax for a conditional statement in Bash?", options:["if [ condition ]: then","if condition [ then ]","if [ condition ]; then","if then [ condition ]"], answer:"if [ condition ]; then" },
    { id:'q40', q:"Which control structure is used for repeating tasks a specific number of times?", options:["if","for","while","repeat"], answer:"for" },
    { id:'q41', q:"What is a key advantage of using Bash scripts in system administration?", options:["They provide a graphical interface","They automate repetitive tasks","They reduce the need for network security","They replace the need for manual data entry"], answer:"They automate repetitive tasks" }
  ]}
];

// === State ===
let answers = {};
let score = 0;
let totalAnswered = 0;
let totalQuestions = 0;

// === Render MCQ Quiz ===
function renderQuiz() {
    const container = document.getElementById('quiz-container');
    container.innerHTML = '';
    let num = 1;
    totalQuestions = 0;
    quizData.forEach(section => {
        totalQuestions += section.questions.length;
        const sDiv = document.createElement('div');
        const h3 = document.createElement('h3');
        h3.className = "text-xl font-bold text-slate-800 border-b-2 border-blue-500 inline-block pb-1 mb-6";
        h3.textContent = section.section;
        sDiv.appendChild(h3);
        const wrap = document.createElement('div');
        wrap.className = "space-y-6";
        section.questions.forEach(q => {
            const qDiv = document.createElement('div');
            qDiv.className = "question-block bg-white rounded-xl p-6 shadow-sm border border-slate-200";
            qDiv.dataset.qid = q.id;
            const p = document.createElement('p');
            p.className = "font-bold text-slate-800 mb-4 text-lg flex gap-2";
            p.innerHTML = `<span class="text-blue-600">${num}.</span> <span>${q.q}</span>`;
            qDiv.appendChild(p);
            const opts = document.createElement('div');
            opts.className = "space-y-3";
            q.options.forEach(option => {
                const btn = document.createElement('button');
                btn.className = "option-btn w-full text-left p-4 rounded-lg border-2 flex items-center justify-between transition-all duration-200 border-slate-100 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 cursor-pointer";
                btn.dataset.qid = q.id;
                btn.dataset.option = option;
                btn.dataset.correctOption = q.answer;
                btn.innerHTML = `<span>${option}</span><span class="icon-slot"></span>`;
                opts.appendChild(btn);
            });
            qDiv.appendChild(opts);
            wrap.appendChild(qDiv);
            num++;
        });
        sDiv.appendChild(wrap);
        container.appendChild(sDiv);
    });
}

// === MCQ Click Handler ===
document.getElementById('quiz-container').addEventListener('click', function(e) {
    const btn = e.target.closest('.option-btn');
    if (!btn || btn.disabled) return;
    const qId = btn.dataset.qid;
    const selected = btn.dataset.option;
    const correct = btn.dataset.correctOption;
    if (answers[qId]) return;
    answers[qId] = selected;
    totalAnswered++;
    if (selected === correct) score++;
    document.getElementById('score-display').textContent = score;
    document.getElementById('answered-display').textContent = totalAnswered;
    const block = btn.closest('.question-block');
    block.querySelectorAll('.option-btn').forEach(b => {
        b.disabled = true;
        const opt = b.dataset.option;
        const isSel = opt === selected;
        const isCor = opt === correct;
        const icon = b.querySelector('.icon-slot');
        b.className = "option-btn w-full text-left p-4 rounded-lg border-2 flex items-center justify-between transition-all duration-200 cursor-default ";
        if (isSel && isCor) { b.className += "bg-green-50 border-green-500 text-green-900"; icon.innerHTML = checkIcon; }
        else if (isSel && !isCor) { b.className += "bg-red-50 border-red-500 text-red-900"; icon.innerHTML = xIcon; }
        else if (!isSel && isCor) { b.className += "bg-green-50 border-green-500 text-green-900"; icon.innerHTML = checkIcon; }
        else { b.className += "bg-slate-50 border-slate-100 text-slate-400 opacity-50"; }
    });
    
    checkQuizCompletion();
});

function checkQuizCompletion() {
    if (totalAnswered === totalQuestions && totalQuestions > 0) {
        setTimeout(showResultsModal, 500); // slight delay for visual feedback on last question
    }
}

function showResultsModal() {
    const modal = document.getElementById('results-modal');
    if (!modal) return;
    
    document.getElementById('modal-score').textContent = score;
    document.getElementById('modal-total').textContent = totalQuestions;
    
    let pct = score / totalQuestions;
    let msg = "Keep Practicing!";
    if (pct >= 0.9) msg = "Outstanding! SysAdmin Master.";
    else if (pct >= 0.7) msg = "Great Job!";
    
    document.getElementById('modal-message').textContent = msg;
    
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
    const modalShareBtn = document.getElementById('modal-share-btn');
    if (modalShareBtn) {
        modalShareBtn.addEventListener('click', () => {
            const shareText = `I just scored ${score}/${totalQuestions} on the SysAdmin Practice Quiz! Can you beat my score?`;
            navigator.clipboard.writeText(shareText).then(() => {
                const originalText = modalShareBtn.innerHTML;
                modalShareBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied to Clipboard!`;
                setTimeout(() => {
                    modalShareBtn.innerHTML = originalText;
                }, 2000);
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

// === Tab Switching ===
const tabMcq = document.getElementById('tab-mcq');
const tabWritten = document.getElementById('tab-written');
const sectionMcq = document.getElementById('section-mcq');
const sectionWritten = document.getElementById('section-written');

tabMcq.addEventListener('click', () => {
    tabMcq.className = "px-6 py-3 font-semibold text-blue-600 border-b-2 border-blue-600 hover:bg-slate-100 transition";
    tabWritten.className = "px-6 py-3 font-semibold text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition";
    sectionMcq.classList.remove('hidden');
    sectionWritten.classList.add('hidden');
});
tabWritten.addEventListener('click', () => {
    tabWritten.className = "px-6 py-3 font-semibold text-blue-600 border-b-2 border-blue-600 hover:bg-slate-100 transition";
    tabMcq.className = "px-6 py-3 font-semibold text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition";
    sectionWritten.classList.remove('hidden');
    sectionMcq.classList.add('hidden');
});

// === Show/Hide Model Answer (FIXED) ===
document.querySelectorAll('.show-answer-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const answerDiv = this.closest('.written-card') ? this.closest('.written-card').querySelector('.answer-reveal') : this.closest('.p-6').nextElementSibling;
        if (!answerDiv) return;
        if (answerDiv.classList.contains('show')) {
            answerDiv.classList.remove('show');
            this.innerHTML = showSvg;
        } else {
            answerDiv.classList.add('show');
            this.innerHTML = hideSvg;
        }
    });
});

// === DOM Restructuring & TikTok Style Back Button ===
function setupWrittenSection() {
    const writtenSection = document.getElementById('section-written');
    const appendix = document.querySelector('.bg-white.rounded-xl.shadow-sm.border.border-slate-200.p-6.mb-10');
    
    // 1. Move appendix to bottom of written section
    if (appendix && writtenSection) {
        appendix.id = "concepts-appendix";
        writtenSection.appendChild(appendix);
    }

    // 2. Add 'written-card' class to all question cards, move review links
    const cards = writtenSection.querySelectorAll('.bg-white.rounded-xl.overflow-hidden.relative');
    cards.forEach((card, i) => {
        card.classList.add('written-card');
        card.classList.remove('relative');
        card.id = 'written-q' + (i + 1);
        
        // Move review link
        const linkDiv = card.querySelector('.absolute');
        const p = card.querySelector('.p-6 p');
        const h3 = card.querySelector('.p-6 h3');
        if(h3) h3.classList.remove('pr-32');

        if (linkDiv && p) {
            const a = linkDiv.querySelector('a');
            a.className = "review-concept-link inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-full transition mt-1 mb-4";
            a.dataset.sourceId = card.id;
            p.after(a);
            linkDiv.remove();
        }
    });

    // 3. Create TikTok style floating back button
    let floatBtn = document.createElement('button');
    floatBtn.id = 'floating-back-btn';
    floatBtn.className = "fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white px-6 py-3 rounded-full shadow-2xl font-medium flex items-center gap-2 transition-all duration-300 translate-y-24 opacity-0 z-50 pointer-events-none";
    floatBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg> <span id="float-btn-text">Back to Question</span>`;
    document.body.appendChild(floatBtn);

    let activeSourceId = null;

    // Attach click to review links to show the floating button
    document.querySelectorAll('.review-concept-link').forEach(link => {
        link.addEventListener('click', function() {
            activeSourceId = this.dataset.sourceId;
            const qNum = activeSourceId.replace('written-q', '');
            document.getElementById('float-btn-text').textContent = "Back to Question " + qNum;
            
            // Show button
            floatBtn.classList.remove('translate-y-24', 'opacity-0', 'pointer-events-none');
            
            // Highlight target
            const targetId = this.getAttribute('href').substring(1);
            setTimeout(() => {
                const targetEl = document.getElementById(targetId);
                if(targetEl) targetEl.classList.add('highlight-target');
            }, 100);
        });
    });

    // Floating button click
    floatBtn.addEventListener('click', () => {
        if (activeSourceId) {
            document.getElementById(activeSourceId).scrollIntoView({behavior: 'smooth'});
            // Hide button
            floatBtn.classList.add('translate-y-24', 'opacity-0', 'pointer-events-none');
        }
    });
}

// === Reset ===
document.getElementById('reset-btn').addEventListener('click', () => {
    answers = {};
    score = 0;
    totalAnswered = 0;
    document.getElementById('score-display').textContent = score;
    document.getElementById('answered-display').textContent = totalAnswered;
    renderQuiz();
    document.querySelectorAll('textarea').forEach(ta => ta.value = '');
    document.querySelectorAll('.answer-reveal').forEach(ar => ar.classList.remove('show'));
    document.querySelectorAll('.show-answer-btn').forEach(btn => { btn.innerHTML = showSvg; });
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// === Init ===
renderQuiz();
setupWrittenSection();
