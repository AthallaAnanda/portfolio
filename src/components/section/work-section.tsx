/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DATA } from "@/data/resume";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type WorkEntry = (typeof DATA.work)[number];

interface CompanyGroup {
  company: string;
  href: string;
  logoUrl: string;
  location: string;
  roles: WorkEntry[];
}

function parseDate(str: string): Date {
  if (str === "Present") return new Date();
  return new Date(str);
}

function monthDiff(start: string, end: string): number {
  const s = parseDate(start);
  const e = parseDate(end);
  return (
    (e.getFullYear() - s.getFullYear()) * 12 +
    (e.getMonth() - s.getMonth())
  );
}

function formatDuration(months: number): string {
  if (months < 1) return "< 1 mo";
  const y = Math.floor(months / 12);
  const m = months % 12;
  const parts = [];
  if (y > 0) parts.push(`${y} yr${y > 1 ? "s" : ""}`);
  if (m > 0) parts.push(`${m} mo${m > 1 ? "s" : ""}`);
  return parts.join(" ");
}

function groupByCompany(work: WorkEntry[]): CompanyGroup[] {
  const map = new Map<string, CompanyGroup>();
  for (const entry of work) {
    if (!map.has(entry.company)) {
      map.set(entry.company, {
        company: entry.company,
        href: entry.href,
        logoUrl: entry.logoUrl,
        location: entry.location,
        roles: [],
      });
    }
    map.get(entry.company)!.roles.push(entry);
  }
  return Array.from(map.values());
}

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
      onError={() => setImageError(true)}
    />
  );
}

function RoleItem({
  role,
  isLast,
}: {
  role: WorkEntry;
  isLast: boolean;
}) {
  const [open, setOpen] = useState(false);
  const roleDuration = monthDiff(role.start, role.end ?? "Present");

  return (
    <div className="flex gap-3">
      <div className="flex flex-col items-center flex-none">
        <div className="mt-1 size-2 rounded-full bg-muted-foreground/40 flex-none" />
        {!isLast && (
          <div className="w-px flex-1 bg-muted-foreground/20 mt-1" />
        )}
      </div>
      <div className={cn("grid gap-1", !isLast && "pb-3")}>
        <button
          onClick={() => setOpen((v) => !v)}
          className="text-left cursor-pointer group/role"
        >
          <div className="font-medium text-sm leading-snug text-foreground flex items-center gap-1.5">
            {role.title}
            <span className="relative inline-flex items-center w-3 h-3">
              <ChevronRight
                className={cn(
                  "absolute h-3 w-3 shrink-0 text-muted-foreground stroke-2 transition-all duration-300 ease-out",
                  "translate-x-0 opacity-0",
                  "group-hover/role:translate-x-0.5 group-hover/role:opacity-100",
                  open && "opacity-0"
                )}
              />
              <ChevronDown
                className={cn(
                  "absolute h-3 w-3 shrink-0 text-muted-foreground stroke-2 transition-all duration-200",
                  "opacity-0 rotate-0",
                  open && "opacity-100 rotate-180"
                )}
              />
            </span>
          </div>
          {role.badges?.[0] && (
            <div className="text-xs text-muted-foreground">{role.badges[0]}</div>
          )}
          <div className="text-xs text-muted-foreground tabular-nums">
            {role.start} - {role.end ?? "Present"} · {formatDuration(roleDuration)}
          </div>
        </button>
        <div
          className={cn(
            "grid transition-all duration-200 ease-out",
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          )}
        >
          <div className="overflow-hidden">
            <p className="text-xs sm:text-sm text-muted-foreground pt-1">
              {role.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MultiRoleCard({ group }: { group: CompanyGroup }) {
  const earliestStart = group.roles[group.roles.length - 1].start;
  const latestEnd = group.roles[0].end ?? "Present";
  const totalMonths = monthDiff(earliestStart, latestEnd);

  return (
    <div className="w-full grid gap-2">
      {/* Company header — non-clickable */}
      <div className="flex items-center gap-x-3 w-full">
        <LogoImage src={group.logoUrl} alt={group.company} />
        <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
          <div className="font-semibold leading-none">{group.company}</div>
          <div className="font-sans text-sm text-muted-foreground">
            {formatDuration(totalMonths)}
          </div>
        </div>
      </div>

      {/* Role list — each role has its own toggle */}
      <div className="ml-11 md:ml-13">
        {group.roles.map((role, i) => (
          <RoleItem
            key={role.title}
            role={role}
            isLast={i === group.roles.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

export default function WorkSection() {
  const groups = groupByCompany(DATA.work);

  return (
    <div className="w-full grid gap-6">
      {groups.map((group) =>
        group.roles.length > 1 ? (
          <MultiRoleCard key={group.company} group={group} />
        ) : (
          <Accordion key={group.company} type="single" collapsible className="w-full">
            <AccordionItem value={group.company} className="w-full border-b-0 grid gap-2">
              <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
                <div className="flex items-center gap-x-3 justify-between w-full text-left">
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    <LogoImage src={group.logoUrl} alt={group.company} />
                    <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {group.company}
                        <span className="relative inline-flex items-center w-3.5 h-3.5">
                          <ChevronRight
                            className={cn(
                              "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-300 ease-out",
                              "translate-x-0 opacity-0",
                              "group-hover:translate-x-1 group-hover:opacity-100",
                              "group-data-[state=open]:opacity-0 group-data-[state=open]:translate-x-0"
                            )}
                          />
                          <ChevronDown
                            className={cn(
                              "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200",
                              "opacity-0 rotate-0",
                              "group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180"
                            )}
                          />
                        </span>
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {group.roles[0].title}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                    <span>
                      {group.roles[0].start} - {group.roles[0].end ?? "Present"}
                    </span>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-0 ml-13 text-xs sm:text-sm text-muted-foreground">
                {group.roles[0].description}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )
      )}
    </div>
  );
}
