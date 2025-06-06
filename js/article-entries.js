var categories = [
    {                                       // categories[0]
        name: 'Protect Your Family',
        description: "Discover family internet safety strategies to protect your digital household.",
        sub: [
             "General Online Safety",       // categories[0].sub[0]
             "Identity Theft and Fraud",    // categories[0].sub[1]
             "Children and Teens",          // categories[0].sub[2]
             "The Elderly",                 // categories[0].sub[3]
             "Cell Phone Safety",           // categories[0].sub[4]
             "Monitoring Children",         // categories[0].sub[5]
             "Artificial Intelligence",     // categories[0].sub[6]
        ]
    },
    {                                       // categories[1]
        name: "Protect Your Church",
        description: "Church online protection resources to safeguard your congregation\'s information.",
        sub: [
            "Church Computers",             // categories[1].sub[0]
            "Protecting Info",              // categories[1].sub[1]
            "Protecting Church WiFi"        // categories[1].sub[2]    
        ]
    },
    {                                       // categories[2]    
        name: "Protect Your Business",
        description: "Implement cybersecurity strategies for your Christian-Owned Business, Organization, or Ministry.",
        sub: [
            "WiFi Security",                // categories[2].sub[0]
            "Cybersecurity"                 // categories[2].sub[1]
        ]
    }
];
var article = [
     {
        id: 0,
        categories: [
            categories[0].sub[0],
            categories[1].sub[0],
            categories[1].sub[1]
        ],
        link: "https://www.pcmag.com/explainers/the-beginners-guide-to-pc-backup",
        title: "The Beginner's Guide to PC Backup",
        description: "Essential guide to data backup strategies: Learn how to secure your files with proper redundancy techniques. Protect against data loss using cloud storage, external drives & automated backup solutions for complete computer data security.",
        date: "March 29, 2025",
        author: "Eric Griffith"
    },
    {
        id: 1,
        categories: [
            categories[0].sub[0],
            categories[1].sub[1],
            categories[2].sub[1]
        ],
        link: "https://www.nsa.gov/portals/75/documents/what-we-do/cybersecurity/professional-resources/csi-nsas-top10-cybersecurity-mitigation-strategies.pdf",
        title: "NSA'S Top Ten Cybersecurity Mitigation Strategies",
        description: "Discover NSA's top-ranked cybersecurity strategies to defend against APT threats. Implement these prioritized, NIST-aligned tactics to enhance your organization's security posture, minimize attack impacts, and build effective defense-in-depth protection systems.",
        date: "March 2018",
        author: "National Security Agency"
    },
    {
        id: 2,
        categories: [
            categories[0].sub[0],
            categories[0].sub[1],
            categories[0].sub[3],
            categories[1].sub[1]
        ],
        link: "https://us.norton.com/blog/online-scams/phishing-email-examples",
        title: "10 real phishing email examples",
        description: "Learn to identify 10 common phishing email tactics used by scammers to steal personal data and infiltrate devices. Master essential recognition techniques to protect against social engineering attempts, malicious attachments, and fraudulent links.",
        date: "July 30, 2024",
        author: "Dan Rafter"
    },
    {
        id: 3,
        categories: [
            categories[0].sub[0],
            categories[0].sub[1],
            categories[0].sub[3],
            categories[1].sub[1]
        ],
        link: "https://www.cisa.gov/news-events/news/avoiding-social-engineering-and-phishing-attacks",
        title: "Avoiding Social Engineering and Phishing Attacks",
        description: "Comprehensive guide to recognizing and preventing social engineering and phishing attacks. Learn how attackers gather information, establish false credibility, and exploit trust relationships to compromise systems and steal sensitive personal data.",
        date: "February 1, 2021",
        author: "Cybersecurity and Infrastructure Security Agency (CISA)"
    },
    {
        id: 4,
        categories: [
            categories[0].sub[1],
            categories[1].sub[1],
            categories[2].sub[1]
        ],
        link: "https://www.capitalone.com/learn-grow/privacy-security/credit-card-skimmers/",
        title: "How to spot and avoid credit card skimmers",
        description: "Learn to detect and avoid credit card skimmers at ATMs and gas pumps. Essential financial security tips to protect your card information from fraud devices that cost consumers \$1B+ yearly. Guard against identity theft with these tactics.",
        date: "November 14, 2023",
        author: "Capital One"
    },
    {
        id: 5,
        categories: [
            categories[0].sub[0],
            categories[1].sub[1]
        ],
        link: "https://onlinemasteroflegalstudies.com/resources/how-parents-educators-protect-childrens-online-privacy/",
        title: "How Parents and Educators Can Protect Children's Online Privacy",
        description: "Essential digital safety guide for protecting children's online privacy. Discover effective parental controls, privacy settings, and COPPA compliance strategies for secure remote learning and safe internet usage for kids.",
        date: "January 26, 2021",
        author: "edX"
    },
    {
        id: 6,
        categories: [
            categories[0].sub[0],
            categories[1].sub[1]
        ],
        link: "https://www.mytutor.co.uk/blog/parents/the-parents-guide-to-teaching-your-teen-online-safety/",
        title: "The parents' guide to teaching your teen online safety",
        description: "Comprehensive guide to teen internet safety covering social media protection, digital footprint management, and cyberbullying prevention. Essential strategies for parents to teach digital literacy and online threat awareness.",
        date: "April 26, 2023",
        author: "MyTutor"
    },
    {
        id: 7,
        categories: [
            categories[0].sub[0],
            categories[0].sub[2],
            categories[2].sub[1]
        ],
        link: "https://www.cloudshare.com/blog/cybersecurity-practice-labs/#:~:text=CloudShare%20and%20Immersive%20Labs%20are,free%20practice%20with%20OWASP%20vulnerabilities.",
        title: "The 8 Best Virtual Cybersecurity Practice Labs",
        description: "Discover top virtual cybersecurity practice labs for hands-on security training. Compare eight leading platforms offering realistic threat simulation environments to build advanced protection skills against sophisticated modern attack techniques.",
        date: "March 26, 2025",
        author: "Jeremy Davis"
    },
    {
        id: 8,
        categories: [
            categories[0].sub[3]
        ],
        link: "https://www.aarp.org/home-family/personal-technology/info-2024/digital-money-tools-apps.html",
        title: "Your Guide to the Latest Digital Money Tools",
        description: "Navigate modern digital banking tools with expert guidance on security, usability and practical benefits. Learn which fintech innovations truly simplify financial management while maintaining robust protection for your sensitive information.",
        date: "August 9, 2024",
        author: "Kim Porter, et al."
    },
    {
        id: 9,
        categories: [
            categories[0].sub[0],
            categories[0].sub[2],
        ],
        link: "https://www.unicef.org/stories/how-to-stop-cyberbullying",
        title: "Cyberbullying: A Guide to Internet and Computer Safety",
        description: "Complete cyberbullying prevention guide with expert advice from UNICEF and major platforms like Instagram, TikTok and Snapchat. Learn effective protection strategies, reporting procedures, and support resources for online safety.",
        date: "January, 2025",
        author: "Unicef"
    },
    {
        id: 10,
        categories: [
            categories[2].sub[1]
        ],
        link: "https://www.mastersindatascience.org/resources/cybersecurity-resource-guide/",
        title: "Cybersecurity Resources",
        description: "Essential cybersecurity resource guide for professionals: Access curated tools, organizations, and learning materials to strengthen your security skills. Stay updated on latest threat protection strategies and industry best practices.",
        date: "July, 2021",
        author: "edX"
    },
    {
        id: 11,
        categories: [
            categories[2].sub[1]
        ],
        link: "https://www.freecodecamp.org/news/key-cybersecurity-concepts-for-career/#heading-security-controls-your-first-line-of-defense",
        title: "Key Security Concepts to Learn for a Career in Cybersecurity",
        description: "Master fundamental cybersecurity concepts for career advancement. Comprehensive guide to security controls, vulnerability management, and threat modeling techniques essential for IT professionals entering the security field.",
        date: "October 8, 2024",
        author: "Jose Toledo"
    },
    {
        id: 12,
        categories: [
            categories[0].sub[0],
            categories[0].sub[1],
            categories[1].sub[1]
        ],
        link: "https://www.usa.gov/identity-theft",
        title: "Identity theft",
        description: "Comprehensive guide to identity theft prevention, detection and recovery. Learn warning signs, protective measures, and reporting procedures including IRS Form 14039 for tax-related fraud incidents across physical and digital environments.",
        date: "May 3, 2024",
        author: "USA.gov"
    },
    {
        id: 13,
        categories: [
            categories[0].sub[0],
            categories[1].sub[1],
            categories[2].sub[1]
        ],
        link: "https://www.getastra.com/blog/security-audit/cyber-crime-statistics/",
        title: "90+ Cyber Crime Statistics 2025: Cost, Industries & Trends",
        description: "Latest cybercrime statistics reveal alarming digital threat landscape: \$8 trillion in breach costs predicted, with phishing causing 80% of reported incidents. Essential cybersecurity insights for personal and business protection.",
        date: "May 8,2025",
        author: "Nivedita James Palatty"
    },
    {
        id: 14,
        categories: [
            categories[0].sub[0],
            categories[1].sub[0],
            categories[1].sub[1]
        ],
        link: "https://www.pcworld.com/article/2612036/should-you-encrypt-your-system-hard-drive-these-are-the-pros-and-cons.html",
        title: "Should you encrypt your PC's hard drive? The pros and cons explained",
        description: "Essential guide to PC hard drive encryption for protecting sensitive data from theft. Learn how encryption transforms readable data into secure ciphertext, with VeraCrypt recommendations for Windows and options for Mac/Linux users.",
        date: "February 28, 2025",
        author: "Friedrich Stiemer"   
    },
    {
        id: 15,
        categories: [
            categories[0].sub[0],
            categories[1].sub[0],
            categories[1].sub[1]
        ],
        link: "https://www.globalknowledge.com/us-en/resources/resource-library/articles/a-beginners-guide-to-encryption/",
        title: "A Beginner's Guide to Encryption",
        description: "Demystifying encryption: Clear explanation of cryptography basics for non-technical users. Learn practical applications of symmetric, asymmetric, and hashing algorithms to secure your data without requiring advanced mathematics knowledge.",
        date: "March 5, 2021",
        author: "Daniel Cummins"
    },
    {
        id: 16,
        categories: [
            categories[0].sub[0],
            categories[1].sub[0],
            categories[1].sub[1]
        ],
        link: "https://www.pcmag.com/picks/the-best-encryption-software?test_uuid=02LlF0iWKsilxYTJVF8uH5y&test_variant=A",
        title: "The Best Encryption Software for 2025",
        description: "Top encryption software solutions for 2025: Compare leading tools like AxCrypt Premium, Xecrets Ez Premium, and Folder Lock. Protect sensitive files from theft and unauthorized access with user-friendly encryption technologies.",
        date: "September 9, 2024",
        author: "Neil J. Rubenking"
    },
    {
        id: 17,
        categories: [
            categories[0].sub[0],
            categories[1].sub[0],
            categories[1].sub[1]
        ],
        link: "https://www.reflectiz.com/blog/ai-gen-web-attacks/#:~:text=Defense%20Strategies%20Against%20AI%2Dgen,Regulatory%20Compliance%20and%20Legal%20Considerations",
        title: "AI-gen Web Attacks: How to Defend Against Emerging Threats",
        description: "Artificial intelligence (AI) has revolutionized industries from healthcare to entertainment. However, this rapid evolution also brings new challenges, particularly in cybersecurity. One of the most alarming threats is the rise of AI-generated (AI-gen) web attacks, which leverage machine learning and AI to exploit vulnerabilities in web systems, evade detection, and inflict widespread damage. In this article, we explore AI-gen web attacks, how they work, their impact on businesses, and strategies to protect against them.",
        date: "January 27, 2025",
        author: "Onn Nir"
    },
    {
        id: 18,
        categories: [
            categories[0].sub[0],
            categories[1].sub[0],
            categories[1].sub[1]
        ],
        link: "https://www.techradar.com/news/the-best-file-compression-software",
        title: "Best file compression software of 2025",
        description: "2025's best file compression software for maximizing storage efficiency. Discover top tools offering high compression rates, password protection, and multi-format support to optimize cloud backups and counter email attachment limits.",
        date: "July 29, 2024",
        author: "Sofia E.W.W. et al."
    },
    {
        id: 19,
        categories: [
            categories[0].sub[0],
            categories[1].sub[0],
            categories[1].sub[1],
            categories[2].sub[1]
        ],
        link: "https://www.pcmag.com/picks/the-best-email-encryption-services?test_uuid=02LlF0iWKsilxYTJVF8uH5y&test_variant=A",
        title: "The Best Email Encryption Services for 2025",
        description: "Compare 2025's top email encryption services for maximum privacy protection. Discover industry-leading solutions like PreVeil and Proton Mail that offer unbreakable security and robust features for personal and business use.",
        date: "May 5, 2025",
        author: "Neil J. Rubenking"
    },
    {
        id: 20,
        categories: [
            categories[0].sub[0],
            categories[0].sub[6],
            categories[0].sub[1]
        ],
        link: "https://www.willowtreeapps.com/craft/ai-hallucination-detection",
        title: "Detecting AI Hallucination Risk Using a CIA Technique",
        description: "As large language models (LLMs) continue flooding mainstream AI software development, retrieval augmented generation (RAG) has emerged as an early best practice. RAG systems are typically composed of two layers: 1. A semantic search layer, where text embeddings are used to search for information semantically related to a user prompt or question, which supplies... 2. the generation layer with in-context data (ICD) to answer the user directly. While using ICD, a serious risk of AI hallucinations rears its ugly head. Sometimes, the ICD conflicts with the LLM’s world knowledge (i.e., the general domain-independent knowledge the LLM was trained on). When this happens, a game of tug-of-war plays out. If the ICD wins, the LLM replies with accurate data in the context of the use case in question. But if world knowledge (WK) wins, the LLM answers the user’s prompt as if there were no ICD at all, potentially answering out of context or with data that’s no longer accurate. Even more problematic is when the ICD and WK agree, the system will appear to respond accurately when technically it’s hallucinating the right answer. It’s the AI equivalent of \"even a broken clock is right twice a day.\” Winning this tug-of-war in favor of our ICD has been a major undertaking for WillowTree’s Data & AI Research Team (DART) because doing so ensures the reliability and safety of our clients’ RAG systems. One of the most effective strategies we’ve found comes from an espionage technique used by organizations like the CIA to detect information leaks: the canary trap. A canary trap involves telling different stories to different people to see who’s leaking information (i.e., which canary is singing). In our case, we found that by using fictive data — data made intentionally false and thus easily recognizable — we could see when an AI system “sang” using ICD or WK, enabling us to detect and mitigate WK spillover.",
        date: "January 19, 2024",
        author: "Madeline Woodruff, et al."
    },
    {
        id: 21,
        categories: [
            categories[2].sub[1]
        ],
        link: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1300.pdf",
        title: "NIST Cybersecurity Framework 2.0: Small business Quick-Start Guide",
        description: "Essential NIST Cybersecurity Framework implementation guide for small businesses. Practical security controls, risk management strategies, and compliance approaches tailored for organizations with limited security resources.",
        date: "February 2024",
        author: "U.S. Department of Commerce, Et al."
    },
    {
        id: 22,
        categories: [
            categories[2].sub[1]
        ],
        link: "https://www.forbes.com/councils/forbestechcouncil/2023/01/27/how-providing-staff-awareness-training-improves-a-companys-security-posture/",
        title: "How Providing Staff Awareness Training Improves A Company's Security Posture",
        description: "Discover how security awareness training dramatically improves organizational defenses. Learn strategies to combat the 82% of breaches involving human error while achieving compliance with key regulatory frameworks.",
        date: "January 27, 2023",
        author: "Justin Rende"
    },
    {
        id: 23,
        categories: [
            categories[2].sub[1]
        ],
        link: "https://www.usnews.com/best-colleges/rankings/computer-science/cybersecurity?_sort=rank&_sortDirection=asc",
        title: "Best Undergraduate Cybersecurity Programs",
        description: "Comprehensive guide to America's premier cybersecurity education programs. Compare top-ranked institutions based on faculty assessments, ABET accreditation, and graduation rates to launch your career in this high-demand field.",
        date: "2025",
        author: "U.S. News & World Report",
    },
    {
        id: 24,
        categories: [
            categories[0].sub[0],
            categories[1].sub[1]
        ],
        link: "https://www.forbes.com/sites/daveywinder/2024/01/05/gmail-2024-hack-attack-advice-turn-it-off-and-on-again-google-says/?sh=6d2e588b2b98",
        title: "Gmail 2024 Hack Attack Advice: Turn It Off And On Again, Google Says",
        description: "Urgent Gmail security alert: Protect against persistent hack attempts with Google's recommended defensive measures. Essential account protection techniques to safeguard your email from sophisticated information-stealing attacks.",
        date: "January 5, 2024",
        author: "Davey Winder"
    },
    {
        id: 25,
        categories: [
            categories[0].sub[0],
            categories[0].sub[2],
            categories[0].sub[3],
            categories[1].sub[1],
            categories[2].sub[1]
        ],
        link: "https://www.zocdoc.com/blog/how-to-tell-if-social-media-is-harming-your-mental-health/",
        title: "How to Tell if Social Media Is Harming Your Mental Health",
        description: "Research-backed analysis of social media's mental health impacts. Learn evidence-based strategies to identify harmful digital patterns, establish healthy boundaries, and protect psychological wellbeing while staying connected online.",
        date: "January 27, 2023",
        author: "Dr. Nassim Assefi, Et al."
    },
    {
        id: 26,
        categories: [
            categories[0].sub[0],
            categories[0].sub[2],
            categories[1].sub[2]
        ],
        link: "https://matthewdbill.medium.com/top-privacy-tools-for-2024-e855e01b8027",
        title: "Top Privacy Tools for 2024",
        description: "2024's essential privacy tools guide: Discover cutting-edge Zero Knowledge and end-to-end encryption applications. Protect your data from breaches and unauthorized access with these top-rated security solutions.",
        date: "January 5, 2024",
        author: "Matthew Bill"
    },
    {
        id: 27,
        categories: [
            categories[0].sub[0],
            categories[1].sub[1]
        ],
        link: "https://www.pcmag.com/picks/stop-trackers-dead-the-best-private-browsers?test_uuid=02LlF0iWKsilxYTJVF8uH5y&test_variant=A",
        title: "Lose the Trackers: The Best Private Browsers for 2025",
        description: "Discover 2025's best privacy browsers that block trackers, protect your digital identity, and prevent marketers from monitoring your online activities. Compare top options to secure your browsing habits from surveillance.",
        date: "May 24, 2025",
        author: "Michael Muchmore"
    },
    {
        id: 28,
        categories: [
            categories[0].sub[0],
            categories[1].sub[1]
        ],
        link: "https://thebestvpn.com/what-is-vpn-beginners-guide/",
        title: "The Beginner's Guide to Understanding VPNs",
        description: "Essential VPN guide for beginners: Learn how virtual private networks enhance online security, protect against surveillance, and secure public WiFi connections. Compare top providers to find your ideal privacy solution.",
        date: "December 19, 2023",
        author: "Rob Mardisalu"
    },
    {
        id: 29,
        categories: [
            categories[0].sub[0],
            categories[1].sub[1]
        ],
        link: "https://www.top10vpn.com/what-is-a-vpn/vpn-jurisdictions/",
        title: "How Do VPN Jurisdictions Affect You?",
        description: "Essential guide to VPN jurisdiction impact on privacy protection. Learn how Five Eyes, Nine Eyes, and Fourteen Eyes intelligence alliances affect your data security and how to choose services outside surveillance countries.",
        date: "June 26, 2024",
        author: "Callum Tennent"
    },
    {
        id: 30,
        categories: [
            categories[0].sub[0],
            categories[1].sub[1]
        ],
        link: "https://www.relativity.com/blog/passwords-101-how-theyre-hacked-and-why-longer-is-better/",
        title: "Passwords 101: How They're Hacked and Why Longer is Better",
        description: "Master password security fundamentals and defeat common cracking techniques. Understand why malicious actors target credentials and how implementing strong authentication strategies protects all your accounts.",
        date: "June 8, 2022",
        author: "CJ Wiemer"
    },
    {
        id: 31,
        categories: [
            categories[0].sub[0],
            categories[1].sub[1]
        ],
        link: "https://www.hivesystems.com/blog/are-your-passwords-in-the-green",
        title: "The 2025 Hive Systems Password Table",
        description: "Essential password strength visualization: Discover how quickly various password types can be cracked with the most trusted security benchmark in 2025. Learn effective password creation strategies based on mathematical brute force resistance.",
        date: "April 30, 2025",
        author: "Corey Neskey"
    },
    {
        id: 32,
        categories: [
            categories[0].sub[0],
            categories[1].sub[6],
            categories[1].sub[1]
        ],
        link: "https://www.technologyreview.com/2022/12/19/1065596/how-to-spot-ai-generated-text/",
        title: "How to spot AI-generated text",
        description: "This sentence was written by an AI—or was it? OpenAI’s new chatbot, ChatGPT, presents us with a problem: How will we know whether what we read online is written by a human or a machine? Since it was released in late November, ChatGPT has been used by over a million people. It has the AI community enthralled, and it is clear the internet is increasingly being flooded with AI-generated text. People are using it to come up with jokes, write children’s stories, and craft better emails.ChatGPT is OpenAI’s spin-off of its large language model GPT-3, which generates remarkably human-sounding answers to questions that it’s asked. The magic—and danger—of these large language models lies in the illusion of correctness. The sentences they produce look right—they use the right kinds of words in the correct order. But the AI doesn’t know what any of it means. These models work by predicting the most likely next word in a sentence. They haven’t a clue whether something is correct or false, and they confidently present information as true even when it is not. In an already polarized, politically fraught online world, these AI tools could further distort the information we consume. If they are rolled out into the real world in real products, the consequences could be devastating. ",
        date: "April 30, 2025",
        author: "Corey Neskey"
    },
    {
        id: 33,
        categories: [
            categories[0].sub[0],
            categories[1].sub[1],
            categories[2].sub[1]
        ],
        link: "https://www.pcmag.com/news/most-common-worst-passwords-2024-nordpass-is-yours-on-the-list",
        title: "Here Are 2024's Most Used (and Worst) Passwords: Is Yours on the List?",
        description: "NordPass reveals 2024's most vulnerable passwords, including perennial offenders like '123456'. Learn which credentials appear on the dark web and how to create stronger alternatives that resist sophisticated hacking attempts.",
        date: "November 14, 2024",
        author: "Michael Kan"
    },
    {
        id: 34,
        categories: [
            categories[0].sub[0],
            categories[1].sub[1],
            categories[2].sub[1]
        ],
        link: "https://www.beyondtrust.com/blog/entry/top-15-password-management-best-practices",
        title: "15 Password Management Best Practices",
        description: "Essential password management strategies for human and machine accounts. Implement these 15 best practices to overcome authentication challenges, enhance credential security, and properly manage service accounts.",
        date: "July 12, 2022",
        author: "Derek A. Smith"
    },
    {
        id: 35,
        categories: [
            categories[0].sub[0],
            categories[1].sub[1],
            categories[2].sub[1]
        ],
        link: "https://www.pcmag.com/articles/how-to-detect-ai-created-images",
        title: "Can You Spot AI-Generated Images? Take Our Quiz to Test Your Skills",
        description: "One of the first signs that we could no longer believe our own eyes was when we spotted the pope sporting an oversized puffer. AI images have quickly evolved from laughably bizarre to frighteningly believable, and there are big consequences to not being able to tell authentically created images from those generated by artificial intelligence. AI tools to create images—those images you can conjure in your mind but not necessarily execute through traditional media such as photography and painting—are easily accessible and either free or low-cost. OpenAI's Dall-E 3, Google Gemini, Stable Diffusion, Midjourney, Adobe Firefly, Craiyon, and others create credible-looking images that can fool at first glance, and likely even second and third ones.ﾠ",
        date: "February 10, 2025",
        author: "Chandra Steele"
    },
    {
        id: 36,
        categories: [
            categories[0].sub[0],
            categories[1].sub[1]
        ],
        link: "https://www.passwordmanager.com/best-password-managers/",
        title: "The Best Password Managers of 2025",
        description: "2025's top password managers reviewed: Compare leading security tools for generating, storing, and auto-filling credentials. Essential protection against data breaches with cross-platform encryption for individuals, families, and businesses.",
        date: "June 23, 2023",
        author: "Gunnar Kallstrom"
    },
    {
        id: 37,
        categories: [
            categories[0].sub[0],
            categories[0].sub[6]
        ],
        link: "https://www.pcmag.com/how-to/how-to-detect-ai-generated-video-footage",
        title: "Don't Get Duped! Here's How to Spot AI-Generated Video Footage",
        description: "As generative AI continues to improve at a breakneck pace, it's becoming increasingly difficult to tell when something you see online is real or fabricated. And it's not just static images that we have to worry about either. AI-generated videos are on the rise as well, and with the release of OpenAI's Sora AI video generator for those with Plus or Pro accounts, discerning fact from AI-generated fiction could soon be tougher than ever. So how exactly do you spot videos made by Sora and other AIs? Currently, software-aided detection tools for AI-generated video are extremely scarce (unless you are only focused on deepfakes that have a face visible), so for now, you’ll have to trust yourself instead of a robot. To help you sharpen your skills and learn what to watch out for, we've gathered some Sora video samples from OpenAI (including a few that accompanied the company's research paper “Video Generation Models as World Simulators.) Using these samples as examples, we'll show you some of the telltale signs that a video might be AI-generated. Here's what you should look for:",
        date: "December 11, 2024",
        author: "Chandra Steele"
    },
    {
        id: 38,
        categories: [
            categories[0].sub[0],
            categories[0].sub[4],
            categories[0].sub[5]
        ],
        link: "https://blog.scalefusion.com/setup-parental-control-on-android/",
        title: "How to Set Up Parental Controls for Android Devices?",
        description: "As children become more tech-savvy, smartphones and tablets have become a staple in their daily lives, offering a mix of educational resources and entertainment. However, the increased screen time has brought the challenge of managing their exposure to potentially harmful content and online risks.Take Sarah, for example, a busy mom of two kids, who hands over her old Android tablet to her eight-year-old son, Jake, thinking it’s a great way for him to play educational games and watch age-appropriate videos. A few weeks later, she notices that Jake is spending more time on the tablet than expected and is asking questions about things he shouldn’t be exposed to at his age. Concerned, Sarah takes a closer look at the tablet and discovers that Jake has accidentally stumbled upon inappropriate content while browsing and has even downloaded a few games with in-app purchases that drained her account. how to set up parental controls on Android Device Parental controls on Android tablets In February 2024, Ofcom, a safety regulator company, reported that almost three-quarters of teenagers between the age of 13 and 17 have encountered one or more potential harms online[1]. The need for parental control is underscored by such reports and statistics. This blog will walk you through how an MDM helps you put parental controls on Android tablets and smartphones, equipping you with robust features to safeguard your child’s digital journey.",
        date: "October 13, 2023",
        author: "Ayush Maskara"
    },
    {
        id: 39,
        categories: [
            categories[0].sub[0],
            categories[0].sub[5]
        ],
        link: "https://www.pcmag.com/picks/the-best-parental-control-software?test_uuid=02LlF0iWKsilxYTJVF8uH5y&test_variant=A",
        title: "The Best Parental Control Software for 2025",
        description: "Everyone wants to protect their kids online, and parental control software sounds like a no-fuss solution. Why not install an app to keep your kids safe? In the real world, this approach can be complicated. Experts say that installing invasive software to spy on kids can be counterproductive. Also, a curious child can defeat most of the restrictions imposed by parental controls. Finally, most third-party apps we've tested collect and store troubling amounts of data. For these reasons, we no longer assign ratings to third-party parental control products. Instead, we recommend checking out native OS apps, like Apple's Screen Time, Google's Family Link, and Microsoft's Family Safety, for comprehensive, free child-monitoring software. We also recommend enabling the parental control features within gaming and chat apps with your child's consent. If you still prefer to use third-party parental control apps, we have details about popular ones below.",
        date: "November 15, 2024",
        author: "Kim Key"
    },
    {
        id: 40,
        categories: [
            categories[0].sub[0],
            categories[1].sub[2],
            categories[2].sub[0]
        ],
        link: "http://spiceworks.com/it-security/network-security/articles/top-10-firewall-hardware-devices/",
        title: "Top 10 Firewall Hardware Devices in 2022",
        description: "A physical firewall device or firewall hardware is defined as an appliance that sits in-between the uplink and the client system and filters what traffic gets through based on pre-configured security policies, user profiles, and business rules. The uplink carries incoming traffic from public or private networks, whereas the client system is a server, an employee desktop, a WFH system, an IoT node, etc. This article explores the basics of firewall hardware and discusses the top 10 contenders in this space for 2022.",
        date: "May 28, 2021",
        author: "Chiradeep BasuMallick"
    },
    {
        id: 41,
        categories: [
            categories[0].sub[0],
            categories[1].sub[0],
            categories[2].sub[1]
        ],
        link: "http://spiceworks.com/it-security/network-security/articles/top-10-firewall-hardware-devices/",
        title: "How secure is your server hardware?",
        description: "Chances are it's not. Security is always evolving and what worked yesterday will not necessarily work today. Security goes far beyond protecting software and networks. Securing your hardware is often overlooked and can have some costly implications, if it becomes compromised. Relying solely on firewalls to secure the infrastructure is bound to end in disaster. Malicious attackers are switching from software to hardware Firewalls, virus scanning, and even security monitoring tools are all working on the data plane, and the assumption is that underlying physical resources such as firmware are secure. The reality is that cyber-attacks are no longer only targeting the OS and application level. Attacks are now happening at the database, firmware, kernel, and hardware level. Firmware-level attacks in , are a huge problem. In most modern hardware, millions of lines of firmware code run before the OS even boots. Hackers who manage to insert even a couple of lines of malicious code into firmware in the supply chain, at runtime, or via physical access, can steal data, create denial of service conditions, or compromise the integrity of the entire system.",
        date: "October 13, 2020",
        author: "Ala Samadpour"
    },
    {
        id: 42,
        categories: [
            categories[0].sub[4]
        ],
        link: "https://consumer.ftc.gov/articles/how-protect-your-phone-hackers",
        title: "How To Protect Your Phone From Hackers",
        description: "Essential mobile security guide to protect your phone from hackers. Learn practical strategies to prevent identity theft, secure sensitive information, and safeguard personal data stored on your device against common attack vectors.",
        date: "July, 2022",
        author: "Federal Trade Commission"
    },
    {
        id: 43,
        categories: [
            categories[2].sub[1]
        ],
        link: "https://www.spiceworks.com/it-security/vulnerability-management/articles/what-is-a-hardware-security-module/",
        title: "What Is a Hardware Security Module (HSM)? Working, Use Cases, and Best Practices",
        description: "Safeguarding sensitive information is more crucial than ever. With evolving threats, traditional security measures might not be enough. This comprehensive guide explores hardware security modules (HSMs), a powerful tool that can significantly enhance your data security. Hardware security modules (HSMs) are powerful tools that safeguard your most valuable cryptographic assets, acting as fortresses for your sensitive data. This comprehensive guide explores everything you need to know about HSMs, from their inner workings and functionalities to real-world applications across industries. It also delves into best practices to ensure you maximize their effectiveness in securing your data.",
        date: "July 15, 2024",
        author: "Remya Mohanan"
    },
    {
        id: 44,
        categories: [
            categories[0].sub[4]
        ],
        link: "https://preyproject.com/blog/phone-security-20-ways-to-secure-your-mobile-phone",
        title: "Phone security: how to protect your phone from hackers",
        description: "Comprehensive phone security guide with 20 actionable protection strategies. Learn to defend against malware, phishing attacks, and unauthorized access while maintaining convenience and functionality on your data-rich smartphone.",
        date: "October 3, 2024",
        author: "Hugh Taylor"
    },
    {
        id: 45,
        categories: [
            categories[0].sub[4]
        ],
        link: "https://www.mcafee.com/blogs/mobile-security/7-tips-to-protect-your-smartphone-from-getting-hacked/",
        title: "7 Tips to Protect Your Smartphone from Getting Hacked",
        description: "Seven expert strategies to prevent smartphone hacking for business and personal users. Essential security practices to protect sensitive data, prevent network infiltration, and secure dual-purpose devices against sophisticated threats.",
        date: "March 14, 2024",
        author: "Amy Bunn"
    },
    {
        id: 46,
        categories: [
            categories[2].sub[1]
        ],
        link: "https://thectoclub.com/tools/best-hsm-vendors/",
        title: "Unveiling The Top 25 HSM Vendors: A CTO’s Guide",
        description: "Navigating the world of HSM vendors can be overwhelming, especially with the rise of crypto applications and the expanding IoT landscape. Having delved deep into the intricacies of cryptography, I've recognized the paramount importance of robust access controls and the role of certificate authorities in safeguarding our digital assets. An HSM vendor essentially offers tools that manage and safeguard cryptographic keys. With the right tool, you not only bolster your security but also significantly alleviate challenges related to data breaches and unauthorized access. I've carefully evaluated the landscape to bring you options that truly resonate with these core needs, ensuring that you're well-equipped to make an informed choice.",
        date: "March 21, 2025",
        author: "Paulo Gardini Miguel"
    },
    {
        id: 47,
        categories: [
            categories[0].sub[4]
        ],
        link: "https://greensmartphones.com/blog/how-to-keep-your-smartphone-secure/",
        title: "How To Keep Your Phone Secure",
        description: "Comprehensive smartphone security guide with 17 actionable protection strategies for both iPhone and Android. Learn to safeguard sensitive data like emails, photos, and location history from unauthorized access and digital threats.",
        date: "March 14, 2025",
        author: "Tom from Green Smartphones"
    },
    {
        id: 48,
        categories: [
            categories[0].sub[4]
        ],
        link: "https://www.pcmag.com/picks/the-best-android-antivirus-apps?test_uuid=02LlF0iWKsilxYTJVF8uH5y&test_variant=A",
        title: "The Best Android Antivirus for 2025",
        description: "Expert reviews of 2025's best Android antivirus solutions from security testing veterans. Compare top-rated protection tools with advanced features to defend against malware, theft, and privacy invasions on your mobile devices.",
        date: "April 9, 2025",
        author: "Neil J. Rubenking"
    },
    {
        id: 49,
        categories: [
            categories[2].sub[1]
        ],
        link: "https://www.upguard.com/blog/best-open-port-scanners",
        title: "Top 5 Free Open Port Check Tools in 2025",
        description: "Compare 2025's best free open port scanners for identifying network vulnerabilities. Essential security tools to detect exposed services, prevent ransomware attacks, and protect against data breaches through comprehensive port monitoring.",
        date: "January 2, 2025",
        author: "Edward Kost"
    },
    {
        id: 50,
        categories: [
            categories[2].sub[1]
        ],
        link: "https://www.upguard.com/blog/what-is-upnp",
        title: "What is UPnP? Yes, It's Still Dangerous in 2025",
        description: "Critical UPnP security analysis for 2025: Understand persistent risks in this convenient but vulnerable network protocol. Learn how automatic port forwarding threatens network security and implement safer configuration alternatives.",
        date: "January 2, 2025",
        author: "Edward Kost"
    },
    {
        id: 51,
        categories: [
            categories[2].sub[1]
        ],
        link: "https://www.breachlock.com/resources/blog/pentesting-frameworks-methodologies-and-why-they-are-important/",
        title: "Pentesting Frameworks & Methodologies and Why They're Important",
        description: "Essential penetration testing frameworks explained: Maximize cybersecurity effectiveness through structured ethical hacking methodologies. Compare key approaches for identifying and remediating system vulnerabilities before attackers exploit them.",
        date: "April 24, 2024",
        author: "Ann Chesbrough"
    },
    {
        id: 52,
        categories: [
            categories[2].sub[1]
        ],
        link: "https://www.esecurityplanet.com/networks/pentest-framework/",
        title: "What Is a Pentest Framework? Top 7 Frameworks Explained",
        description: "Top 7 penetration testing frameworks compared: Choose the optimal standardized methodology for identifying security vulnerabilities. Essential guide to structured pentesting approaches for diverse network and compliance environments.",
        date: "July 5, 2023",
        author: "Shelby Hiter"
    },
    {
        id: 53,
        categories: [
            categories[2].sub[1]
        ],
        link: "https://www.balbix.com/insights/what-to-know-about-vulnerability-scanning-and-tools/",
        title: "The Best Vulnerability Scanner Tools",
        description: "Vulnerability scanning is a key component of any effective cybersecurity strategy. It involves automated processes to detect software, systems, and network vulnerabilities, allowing organizations to patch security gaps before cybercriminals exploit them.",
        date: "January 16, 2025",
        author: "Terry Olaes"
    },
    {
        id: 54,
        categories: [
            categories[2].sub[1]
        ],
        link: "https://www.esecurityplanet.com/products/unified-threat-management-vendors/",
        title: "6 Best Unified Threat Management (UTM) Devices & Software",
        description: "Unified threat management (UTM) offers a product approaching total security in a box, ideal for small and midsize enterprises (SMEs). UTMs combine multiple network security functions in a single appliance. Typical solutions of UTM devices include intrusion prevention, antivirus, URL filtering, and VPN functionality. Many products that were once labeled UTM are now marketed as firewalls, but they still serve a similar purpose. We’ve compiled our list of the six best UTM products for businesses and also provide a guide for buyers to narrow down their options and select the best product for their team.",
        date: "November 22, 2023",
        author: "Jenna Phipps"
    },
    {
        id: 55,
        categories: [
            categories[0].sub[0],
            categories[1].sub[2],
            categories[2].sub[0]
        ],
        link: "https://www.avg.com/en/signal/prevent-router-hacking",
        title: "What Is Router Hacking and How to Prevent It",
        description: "Comprehensive router security guide for protecting your entire network. Learn detection and prevention techniques for router-based attacks that threaten all connected devices and implement effective Wi-Fi protection measures.",
        date: "February 18, 2021",
        author: "Ivan Belcic"
    },
    {
        id: 56,
        categories: [
            categories[0].sub[0],
            categories[1].sub[2],
            categories[2].sub[0]
        ],
        link: "https://linuxsecurity.com/news/iot-security/the-risks-of-default-router-security-settings",
        title: "Protecting Home Networks: Router Security Insights from 2024 Survey",
        description: "Latest research reveals critical router vulnerabilities affecting most home networks. Learn practical defenses against default configuration exploits to protect your connected devices from increasingly sophisticated network attacks.",
        date: "September 25, 2024",
        author: "Anthony Pell"
    },
    {
        id: 57,
        categories: [
            categories[0].sub[0],
            categories[1].sub[2],
            categories[2].sub[0]
        ],
        link: "https://us.norton.com/blog/privacy/how-to-tell-if-someone-hacked-your-routers",
        title: "How to tell if someone hacked your router: 10 warning signs",
        description: "Ten critical signs your router has been compromised by hackers. Learn to identify suspicious network behavior, implement effective protection measures, and restore security to your home network's most vulnerable entry point.",
        date: "June 14, 2023",
        author: "Claire Stouffer"
    },
    {
        id: 58,
        categories: [
            categories[0].sub[0],
            categories[1].sub[2],
            categories[2].sub[0]
        ],
        link: "https://www.howtogeek.com/173921/secure-your-wireless-router-8-things-you-can-do-right-now/",
        title: "Secure Your Wireless Router: 8 Things You Can Do Right Now",
        description: "Immediate router security improvements to protect your entire home network. Implement these 8 essential configuration changes to strengthen your network's protection against common exploitation techniques and unauthorized access.",
        date: "October 27, 2023",
        author: "Chris Hoffman, Et al."
    },
    {
        id: 59,
        categories: [
            categories[0].sub[0],
            categories[1].sub[0],
            categories[1].sub[1]
        ],
        link: "https://www.pcmag.com/picks/the-best-spyware-protection-security-software?test_uuid=02LlF0iWKsilxYTJVF8uH5y&test_variant=A",
        title: "The Best Antispyware Software for 2025",
        description: "2025's best antispyware solutions reviewed: Protect against surveillance, data theft, and privacy violations with these top-rated security tools. Compare leading options for comprehensive digital defense against modern spyware threats.",
        date: "March 10, 2025",
        author: "Neil J. Rubenking"
    },
    {
        id: 60,
        categories: [
            categories[2].sub[1]
        ],
        link: "https://expertinsights.com/network-security/the-top-unified-threat-management-platforms",
        title: "The Top 8 Unified Threat Management Platforms",
        description: "Unified Threat Management (UTM) platforms are complex and sophisticated security solutions that combine multiple technologies to provide comprehensive security coverage. They act as an essential layer of defense for businesses, allowing them to manage and mitigate a variety of threats in real-time. Typically, UTM platforms consolidate several threat management tools including firewalls, anti-virus, anti-spyware, intrusion prevention, and content filtering, amongst other technologies. UTM solutions allow organizations to streamline and consolidate security infrastructure into one manageable platform. Rather than having to juggle multiple security tools and technologies, organizations can leverage a singular platform to monitor, detect, and respond to threats. This not only eases the administrative burden, but also provides a comprehensive view of the security landscape, enhancing an organization’s ability to identify and counteract threats effectively. When a potential threat is identified, the UTM platform will cross-reference it against a database of known threats to understand if it has been encountered before. If it is a known threat, the UTM solution can respond effectively to counteract it. The range of technologies available to UTM solutions means that new threats can be addressed robustly and effectively. The consolidated nature of UTM solutions also means that there are fewer points of failure, tighter security, and better overall performance. For end users, the centralized approach results in robust protection without the need for constant manual interventions. For IT administrators, it means having a singular, coherent dashboard through which they can enforce policies, monitor network traffic, and manage security alerts. With a single closed system, there are fewer opportunities for threats to slip through the cracks. When multiple tools are used, there is a greater chance of information not being correctly transferred and threats not being addressed effectively. This guide will explore the top enterprise UTM platforms available on the market. We will evaluate their features, as well as the range of security functions they offer, scalability, and overall effectiveness.",
        date: "April 9, 2025",
        author: "Alex Zawalnyski, et al."
    }
];
/*var categories = [
    {
        name: 'family',
        sub: [
             "adults",       // adults
             "idtheft",      // idtheft
             "children",     // children
             "elderly",      // elderly
             "cellphone"     // cellphone
        ]
    },
    {
        name: 'church',
        sub: [
            "computers",         // computers
            "protectInfo",   // protecting info
            "churchwifi"         // churchwifi
        ]
    },
    {
        name: 'business',
        sub: [
            "wifisec",     // wifi security
            "cybersec"     // cyber security
        ]
    }   
];*/