export type BlogBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'quote'; text: string }

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  author: string
  content: BlogBlock[]
}

export const categories = [
  'Web Design',
  'AI & Automation',
  'Software Development',
  'Conversion & Leads',
  'SEO & Performance',
  'Strategy',
] as const

export const blogPosts: BlogPost[] = [
  {
    slug: '10-website-mistakes-costing-you-clients',
    title: '10 Website Mistakes That Are Costing You Clients',
    excerpt:
      'From slow load times to invisible calls to action, these are the silent website mistakes turning visitors away before they ever become clients.',
    category: 'Web Design',
    date: '2026-07-15',
    readTime: '8 min read',
    author: 'The Nexiora Team',
    content: [
      {
        type: 'p',
        text: "For most service businesses, your website is the first real interaction a potential client has with your brand - before a phone call, before a quote, before they ever meet you. If that first impression is slow, confusing, or generic, they won't tell you why they left. They'll just leave. After auditing hundreds of business websites, we keep finding the same costly mistakes on repeat. Here are the ten that quietly do the most damage - and what a fix actually looks like.",
      },
      { type: 'h3', text: '1. Slow Load Times' },
      {
        type: 'p',
        text: "Speed isn't a technical detail, it's a first impression. Research from Google has repeatedly shown that a large share of mobile visitors abandon a page if it takes longer than three seconds to load. Every extra second after that steadily erodes conversions. If your site was built on a bloated template with unoptimised images and third-party scripts, you're likely losing visitors before they see a single word of your copy.",
      },
      { type: 'h3', text: '2. Designed for Desktop, Broken on Mobile' },
      {
        type: 'p',
        text: "More than half of your traffic is almost certainly arriving on a phone. A mobile friendly website design isn't a nice-to-have anymore - it's the baseline. Tiny tap targets, text that requires zooming, and forms that are painful to fill out on a small screen are some of the fastest ways to lose a ready-to-book client.",
      },
      { type: 'h3', text: '3. No Clear Call to Action' },
      {
        type: 'p',
        text: "Visitors shouldn't have to hunt for how to contact you. Every page should have one obvious next step - book a call, request a quote, send a message - repeated at logical points as someone scrolls. Sites that bury contact details in a footer or hide them behind three clicks are leaving enquiries on the table.",
      },
      { type: 'h3', text: '4. Generic, Templated Design' },
      {
        type: 'p',
        text: "A website that looks like every other business in your industry does nothing to build trust or set you apart. Custom website development doesn't have to mean an enormous budget - but it does mean a layout, message, and visual identity built around your business, not a stock template with your logo swapped in.",
      },
      { type: 'h3', text: '5. Confusing Navigation' },
      {
        type: 'p',
        text: "If a visitor can't find your services, pricing, or contact page within a couple of clicks, they'll assume the rest of your business is just as disorganised. Clear, predictable navigation is one of the simplest and most overlooked conversion boosters in business website design.",
      },
      { type: 'h3', text: '6. Weak or Missing SEO Foundations' },
      {
        type: 'p',
        text: 'Plenty of good-looking websites are invisible on Google because the technical SEO underneath was never set up properly - missing page titles, no structured headings, slow indexing, or duplicate content. Without this foundation, even great design will not bring in organic leads.',
      },
      { type: 'h3', text: '7. No Social Proof' },
      {
        type: 'p',
        text: "Testimonials, reviews, case studies, and client logos do more to build trust than another paragraph about your services. If your site doesn't show real people vouching for your work, visitors have no reason to believe you're better than the next search result.",
      },
      { type: 'h3', text: '8. Outdated Content and Broken Links' },
      {
        type: 'p',
        text: 'An old copyright year, a "our latest projects" section from three years ago, or a broken link in your main navigation all send the same signal: nobody is maintaining this site. Ongoing website maintenance is not just about security, it is about keeping the site trustworthy.',
      },
      { type: 'h3', text: '9. Ignoring Website Security' },
      {
        type: 'p',
        text: "An expired SSL certificate, an outdated plugin, or no monitoring in place puts both your data and your visitors' trust at risk. Website security is invisible when it's working - and very visible the moment it isn't.",
      },
      { type: 'h3', text: '10. No System for Following Up With Leads' },
      {
        type: 'p',
        text: 'A beautiful contact form means nothing if enquiries land in an inbox nobody checks for three days. The businesses winning the most work pair their website with automated follow-up, so no lead ever goes cold.',
      },
      { type: 'h2', text: 'The Real Cost of These Mistakes' },
      {
        type: 'p',
        text: "None of these mistakes look dramatic on their own. That's exactly why they're so expensive - they quietly chip away at your conversion rate every single day, and most business owners never see the leads that walked away.",
      },
      {
        type: 'quote',
        text: "A website doesn't have to be broken to be losing you clients. It just has to be slightly worse than the alternative your visitor clicks next.",
      },
      { type: 'h2', text: 'How to Fix It' },
      {
        type: 'p',
        text: "Start with a proper website audit - a clear-eyed look at speed, mobile experience, SEO, security, and conversion paths. From there, prioritise the issues actually costing you leads rather than chasing every trend at once. If your site is ticking more than two or three of the boxes above, it's likely underperforming for your business right now, not just in theory.",
      },
    ],
  },
  {
    slug: 'ai-automation-save-service-businesses-hours',
    title: 'How AI Automation Can Save Service Businesses 20+ Hours Per Week',
    excerpt:
      'From missed calls to manual follow-ups, most service businesses lose hours every week to admin that AI automation can now handle instead.',
    category: 'AI & Automation',
    date: '2026-07-01',
    readTime: '7 min read',
    author: 'The Nexiora Team',
    content: [
      {
        type: 'p',
        text: 'Ask most service business owners where their time actually goes and admin is rarely the plan - but it is almost always the reality. Answering the same questions, chasing quotes, rebooking missed appointments, following up on enquiries that went cold. AI automation for businesses has moved from an interesting idea to a genuinely practical tool, and for service businesses specifically, the time savings are significant.',
      },
      { type: 'h2', text: 'Where the Hours Actually Disappear' },
      {
        type: 'p',
        text: 'Before automating anything, it helps to see where the time really goes. In most service businesses we work with, the biggest drains are the same five: answering repetitive customer questions, manually booking and rescheduling appointments, chasing unresponsive leads, updating spreadsheets or a CRM by hand, and writing the same follow-up messages over and over.',
      },
      { type: 'h2', text: 'An AI Business Assistant Covers the First Response' },
      {
        type: 'p',
        text: 'An AI business assistant - whether that is a chatbot on your site or an automated messaging flow - can answer common questions instantly, any hour of the day, and hand off to a human only when needed. For service businesses that rely on fast response times to win work, this alone can be the difference between booking a client and losing them to a competitor who replied first.',
      },
      { type: 'h2', text: 'AI Appointment Booking Removes the Back-and-Forth' },
      {
        type: 'p',
        text: '"What times do you have this week?" is one of the most repeated messages in any service business inbox. AI appointment booking tools let clients see live availability and book directly, syncing to your calendar automatically. No double-booking, no ten-message thread just to lock in a time.',
      },
      { type: 'h2', text: 'AI Lead Generation Keeps the Pipeline Warm' },
      {
        type: 'p',
        text: 'Most businesses lose leads not because the interest was not there, but because nobody followed up quickly or consistently enough. AI lead generation tools can qualify new enquiries, send instant confirmation, and trigger a structured follow-up sequence - so a lead from Friday evening is not stone cold by Monday morning.',
      },
      { type: 'h2', text: 'Business Process Automation Connects the Dots' },
      {
        type: 'p',
        text: 'The biggest gains usually come from workflow automation that connects the pieces already listed - a new enquiry automatically creates a record in your CRM development system, triggers a welcome message, notifies the right team member, and schedules a follow-up if there is no response. This is business process automation doing the coordinating work a person would otherwise have to do manually, every single time.',
      },
      { type: 'h2', text: 'What 20+ Hours a Week Actually Looks Like' },
      {
        type: 'ul',
        items: [
          'Five to seven hours saved from automated first-response and booking',
          'Five to eight hours saved from automated follow-ups and reminders',
          'Five or more hours saved from admin that no longer needs manual data entry once systems are connected',
        ],
      },
      {
        type: 'p',
        text: 'For a small team, that is the equivalent of hiring a part-time assistant - without the payroll.',
      },
      {
        type: 'quote',
        text: 'Automation does not replace the relationship with your client. It removes the admin standing in the way of you actually having it.',
      },
      { type: 'h2', text: 'Where to Start' },
      {
        type: 'p',
        text: "You don't need to automate everything at once. Start with whichever bottleneck costs you the most time today - usually first response or booking - and build outward from there. A well-built AI automation agency partner can map your specific workflow rather than dropping in a generic chatbot and hoping it fits.",
      },
    ],
  },
  {
    slug: 'custom-software-vs-off-the-shelf-software',
    title: 'Custom Software vs Off-the-Shelf Software: Which Is Right for Your Business?',
    excerpt:
      'Off-the-shelf tools are fast to launch but rarely fit forever. Here is how to decide when custom software development actually pays off.',
    category: 'Software Development',
    date: '2026-06-18',
    readTime: '7 min read',
    author: 'The Nexiora Team',
    content: [
      {
        type: 'p',
        text: 'The real question is not which is better. It is which is better for where your business is right now, and where it is going next. Off-the-shelf software solutions for small businesses can be a genuinely smart starting point. Custom software development becomes the smarter move once your business starts bending itself around the limitations of a generic tool rather than the other way around.',
      },
      { type: 'h2', text: 'When Off-the-Shelf Makes Sense' },
      {
        type: 'p',
        text: "If you are validating a new offer, running a small team, or your workflow is close enough to standard that a well-known platform covers 80 to 90 percent of what you need, off-the-shelf tools win on speed and cost. You are paying for software that already works, is already tested, and does not require a development team to maintain.",
      },
      { type: 'h2', text: "The Signs You've Outgrown It" },
      {
        type: 'p',
        text: 'Off-the-shelf tools start to cost more than they save once you notice a pattern: your team is building workarounds for things the software should just do, you are paying for several tools that do not talk to each other, or you are customising a platform so heavily that updates keep breaking your setup. At that point, the "cheap" option is quietly costing you in time, errors, and lost opportunities.',
      },
      { type: 'h2', text: 'What Custom Software Actually Solves' },
      {
        type: 'p',
        text: 'Business software development built specifically around your workflow removes the workarounds entirely. A custom client portal development project, for example, can give your clients one place to see project status, invoices, and documents - instead of stitching together three separate tools that were never designed to work as one system. The same logic applies to booking system development or CRM development built around exactly how your team actually sells and delivers.',
      },
      { type: 'h2', text: 'MVP Development: The Middle Ground' },
      {
        type: 'p',
        text: 'You do not need to build the full vision on day one. MVP development lets you launch a lean, functional version of a custom system, get it in front of real users, and expand it based on what actually gets used, rather than guessing up front. This is especially relevant for SaaS development, where the fastest way to waste a budget is building features nobody asked for.',
      },
      { type: 'h2', text: 'Weighing the Investment' },
      {
        type: 'p',
        text: "Custom software costs more upfront than a subscription. But subscriptions compound quietly over years, and they still do not fit your process. A software development agency worth working with will tell you honestly when off-the-shelf is still the right call - the goal is not to sell you custom software, it is to solve the actual bottleneck.",
      },
      {
        type: 'quote',
        text: "The most expensive software isn't the one with the highest price tag. It's the one your team has to work around every single day.",
      },
      { type: 'h2', text: 'Making the Decision' },
      {
        type: 'p',
        text: 'Map your current tools against your actual workflow, not the workflow you started with two years ago. If you are duct-taping platforms together to make them behave like one system, that is usually the clearest sign it is time to talk to a business software development company about what a purpose-built solution would look like.',
      },
    ],
  },
  {
    slug: 'complete-website-redesign-checklist-2026',
    title: 'The Complete Website Redesign Checklist for 2026',
    excerpt:
      'A practical, no-fluff checklist covering everything worth reviewing before you commit to a website redesign in 2026.',
    category: 'Web Design',
    date: '2026-06-04',
    readTime: '9 min read',
    author: 'The Nexiora Team',
    content: [
      {
        type: 'p',
        text: 'The biggest mistake in a website redesign is starting with how it should look. Start with why it needs to change and what it needs to do better. Use this checklist to get a clear, honest picture of where your current site stands before a single new page is designed.',
      },
      { type: 'h3', text: '1. Run a Full Website Audit' },
      {
        type: 'p',
        text: 'Review analytics, current conversion rates, bounce rate by page, and where visitors are actually dropping off. A proper website audit tells you which pages are working and which ones are quietly losing you business.',
      },
      { type: 'h3', text: '2. Revisit Your Goals and Audience' },
      {
        type: 'p',
        text: 'Has your business shifted since the last build? New services, a different ideal client, a new price point? Your website redesign services provider should design around who you are targeting today, not who you were targeting when the last site launched.',
      },
      { type: 'h3', text: '3. Check Website Performance Optimisation' },
      {
        type: 'p',
        text: 'Page speed, image sizes, and core web vitals all affect both user experience and search rankings. Website speed optimisation should be part of the brief from day one, not an afterthought fixed after launch.',
      },
      { type: 'h3', text: '4. Audit Mobile Experience Separately' },
      {
        type: 'p',
        text: 'Do not just check that the mobile version "works." Test it as a real visitor would - tap targets, form fields, menu behaviour, load time on a mid-range phone on mobile data.',
      },
      { type: 'h3', text: '5. Review Branding and Web Design Consistency' },
      {
        type: 'p',
        text: 'Colours, typography, imagery, and tone of voice should feel like one cohesive brand across every page, not a patchwork of decisions made at different points over the years.',
      },
      { type: 'h3', text: '6. Evaluate UX and UI Design' },
      {
        type: 'p',
        text: 'Good UX design is about the path a visitor takes to get what they need. Good UI design is about how that path feels. Both matter - a beautiful site with a confusing structure still underperforms.',
      },
      { type: 'h3', text: '7. Check Website Accessibility' },
      {
        type: 'p',
        text: 'Colour contrast, alt text, keyboard navigation, and readable font sizes are not optional extras. Website accessibility widens who can actually use your site and is increasingly factored into search visibility too.',
      },
      { type: 'h3', text: '8. Review Technical and Local SEO' },
      {
        type: 'p',
        text: 'A redesign is the riskiest time for SEO if it is handled carelessly - broken redirects and lost pages can hurt rankings overnight. Technical SEO and local SEO structure should be mapped before launch, not patched afterwards.',
      },
      { type: 'h3', text: '9. Plan Your Content and Conversion Paths' },
      {
        type: 'p',
        text: 'Every key page should have a clear purpose and a clear next step. This is where conversion focused web design comes in - the redesign should be judged by whether it converts better, not just whether it looks newer.',
      },
      { type: 'h3', text: '10. Confirm Hosting, Security, and Maintenance' },
      {
        type: 'p',
        text: 'Website hosting, an active security setup, and a maintenance plan should be locked in before launch, not figured out after something breaks.',
      },
      { type: 'h2', text: 'Using the Checklist' },
      {
        type: 'p',
        text: 'You do not need to tackle all ten at once, but you do need visibility into all ten before deciding what a redesign should actually prioritise. The businesses that get the most from a redesign are the ones who treat it as a strategic reset, not a fresh coat of paint.',
      },
      {
        type: 'quote',
        text: 'A redesign that only changes how your site looks is a missed opportunity. The best ones change how it performs.',
      },
    ],
  },
  {
    slug: 'why-small-business-websites-dont-generate-leads',
    title: "Why Most Small Business Websites Don't Generate Leads",
    excerpt:
      'Traffic is not the problem for most small business websites. Conversion is. Here is why good-looking sites still fail to generate leads.',
    category: 'Conversion & Leads',
    date: '2026-05-21',
    readTime: '6 min read',
    author: 'The Nexiora Team',
    content: [
      {
        type: 'p',
        text: 'Most small business owners assume a quiet contact form means they need more visitors. In reality, the majority of small business websites we review already get reasonable traffic - the site simply is not built to turn that traffic into enquiries. That is a conversion problem, not a visibility problem.',
      },
      { type: 'h2', text: 'The Website Was Built to Look Good, Not to Convert' },
      {
        type: 'p',
        text: 'Plenty of small business web design focuses entirely on aesthetics - a nice hero image, a clean layout - with no real strategy behind where the calls to action sit, what objections need addressing, or what a visitor actually needs to see before they trust you enough to reach out. Conversion focused web design starts from the opposite direction: what does this visitor need to believe before they will contact us, and how do we get them there.',
      },
      { type: 'h2', text: "There's No Single Clear Offer" },
      {
        type: 'p',
        text: 'Sites that try to be everything to everyone often convert worse than sites with one focused offer. A high converting website usually leads with a specific, clear promise - not a general "welcome to our business" message that could apply to any competitor in the same field.',
      },
      { type: 'h2', text: 'The Path to Contact Is Too Long' },
      {
        type: 'p',
        text: "If a genuinely interested visitor has to click through four pages to find how to get in touch, most will not bother. Every page should make the next step obvious, whether that is a form, a phone number, or a booking link.",
      },
      { type: 'h2', text: 'No Trust Signals Where They Are Needed' },
      {
        type: 'p',
        text: 'Reviews, results, and credentials work best placed right where doubt naturally shows up - near a price, before a form, alongside a bold claim. Scattering testimonials on a separate reviews page nobody visits wastes their impact entirely.',
      },
      { type: 'h2', text: 'Landing Pages Are Underused' },
      {
        type: 'p',
        text: 'A dedicated landing page design built around one campaign or one service consistently outperforms sending paid traffic to a general homepage, because there is no distraction and no ambiguity about what to do next.',
      },
      { type: 'h2', text: "There's No Follow-Up System Behind the Form" },
      {
        type: 'p',
        text: 'Generating an enquiry is only half the job. Without a fast, structured follow-up, even a well-designed lead generation website leaks leads it worked hard to earn.',
      },
      {
        type: 'quote',
        text: "A website that gets traffic but no enquiries isn't underperforming quietly. It's costing you real revenue, every single month.",
      },
      { type: 'h2', text: 'Fixing It' },
      {
        type: 'p',
        text: 'Start by mapping your current site against these six points honestly. In most cases, the fix is not a full rebuild - it is tightening the offer, shortening the path to contact, and putting trust signals exactly where hesitation happens.',
      },
    ],
  },
  {
    slug: 'website-speed-seo-conversions',
    title: 'How Website Speed Impacts SEO and Conversions',
    excerpt:
      'Page speed affects more than user patience - it directly shapes your search rankings and how many visitors convert. Here is how the two connect.',
    category: 'SEO & Performance',
    date: '2026-05-07',
    readTime: '6 min read',
    author: 'The Nexiora Team',
    content: [
      {
        type: 'p',
        text: "Search engines factor page speed and core web vitals directly into how sites are ranked. Website speed optimisation is not a peripheral technical task anymore - it's part of technical SEO, and it affects whether your site shows up at all before a visitor even has the chance to judge your design.",
      },
      { type: 'h2', text: 'The Direct Link to Conversions' },
      {
        type: 'p',
        text: 'Every additional second of load time gives a visitor another moment to lose patience and hit back. Research consistently shows conversion rates drop as load time increases, and the effect is sharpest on mobile, where visitors are often on the move and less patient than on desktop.',
      },
      { type: 'h2', text: 'Where Speed Usually Gets Lost' },
      {
        type: 'p',
        text: 'In our audits, the same culprits show up again and again: unoptimised images that are far larger than needed, too many third-party scripts loading before the page is usable, and hosting that is not built to handle real traffic. Website performance optimisation usually means fixing these three areas before anything else.',
      },
      { type: 'h2', text: 'Core Web Vitals in Plain English' },
      {
        type: 'ul',
        items: [
          'How fast the main content loads on screen',
          'How quickly the page responds to the first interaction',
          'How much the layout shifts around while it loads',
        ],
      },
      {
        type: 'p',
        text: 'A page that jumps around while loading - buttons moving right as someone tries to tap them - hurts both usability and rankings.',
      },
      { type: 'h2', text: 'Mobile Speed Deserves Its Own Attention' },
      {
        type: 'p',
        text: 'A site that loads quickly on office wifi can still crawl on a mobile connection. Given how much traffic now arrives through mobile friendly website design expectations, testing real mobile speed, not just desktop, should be a standard part of any website audit.',
      },
      { type: 'h2', text: 'Fixing Speed Without a Full Rebuild' },
      {
        type: 'p',
        text: 'You do not always need a new website to fix speed. Compressing and resizing images, removing unused scripts, enabling caching, and choosing solid website hosting can produce a noticeable improvement without touching the design at all.',
      },
      {
        type: 'quote',
        text: "A fast website doesn't just rank better. It respects your visitor's time - and that respect shows up directly in your conversion rate.",
      },
      { type: 'h2', text: 'Making Speed a Habit, Not a One-Off Fix' },
      {
        type: 'p',
        text: 'Speed tends to creep back down as new plugins, scripts, and images get added over time. Treat website performance optimisation as an ongoing part of website maintenance, not a box you tick once and forget.',
      },
    ],
  },
  {
    slug: 'cost-of-a-business-website-2026',
    title: 'The Cost of a Business Website in 2026',
    excerpt:
      'A clear, honest breakdown of what businesses actually pay for a website in 2026, and what really drives the price up or down.',
    category: 'Strategy',
    date: '2026-04-23',
    readTime: '8 min read',
    author: 'The Nexiora Team',
    content: [
      {
        type: 'p',
        text: 'Website pricing gets a bad reputation because it is rarely explained clearly. The truth is the cost genuinely does depend on a handful of specific factors, and once you understand them, it becomes much easier to judge whether a quote is fair for what you actually need.',
      },
      { type: 'h2', text: 'What Drives the Price Up or Down' },
      {
        type: 'ul',
        items: [
          'The number of pages and complexity of content',
          'Whether the design is custom or template-based',
          'The level of custom functionality - booking systems, portals, integrations',
          'Copywriting and content creation',
          'Ongoing website hosting and maintenance',
          'How much strategy and conversion planning goes in before design starts',
        ],
      },
      { type: 'h2', text: 'Template Sites vs Custom Website Development' },
      {
        type: 'p',
        text: 'A best website builder for businesses can be a sensible, low-cost starting point for a very early-stage business. But template limitations show up quickly - restricted customisation, weaker performance, and a design that looks the same as thousands of other sites using the same theme. Custom website development costs more because it is built around your business specifically, not adapted from something generic.',
      },
      { type: 'h2', text: 'What a Landing Page Costs vs a Full Website' },
      {
        type: 'p',
        text: 'A single, focused landing page design is typically the most affordable option, built around one offer or campaign. A full business website with multiple service pages, a portfolio, and lead capture across the site is a bigger investment because it is doing considerably more work. Neither is automatically the right choice, it depends on what you are trying to achieve - we cover that decision in more depth in our landing pages versus full websites breakdown.',
      },
      { type: 'h2', text: 'The Real Cost of Going Cheap' },
      {
        type: 'p',
        text: 'The cheapest option upfront often becomes the most expensive one over time, through lost leads from poor conversion focused web design, ongoing patch-up work, or a full rebuild within a year or two once the limitations become obvious. A website should be judged on return, not just sticker price.',
      },
      { type: 'h2', text: 'What Ongoing Costs to Expect' },
      {
        type: 'p',
        text: 'Beyond the build, budget for website hosting, an SSL certificate and basic security monitoring, and either DIY updates or a maintenance plan. These ongoing costs are usually modest compared to the build itself, but skipping them entirely is a common, and costly, mistake.',
      },
      {
        type: 'quote',
        text: "The real cost of a website isn't what you pay to build it. It's what it earns, or fails to earn, over the years you use it.",
      },
      { type: 'h2', text: 'How to Budget Sensibly' },
      {
        type: 'p',
        text: 'Get specific about what the site needs to do - capture leads, support bookings, showcase past work - before comparing quotes. A professional web design agency should be able to explain clearly what is driving your price, not just hand you a number.',
      },
    ],
  },
  {
    slug: 'ai-chatbots-for-service-businesses',
    title: '5 AI Chatbots Every Service Business Should Consider',
    excerpt:
      'The right AI chatbot can answer questions, qualify leads, and book appointments around the clock. Here is what to look for and where to start.',
    category: 'AI & Automation',
    date: '2026-04-09',
    readTime: '6 min read',
    author: 'The Nexiora Team',
    content: [
      {
        type: 'p',
        text: 'Service businesses live or die on response time. A visitor with a question at 9pm on a Sunday is not going to wait until Monday morning for an answer - they will message the next business on their list instead. AI chatbot development has matured to the point where a well-built assistant can genuinely hold that first conversation, any hour of the day.',
      },
      { type: 'h2', text: '1. The FAQ Responder' },
      {
        type: 'p',
        text: 'The simplest and most immediately useful type: an AI customer support chatbot trained on your services, pricing structure, and common questions. It will not replace your team for complex conversations, but it removes the repetitive ones entirely.',
      },
      { type: 'h2', text: '2. The Booking Assistant' },
      {
        type: 'p',
        text: 'Built for AI appointment booking, this type checks your real calendar availability and lets visitors book directly in the conversation - no back-and-forth, no missed slots, no manual entry into your calendar afterwards.',
      },
      { type: 'h2', text: '3. The Lead Qualifier' },
      {
        type: 'p',
        text: 'Rather than just collecting a name and email, an AI lead generation chatbot can ask a few smart questions to understand what a visitor actually needs, so your team follows up with context instead of starting from zero.',
      },
      { type: 'h2', text: '4. The Support and Retention Bot' },
      {
        type: 'p',
        text: 'For businesses with existing clients, a chatbot can handle account questions, order or project status updates, and simple requests, freeing your team to focus on the conversations that actually need a human.',
      },
      { type: 'h2', text: '5. The Full Business Assistant' },
      {
        type: 'p',
        text: 'The most advanced option combines all of the above into one AI business assistant connected to your CRM development and calendar - answering questions, qualifying leads, booking appointments, and logging everything automatically.',
      },
      { type: 'h2', text: 'What to Look for Before Choosing One' },
      {
        type: 'p',
        text: 'Not all chatbots are equal. Look for one that is trained specifically on your business rather than generic scripts, integrates with your existing calendar and CRM, and hands off to a real person cleanly when a conversation needs one. A generic, poorly trained bot can do more harm to trust than having no chatbot at all.',
      },
      {
        type: 'quote',
        text: "The goal of an AI chatbot isn't to replace conversations with your team. It's to make sure no enquiry ever goes unanswered while you're busy doing the work.",
      },
      { type: 'h2', text: 'Getting Started' },
      {
        type: 'p',
        text: 'You do not need the most advanced option on day one. Start with whichever gap costs you the most leads right now - usually first response or booking - and work with an AI automation agency that can build around your actual workflow rather than a one-size-fits-all script.',
      },
    ],
  },
  {
    slug: 'landing-pages-vs-full-websites',
    title: 'Landing Pages vs Full Websites: Which Converts Better?',
    excerpt:
      'Landing pages and full websites solve different problems. Here is how to choose the right one for your next campaign or business goal.',
    category: 'Conversion & Leads',
    date: '2026-03-26',
    readTime: '6 min read',
    author: 'The Nexiora Team',
    content: [
      {
        type: 'p',
        text: 'The website vs landing page question is not really about which one is better, it is about which one matches what you are trying to achieve. Used for the wrong purpose, either one will underperform, no matter how well it is designed.',
      },
      { type: 'h2', text: 'What a Landing Page Does Best' },
      {
        type: 'p',
        text: 'A landing page design is built around a single goal - one offer, one audience, one call to action, with every distraction removed. That focus is exactly why they tend to produce a high converting websites result for paid ad campaigns, a specific promotion, or a single service push. There is nowhere else for the visitor to go, so more of them take the one action available.',
      },
      { type: 'h2', text: 'What a Full Website Does Best' },
      {
        type: 'p',
        text: 'A full business website earns trust over a longer journey. It has room for your full range of services, a portfolio, an about page, and content that supports SEO for small businesses across many search terms rather than one. If you are building long-term visibility and credibility, not just running a single campaign, a full site does work a landing page simply is not built to do.',
      },
      { type: 'h2', text: 'When to Use a Landing Page' },
      {
        type: 'p',
        text: 'Running paid ads, launching a specific offer or seasonal promotion, or testing a new service before committing to a full site build are all strong use cases. Sending ad traffic to a general homepage instead of a focused landing page is one of the most common, and most expensive, mistakes in digital marketing.',
      },
      { type: 'h2', text: 'When a Full Website Is the Right Call' },
      {
        type: 'p',
        text: 'If you are relying on organic search, local SEO, or referrals rather than paid campaigns, a full website with proper structure and content will outperform a single landing page over time. It also gives potential clients everywhere to explore if they are not ready to convert on the first visit.',
      },
      { type: 'h2', text: 'Why Many Businesses Need Both' },
      {
        type: 'p',
        text: 'The strongest setup usually combines the two - a full website building general trust and visibility, paired with dedicated landing pages for each specific campaign or offer. Each one is optimised for what it is actually meant to do, rather than asking one page to do both jobs at once.',
      },
      {
        type: 'quote',
        text: 'Sending paid traffic to your homepage is like inviting someone to a specific meeting and leaving them in the lobby to find it themselves.',
      },
      { type: 'h2', text: 'Making the Right Call' },
      {
        type: 'p',
        text: 'Start with the goal, not the format. If you are driving traffic toward one specific action, build a landing page for it. If you are building long-term presence and credibility, invest in a full, well-structured website - ideally both, working together.',
      },
    ],
  },
  {
    slug: 'when-to-redesign-your-website',
    title: "How to Know When It's Time to Redesign Your Website",
    excerpt:
      "Not sure if your site needs a refresh or a full rebuild? Here are the clearest signs it's time for a website redesign.",
    category: 'Web Design',
    date: '2026-03-12',
    readTime: '7 min read',
    author: 'The Nexiora Team',
    content: [
      {
        type: 'p',
        text: "Few business owners wake up and suddenly know their website needs a redesign. It's usually a slow build-up of small frustrations, until enough of them stack up that the case becomes obvious. Here are the clearest signs worth paying attention to.",
      },
      { type: 'h2', text: 'Your Site Looks Noticeably Dated' },
      {
        type: 'p',
        text: 'Design trends move fast, and a site that looked sharp five years ago can quietly start signalling "this business has not kept up," even if the work behind it is excellent. First impressions form in a fraction of a second, and design is often judged before a word of copy is even read.',
      },
      { type: 'h2', text: 'It Does Not Work Properly on Mobile' },
      {
        type: 'p',
        text: 'If your site was built before mobile friendly website design was standard practice, it is very likely underperforming for the majority of your traffic. This alone is one of the fastest-growing reasons businesses come to us for a rebuild.',
      },
      { type: 'h2', text: 'Your Business Has Changed, But the Site Has Not' },
      {
        type: 'p',
        text: 'New services, a different target client, updated pricing, or a repositioned brand should all be reflected on your site. If your website still describes a version of your business from a few years ago, it is actively working against your current goals.',
      },
      { type: 'h2', text: "Leads Have Slowed Even Though Traffic Hasn't" },
      {
        type: 'p',
        text: 'If your analytics show steady or growing traffic but fewer enquiries, that is a conversion problem your current design is not solving. This is one of the clearest signals that a redesign focused on conversion, not just visuals, is overdue.',
      },
      { type: 'h2', text: 'You Cannot Make Simple Updates Yourself' },
      {
        type: 'p',
        text: 'If every small content change requires a developer, or you are afraid to touch the backend in case something breaks, the platform itself may be holding you back as much as the design.',
      },
      { type: 'h2', text: 'It Fails a Basic Website Audit' },
      {
        type: 'p',
        text: 'Run a simple website audit checking speed, mobile experience, broken links, and outdated content. If it fails on more than one or two fronts, that is a strong practical case for a redesign, beyond just how the site looks.',
      },
      { type: 'h2', text: "Security and Hosting Haven't Been Touched in Years" },
      {
        type: 'p',
        text: "An outdated platform, expired plugins, or hosting that's never been reviewed is a website security risk hiding behind a site that otherwise looks fine on the surface.",
      },
      {
        type: 'quote',
        text: "A redesign isn't an admission that the old site failed. It's a recognition that your business has grown past what it was built for.",
      },
      { type: 'h2', text: 'Deciding What Comes Next' },
      {
        type: 'p',
        text: "If two or three of these points sound familiar, it's worth a proper conversation rather than more small patches. A focused website redesign services provider will start with a website audit, not a moodboard, so the new site is built to fix what's actually holding the current one back.",
      },
    ],
  },
]

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

export function getRelatedPosts(slug: string, count = 3) {
  const current = getPostBySlug(slug)
  if (!current) return blogPosts.slice(0, count)

  const sameCategory = blogPosts.filter(
    (post) => post.slug !== slug && post.category === current.category,
  )
  const others = blogPosts.filter(
    (post) => post.slug !== slug && post.category !== current.category,
  )

  return [...sameCategory, ...others].slice(0, count)
}

export function formatBlogDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
