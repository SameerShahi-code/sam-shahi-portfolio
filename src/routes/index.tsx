import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Briefcase, GraduationCap, ArrowUpRight, Download } from "lucide-react";
import { TiltCard } from "@/components/TiltCard";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { ShinyLink } from "@/components/ui/shiny-button";

const NAME = "Sameer Shahi";
const HEADLINE = "IT Support Specialist";
const SUMMARY =
  "Reliable IT support professional with hands-on experience delivering first-line technical support for hardware, software, connectivity and user-access issues in fast-paced environments. Skilled in Windows 10/11, Active Directory and Microsoft 365 support, remote troubleshooting, ticket triage and SLA-focused incident management. Recognised for clear communication with technical and non-technical users, careful handling of sensitive data, and a calm, methodical approach to resolving issues and escalating when appropriate.";

const PHONE_DISPLAY = "07442 005955";
const PHONE_TEL = "tel:+447442005955";
const EMAIL = "samir00524@gmail.com";
const LOCATION = "Llanelli, Wales";
const CV_PATH = "/assets/Sameer_Shahi_CV.pdf";
const CV_FILENAME = "Sameer_Shahi_CV.pdf";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${NAME} — ${HEADLINE}` },
      { name: "description", content: SUMMARY },
      {
        name: "keywords",
        content:
          "Sameer Shahi, IT Support Specialist, IT Support Engineer, Llanelli, Wales, Windows 10/11, Active Directory, Microsoft 365",
      },
      { property: "og:title", content: `${NAME} — ${HEADLINE}` },
      { property: "og:description", content: SUMMARY },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: `${NAME} — ${HEADLINE}` },
      { name: "twitter:description", content: SUMMARY },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: NAME,
          jobTitle: HEADLINE,
          telephone: PHONE_DISPLAY,
          email: EMAIL,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Llanelli",
            addressRegion: "Wales",
            addressCountry: "United Kingdom",
          },
          alumniOf: [
            { "@type": "CollegeOrUniversity", name: "De Montfort University" },
            { "@type": "CollegeOrUniversity", name: "Presidency College" },
          ],
          knowsAbout: [
            "First-line hardware and software support",
            "Windows 10/11",
            "Active Directory",
            "Microsoft 365",
            "ITSM ticketing and incident management",
          ],
        }),
      },
    ],
  }),
  component: Portfolio,
});

const skills = [
  "First-line hardware and software support for laptops, desktops, printers and peripherals",
  "Windows 10/11 installation, configuration and troubleshooting",
  "Active Directory: user provisioning, password resets and permissions management",
  "Microsoft 365 setup and end-user support",
  "Remote technical support and clear communication with technical and non-technical users",
  "ITSM ticketing and incident management: Salesforce, Jira Service Management and ServiceNow",
  "Ticket triage, prioritisation, SLA monitoring and escalation to internal specialist teams",
  "Basic network and connectivity troubleshooting; device setup, configuration and onboarding",
  "Data-security, privacy and compliance awareness when handling sensitive information",
];

const experience = [
  {
    role: "IT Support Engineer",
    company: "Taylor-Marriott Ltd, Birmingham, United Kingdom",
    period: "03/2026 - 10/2026",
    points: [
      "Took ownership of the company's IT systems, installing, configuring and maintaining hardware and software to support staff and day-to-day digital project work.",
      "Set up and managed user accounts and access permissions, handling onboarding and offboarding and ensuring staff had the right access to the systems they needed.",
      "Provided first- and second-line IT support to staff, resolving hardware, software and connectivity issues and guiding users on best practice.",
      "Liaised with third-party suppliers and service providers to resolve issues and keep systems and services running reliably.",
      "Identified recurring issues and helped improve IT support processes and documentation.",
    ],
  },
  {
    role: "Career break",
    company: "",
    period: "04/2025 - 02/2026",
    points: [],
  },
  {
    role: "Technical Support Analyst",
    company: "Trakm8 Ltd, United Kingdom",
    period: "08/2023 - 03/2025",
    points: [
      "Diagnosed and resolved hardware faults, connectivity issues and data-reporting problems using internal diagnostic tools, identifying root causes and applying effective fixes.",
      "Provided remote technical support to enterprise customers, communicating practical solutions clearly by phone and through support channels.",
      "Logged, triaged and managed incidents and service requests in Salesforce and Jira, consistently working to resolution SLAs.",
      "Escalated and relayed issues to internal teams when needed, helping to maintain service continuity and support ongoing service improvements.",
    ],
  },
  {
    role: "Technical Support Engineer",
    company: "DXC Technology, India",
    period: "01/2019 - 05/2020",
    points: [
      "Delivered high-volume first-line IT support in a global enterprise environment, managing incidents and service requests daily.",
      "Administered end-user accounts in Active Directory, including user provisioning, password resets and access permissions.",
      "Supported users with remote desktop access, system connectivity and device-level issues while maintaining a calm, professional approach.",
      "Handled sensitive information in line with strict data-security, privacy and compliance requirements.",
    ],
  },
];

const education = [
  {
    degree: "MSc Computing (Merit)",
    school: "De Montfort University, Leicester",
    period: "2021 - 2022",
  },
  {
    degree: "Bachelor of Computer Applications",
    school: "Presidency College, India",
    period: "2014 - 2017",
  },
];

function Portfolio() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 sm:px-6 sm:py-12 lg:px-10 lg:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:gap-5 md:grid-cols-6 lg:grid-cols-12">
        <Reveal delay={0} className="md:col-span-6 lg:col-span-7">
          <TiltCard className="h-full p-8 md:p-10">
            <Label>Profile</Label>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink md:text-5xl lg:text-6xl">{NAME}</h1>
            <p className="mt-3 text-lg font-medium text-primary md:text-xl">{HEADLINE}</p>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-foreground/80">{SUMMARY}</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-primary" /> {LOCATION}
              </span>
            </div>
          </TiltCard>
        </Reveal>

        <Reveal delay={80} className="md:col-span-6 lg:col-span-5">
          <TiltCard className="h-full p-6 md:p-8" intensity={1}>
            <Label>Contact</Label>
            <div className="mt-4 grid gap-3">
              <ContactButton href={PHONE_TEL} icon={<Phone className="h-5 w-5" />} label="Phone" value={PHONE_DISPLAY} tone="primary" />
              <ContactButton href={`mailto:${EMAIL}`} icon={<Mail className="h-5 w-5" />} label="Email" value={EMAIL} />
              <DownloadCvButton />
            </div>
          </TiltCard>
        </Reveal>

        <Reveal delay={140} className="md:col-span-6 lg:col-span-12">
          <TiltCard className="h-full p-7 md:p-8" intensity={1}>
            <Label>Core IT Support Skills</Label>
            <div className="mt-6 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-[13px] font-medium text-foreground/80 transition hover:border-primary/40 hover:bg-accent hover:text-accent-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </TiltCard>
        </Reveal>

        <Reveal delay={200} className="md:col-span-6 lg:col-span-12">
          <TiltCard className="h-full p-7 md:p-8" intensity={1}>
            <Label>Education</Label>
            <div className="mt-4 grid gap-5 md:grid-cols-2">
              {education.map((item) => (
                <div key={item.degree} className="flex items-start gap-3">
                  <div className="shrink-0 rounded-xl border border-border bg-secondary p-2.5 text-primary">
                    <GraduationCap className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{item.period}</div>
                    <div className="mt-0.5 text-[15px] font-semibold text-ink">{item.degree}</div>
                    <div className="text-sm text-muted-foreground">{item.school}</div>
                  </div>
                </div>
              ))}
            </div>
          </TiltCard>
        </Reveal>

        {experience.map((job, index) => (
          <Reveal key={`${job.role}-${job.period}`} delay={260 + index * 80} className="md:col-span-6 lg:col-span-12">
            <TiltCard className="h-full p-7 md:p-8" intensity={1}>
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <Label>{job.period}</Label>
                  <h2 className="mt-2 text-xl font-semibold tracking-tight text-ink md:text-2xl">{job.role}</h2>
                  {job.company ? <div className="mt-1 text-[15px] font-medium text-primary">{job.company}</div> : null}
                </div>
                <div className="shrink-0 rounded-xl border border-border bg-secondary p-2.5 text-primary">
                  <Briefcase className="h-4 w-4" />
                </div>
              </div>
              {job.points.length > 0 ? (
                <ul className="mt-6 space-y-2.5 text-[14px] leading-relaxed text-foreground/80">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary/70"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              ) : null}
            </TiltCard>
          </Reveal>
        ))}

        <ContactForm />
      </div>
    </main>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </div>
  );
}

function ContactButton({
  href,
  icon,
  label,
  value,
  tone,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  tone?: "primary";
}) {
  const isPrimary = tone === "primary";
  const isNativeProtocol = href.startsWith("mailto:") || href.startsWith("tel:");

  const openHref = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isNativeProtocol) return;
    event.preventDefault();
    window.location.href = href;
  };

  const content = (
    <>
      <div className={`rounded-lg p-2.5 ${isPrimary ? "bg-white/15 text-primary-foreground" : "bg-secondary text-primary"}`}>
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <div
          className={`text-[11px] font-semibold uppercase tracking-wider ${isPrimary ? "text-primary-foreground/80" : "text-muted-foreground"}`}
        >
          {label}
        </div>
        <div className={`mt-0.5 truncate text-sm font-medium ${isPrimary ? "text-primary-foreground" : "text-ink"}`}>{value}</div>
      </div>
      <ArrowUpRight
        className={`h-4 w-4 shrink-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${isPrimary ? "text-primary-foreground/90" : "text-primary opacity-0 group-hover:opacity-100"}`}
      />
    </>
  );

  if (isPrimary) {
    return (
      <ShinyLink
        href={href}
        onClick={openHref}
        className="group flex items-center rounded-xl border border-primary bg-primary px-4 py-3.5 text-primary-foreground shadow-[0_2px_8px_oklch(0.55_0.16_255/0.25)] transition-shadow duration-300 hover:shadow-[0_0_20px_oklch(0.55_0.16_255/0.3)] hover:brightness-110"
      >
        {content}
      </ShinyLink>
    );
  }

  return (
    <a
      href={href}
      onClick={openHref}
      className="group flex w-full items-center gap-4 rounded-xl border border-border bg-surface px-4 py-3.5 transition hover:border-primary/40 hover:bg-secondary"
    >
      {content}
    </a>
  );
}

function DownloadCvButton() {
  return (
    <a
      href={CV_PATH}
      download={CV_FILENAME}
      className="group flex w-full items-center gap-4 rounded-xl border border-border bg-surface px-4 py-3.5 text-left transition hover:border-primary/40 hover:bg-secondary"
    >
      <div className="rounded-lg bg-secondary p-2.5 text-primary">
        <Download className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">CV</div>
        <div className="mt-0.5 text-sm font-medium text-ink">Download CV</div>
      </div>
      <ArrowUpRight className="h-4 w-4 shrink-0 text-primary opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
    </a>
  );
}
