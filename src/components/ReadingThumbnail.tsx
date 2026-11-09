"use client";

import { useState } from "react";
import Image from "next/image";

import { ReadingCover } from "@/components/ReadingCover";

interface ReadingThumbnailProps {
  title: string;
  tone: string;
  src?: string;
  alt?: string;
  fit?: "cover" | "contain";
  className?: string;
}

export function ReadingThumbnail({
  title,
  tone,
  src,
  alt = "",
  fit = "cover",
  className = "h-16 w-14",
}: ReadingThumbnailProps) {
  const [hasImageError, setHasImageError] = useState(false);

  return src && !hasImageError ? (
    <span className={`reading-image-frame relative shrink-0 overflow-hidden rounded-md border border-border/70 bg-muted/60 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="56px"
        quality={70}
        className={fit === "contain" ? "object-contain" : "object-cover"}
        onError={() => setHasImageError(true)}
      />
    </span>
  ) : (
    <ReadingCover title={title} tone={tone} className={className} />
  );
}
