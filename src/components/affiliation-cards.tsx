import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { CSSProperties } from "react";
import { affiliations } from "@/content/site-data";
import { ScrollReveal } from "@/components/site-chrome";

type AffiliationCardsProps = {
  heading?: "h2" | "h3";
  className?: string;
};

export function AffiliationCards({ heading = "h3", className = "" }: AffiliationCardsProps) {
  const Title = heading;

  return (
    <div className={`affiliations ${className}`.trim()}>
      {affiliations.map((item, i) => (
        <ScrollReveal key={item.name} variant="scaleUp" delay={i * 0.04}>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="affiliation-card"
            style={
              {
                "--aff-accent": item.accent,
                "--aff-bg": item.accentBg,
              } as CSSProperties
            }
          >
            <span className="affiliation-logo" aria-hidden="true">
              {item.logo ? (
                <Image
                  src={item.logo}
                  alt={item.label}
                  width={180}
                  height={84}
                  className="affiliation-logo-img"
                />
              ) : (
                <item.icon strokeWidth={1.75} />
              )}
            </span>
            <Title className="affiliation-label">{item.label}</Title>
            <p className="affiliation-detail">{item.detail}</p>
            <span className="affiliation-domain">{item.name}</span>
            <ExternalLink className="affiliation-arrow" size={14} aria-hidden="true" />
          </a>
        </ScrollReveal>
      ))}
    </div>
  );
}
