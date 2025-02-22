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
          Pitch Your Blog, <br />
          Grow your social community
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
