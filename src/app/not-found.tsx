import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <>
      <PageHero label="404" title="That page isn’t here." />
      <div className="container-luxe py-20 text-lg">
        <Link href="/" className="underline underline-offset-4">
          Back to the home page
        </Link>
      </div>
    </>
  );
}
