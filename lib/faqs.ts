export type Faq = { question: string; answer: string }

/** The four questions that have always appeared on /contact. */
export const generalFaqs: Faq[] = [
  {
    question: 'How long will my website take to build?',
    answer:
      'Most projects are completed within 2-6 weeks end to end, depending on scope, content readiness, and any additional systems or integrations required. Within that, the final stage is quick - once you have approved the design, sites typically go live within one to two weeks. The variable part is usually content and feedback rather than build time.',
  },
  {
    question: 'Do you work with businesses outside London?',
    answer:
      "Absolutely. While we're based in London, we work with businesses across the UK and internationally through video calls, email, and online collaboration.",
  },
  {
    question: 'How does pricing work?',
    answer:
      "Pricing depends on the size of the project and the systems involved. After a quick consultation, we'll provide a clear proposal with no hidden costs.",
  },
  {
    question: 'What if I already have a website?',
    answer:
      "That's completely fine. We can improve, redesign, or rebuild your existing website while preserving what's already working and fixing what isn't.",
  },
]

export const webDesignFaqs: Faq[] = [
  {
    question: 'What does bespoke web design actually mean?',
    answer:
      'It means the layout, structure and messaging are designed around your business and your customers, rather than a stock template with your logo dropped in. Every section exists because it does a job - explaining what you do, building trust, or moving someone closer to enquiring.',
  },
  {
    question: 'Is a bespoke website worth it over a template?',
    answer:
      'If your website is purely decorative, a template is fine. If it is meant to generate enquiries, the difference shows quickly. Templates are built to look good for everyone, which means they are optimised for nobody in particular - and the parts that drive conversion are usually the first things they get wrong.',
  },
  {
    question: 'Will my website work properly on mobile?',
    answer:
      'Yes. More than half of your visitors will arrive on a phone, so every build is designed mobile-first rather than squeezed down from a desktop layout afterwards. Tap targets, form fields and load speed are all treated as design decisions, not afterthoughts.',
  },
  {
    question: 'Do you write the content, or do I need to provide it?',
    answer:
      'Either works. Most clients bring rough notes about their services and we shape them into copy that reads well and converts. If you already have content you are happy with, we design around it and suggest changes only where something is working against you.',
  },
  {
    question: 'What happens after the website launches?',
    answer:
      'You get hosting, maintenance and direct support if you want it, so the site stays fast, secure and up to date. You are never locked in - the website is yours, and we will hand over everything you need if you would rather manage it elsewhere.',
  },
]

export const webDevelopmentFaqs: Faq[] = [
  {
    question: "What's the difference between web design and web development?",
    answer:
      'Design decides what a website looks like and how someone moves through it. Development is what makes it actually work - the functionality, the data, the integrations and the logic behind the scenes. Most projects need both, but a booking system, client portal or dashboard is a development problem first.',
  },
  {
    question: 'Do I need custom development, or will a plugin do?',
    answer:
      "If an off-the-shelf plugin genuinely does the job, we'll tell you to use it. Custom development earns its cost when the thing you need doesn't exist, when three plugins are fighting each other, or when your process is the reason customers choose you and a generic tool waters it down.",
  },
  {
    question: 'Can you integrate with the tools we already use?',
    answer:
      'Usually, yes. If a system has an API - CRMs, payment providers, booking platforms, accounting software, email tools - we can connect it so data moves automatically instead of someone retyping it. Where no API exists, there are often still reliable ways to bridge the gap.',
  },
  {
    question: 'Can you work on an existing website or codebase?',
    answer:
      'Yes. We regularly add functionality to sites we did not originally build. The first step is a short technical review so we can tell you honestly whether extending what you have is sensible, or whether rebuilding will cost less over the next two years.',
  },
  {
    question: 'How do you handle performance and scale?',
    answer:
      'Speed is built in rather than bolted on: efficient queries, sensible caching, optimised assets and clean structure. Sites are built so that adding traffic, products or users later does not mean starting again.',
  },
]

export const ecommerceFaqs: Faq[] = [
  {
    question: 'What makes an ecommerce site convert better?',
    answer:
      'Mostly the unglamorous parts. Clear product pages, honest delivery information shown early, a checkout that does not ask for anything it does not need, and a mobile experience that works one-handed. Most abandoned baskets are lost to friction and surprise costs, not to design taste.',
  },
  {
    question: 'Which ecommerce platform do you build on?',
    answer:
      "It depends on what you sell and how you operate. A straightforward catalogue is often best served by an established platform, while unusual pricing, configurable products or trade accounts usually justify a custom build. We'll recommend based on your situation rather than defaulting to one option.",
  },
  {
    question: 'Can you improve an existing online store?',
    answer:
      'Yes, and it is often the better first move. We look at where people drop off, fix the highest-impact problems in the product and checkout flow, and leave the rest alone. A full rebuild only makes sense when the foundations are genuinely holding you back.',
  },
  {
    question: 'Can the store connect to our stock and accounting systems?',
    answer:
      'Yes. Stock levels, orders, invoices and customer records can sync with the systems you already run, so your team is not maintaining the same numbers in two places. This is usually where an online store starts saving real time.',
  },
  {
    question: 'Do you handle payments and security?',
    answer:
      'We set up trusted payment providers, SSL and secure checkout as standard. Card details are handled by the payment provider rather than stored on your site, which keeps your liability low and your customers protected.',
  },
]

export const customSoftwareFaqs: Faq[] = [
  {
    question: 'When is custom software worth it over off-the-shelf?',
    answer:
      'When the tools you are paying for still need manual work around them. If your team is exporting spreadsheets to make two systems agree, paying per-seat for features you never use, or bending your process to fit software that was never built for it, custom usually pays for itself.',
  },
  {
    question: 'What kind of software do you build?',
    answer:
      'Internal tools, client portals, booking and scheduling systems, quoting tools, dashboards that pull numbers into one place, and automations that handle the repetitive admin nobody enjoys. Typically things that sit around a business rather than replace everything at once.',
  },
  {
    question: 'How much does custom software cost?',
    answer:
      'It varies with scope, but the useful way to look at it is against what the current process costs. If a job takes ten hours a week and could take one, the software has a payback period you can actually calculate. We scope in phases so you can start small and prove the value.',
  },
  {
    question: 'Do we own the software you build?',
    answer:
      'Yes. You own what we build for you. No per-seat licence that grows with your team, and no situation where growing your business quietly increases your software bill.',
  },
  {
    question: 'Where does AI fit into this?',
    answer:
      'Where it genuinely saves time - answering repeat enquiries, qualifying leads, summarising information, drafting routine follow-ups. We use it where it does a real job, not as a feature to put on a homepage.',
  },
]

export const aiSeoFaqs: Faq[] = [
  {
    question: 'What is AI SEO?',
    answer:
      'AI SEO is the work of making a website easy for AI-powered search systems to read, understand and draw on when answering questions. It builds on ordinary SEO rather than replacing it: the site still needs to be crawlable, fast and genuinely useful. What changes is the emphasis on clear answers, consistent facts and explicit structure.',
  },
  {
    question: 'What is Generative Engine Optimisation (GEO)?',
    answer:
      'GEO focuses on improving the likelihood that your business and content are understood, retrieved and potentially referenced by generative search systems. In practice that means being unambiguous about who you are and what you do, backing claims up, structuring content so individual sections stand on their own, and building enough depth on a subject to read as a credible source.',
  },
  {
    question: 'How is AI SEO different from traditional SEO?',
    answer:
      'Traditional SEO largely competes for a position in a list of links. AI search often summarises an answer instead, so the goal shifts from ranking a page to being the source a system draws on. The underlying work overlaps heavily - technical health, useful content, authority - but AI search rewards clarity and structure more, and keyword repetition much less.',
  },
  {
    question: 'Can you get my business mentioned in ChatGPT or AI Overviews?',
    answer:
      'No one can promise that, and you should be wary of anyone who does. These systems are not ranking tools you can buy into, and their behaviour changes frequently. What we can do is remove the reasons a system would overlook or misunderstand your site, and make your information easy to find, parse and trust. That improves your chances; it does not guarantee an outcome.',
  },
  {
    question: 'Does my website need technical SEO before AI optimisation?',
    answer:
      'Almost always, yes. If a site is slow, badly structured or hard to crawl, no amount of content work will compensate - the systems you want to reach cannot read it properly in the first place. We start with an audit so the sequence is based on what your site actually needs rather than a fixed package.',
  },
  {
    question: 'How long does AI SEO take to show results?',
    answer:
      'Technical fixes can show up within weeks. Content depth, authority and entity signals take longer, usually a few months before the trend is clear. Anyone offering a fixed timeline is guessing, because the starting point, the competition and the market all differ.',
  },
  {
    question: 'How do you measure something like AI search visibility?',
    answer:
      'Partly with the usual measures - organic visibility, rankings, traffic quality and technical health, which remain the most reliable signals we have. Alongside that we track how your brand and services are represented when we query AI systems directly. It is a developing area and we are honest about where measurement is solid and where it is still directional.',
  },
  {
    question: 'Do you offer AI SEO services for London businesses?',
    answer:
      'Yes. We are based in London and work with businesses across the capital, where search competition tends to be heaviest. We also work with clients across the UK and internationally - the approach is the same wherever you are.',
  },
]

export const londonFaqs: Faq[] = [
  {
    question: 'Do we need to meet in person?',
    answer:
      'Only if you want to. Being London-based means we can meet where it helps, but most projects run smoothly over video calls and shared documents. Plenty of our London clients have never needed a face-to-face meeting.',
  },
  {
    question: 'Do you only work with London businesses?',
    answer:
      'No. London is where we are based and where most of our clients happen to be, but we work with businesses across the UK and internationally. The way we run projects is the same either way.',
  },
  {
    question: 'Can you help us show up in local London searches?',
    answer:
      'Yes. That usually means a properly structured Google Business Profile, location-relevant pages that are genuinely useful rather than duplicated, consistent contact details, and a fast site. Local visibility is mostly an accumulation of small correct things.',
  },
  {
    question: 'What kinds of London businesses have you worked with?',
    answer:
      'Tutoring, recruitment, property services, fitness and coaching, among others. The common thread is service businesses where the website has to earn trust quickly and turn interest into a booked enquiry.',
  },
]
