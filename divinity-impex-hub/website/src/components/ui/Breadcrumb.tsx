import Link from "next/link";
import { ChevronRight, ArrowLeft } from "lucide-react";
import type { Segment } from "@/lib/segments";

interface BreadcrumbProps {
  segment?: Segment;
  subPage?: string;
}

export function Breadcrumb({ segment, subPage }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-hub-border bg-hub-warm">
      <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-sm sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex min-h-10 items-center gap-1 text-hub-slate hover:text-hub-navy"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Hub
        </Link>
        {segment && (
          <>
            <ChevronRight className="h-4 w-4 text-gray-300" aria-hidden />
            <Link href={segment.href} className="text-hub-slate hover:text-hub-navy">
              {segment.name}
            </Link>
          </>
        )}
        {subPage && (
          <>
            <ChevronRight className="h-4 w-4 text-gray-300" aria-hidden />
            <span className="font-medium text-hub-navy">{subPage}</span>
          </>
        )}
      </div>
    </nav>
  );
}
