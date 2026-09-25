import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route, NavLink, Link, useNavigate} from "react-router-dom";
import {
  ArrowRight, BrainCircuit, BriefcaseBusiness, Check, ChevronRight, CircleUserRound,
  Clock3, Compass, Crown, Database, FileSearch, GraduationCap, LayoutDashboard,
  Menu, MessageSquareText, Play, Rocket, Search, ShieldCheck, Sparkles, Target,
  TrendingUp, Users, X, Zap, BookOpen, BarChart3, CheckCircle2, AlertTriangle
} from "lucide-react";
import {
  ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar,
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LineChart, Line
} from "recharts";
import "./styles.css";

const careers = [
  {name:"Data Analyst", match:87, icon:BarChart3, color:"violet", reason:"Strong alignment with analytical thinking, SQL, Excel and business problem-solving."},
  {name:"Data Scientist", match:79, icon:BrainCircuit, color:"blue", reason:"Your logical reasoning and interest in AI/data make this a strong next-step path."},
  {name:"Business Analyst", match:72, icon:BriefcaseBusiness, color:"pink", reason:"Your preference for solving business problems maps well to requirements and analytics work."}
];

const skills = [
  {name:"SQL", value:85, status:"strong"},
  {name:"Excel", value:90, status:"strong"},
  {name:"Python", value:65, status:"improve"},
  {name:"Statistics", value:40, status:"missing"},
  {name:"Power BI", value:30, status:"missing"}
];

const roadmap = [
  ["Excel Fundamentals","2 weeks","Formulas, pivots, lookups","completed"],
  ["SQL","3 weeks","Queries, joins, aggregation","completed"],
  ["Statistics","2 weeks","Probability, distributions, testing","active"],
  ["Python","4 weeks","Python fundamentals for analytics","upcoming"],
  ["Pandas & NumPy","2 weeks","Data manipulation and analysis","upcoming"],
  ["Power BI / Tableau","3 weeks","Dashboards and storytelling","upcoming"],
  ["Projects","3 weeks","Build 2 portfolio projects","upcoming"],
  ["Resume & Portfolio","1 week","Showcase measurable impact","upcoming"],
  ["Interview Preparation","2 weeks","Technical + HR practice","upcoming"],
  ["Job Applications","Ongoing","Targeted applications","upcoming"]
];

const resources = [
  {title:"SQL Interview Patterns", skill:"SQL", level:"Intermediate", type:"Practice", time:"3h", icon:Database},
  {title:"Python for Data Analysis", skill:"Python", level:"Beginner", type:"Course", time:"8h", icon:BookOpen},
  {title:"Power BI Dashboard Sprint", skill:"Power BI", level:"Intermediate", type:"Project", time:"5h", icon:BarChart3},
  {title:"Statistics Essentials", skill:"Statistics", level:"Beginner", type:"Tutorial", time:"4h", icon:TrendingUp},
  {title:"Analytics Portfolio Blueprint", skill:"Projects", level:"Intermediate", type:"Project", time:"6h", icon:Rocket},
  {title:"DBMS Interview Quickstart", skill:"DBMS", level:"Beginner", type:"Practice", time:"2h", icon:Database}
];

const questions = [
  {q:"Which SQL clause filters groups after aggregation?", options:["WHERE","GROUP BY","HAVING","ORDER BY"], answer:2, topic:"SQL", level:"Beginner"},
  {q:"Which Python library is primarily used for tabular data manipulation?", options:["NumPy","Pandas","Matplotlib","Flask"], answer:1, topic:"Python", level:"Beginner"},
  {q:"What does normalization primarily reduce in a relational database?", options:["Queries","Redundancy","Indexes","Transactions"], answer:1, topic:"DBMS", level:"Intermediate"},
  {q:"Which metric is especially useful when false positives are costly?", options:["Recall","Precision","MAE","R²"], answer:1, topic:"Data Science", level:"Intermediate"}
];

const quizQuestions = [
  {q:"Which activity sounds most interesting?", opts:["Finding patterns in data","Building applications","Securing systems","Designing products"], scores:[["Data Analyst",3],["Data Scientist",2],["Software Developer",1]]},
  {q:"What kind of work do you prefer?", opts:["Numbers & dashboards","Code & systems","AI experiments","People & business"], scores:[["Data Analyst",2],["Software Developer",2],["Data Scientist",2],["Business Analyst",2]]},
  {q:"Which task would you enjoy most?", opts:["Cleaning a messy dataset","Building an API","Training a model","Mapping user requirements"], scores:[["Data Analyst",3],["Software Developer",3],["Data Scientist",3],["Business Analyst",3]]},
  {q:"How comfortable are you with logical problem solving?", opts:["Very comfortable","Comfortable","Still learning","Prefer creative tasks"], scores:[["Data Scientist",2],["Software Developer",2],["Data Analyst",2],["Product Manager",1]]}
];

function App(){
  return <Routes>
    <Route path="/" element={<Landing/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/career-discovery" element={<CareerDiscovery/>}/>
    <Route path="/roadmap" element={<Roadmap/>}/>
    <Route path="/matching" element={<TalentMatching/>}/>
    <Route path="/skills" element={<SkillGap/>}/>
    <Route path="/learning" element={<LearningHub/>}/>
    <Route path="/interview" element={<InterviewHub/>}/>
    <Route path="/ai-interview" element={<AIInterview/>}/>
    <Route path="/workforce" element={<Workforce/>}/>
    <Route path="*" element={<Dashboard/>}/>
  </Routes>
}

function Shell({children, title="Dashboard"}){
  const [mobile,setMobile]=useState(false);
  const nav = [
    ["/dashboard","Overview",LayoutDashboard],
    ["/career-discovery","Career Discovery",Compass],
    ["/roadmap","My Roadmap",Target],
    ["/matching","Talent Matching",Users],
    ["/skills","Skill Gap",TrendingUp],
    ["/learning","Learning Hub",GraduationCap],
    ["/interview","Interview Prep",MessageSquareText],
    ["/ai-interview","AI Interview",Sparkles],
    ["/workforce","Workforce",BarChart3]
  ];
  return <div className="app">
    <aside className={"sidebar "+(mobile?"open":"")}>
      <div className="brand"><div className="brand-mark"><Sparkles size={18}/></div><span>Talent<span>Sphere</span></span></div>
      <div className="workspace">PERSONAL WORKSPACE</div>
      <nav>{nav.map(([to,label,Icon])=><NavLink key={to} to={to} onClick={()=>setMobile(false)} className={({isActive})=>isActive?"active":""}><Icon size={17}/><span>{label}</span></NavLink>)}</nav>
      <div className="sidebar-bottom">
        <div className="pro-card"><Crown size={18}/><div><b>AI Interview</b><small>Premium practice mode</small></div><ChevronRight size={15}/></div>
        <div className="user-mini"><div className="avatar">P</div><div><b>Palak</b><small>Student profile</small></div></div>
      </div>
    </aside>
    {mobile && <div className="overlay" onClick={()=>setMobile(false)}/>}
    <main className="main">
      <header className="topbar">
        <button className="icon-btn menu-btn" onClick={()=>setMobile(true)}><Menu/></button>
        <div><div className="eyebrow">TALENT ECOSYSTEM</div><h2>{title}</h2></div>
        <div className="top-actions"><button className="search-btn"><Search size={17}/><span>Search anything...</span><kbd>⌘ K</kbd></button><button className="icon-btn"><CircleUserRound/></button></div>
      </header>
      <div className="content">{children}</div>
    </main>
  </div>
}

function Landing(){
  const navigate=useNavigate();
  const features=[
    ["Career Discovery","Find roles that match your interests, strengths and working style.",Compass],
    ["Personal Roadmap","Turn a career goal into a step-by-step learning journey.",Target],
    ["Skill Gap Analysis","See what you know, what to improve and what to learn next.",TrendingUp],
    ["Learning Hub","Discover curated courses, tutorials and hands-on projects.",GraduationCap],
    ["Talent Matching","Compare your profile with job requirements using explainable signals.",Users],
    ["Interview Prep","Practice SQL, DSA, DBMS, Python, HR and aptitude questions.",MessageSquareText],
    ["AI Interview","Experience a conversational role-specific mock interview.",Sparkles]
  ];
  return <div className="landing">
    <header className="landing-nav"><Link className="brand" to="/"><div className="brand-mark"><Sparkles size={18}/></div><span>Talent<span>Sphere</span></span></Link><div className="landing-links"><a href="#features">Features</a><a href="#flow">How it works</a><a href="#org">For organizations</a></div><button className="btn ghost" onClick={()=>navigate("/dashboard")}>Open Demo <ArrowRight size={16}/></button></header>
    <section className="hero">
      <div className="hero-copy">
        <div className="pill"><Sparkles size={14}/> AI-powered career intelligence</div>
        <h1>Discover your career.<br/><span>Build your skills.</span><br/>Become job ready.</h1>
        <p>An AI-powered career ecosystem that helps you discover suitable career paths, identify skill gaps, learn the right skills, prepare for interviews, and connect talent with opportunities.</p>
        <div className="hero-actions"><button className="btn primary" onClick={()=>navigate("/career-discovery")}>Discover My Career <ArrowRight size={18}/></button><button className="btn secondary" onClick={()=>navigate("/matching")}>Explore Opportunities</button></div>
        <div className="trust"><div className="avatars"><i>P</i><i>A</i><i>R</i><i>+</i></div><span>Built for students, job seekers & talent teams</span></div>
      </div>
      <div className="ecosystem-card">
        <div className="orb"><div className="orb-core"><Sparkles size={32}/><b>TalentSphere</b><small>Career Intelligence</small></div></div>
        {["Career Discovery","Career Roadmap","Skill Gap","Learning","Interview Prep","Talent Matching","AI Interview"].map((x,i)=><div className={"eco-node n"+i} key={x}><span>{i+1}</span>{x}</div>)}
        <div className="orbit orbit1"/><div className="orbit orbit2"/>
      </div>
    </section>
    <section className="stats-strip"><div><b>7</b><span>career modules</span></div><div><b>360°</b><span>career journey</span></div><div><b>AI</b><span>guided preparation</span></div><div><b>2-sided</b><span>talent ecosystem</span></div></section>
    <section id="features" className="section"><div className="section-heading"><div><div className="eyebrow">THE ECOSYSTEM</div><h2>Everything between <span>curiosity</span> and opportunity.</h2></div><p>One connected experience for discovering a path, building capability and proving readiness.</p></div><div className="feature-grid">{features.map(([t,d,I])=><div className="feature-card" key={t}><div className="feature-icon"><I/></div><div><h3>{t}</h3><p>{d}</p></div><ChevronRight className="feature-arrow"/></div>)}</div></section>
    <section id="flow" className="section flow-section"><div className="section-heading center"><div><div className="eyebrow">FROM DISCOVERY TO JOB READY</div><h2>Your career journey, connected.</h2></div></div><div className="flow">{["Discover","Roadmap","Skill Gap","Learn","Practice","Match","Interview"].map((x,i)=><React.Fragment key={x}><div className="flow-item"><span>{String(i+1).padStart(2,"0")}</span><b>{x}</b></div>{i<6&&<ArrowRight className="flow-arrow"/>}</React.Fragment>)}</div></section>
    <section id="org" className="section org-section"><div className="org-card"><div><div className="pill"><BriefcaseBusiness size={14}/> For organizations</div><h2>From individual growth to <span>workforce intelligence.</span></h2><p>TalentSphere also gives organizations a view of skill distribution, hiring demand, readiness and training opportunities.</p><button className="btn primary" onClick={()=>navigate("/workforce")}>View Workforce Dashboard <ArrowRight size={16}/></button></div><div className="org-preview"><div className="mini-chart"><BarChart3/><b>Workforce readiness</b><strong>78%</strong><div className="bars">{[40,58,73,62,88,76,94].map((h,i)=><i key={i} style={{height:h+"%"}}/>)}</div></div></div></div></section>
    <footer><div className="brand"><div className="brand-mark"><Sparkles size={16}/></div><span>Talent<span>Sphere</span></span></div><small>AI-powered career & talent ecosystem • Frontend demo</small></footer>
  </div>
}

function Stat({label,value,delta,icon:Icon}){return <div className="stat-card"><div className="stat-top"><div className="stat-icon"><Icon size={18}/></div><span className="delta">{delta}</span></div><strong>{value}</strong><span>{label}</span></div>}

function Dashboard(){
  const radar=[{s:"SQL",v:85},{s:"Excel",v:90},{s:"Python",v:65},{s:"Stats",v:40},{s:"Power BI",v:30}];
  const learn=[{d:"Mon",v:45},{d:"Tue",v:70},{d:"Wed",v:55},{d:"Thu",v:85},{d:"Fri",v:68},{d:"Sat",v:92},{d:"Sun",v:76}];
  return <Shell title="Good morning, Palak 👋"><div className="welcome-row"><div><h1>Your career cockpit.</h1><p>Here’s the progress you’ve made toward becoming job ready.</p></div><Link className="btn primary" to="/roadmap">Continue roadmap <ArrowRight size={16}/></Link></div>
  <div className="stats-grid"><Stat label="Career compatibility" value="87%" delta="+6%" icon={Target}/><Stat label="Overall readiness" value="74%" delta="+9%" icon={Zap}/><Stat label="Roadmap complete" value="22%" delta="+4%" icon={Rocket}/><Stat label="Job match score" value="81%" delta="+8%" icon={Users}/></div>
  <div className="dashboard-grid">
    <div className="panel chart-panel"><div className="panel-head"><div><h3>Skill profile</h3><p>Current capability across target-role skills</p></div><Link to="/skills">View gaps <ArrowRight size={14}/></Link></div><div className="radar-wrap"><ResponsiveContainer width="100%" height={280}><RadarChart data={radar}><PolarGrid/><PolarAngleAxis dataKey="s"/><Radar dataKey="v" fill="currentColor" fillOpacity=".22" stroke="currentColor" strokeWidth={2}/></RadarChart></ResponsiveContainer></div></div>
    <div className="panel career-card"><div className="panel-head"><div><h3>Recommended path</h3><p>Based on your demo profile</p></div><span className="score-badge">87%</span></div><div className="career-big"><div className="career-icon"><BarChart3/></div><div><h2>Data Analyst</h2><span>Analytics • Business Intelligence</span></div></div><p className="reason">Strong alignment with analytical thinking, SQL, Excel and business problem-solving.</p><div className="progress-line"><span style={{width:"87%"}}/></div><Link className="btn secondary full" to="/roadmap">Open roadmap</Link></div>
    <div className="panel chart-panel"><div className="panel-head"><div><h3>Learning momentum</h3><p>Hours of focused learning this week</p></div><span className="trend">+18%</span></div><ResponsiveContainer width="100%" height={220}><LineChart data={learn}><CartesianGrid vertical={false}/><XAxis dataKey="d"/><YAxis hide/><Tooltip/><Line type="monotone" dataKey="v" stroke="currentColor" strokeWidth={3} dot={false}/></LineChart></ResponsiveContainer></div>
    <div className="panel next-card"><div className="panel-head"><div><h3>Next up</h3><p>Keep the streak alive</p></div><Clock3 size={18}/></div><div className="next-item"><div className="resource-icon"><Database/></div><div><b>Statistics fundamentals</b><small>Probability & distributions • 45 min</small></div><button className="circle-play"><Play size={14}/></button></div><div className="next-item"><div className="resource-icon"><MessageSquareText/></div><div><b>SQL interview drill</b><small>5 questions • Intermediate</small></div><Link to="/interview" className="circle-play"><ArrowRight size={14}/></Link></div></div>
  </div></Shell>
}

function CareerDiscovery(){
  const [i,setI]=useState(0), [answers,setAnswers]=useState([]), [done,setDone]=useState(false);
  if(done) return <Shell title="Career Discovery"><div className="result-page"><div className="pill"><Sparkles size={14}/> AI recommendation ready</div><h1>Your career constellation</h1><p>Based on your answers, these paths have the strongest alignment in this demo.</p><div className="career-results">{careers.map((c,idx)=><div className="result-card" key={c.name}><div className={"result-rank r"+idx}>0{idx+1}</div><div className="career-icon"><c.icon/></div><div className="result-main"><div className="result-title"><h2>{c.name}</h2><b>{c.match}%</b></div><div className="progress-line"><span style={{width:c.match+"%"}}/></div><p>{c.reason}</p></div></div>)}</div><div className="result-actions"><button className="btn primary" onClick={()=>location.href="/roadmap"}>Build My Roadmap <ArrowRight size={17}/></button><button className="btn secondary" onClick={()=>{setDone(false);setI(0);setAnswers([])}}>Retake quiz</button></div></div></Shell>
  return <Shell title="Career Discovery"><div className="quiz-layout"><div className="quiz-side"><div className="pill"><Compass size={14}/> Discovery assessment</div><h1>Find where your curiosity fits.</h1><p>Four quick questions. Your answers shape the demo recommendation.</p><div className="quiz-progress"><span style={{width:((i+1)/quizQuestions.length)*100+"%"}}/></div><small>Question {i+1} of {quizQuestions.length}</small><div className="quiz-facts"><div><Zap/><span>Adaptive signals</span></div><div><ShieldCheck/><span>No right or wrong personality answers</span></div><div><Target/><span>Built around career fit</span></div></div></div><div className="quiz-card"><div className="question-meta"><span>Question {String(i+1).padStart(2,"0")}</span><b>{i<1?"Easy":i<3?"Medium":"Hard"}</b></div><h2>{quizQuestions[i].q}</h2><div className="options">{quizQuestions[i].opts.map((o,n)=><button key={o} onClick={()=>{const a=[...answers,n]; if(i===quizQuestions.length-1){setAnswers(a);setDone(true)}else{setAnswers(a);setI(i+1)}}}><span>{String.fromCharCode(65+n)}</span>{o}<ChevronRight size={17}/></button>)}</div></div></div></Shell>
}

function Roadmap(){
  const [items,setItems]=useState(roadmap);
  const toggle=(idx)=>setItems(items.map((x,i)=>i===idx?[x[0],x[1],x[2],x[3]==="completed"?"upcoming":"completed"]:x));
  const done=items.filter(x=>x[3]==="completed").length;
  return <Shell title="My Roadmap"><div className="page-heading"><div><div className="pill"><Target size={14}/> Personalized path</div><h1>Data Analyst Roadmap</h1><p>A practical sequence from fundamentals to applications.</p></div><div className="completion"><b>{Math.round(done/items.length*100)}%</b><span>complete</span></div></div><div className="roadmap"><div className="road-line"/>{items.map((x,i)=><div className={"road-item "+x[3]} key={x[0]}><button className="road-dot" onClick={()=>toggle(i)}>{x[3]==="completed"?<Check size={14}/>:i+1}</button><div className="road-card"><div><div className="road-meta"><span>STAGE {String(i+1).padStart(2,"0")}</span><em>{x[1]}</em></div><h3>{x[0]}</h3><p>{x[2]}</p><div className="tags"><span>Practice tasks</span><span>Resources</span><span>Project ideas</span></div></div><button className="icon-btn small" onClick={()=>toggle(i)}>{x[3]==="completed"?<CheckCircle2/>:<ChevronRight/>}</button></div></div>)}</div></Shell>
}

function TalentMatching(){
  const [analyzed,setAnalyzed]=useState(false);
  return <Shell title="Talent Matching"><div className="page-heading"><div><div className="pill"><Users size={14}/> Explainable matching</div><h1>See how your profile fits a role.</h1><p>Demo-only frontend analysis — no backend or external AI is required.</p></div></div><div className="matching-grid"><div className="panel form-panel"><label>Resume / profile</label><textarea defaultValue={"Data-focused student with experience in Excel, SQL, Python, dashboards and academic analytics projects."}/><label>Target job description</label><textarea defaultValue={"Looking for a Data Analyst who can work with SQL, Excel, Power BI, statistics and communicate business insights."}/><button className="btn primary full" onClick={()=>setAnalyzed(true)}><Sparkles size={16}/> Analyze Match</button></div><div className="panel match-panel">{!analyzed?<div className="empty-state"><FileSearch size={38}/><h3>Ready to compare</h3><p>Paste your profile and role requirements, then run the demo analyzer.</p></div>:<><div className="match-score"><div><span>OVERALL MATCH</span><strong>81%</strong></div><div className="score-ring">81</div></div><div className="match-metrics">{[["Skill Match","88%"],["Experience Match","72%"],["Keyword Match","84%"],["Role Relevance","80%"]].map(x=><div key={x[0]}><span>{x[0]}</span><b>{x[1]}</b><div className="progress-line"><span style={{width:x[1]}}/></div></div>)}</div><div className="match-columns"><div><h4><CheckCircle2/> Matched skills</h4><p>SQL • Excel • Python • Data Analysis</p></div><div><h4><AlertTriangle/> Missing skills</h4><p>Power BI • Advanced SQL • Statistics</p></div></div><div className="explain"><b>Your profile matches this role because...</b><p>You already demonstrate a solid analytics foundation and several of the role’s core tools.</p></div></>}</div></div></Shell>
}

function SkillGap(){
  return <Shell title="Skill Gap Analysis"><div className="page-heading"><div><div className="pill"><TrendingUp size={14}/> Capability map</div><h1>Close the gap between now and next.</h1><p>Compare your current skills with the requirements of your target role.</p></div><Link className="btn primary" to="/learning">Find learning resources <ArrowRight size={16}/></Link></div><div className="skill-grid"><div className="panel"><div className="panel-head"><div><h3>Current vs required</h3><p>Data Analyst benchmark</p></div></div><div className="skill-list">{skills.map(s=><div className="skill-row" key={s.name}><div className="skill-name"><span>{s.name}</span><b>{s.value}%</b></div><div className="skill-track"><span style={{width:s.value+"%"}}/></div></div>)}</div></div><div className="panel gap-summary"><h3>Personalized gap report</h3><div className="gap-block strong"><CheckCircle2/><div><b>Strong skills</b><p>Excel, SQL</p></div></div><div className="gap-block improve"><TrendingUp/><div><b>Skills to improve</b><p>Python</p></div></div><div className="gap-block missing"><AlertTriangle/><div><b>Missing / early stage</b><p>Statistics, Power BI</p></div></div></div></div><div className="resource-recommend"><h3>Recommended next moves</h3><div className="recommend-grid">{resources.slice(1,5).map(r=><div className="recommend-card" key={r.title}><r.icon/><b>{r.title}</b><small>{r.skill} • {r.time}</small><Link to="/learning">Open <ArrowRight size={13}/></Link></div>)}</div></div></Shell>
}

function LearningHub(){
  const [filter,setFilter]=useState("All");
  const visible=filter==="All"?resources:resources.filter(r=>r.type===filter);
  return <Shell title="Learning Hub"><div className="page-heading"><div><div className="pill"><GraduationCap size={14}/> Curated learning</div><h1>Learn what moves the needle.</h1><p>Static hackathon resources organized around your target career.</p></div></div><div className="filters">{["All","Course","Tutorial","Practice","Project"].map(f=><button key={f} className={filter===f?"selected":""} onClick={()=>setFilter(f)}>{f}</button>)}</div><div className="resource-grid">{visible.map(r=><div className="resource-card" key={r.title}><div className="resource-top"><div className="resource-icon"><r.icon/></div><span>{r.type}</span></div><h3>{r.title}</h3><p>Build practical capability through a focused, portfolio-friendly learning session.</p><div className="resource-meta"><span>{r.skill}</span><span>{r.level}</span><span><Clock3 size={13}/> {r.time}</span></div><button className="btn secondary full"><Play size={14}/> Start Learning</button></div>)}</div></Shell>
}

function InterviewHub(){
  const [topic,setTopic]=useState("All"), [level,setLevel]=useState("All"), [practice,setPractice]=useState(false), [idx,setIdx]=useState(0), [selected,setSelected]=useState(null), [score,setScore]=useState(0);
  const list=questions.filter(q=>(topic==="All"||q.topic===topic)&&(level==="All"||q.level===level));
  const q=list[idx%list.length];
  if(practice) return <Shell title="Practice Test"><div className="test-head"><div><div className="eyebrow">PRACTICE TEST</div><h1>Interview drill</h1></div><div className="timer"><Clock3/> 09:42</div></div><div className="test-card"><div className="question-meta"><span>Question {idx+1} / 5</span><b>{q.level}</b></div><h2>{q.q}</h2><div className="options">{q.options.map((o,n)=><button key={o} className={selected===n?"chosen":""} onClick={()=>setSelected(n)}><span>{String.fromCharCode(65+n)}</span>{o}</button>)}</div><div className="test-footer"><span>Score: {score}</span><button className="btn primary" onClick={()=>{if(selected===q.answer)setScore(score+1);setSelected(null);setIdx(idx+1)}}>{idx===4?"Finish Test":"Next Question"} <ArrowRight size={16}/></button></div></div></Shell>;
  return <Shell title="Interview Preparation"><div className="page-heading"><div><div className="pill"><MessageSquareText size={14}/> Interview prep</div><h1>Practice before the pressure.</h1><p>Searchable technical and HR questions with a lightweight test mode.</p></div><button className="btn primary" onClick={()=>setPractice(true)}><Play size={16}/> Practice Test</button></div><div className="filters"><select value={topic} onChange={e=>setTopic(e.target.value)}><option>All</option><option>SQL</option><option>Python</option><option>DBMS</option><option>Data Science</option></select><select value={level} onChange={e=>setLevel(e.target.value)}><option>All</option><option>Beginner</option><option>Intermediate</option></select></div><div className="question-grid">{list.map((q,i)=><div className="question-card" key={q.q}><div className="question-top"><span>{q.topic}</span><b>{q.level}</b></div><h3>{q.q}</h3><div className="answer"><CheckCircle2 size={15}/><span>Answer: {q.options[q.answer]}</span></div><p>Practice explaining not just the answer, but why the other options are less suitable.</p></div>)}</div></Shell>
}

function AIInterview(){
  const [unlocked,setUnlocked]=useState(false), [messages,setMessages]=useState([{from:"ai",text:"Hi! I’m your TalentSphere AI interviewer. Select a role and I’ll start with a realistic question."}]), [input,setInput]=useState("");
  const send=()=>{if(!input.trim())return; const user=input; setInput(""); setMessages(m=>[...m,{from:"user",text:user},{from:"ai",text:"Good start. Now explain how you would validate the quality of the data before building a dashboard."}])};
  return <Shell title="AI Interview"><div className="ai-interview"><div className="ai-header"><div><div className="pill"><Sparkles size={14}/> Conversational simulation</div><h1>Interview like it’s real.</h1><p>Frontend demo of the premium interview experience.</p></div><select><option>Data Analyst</option><option>Data Scientist</option><option>Business Analyst</option><option>Software Developer</option></select></div>{!unlocked?<div className="unlock"><div className="unlock-icon"><Crown/></div><h2>Unlock AI Interview</h2><p>Practice technical, HR and scenario-based questions with adaptive follow-ups.</p><div className="unlock-features"><span><Check/> Role-specific questions</span><span><Check/> Adaptive follow-ups</span><span><Check/> Performance breakdown</span></div><button className="btn primary" onClick={()=>setUnlocked(true)}>Unlock Demo <Sparkles size={16}/></button><small>No payment processing — hackathon demo mode</small></div>:<div className="chat-panel"><div className="chat-top"><span><span className="online"/> AI Interviewer</span><span>Data Analyst • Mock session</span></div><div className="messages">{messages.map((m,i)=><div className={"bubble "+m.from} key={i}>{m.text}</div>)}</div><div className="chat-input"><input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()} placeholder="Type your answer..." /><button className="btn primary" onClick={send}><ArrowRight/></button></div></div>}</div></Shell>
}

function Workforce(){
  const data=[{name:"Data",v:82},{name:"AI/ML",v:61},{name:"Cloud",v:74},{name:"Cyber",v:48},{name:"Product",v:66}];
  return <Shell title="Workforce Planning"><div className="page-heading"><div><div className="pill"><BarChart3 size={14}/> Organization view</div><h1>Turn talent data into workforce signals.</h1><p>A demo dashboard showing how TalentSphere scales from individual development to hiring intelligence.</p></div></div><div className="stats-grid"><Stat label="Total talent pool" value="2,480" delta="+12%" icon={Users}/><Stat label="Open job roles" value="38" delta="+5" icon={BriefcaseBusiness}/><Stat label="Avg. match score" value="76%" delta="+7%" icon={Target}/><Stat label="Workforce readiness" value="78%" delta="+11%" icon={Zap}/></div><div className="dashboard-grid"><div className="panel chart-panel"><div className="panel-head"><div><h3>Skill distribution</h3><p>Available capability by domain</p></div></div><ResponsiveContainer width="100%" height={290}><BarChart data={data}><CartesianGrid vertical={false}/><XAxis dataKey="name"/><YAxis/><Tooltip/><Bar dataKey="v" fill="currentColor" radius={[7,7,0,0]}/></BarChart></ResponsiveContainer></div><div className="panel"><div className="panel-head"><div><h3>Hiring demand</h3><p>Roles requiring attention</p></div></div>{[["Data Analyst","126","82%"],["ML Engineer","74","61%"],["Cloud Engineer","59","74%"],["Cybersecurity","42","48%"]].map(x=><div className="demand" key={x[0]}><div><b>{x[0]}</b><span>{x[1]} available</span></div><strong>{x[2]}</strong></div>)}</div></div><div className="panel talent-table"><div className="panel-head"><div><h3>Role readiness</h3><p>Required skills vs available talent</p></div></div><div className="table"><div className="tr th"><span>Job role</span><span>Match</span><span>Gap</span><span>Training</span></div>{[["Data Analyst","82%","Low","Power BI"],["ML Engineer","69%","Medium","MLOps"],["Cloud Engineer","76%","Medium","AWS"],["Product Analyst","73%","Low","SQL"]].map(x=><div className="tr" key={x[0]}><span><b>{x[0]}</b></span><span>{x[1]}</span><span>{x[2]}</span><span>{x[3]}</span></div>)}</div></div></Shell>
}

ReactDOM.createRoot(document.getElementById("root")).render(<BrowserRouter><App/></BrowserRouter>);