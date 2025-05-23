var categories = [
    {
        name: 'family',
        sub: [
             "General Online Safety",       // General Online Safety
             "Identity Theft and Fraud",      // idtheft
             "Children and Teens",     // children
             "The Elderly",      // elderly
             "Cell Phone Safety"     // cellphone
        ]
    },
    {
        name: 'church',
        sub: [
            "Church Computers",         // computers
            "Protecting Info",   // protecting info
            "Protecting Church Wifi"         // churchwifi
        ]
    },
    {
        name: 'business',
        sub: [
            "WiFi Security",     // wifi security
            "Cybersecurity"     // cyber security
        ]
    }   
];
/*guide to insert and delete articles

*/
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
            categories[1].sub[0],
            categories[1].sub[1]
        ],
        link: "https://ist.mit.edu/security",
        title: "Information Security - Protect MIT Devices and Information",
        description: "Discover essential cybersecurity strategies to protect devices from network attacks. Learn how hackers target seemingly unimportant devices as network entry points & explore MIT's robust security services to safeguard your digital data.",
        date: "",
        author: "MIT IS&T"
    },
    {
        id: 2,
        categories: [
            categories[0].sub[0],
            categories[0].sub[1],
            categories[0].sub[3],
            categories[1].sub[1]
        ],
        link: "https://blog.usecure.io/the-most-common-examples-of-a-phishing-email",
        title: "The most common examples of phishing emails",
        description: "Master phishing email detection with expert tips on spotting sophisticated scams. Learn key indicators of email fraud, protect your identity from hackers, and strengthen your cybersecurity defenses against increasingly convincing phishing attempts.",
        date: "",
        author: "Emma Woods"
    },
    {//3
        categories: [
            categories[0].sub[0],
            categories[0].sub[1],
            categories[0].sub[3],
            categories[1].sub[1]
        ],
        link: "https://phishing.iu.edu/stories/index.html",
        title: "Stories & examples: Phishing Education & Training",
        description: "Enhance your cybersecurity awareness with realistic phishing scenarios. Interactive examples teach email security best practices, scam recognition techniques, and vital anti-phishing strategies to protect your personal and business data.",
        date: "",
        author: "Indiana University"
    },
    {//4
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
    {//5
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
    {//6
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
    {//7
        categories: [
            categories[0].sub[0],
            categories[0].sub[2],
            categories[2].sub[1]
        ],
        link: "https://cyber.org/range",
        title: "Cyber.org Range",
        description: "Virtual cybersecurity training platform for K-12 educators with hands-on security skills development. Safe digital environment for teaching essential cyber defense techniques and real-world security scenarios to students.",
        date: "",
        author: "Cyber.org"
    },
    {//8
        categories: [
            categories[0].sub[3]
        ],
        link: "https://www.comparethemarket.com/credit-cards/content/digital-money-for-seniors/",
        title: "Digital Money for Seniors",
        description: "Essential digital banking guide for seniors: Learn secure online financial management, mobile banking safety tips, and fraud prevention strategies. Navigate digital transactions confidently with senior-focused security practices.",
        date: "",
        author: "ComparetheMarket"
    },
    {//9
        categories: [
            categories[0].sub[0],
            categories[0].sub[2],
        ],
        link: "https://www.nominus.com/en/dm/blog/hosting/cyberbullying-a-guide-to-internet-and-computer-safety",
        title: "Cyberbullying: A Guide to Internet and Computer Safety",
        description: "Comprehensive cyberbullying prevention guide for parents and educators. Learn to identify warning signs, implement protective measures, and teach children digital citizenship skills to safely navigate online interactions.",
        date: "",
        author: "Ana Karely Perez"
    },
    {//10
        categories: [
            categories[2].sub[1]
        ],
        link: "https://www.mastersindatascience.org/resources/cybersecurity-resource-guide/",
        title: "Cybersecurity Resources",
        description: "Essential cybersecurity resource guide for professionals: Access curated tools, organizations, and learning materials to strengthen your security skills. Stay updated on latest threat protection strategies and industry best practices.",
        date: "July, 2021",
        author: "edX"
    },
    {//11
        categories: [
            categories[2].sub[1]
        ],
        link: "https://www.freecodecamp.org/news/key-cybersecurity-concepts-for-career/#heading-security-controls-your-first-line-of-defense",
        title: "Key Security Concepts to Learn for a Career in Cybersecurity",
        description: "Master fundamental cybersecurity concepts for career advancement. Comprehensive guide to security controls, vulnerability management, and threat modeling techniques essential for IT professionals entering the security field.",
        date: "October 8, 2024",
        author: "Jose Toledo"
    },
    {//12
        categories: [
            categories[0].sub[0],
            categories[0].sub[1],
            categories[1].sub[1]
        ],
        link: "https://www.totallymoney.com/identity-theft-protection-guide/",
        title: "Protecting Yourself Against Identity Theft & Fraud",
        description: "Complete identity theft protection guide: Learn data breach prevention, secure online practices, and fraud detection techniques. Essential strategies to safeguard personal information from increasingly sophisticated digital threats.",
        date: "",
        author: "Totally Money"
    },
    {//13
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
    {//14
        categories: [
            categories[0].sub[0],
            categories[1].sub[0],
            categories[1].sub[1]
        ],
        link: "https://www.pcworld.com/article/430799/you-can-encrypt-your-hard-drive-but-the-protection-may-not-be-worth-the-hassle.html",
        title: "You can encrypt your hard drive, but the protection may not be worth the hassle",
        description: "Expert guide to hard drive encryption: Evaluate security benefits versus implementation challenges. Learn practical data protection strategies, encryption methods, and when complete disk encryption delivers optimal security outcomes.",
        date: "January 15, 2015",
        author: "Lincoln Spector"   
    },
    {//15
        categories: [
            categories[0].sub[0],
            categories[1].sub[0],
            categories[1].sub[1]
        ],
        link: "https://lifehacker.com/a-beginners-guide-to-encryption-what-it-is-and-how-to-1508196946",
        title: "A Beginner's Guide to Encryption: What It Is and How to Set it Up",
        description: "Essential encryption guide for beginners: Learn digital security fundamentals, easy encryption setup methods, and practical tools to protect sensitive data. Master basic cryptography concepts to safeguard your digital communications.",
        date: "January 27, 2014",
        author: "Whitson Gordon"
    },
    {//16
        categories: [
            categories[0].sub[0],
            categories[1].sub[0],
            categories[1].sub[1]
        ],
        link: "https://www.gnupg.org/",
        title: "The GNU Privacy Guard",
        description: "Secure your communications with GNU Privacy Guard: Free, open-source encryption tool providing complete OpenPGP standard implementation. Protect sensitive data with versatile key management and cross-platform security features.",
        date: "",
        author: "Free Software Foundation"
    },
    {//17
        categories: [
            categories[0].sub[0],
            categories[1].sub[0],
            categories[1].sub[1]
        ],
        link: "https://lifehacker.com/five-best-file-encryption-tools-5677725",
        title: "Five Best File Encryption Tools",
        description: "Top-rated file encryption tools compared: Expert analysis of leading security applications for personal data protection. Essential guide to locally encrypted storage solutions that keep sensitive information under your control.",
        date: "February 8, 2015",
        author: "Alan Henry"
    },
    {//18
        categories: [
            categories[0].sub[0],
            categories[1].sub[0],
            categories[1].sub[1]
        ],
        link: "https://7-zip.org/",
        title: "7-Zip",
        description: "Powerful file encryption and compression with 7-Zip: Free, open-source security tool with strong AES-256 encryption. Protect sensitive files with this trusted utility used by security professionals worldwide.",
        date: "",
        author: "Igor Pavlov"
    },
    {//19
        categories: [
            categories[0].sub[0],
            categories[1].sub[0],
            categories[1].sub[1]
        ],
        link: "https://lifehacker.com/how-to-encrypt-your-email-and-keep-your-conversations-p-1133495744",
        title: "How to Encrypt Your Email and Keep Your Conversations Private",
        description: "Comprehensive email encryption guide: Step-by-step instructions for securing sensitive communications from snooping. Learn practical implementation of PGP, S/MIME, and other email security protocols to protect your privacy.",
        date: "August 14, 2013",
        author: "Alan Henry"
    },
    {//20
        categories: [
            categories[0].sub[0],
            categories[1].sub[0],
            categories[1].sub[1]
        ],
        link: "https://www.gpg4win.org/",
        title: "GPG4Win",
        description: "GPG4Win: Complete email and file encryption solution for Windows. This free security toolkit enables easy implementation of digital signatures and strong encryption for protecting sensitive communications and documents.",
        date: "",
        author: "Free Software Foundation"
    },
    {//21
        categories: [
            categories[2].sub[1]
        ],
        link: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1300.pdf",
        title: "NIST Cybersecurity Framework 2.0: Small business Quick-Start Guide",
        description: "Essential NIST Cybersecurity Framework implementation guide for small businesses. Practical security controls, risk management strategies, and compliance approaches tailored for organizations with limited security resources.",
        date: "February 2024",
        author: "U.S. Department of Commerce, Et al."
    },
    {//22
        categories: [
            categories[2].sub[1]
        ],
        link: "https://thomasmurray.com/training-employees-cyber-security",
        title: "Why training is the best defence against cybersecurity and data threats",
        description: "Maximize cybersecurity ROI through effective employee training: Learn to build human firewalls against social engineering, phishing attacks, and data breaches. Practical security awareness strategies for organizational defense.",
        date: "",
        author: "Thomas Murray"
    },
    {//23
        categories: [
            categories[2].sub[1]
        ],
        link: "https://cybersecuritydegrees.org/programs/",
        title: "Cybersecurity Programs",
        description: "Comprehensive cybersecurity education guide: Compare top degree programs, certification pathways, and specialized curricula. Essential resource for career advancement in information security across all educational levels.",
        date: "",
        author: "Enroll Education LLC"
    },
    {//24
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
    {//25
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
    {//26
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
    {//27
        categories: [
            categories[0].sub[0],
            categories[1].sub[1]
        ],
        link: "https://tor.eff.org/",
        title: "Tor Browser",
        description: "Maximize online anonymity with Tor Browser: Learn how this essential privacy tool protects your digital footprint through encrypted routing. Trusted by security experts for anonymous browsing and censorship circumvention.",
        date: "",
        author: "The Tor Project"
    },
    {//28
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
    {//29
        categories: [
            categories[0].sub[0],
            categories[1].sub[1]
        ],
        link: "https://thebestvpn.com/5-9-14-eyes-countries/#jurisidiction",
        title: "Country-by-Country Guide to VPN Jurisdictions",
        description: "Critical VPN jurisdiction guide: Learn which countries protect your privacy and which compromise it. Essential reference for choosing secure VPN providers based on data retention laws and surveillance alliance memberships.",
        date: "",
        author: "TheBestVPN"
    },
    {//30
        categories: [
            categories[0].sub[0],
            categories[1].sub[1]
        ],
        link: "https://lifehacker.com/how-your-passwords-are-stored-on-the-internet-and-when-5919918",
        title: "How Your Passwords Are Stored on the Internet (and When Your Password Strength Doesn't Matter)",
        description: "Expert analysis of password storage security: Learn how websites protect your credentials and identify vulnerable systems. Essential guide to understanding hash algorithms, salting, and password database breach implications.",
        date: "June 20, 2012",
        author: "Whitson Gordon"
    },
    {//31
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
    {//32
        categories: [
            categories[0].sub[0],
            categories[1].sub[1]
        ],
        link: "https://www.schneier.com/blog/archives/2014/03/choosing_secure_1.html",
        title: "Choosing Secure Passwords",
        description: "Security expert reveals effective password creation strategies by explaining actual cracking techniques. Learn how offline password attacks work and implement expert-recommended defenses against sophisticated hacking methods.",
        date: "March 3, 2014",
        author: "Bruce Schneier"
    },
    {//33
        categories: [
            categories[0].sub[0],
            categories[1].sub[1],
            categories[2].sub[1]
        ],
        link: "https://www.kaspersky.com/blog/10-worst-password-ideas-as-seen-in-the-adobe-hack/3198/",
        title: "10 Worst Password Ideas (As Seen In The Adobe Hack)",
        description: "Critical password security lessons from the massive Adobe data breach. Analyze real-world password failures and learn proven alternatives to avoid compromise in future breaches. Essential guidance for stronger credentials.",
        date: "November 20, 2013",
        author: "Serge Malenkovich"
    },
    {//34
        categories: [
            categories[0].sub[0],
            categories[1].sub[1],
            categories[2].sub[1]
        ],
        link: "https://lifehacker.com/your-clever-password-tricks-arent-protecting-you-from-t-5937303",
        title: "Your Clever Password Tricks Aren't Protecting You from Today's Hackers",
        description: "Modern password-cracking tools easily defeat traditional 'clever' password techniques. Learn how advanced hacking algorithms bypass common security shortcuts and implement truly effective password strategies for current threat environments.",
        date: "April 11, 2014",
        author: "Melanie Pinola"
    },
    {//35
        categories: [
            categories[0].sub[0],
            categories[1].sub[1],
            categories[2].sub[1]
        ],
        link: "https://www.random.org/passwords/",
        title: "Random.org Password Generator",
        description: "Generate cryptographically secure passwords using true random numbers from atmospheric noise. Superior to algorithm-based generators, this tool creates unpredictable credentials with optimal entropy for stronger authentication security.",
        date: "",
        author: "Random.org"
    },
    {//36
        categories: [
            categories[0].sub[0],
            categories[1].sub[1],
            categories[2].sub[1]
        ],
        link: "https://theworld.com/~reinhold/diceware.html",
        title: "The Diceware Passphrase Home Page",
        description: "Master the Diceware method for creating uncrackable yet memorable passphrases. Learn this dice-based random selection system for generating secure passwords with mathematical strength that resists even advanced cracking attempts.",
        date: "",
        author: "Arnold G. Reinhold"
    },
    {//37
        categories: [
            categories[0].sub[0],
            categories[1].sub[1],
            categories[2].sub[1]
        ],
        link: "https://www.safetydetectives.com/password-meter/",
        title: "Strong Password Generator - 100% Free & Online",
        description: "Create impenetrable passwords with this free security tool. Generate random, high-entropy credentials that resist brute force attacks and password cracking algorithms while maintaining usability for your important accounts.",
        date: "",
        author: "Safety Detectives"
    },
    {//38
        categories: [
            categories[0].sub[0],
            categories[1].sub[1],
            categories[2].sub[1]
        ],
        link: "https://www.lastpass.com/",
        title: "LastPass Password Manager",
        description: "Comprehensive password management solution that securely stores, generates and auto-fills strong credentials. Simplify your digital security with encrypted vault technology and cross-platform access to protect all your accounts.",
        date: "",
        author: "LastPass"
    },
    {//39
        categories: [
            categories[0].sub[0],
            categories[1].sub[1],
            categories[2].sub[1]
        ],
        link: "https://keepass.info/index.html",
        title: "Keepass Password Manager",
        description: "Open-source password management with military-grade encryption and portable functionality. Store credentials securely with multiple authentication factors, auto-type functionality, and robust export options for complete security control.",
        date: "",
        author: "KeePass"
    },
    {//40
        categories: [
            categories[0].sub[0],
            categories[1].sub[1],
            categories[2].sub[1]
        ],
        link: "https://pwsafe.org/faq.shtml",
        title: "Password Safe",
        description: "Secure your entire credential database with just one master password. This encrypted password management solution eliminates risky practices like sticky notes and text files while providing convenient, organized access to all your accounts.",
        date: "",
        author: "Password Safe"
    },
    {//41
        categories: [
            categories[0].sub[0],
            categories[1].sub[1],
            categories[2].sub[1]
        ],
        link: "https://bitwarden.com/",
        title: "Bitwarden Password Manager",
        description: "Open-source password management with end-to-end encryption for individuals and organizations. Store, share and sync credentials securely across all devices with this trusted, transparent security solution for complete digital protection.",
        date: "",
        author: "Bitwarden"
    },
    {//42
        categories: [
            categories[0].sub[4]
        ],
        link: "https://www.consumerreports.org/cro/magazine/2013/06/keep-your-phone-safe/index.htm",
        title: "Keep Your Phone Safe",
        description: "Essential smartphone security guide for the 100+ million American users. Learn practical protection strategies for mobile payment apps, travel utilities, and financial tools to prevent unauthorized access and data breaches.",
        date: "June, 2013",
        author: "Consumer Reports"
    },
    {//43
        categories: [
            categories[0].sub[4]
        ],
        link: "https://www.consumerreports.org/cro/magazine/2013/06/keep-your-phone-safe/index.htm",
        title: "Keep Your Phone Safe - How to protect yourself from wireless threats",
        description: "Learn critical mobile security lessons from real-world smartphone compromises. Discover how seemingly harmless apps can breach your network connectivity and implement protection strategies for your mobile digital ecosystem.",
        date: "June, 2013",
        author: "Consumer Reports"
    },
    {//44
        categories: [
            categories[0].sub[4]
        ],
        link: "https://www.securedatarecovery.com/resources/guide-to-personal-smartphone-security",
        title: "Personal Smartphone Security Guide",
        description: "Enhance mobile device protection with multi-layered security strategies. Learn how to implement effective passwords, app-specific credentials, and advanced authentication methods to secure sensitive information on your smartphone.",
        date: "",
        author: "Secure Data Recovery"
    },
    {//45
        categories: [
            categories[0].sub[4]
        ],
        link: "https://money.usnews.com/money/personal-finance/articles/2015/01/13/10-ways-to-keep-your-phone-safe",
        title: "10 Ways to Keep Your Phone Safe",
        description: "Protect your smartphone with 10 essential security strategies. Learn practical safeguards for the device 58% of Americans use daily for navigation, social media, browsing, and shopping to prevent privacy breaches and data theft.",
        date: "January 13, 2015",
        author: "Kimberly Palmer"
    },
    {//46
        categories: [
            categories[0].sub[4]
        ],
        link: "https://www.verizon.com/articles/8-common-sense-tips-to-keep-your-smartphone-secure/",
        title: "8 Common-Sense Tips to Keep Your Smartphone Secure",
        description: "Essential smartphone protection strategies from PIN security to dedicated security apps. Implementation-ready tips for safeguarding your mobile device and personal information from increasingly sophisticated digital threats.",
        date: "",
        author: "Verizon"
    },
    {//47
        categories: [
            categories[0].sub[4]
        ],
        link: "https://greensmartphones.com/blog/how-to-keep-your-smartphone-secure/",
        title: "How To Keep Your Phone Secure",
        description: "Comprehensive smartphone security guide with 17 actionable protection strategies for both iPhone and Android. Learn to safeguard sensitive data like emails, photos, and location history from unauthorized access and digital threats.",
        date: "March 14, 2025",
        author: "Tom from Green Smartphones"
    },
    {//48
        categories: [
            categories[0].sub[4]
        ],
        link: "https://www.pcmag.com/archive/the-best-mobile-security-apps-295818",
        title: "The Best Mobile Security Apps",
        description: "Essential mobile security app guide for protecting your smartphone's sensitive data. Compare top solutions that safeguard against physical theft, remote attacks, unauthorized access, and even protection from your own security mistakes.",
        date: "May 24, 2012",
        author: "PCMag Staff"
    },
    {//49
        categories: [
            categories[2].sub[1]
        ],
        link: "https://dnschecker.org/port-scanner.php",
        title: "Online Port Checker",
        description: "Free online network security assessment tool identifies open, closed, and filtered ports. Quickly detect potential vulnerabilities in your system's configuration to strengthen defenses against unauthorized network access.",
        date: "",
        author: "DNSChecker.org"
    },
    {//50
        categories: [
            categories[2].sub[1]
        ],
        link: "https://www.rapid7.com/blog/post/2013/01/29/security-flaws-in-universal-plug-and-play-unplug-dont-play/",
        title: "Security Flaws in Universal Plug and Play: Unplug, Don't Play",
        description: "Critical UPnP vulnerability research exposes 80+ million devices to remote attacks. Learn about the widespread SDK flaws allowing remote code execution via single UDP packets and how to protect your network infrastructure.",
        date: "January 29, 2013",
        author: "HD Moore"
    },
    {//51
        categories: [
            categories[2].sub[1]
        ],
        link: "https://www.metasploit.com/",
        title: "The world's most used penetration testing framework",
        description: "Industry-standard penetration testing framework used by security professionals worldwide. Empower your security team with advanced vulnerability verification tools, assessment capabilities and security awareness resources.",
        date: "",
        author: "RAPID Metasploit"
    },
    {//52
        categories: [
            categories[2].sub[1]
        ],
        link: "https://www.comparitech.com/net-admin/metasploit-cheat-sheet/",
        title: "Metasploit Cheat Sheet",
        description: "Essential Metasploit command reference for security professionals. Master this leading penetration testing framework with our comprehensive guide to vulnerability identification, verification, and security assessment functionality.",
        date: "November 15, 2024",
        author: "Tim Keary"
    },
    {//53
        categories: [
            categories[2].sub[1]
        ],
        link: "https://www.openvas.org/",
        title: "Greenbone OpenVAS",
        description: "Comprehensive open-source vulnerability scanner with advanced detection capabilities. Features authenticated and unauthenticated testing across multiple protocols with daily security feed updates for thorough security assessment.",
        date: "",
        author: "OpenVAS"
    },
    {//54
        categories: [
            categories[1].sub[2],
            categories[2].sub[0],
            categories[2].sub[1]
        ],
        link: "https://lifehacker.com/how-to-portscan-your-computer-for-security-holes-198946",
        title: "How to portscan your computer for security holes",
        description: "Learn to identify network security vulnerabilities with port scanning tools. Protect your system from unauthorized access by detecting and closing open ports that could serve as entry points for malicious attackers.",
        date: "September 7, 2006",
        author: "Gina Trapani"
    },
    {//55
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
    {//56
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
    {//57
        categories: [
            categories[0].sub[0],
            categories[1].sub[2],
            categories[2].sub[0]
        ],
        link: "https://www.acunetix.com/blog/web-security-zone/the-email-that-hacks-you/",
        title: "The Email That Hacks You",
        description: "Urgent router security warning: Learn how malicious emails can compromise Asus routers with default credentials. Discover how attackers manipulate DNS servers through simple email previews and implement essential router protection.",
        date: "November 27, 2012",
        author: "Bogdan Calin"
    },
    {//58
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
    {//59
        categories: [
            categories[0].sub[0],
            categories[1].sub[0],
            categories[1].sub[1]
        ],
        link: "https://www2.superantispyware.com/",
        title: "Antispyware to Protect Your PC",
        description: "Comprehensive malware protection solution that defends against spyware, ransomware, trojans, and keyloggers. Enhance Windows Defender with specialized detection capabilities for complete system security.",
        date: "",
        author: "SUPERAntiSpyware"
    },
    {//60
        categories: [
            categories[0].sub[0],
            categories[1].sub[0],
            categories[1].sub[1]
        ],
        link: "http://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html/security_hardening/index",
        title: "Enhancing security of Red Hat Enterprise Linux 9 systems",
        description: "Comprehensive Linux security hardening guide for enterprise environments. Learn system protection strategies against local and remote intrusions with proven techniques for securing servers and workstations in varied deployment scenarios.",
        date: "",
        author: "Red Hat Customer Content Services"
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