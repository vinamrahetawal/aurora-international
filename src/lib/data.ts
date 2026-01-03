
import type { NavLink, TeamMember, Service, Insight, Highlight, DetailedService } from '@/lib/types';
import { Briefcase, Megaphone, LineChart, Cpu, Landmark, Brush, Search, BriefcaseBusiness, Leaf, BarChartBig, CircleCheckBig } from 'lucide-react';

export const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Team', href: '/team' },
  { name: 'Insights', href: '/insights' },
];

export const teamMembers: TeamMember[] = [
  { name: 'Gauri Gaur', position: 'Co-Founder', university: 'Delhi Technological University', linkedin: 'https://www.linkedin.com/in/gauri-gaur-2a17a7270/', photoPath: '/team/Gauri Gaur.png' },
  { name: 'Vanshika Jain', position: 'Co-Founder', university: 'Shaheed Sukhdev College Of Business Studies', linkedin: 'https://www.linkedin.com/in/vanshika-jain-9b0347284', photoPath: '/team/Vanshika Jain.png' },
  { name: 'Kavy Rastogi', position: 'Co-Founder', university: 'Shaheed Sukhdev College of Business Studies', linkedin: 'https://www.linkedin.com/in/kavyrastogi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', photoPath: '/team/Kavy.png' },
  { name: 'Abdal Lalit', position: 'Senior Consultant', university: 'Indian Institute Of Management Lucknow', linkedin: 'https://www.linkedin.com/in/abdal-lalit/', photoPath: '/team/Abdal Lalit.png' },
  { name: 'Hannsika Jaiswal', position: 'Senior Consultant', university: 'Lasalle College Of Arts, Singapore', linkedin: 'https://linkedin.com', photoPath: '/team/Hannsika Jaiswal.png' },
  { name: 'Jinia Chatterjee', position: 'Senior Consultant', university: 'Monash University, Malaysia', linkedin: 'https://www.linkedin.com/in/jinia-chatterjee-b87942298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', photoPath: '/team/Jinia Chatterjee.png' },
  { name: 'Kanav Batra', position: 'Senior Consultant', university: 'University Of Sydney', linkedin: 'https://linkedin.com', photoPath: '/team/Kanav Batra.png' },
  { name: 'Ketvi Jasrotia', position: 'Senior Consultant', university: 'University Of Manchester', linkedin: 'https://linkedin.com/in/ketvi-jasrotia-153255379', photoPath: '/team/Ketvi.png' },
  { name: 'Sanyam Kasera', position: 'Senior Consultant', university: 'Shaheed Sukhdev College Of Business Studies', linkedin: 'https://linkedin.com', photoPath: '/team/Sanyam.png' },
  { name: 'Tanisshq Jain', position: 'Senior Consultant', university: 'University Of Manchester', linkedin: 'https://www.linkedin.com/in/tanisshqjaiin', photoPath: '/team/Tanisshq Jain.png' },
  { name: 'Tanmay Gupta', position: 'Senior Consultant', university: 'University Of Warwick', linkedin: 'http://www.linkedin.com/in/tanmay-gupta-73b311287', photoPath: '/team/Tanmay Gupta.png' },
  { name: 'Vinamra Hetawal', position: 'Senior Consultant', university: 'Acropolis Institute Of Technology & Research', linkedin: 'https://www.linkedin.com/in/vinamra-hetawal-0573521b7', photoPath: '/team/Vinamra Hetawal.png' },
];

export const services: Service[] = [
  { title: 'Consulting & Strategy', description: 'Develop robust strategies for growth and market entry.', icon: Briefcase },
  { title: 'Marketing & Branding', description: 'Craft compelling brand narratives and digital campaigns.', icon: Megaphone },
  { title: 'Financial Research & Valuation', description: 'In-depth financial analysis to support investment decisions.', icon: LineChart },
  { title: 'Technology & Data Analytics', description: 'Leverage data to unlock insights and drive efficiency.', icon: Cpu },
  { title: 'Policy & Governance', description: 'Navigate complex regulatory landscapes with expert guidance.', icon: Landmark },
  { title: 'Design Thinking & Innovation', description: 'Foster innovation and user-centric solutions.', icon: Brush },
];

export const detailedServices: DetailedService[] = [
  {
    title: 'Market Research & Insights',
    icon: Search,
    details: [
      'Conduct primary & secondary research across industries.',
      'Analyse trends, customer behaviour, and competitors.',
      'Deliver actionable insights for market entry and growth.',
    ],
  },
  {
    title: 'Strategy & Business Consulting',
    icon: BriefcaseBusiness,
    details: [
      'Diagnose business challenges and define growth objectives.',
      'Design go-to-market (GTM) strategies for products & services.',
      'Provide phased roadmaps aligned with client goals.',
    ],
  },
  {
    title: 'Sustainability & Social Impact Projects',
    icon: Leaf,
    details: [
      'Support CSR & ESG initiatives with measurable outcomes.',
      'Conduct impact assessments for community projects.',
      'Design strategies for sustainable operations and branding.',
    ],
  },
  {
    title: 'Data & Digital Solutions',
    icon: BarChartBig,
    details: [
      'Build dashboards and BI tools for performance tracking.',
      'Use data analysis & visualisation to drive decision-making.',
      'Explore automation & digital transformation opportunities.',
    ],
  },
];

export const insights: Insight[] = [
  {
    id: '1',
    title: 'The Startup Survival Code: Adaptability, Purpose, and Impact',
    date: '2025-12-15',
    author: 'Tanmay Gupta',
    tags: ['Startups', 'Strategy', 'Impact'],
    image: { id: 'insight-1', alt: 'A team collaborating in a startup environment' },
    content: `**Introduction**

The past few years have tested startups like never before. Global crises — such as pandemics and climate crises, supply chain collapse and rapid tech upheavals — have revealed one truth: survival is no longer about being the fastest or the cheapest. Rather, it is about being sturdy, meaningful, and effective. This new Startup Survival Code is not only prudent, but a necessity amongst founders and early-stage ventures.

**Adaptability: Blooming in Uncertainty**

Change is the only constant in today’s business landscape. Startups that pivot swiftly are the ones that survive. Through the pandemic, small restaurants turned into delivery-first centred overnight, fitness studios became online classes, and manufacturers switched to producing PPE. Research indicates that 42% of startups pivot at least once, and these startups raise 2.5x more funding on average than non-pivoting peers (Startup Genome, 2020). Adaptability is not just crisis management — it’s the ability to create a culture of never ending innovation, minimal experimentation, and flexibility. In case of startups, adaptability signifies viewing change not as a threat, but as an opportunity to transform.

**Purpose: The New Currency of Trust**

The profit is no longer sufficient to attract customers, employees, or investors. The contemporary stakeholders seek meaning. Deloitte conducted a survey globally where 82% of consumers expect business enterprises to take action on societal matters and 65% of employees report feeling better motivated to work in a purpose-driven business. Purpose-driven startups do not simply sell , they foster movements. They encourage employees to work with their best, build customer relations beyond transactions, and create goodwill that money cannot buy. Aligning with social and environmental goals, protects startups from reputational risks and places them to be relevant in the long run.

**Impact: Measurable Change That Matters**

Startups are not only on what they earn, but on also what they contribute. Impact is becoming a measurable currency — carbon emissions saved, jobs created, or communities empowered. According to PwC, 79% of investors say they now prioritize ESG impact when evaluating companies, while Nielsen reports that 80% of consumers are willing to pay more for sustainable brands. Through transparency in tracking and communication, startups are able to enhance trust and open doors towards partnerships and investments. Impact is no longer charity; it is a competitive advantage.

**Lessons from Disruption**

The startups that survived recent global shocks had three things in common: adaptability, purpose, and impact. The ones that had a diversified supply chain and digital-first models remained resilient. Firms that were congruent with sustainability, inclusivity, and wellbeing developed at a quicker pace. In comparison, those who were stuck into old growth- at-all- costs models failed when it was time to be tested.

**Conclusion**

The word fittest in business has taken a new meaning. The startups that will succeed tomorrow will not be the largest or the quickest ones, it will be the ones that are most flexible, deliberate, and effective. Through the help of the Startup Survival Code, young business can survive, not only, but prosper in the highly unpredictable world.

**Sources**

https://www.pwc.com/gx/en/issues/c-suite-insights/global-investor-survey/global-investor-survey-report-2024.pdf
https://www.deloitte.com/global/en/about/story/impact/societal-impact-survey-deloitte-global.html?utm_source=chatgpt.com
https://www.pwc.com/gx/en/news-room/press-releases/2024/pwc-2024-voice-of-consumer-survey.html?utm_source=chatgpt.com`
  },
  {
    id: '2',
    title: 'Navigating the Fabric of Ethics: The Role of Ethical Supply Chains in Modern Business',
    date: '2025-12-19',
    author: 'Ketvi Jasrotia',
    tags: ['Sustainability', 'Business', 'ESG'],
    image: { id: 'insight-2', alt: 'Green leaves and technology interface' },
    content: `In today’s business landscape, where consumers are becoming increasingly discerning about the origins of their products, they are no longer just buying products—they are buying into the values, practices, and ethics of the brands they choose. With increased access to information, customers are asking more complex questions: Where was this product made? Who made it? At what cost to people and the planet?

This shift means the ethical integrity of supply chains has become a defining factor for businesses, big and small. Far from being just a “nice-to-have,” an ethical supply chain is now a competitive differentiator that builds trust, drives loyalty, and safeguards long-term growth.

**Understanding Ethical Supply Chains**

An ethical supply chain goes beyond efficiency and cost, it is about fairness, responsibility, and accountability at every stage of production. Core principles include:

• Fair Labour Practices: Businesses must operate in compliance with the law. It is the duty of businesses to provide workers with safe working conditions and ensure the complete absence of child labour and forced labour.
• Environmental Sustainability: Reducing carbon footprints, sourcing responsibly, and embracing circular practices like recycling and waste reduction. 
• Transparency and Traceability: Giving consumers and partners clear insights into where materials come from and how products are made.

These pillars not only mitigate reputational and regulatory risks but also foster deeper consumer trust. Increasingly, buyers especially younger generations choose to support brands whose values align with their own.

**Challenges in Implementing Ethical Supply Chains**

Of course, knowing the importance of ethical supply chains doesn’t make them easy to build. Businesses often run into hurdles like:

• Higher Costs: Sustainable raw materials and fair labour wages often come with a price tag that can feel daunting, especially for startups.
• Monitoring Complexity: Modern supply chains are sprawling, with multiple tiers of suppliers that can make compliance difficult to track.
• Cultural & Operational Resistance: Some suppliers may be reluctant to change established practices or invest in ethical improvements.

Yet, companies that push through these challenges often discover that the long-term benefits such as consumer loyalty, brand differentiation, and risk reduction outweigh the short-term costs.

**Case Studies: Brands Leading the Way**

Several global companies show that profitability and ethics can go hand-in-hand:

• Patagonia has built its brand identity around environmental stewardship and fair labour practices. Its transparency reports are a benchmark for others.
• IKEA has invested heavily in renewable energy, sustainable materials, and responsible sourcing, demonstrating that scale doesn’t have to compromise ethics.
• Unilever has empowered smallholder farmers in its supply chain, showing how improving livelihoods can also secure stable, high-quality inputs.

These examples prove that ethical supply chains aren’t just a dream but a proven reality. 

**Strategies for Startups**

For startups, the opportunity is even bigger. Unlike legacy corporations tied to rigid systems, startups can embed ethical practices into their DNA from day one. Key steps include:

• Defining Clear Ethical Standards: Decide early what values your business stands for—whether that’s zero tolerance for labour exploitation or a pledge for sustainable materials.
• Choosing Suppliers Wisely: Go beyond price. Ask hard questions, conduct audits, and work only with partners who share your vision.
• Engaging Stakeholders: Collaborate with communities, customers, and employees to ensure your supply chain reflects shared values.

Doing this not only builds credibility but also creates a unique selling point in a crowded market.

**How Aurora Can Help**

This is precisely where Aurora International steps in. As a student-led consulting hub, Aurora combines fresh, research driven insights with practical, cost-conscious solutions for startups. We help young businesses turn supply chain ethics into a strategic advantage through:

• Supply Chain Audits: Identifying risks, inefficiencies, and opportunities for ethical sourcing.
• ESG Integration Frameworks: Aligning practices with global environmental, social, and governance standards.
• Compliance & Monitoring Systems: Ensuring partners meet ethical benchmarks without straining the startup’s resources. 
• Actionable Roadmaps for Sustainable Growth: Offering realistic, step-by-step strategies to scale without sacrificing ethics.

With Aurora, startups don’t have to choose between growth and responsibility; they can achieve both.

**Conclusion: The Future Belongs to Ethical Businesses**

Ethical supply chains are no longer optional. They are becoming a baseline expectation in the modern economy. Companies that embrace them not only win consumer trust but also safeguard themselves against reputational, legal, and financial risks.

For startups, the challenge is real—but so is the opportunity. By embedding ethical practices from the outset, they can set industry benchmarks, attract purpose-driven customers, and future-proof their growth. 

Now is the time for businesses to look inward. Audit your supply chain. Ask the uncomfortable questions. Consider not just the cost of your products, but the cost to people and the planet.

By committing to ethical supply chains today, you’re not just meeting consumer expectations—you’re helping shape a more sustainable and equitable future for global business.`
  },
  {
    id: '3',
    title: 'Why ESG is Now a Startup Necessity',
    date: '2025-12-23',
    author: 'Jinia Chatterjee',
    tags: ['ESG', 'Startups', 'Sustainability'],
    image: { id: 'insight-3', alt: 'Person working on a laptop in a cafe' },
    content: `**Introduction**
    
For years, sustainability was seen as a ‘nice-to-have’, something only large corporations could afford to prioritise. But today, the rules of business have changed. Customers, investors and even regulators increasingly expect Environmental, Social and Governance (ESG) responsibility to be embedded in a company’s DNA. For startups and growing businesses, embracing ESG is no longer an option, it is a strategic necessity.

**The ESG Advantage for Startups**

1. Studies show that 88% of global consumers are more loyal to brands that support social or environmental causes (Townsend, 2018). For young businesses, this loyalty can translate directly into repeat purchases, stronger word-of-mouth, and brand differentiation in crowded markets.
2. ESG is not just about branding, it is about efficiency because energy savings, smarter resource use, and strong governance practices reduce operational costs and help startups avoid compliance penalties later on. For example, adopting transparent reporting standards early makes future investor due diligence smoother and faster.
3. Increasingly, venture capital and private equity funds use ESG scores as part of their investment criteria. Integrating ESG frameworks such as Global Reporting Initiative (GRI) or Task Force on Climate-related Financial Disclosures (TCFD) can help startups appeal to impact investors and tap into sustainable finance opportunities.

**Challenges**

Integrating ESG is not without its challenges. Startups usually face resource constraints, lack of expertise and pressure to prioritise short-term growth over long-term impact. Many founders believe that ESG is only for billion-dollar companies. Yet this mindset risks missing the early-stage advantage, building sustainability into the company’s foundation before scaling.

**How Aurora Can Help**

This is where Aurora International steps in. As a student-led consulting hub, we combine fresh perspectives, global insights, and research-driven methods to help startups:

- Conduct ESG audits and identify key risks and opportunities.
- Align with frameworks like GRI, TCFD, and SDGs in a simplified, actionable way.
- Design sustainability-driven go-to-market strategies that not only meet compliance but also win consumer trust.
- Support CSR and community engagement initiatives that resonate with stakeholders.

**Conclusion**

Sustainability is no longer a ‘box to tick.’ It is a competitive edge and startups that embed ESG early will be the ones that thrive in tomorrow’s economy. By guiding young businesses through this transition, Aurora helps shape ventures that are not only profitable but also purposeful. In 2025 and beyond, the startups that survive will not just be the fastest or the cheapest, they will be the most sustainable.`
  },
  {
    id: '4',
    title: 'India\'s AI Moment: From Free Internet to Free AI',
    date: '2025-12-28',
    author: 'Tanisshq Jain',
    tags: ['Gig Economy', 'India', 'Labor'],
    image: { id: 'insight-4', alt: 'Digital network connections' },
    content: `The rapid growth of India’s gig economy—driven by platforms like Swiggy, Zomato, Ola, and Uber—has created millions of flexible, on-demand jobs. Yet, beneath this promise of independence lies a system where algorithmic management silently dictates workers’ livelihoods. These algorithms allocate tasks, impose penalties, and calculate incentives with little transparency, shaping not only incomes but also workers’ dignity and well-being.

**Algorithmic Control and Precarity**

Research shows that workers experience income instability, arbitrary penalties, and opaque decision-making. A small dip in customer ratings can sharply reduce job allocations, while delays beyond workers’ control—like traffic or restaurant issues—often lead to fines or account suspensions. Workers describe the app as a “black box,” where rules change without explanation, eroding trust and heightening precarity. Even promised benefits like health insurance or festival bonuses often remain inaccessible, reinforcing a sense of distributive injustice—where effort and rewards are mismatched—and corrective injustice, as grievance redressal mechanisms are weak or absent.

**Voices from the Ground**

Interviews with Mumbai-based gig workers reveal the human side of algorithmic governance. Many spoke about fear of sudden deactivation, frustration over income fluctuations, and lack of respect from platforms. Yet, moments like festival surges—when earnings peak—or informal support networks among riders provided rare glimpses of fairness and solidarity. Workers envision platforms where order allocation is equal, penalties are transparent, and benefits are easy to claim. Many also demand government regulation to ensure minimum wages, petrol subsidies, and social security, echoing new policy efforts like Karnataka’s Gig Workers Welfare Bill (2025).

**Justice Framework for Fairer Platforms**

Using five pillars of organizational justice—distributive, procedural, interactional, informational, and corrective—the study shows how current systems fail across all dimensions. For instance:
Distributive Justice: Unequal order allocation and inaccessible benefits.
Procedural Justice: No appeals for penalties or suspensions.
Interactional Justice: Workers penalized for factors beyond their control.
Informational Justice: Opaque rules with little explanation.
Corrective Justice: Weak grievance redressal and insurance access.

**From Diagnosis to Reform**

Moving beyond victim narratives, the study applied Appreciative Inquiry to capture workers’ positive experiences and co-create solutions. Workers proposed:
Transparency dashboards for order allocation and penalties.
Minimum income guarantees per shift.
Independent grievance boards for fair dispute resolution.
Clear, accessible insurance and benefit claims.
These suggestions form an ethical framework for inclusive algorithm design, aligning efficiency with fairness, dignity, and accountability.

**Policy and Future Directions**

As India experiments with gig worker welfare laws, this research stresses the need to tackle algorithmic opacity directly. Future studies should expand to other cities, audit platform algorithms, and evaluate new policies’ real-world impact. Ultimately, the gig economy’s sustainability depends on trust and fairness. By embedding justice into digital labor platforms, India can transform gig work from a survival strategy into a dignified livelihood.`
  },
  {
    id: '6',
    title: 'India\'s AI Moment: From Free Internet to Free AI',
    date: '2026-01-03',
    author: 'Abdal Lalit',
    tags: ['AI', 'India', 'Technology', 'Policy'],
    image: { id: 'insight-6', alt: 'Artificial intelligence and digital India visualization' },
    content: `**The Echoes of 2015**

In 2015, India became the battleground for Facebook's ambitious push to capture the country's digital future. Through Internet.org (later Free Basics), the company promised free internet—but with strings attached. The scheme offered only a narrow, walled-garden version of the web, sparking concerns about net neutrality and digital colonization. After a long, sustained campaign, regulators in India shut it down, setting a global precedent for internet freedom.

Fast-forward to 2025, and history appears to be repeating itself. This time, the players are OpenAI, Perplexity, and other global AI giants. Their approach mirrors the earlier playbook: provide access for free, scale fast, and embed themselves deeply in India's digital fabric.

**AI Companies Go on Offense**

Over the past few months, AI billboards have appeared across India, not just in metros like Delhi or Mumbai, but also in tier-2 cities like Jaipur. These ads highlight everyday uses of ChatGPT—from schoolwork to health tips—making AI visible, accessible, and aspirational.

Behind the glossy marketing lies a distribution strategy similar to Facebook's a decade ago. Partnerships with telecom providers, government agencies, and educational institutions are enabling AI companies to reach millions of students and educators directly. For example, OpenAI has collaborated with the Ministry of Education and AICTE to distribute half a million free licenses. Perplexity is working with Airtel to extend access across its network.

The logic is clear: offer AI for free, and in doing so, lock users into a platform before competitors—or regulations—catch up.

**The Missing Safeguards**

When Free Basics was shut down, it was due to both public resistance and regulatory intervention in favor of net neutrality. With AI, neither exists today. There is no equivalent of "AI neutrality" to ensure equal access and fair competition. Nor is there a groundswell of citizen activism pushing back against walled gardens of generative AI.

This vacuum has allowed American AI companies to embed themselves rapidly into India's digital infrastructure. The government itself, while issuing visionary reports about India becoming the "data capital of the world," seems more focused on adoption than on ensuring sovereignty over technology and data.

**India's Strategic Dilemma**

The country now faces a familiar challenge: how to balance the benefits of rapid AI adoption with the risks of dependency on foreign platforms. While Sam Altman lauds India as OpenAI's second-largest market, his comments dismissing the possibility of Indian startups building world-class foundation models reveal the underlying imbalance. India risks becoming a massive consumer and data supplier, without building indigenous capacity in AI innovation.

The lesson from the Free Basics era is that true digital empowerment comes not just from access, but from ownership. Unless India invests in nurturing its own ecosystem—supporting startups, funding research, and creating open standards—its AI future will remain tethered to Silicon Valley.

**Conclusion**

India's AI revolution is unfolding at breakneck speed, echoing the country's earlier brush with free internet. The challenge this time is larger: the stakes are not just about access, but about control over the technologies that will define the next generation.

AI is no longer a distant frontier—it is the playing field of global competition. Startups that embed responsible AI practices early will be the ones that thrive in tomorrow's economy.

By guiding young businesses through this transition, Aurora helps shape ventures that are not only profitable but also pioneering. In 2025 and beyond, the startups that survive will not just be the fastest or the cheapest, they will be the most future-ready.

**References:**
https://the-ken.com/columns/zero-shot/india-goes-from-free-internet-to-free-ai/`
  }
];

export const highlights: Highlight[] = [
  { title: 'Global Student Network', desc: 'Members from top universities worldwide.' },
  { title: 'Real-world Impact', desc: 'Bridging academia and industry with actionable insights.' },
  { title: 'Multidisciplinary Solutions', desc: 'Consulting, marketing, finance, tech, and more.' }
];
    

    

    







    

    

    






