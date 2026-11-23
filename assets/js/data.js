/* ==================================================================
   MULTIMODAL ADVANCED ANALYTICS LAB - SITE CONTENT
   Edit this file to update the website. No other file needs changing
   for normal updates. Items marked  TODO  are placeholders to complete.
   Sources: Mukesh Prasad CV (SoCS 2025), 2024 promotion CV, 1-page profile.
   ================================================================== */
window.LAB = {

  name: "Multimodal Advanced Analytics Lab",
  short: "MAA Lab",
  tagline: "Trustworthy, multimodal AI for health, vision, language and society.",
  affiliation: "School of Computer Science, Faculty of Engineering and Information Technology, University of Technology Sydney (UTS)",
  about: [
    "The Multimodal Advanced Analytics Lab develops data- and AI-driven methods that learn jointly from images, video, text, speech, sensor and clinical signals. We work with hospitals, clinics, government and industry to turn these methods into tools that are used in practice.",
    "Our work spans health diagnostics, educational tools, emergency response, remote sensing and agriculture, energy forecasting and trustworthy digital society. The lab brings together PhD and MRes researchers, visiting scholars and collaborators from across Australia and the world."
  ],
  stats: [
    { n: "200+", l: "Research articles" },
    { n: "10,000+", l: "Google Scholar citations" },
    { n: "30", l: "HDR researchers supervised" },
    { n: "AUD 1M+", l: "Research income" }
  ],
  statsNote: "Figures from the Director's 2025 profile; please refresh when you update the site.",

  /* ---------------- Leadership ---------------- */
  director: {
    name: "Associate Professor Mukesh Prasad",
    role: "Director",
    photo: "",                       // e.g. "assets/img/mukesh.jpg" (add the file, then set this)
    bio: "Mukesh Prasad is an Associate Professor in the School of Computer Science, UTS (Associate Professor since 2025; Senior Lecturer 2020-2024; Lecturer 2017-2019). He holds a PhD in Computer Science from National Chiao Tung University, Taiwan (2015) and a Master of Computer Application from Jawaharlal Nehru University, India (2009). His research covers artificial intelligence, machine learning, data analytics, computer vision, natural language processing and IoT, with a strong focus on healthcare and biomedical applications. He is the HDR Coordinator for the School of Computer Science and coordinates the AI and Data Analytics major, and he has been recognised with a Google Faculty Research Award (2021-22) and the UTS Vice-Chancellor's Learning and Teaching Award (2020).",
    links: [
      { l: "UTS profile", u: "https://www.uts.edu.au/staff/mukesh.prasad" },
      { l: "Google Scholar", u: "https://scholar.google.com.au/citations?hl=en&user=0TUoub0AAAAJ" },
      { l: "ORCID", u: "https://orcid.org/0000-0002-7745-9667" }
    ]
  },
  // TODO: replace the two placeholders with the real co-directors (name, role, short bio, links).
  coDirectors: [
    { name: "Co-Director name (TODO)", role: "Co-Director", affiliation: "Add affiliation", photo: "",
      bio: "Add a 2-3 sentence biography and research focus for this co-director.", links: [] },
    { name: "Co-Director name (TODO)", role: "Co-Director", affiliation: "Add affiliation", photo: "",
      bio: "Add a 2-3 sentence biography and research focus for this co-director.", links: [] }
  ],

  /* ---------------- Research profile ---------------- */
  themes: [
    { icon: "vision", title: "Multimodal & Vision-Language Learning",
      text: "Vision-language models, visual question answering and cross-modal alignment, including benchmark datasets for remote sensing (RSVLM-QA) and agriculture (IP-VQA).",
      tags: ["VLMs", "VQA", "Remote sensing", "Datasets"] },
    { icon: "health", title: "AI for Health & Biomedicine",
      text: "Machine-learning tools for vertigo and nystagmus diagnosis, medical imaging, multi-omics and neurological disease, developed with clinicians and deployed in clinics.",
      tags: ["Diagnosis", "Medical imaging", "Omics", "Clinical tools"] },
    { icon: "chat", title: "Generative AI, LLMs & Conversational Agents",
      text: "LLM-powered virtual assistants and advisors, conversational recommender systems and responsible use of generative AI in education and services.",
      tags: ["LLMs", "Chatbots", "Education", "Generative AI"] },
    { icon: "sat", title: "Computer Vision & Anomaly Detection",
      text: "Self-supervised learning, segmentation, few-shot and zero-shot anomaly detection, video super-resolution and 3D scene understanding for industry and infrastructure.",
      tags: ["Self-supervised", "Segmentation", "Anomaly detection"] },
    { icon: "shield", title: "Trustworthy Digital Society",
      text: "Voice identification and attribution, deepfake detection, privacy and trust in smart devices, and self-sovereign identity.",
      tags: ["Voice ID", "Deepfake", "Privacy", "Trust"] },
    { icon: "bolt", title: "Forecasting, Energy & Emergency Response",
      text: "Time-series and deep-learning forecasting for batteries and energy trading, and AI to support disaster and emergency response.",
      tags: ["Forecasting", "Energy", "Disaster response"] },
    { icon: "brain", title: "Computational Intelligence",
      text: "Fuzzy systems, evolutionary and swarm methods, brain-computer interfaces and active and transfer learning - the theoretical base of our applied work.",
      tags: ["Fuzzy", "Evolutionary", "BCI"] }
  ],
  impact: [
    "VFocus - an AI tool used by The Balance Clinic for vertigo diagnosis and patient data collection.",
    "Injured-worker support evaluation with Perceptive Health, winner of the ARPA NSW 2023 Innovation in Return to Work award.",
    "HolliAI - a speech-to-speech conversational AI avatar prototype, showcased at the UTS 'AI for Good' event."
  ],

  /* ---------------- Funded research ---------------- */
  // status: "Active" | "Completed"  (check dates and edit as needed)
  funding: [
    { y: "2025-2028", s: "The Garnett Passe and Rodney Williams Memorial Foundation", p: "A virtual expert system for vertigo diagnosis in the frontline", st: "Active" },
    { y: "2025-2026", s: "Bureau of Meteorology", p: "Optimizing renewable energy investments and BESS trading by leveraging machine learning", st: "Active" },
    { y: "2025-2026", s: "Trustworthy Digital Society Hub", p: "VoxID - voice identification and attribution", st: "Active" },
    { y: "2025-2026", s: "Trustworthy Digital Society Hub", p: "Building tech trust in older adults: refashioning wearables and smart devices for supported home living through co-design", st: "Active" },
    { y: "2024-2027", s: "Kunshan Senruida Electromechanical Equipment Co., Ltd.", p: "AI to assist disaster emergency response", st: "Active" },
    { y: "2024", s: "Holli Ai Australia Pty Ltd", p: "AI-based conversational virtual assistant utilizing advanced generative AI", st: "Completed" },
    { y: "2024", s: "Metastar Pty Ltd", p: "AI-powered virtual student advisor using large language models and generative AI", st: "Completed" },
    { y: "2024", s: "UTS Collaboration", p: "Disruptive technologies in allied health: the use of AR/VR in the customised medical-grade footwear sector", st: "Completed" },
    { y: "2023", s: "Proactive Injury Management Solutions Pty Ltd", p: "Injured worker support system evaluation", st: "Completed" },
    { y: "2023", s: "UTS Business School", p: "Business Excellence Australia (BIDA)", st: "Completed" },
    { y: "2023-2026", s: "The Balance Clinic and Laboratory", p: "AI-enabled nystagmus detection and classification for diagnosis of positional vertigo syndromes", st: "Active" },
    { y: "2022-2025", s: "M&M Fuel Pty Ltd", p: "Social media data analysis using machine learning and pattern mining", st: "Completed" },
    { y: "2022", s: "UTS Cross Faculty Collaboration Scheme", p: "Filmic identities in the age of deepfake technology", st: "Completed" },
    { y: "2022", s: "UTS Business School (Dean's Strategic Research Fund)", p: "Impact of social media marketing on search for luxury goods - evidence from Covid-19", st: "Completed" },
    { y: "2021", s: "Google", p: "Empowering Aboriginal and Torres Strait Islander communities via a machine learning curriculum", st: "Completed" },
    { y: "2019", s: "UTS KTP Visiting Fellowship", p: "Federal University of Minas Gerais (UFMG), Brazil", st: "Completed" },
    { y: "2018", s: "UTS KTP Visiting Fellowship", p: "Pontificia Universidad Catolica de Chile (PUC)", st: "Completed" },
    { y: "2018", s: "NSW Innovation Connection Grant", p: "Self-learning algorithms for a decision support tool for smart aviation maintenance (1Ansah Pty Ltd)", st: "Completed" },
    { y: "2017", s: "UTS FEIT Blue Sky", p: "Intelligent machinery parts recognition system for the aviation industry", st: "Completed" }
  ],

  /* ---------------- HDR candidates ----------------
     Source: 2024 promotion CV. Please verify each person's 2026 status.
     status: "current" | "graduated" ; deg: "PhD" | "MRes" ;
     role: "Principal supervisor" | "Co-supervisor"                       */
  students: [
    // ---- Current ----
    { n: "Kairui Jin", deg: "PhD", st: "current", role: "Principal supervisor", t: "An unsupervised learning-based surface defect detection system for multiple materials" },
    { n: "Xing Zi", deg: "PhD", st: "current", role: "Principal supervisor", t: "Self-learning distillation and domain adaptation for human fall detection; multimodal remote sensing" },
    { n: "Kunal Chaturvedi", deg: "PhD", st: "current", role: "Principal supervisor", t: "AI-enabled nystagmus detection and classification for diagnosis of positional vertigo syndromes" },
    { n: "Zeyang Zhou", deg: "PhD", st: "current", role: "Principal supervisor", t: "Machine learning to spot abnormalities for health insurance; battery state-of-charge forecasting" },
    { n: "Tariq Alghamdi", deg: "PhD", st: "current", role: "Principal supervisor", t: "Efficient entity disambiguation over massive unlabeled candidates for real-time applications" },
    { n: "Hatim Madkhali", deg: "PhD", st: "current", role: "Principal supervisor", t: "Green IoT in highly distributed systems (smart cities) in next-generation networks" },
    { n: "Salman Tiwana", deg: "PhD", st: "current", role: "Principal supervisor", t: "Social media data analytics using machine learning and pattern mining" },
    { n: "Mansor Alzahrani", deg: "PhD", st: "current", role: "Principal supervisor", t: "Learning analytics to investigate learning strategies used in flipped classrooms" },
    { n: "Linjie Sui", deg: "MRes", st: "current", role: "Principal supervisor", t: "Advancing avatar generation from text descriptions via CycleGAN and CLIP" },
    { n: "Taoyuan Zhu", deg: "MRes", st: "current", role: "Principal supervisor", t: "Semantic segmentation of breast tumours from ultrasound images using a fuzzy-logic U-Net" },
    { n: "Ratnesh Kumar Sharma", deg: "PhD", st: "current", role: "Principal supervisor", t: "Cloud-computing-based thematic analysis of big data for financial institutions (NLP)" },
    { n: "Ilkwan Kwon", deg: "PhD", st: "current", role: "Principal supervisor", t: "Deep video super-resolution with video compression" },
    { n: "Illia Khurtin", deg: "PhD", st: "current", role: "Principal supervisor", t: "A human-brain-inspired contextual model of information processing" },
    { n: "Altaf Soomro", deg: "PhD", st: "current", role: "Principal supervisor", t: "Modelling inhabitants' behaviour and energy interventions to conserve energy in university buildings" },
    { n: "Guanqi Cheng", deg: "MRes", st: "current", role: "Co-supervisor", t: "Hybrid CNN-Transformer fusion for brain tumour detection" },
    { n: "Chang Qu", deg: "MRes", st: "current", role: "Co-supervisor", t: "Blind super-resolution image reconstruction using meta-learning and transformers" },
    { n: "Feng Feng", deg: "PhD", st: "current", role: "Co-supervisor", t: "Augmented reality in post-stroke limb rehabilitation" },
    { n: "Xianjing Fan", deg: "PhD", st: "current", role: "Co-supervisor", t: "Optimizing multi-task learning in large language models" },
    { n: "Yining Zhao", deg: "PhD", st: "current", role: "Co-supervisor", t: "SENet and CBAM for medical image recognition" },
    { n: "Wanrong Hong", deg: "PhD", st: "current", role: "Co-supervisor", t: "Learning-based multiple-sensor data fusion for 3D scene understanding" },
    { n: "Raj Mahmud", deg: "PhD", st: "current", role: "Co-supervisor", t: "Conversational recommender systems" },
    { n: "Abdulrhman Alorini", deg: "PhD", st: "current", role: "Co-supervisor", t: "Big-data processing model for smart-city applications using intelligent IoT" },
    // ---- Graduated ----
    { n: "Sami Karali", deg: "PhD", st: "graduated", yr: 2024, role: "Co-supervisor", t: "Automatic detection and verification system for Arabic rumour news on Twitter" },
    { n: "Kamaladdin Fataliyev", deg: "PhD", st: "graduated", yr: 2024, role: "Co-supervisor", t: "MCASP: multi-modal cross-attention network for stock market prediction" },
    { n: "Hamza Sulimani", deg: "PhD", st: "graduated", yr: 2023, role: "Principal supervisor", t: "Optimizing resource allocation and offloading for long-term load balancing in fog computing" },
    { n: "Idrees Alsolbi", deg: "PhD", st: "graduated", yr: 2023, role: "Principal supervisor", t: "Leveraging the potential of big data for decision-making and value creation in non-profit organisations" },
    { n: "Ayman Elgharabawy", deg: "PhD", st: "graduated", yr: 2022, role: "Principal supervisor", t: "Preference neural network and its applications" },
    { n: "Ashlesha Akella", deg: "PhD", st: "graduated", yr: 2022, role: "Co-supervisor", t: "Time-critic multi-agent reinforcement learning" },
    { n: "Fereshteh Moradi", deg: "PhD", st: "graduated", yr: 2022, role: "Co-supervisor", t: "Deep learning to map and predict the age-friendliness of the built environment" },
    { n: "Antonio Pereira Dos Santos", deg: "PhD", st: "graduated", yr: 2022, role: "Co-supervisor", t: "Small-scale DC power plants supported by blockchain, AI and IoT" },
    { n: "Yurui Ming", deg: "PhD", st: "graduated", yr: 2020, role: "Co-supervisor", t: "Generalization of deep neural networks for EEG data analysis" }
  ],

  /* ---------------- Collaborators ---------------- */
  collab: {
    industry: [
      "Commonwealth Bank of Australia", "Woolworths", "CBHS Health Fund", "Katonic", "Precision Sourcing",
      "The Balance Clinic and Laboratory", "Perceptive Health", "Holli Ai Australia", "Metastar", "M&M Fuel",
      "Kunshan Senruida Electromechanical Equipment", "Australian Red Cross", "Institute of Applied Technology (TAFE NSW)"
    ],
    academicAU: [
      "Royal Prince Alfred Hospital", "The University of Sydney", "UNSW Sydney", "Western Sydney University",
      "Torrens University", "TAFE NSW", "Deakin University", "The Australian National University"
    ],
    academicIntl: [
      { c: "India", l: ["IIT Indore", "IIIT Delhi", "Indian Institute of Science, Bangalore", "Jawaharlal Nehru University", "University of Delhi", "NIT Allahabad / Arunachal Pradesh", "University of Allahabad", "IIITDM Jabalpur", "Guru Ghasidas University", "Delhi Technological University", "Mahendra University", "Doon University", "South Asian University"] },
      { c: "China", l: ["Shanghai Jiao Tong University", "Shanghai University", "Institute of Automation, Chinese Academy of Sciences"] },
      { c: "United Kingdom", l: ["Nottingham Trent University", "University of Essex"] },
      { c: "USA", l: ["University of South Florida Sarasota-Manatee"] },
      { c: "Europe", l: ["Umea University, Sweden"] },
      { c: "Rest of world", l: ["Khalifa University, UAE", "National Taiwan Ocean University", "City University, Malaysia", "A*STAR, Singapore", "University of Chile", "Federal University of Minas Gerais, Brazil"] }
    ]
  },

  /* ---------------- Service & recognition ---------------- */
  service: {
    awards: [
      "Google Faculty Research Award (TensorFlow), 2021-2022",
      "UTS Vice-Chancellor's Learning and Teaching Award, 2020",
      "Recognition of Excellence, School of Computer Science, UTS, 2022",
      "NSW Innovation Connection Research Grant, 2018",
      "UTS KTP Visiting Fellowships (UFMG Brazil 2019; PUC Chile 2018)"
    ],
    chair: [
      "General Chair - 2nd International Conference on Generative AI and Digital Media (GAIDM 2026)",
      "General Chair - 2nd International Conference on Human-Computer Interaction and Machine Learning (HCIML 2026)",
      "General Chair - International Conference on Information Technology and Artificial Intelligence (2025, 2026)",
      "General Chair - International Conference on Intelligent Vision and Computing (ICIVC 2021-2026)",
      "General Chair - International Conference on Communication and Computational Technologies (ICCCT 2021-2023)",
      "General Chair - 6th International Conference on Data Science and Applications (ICDSA 2025)",
      "Publication Chair - MIIPSC 2027",
      "Special session chair - IJCNN, IEEE FUZZ, IEEE CEC, IEEE SMC, ICONIP (2017-2024)"
    ],
    editorial: [
      "Associate Editor - SN Computer Science (Springer); Frontiers in Applied Mathematics and Statistics",
      "Editorial board - Artificial Intelligence in Health; Journal of Smart Environments and Green Computing; Advances in AI and Machine Learning; Cloud Computing and Data Science; Annals of Applied Sciences; Computer Systems Science and Engineering; and others",
      "Guest editor of 15+ special issues (MDPI Sensors, Algorithms, Applied Sciences, Electronics; ACM TOMM; Neurocomputing; Frontiers)"
    ]
  },

  /* ---------------- News ---------------- */
  news: [
    { d: "2025", t: "RSVLM-QA (remote sensing VQA benchmark) accepted at ACM Multimedia 2025." },
    { d: "2025", t: "DictAS (few-shot anomaly segmentation) accepted at ICCV 2025." },
    { d: "2025", t: "New funding: Bureau of Meteorology (BESS trading) and Trustworthy Digital Society Hub projects." },
    { d: "2025", t: "Garnett Passe and Rodney Williams Memorial Foundation funds a virtual expert system for vertigo diagnosis (2025-2028)." },
    { d: "2024", t: "Lab HDR students win School and FEIT HDR Showcase awards." }
    // TODO: add 2026 news items here.
  ],

  /* ---------------- Contact ---------------- */
  contact: {
    email: "Mukesh.Prasad@uts.edu.au",
    phone: "+61 2 9514 4426",
    address: ["School of Computer Science", "Faculty of Engineering and Information Technology", "University of Technology Sydney", "15 Broadway, Ultimo NSW 2007, Australia"],
    join: "We welcome applications from prospective PhD and MRes students, visiting scholars and industry partners. Please email the Director with your CV, a short research statement and the topic you are interested in."
  },

  fullListLinks: [
    { l: "Google Scholar", u: "https://scholar.google.com.au/citations?hl=en&user=0TUoub0AAAAJ" },
    { l: "ORCID", u: "https://orcid.org/0000-0002-7745-9667" },
    { l: "UTS profile", u: "https://www.uts.edu.au/staff/mukesh.prasad" }
  ]
};
