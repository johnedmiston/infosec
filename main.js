document.addEventListener("DOMContentLoaded", () => {
  loadCategories();
});

const loadCategories = () => {
  const category_select = document.getElementById("link-categories-mobile");
  const category_list = document.getElementById("main-categories");

  const handleSetState = (name) => {
    const category_index = links_data.findIndex(category => category.name === name);
    const category = links_data[category_index];

    category_list.childNodes.forEach(node => node.classList.remove("active"));
    category_list.childNodes[category_index].classList.add("active");

    category_select.value = category.name;

    loadLinks(category);
  }

  links_data.forEach(category => {
    const option = document.createElement("option");
    option.textContent = category.name;
    option.value = category.name;
    category_select.appendChild(option);

    const li = document.createElement("li");
    li.textContent = category.name;
    li.classList.add("category-option");
    li.onclick = () => handleSetState(category.name);
    category_list.appendChild(li);
  });

  category_select.onchange = (event) => handleSetState(event.target.value)

  category_list.childNodes[0].click();
};

const loadLinks = (category) => {
  const linksContainer = document.getElementById("links-pane");
  linksContainer.innerHTML = ''; // Clear previous links
  let sub_categories_html = ''
  category.categories.forEach(category => {sub_categories_html += createSubCategoryElement(category.name, category.links)})

  let links_html = ''
  if(category.links.length > 0){
    category.links.forEach(link => {links_html += createLinkElement(link)})
  }

  const div = document.createElement("div");
  div.innerHTML = `
    <h1 class="header">${ category.name }</h1>
    <div class="links-main">
      <div
        class="links-group links"
        id="individual-links"
      > ${ links_html } </div>
      <div
        class="links-group sub-category"
      > ${ sub_categories_html } </div>
    </div>
  `

  linksContainer.appendChild(div);
};

const createSubCategoryElement = (name, links) => {
  html = `
    <div
      class="links-group sub-category"
    >
      <h3>${ name }</h3>
    <div class="links">
  `
  links.forEach(link => html += createLinkElement(link))
  html += `</div></div>`
  return html
}

const createLinkElement = (link) => {
  return `
    <div class="card">
      <a
        href="${link.url}"
        target="_blank"
      >
        <div
          class="link-card"
          href="${link.url}"
          target="_blank"
        >
          <img
            src="https://s2.googleusercontent.com/s2/favicons?domain_url=${link.url}"
            alt="link icon"
            style="width: 25px; height: 25px"
            class="link-card-image"
            lazy
          />
          <span class="link-card-name">
            ${ link.name }
          </span>
          <div class="link-card-description">
          ${ link.description }
          </div>
        </a>
      </div>
    </div>
  `
}




const links_data = [
  {
    "name": "Backups",
    "links": [
      {
        "name": "The Beginner's Guide to PC Backup",
        "url": "https://www.pcmag.com/news/the-beginners-guide-to-pc-backup",
        "description": "Offers a comprehensive guide for beginners on how to back up PC data effectively, including different methods, tools, and strategies for ensuring data safety."
      }
    ],
    "categories": []
  },
  {
    "name": "Basics",
    "links": [
      {
        "name": "Top Ten Safe Computing Tips",
        "url": "https://ist.mit.edu/security/tips",
        "description": "Provides essential security tips from MIT’s Information Systems & Technology to protect personal and organizational data, focusing on practices for online and device security."
      }
    ],
    "categories": [
      {
        "name": "Phishing Emails",
        "links": [
          {
            "name": "The most common examples of phishing emails (usecure.io)",
            "url": "https://blog.usecure.io/the-most-common-examples-of-a-phishing-email",
            "description": "Discusses the most frequent phishing email tactics and how to identify and avoid them, offering examples to enhance awareness and protection."
          },
          {
            "name": "Stories & Examples: Phishing Education & Training: Indiana University (iu.edu)",
            "url": "https://phishing.iu.edu/stories/index.html",
            "description": "Shares real-life phishing stories and experiences to educate users about the dangers of phishing attacks and how to recognize them."
          }
        ]
      },
      {
        "name": "Credit Card Fraud",
        "links": [
          {
            "name": "Common Signs of Credit Card Skimmers and Shimmers",
            "url": "https://blog.usecure.io/the-most-common-examples-of-a-phishing-email",
            "description": "Discusses the most frequent phishing email tactics and how to identify and avoid them, offering examples to enhance awareness and protection."
          }
        ]
      },
      {
        "name": "Cybersecurity Questions For Businesses",
        "links": [
          {
            "name": "What Your Board Needs to Know About Cyber Threats – Nonprofit Risk Management Center",
            "url": "https://nonprofitrisk.org/resources/articles/what-your-board-needs-to-know-about-cyber-threats/",
            "description": "Explains what board members need to understand about cyber threats, emphasizing the importance of cybersecurity governance in nonprofit organizations."
          }
        ]
      },
      {
        "name": "Digital Safety for Children and Teens",
        "links": [
          {
            "name": "How Parents and Educators Can Protect Children’s Online Privacy",
            "url": "https://onlinemasteroflegalstudies.com/resources/how-parents-educators-protect-childrens-online-privacy/",
            "description": "Offers strategies for parents and educators to protect children’s privacy online, covering legal, practical, and technological aspects."
          },
          {
            "name": "The parents’ guide to teaching your teen online safety",
            "url": "https://www.mytutor.co.uk/blog/parents/the-parents-guide-to-teaching-your-teen-online-safety/",
            "description": "Provides a guide for parents on how to teach teenagers about online safety, covering social media, cyberbullying, and safe browsing practices."
          },
          {
            "name": "Cyber.org - Range",
            "url": "https://cyber.org/range",
            "description": "Describes CYBER.ORG’s initiative to provide a virtual cyber range for students and educators, allowing them to practice and improve cybersecurity skills in a controlled environment."
          },
          {
            "name": "Cyber.org - Project Access",
            "url": "https://cyber.org/initiatives/project-access",
            "description": "Details CYBER.ORG’s Project Access, which aims to provide cybersecurity education and resources to students with disabilities."
          }
        ]
      },
      {
        "name": "Digital Safety For Seniors",
        "links": [
          {
            "name": "Digital money for seniors",
            "url": "https://www.comparethemarket.com/credit-cards/content/digital-money-for-seniors/",
            "description": "Offers advice to seniors on how to use digital money safely, including tips on avoiding scams and understanding digital financial tools."
          }
        ]
      },
      {
        "name": "Cyberbullying",
        "links": [
          {
            "name": "Cyberbullying: A Guide to Internet and Computer Safety",
            "url": "https://www.nominus.com/en/dm/blog/hosting/cyberbullying-a-guide-to-internet-and-computer-safety",
            "description": "Guides users through the risks of cyberbullying and internet safety, providing tips on how to stay safe online and protect personal information."
          }
        ]
      },
      {
        "name": "Cybersecurity Resources Guide",
        "links": [
          {
            "name": "Cybersecurity Resources",
            "url": "https://www.mastersindatascience.org/resources/cybersecurity-resource-guide/",
            "description": "A comprehensive resource guide on cybersecurity, covering essential topics, educational paths, and career opportunities in the field."
          }
        ]
      }
    ]
  },
  {
    "name": "Cyber Crime",
    "links": [
      {
        "name": "An introduction to cyber security and data protection",
        "url": "https://online.york.ac.uk/resources/introduction-to-cyber-security-data-protection/",
        "description": "Introduces key concepts in cybersecurity and data protection, providing foundational knowledge for beginners."
      },
      {
        "name": "Protecting Yourself Against Identity Theft & Fraud",
        "url": "https://www.totallymoney.com/identity-theft-protection-guide/",
        "description": "A detailed guide on how to protect oneself from identity theft, including tips on monitoring credit reports and securing personal information."
      },
      {
        "name": "Internet Fraud Statistics for 2022",
        "url": "https://www.internetadvisor.com/internet-fraud-statistics-and-facts-for-2022",
        "description": "Presents statistics and facts about internet fraud in 2022, highlighting trends, common scams, and prevention methods."
      }
    ],
    "categories": []
  },
  {
    "name": "Encryption",
    "links": [],
    "categories": [
      {
        "name": "Encrypting hard drives",
        "links": [
          {
            "name": "You can encrypt your hard drive, but the protection may not be worth the hassle",
            "url": "https://www.pcworld.com/article/430799/you-can-encrypt-your-hard-drive-but-the-protection-may-not-be-worth-the-hassle.html",
            "description": "Discusses the benefits and potential downsides of encrypting a hard drive, offering insights into whether it’s worth the effort for most users."
          },
          {
            "name": "A Beginner's Guide to Encryption: What It Is and How to Set it Up",
            "url": "https://lifehacker.com/a-beginners-guide-to-encryption-what-it-is-and-how-to-1508196946",
            "description": "A beginner’s guide explaining what encryption is, how it works, and how individuals can use it to protect their data and communications."
          },
          {
            "name": "The GNU Privacy Guard",
            "url": "https://www.gnupg.org/",
            "description": "The official site for GnuPG, an open-source encryption software that allows users to securely encrypt and sign their data and communications."
          }
        ]
      },
      {
        "name": "Encrypting Files",
        "links": [
          {
            "name": "Five Best File Encryption Tools",
            "url": "https://lifehacker.com/five-best-file-encryption-tools-5677725",
            "description": "Reviews five of the best file encryption tools, providing an overview of their features, usability, and effectiveness in securing data."
          },
          {
            "name": "7 Zip",
            "url": "https://7-zip.org/",
            "description": "The official website for 7-Zip, a free and open-source file archiver that includes strong AES-256 encryption for securing compressed files."
          }
        ]
      },
      {
        "name": "Encrypting Email",
        "links": [
          {
            "name": "How to Encrypt Your Email and Keep Your Conversations Private",
            "url": "https://lifehacker.com/how-to-encrypt-your-email-and-keep-your-conversations-p-1133495744",
            "description": "A guide on how to encrypt emails to keep conversations private, including tools and tips for both beginners and advanced users."
          },
          {
            "name": "Gpg4win - a secure solution...",
            "url": "https://www.gpg4win.org/",
            "description": "The official site for Gpg4win, a Windows toolset for email and file encryption using GnuPG."
          }
        ]
      }
    ]
  },
  {
    "name": "Miscellaneous",
    "links": [
      {
        "name": "NIST Cybersecurity Framework 2.0: Small Business Quick-Start Guide",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1300.pdf",
        "description": "NIST's Special Publication 1300, providing guidelines and standards for cryptographic key management, aimed at enhancing the security of sensitive data."
      },
      {
        "name": "Why training is the best defence against cybersecurity and data threats",
        "url": "https://thomasmurray.com/training-employees-cyber-security",
        "description": "Discusses the importance of cybersecurity training for employees, offering strategies to improve organizational security awareness and practices."
      },
      {
        "name": "Cybersecurity Programs",
        "url": "https://cybersecuritydegrees.org/programs/",
        "description": "A resource for finding cybersecurity degree programs, including information on different career paths and educational requirements."
      },
      {
        "name": "Gmail 2024 Hack Attack Advice: Turn It Off And On Again, Google Says",
        "url": "https://www.forbes.com/sites/daveywinder/2024/01/05/gmail-2024-hack-attack-advice-turn-it-off-and-on-again-google-says/?sh=6d2e588b2b98",
        "description": "Analyzes recent Gmail hacks and Google's advice on handling them, emphasizing the importance of basic security practices like restarting devices."
      },
      {
        "name": "How to Tell if Social Media Is Harming Your Mental Health",
        "url": "https://www.zocdoc.com/blog/how-to-tell-if-social-media-is-harming-your-mental-health/",
        "description": "Examines the impact of social media on mental health, providing tips on how to recognize harmful patterns and maintain a healthier relationship with online platforms."
      },
      {
        "name": "Top Privacy Tools for 2024",
        "url": "https://matthewdbill.medium.com/top-privacy-tools-for-2024-e855e01b8027",
        "description": "Highlights the top privacy tools for 2024, focusing on software and strategies for protecting personal information online."
      }
    ],
    "categories": [
      {
        "name": "Anonymous Browsing",
        "links": [
          {
            "name": "Tor Browser",
            "url": "https://tor.eff.org/",
            "description": "The official site for the Tor Project, offering tools and resources for anonymous browsing and protecting online privacy through the Tor network."
          }
        ]
      },
      {
        "name": "VPN",
        "links": [
          {
            "name": "What is a VPN and how does it work?",
            "url": "https://thebestvpn.com/what-is-vpn-beginners-guide/",
            "description": "A beginner’s guide to VPNs, explaining what they are, how they work, and why they are essential for online privacy and security."
          },
          {
            "name": "Country-by-Country Guide to VPN Jurisdictions",
            "url": "https://thebestvpn.com/5-9-14-eyes-countries/#jurisidiction",
            "description": "Explains the significance of the 5, 9, and 14 Eyes countries in the context of international surveillance and data privacy."
          }
        ]
      }
    ]
  },
  {
    "name": "Passwords",
    "links": [
      {
        "name": "How Your Passwords Are Stored on the Internet (and When Your Password Strength Doesn't Matter)",
        "url": "https://lifehacker.com/how-your-passwords-are-stored-on-the-internet-and-when-5919918",
        "description": "Discusses how passwords are stored online and what users need to know about password security and potential vulnerabilities."
      }
    ],
    "categories": [
      {
        "name": "Choosing Secure Passwords",
        "links": [
          {
            "name": "Password Strength",
            "url": "https://en.wikipedia.org/wiki/Password_strength#Guidelines_for_strong_passwords",
            "description": "The Wikipedia page on password strength, providing guidelines for creating strong passwords and understanding their importance in cybersecurity."
          },
          {
            "name": "Schneier - Choosing Secure Passwords",
            "url": "https://www.schneier.com/blog/archives/2014/03/choosing_secure_1.html",
            "description": "Bruce Schneier’s blog post on how to choose secure passwords, offering practical advice for creating strong, memorable passwords."
          }
        ]
      },
      {
        "name": "Don't use these passwords",
        "links": [
          {
            "name": "10 Worst Password Ideas (As Seen In The Adobe Hack)",
            "url": "https://www.kaspersky.com/blog/10-worst-password-ideas-as-seen-in-the-adobe-hack/3198/",
            "description": "Lists the worst password ideas as seen in the Adobe hack, emphasizing common mistakes and how to avoid them."
          },
          {
            "name": "Your Clever Password Tricks Aren't Protecting You from Today's Hackers",
            "url": "https://lifehacker.com/your-clever-password-tricks-arent-protecting-you-from-t-5937303",
            "description": "Discusses why common 'clever' password tricks may not be as secure as users think, offering alternatives for better security."
          }
        ]
      },
      {
        "name": "Random Password Generators",
        "links": [
          {
            "name": "Random.org",
            "url": "https://www.random.org/passwords/",
            "description": "A random password generator tool that creates strong, unpredictable passwords using true randomness from atmospheric noise."
          },
          {
            "name": "The Diceware Passphrase",
            "url": "https://theworld.com/~reinhold/diceware.html",
            "description": "A method for generating secure, easy-to-remember passwords using dice and a word list, providing a high level of security for personal and professional use."
          },
          {
            "name": "Strong Password Generator",
            "url": "https://www.safetydetectives.com/password-meter/",
            "description": "A tool that checks the strength of passwords, providing feedback on how to improve them for better security."
          }
        ]
      },
      {
        "name": "Password Managers",
        "links": [
          {
            "name": "LastPass",
            "url": "https://lastpass.com/misc_download2.php",
            "description": "A popular password manager that helps users securely store and manage their passwords, ensuring they are both strong and accessible."
          },
          {
            "name": "KeePass",
            "url": "https://keepass.info/",
            "description": "The official site for KeePass, an open-source password manager that allows users to store and manage their passwords securely."
          },
          {
            "name": "Password Safe",
            "url": "https://pwsafe.org/",
            "description": "The official site for Password Safe, a tool for managing and organizing passwords securely, developed by security expert Bruce Schneier."
          },
          {
            "name": "Bitwarden",
            "url": "https://bitwarden.com/",
            "description": "A website for Bitwarden, a password manager that offers both free and premium options for securely storing and managing passwords across devices."
          }
        ]
      }
    ]
  },
  {
    "name": "Phone Security",
    "links": [
      {
        "name": "Keep your phone safe - How to protect yourself from wireless threats",
        "url": "https://www.consumerreports.org/cro/magazine/2013/06/keep-your-phone-safe/index.htm",
        "description": "An article offering tips and advice on how to keep your smartphone safe from threats like theft, malware, and unauthorized access."
      },
      {
        "name": "Personal Smartphone Security Guide",
        "url": "https://www.securedatarecovery.com/resources/guide-to-personal-smartphone-security",
        "description": "A guide on personal smartphone security, covering common threats and how to protect against them."
      },
      {
        "name": "10 Ways to Keep Your Phone Safe",
        "url": "https://money.usnews.com/money/personal-finance/articles/2015/01/13/10-ways-to-keep-your-phone-safe",
        "description": "Lists ten actionable tips for keeping smartphones secure, from enabling encryption to installing security apps."
      },
      {
        "name": "8 Common-Sense Tips to Keep Your Smartphone Secure",
        "url": "https://www.verizon.com/articles/8-common-sense-tips-to-keep-your-smartphone-secure/",
        "description": "Verizon’s guide to smartphone security, offering common-sense tips to protect your device from various threats."
      },
      {
        "name": "How To Keep Your Phone Secure",
        "url": "https://greensmartphones.com/blog/how-to-keep-your-smartphone-secure/",
        "description": "Offers advice on maintaining smartphone security, focusing on eco-friendly practices and privacy considerations."
      },
      {
        "name": "The Best Mobile Security Apps",
        "url": "https://www.pcmag.com/archive/the-best-mobile-security-apps-295818",
        "description": "Reviews and ranks the best mobile security apps available, helping users choose the right one for their needs."
      }
    ],
    "categories": []
  },
  {
    "name": "Securing Hardware",
    "links": [],
    "categories": [
      {
        "name": "Vulnerability Scanners",
        "links": [
          {
            "name": "Online Port Checker",
            "url": "https://dnschecker.org/port-scanner.php",
            "description": "A free online tool for scanning open ports on your computer, helping users identify potential security vulnerabilities."
          },
          {
            "name": "Security Flaws in Universal Plug and Play: Unplug, Don't Play",
            "url": "https://www.rapid7.com/blog/post/2013/01/29/security-flaws-in-universal-plug-and-play-unplug-dont-play/",
            "description": "Discusses security flaws in Universal Plug and Play (UPnP) and why users should disable this feature to protect their networks."
          },
          {
            "name": "Metasploit",
            "url": "https://www.metasploit.com/",
            "description": "The official site for Metasploit, a popular penetration testing framework used by cybersecurity professionals to test and improve network security."
          },
          {
            "name": "Metasploit Cheat Sheet",
            "url": "https://www.comparitech.com/net-admin/metasploit-cheat-sheet/",
            "description": "A cheat sheet for using Metasploit, offering quick commands and tips for efficient penetration testing."
          },
          {
            "name": "OpenVAS",
            "url": "https://www.openvas.org/",
            "description": "The official site for OpenVAS, an open-source vulnerability scanning tool that helps users identify security issues in their networks."
          }
        ]
      },
      {
        "name": "Securing Ports",
        "links": [
          {
            "name": "How to portscan your computer for security holes",
            "url": "https://lifehacker.com/how-to-portscan-your-computer-for-security-holes-198946",
            "description": "A guide on how to port scan your computer to identify and fix security holes, using various tools and methods."
          },
          {
            "name": "Shields Up",
            "url": "https://cybermissions.org/infosec/",
            "description": "A resource offering information on information security (InfoSec) practices, educational opportunities, and career guidance."
          }
        ]
      },
      {
        "name": "Securing Routers",
        "links": [
          {
            "name": "What Is Router Hacking and How to Prevent It",
            "url": "https://www.avg.com/en/signal/prevent-router-hacking",
            "description": "Offers tips on preventing router hacking, from changing default settings to using strong passwords and encryption."
          },
          {
            "name": "Danger of default router password",
            "url": "https://security.stackexchange.com/questions/77112/danger-of-default-router-password",
            "description": "A discussion on the dangers of using default router passwords and how to secure your network against this common vulnerability."
          },
          {
            "name": "The Email that Hacks You",
            "url": "https://www.acunetix.com/blog/web-security-zone/the-email-that-hacks-you/",
            "description": "Explains how malicious emails can be used to hack your system, providing tips on how to recognize and avoid them."
          },
          {
            "name": "Secure Your Wireless Router: 8 Things You Can Do Right Now",
            "url": "https://www.howtogeek.com/173921/secure-your-wireless-router-8-things-you-can-do-right-now/",
            "description": "Provides practical steps for securing your wireless router, including changing passwords and updating firmware."
          }
        ]
      }
    ]
  },
  {
    "name": "Securing Operating System",
    "links": [
      {
        "name": "AVG",
        "url": "https://www.avg.com/en-us/free-antivirus-download#",
        "description": "The official site for downloading AVG’s free antivirus software, offering protection against malware, viruses, and other online threats."
      },
      {
        "name": "SuperAntiSpyware",
        "url": "https://www.superantispyware.com/",
        "description": "The official site for SuperAntiSpyware, a tool designed to detect and remove spyware, adware, and other malware from your computer."
      },
      {
        "name": "Securing Redhat and Centos Linux",
        "url": "https://docs.redhat.com/en/documentation/Red_Hat_Enterprise_Linux/7/pdf/Security_Guide/Red_Hat_Enterprise_Linux-7-Security_Guide-en-US.pdf",
        "description": "The Red Hat Enterprise Linux 7 Security Guide, offering detailed instructions and best practices for securing Red Hat systems against various threats."
      }
    ],
    "categories": []
  }
]

