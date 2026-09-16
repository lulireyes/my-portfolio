---
title: Helpling
summary: Europe’s leading household-services platform — Resolution Center, Design System 1.0, and growth experiments across Customer and Partner Apps.
overview:
  - Helpling is Europe’s leading platform for household services, connecting customers with trusted service providers across multiple markets.
  - I joined Helpling as a Product Designer and grew into a Senior Product Designer, working across the Customer and Partner Apps in Germany and Singapore. I worked on everything from complex service experiences and new product initiatives to growth, retention and experimentation.
  - My work was grounded in research and evidence. I regularly combined qualitative insights from user interviews and usability testing with quantitative data, product analytics and experimentation to understand problems, challenge assumptions and guide design decisions.
tags:
  - End-to-end design
  - Marketplace
  - Design systems
  - Growth
year: 2025
period: August 2022 – December 2025
role: Product Designer, UX, Researcher
market: Marketplace · Germany / Singapore / EU
highlights:
  - before: "I designed and launched the "
    title: Resolution Center
    href: "#resolution-center"
    after: ", a new experience that helped customers and partners resolve issues more independently while "
    emphasis: "reducing operational support costs by 35%."
  - before: "I built Helpling’s first "
    title: Design System 1.0
    href: "#design-system"
    after: " from the ground up, creating a shared foundation across the Customer and Partner Apps to "
    emphasis: "improve consistency and scalability across the product."
  - before: "I led "
    title: Growth, Retention & A/B Experiments
    href: "#growth-retention"
    after: " across conversion and retention, combining qualitative insights, product data and experimentation to identify opportunities and deliver a "
    emphasis: "15% conversion uplift."
sections:
  - id: resolution-center
    title: Resolution Center
    emoji: "🤝"
    role: End-to-end Product Designer
    timeline: 6 months
    story:
      - id: rc-hero
        layout: hero
        title: Resolution Center
        tagline: Designing for two people who both believe they're right.
        impactLine: Reduced operational costs by 35% by turning manual dispute handling into a scalable self-service experience.
        figures:
          - src: /img/projects/helpling/helpling-rc-issue-flow-phones.png
            alt: Two Helpling Resolution Center phone screens — Create new request issue categories on the left, and a follow-up screen to narrow the problem with a Continue button on the right.
            caption: Resolution Center in product — structured issue intake and guided follow-up, designed for clarity under stress.
            tone: default
            size: lg
          - src: /img/projects/helpling/helpling-rc-service-portal-issue.png
            alt: Helpling Service-Portal mobile screen titled What is the issue you want to resolve, listing billing, no-show, damage claim, and fee dispute options with chevrons.
            caption: Service-Portal issue selection — clear categories and next actions so customers can start the right resolution path.
            tone: default
            size: lg

      - id: rc-overview
        layout: overview
        title: Overview
        contextLabel: Context
        challengeLabel: The challenge
        roleLabel: My role
        paragraphs:
          - Helpling is a marketplace connecting customers and household service providers. Disputes between both sides were manually managed by Operations. As the marketplace grew, this became increasingly difficult to scale.
        challengeIntro: "The new Resolution Center needed to:"
        bullets:
          - support both customers and providers
          - reduce unnecessary manual intervention
          - automate predictable dispute scenarios
          - make the process clearer and more transparent
          - preserve trust and perceived fairness
          - work within the operational, business, legal/policy and technical realities of the service
        roleLine: I led the product design end to end, working closely with Product, Operations, Data and Engineering.
        responsibilities: Discovery · User Research · Service Design · Cross-platform UX · Information Architecture · Usability Testing · Rollout

      - id: rc-challenge
        number: "01"
        layout: challenge
        title: The Challenge
        lead: Helpling was scaling as a marketplace, but its dispute-resolution system had not scaled with it.
        paragraphs:
          - Customers and providers could end up in disputes that were manually investigated and resolved by Operations. As transaction volume grew, this meant slower resolution, higher operational costs, limited visibility for users, and a system that was increasingly hard to scale.
          - The challenge wasn't simply making dispute resolution easier. It was designing a scalable resolution system that works for both sides of a marketplace, supports the business and Operations, and works within the legal, policy and technical constraints of the service.
        perspectives:
          - title: Customer
            body: Customers wanted support, visibility into what was happening, and confidence that their issue and money were being handled fairly.
          - title: Provider
            body: Providers needed transparency around how disputes were evaluated and reassurance that their work and earnings were being treated fairly.
          - title: Operations
            body: Operations had to manually investigate and resolve disputes, including cases that followed recurring and relatively predictable patterns.
          - title: The business problem
            body: As the marketplace grew, manual dispute handling became increasingly expensive and difficult to scale. The business challenge wasn't simply reducing support contacts — it was maintaining trust on both sides while creating a more scalable operating model.
        pullQuote: The goal wasn't to optimise one side of the marketplace. It was to design a system that could work for the marketplace as a whole.
        diagram:
          left: Customer
          center: Resolution Center
          right: Provider
          under:
            - Operations
            - Business
            - Constraints
        figures:
          - src: /img/projects/helpling/helpling-rc-chaos-to-order.png
            alt: Minimalist line drawing on a black background — a tangled scribble on the left transitions through a smooth curve into a neat concentric spiral on the right.
            tone: visual
            size: full

      - id: rc-system
        number: "02"
        layout: system
        title: Understanding the System
        lead: Before designing screens, I needed to understand the service behind them — not only from the user's perspective, but from the business and operational side as well.
        paragraphs:
          - I worked with Operations, Product and Data to map how resolution actually worked — and where it broke under growth.
        bullets:
          - how disputes entered the system
          - what types of cases occurred
          - how cases were categorised
          - what information Operations needed to make decisions
          - where manual intervention was required
          - which scenarios were recurring
          - what information users needed throughout the process
          - the business and operational implications of different resolution paths
          - the legal and policy constraints affecting what could be communicated or automated

      - id: rc-mapping
        layout: mapping
        title: Data + System Mapping
        lead: Historical case data and conversations with Operations helped identify recurring patterns — and where a more structured resolution model could take pressure off manual handling.
        paragraphs:
          - Over 80% of disputes followed recurring scenarios that could be structured rather than manually handled. [METRIC — verify exact definition before publishing]
          - That didn't mean every case could be automated. It meant the system could be designed around patterns — with clear paths for predictable cases, and room for human judgment when it mattered.
        figures:
          - src: /img/projects/helpling/helpling-rc-whiteboard-refund-logic.jpg
            alt: Whiteboard sketch of a Case page with Refund and Reject actions, branching into full refund versus partial refund logic with hour-based options and timing notes.
            caption: Early refund and case logic on the whiteboard — mapping full vs. partial paths before the flows became product.
            tone: process
            size: sm

      - id: rc-insights
        number: "03"
        layout: insights
        title: Key Insights
        insights:
          - number: "01"
            title: Predictable patterns could be structured
            body: A large proportion of disputes followed recurring scenarios. These did not always require manual investigation.
          - number: "02"
            title: Opacity creates friction
            body: Users were not only looking for an outcome. They needed to understand what was happening, what information had been considered, and what would happen next.
          - number: "03"
            title: Operational efficiency cannot come at the expense of trust
            body: Automating resolution only works if both sides can understand and accept the process.

      - id: rc-strategy
        number: "04"
        layout: strategy
        title: Strategy
        lead: Before shaping the interface, I defined principles that could hold across both sides of the marketplace — and the teams behind it.
        principles:
          - title: Make the process visible
            body: Users should always understand where they are in the process, what has happened, and what happens next.
          - title: Design for both sides
            body: The system needed to account for two different users with different motivations and perceptions of fairness.
          - title: Let people solve what doesn't require people
            body: Predictable cases could be handled through structured self-service, allowing Operations to focus their time on complex cases.
          - title: Design for the whole system
            body: A resolution flow is only successful if it works for users and for the teams, rules and constraints behind it. I designed the experience around the operational, business, legal/policy and technical realities of the service.

      - id: rc-design
        number: "05"
        layout: design
        title: Designing for Resolution
        lead: The hardest design challenge wasn't simply the interface. It was communication and perceived fairness.
        paragraphs:
          - The same dispute could be perceived very differently by a customer and a provider. The experience needed to make the process legible for both.
        bullets:
          - the current status
          - what information had been submitted
          - what the user needed to do
          - what would happen next
          - why a resolution was being reached
          - when human intervention was required
        pullQuote: Clarity over vague legal or procedural language.
        figures:
          - src: /img/projects/helpling/helpling-rc-figma-iteration-board.png
            alt: Figma board titled Resolution Center 1. iteration mobile, showing customer report-a-new-issue flow B and provider response flow with detailed screen grids below.
            caption: First mobile iteration board — customer intake and provider response flows mapped end to end before high-fidelity polish.
            tone: default
            size: lg

      - id: rc-constraints
        number: "06"
        layout: constraints
        title: Designing Within Constraints
        lead: Good product design wasn't about finding the perfect experience in isolation. It was about finding a solution that was useful for users, viable for the business, workable for Operations, and possible within the constraints of the product and service.
        constraints:
          - customer and provider needs could conflict
          - Operations needed enough information to handle complex cases
          - predictable cases needed to be automated without removing trust
          - the experience had to work across two sides of the marketplace
          - business scalability mattered
          - legal and policy constraints influenced what could be communicated or automated
          - technical/product constraints influenced what could realistically be delivered
        tradeoffs:
          - need: "[CONTENT PLACEHOLDER — specific user need from project]"
            constraint: "[CONTENT PLACEHOLDER — related constraint from project]"
            response: "[CONTENT PLACEHOLDER — specific design trade-off from project]"

      - id: rc-solution
        layout: solution
        title: Final Solution
        lead: The Resolution Center brought the strategy into a coherent experience — organised around the problems it needed to solve, not around a gallery of screens.
        solutions:
          - title: Visibility
            body: How users understand the status of their case.
            placeholder: "[IMAGE PLACEHOLDER — status / progress experience]"
          - title: Self-service
            body: How predictable disputes can be handled without agent intervention.
            figure:
              src: /img/projects/helpling/helpling-rc-service-portal-issue.png
              alt: Service-Portal create-new-request screen listing billing errors, cleaner no-show, damage during an event, and wrongful fee charge as selectable issue cards.
              caption: Structured self-service entry — each issue type maps to a clear next action.
              tone: default
              size: md
          - title: Transparency
            body: How the experience communicates what information is being considered and what happens next.
            placeholder: "[IMAGE PLACEHOLDER — explanation / decision screen]"
          - title: Cross-platform consistency
            body: How the experience works for both customers and providers.
            placeholder: "[IMAGE PLACEHOLDER — customer + provider comparison]"

      - id: rc-collaboration
        number: "07"
        layout: collaboration
        title: Delivery & Cross-functional Collaboration
        lead: I worked closely with Product, Operations, Data and Engineering — not as a handoff chain, but as a shared decision space.
        collaborators:
          - role: Data
            contribution: helped identify recurring dispute patterns
          - role: Operations
            contribution: provided insight into real-world case handling
          - role: Product
            contribution: helped define which scenarios could be self-resolved
          - role: Engineering
            contribution: helped shape what could realistically be implemented
          - role: Design
            contribution: translated these inputs into a coherent experience across both sides of the marketplace
        figures:
          - src: /img/projects/helpling/helpling-rc-journey-map-workshop.jpg
            alt: Collaborative workshop table with a printed UX journey map and sticky notes for customer, problem, and interest themes.
            caption: Cross-functional discovery in the room — journey mapping that informed what the Resolution Center needed to resolve.
            tone: process
            size: sm

      - id: rc-impact
        number: "08"
        layout: impact
        title: Impact
        lead: By turning manual dispute handling into a scalable self-service experience, the Resolution Center reduced the operational cost associated with dispute resolution.
        pullQuote: The result wasn't just a better customer experience. It changed where human operational capacity was needed.
        metrics:
          - value: 35%
            label: reduction in operational costs
            verified: true
          - value: "[METRIC — verify exact definition before publishing]"
            label: self-service adoption (mentioned as ~91%)
            verified: false
            note: Definition and measurement period not verified in source material.
          - value: "[METRIC — verify exact definition before publishing]"
            label: task completion without agent (mentioned as ~84%)
            verified: false
            note: Definition and measurement period not verified in source material.
          - value: "[METRIC — verify exact definition before publishing]"
            label: user engagement (mentioned as ~93%)
            verified: false
            note: Definition and measurement period not verified in source material.
        before:
          - Manual investigation
          - Operations involved in recurring cases
          - Higher operational cost
          - Limited visibility
        after:
          - Structured self-service
          - Automated predictable scenarios
          - Operations focused on complex cases
          - More scalable resolution
        placeholders:
          - "[VISUAL PLACEHOLDER — before / after impact diagram]"

      - id: rc-reflection
        number: "09"
        layout: reflection
        title: Reflection
        pullQuote: Fairness and perceived fairness are not always the same thing.
        paragraphs:
          - An objectively fair outcome can still feel unfair if the process behind it is opaque.
          - This project reinforced that clarity is part of the service itself — especially when users are dealing with money, conflict or uncertainty.

      - id: rc-cta
        number: "10"
        layout: cta
        title: Get in touch
        lead: Interested in the thinking behind this project? Reach out to learn more.
        contactHref: "mailto:lucianareyes@gmail.com"
        contactLabel: lucianareyes@gmail.com

  - id: design-system
    title: Design System 1.0
    emoji: "🎨"
    role: Senior Product Designer
    timeline: 6 months
    story:
      - id: ds-hero
        layout: hero
        title: Design System 1.0
        tagline: Scaling a product starts with scaling decisions.
        impactLine: "Bringing order to chaos: how I built Helpling’s first cross-platform Design System from the ground up."
        figures:
          - src: /img/projects/helpling/helpling-ds-product-screens.png
            alt: Four Helpling mobile screens side by side — provider selection with Anna selected, October date picker, personalized dashboard greeting Isabela, and Help FAQ with suggested articles — showing the Design System applied across product flows.
            caption: Design System 1.0 in product — provider selection, scheduling, dashboard, and Help, sharing one cohesive UI language.
            tone: default
            size: lg

      - id: ds-overview
        layout: overview
        title: Overview
        contextLabel: Context
        challengeLabel: The challenge
        roleLabel: My Role
        paragraphs:
          - "When I joined Helpling, there was no design system in place. As the product had scaled quickly across multiple markets and teams, UI fragmentation had naturally taken over: for a single action like a primary button, there were six different versions scattered across the product, with no shared icon libraries or unified guidelines."
        lead: Stepping into this chaotic landscape, I wanted to bring structure. What started as an initiative to clean up my own workflow organically evolved into a mission to build Helpling’s first shared Design System, designed to align design and engineering across the entire company.
        roleLine: "Role: Senior Product Designer · Timeline: 6 months"
        responsibilities: "Responsibilities: Product audit, component architecture, Atomic Design methodology, cross-platform Figma library setup, and multi-team collaboration."

      - id: ds-problem
        number: "01"
        layout: challenge
        title: "The Real Problem: Chaos vs. Structure"
        lead: The product wasn't broken, but it was suffering from silent, accumulating friction.
        paragraphs:
          - "A quick product audit revealed immediate red flags: 6 versions of the primary button, 3 different icon libraries, and 0 shared documentation."
          - Designers were constantly reinventing the wheel, engineers were implementing slightly different variations of the same components, and the lack of a single source of truth created unnecessary cognitive load for everyone.
        placeholders:
          - "[VISUAL PLACEHOLDER — examples of inconsistent patterns across the existing product]"

      - id: ds-approach
        number: "02"
        layout: strategy
        title: "Bringing Order: The Bottom-Up Approach"
        lead: To tackle this, I didn't wait for permission or a top-down mandate—I started by organizing my own work and scaling it outward.
        principles:
          - title: The Atomic Approach
            body: I adopted the Atomic Design methodology to structure the system logically, breaking down the UI from atoms to templates.
          - title: Cross-Platform Collaboration
            body: Working hand-in-hand with another designer, we dove deep into the multi-platform ecosystem—auditing and rebuilding components separately for Customer App, Partner App, and Connect App, broken down clearly across mobile and desktop.
          - title: Laying the Foundations
            body: We established core rules for typography, spacing, and color using Figma’s Auto Layout and Variants, ensuring engineering naming conventions were respected from day one.
        figures:
          - src: /img/projects/helpling/helpling-ds-modal-component.png
            alt: Figma panels for a Modal component showing nested layer hierarchy, size and buttons properties, and nested Button variants for size, type, status, label, and icons.
            caption: Foundations under the hood — Modal component architecture with Auto Layout, properties, and nested Button variants in Figma.
            tone: default
            size: lg

      - id: ds-reflection
        number: "03"
        layout: reflection
        title: The Reflection & Key Takeaway
        paragraphs:
          - "Building the technical foundations of a Design System is a massive milestone, but this project taught me an invaluable senior lesson: Creating the components is only half the battle; scaling a system across an entire company requires active governance, continuous advocacy, and deep cultural alignment."
          - "Key takeaway: A design system cannot survive on UI quality alone. True adoption requires building bridges between teams, securing shared ownership, and timing the rollout with the organization's pace."

      - id: ds-cta
        layout: cta
        title: Let's chat
        lead: Some specifics of this project are password-protected or restricted due to confidentiality. If you’re intrigued by the problem space,
        contactInline: true
        contactHref: "mailto:lucianareyes@gmail.com"
        contactLabel: hit me up and let’s chat
        contactSuffix: "."

  - id: growth-retention
    title: Growth, Retention & A/B Experiments
    emoji: "🚀"
    role: Product Designer (Growth & Retention)
    timeline: Ongoing
    story:
      - id: gr-hero
        layout: hero
        title: Growth, Retention & A/B Experiments
        tagline: Finding the invisible barrier at the start of the funnel — and proving the fix weekly.
        impactLine: +15% conversion lift, >90% user satisfaction, and high long-term adoption across Germany and Singapore.
        placeholders:
          - "[IMAGE PLACEHOLDER — growth experiment / How Helpling Works modal / strongest UI visual]"

      - id: gr-overview
        layout: overview
        title: Overview
        contextLabel: Context
        challengeLabel: Impact
        roleLabel: My role
        paragraphs:
          - Driving growth and retention metrics across Germany and Singapore markets through continuous weekly A/B testing.
          - Collaborating closely with Product Managers, Data, Engineering, Marketing, Operations, and Business stakeholders.
        lead: "+15% conversion lift, >90% user satisfaction, and high long-term adoption."
        roleLine: "Role: Product Designer (Growth & Retention)"
        responsibilities: "Scope: Growth & Retention Strategy, Weekly A/B Testing, User Interviews, Usability Testing, Competitor Analysis, Cross-functional Workshops, Interaction Design & Prototyping"

      - id: gr-challenge
        number: "01"
        layout: challenge
        title: The Challenge
        lead: Tackling an invisible comprehension barrier at the start of the funnel causing early drop-offs globally.
        paragraphs:
          - Users were entering the booking funnel without a clear mental model of how Helpling worked. That gap showed up as hesitation, abandoned sessions, and early drop-offs — especially for first-time customers across Germany and Singapore.
          - "The problem was not a missing feature. It was a comprehension barrier at the moment of highest intent: people needed just enough context to feel confident continuing, without slowing down the conversion path."
        pullQuote: The drop-off looked like a conversion problem. Underneath, it was a clarity problem.
        figures:
          - src: /img/projects/helpling/helpling-growth-whiteboard-churn.jpg
            alt: Hand-drawn whiteboard funnel diagram in red marker, grouping service friction into customer and provider problems.
            caption: Early problem framing on the whiteboard — mapping funnel friction into customer vs. provider causes before we jumped to solutions.
            size: md

      - id: gr-methodology
        number: "02"
        layout: strategy
        title: Methodology & Process
        lead: Cross-functional alignment, rigorous user interviews, usability testing, and competitor analysis shaped a focused set of testable variants — including contextual question marks alongside three core options.
        principles:
          - title: Option A — Classic onboarding
            body: A familiar, multi-step introduction intended to educate users before they entered the funnel.
          - title: Option B — FAQ page
            body: A self-serve answers surface for common questions, reachable before or during the booking journey.
          - title: Option C — Pre-funnel contextual modal
            body: A lightweight “How Helpling Works” modal that explained the service in context, right before the funnel — without forcing a full onboarding path.
          - title: Contextual question marks
            body: Inline help affordances that surfaced explanations at the moment of confusion, tested alongside the core variants.
        figures:
          - src: /img/projects/helpling/helpling-growth-wireflow.jpg
            alt: Hand-drawn mobile wireflow sketches in blue ink showing Helpling onboarding and booking steps, including account and address screens.
            caption: Discovery sketches for the onboarding and booking flow — low-fidelity wireflows used to pressure-test the funnel before high-fidelity work.
            size: sm
          - src: /img/projects/helpling/helpling-growth-usability-session.png
            alt: Remote usability testing interface showing the Helpling Offers app beside a participant video feed with eyes barred and a session activity log.
            caption: Remote usability session validating offer and booking comprehension — participant identity protected; feed shows live research notes.
            size: sm
          - src: /img/projects/helpling/helpling-growth-retro-board.png
            alt: Team retrospective board with four quadrants of sticky notes for continue, kudos, stop, and start themes.
            caption: Collaboration context from a team retrospective — culture and continuous improvement sitting alongside the growth workstream.
            size: sm

      - id: gr-experimentation
        number: "03"
        layout: solution
        title: Experimentation, Interaction Design & Validation
        lead: Option C — the “How Helpling Works” pre-funnel contextual modal — emerged as the winning variant. I crafted the interaction design, smooth micro-animations, and a close developer hand-off so the experience felt polished in production.
        figures:
          - src: /img/projects/helpling/helpling-growth-figma-iteration.jpg
            alt: Figma board labeled Ticket 1 Iteration with entry-point screens, a V1 text-and-icons flow, and a READ ME interaction design specification panel.
            caption: Experimentation board for Ticket 1 — entry points, V1 screen iterations, and interaction specs written for a clean engineering hand-off.
            size: md
        solutions:
          - title: Winning variant
            body: Validating Option C as the clearest path to reduce early drop-off while preserving funnel momentum.
            placeholder: "[IMAGE PLACEHOLDER — How Helpling Works modal (winning variant)]"
          - title: Interaction & motion
            body: Custom interaction design and restrained micro-animations that reinforced comprehension without adding friction — with prefers-reduced-motion respected in implementation.
            placeholder: "[IMAGE PLACEHOLDER — interaction / micro-animation detail]"
          - title: Developer hand-off
            body: Tight collaboration with Engineering to ship a production-ready experience aligned with the design system and experiment instrumentation.
            placeholder: "[IMAGE PLACEHOLDER — specs / hand-off / instrumentation notes]"

      - id: gr-impact
        number: "04"
        layout: impact
        title: Results & Long-term Impact
        lead: The winning experiment delivered a measurable conversion lift and strong satisfaction signals — and remained in production a year later, evidence of durable product value beyond a one-off test.
        pullQuote: A weekly experiment that became lasting product behaviour.
        metrics:
          - value: +15%
            label: conversion lift
            verified: true
          - value: ">90%"
            label: user satisfaction
            verified: true
          - value: "1 yr+"
            label: still live in production
            verified: true
        before:
          - Invisible comprehension barrier at funnel entry
          - Early global drop-offs
          - Unclear mental model of how Helpling works
        after:
          - Contextual “How Helpling Works” modal
          - Higher conversion and satisfaction
          - Persistent adoption in production
        placeholders:
          - "[VISUAL PLACEHOLDER — results / long-term adoption summary]"

      - id: gr-cta
        layout: cta
        title: Learn more
        lead: NDA constraints apply. Detailed flows are password-protected upon request. Reach out to me to learn more about this project.
        contactHref: "mailto:lucianareyes@gmail.com"
        contactLabel: lucianareyes@gmail.com
order: 1
draft: false
cover: /img/projects/helpling/cover.webp
---
