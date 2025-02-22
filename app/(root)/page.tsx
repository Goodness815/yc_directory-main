"use client";
import { TypeAnimation } from "react-type-animation";
import BlogContainer from "@/components/BlogContainer";
import SearchForm from "@/components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };

  return (
    <>
      <section className="pink_container">
        <p className="tag">PITCH, POST AND GROW</p>
        <h1 className="heading">
          <span>Pitch Your Blog</span>
          <br />
          <span>Grow your </span>{" "}
          <TypeAnimation
            sequence={["community", 2000, "followers", 2000, "business", 2000]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ display: "inline-block" }}
          />
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit blog Ideas, Vote on Pitches, and Get Noticed online.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Blogs"}
        </p>

        <BlogContainer params={params} />
      </section>
    </>
  );
}
