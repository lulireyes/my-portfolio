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
        impactLine: Reduced operational support costs by 35% by turning manual dispute handling into a scalable self-service experience.
        figures:
          - src: /img/projects/helpling/helpling-rc-hero.webp
            alt: Resolution Center — translucent glass blocks meeting a solid metallic form, evoking two sides of a marketplace reaching a fair resolution.
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
        challengeIntro: "The Resolution Center needed to:"
        bullets:
          - support both customers and providers across a two-sided marketplace
          - reduce unnecessary manual intervention without removing human judgment where it mattered
          - structure predictable dispute scenarios into self-service paths
          - make the process clearer and more transparent for both sides
          - preserve trust and perceived fairness
          - work within operational, business, legal/policy and technical realities
        roleLine: I led the product design end to end — discovery, research, service design, cross-platform UX, information architecture, usability testing and rollout — working closely with Product, Operations, Data and Engineering.
        responsibilities: Discovery · User Research · Service Design · Cross-platform UX · Information Architecture · Usability Testing · Rollout

      - id: rc-outcomes
        layout: impact
        title: Outcomes
        lead: Turning manual dispute handling into a scalable self-service experience changed both the cost structure of resolution and how independently users could move through it.
        metrics:
          - value: 35%
            label: reduction in operational support costs
            verified: true
          - value: 91%
            label: self-service adoption
            verified: true
          - value: 84%
            label: task completion without an agent
            verified: true
          - value: 93%
            label: user engagement
            verified: true

      - id: rc-challenge
        layout: challenge
        title: The Problem
        lead: Helpling was scaling as a marketplace, but dispute resolution had not scaled with it — leaving customers, providers and Operations stuck in a manual model.
        paragraphs:
          - "The intervention was not a support FAQ or a faster ticket form. It was a Resolution Center sitting between both sides of the marketplace: structured enough to take pressure off Operations, transparent enough to protect trust, and constrained by business, legal and policy reality."
          - The measurable outcome was a more scalable operating model — with a 35% reduction in operational support costs — while keeping human judgment available when cases could not be self-resolved.
          - The design problem wasn't simply making dispute resolution easier for one party. It was designing a system that works for Customer ↔ Resolution Center ↔ Provider, supports Operations, and holds under growth.
        perspectives:
          - title: Customer
            body: Customers wanted support, visibility into what was happening, and confidence that their issue and money were being handled fairly.
          - title: Provider
            body: Providers needed transparency around how disputes were evaluated and reassurance that their work and earnings were being treated fairly.
          - title: Operations
            body: Operations had to manually investigate and resolve disputes, including cases that followed recurring and relatively predictable patterns.
          - title: Business & constraints
            body: As volume grew, manual handling became expensive and hard to scale. The challenge wasn't only fewer support contacts — it was maintaining trust on both sides while creating a more scalable operating model within legal, policy and technical limits.
        pullQuote: The goal wasn't to optimise one side of the marketplace. It was to design a system that could work for the marketplace as a whole.
        figures:
          - src: /img/projects/helpling/helpling-rc-chaos-to-order.png
            alt: Minimalist line drawing — a tangled scribble on the left transitions through a smooth curve into a neat concentric spiral on the right.
            tone: visual
            size: full

      - id: rc-process
        layout: insights
        title: How I Approached It
        lead: Before designing screens, I mapped the service behind them — how disputes entered the system, where Operations intervened, and which constraints limited automation or communication.
        paragraphs:
          - "I worked with Operations, Product and Data to understand resolution as a system: Customer ↔ Resolution Center ↔ Provider, with Operations, business rules and legal/policy constraints underneath."
          - Historical case data and conversations with Operations showed that many disputes followed recurring scenarios. That didn't mean every case could be automated. It meant the system could be designed around patterns — with clear self-service paths for predictable cases, and room for human judgment when it mattered.
        bullets:
          - how disputes entered the system and how cases were categorised
          - what information Operations needed to decide
          - where manual intervention was required versus where patterns repeated
          - what users needed to see throughout the process
          - the business, operational, legal and policy implications of different resolution paths
        figures:
          - src: /img/projects/helpling/helpling-rc-whiteboard-refund-logic.jpg
            alt: Whiteboard sketch of a Case page with Refund and Reject actions, branching into full refund versus partial refund logic with hour-based options and timing notes.
            caption: Early refund and case logic on the whiteboard — mapping full vs. partial paths before the flows became product.
            tone: process
            size: md
          - src: /img/projects/helpling/helpling-rc-journey-map-workshop.jpg
            alt: Collaborative workshop table with a printed UX journey map and sticky notes for customer, problem, and interest themes.
            caption: Cross-functional discovery — journey mapping that informed what the Resolution Center needed to resolve.
            tone: process
            size: sm

      - id: rc-decisions
        layout: strategy
        title: Decisions That Shaped the Product
        lead: I led the design decisions end to end, aligning Product, Operations, Data and Engineering around a shared model — not a handoff chain. Each principle below came from something we observed, a choice I made, and what it unlocked.
        principles:
          - title: Make the process visible
            body: "Observation: users needed status and next steps, not only an outcome. Decision: design for process legibility on both sides. Reason: opacity made even fair outcomes feel unfair. Outcome: clearer paths through intake, response and resolution."
          - title: Design for both sides of the marketplace
            body: "Observation: the same dispute could be perceived very differently by a customer and a provider. Decision: account for two motivations and two fairness lenses in one system. Reason: optimising one side would break trust on the other. Outcome: cross-platform flows that kept both parties oriented."
          - title: Let people solve what doesn't require people
            body: "Observation: recurring scenarios still consumed Operations capacity. Decision: structure predictable cases into self-service, and reserve agents for complexity. Reason: Operations time was most valuable where judgment mattered. Outcome: higher self-service adoption and less manual load on routine cases."
          - title: Design for the whole system
            body: "Observation: screens alone couldn't carry legal, policy and operational reality. Decision: shape the experience around constraints with Product, Operations, Data and Engineering. Reason: a resolution flow only works if it works for users and for the teams behind it. Outcome: a shippable model that Operations could trust."
        figures:
          - src: /img/projects/helpling/helpling-rc-figma-iteration-board.png
            alt: Figma board titled Resolution Center 1. iteration mobile, showing customer report-a-new-issue flow B and provider response flow with detailed screen grids below.
            caption: First mobile iteration board — customer intake and provider response flows mapped end to end before high-fidelity polish.
            tone: default
            size: lg

      - id: rc-solution
        layout: solution
        title: The Solution
        lead: The Resolution Center turned those decisions into a coherent experience — organised around visibility, self-service, transparency and consistency across both sides of the marketplace.
        figures:
          - src: /img/projects/helpling/helpling-rc-flow-cleaner-not-here.webp
            alt: End-to-end user flow for the customer scenario "My cleaner is not here", from reporting the problem to resolution.
            caption: Customer flow — "My cleaner is not here", from report to resolution.
            tone: default
            size: full
          - src: /img/projects/helpling/helpling-rc-flow-customer-new-issue.webp
            alt: End-to-end user flow for a customer reporting a new issue through the Resolution Center.
            caption: Customer reports a new issue — the end-to-end resolution flow.
            tone: default
            size: full
          - src: /img/projects/helpling/helpling-rc-flow-provider-response.webp
            alt: End-to-end user flow for a provider responding to a reported issue in the Resolution Center.
            caption: Provider's response flow to a reported issue.
            tone: default
            size: full
          - src: /img/projects/helpling/helpling-rc-flow-partial-refund-provider.webp
            alt: Provider flow for a partial refund, triggered when the wrong duration was billed or the customer was dissatisfied with the quality.
            caption: Provider flow — partial refund (wrong duration billed or dissatisfaction with quality).
            tone: default
            size: full
          - src: /img/projects/helpling/helpling-rc-flow-full-refund-provider.webp
            alt: Provider flow for a full refund, triggered when the cleaner didn't show, cancelled, the clean was rescheduled, or there was a double booking.
            caption: Provider flow — full refund (cleaner didn't show, cancelled, rescheduled, or double booking).
            tone: default
            size: full
        solutions:
          - title: Visibility
            body: Users can understand the status of their case — where they are, what has been submitted, and what happens next — instead of waiting in an opaque process.
          - title: Self-service
            body: Predictable disputes can be handled without agent intervention, while complex cases still route to human judgment.
          - title: Transparency
            body: The experience communicates what information is being considered and why a path is being taken — clarity over vague legal or procedural language.
          - title: Cross-platform consistency
            body: The same resolution model works for customers and providers, so both sides of the marketplace stay oriented inside one system.

      - id: rc-constraints
        layout: constraints
        title: Designing Within Constraints
        lead: Good product design wasn't about finding the perfect experience in isolation. It was about finding a solution that was useful for users, viable for the business, workable for Operations, and possible within the constraints of the product and service.
        constraints:
          - customer and provider needs could conflict
          - Operations needed enough information to handle complex cases
          - predictable cases needed structured automation without removing trust
          - the experience had to work across two sides of the marketplace
          - business scalability mattered
          - legal and policy constraints influenced what could be communicated or automated
          - technical and product constraints influenced what could realistically be delivered
        tradeoffs:
          - need: Users needed transparency about status, inputs and next steps.
            constraint: Legal and policy limits restricted what could be communicated or automated.
            response: I designed for process clarity within what could be shared — status, submitted information and next actions — rather than over-explaining restricted decision logic.
          - need: Predictable cases needed resolution without waiting on Operations.
            constraint: Not every case could be automated; complex cases still needed human judgment.
            response: I structured self-service around recurring patterns, with explicit paths to agent involvement when the case left the predictable path.
          - need: Both sides needed to feel the process was fair.
            constraint: Customer and provider needs could conflict inside the same dispute.
            response: I designed for marketplace-level fairness — legibility on both sides — instead of optimising the experience for one party.

      - id: rc-impact
        layout: impact
        title: Impact
        lead: By turning manual dispute handling into a scalable self-service experience, the Resolution Center reduced operational support cost while shifting where human capacity was needed.
        pullQuote: The result wasn't just a better customer experience. It changed where human operational capacity was needed.
        metrics:
          - value: 35%
            label: reduction in operational support costs
            verified: true
          - value: 91%
            label: self-service adoption
            verified: true
          - value: 84%
            label: task completion without an agent
            verified: true
          - value: 93%
            label: user engagement
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

      - id: rc-learned
        layout: insights
        title: What I Learned
        lead: Looking back, the lasting lessons were less about screens and more about how fairness works in a two-sided marketplace.
        pullQuote: Fairness and perceived fairness are not always the same thing.
        paragraphs:
          - An objectively fair outcome can still feel unfair if the process behind it is opaque.
          - This project reinforced that clarity is part of the service itself — especially when users are dealing with money, conflict or uncertainty.
        insights:
          - title: Predictable patterns could be structured
            body: A large proportion of disputes followed recurring scenarios. These did not always require manual investigation — which opened a path for self-service without pretending every case was the same.
          - title: Opacity creates friction
            body: Users were not only looking for an outcome. They needed to understand what was happening, what information had been considered, and what would happen next.
          - title: Efficiency cannot come at the expense of trust
            body: Automating resolution only works if both sides can understand and accept the process — fairness and perceived fairness are tightly linked in a marketplace dispute.

      - id: rc-cta
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
            alt: Four Helpling mobile screens side by side — provider selection with Anna selected, October date picker, personalized dashboard greeting Isabela, and Help FAQ with suggested articles — showing the Design System applied across product flows.
            caption: Design System 1.0 in product — provider selection, scheduling, dashboard, and Help, sharing one cohesive UI language.
            tone: default
            size: lg

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
        impactLine: +15% conversion lift, >90% user satisfaction, and high long-term adoption across Germany and Singapore.
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
        lead: "+15% conversion lift, >90% user satisfaction, and high long-term adoption."
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
            placeholder: "[IMAGE PLACEHOLDER — How Helpling Works modal (winning variant)]"
          - title: Interaction & motion
            body: Custom interaction design and restrained micro-animations that reinforced comprehension without adding friction — with prefers-reduced-motion respected in implementation.
            placeholder: "[IMAGE PLACEHOLDER — interaction / micro-animation detail]"
          - title: Developer hand-off
            body: Tight collaboration with Engineering to ship a production-ready experience aligned with the design system and experiment instrumentation.
            placeholder: "[IMAGE PLACEHOLDER — specs / hand-off / instrumentation notes]"

      - id: gr-impact
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
        title: Get in touch
        lead: Interested in the thinking behind this project? Reach out to learn more.
        contactHref: "mailto:lucianareyes@gmail.com"
        contactLabel: lucianareyes@gmail.com
---
