export const LEGAL_EMAIL = 'wyong@gothic1remake.com'
export const SITE_NAME = 'Paralives Guide'
export const SITE_URL = 'https://paralivesguides.org'

export const legalCrossLinks = [
  { to: '/legal/privacy-policy', label: 'Privacy Policy' },
  { to: '/legal/terms-of-service', label: 'Terms of Service' },
  { to: '/legal/copyright', label: 'Copyright' },
  { to: '/legal/about-us', label: 'About Us' },
  { to: '/legal/contact-us', label: 'Contact Us' },
]

export const privacyPolicyPage = {
  title: 'Privacy Policy',
  lead:
    'How Paralives Guide at paralivesguides.org handles information when you browse our unofficial fan site. We collect only what is typical for a static guide website.',
  lastUpdated: '2026-06-05',
  sections: [
    {
      heading: '1. Introduction',
      paragraphs: [
        `This Privacy Policy explains what information may be processed when you visit ${SITE_URL} (“Paralives Guide”, “we”, “us”, or “our”). Paralives Guide is an independent fan-made resource for players of Paralives on Steam Early Access. We are not Paralives Studio, Valve, or any official representative of the game.`,
        'By using this website, you acknowledge that you have read this policy. If you do not agree, please discontinue use of the site.',
      ],
    },
    {
      heading: '2. Information we collect',
      paragraphs: [
        'We do not require account registration and we do not operate checkout, billing, or in-site messaging forms. Information we may receive falls into the following categories:',
      ],
      list: [
        'Technical data automatically sent by your browser, such as IP address, browser type, device type, operating system, referring URL, pages viewed, and approximate access times.',
        'Cookies and similar technologies used for basic site operation, analytics, or advertising if enabled on our hosting or CDN.',
        'Information you voluntarily send by email if you contact us at the address published on our Contact page.',
      ],
    },
    {
      heading: '3. How we use information',
      paragraphs: ['We use collected information for legitimate site purposes, including:'],
      list: [
        'Operating, securing, and improving paralivesguides.org.',
        'Understanding aggregate traffic patterns so we can prioritize popular guide topics.',
        'Responding to correspondence, correction requests, or copyright notices sent to our contact email.',
        'Complying with applicable law or lawful requests from authorities.',
      ],
    },
    {
      heading: '4. Cookies and analytics',
      paragraphs: [
        'Like most websites, we or our service providers may place cookies on your device. Cookies are small text files that help remember preferences or measure visits. You can control cookies through your browser settings; disabling cookies may affect some features.',
        'If we use third-party analytics or advertising tools, those providers may process data under their own privacy policies. We aim to use privacy-respecting configurations where available.',
      ],
    },
    {
      heading: '5. Third-party links and embeds',
      paragraphs: [
        'Our pages link to external services such as Steam, Paralives.com, community wikis, and Steam Workshop listings. When you follow those links, you leave paralivesguides.org and become subject to the third party’s terms and privacy practices.',
        'We do not control how external platforms collect or use your data. Review their policies before submitting personal information elsewhere.',
      ],
    },
    {
      heading: '6. Data retention',
      paragraphs: [
        'Server logs and analytics records are retained only as long as needed for security, troubleshooting, and aggregate reporting, then deleted or anonymized according to our hosting provider’s schedule.',
        'Email correspondence is kept only as long as necessary to resolve your inquiry or meet legal obligations.',
      ],
    },
    {
      heading: '7. Children’s privacy',
      paragraphs: [
        'Paralives Guide is intended for a general audience interested in a life-simulation game. We do not knowingly collect personal information from children under 13 (or the minimum age required in your region). If you believe a child has contacted us with personal data, email us and we will delete it promptly.',
      ],
    },
    {
      heading: '8. Your rights and choices',
      paragraphs: [
        'Depending on where you live, you may have rights to access, correct, delete, or restrict certain processing of personal data. Because we maintain minimal direct identifiers, many requests may relate to data held by analytics or hosting vendors rather than by us directly.',
        `To exercise rights or ask questions about this policy, contact us at ${LEGAL_EMAIL}. We will respond within a reasonable timeframe.`,
      ],
    },
    {
      heading: '9. International visitors',
      paragraphs: [
        'Paralives Guide is published in English and may be accessed globally. If you visit from outside your home country, your information may be processed in jurisdictions where our hosting or service providers operate.',
      ],
    },
    {
      heading: '10. Changes to this policy',
      paragraphs: [
        'We may update this Privacy Policy when our practices, tools, or legal requirements change. The “Last updated” date at the top of the page will reflect the latest revision. Continued use after changes constitutes acceptance of the updated policy.',
      ],
    },
  ],
}

export const termsOfServicePage = {
  title: 'Terms of Service',
  lead:
    'Rules for using paralivesguides.org — an unofficial Paralives player guide. By accessing the site you agree to these terms.',
  lastUpdated: '2026-06-05',
  sections: [
    {
      heading: '1. Agreement to terms',
      paragraphs: [
        `These Terms of Service (“Terms”) govern your access to and use of ${SITE_URL} operated as Paralives Guide. If you do not agree, do not use the website.`,
        'We may modify these Terms at any time. Material changes will be posted on this page with an updated date. Your continued use after changes means you accept the revised Terms.',
      ],
    },
    {
      heading: '2. Nature of the service',
      paragraphs: [
        'Paralives Guide provides unofficial gameplay information, including wiki articles, walkthroughs, cheat command references, mod lists, maps, and roadmap notes for Paralives during Steam Early Access.',
        'All content is offered for general information only. We are not the developer, publisher, or distributor of Paralives. Game mechanics, commands, prices, and availability can change without notice.',
      ],
    },
    {
      heading: '3. Eligibility and acceptable use',
      paragraphs: ['You agree to use the site lawfully and respectfully. You must not:'],
      list: [
        'Attempt to disrupt, scrape at abusive rates, probe, or compromise site infrastructure.',
        'Use automated tools to harvest content for republication that violates our Copyright notice.',
        'Misrepresent Paralives Guide as an official Paralives Studio or Valve property.',
        'Upload malware, post unauthorized personal data of others, or engage in harassment through any channel linked from this site.',
        'Circumvent technical measures or access areas not intended for public use.',
      ],
    },
    {
      heading: '4. No professional advice',
      paragraphs: [
        'Gameplay tips, cheat lists, and economic figures are based on player observation and may be outdated after patches. Nothing on this site constitutes legal, financial, medical, or technical professional advice.',
        'Always verify console commands with in-game HELP and confirm store pricing on Steam before purchase.',
      ],
    },
    {
      heading: '5. Intellectual property',
      paragraphs: [
        'Paralives, Parafolks, Melino, and related game assets are trademarks or copyrights of their respective owners. Our original text, layout, and curated presentation on paralivesguides.org are protected as described in our Copyright page.',
        'You may link to our pages with a fair, non-misleading description. Framing, bulk copying, or commercial reuse requires permission unless a narrow fair-use exception applies in your jurisdiction.',
      ],
    },
    {
      heading: '6. Third-party services',
      paragraphs: [
        'Links to Steam, Workshop mods, official developer pages, and community resources are provided for convenience. We do not endorse every third-party site and are not responsible for their content, security, or business practices.',
        'Purchases, refunds, account recovery, and platform bans are handled solely by Steam or Paralives Studio support channels.',
      ],
    },
    {
      heading: '7. Disclaimers',
      paragraphs: [
        'THE SITE AND ALL CONTENT ARE PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.',
        'We do not warrant that the site will be uninterrupted, error-free, or free of harmful components, or that gameplay information will match your installed build.',
      ],
    },
    {
      heading: '8. Limitation of liability',
      paragraphs: [
        'TO THE MAXIMUM EXTENT PERMITTED BY LAW, PARALIVES GUIDE AND ITS OPERATORS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF DATA, PROFITS, OR GOODWILL, ARISING FROM YOUR USE OF THE SITE.',
        'Our total liability for any claim relating to the site shall not exceed the greater of (a) the amount you paid us directly for access in the twelve months before the claim, or (b) fifty U.S. dollars, if you paid nothing, which is the typical case for this free fan site.',
      ],
    },
    {
      heading: '9. Indemnification',
      paragraphs: [
        'You agree to indemnify and hold harmless Paralives Guide and its operators from claims, damages, and expenses (including reasonable legal fees) arising from your misuse of the site or violation of these Terms.',
      ],
    },
    {
      heading: '10. Termination',
      paragraphs: [
        'We may suspend or block access for conduct that violates these Terms or threatens site integrity. Provisions that by nature should survive termination — including disclaimers, limitation of liability, and intellectual property — will remain in effect.',
      ],
    },
    {
      heading: '11. Governing law',
      paragraphs: [
        'These Terms are governed by applicable laws where the site operator maintains principal operations, without regard to conflict-of-law rules. Disputes should first be raised via our Contact page email so we can attempt informal resolution.',
      ],
    },
    {
      heading: '12. Contact',
      paragraphs: [
        `Questions about these Terms may be sent to ${LEGAL_EMAIL}. See also our Privacy Policy and Copyright notice.`,
      ],
    },
  ],
}

export const copyrightPage = {
  title: 'Copyright Notice',
  lead:
    'Ownership, permitted use, and takedown guidance for content published on paralivesguides.org.',
  lastUpdated: '2026-06-05',
  sections: [
    {
      heading: '1. Site ownership',
      paragraphs: [
        `Unless otherwise stated, the compilation, original writing, page design, and selection of materials on ${SITE_URL} are owned by Paralives Guide and its contributors.`,
        `Copyright © ${new Date().getFullYear()} Paralives Guide. All rights reserved.`,
      ],
    },
    {
      heading: '2. Game and third-party materials',
      paragraphs: [
        'Paralives, Parafolks, Melino, Paradimes, and related names, logos, artwork, and game screenshots are the property of Paralives Studio and/or other rights holders. Steam and the Steam logo are trademarks of Valve Corporation.',
        'We use game references, descriptive names, and limited imagery under nominative fair use to identify the game and help players navigate Early Access content. We do not claim ownership of game assets.',
      ],
    },
    {
      heading: '3. Permitted use',
      paragraphs: ['You may:'],
      list: [
        'View pages for personal, non-commercial gameplay reference.',
        'Share links to our articles with accurate attribution to Paralives Guide.',
        'Quote brief excerpts with a clear link back to the source page.',
      ],
      paragraphsAfter: ['You may not without prior written permission:'],
      listAfter: [
        'Republish full articles, tables, or map data in bulk on competing sites.',
        'Sell, license, or mirror our content for commercial gain.',
        'Remove copyright notices or imply endorsement by Paralives Studio or Valve.',
        'Use our branding to suggest an official partnership.',
      ],
    },
    {
      heading: '4. User correspondence',
      paragraphs: [
        'If you email corrections, screenshots, or suggestions, you grant us a non-exclusive right to adapt that feedback into site content with reasonable attribution where appropriate, unless you request otherwise in writing.',
      ],
    },
    {
      heading: '5. DMCA and copyright complaints',
      paragraphs: [
        'We respect intellectual property rights. If you believe content on paralivesguides.org infringes your copyright, send a notice including:',
      ],
      list: [
        'Identification of the copyrighted work you claim has been infringed.',
        'The exact URL on our site where the material appears.',
        'Your contact information and a statement of good-faith belief that use is not authorized.',
        'A statement, under penalty of perjury, that your notice is accurate and you are authorized to act.',
        'Your physical or electronic signature.',
      ],
      paragraphsAfter: [
        `Send notices to ${LEGAL_EMAIL} with the subject line “Copyright Notice”. We may remove or disable access to disputed material and notify the contributor when applicable.`,
      ],
    },
    {
      heading: '6. Counter-notification',
      paragraphs: [
        'If you believe material was removed in error, you may send a counter-notification with the information required by applicable law, including consent to jurisdiction of the relevant courts. We will follow lawful procedures before restoring content.',
      ],
    },
    {
      heading: '7. Trademarks',
      paragraphs: [
        'All trademarks referenced on this site belong to their respective owners. Use of third-party marks is for identification only and does not imply sponsorship or affiliation.',
      ],
    },
    {
      heading: '8. Updates',
      paragraphs: [
        'This Copyright notice may be revised as the site grows. The latest version is always available at this URL.',
      ],
    },
  ],
  copyrightBlock: {
    heading: 'Copyright',
    lines: [
      `© ${new Date().getFullYear()} Paralives Guide. All rights reserved.`,
      'Paralives Guide is an unofficial fan website and is not affiliated with Paralives Studio or Valve Corporation.',
      'Paralives and related game assets are trademarks or copyrights of their respective owners.',
      `For permissions or takedown requests: ${LEGAL_EMAIL}`,
    ],
  },
}

export const aboutUsPage = {
  title: 'About Us',
  lead:
    'Who runs Paralives Guide, why we built paralivesguides.org, and how we write for players in Steam Early Access.',
  lastUpdated: '2026-06-05',
  sections: [
    {
      heading: 'Our mission',
      paragraphs: [
        'Paralives Guide exists to help players survive and enjoy Paralives during Steam Early Access. We translate patch notes, in-game testing, and community discoveries into readable wiki pages, walkthroughs, cheat references, mod picks, and a Melino map — all in one place.',
        'We are players first. When a hotfix changes bills, skills, or console commands, we update the relevant page and note the review date so you know what to double-check in your own save.',
      ],
    },
    {
      heading: 'What we publish',
      paragraphs: ['Core sections on paralivesguides.org include:'],
      list: [
        'Wiki topics covering Paramaker choices, Live Mode systems, careers, economy, build tools, relationships, and modding policy.',
        'Guides and a How to Play path for new households.',
        'Cheat command lists verified against in-game HELP where possible.',
        'Steam Workshop mod recommendations and install notes.',
        'An interactive Melino map with community pins.',
        'Roadmap and update timelines comparing day-one features with during-EA plans.',
      ],
    },
    {
      heading: 'Editorial standards',
      paragraphs: [
        'We write in plain player language, cite official sources when discussing roadmap promises, and label uncertain mechanics as Early Access realities. We do not publish paid reviews disguised as guides, and we do not claim access to private developer builds.',
        'Screenshots and figures aim to illustrate concepts rather than replace the game. If you spot an error, email us — corrections make the site better for everyone.',
      ],
    },
    {
      heading: 'Independence and affiliations',
      paragraphs: [
        'Paralives Guide is not owned, operated, or endorsed by Paralives Studio or Valve. We do not speak for the developer, handle refunds, or provide official technical support.',
        'Purchase decisions, account security, and platform policies remain between you and Steam or Paralives Studio.',
      ],
    },
    {
      heading: 'Funding and ads',
      paragraphs: [
        'The site may display advertising or use analytics to cover hosting costs. Ads do not influence which mods we list or which wiki corrections we publish. Sponsored content, if ever introduced, will be clearly labeled.',
      ],
    },
    {
      heading: 'Contact the team',
      paragraphs: [
        `General questions, partnership inquiries, and press requests can be sent to ${LEGAL_EMAIL}. For faster routing, include the page URL you are asking about and your installed build version if reporting gameplay discrepancies.`,
        'See our Contact Us page for topic-specific guidance.',
      ],
    },
  ],
}

export const contactUsPage = {
  title: 'Contact Us',
  lead:
    'How to reach the Paralives Guide team for corrections, copyright notices, press, and general questions. We respond by email — no on-site forms.',
  lastUpdated: '2026-06-05',
  sections: [
    {
      heading: 'Email',
      paragraphs: [
        `The primary contact address for Paralives Guide is ${LEGAL_EMAIL}.`,
        'We read messages regularly but operate as a small fan project, so allow several business days for a reply. Complex copyright or legal notices receive priority when properly documented.',
      ],
    },
    {
      heading: 'What to include in your message',
      paragraphs: ['Help us route your email quickly by providing:'],
      list: [
        'A clear subject line (for example: “Wiki correction”, “Copyright notice”, or “Press inquiry”).',
        'The full URL of the page you are referencing.',
        'A concise description of the issue or request.',
        'For gameplay disputes, your platform (Windows/macOS) and approximate patch date if known.',
        'For copyright claims, the information listed on our Copyright page.',
      ],
    },
    {
      heading: 'Topics we can help with',
      paragraphs: ['Paralives Guide can assist with:'],
      list: [
        'Factual corrections to wiki tables, cheat lists, or map pins.',
        'Broken links and typographical errors.',
        'Copyright or trademark concerns about our original writing or layout.',
        'Press or collaboration questions about paralivesguides.org.',
        'General feedback on site organization or missing topics.',
      ],
    },
    {
      heading: 'Topics we cannot resolve',
      paragraphs: [
        'We cannot reset Steam accounts, issue refunds, ban appeals, or provide official Paralives Studio support. For those matters, contact Steam Support or the developer through their official channels.',
        'We cannot troubleshoot mod conflicts inside your game installation beyond general Workshop advice published on our Mods page.',
      ],
    },
    {
      heading: 'Privacy',
      paragraphs: [
        'Information you send by email is used only to handle your request and is not sold to third parties. See our Privacy Policy for retention and rights information.',
      ],
    },
    {
      heading: 'Postal correspondence',
      paragraphs: [
        'Paralives Guide is a web-only publication. At this time we do not list a physical mailing address. All correspondence should be sent electronically to the email address above.',
      ],
    },
  ],
}
