---
title: Helpling
summary: Designed and launched a dispute resolution feature that reduced operational costs by 35% and improved support efficiency.
order: 1
draft: false
cover: /img/projects/helpling/cover.webp
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
role: Senior Product Designer
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
    emphasis: "7% conversion uplift."
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
        metrics:
          - value: "-35%"
            label: German operational cost
            verified: true
          - value: "91%"
            label: self-service adoption
            verified: true
          - value: "84%"
            label: resolved without an agent
            verified: true
        figures:
          - src: /img/projects/helpling/helpling-rc-hero.jpg
            alt: Resolution Center — abstract 3D forms of glass, metal, and soft geometry gathering around a warm core, suggesting structure emerging from complexity.
            tone: bare
            size: lg
        paragraphs:
          - Helpling's disputes were handled by Operations, one case at a time. That worked while volumes were small. But in a marketplace, every new booking can become a new dispute, so growth meant more manual work.
          - I designed a Resolution Center that moves predictable cases into self-service and keeps human judgement for the ones that need it.
        roleLine: Senior Product Designer, leading design end to end
        responsibilities: Product, Operations, Data, Engineering

      - id: rc-challenge
        layout: split
        title: The problem
        lead: When a cleaner doesn't show up, or the hours billed don't match the hours worked, two people end up on opposite sides, and both feel wronged. Each of those cases went to Operations to investigate and decide.
        asideTitle: Three needs, one system
        perspectives:
          - title: Customers
            body: Customers wanted proof that their issue and their money were in safe hands.
          - title: Providers
            body: Providers wanted their work and earnings judged fairly.
          - title: Operations
            body: Operations was investigating by hand cases that followed the same few patterns.
        figures:
          - src: /img/projects/helpling/helpling-rc-cust-prov-ops.png
            alt: Venn diagram of three overlapping circles labelled Customers, Providers and Ops.
            tone: visual
            size: lg
        challengeIntro: The business challenge was a resolution model that could grow with the marketplace without effort growing at the same rate, within legal, policy and technical limits.

      - id: rc-process
        layout: mapping
        title: How I approached it
        lead: "Before drawing a screen, I mapped the service: how disputes came in, where Operations stepped in, and what limited automation. Case data and conversations with Operations showed that most disputes repeated a handful of scenarios. Not all of them, but enough to design self-service for the predictable ones and keep humans for the rest."
        figures:
          - src: /img/projects/helpling/helpling-rc-whiteboard-refund-logic.jpg
            alt: Whiteboard sketch of a Case page with Refund and Reject actions, branching into full refund versus partial refund logic with hour-based options and timing notes.
            caption: Early refund and case logic on the whiteboard — mapping full vs. partial paths before the flows became product.
            tone: process
            size: lg
          - src: /img/projects/helpling/helpling-rc-journey-map-workshop.jpg
            alt: Collaborative workshop table with a printed UX journey map and sticky notes for customer, problem, and interest themes.
            caption: Cross-functional discovery — journey mapping that informed what the Resolution Center needed to resolve.
            tone: process
            size: lg

      - id: rc-decisions
        layout: strategy
        title: Three decisions that shaped it
        lead: "The principle behind all three: let people solve what doesn't require people, and make human involvement clear when it does."
        principles:
          - title: "1. Show the process, not just the outcome."
            body: "Fair results felt unfair when people couldn't see what was happening. Usability testing confirmed it: after opening a case, both customers and providers struggled to find its status. It was buried. So I moved it to the front. The first thing anyone sees when they open the Resolution Center is a card with the current status of their case."
            tradeoff: legal and policy limits restricted what we could communicate. I designed for clarity about the process (status, submitted information, next actions) rather than over-explaining decision logic we couldn't share.
            figures:
              - src: /img/projects/helpling/helpling-rc-transparency-1.png
                alt: Case list card showing Under review status, case ID, and dispute reason Cleaner was late.
                tone: bare
                size: lg
              - src: /img/projects/helpling/helpling-rc-transparency-3.png
                alt: Resolution Center case status screen with a progress timeline for filing, review, and estimated resolution.
                tone: bare
                size: lg
          - title: "2. One model, two sides."
            body: Customer and provider share the same case structure, each seen through their own needs.
            tradeoff: their needs could conflict inside the same dispute. I designed for fairness at marketplace level, with both sides able to read the process, instead of optimising the experience for one party.
          - title: "3. Automate the predictable, protect the exceptions."
            body: No-shows, cancellations and wrongly billed hours follow structured paths, ending in a full or partial refund. For the business, that meant more bookings no longer meant proportionally more workload.
            tradeoff: not every case could be automated. Self-service is built around recurring patterns, with explicit paths to an agent when a case leaves them. The goal wasn't maximum automation, but the right level for each type of case.
        asideTitle: How we worked
        paragraphs:
          - Operations surfaced the recurring patterns and edge cases, Data showed which were worth structuring, Engineering defined what could realistically be automated, and Product balanced user and business priorities. My job was to connect those inputs into one experience across the Customer and Provider apps.
        figures:
          - src: /img/projects/helpling/helpling-rc-figma-iteration-board.png
            alt: Figma board titled Resolution Center 1. iteration mobile, showing customer report-a-new-issue flow B and provider response flow with detailed screen grids below.
            caption: First mobile iteration board — customer intake and provider response flows mapped end to end before high-fidelity polish.
            tone: default
            size: lg

      - id: rc-solution
        layout: solution
        title: The solution
        figures:
          - src: /video/resolution_center.mp4
            alt: Resolution Center product walkthrough showing the dispute resolution flow in the Helpling app.
            tone: bare
            size: full
        paragraphs:
          - Want to see the complete flow?
        contactInline: true
        contactHref: "mailto:lucianareyes@gmail.com"
        contactLabel: Get in touch.

      - id: rc-impact
        layout: impact
        title: Results
        metricsInline: true
        metrics:
          - value: "-35%"
            label: German operational cost
            note: Moving recurring cases from manual investigation to structured self-service reduced the effort Operations needed per case.
            verified: true
          - value: "91%"
            label: self-service adoption
            note: 84% of cases were resolved without an agent.
            verified: true
        before:
          - Manual investigation of recurring cases
          - Operations capacity tied up in predictable scenarios
          - Higher operational support cost
          - Limited visibility for customers and providers
        after:
          - Structured self-service for predictable disputes
          - Automated paths where patterns allowed
          - Operations focused on complex cases
          - A more scalable resolution model across the marketplace
        pullQuote: The result wasn't just a better customer experience. It reduced the incident rate for the German Operations Team and changed where human operational capacity was needed.

      - id: rc-learned
        layout: insights
        title: What I learned
        lead: Fairness and perceived fairness are not the same thing. An outcome can be right and still feel wrong if the process is opaque. The status card didn't change the result of a single case. It changed how fair the process felt.
        insights:
          - title: Predictable patterns could be structured.
            body: A large proportion of disputes followed recurring scenarios. These did not always require manual investigation, which opened a path for self-service without pretending every case was the same.
          - title: Opacity creates friction.
            body: Users were not only looking for an outcome. They needed to understand what was happening, what information had been considered, and what would happen next.
          - title: Efficiency cannot come at the expense of trust.
            body: Automating resolution only works if both sides can understand and accept the process.
        impactLine: Automation should remove friction, not the feeling of being heard.

      - id: rc-cta
        layout: cta
        title: Get in touch

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
          - src: /img/projects/helpling/helpling-ds-hero.webp
            alt: Design System 1.0 — many modular components arranged into one organised, isometric system.
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
        layout: challenge
        title: "The Real Problem: Chaos vs. Structure"
        lead: The product wasn't broken, but it was suffering from silent, accumulating friction.
        paragraphs:
          - "A quick product audit revealed immediate red flags: 6 versions of the primary button, 3 different icon libraries, and 0 shared documentation."
          - Designers were constantly reinventing the wheel, engineers were implementing slightly different variations of the same components, and the lack of a single source of truth created unnecessary cognitive load for everyone.
        figures:
          - src: /img/projects/helpling/helpling-ds-product-screens.png
            alt: Four Helpling mobile screens side by side — provider selection with Anna selected, October date picker, personalized dashboard greeting Isabelle, and Help FAQ with suggested articles — showing the Design System applied across product flows.
            caption: Design System 1.0 in product — provider selection, scheduling, dashboard, and Help, sharing one cohesive UI language.
            tone: default
            size: full

      - id: ds-approach
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
          - src: /img/projects/helpling/helpling-ds-atomic-modular.webp
            alt: Flat illustration of colorful geometric building blocks stacked in a stair formation beside a small person silhouette on a yellow grid background.
            caption: Atomic approach — modular building blocks that scale from simple parts into a coherent system.
            tone: default
            size: md
          - src: /img/projects/helpling/helpling-ds-collaboration.webp
            alt: Flat illustration of two facing people silhouettes with overlapping speech bubbles — one outlined, one solid teal — on a white background.
            caption: Collaboration and research — aligning designers across platforms through shared conversation and critique.
            tone: default
            size: md
          - src: /img/projects/helpling/helpling-ds-foundations-scaling.webp
            alt: Flat illustration of nested purple squares aligned at the bottom-left corner, framed by a black selection border with Figma-like corner handles.
            caption: Foundations and components — scaling from a shared origin with clear structure and selection.
            tone: default
            size: md
          - src: /img/projects/helpling/helpling-ds-modal-component.png
            alt: Figma panels for a Modal component showing nested layer hierarchy, size and buttons properties, and nested Button variants for size, type, status, label, and icons.
            caption: Foundations under the hood — Modal component architecture with Auto Layout, properties, and nested Button variants in Figma.
            tone: default
            size: lg

      - id: ds-reflection
        layout: reflection
        title: The Reflection & Key Takeaway
        paragraphs:
          - "Building the technical foundations of a Design System is a massive milestone, but this project taught me an invaluable senior lesson: Creating the components is only half the battle; scaling a system across an entire company requires active governance, continuous advocacy, and deep cultural alignment."
          - "Key takeaway: A design system cannot survive on UI quality alone. True adoption requires building bridges between teams, securing shared ownership, and timing the rollout with the organization's pace."

      - id: ds-cta
        layout: cta
        title: Get in touch
        lead: Interested in the thinking behind this project? Reach out to learn more.
        contactHref: "mailto:lucianareyes@gmail.com"
        contactLabel: lucianareyes@gmail.com

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
        impactLine: +7% conversion lift, >90% user satisfaction, and high long-term adoption across Germany and Singapore.
        figures:
          - src: /img/projects/helpling/helpling-growth-hero.webp
            alt: Growth and experimentation — pastel paths rising upward toward a glowing point, evoking momentum and iterative gains.
            tone: default
            size: lg

      - id: gr-overview
        layout: overview
        title: Overview
        contextLabel: Context
        challengeLabel: Impact
        roleLabel: My role
        paragraphs:
          - Driving growth and retention metrics across Germany and Singapore markets through continuous weekly A/B testing.
          - Collaborating closely with Product Managers, Data, Engineering, Marketing, Operations, and Business stakeholders.
        lead: "+7% conversion lift, >90% user satisfaction, and high long-term adoption."
        roleLine: "Role: Product Designer (Growth & Retention)"
        responsibilities: "Scope: Growth & Retention Strategy, Weekly A/B Testing, User Interviews, Usability Testing, Competitor Analysis, Cross-functional Workshops, Interaction Design & Prototyping"

      - id: gr-challenge
        layout: challenge
        title: The Challenge
        lead: Tackling an invisible comprehension barrier at the start of the funnel causing early drop-offs globally.
        paragraphs:
          - Users were entering the booking funnel without a clear mental model of how Helpling worked. That gap showed up as hesitation, abandoned sessions, and early drop-offs — especially for first-time customers across Germany and Singapore.
          - "The problem was not a missing feature. It was a comprehension barrier at the moment of highest intent: people needed just enough context to feel confident continuing, without slowing down the conversion path."
        pullQuote: The drop-off looked like a conversion problem. Underneath, it was a clarity problem.
        figures:
          - src: /img/projects/helpling/helpling-growth-wireflow.jpg
            alt: Hand-drawn mobile wireflow sketches in blue ink showing Helpling onboarding and booking steps, including account and address screens.
            caption: Discovery sketches for the onboarding and booking flow — low-fidelity wireflows used to pressure-test the funnel before high-fidelity work.
            size: md

      - id: gr-methodology
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
          - src: /img/projects/helpling/helpling-growth-whiteboard-churn.jpg
            alt: Hand-drawn whiteboard funnel diagram in red marker, grouping service friction into customer and provider problems.
            caption: Early problem framing on the whiteboard — mapping funnel friction into customer vs. provider causes before we jumped to solutions.
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
          - title: Interaction & motion
            body: Custom interaction design and restrained micro-animations that reinforced comprehension without adding friction — with prefers-reduced-motion respected in implementation.
          - title: Developer hand-off
            body: Tight collaboration with Engineering to ship a production-ready experience aligned with the design system and experiment instrumentation.

      - id: gr-impact
        layout: impact
        title: Results & Long-term Impact
        lead: The winning experiment delivered a measurable conversion lift and strong satisfaction signals — and remained in production a year later, evidence of durable product value beyond a one-off test.
        pullQuote: A weekly experiment that became lasting product behaviour.
        metrics:
          - value: +7%
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

      - id: gr-cta
        layout: cta
        title: Get in touch
        lead: Interested in the thinking behind this project? Reach out to learn more.
        contactHref: "mailto:lucianareyes@gmail.com"
        contactLabel: lucianareyes@gmail.com
        figures:
          - src: /video/modal.mp4
            alt: Animated How Helpling Works flow — browse a cleaner, review, confirmation, then cancel or reschedule.
            tone: bare
            size: md
---
