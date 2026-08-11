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
  /**
   * Shorter title used only for <title> / og:title. `title` stays the H1 and
   * the blog-card headline. Set this when `title` plus the " | Nexiora Studio"
   * template suffix (17 chars) would push the rendered title past ~60.
   */
  seoTitle?: string
  excerpt: string
  category: string
  date: string
  /** Derived from `content` - see estimateReadTime. Never set by hand. */
  readTime: string
  author: string
  content: BlogBlock[]
}

/** Authored shape: identical to BlogPost minus the derived readTime. */
type BlogPostInput = Omit<BlogPost, 'readTime'>

const WORDS_PER_MINUTE = 200

/**
 * Read time is computed rather than stored so it cannot drift out of sync with
 * the article - the hand-authored values previously ranged from 69 to 119
 * words per claimed minute.
 */
function estimateReadTime(content: BlogBlock[]) {
  const words = content.reduce((total, block) => {
    const text =
      'items' in block ? block.items.join(' ') : block.text
    // Don't count link targets: [label](/path) -> label
    return total + text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').split(/\s+/).length
  }, 0)

  return `${Math.max(1, Math.round(words / WORDS_PER_MINUTE))} min read`
}

export const categories = [
  'Web Design',
  'AI & Automation',
  'Software Development',
  'Conversion & Leads',
  'SEO & Performance',
  'Strategy',
] as const

const allPosts: BlogPostInput[] = [
  {
    slug: '10-website-mistakes-costing-you-clients',
    title: '10 Website Mistakes That Are Costing You Clients',
    seoTitle: '10 Website Mistakes Costing You Clients',
    excerpt:
      'From slow load times to invisible calls to action, these are the silent website mistakes turning visitors away before they ever become clients.',
    category: 'Web Design',
    date: '2026-07-15',
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
        text: "More than half of your traffic is almost certainly arriving on a phone. A [mobile-first, bespoke web design](/web-design) isn't a nice-to-have anymore - it's the baseline. Tiny tap targets, text that requires zooming, and forms that are painful to fill out on a small screen are some of the fastest ways to lose a ready-to-book client.",
      },
      { type: 'h3', text: '3. No Clear Call to Action' },
      {
        type: 'p',
        text: "Visitors shouldn't have to hunt for how to contact you. Every page should have one obvious next step - book a call, request a quote, send a message - repeated at logical points as someone scrolls. Sites that bury contact details in a footer or hide them behind three clicks are leaving enquiries on the table.",
      },
      { type: 'h3', text: '4. Generic, Templated Design' },
      {
        type: 'p',
        text: "A website that looks like every other business in your industry does nothing to build trust or set you apart. [Custom website development](/web-development) doesn't have to mean an enormous budget - but it does mean a layout, message, and visual identity built around your business, not a stock template with your logo swapped in.",
      },
      { type: 'h3', text: '5. Confusing Navigation' },
      {
        type: 'p',
        text: "If a visitor can't find your services, pricing, or contact page within a couple of clicks, they'll assume the rest of your business is just as disorganised. Clear, predictable navigation is one of the simplest and most overlooked conversion boosters in business website design.",
      },
      { type: 'h3', text: '6. Weak or Missing SEO Foundations' },
      {
        type: 'p',
        text: 'Plenty of good-looking websites are invisible on Google because the [technical SEO](/ai-seo-agency-london) underneath was never set up properly - missing page titles, no structured headings, slow indexing, or duplicate content. Without this foundation, even great design will not bring in organic leads.',
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
    seoTitle: 'How AI Automation Saves 20+ Hours a Week',
    excerpt:
      'From missed calls to manual follow-ups, most service businesses lose hours every week to admin that AI automation can now handle instead.',
    category: 'AI & Automation',
    date: '2026-07-01',
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
        text: 'An AI business assistant - whether that is a chatbot built into your [website](/web-design) or an automated messaging flow - can answer common questions instantly, any hour of the day, and hand off to a human only when needed. For service businesses that rely on fast response times to win work, this alone can be the difference between booking a client and losing them to a competitor who replied first.',
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
        text: 'The biggest gains usually come from [custom software and workflow automation](/custom-software) that connects the pieces already listed - a new enquiry automatically creates a record in your CRM development system, triggers a welcome message, notifies the right team member, and schedules a follow-up if there is no response. This is business process automation doing the coordinating work a person would otherwise have to do manually, every single time.',
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
    seoTitle: 'Custom Software vs Off-the-Shelf Software',
    excerpt:
      'Off-the-shelf tools are fast to launch but rarely fit forever. Here is how to decide when custom software development actually pays off.',
    category: 'Software Development',
    date: '2026-06-18',
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
        text: "Custom software costs more upfront than a subscription. But subscriptions compound quietly over years, and they still do not fit your process. A [custom software development](/custom-software) partner worth working with will tell you honestly when off-the-shelf is still the right call - the goal is not to sell you custom software, it is to solve the actual bottleneck.",
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
    seoTitle: 'Website Redesign Checklist for 2026',
    excerpt:
      'A practical, no-fluff checklist covering everything worth reviewing before you commit to a website redesign in 2026.',
    category: 'Web Design',
    date: '2026-06-04',
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
      {
        type: 'ul',
        items: [
          'Top 10 landing pages by traffic, and the conversion rate of each',
          'Pages with high traffic but no enquiries - usually the quickest wins',
          'Any page with a bounce rate well above your site average',
          'Which devices and browsers your visitors actually use',
          'Every URL that currently ranks for something, before you change anything',
        ],
      },
      { type: 'h3', text: '2. Revisit Your Goals and Audience' },
      {
        type: 'p',
        text: 'Has your business shifted since the last build? New services, a different ideal client, a new price point? Your [web design](/web-design) partner should design around who you are targeting today, not who you were targeting when the last site launched.',
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
      {
        type: 'ul',
        items: [
          'Export a full list of current URLs before the rebuild starts',
          'Map every old URL to its new destination with a 301 redirect',
          'Keep page titles and meta descriptions for pages that already rank',
          'Check the new site is not accidentally blocking crawlers on launch day',
          'Resubmit your sitemap once the new structure is live',
          'Confirm your Google Business Profile still points at working pages',
        ],
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
      {
        type: 'ul',
        items: [
          'SSL certificate active and renewing automatically',
          'Backups running, and tested at least once',
          'Someone named as responsible for updates',
          'Analytics and Search Console connected before launch, not after',
          'A plan for who fixes what, and how fast, when something breaks',
        ],
      },
      { type: 'h2', text: 'The Week Before Launch' },
      {
        type: 'p',
        text: 'Most redesign problems are not design problems - they surface in the last week, when everyone is focused on how it looks rather than whether it works. Run this before you go live.',
      },
      {
        type: 'ol',
        items: [
          'Submit every form yourself, on a phone, and confirm the email actually arrives',
          'Click every navigation item and every footer link',
          'Check the site on a real phone, not just a resized browser window',
          'Test how it loads on mobile data rather than office wifi',
          'Read the page titles as they appear in a search result',
          'Confirm redirects work by visiting your old URLs directly',
          'Check the 404 page exists and points people somewhere useful',
        ],
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
    seoTitle: "Why Small Business Websites Don't Get Leads",
    excerpt:
      'Traffic is not the problem for most small business websites. Conversion is. Here is why good-looking sites still fail to generate leads.',
    category: 'Conversion & Leads',
    date: '2026-05-21',
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
        text: 'Sites that try to be everything to everyone often convert worse than sites with one focused offer. A [high-converting website](/web-design) usually leads with a specific, clear promise - not a general "welcome to our business" message that could apply to any competitor in the same field.',
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
        text: 'Generating an enquiry is only half the job. Without a fast, structured follow-up, even a well-designed lead generation website leaks leads it worked hard to earn. Automating that follow-up is usually a [custom software](/custom-software) job rather than a design one.',
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
    seoTitle: 'Website Speed, SEO and Conversions',
    excerpt:
      'Page speed affects more than user patience - it directly shapes your search rankings and how many visitors convert. Here is how the two connect.',
    category: 'SEO & Performance',
    date: '2026-05-07',
    author: 'The Nexiora Team',
    content: [
      {
        type: 'p',
        text: "Search engines factor page speed and core web vitals directly into how sites are ranked. [Website speed optimisation](/ai-seo-agency-london) is not a peripheral technical task anymore - it's part of technical SEO, and it affects whether your site shows up at all before a visitor even has the chance to judge your design.",
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
      {
        type: 'p',
        text: 'Of those, two move the number far more than the rest: custom functionality, and who writes the content. A five-page site and a fifteen-page site are not hugely different jobs. A five-page site and a site that takes bookings, checks availability and syncs with your CRM are different projects entirely.',
      },
      { type: 'h3', text: 'What you are actually paying for' },
      {
        type: 'p',
        text: 'It helps to know where the hours go, because "design" is usually the smallest part. On a typical project the split is roughly: working out what the site needs to say and to whom, designing it, building it, writing or shaping the content, then testing, launching and fixing what testing found.',
      },
      {
        type: 'p',
        text: 'That is why two quotes for "a website" can differ so widely. One may include discovery, copywriting and conversion planning. The other may assume you supply finished text and just want it laid out. Neither is dishonest - they are quoting different jobs.',
      },
      { type: 'h2', text: 'Template Sites vs Custom Website Development' },
      {
        type: 'p',
        text: 'A best website builder for businesses can be a sensible, low-cost starting point for a very early-stage business. But template limitations show up quickly, which is where [bespoke web design](/web-design) starts to earn its cost - restricted customisation, weaker performance, and a design that looks the same as thousands of other sites using the same theme. Custom website development costs more because it is built around your business specifically, not adapted from something generic.',
      },
      { type: 'h2', text: 'What a Landing Page Costs vs a Full Website' },
      {
        type: 'p',
        text: 'A single, focused landing page design is typically the most affordable option, built around one offer or campaign. A full business website with multiple service pages, a portfolio, and lead capture across the site is a bigger investment because it is doing considerably more work. Neither is automatically the right choice, it depends on what you are trying to achieve - we cover that decision in more depth in our [landing pages versus full websites breakdown](/blog/landing-pages-vs-full-websites).',
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
        type: 'p',
        text: 'The one people forget is their own time. If updating a price or adding a service means emailing an agency and waiting, that is a real cost too. Worth asking upfront what you can change yourself and what you cannot.',
      },
      { type: 'h2', text: 'What Quotes Often Leave Out' },
      {
        type: 'p',
        text: 'Most disputes about website cost are not about the headline figure. They are about something everyone assumed was included. Before signing, get a straight answer on each of these:',
      },
      {
        type: 'ul',
        items: [
          'Who writes the copy - you, them, or a mix',
          'Whether photography is included or expected from you',
          'How many rounds of revisions the price covers, and what happens after',
          'Whether redirects from your old URLs are handled during a rebuild',
          'Who owns the site, the domain and the hosting account at the end',
          'What a small change costs once the project is closed',
          'Whether analytics, search console and tracking are set up',
        ],
      },
      {
        type: 'p',
        text: 'The redirect question matters more than it sounds. If your current site ranks for anything at all, a rebuild that drops those URLs without redirects can undo years of visibility in a weekend - and it is rarely on a quote unless you ask.',
      },
      { type: 'h2', text: 'How to Compare Two Quotes Fairly' },
      {
        type: 'p',
        text: 'Put the numbers aside first. Write down what each quote actually includes, then compare like for like. A quote that is twice the price but includes copywriting, a booking system and a year of support may well be the cheaper option once you price the gaps in the other one.',
      },
      {
        type: 'p',
        text: 'Then ask each of them the same question: what would you cut if the budget were smaller? The answer tells you a lot. Someone who knows their craft will name the thing that matters least. Someone selling a package will struggle to answer.',
      },
      { type: 'h2', text: 'How Payment Usually Works' },
      {
        type: 'p',
        text: 'Most studios take a deposit to secure a start date, with the balance either on completion or split across milestones on larger builds. That is normal and protects both sides. What is not normal is paying the full amount upfront before any work has been scoped.',
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
    seoTitle: '5 AI Chatbots for Service Businesses',
    excerpt:
      'The right AI chatbot can answer questions, qualify leads, and book appointments around the clock. Here is what to look for and where to start.',
    category: 'AI & Automation',
    date: '2026-04-09',
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
        text: 'Rather than just collecting a name and email, an AI lead generation chatbot - one part of a wider [custom software and automation](/custom-software) setup - can ask a few smart questions to understand what a visitor actually needs, so your team follows up with context instead of starting from zero.',
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
    seoTitle: 'Landing Pages vs Full Websites',
    excerpt:
      'Landing pages and full websites solve different problems. Here is how to choose the right one for your next campaign or business goal.',
    category: 'Conversion & Leads',
    date: '2026-03-26',
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
        text: 'A full business website earns trust over a longer journey. It has room for your full range of services, a portfolio, an about page, and content that supports [bespoke web design](/web-design) and SEO for small businesses across many search terms rather than one. If you are building long-term visibility and credibility, not just running a single campaign, a full site does work a landing page simply is not built to do.',
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
    seoTitle: 'When to Redesign Your Website',
    excerpt:
      "Not sure if your site needs a refresh or a full rebuild? Here are the clearest signs it's time for a website redesign.",
    category: 'Web Design',
    date: '2026-03-12',
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
        text: 'If your site was built before [mobile-first web design](/web-design) was standard practice, it is very likely underperforming for the majority of your traffic. This alone is one of the fastest-growing reasons businesses come to us for a rebuild.',
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
        text: "If two or three of these points sound familiar, it's worth a proper conversation rather than more small patches. A focused [web design agency](/web-design) will start with a website audit, not a moodboard, so the new site is built to fix what's actually holding the current one back.",
      },
    ],
  },
  {
    slug: 'how-to-choose-a-web-design-agency',
    title: 'How to Choose the Right Web Design Agency for Your Business',
    seoTitle: 'How to Choose a Web Design Agency',
    excerpt:
      'Most businesses pick an agency on price and portfolio alone, then wonder why the site underperforms. Here is a more reliable way to judge who will actually deliver.',
    category: 'Strategy',
    date: '2026-08-11',
    author: 'The Nexiora Team',
    content: [
      {
        type: 'p',
        text: "Choosing a web design agency is one of those decisions that feels simple until you start. Every agency has a tidy portfolio, every one promises results, and the quotes you get back can differ by a factor of ten for what looks like the same job. Below is the way we would go about it if we were on your side of the table.",
      },
      { type: 'h2', text: 'Start With the Job, Not the Agency' },
      {
        type: 'p',
        text: "Before you speak to anyone, get clear on what the website is actually for. A site meant to book appointments is a different project to one meant to establish credibility before a sales call, which is different again to one selling products directly. Agencies can only aim at a target you have named.",
      },
      {
        type: 'p',
        text: "It also protects you from the most common expensive mistake: buying a beautiful brochure site when what you needed was [custom web development](/web-development) to handle bookings, quoting or client logins. Those are different disciplines, and not every agency does both.",
      },
      { type: 'h2', text: 'Look Past the Portfolio Screenshots' },
      {
        type: 'p',
        text: "Every portfolio looks good, because agencies choose what goes in it. The useful questions are about what happened after launch.",
      },
      {
        type: 'ul',
        items: [
          'Are the sites in the portfolio still live, or have clients since replaced them?',
          'Did the agency build those sites, or design them for someone else to build?',
          'Can they explain why a particular page is laid out the way it is?',
          'Do the examples resemble your situation - similar audience, similar decision, similar price point?',
        ],
      },
      {
        type: 'p',
        text: "That last point matters more than industry. An agency that has built for tutoring businesses and recruitment firms understands the same core problem you have: a stranger arrives sceptical and has to be persuaded to make contact.",
      },
      { type: 'h2', text: 'Questions Worth Asking on the Call' },
      { type: 'h3', text: '1. Who actually does the work?' },
      {
        type: 'p',
        text: "Some agencies sell with senior people and deliver with juniors or subcontractors. Not inherently wrong, but you should know before you sign, and you should know who you will be speaking to when something needs changing in month three.",
      },
      { type: 'h3', text: '2. What happens after launch?' },
      {
        type: 'p',
        text: "Ask directly about hosting, updates, security and small changes. Some agencies disappear at launch. Others charge for every text edit. Neither is a problem if you know upfront, and both are a nasty surprise if you do not.",
      },
      { type: 'h3', text: '3. Do I own the website?' },
      {
        type: 'p',
        text: "You should own the site, the domain and the content. Be careful with arrangements where the site only works while you keep paying a monthly fee, and leaving means starting again from nothing. Ask what happens if you part ways in two years.",
      },
      { type: 'h3', text: '4. How do you decide what goes on the page?' },
      {
        type: 'p',
        text: "This is the question that separates designers from decorators. A good answer talks about your customers, their objections, and the order information needs to appear in. A weak answer talks only about trends and colour palettes.",
      },
      { type: 'h3', text: '5. What do you need from me?' },
      {
        type: 'p',
        text: "Projects stall on content far more often than on design. An agency that tells you plainly what they need, and when, is one that has run this process before. It is also worth reading up on [how to brief a web design agency](/blog/how-to-brief-a-web-design-agency) before the first meeting.",
      },
      { type: 'h2', text: 'Warning Signs' },
      {
        type: 'ul',
        items: [
          'Guaranteed first-page Google rankings - nobody can promise this honestly',
          'A quote given before anyone has asked what the site needs to do',
          'No questions about your customers during the entire sales conversation',
          'Reluctance to name who owns the site and the domain at the end',
          'Portfolio links that are dead, or lead to sites that no longer look like the screenshot',
          'Pressure to sign quickly because a discount expires on Friday',
        ],
      },
      { type: 'h2', text: 'How to Read the Quotes' },
      {
        type: 'p',
        text: "Wildly different prices usually mean the agencies have understood the job differently, not that one is cheating you. A £900 quote and a £9,000 quote are often describing genuinely different projects: a template populated with your content versus a [bespoke website](/web-design) designed around your sales process.",
      },
      {
        type: 'p',
        text: "Compare on scope rather than headline figure. What is included, what is extra, what happens when you want a change, and who carries the cost if something breaks. Our breakdown of [what a business website actually costs](/blog/cost-of-a-business-website-2026) goes through the drivers in more detail.",
      },
      { type: 'h2', text: 'Making the Decision' },
      {
        type: 'p',
        text: "When the shortlist is down to two or three, the deciding factor is rarely price or portfolio. It is whether they understood your business in the first conversation, whether their questions were better than your answers, and whether you would be comfortable telling them something is not working.",
      },
      {
        type: 'quote',
        text: 'The best sign is simple: they told you something you did not want to hear, before you had paid them anything.',
      },
      {
        type: 'p',
        text: "If you are weighing up options at the moment, we are happy to be one of the conversations - and equally happy to tell you if what you need is smaller than you think.",
      },
    ],
  },
  {
    slug: 'web-design-vs-web-development',
    title: "Web Design vs Web Development: What's the Difference?",
    seoTitle: 'Web Design vs Web Development',
    excerpt:
      'The two words get used interchangeably, and it causes real problems when scoping a project. Here is what each actually covers and why it matters to your quote.',
    category: 'Web Design',
    date: '2026-08-08',
    author: 'The Nexiora Team',
    content: [
      {
        type: 'p',
        text: "Ask ten business owners the difference between web design and web development and most will say something like \"design is the look, development is the code\". That is roughly right, and it is also the reason so many projects end up scoped wrongly. The distinction matters most when you are deciding what to pay for.",
      },
      { type: 'h2', text: 'What Web Design Covers' },
      {
        type: 'p',
        text: "Design decides what a visitor sees and the route they take through it. That includes the visual side - typography, colour, imagery, spacing - but the more valuable part is structure: what appears first, what gets answered before someone can raise an objection, and where the call to action sits.",
      },
      {
        type: 'ul',
        items: [
          'Layout and visual hierarchy',
          'Brand presentation - typography, colour, imagery',
          'User experience and the path from landing to enquiry',
          'Responsive behaviour across phones, tablets and desktops',
          'Conversion decisions: what to include, and what to leave out',
        ],
      },
      {
        type: 'p',
        text: "Good design is mostly a series of decisions about priority. Everything on a page competes for attention, so [bespoke web design](/web-design) is largely the discipline of deciding what wins.",
      },
      { type: 'h2', text: 'What Web Development Covers' },
      {
        type: 'p',
        text: "Development is what makes the thing work. On a simple site that means turning the design into fast, accessible, well-structured pages. On anything more involved, it means building functionality that did not exist before.",
      },
      {
        type: 'ul',
        items: [
          'Turning designs into working, responsive pages',
          'Forms, logins, accounts and permissions',
          'Databases and how information is stored and retrieved',
          'Integrations with CRMs, payment providers and booking systems',
          'Performance, security and how the site behaves under load',
        ],
      },
      {
        type: 'p',
        text: "This is where [custom web development](/web-development) separates from page-building. Anyone can install a contact form. Building a booking system that understands your availability, travel time and staff is a different job entirely.",
      },
      { type: 'h2', text: 'Why the Confusion Costs Money' },
      {
        type: 'p',
        text: "Most disappointing projects come from a scope that named one discipline and needed both. A business asks for a website redesign, gets a beautiful set of pages, and then discovers the quoting process they wanted automated was never in scope.",
      },
      {
        type: 'p',
        text: "The reverse happens too. A capable developer builds exactly the functionality requested, and it converts badly because nobody made decisions about hierarchy, proof or clarity. The system works; the page does not persuade.",
      },
      {
        type: 'quote',
        text: 'Design decides whether someone wants to act. Development decides whether they can.',
      },
      { type: 'h2', text: 'Which Do You Need?' },
      {
        type: 'p',
        text: "Most projects need both, but the balance shifts. Here is a rough guide.",
      },
      { type: 'h3', text: 'Mostly design' },
      {
        type: 'p',
        text: "Your site explains services and asks people to get in touch. Nothing complicated happens after the form is submitted. The work is presentation, structure and persuasion.",
      },
      { type: 'h3', text: 'Mostly development' },
      {
        type: 'p',
        text: "Customers need accounts, bookings, payments or dashboards. The interface matters, but the difficulty is in the logic underneath - and often in connecting to systems you already run.",
      },
      { type: 'h3', text: 'Genuinely both' },
      {
        type: 'p',
        text: "An online store is the clearest example. It has to persuade like a brochure site and function like software. That combination is why [ecommerce web design](/ecommerce-web-design) tends to cost more than either discipline alone.",
      },
      { type: 'h2', text: 'What to Do With This' },
      {
        type: 'p',
        text: "When you brief a project, describe outcomes rather than deliverables. \"We want customers to book and pay without phoning us\" tells an agency far more than \"we need a new website\", and it makes the quotes you receive comparable.",
      },
      {
        type: 'p',
        text: "If you are still weighing up scope, [bespoke versus template](/blog/bespoke-website-vs-template-website) is usually the next question worth settling.",
      },
    ],
  },
  {
    slug: 'what-does-a-web-design-agency-do',
    title: 'What Does a Web Design Agency Actually Do?',
    excerpt:
      'Beyond making things look good - a plain explanation of what you are paying for when you hire a web design agency, stage by stage.',
    category: 'Strategy',
    date: '2026-08-05',
    author: 'The Nexiora Team',
    content: [
      {
        type: 'p',
        text: "\"Web design agency\" is a vague label covering everyone from a freelancer assembling templates to a forty-person studio running brand strategy. If you have never hired one, it is genuinely hard to know what the money buys. Here is what the work involves when it is done properly.",
      },
      { type: 'h2', text: 'It Starts With Questions, Not Designs' },
      {
        type: 'p',
        text: "The first stage is research, and it is the part clients least expect. Who buys from you, what do they compare you against, what makes them hesitate, and what does a good enquiry look like versus a time-waster?",
      },
      {
        type: 'p',
        text: "This is not box-ticking. Almost every meaningful design decision - what goes above the fold, how much you say about price, whether case studies outrank testimonials - depends on those answers.",
      },
      { type: 'h2', text: 'Structure Before Aesthetics' },
      {
        type: 'p',
        text: "Next comes the shape of the site: what pages exist, what each one is for, and the order information appears in on the important ones. Get this wrong and no amount of visual polish rescues it.",
      },
      {
        type: 'ul',
        items: [
          'Which pages are needed, and which are just noise',
          'What each page is trying to get the visitor to do',
          'The order objections get answered in',
          'Where proof - reviews, case studies, logos - does the most work',
          'How someone moves from interested to in touch',
        ],
      },
      { type: 'h2', text: 'Then the Design Itself' },
      {
        type: 'p',
        text: "This is the visible part: layout, typography, colour, imagery and how it all adapts to a phone. A good agency is making credibility decisions here, not decorative ones. If you charge more than your competitors, the site has to look like it belongs at that price.",
      },
      { type: 'h2', text: 'Build and Technical Setup' },
      {
        type: 'p',
        text: "Then the design becomes a working site. Depending on the agency this is either straightforward page-building or genuine [custom development](/web-development) - forms, integrations, logins, or whatever functionality the business needs.",
      },
      {
        type: 'p',
        text: "The unglamorous technical work happens here too, and it is the part most likely to be skipped by a cheap quote:",
      },
      {
        type: 'ul',
        items: [
          'Page speed and Core Web Vitals',
          'Proper heading structure and crawlable markup',
          'Titles, meta descriptions and structured data',
          'SSL, secure hosting and backups',
          'Analytics connected so you can see what happens',
        ],
      },
      { type: 'h2', text: 'Launch, and Then the Bit Everyone Forgets' },
      {
        type: 'p',
        text: "Launch is a milestone, not the finish. Redirects from old URLs, indexing, testing forms on real devices, checking nothing broke on the way live - all of it decides whether the new site keeps the traffic the old one had.",
      },
      {
        type: 'p',
        text: "After that comes the ongoing part: hosting, updates, security, small changes, and ideally looking at what visitors actually do and improving accordingly. A website is a business asset, not a one-off purchase.",
      },
      { type: 'h2', text: 'What a Web Design Agency Should Not Do' },
      {
        type: 'ul',
        items: [
          'Guarantee specific Google rankings',
          'Quote before understanding what the site needs to achieve',
          'Hold your domain or content hostage',
          'Charge for every minor text change without warning you upfront',
          'Present a design with no explanation of why it is laid out that way',
        ],
      },
      { type: 'h2', text: 'Where Agencies Differ Most' },
      {
        type: 'p',
        text: "The biggest practical difference is how far they go. Some stop at brochure sites. Some also build [custom software](/custom-software) and automation, which matters if your website will eventually need to do real work rather than just describe it.",
      },
      {
        type: 'p',
        text: "If you are shortlisting, our guide on [how to choose the right web design agency](/blog/how-to-choose-a-web-design-agency) covers the questions worth asking before you commit.",
      },
    ],
  },
  {
    slug: 'bespoke-web-development-cost',
    title: 'How Much Does Bespoke Web Development Cost?',
    excerpt:
      'A straight look at what drives the price of custom web development, why quotes vary so much, and how to tell whether it is worth it for your business.',
    category: 'Software Development',
    date: '2026-08-01',
    author: 'The Nexiora Team',
    content: [
      {
        type: 'p',
        text: "Nobody enjoys the answer \"it depends\", but with bespoke development it is the honest starting point - in the same way that \"how much does a building cost\" depends entirely on whether you mean a shed or an office block. What is useful is understanding what moves the number.",
      },
      { type: 'h2', text: 'What You Are Actually Paying For' },
      {
        type: 'p',
        text: "With a template site, most of the work has already been done and you are paying to configure it. With [custom web development](/web-development), you are paying for something that does not exist yet: the thinking, the building, and the testing that stops it falling over.",
      },
      {
        type: 'p',
        text: "That is why the cost tracks complexity rather than page count. Twenty pages of content is a small job. One booking system that understands staff availability, travel time and cancellation rules is not.",
      },
      { type: 'h2', text: 'The Main Cost Drivers' },
      { type: 'h3', text: 'How many things the system has to remember' },
      {
        type: 'p',
        text: "Anything involving stored data - accounts, orders, bookings, records - adds cost, because it needs structure, validation and a plan for what happens when something goes wrong.",
      },
      { type: 'h3', text: 'How many systems it has to talk to' },
      {
        type: 'p',
        text: "Every integration is a small project. A well-documented payment provider is straightforward. A legacy system with no API is not, and it is worth asking early which category yours falls into.",
      },
      { type: 'h3', text: 'How many rules your business really has' },
      {
        type: 'p',
        text: "This is the one that surprises people. Businesses tend to describe a process in three sentences, then reveal a dozen exceptions once building starts. Trade customers priced differently, certain jobs needing two staff, a discount that only applies on repeat bookings. Every exception is real work.",
      },
      { type: 'h3', text: 'How many people use it, and how' },
      {
        type: 'p',
        text: "An internal tool used by five colleagues who can be shown how it works is cheaper than a customer-facing system used by thousands of strangers on unknown devices, where every edge case has to be handled gracefully.",
      },
      { type: 'h2', text: 'Why Quotes Vary So Wildly' },
      {
        type: 'p',
        text: "If two quotes differ by a factor of five, they are usually describing different projects. One may have assumed an off-the-shelf plugin does most of the job. The other may have assumed you need it built properly with your rules baked in.",
      },
      {
        type: 'ul',
        items: [
          'Ask what is explicitly excluded, not just what is included',
          'Ask what happens when a requirement is discovered mid-build',
          'Ask who owns the code at the end',
          'Ask what ongoing costs look like once it is live',
          'Ask what the cheapest sensible version of this project would be',
        ],
      },
      { type: 'h2', text: 'How to Tell If It Is Worth It' },
      {
        type: 'p',
        text: "Custom development is not automatically better - it is better when the alternative is costing you more than you have noticed. The calculation is usually simpler than people expect.",
      },
      {
        type: 'ol',
        items: [
          'Estimate the hours per week currently spent on the manual process',
          'Multiply by what that time is genuinely worth',
          'Add the licence fees for tools you would stop paying for',
          'Add the cost of mistakes caused by data living in two places',
          'Compare the annual total against the build cost',
        ],
      },
      {
        type: 'p',
        text: "If a process eats ten hours a week and could take one, the payback period is short enough to justify itself. If it saves twenty minutes a month, it does not, and any honest developer will tell you so.",
      },
      { type: 'h2', text: 'Keeping the Number Down' },
      {
        type: 'p',
        text: "The most effective way to control cost is to build in phases. Start with the single piece removing the most manual work, get it in use, then extend once it has proved itself. It reduces risk, spreads spend, and means real users shape what gets built next.",
      },
      {
        type: 'quote',
        text: 'The expensive version of custom software is not the one that costs more. It is the one that accurately builds the wrong thing.',
      },
      {
        type: 'p',
        text: "If you are weighing build against buy, our comparison of [custom software versus off-the-shelf tools](/blog/custom-software-vs-off-the-shelf-software) works through where each one wins.",
      },
    ],
  },
  {
    slug: 'how-to-brief-a-web-design-agency',
    title: 'How to Brief a Web Design Agency',
    excerpt:
      'A good brief gets you better quotes, fewer surprises and a site that does what you needed. Here is what to include - and what to leave to the agency.',
    category: 'Strategy',
    date: '2026-07-29',
    author: 'The Nexiora Team',
    content: [
      {
        type: 'p',
        text: "Most briefs we receive describe a website. The useful ones describe a business problem. That difference decides whether the quotes you get back are comparable, and whether the finished site does the job you actually had in mind.",
      },
      { type: 'h2', text: 'Lead With the Problem' },
      {
        type: 'p',
        text: "Start with what is wrong today, in plain terms. \"We get enquiries but most are not serious\" is more useful than \"we need a modern website\", because it points at qualification, not aesthetics.",
      },
      {
        type: 'ul',
        items: [
          'What is happening now that you want to change',
          'What a good outcome would look like in six months',
          'How you currently get customers',
          'What you would consider a successful enquiry',
        ],
      },
      { type: 'h2', text: 'Describe Your Customers' },
      {
        type: 'p',
        text: "Agencies design for your customers, not for you. Anything you know about them is worth writing down: what they compare you against, what makes them hesitate, and what they always ask before committing.",
      },
      {
        type: 'p',
        text: "If you can only include one thing, make it the objection you answer most often on the phone. That sentence usually ends up shaping the whole homepage.",
      },
      { type: 'h2', text: 'Be Honest About Budget' },
      {
        type: 'p',
        text: "Withholding budget feels like negotiating leverage. In practice it wastes everyone's time, because an agency cannot tell whether you want a focused landing page or a system with client logins.",
      },
      {
        type: 'p',
        text: "A range is enough. It lets an agency propose the best version of the project at your level rather than guessing and being wrong in either direction. If you have no idea what is realistic, our breakdown of [website costs](/blog/cost-of-a-business-website-2026) is a reasonable starting point.",
      },
      { type: 'h2', text: 'List the Functional Requirements' },
      {
        type: 'p',
        text: "This is where projects most often go wrong. Anything the site needs to do, rather than say, belongs in the brief - it is the difference between a design job and a [development job](/web-development).",
      },
      {
        type: 'ul',
        items: [
          'Online booking or scheduling',
          'Payments, deposits or subscriptions',
          'Customer accounts or client logins',
          'Integration with a CRM, calendar or accounting system',
          'Anything currently done manually that you would like automated',
        ],
      },
      { type: 'h2', text: 'Say What You Are Bringing' },
      {
        type: 'p',
        text: "Projects stall on content far more often than on design. Be clear about what exists and what does not: logo and brand assets, photography, written copy, product information, testimonials.",
      },
      {
        type: 'p',
        text: "If you need help writing the copy, say so upfront. It is a normal part of the work, and it is much cheaper to plan for than to discover halfway through.",
      },
      { type: 'h2', text: 'What to Leave Out' },
      {
        type: 'p',
        text: "A brief should define the destination, not the route. Prescribing solutions removes the expertise you are paying for.",
      },
      {
        type: 'ul',
        items: [
          'Specific layouts - describe the goal, not the wireframe',
          'Technology choices, unless you have a genuine constraint',
          'Long lists of competitor sites you like the look of, with no explanation of why',
          'Exhaustive page-by-page instructions before anyone has researched your customers',
        ],
      },
      {
        type: 'quote',
        text: 'Tell an agency what success looks like. If you also tell them exactly how to build it, you are paying expert rates for typing.',
      },
      { type: 'h2', text: 'Practical Details Worth Including' },
      {
        type: 'ul',
        items: [
          'Any real deadline, and what is driving it',
          'Who is making the final decision',
          'Who else needs to approve work, and when they are available',
          'Whether you are replacing an existing site, and whether it currently ranks for anything',
        ],
      },
      {
        type: 'p',
        text: "That last one matters more than people expect. If your current site gets meaningful search traffic, protecting it during a rebuild is real work - and it needs to be in the brief rather than discovered afterwards.",
      },
      {
        type: 'p',
        text: "Once your brief is written, [choosing the right agency](/blog/how-to-choose-a-web-design-agency) becomes far easier, because you can compare answers rather than prices.",
      },
    ],
  },
  {
    slug: 'bespoke-website-vs-template-website',
    title: 'Bespoke Website vs Template Website: Which Is Better?',
    seoTitle: 'Bespoke Website vs Template Website',
    excerpt:
      'Templates are cheaper and faster, and sometimes they are the right call. Here is an honest comparison of where each one wins.',
    category: 'Web Design',
    date: '2026-07-25',
    author: 'The Nexiora Team',
    content: [
      {
        type: 'p',
        text: "We build bespoke sites, so you can reasonably expect us to be biased. We will try not to be, because there are genuinely situations where a template is the sensible choice and telling you otherwise would be dishonest.",
      },
      { type: 'h2', text: 'What Each One Actually Means' },
      {
        type: 'p',
        text: "A template website starts from a pre-built design. You replace the images and text with your own, adjust colours, and publish. A [bespoke website](/web-design) starts from your business: the structure, layout and messaging are decided by who your customers are and what makes them hesitate.",
      },
      {
        type: 'p',
        text: "The distinction is not really about code quality. It is about who the design decisions were made for.",
      },
      { type: 'h2', text: 'Where Templates Win' },
      {
        type: 'ul',
        items: [
          'Cost - materially cheaper upfront, sometimes by an order of magnitude',
          'Speed - live in days rather than weeks',
          'Predictability - you can see roughly what you are getting before you commit',
          'Low stakes - fine when the site is a formality rather than a sales channel',
        ],
      },
      {
        type: 'p',
        text: "If you need a presence so people can check you exist, if your work comes entirely through referral, or if you are testing a business idea before investing properly, a template is a perfectly rational decision. Spend the money on something with a clearer return.",
      },
      { type: 'h2', text: 'Where Templates Cost You' },
      {
        type: 'p',
        text: "The trouble starts when the website is expected to sell. Templates are designed to look good for the widest possible range of businesses, which means they are optimised for nobody in particular.",
      },
      { type: 'h3', text: 'The structure is generic' },
      {
        type: 'p',
        text: "The order of sections was decided by someone who had never heard of you. If most of your enquiries hinge on one specific objection, a template has no way of knowing to answer it early.",
      },
      { type: 'h3', text: 'You inherit weight you do not need' },
      {
        type: 'p',
        text: "Templates ship with features for every possible user, and you carry the loading cost of all of it. That shows up in speed, which affects both rankings and conversion - as we covered in [how website speed impacts SEO](/blog/website-speed-seo-conversions).",
      },
      { type: 'h3', text: 'You look like your competitors' },
      {
        type: 'p',
        text: "Popular templates are popular. If three firms in your area chose the same one, the differentiation you were relying on quietly disappears.",
      },
      { type: 'h3', text: 'Changes get harder, not easier' },
      {
        type: 'p',
        text: "Templates are flexible until you want something they did not anticipate. Then you are fighting the theme, and the workarounds tend to cost more than building it properly would have.",
      },
      { type: 'h2', text: 'The Honest Comparison' },
      {
        type: 'ul',
        items: [
          'Upfront cost: template wins clearly',
          'Time to launch: template wins',
          'Conversion rate: bespoke, usually by a wide margin',
          'Speed and technical performance: bespoke',
          'Standing out from competitors: bespoke',
          'Room to grow: bespoke',
          'Simplicity if you never change anything: template',
        ],
      },
      { type: 'h2', text: 'The Question That Settles It' },
      {
        type: 'p',
        text: "Ask what the website is worth to you. If one extra client a month would cover the difference within a year, the sums answer themselves. If your website has never generated an enquiry and realistically never will, spend accordingly.",
      },
      {
        type: 'quote',
        text: 'A template is a cost. A website that converts is an investment. The mistake is treating the second like the first.',
      },
      { type: 'h2', text: 'A Middle Path' },
      {
        type: 'p',
        text: "You do not have to choose between a £500 template and a £15,000 rebuild. A focused bespoke landing page targeting your highest-value service often outperforms a full template site for a fraction of a complete custom build.",
      },
      {
        type: 'p',
        text: "Start where the money is, prove it works, then expand. That approach also works well if you later need [custom functionality](/web-development) - you are building on foundations that were designed to grow.",
      },
    ],
  },
  {
    slug: 'what-should-a-business-website-include',
    title: 'What Should a Business Website Include?',
    excerpt:
      'The pages, sections and details every business website needs - and the common additions that quietly get in the way.',
    category: 'Web Design',
    date: '2026-07-22',
    author: 'The Nexiora Team',
    content: [
      {
        type: 'p',
        text: "There is no universal template for a business website, but there is a reliable list of things visitors look for and get frustrated when they cannot find. Most underperforming sites are missing several of them, and adding them back is usually cheaper than a redesign.",
      },
      { type: 'h2', text: 'The Essentials' },
      { type: 'h3', text: 'A homepage that says what you do in one sentence' },
      {
        type: 'p',
        text: "Visitors decide within seconds whether they are in the right place. Clever taglines that require interpretation fail this test. Say what you do, who for, and where - then earn the cleverness later.",
      },
      { type: 'h3', text: 'A page per service that matters' },
      {
        type: 'p',
        text: "One page listing eight services is worse than four pages covering the four you actually want more of. It gives you room to answer real questions, and it gives search engines something specific to rank.",
      },
      { type: 'h3', text: 'Proof that you are not a stranger' },
      {
        type: 'p',
        text: "Reviews, case studies, client logos, before-and-after photos, accreditations. Nothing you write about yourself carries the weight of one specific, verifiable thing you did for someone else.",
      },
      { type: 'h3', text: 'Contact details that are easy to find' },
      {
        type: 'p',
        text: "Phone number, email, and a form. Visible in the header or footer on every page, not buried behind a single contact link. If you serve a location, say where - it matters for both trust and [local search](/web-design-london).",
      },
      { type: 'h3', text: 'One obvious next step on every page' },
      {
        type: 'p',
        text: "Every page should make it clear what to do next. A visitor who reaches the bottom of a service page and finds nothing to click will simply leave.",
      },
      { type: 'h2', text: 'The Things People Look For and Rarely Find' },
      {
        type: 'ul',
        items: [
          'Some indication of price, even a range or a starting point',
          'What the process looks like - what happens after they get in touch',
          'How quickly you respond',
          'Which areas you cover, if location is relevant',
          'Who they will actually be dealing with',
          'What happens if something goes wrong',
        ],
      },
      {
        type: 'p',
        text: "Price is the one businesses resist most. You do not need a full price list, but silence pushes people to assume - and the ones who assume you are too expensive never call to check.",
      },
      { type: 'h2', text: 'The Technical Basics' },
      {
        type: 'p',
        text: "None of this is visible, and all of it decides how many people ever see the rest.",
      },
      {
        type: 'ul',
        items: [
          'Fast loading, especially on mobile data',
          'A layout that works properly on a phone',
          'SSL, so browsers do not warn people away',
          'Unique page titles and meta descriptions',
          'Clean heading structure so pages can be read and indexed',
          'Analytics, so you can see what visitors actually do',
          'A privacy policy and terms - a legal requirement, not an optional extra',
        ],
      },
      { type: 'h2', text: 'What You Probably Do Not Need' },
      {
        type: 'ul',
        items: [
          'An autoplaying video background that delays everything else',
          'A pop-up appearing before anyone has read a sentence',
          'A blog nobody has updated since 2022',
          'A live chat widget nobody is available to answer',
          'A long "our journey" story on the homepage',
          'Stock photography of people who have never used your service',
        ],
      },
      {
        type: 'p',
        text: "Most of these are added because a competitor has them. They cost loading speed and attention, which are the two things a website has least of.",
      },
      { type: 'h2', text: 'When You Need More Than Pages' },
      {
        type: 'p',
        text: "Some businesses need the site to do work rather than describe it: take bookings, provide client logins, generate quotes, or sync with the systems you already run. That is where a website turns into [custom software](/custom-software), and it is worth knowing that boundary exists before you scope a project.",
      },
      {
        type: 'p',
        text: "If you are reviewing an existing site against this list, our [website redesign checklist](/blog/complete-website-redesign-checklist-2026) is a practical next step.",
      },
    ],
  },
]

/**
 * Sorted newest-first here rather than relying on authoring order - the blog
 * index treats blogPosts[0] as the featured "Latest Article".
 */
export const blogPosts: BlogPost[] = [...allPosts]
  .sort((a, b) => b.date.localeCompare(a.date))
  .map((post) => ({ ...post, readTime: estimateReadTime(post.content) }))

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
