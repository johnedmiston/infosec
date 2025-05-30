var categories = [
    {                                       // categories[0]
        name: 'Family',
        sub: [
             "General Online Safety",       // categories[0].sub[0]
             "Identity Theft and Fraud",    // categories[0].sub[1]
             "Children and Teens",          // categories[0].sub[2]
             "The Elderly",                 // categories[0].sub[3]
             "Cell Phone Safety"            // categories[0].sub[4]
        ]
    },
    {                                       // categories[1]
        name: 'Church',
        sub: [
            "Church Computers",             // categories[1].sub[0]
            "Protecting Info",              // categories[1].sub[1]
            "Protecting Church WiFi"        // categories[1].sub[2]     
        ]
    },
    {                                       // categories[2]    
        name: 'Business',
        sub: [
            "WiFi Security",                // categories[2].sub[0]
            "Cybersecurity"                 // categories[2].sub[1]
        ]
    }   
];
/*do not change anything above this line, it is used to generate the categories in the code.*/
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
    {//DELETE THIS, diceware is worse than a password manager
        id: 36,
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
    {//DELETE THIS
        id: 37,
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
    {//DELETE THIS
        id: 38,
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
    {//DELETE THIS
        id: 39,
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
    {//DELETE THIS
        id: 40,
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
    {//DELETE THIS
        id: 41,
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
    {//DELETE THIS
        id: 42,
        categories: [
            categories[0].sub[4]
        ],
        link: "https://www.consumerreports.org/cro/magazine/2013/06/keep-your-phone-safe/index.htm",
        title: "Keep Your Phone Safe",
        description: "Essential smartphone security guide for the 100+ million American users. Learn practical protection strategies for mobile payment apps, travel utilities, and financial tools to prevent unauthorized access and data breaches.",
        date: "June, 2013",
        author: "Consumer Reports"
    },
    {//DELETE THIS
        id: 43,
        categories: [
            categories[0].sub[4]
        ],
        link: "https://www.consumerreports.org/cro/magazine/2013/06/keep-your-phone-safe/index.htm",
        title: "Keep Your Phone Safe - How to protect yourself from wireless threats",
        description: "Learn critical mobile security lessons from real-world smartphone compromises. Discover how seemingly harmless apps can breach your network connectivity and implement protection strategies for your mobile digital ecosystem.",
        date: "June, 2013",
        author: "Consumer Reports"
    },
    {//DELETE THIS
        id: 44,
        categories: [
            categories[0].sub[4]
        ],
        link: "https://www.securedatarecovery.com/resources/guide-to-personal-smartphone-security",
        title: "Personal Smartphone Security Guide",
        description: "Enhance mobile device protection with multi-layered security strategies. Learn how to implement effective passwords, app-specific credentials, and advanced authentication methods to secure sensitive information on your smartphone.",
        date: "",
        author: "Secure Data Recovery"
    },
    {//DELETE THIS
        id: 45,
        categories: [
            categories[0].sub[4]
        ],
        link: "https://money.usnews.com/money/personal-finance/articles/2015/01/13/10-ways-to-keep-your-phone-safe",
        title: "10 Ways to Keep Your Phone Safe",
        description: "Protect your smartphone with 10 essential security strategies. Learn practical safeguards for the device 58% of Americans use daily for navigation, social media, browsing, and shopping to prevent privacy breaches and data theft.",
        date: "January 13, 2015",
        author: "Kimberly Palmer"
    },
    {//DELETE THIS
        id: 46,
        categories: [
            categories[0].sub[4]
        ],
        link: "https://www.verizon.com/articles/8-common-sense-tips-to-keep-your-smartphone-secure/",
        title: "8 Common-Sense Tips to Keep Your Smartphone Secure",
        description: "Essential smartphone protection strategies from PIN security to dedicated security apps. Implementation-ready tips for safeguarding your mobile device and personal information from increasingly sophisticated digital threats.",
        date: "",
        author: "Verizon"
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
    {//DELETE THIS
        id: 48,
        categories: [
            categories[0].sub[4]
        ],
        link: "https://www.pcmag.com/archive/the-best-mobile-security-apps-295818",
        title: "The Best Mobile Security Apps",
        description: "Essential mobile security app guide for protecting your smartphone's sensitive data. Compare top solutions that safeguard against physical theft, remote attacks, unauthorized access, and even protection from your own security mistakes.",
        date: "May 24, 2012",
        author: "PCMag Staff"
    },
    {//DELETE THIS
        id: 49,
        categories: [
            categories[2].sub[1]
        ],
        link: "https://dnschecker.org/port-scanner.php",
        title: "Online Port Checker",
        description: "Free online network security assessment tool identifies open, closed, and filtered ports. Quickly detect potential vulnerabilities in your system's configuration to strengthen defenses against unauthorized network access.",
        date: "",
        author: "DNSChecker.org"
    },
    {//DELETE THIS
        id: 50,
        categories: [
            categories[2].sub[1]
        ],
        link: "https://www.rapid7.com/blog/post/2013/01/29/security-flaws-in-universal-plug-and-play-unplug-dont-play/",
        title: "Security Flaws in Universal Plug and Play: Unplug, Don't Play",
        description: "Critical UPnP vulnerability research exposes 80+ million devices to remote attacks. Learn about the widespread SDK flaws allowing remote code execution via single UDP packets and how to protect your network infrastructure.",
        date: "January 29, 2013",
        author: "HD Moore"
    },
    {//DELETE THIS
        id: 51,
        categories: [
            categories[2].sub[1]
        ],
        link: "https://www.metasploit.com/",
        title: "The world's most used penetration testing framework",
        description: "Industry-standard penetration testing framework used by security professionals worldwide. Empower your security team with advanced vulnerability verification tools, assessment capabilities and security awareness resources.",
        date: "",
        author: "RAPID Metasploit"
    },
    {//DELETE THIS
        id: 52,
        categories: [
            categories[2].sub[1]
        ],
        link: "https://www.comparitech.com/net-admin/metasploit-cheat-sheet/",
        title: "Metasploit Cheat Sheet",
        description: "Essential Metasploit command reference for security professionals. Master this leading penetration testing framework with our comprehensive guide to vulnerability identification, verification, and security assessment functionality.",
        date: "November 15, 2024",
        author: "Tim Keary"
    },
    {//DELETE THIS
        id: 53,
        categories: [
            categories[2].sub[1]
        ],
        link: "https://www.openvas.org/",
        title: "Greenbone OpenVAS",
        description: "Comprehensive open-source vulnerability scanner with advanced detection capabilities. Features authenticated and unauthenticated testing across multiple protocols with daily security feed updates for thorough security assessment.",
        date: "",
        author: "OpenVAS"
    },
    {//DELETE THIS
        id: 54,
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
    {//DELETE THIS
        id: 57,
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
    {//DELETE THIS
        id: 59,
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
    {//DELETE THIS
        id: 60,
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