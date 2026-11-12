"use client";

import SectionHeading from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import HeadingLine from "@/components/ui/heading-line";
import env from "@/config/env";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Github, ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

const Projects = () => {
  const projects = [
    {
      title: "Evergrit — WhatsApp Automation",
      description:
        "Built a WhatsApp automation system for Evergrit's online store, so customers get updates on the channel they already check every day instead of wondering where their order is.\n\nWhen a customer places an order on the website, they instantly receive an order confirmation on WhatsApp. From there, the system sends automated updates at every stage: order shipped, out for delivery, and delivered. No manual messaging, no missed updates.\n\nBeyond order tracking, I set up promotional and offer campaign messages so the brand can bring customers back, and published the product catalog on WhatsApp so shoppers can browse items inside the chat.\n\nI also handled the Meta side end to end, including business verification for Evergrit, so messages come from a verified brand name customers can trust.",
      tags: ["WhatsApp", "Automation", "Meta API", "E-Commerce"],
      github: null,
      image: "/projects/evergrit-whatsapp-automation.png",
      live: null,
      date: "October, 2026",
      status: "completed",
    },
    {
      title: "GS Rental Cars — Website",
      description:
        "A website for a local self-drive car rental business, built to take a fleet that ranges from everyday hatchbacks like the Swift up to Mercedes and put it in front of customers in a way that leads to a phone call, not a bounce.\n\nLocal rental runs on trust and speed, so I kept the site simple: browse the fleet, pick a car, call a team that's available 24x7. No account walls, no friction between a customer and a booking.\n\nI built and deployed it end to end, with SEO fundamentals set up so the business shows up when people in Ludhiana search for self-drive cars.",
      tags: ["Website", "Web", "SEO", "Fullstack"],
      github: null,
      image: "/projects/gs-rental-cars.png",
      live: null,
      date: "September, 2026",
      status: "completed",
    },
    {
      title: "NSF Arena Showroom — WhatsApp Automation",
      description:
        "Built a rule-based WhatsApp chatbot for a Maruti Suzuki ARENA showroom, turning the showroom's WhatsApp number into a guided sales assistant that works around the clock.\n\nWhen a customer messages the showroom, they're greeted with a branded welcome and a simple menu: book a car or test drive, enquire about a car, or talk to an executive. Each choice leads into a structured flow. Customers can book a car, schedule a test drive, or book an inspection, then pick their model from a list, all without typing out details or waiting for someone to reply.\n\nI built the booking journeys with Meta Flows, so customers fill in details through native in-chat forms instead of back-and-forth messages. Anything that needs a human is handed off to a showroom executive.\n\nThe result is that routine enquiries and bookings are handled automatically, and the sales team only steps in when a customer is ready to talk.",
      tags: ["WhatsApp", "Chatbot", "Meta Flows", "Automation"],
      github: null,
      image: "/projects/nsf-arena-whatsapp-automation.png",
      live: null,
      date: "August, 2026",
      status: "completed",
    },
    {
      title: "Advanced Hybrid RAG System",
      description:
        "A hybrid RAG pipeline fusing semantic, lexical, and graph search to deliver hallucination-resistant answers at scale.",
      tags: ["RAG", "AI", "State-of-the-art"],
      github: "https://github.com/gurbaajsingh9/shorthills-legal-rag",
      image: "/projects/rag-system-screenshot.png",
      live: "http://161.118.186.173:8501/",
      date: "July, 2026",
      status: "completed",
    },
    {
      title: "Whatsapp Automation System",
      description: "A WhatsApp automation platform combining bulk messaging, a rule-based chatbot, and an AI-powered chatbot, deployed on Oracle Cloud Infrastructure.",
      tags: ["API", "WhatsApp", "META"],
      github: null,
      image: "/projects/whatsapp-automation-screenshot.png",
      live: "https://p01--taifa-web--q9hy8flhv4cl.code.run/",
      date: "April, 2026",
      status: "completed",
    },
    {
      title: "AI-Powered Recommendation Engine + Personalized & Downloadable PYLP Report Card",
      description:
        "An LLM-driven recommendation engine that turns raw student data into personalized, downloadable report cards — cutting manual analysis time by 70%+.",
      tags: ["Data Science", "Python", "API"],
      github: "https://github.com/SabudhFoundation/Batch-15-ILRE-PYLP-Report-Card",
      image: "/projects/recommendation-engine-screenshot.png",
      live: null,
      date: "Dec, 2025",
      status: "completed",
    },
  ];

  const tagColors: Record<string, string> = {
    Portfolio: "bg-blue-500/10 text-blue-600 border-blue-500/30",
    Fullstack: "bg-orange-500/10 text-orange-600 border-orange-500/30",
    Personal: "bg-purple-500/10 text-purple-600 border-purple-500/30",
    Telegram: "bg-cyan-500/10 text-cyan-600 border-cyan-500/30",
    Management: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30",
    Bot: "bg-teal-500/10 text-teal-600 border-teal-500/30",
    Anime: "bg-pink-500/10 text-pink-600 border-pink-500/30",
    Streaming: "bg-indigo-500/10 text-indigo-600 border-indigo-500/30",
    WhatsApp: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30",
    Automation: "bg-teal-500/10 text-teal-600 border-teal-500/30",
    "Meta API": "bg-blue-500/10 text-blue-600 border-blue-500/30",
    "Meta Flows": "bg-indigo-500/10 text-indigo-600 border-indigo-500/30",
    META: "bg-blue-500/10 text-blue-600 border-blue-500/30",
    "E-Commerce": "bg-amber-500/10 text-amber-600 border-amber-500/30",
    Website: "bg-sky-500/10 text-sky-600 border-sky-500/30",
    Web: "bg-cyan-500/10 text-cyan-600 border-cyan-500/30",
    SEO: "bg-green-500/10 text-green-600 border-green-500/30",
    Chatbot: "bg-violet-500/10 text-violet-600 border-violet-500/30",
    RAG: "bg-purple-500/10 text-purple-600 border-purple-500/30",
    AI: "bg-rose-500/10 text-rose-600 border-rose-500/30",
    "State-of-the-art": "bg-pink-500/10 text-pink-600 border-pink-500/30",
    Python: "bg-yellow-500/10 text-yellow-600 border-yellow-500/30",
    "Data Science": "bg-cyan-500/10 text-cyan-600 border-cyan-500/30",
    API: "bg-orange-500/10 text-orange-600 border-orange-500/30",
  };

  return (
    <SectionHeading id="projects" text="Projects">
      <div className="divide-y">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="grid lg:grid-cols-2">
              {/* Image Side  */}
              <div className="bg-muted/20 relative overflow-hidden border-b lg:border-r lg:border-b-0">
                {/* Cross pattern */}
                <div className="absolute inset-0">
                  <div className="before:bg-border after:bg-border relative h-full w-full before:absolute before:top-1/2 before:left-0 before:h-0.5 before:w-full after:absolute after:top-0 after:left-1/2 after:h-full after:w-0.5" />
                </div>

                {/* Image Container */}
                <div className="relative inset-0 z-10 p-8 md:p-12 lg:p-16">
                  <div className="group/image relative">
                    {/* Frame corners */}
                    <div className="border-foreground/20 absolute -top-2 -left-2 h-8 w-8 border-t-2 border-l-2 transition-all group-hover:-top-3 group-hover:-left-3" />
                    <div className="border-foreground/20 absolute -top-2 -right-2 h-8 w-8 border-t-2 border-r-2 transition-all group-hover:-top-3 group-hover:-right-3" />
                    <div className="border-foreground/20 absolute -bottom-2 -left-2 h-8 w-8 border-b-2 border-l-2 transition-all group-hover:-bottom-3 group-hover:-left-3" />
                    <div className="border-foreground/20 absolute -right-2 -bottom-2 h-8 w-8 border-r-2 border-b-2 transition-all group-hover:-right-3 group-hover:-bottom-3" />

                    {/* Main image */}
                    <div className="bg-background relative overflow-hidden border-2">
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Overlay gradient on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side  */}
              <div className="relative flex flex-col justify-center overflow-hidden p-8 md:p-12 lg:p-16">
                {/* Date & Status */}
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <time className="text-muted-foreground font-mono text-xs">
                    {project.date}
                  </time>
                  <div className="bg-border h-4 w-px" />
                  <div className="inline-flex items-center gap-1.5">
                    <div
                      className={cn(
                        "h-2 w-2 rounded-full",
                        project.status === "completed"
                          ? "animate-pulse bg-green-500"
                          : "animate-pulse bg-yellow-500",
                      )}
                    />
                    <span className="text-muted-foreground font-mono text-xs uppercase">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Title  */}
                <div className="mb-6">
                  <h3 className="font-incognito text-3xl font-bold lg:text-4xl">
                    {project.title}
                  </h3>
                  <HeadingLine className="mt-3" />
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed whitespace-pre-line md:text-base">
                  {project.description}
                </p>

                {/* Tags  */}
                <div className="mb-8 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className={cn(
                        "border font-mono text-xs",
                        tagColors[tag as keyof typeof tagColors],
                      )}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/*  Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  {project.github && (
                    <Button
                      asChild
                      variant="default"
                      size="lg"
                      className="group/btn relative border-2 font-medium"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                        <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    </Button>
                  )}

                  {project.live && (
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="group/btn border-2 font-medium"
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                        <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    </Button>
                  )}

                  {!project.github && !project.live && (
                    <span className="text-muted-foreground/70 font-mono text-xs tracking-wide">
                      ⚡ Client Solution • Private Deployment
                    </span>
                  )}
                </div>

                {/*  slanted lines */}
                <div className="absolute -right-4 -bottom-32 w-full translate-x-1/4 translate-y-1/4 rotate-[-30deg]">
                  {/* 1st Line */}
                  <div className="to-background border-primary/80 from-primary via-primary/90 -ml-[4px] h-12 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-1" />

                  {/* 2nd Line */}
                  <div className="to-background border-primary/80 from-primary via-primary/90 -ml-[8px] h-12 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-3" />

                  {/* 3rd Line */}
                  <div className="to-background border-primary/80 from-primary via-primary/90 -ml-[12px] h-12 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-5" />

                  {/* 4th Line */}
                  <div className="to-background border-primary/80 from-primary via-primary/90 -ml-[16px] h-12 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-7" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Projects */}
      <div className="border-t">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-12 text-center"
        >
          <Button asChild variant="ghost" size="lg" className="group font-mono">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bg-foreground/40 mr-2 inline-block h-px w-8 transition-all group-hover:w-12" />
              VIEW ALL PROJECTS ON GITHUB
              <span className="bg-foreground/40 ml-2 inline-block h-px w-8 transition-all group-hover:w-12" />
            </a>
          </Button>
        </motion.div>
      </div>
    </SectionHeading>
  );
};

export default Projects;
