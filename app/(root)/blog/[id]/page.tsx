import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import View from "@/components/View";
import BlogCard, { BlogCardProps } from "@/components/BlogCard";

// Fetch data for SEO metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Fetch data for SEO metadata
  const blog = await axios
    .get(`https://dummyjson.com/posts/${id}`)
    .then((res) => res.data);

  if (!blog) {
    return null;
  }

  return {
    title: blog.title,
    openGraph: {
      title: blog.title,
      description: blog.body,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.body,
    },
  };
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const skipParam = parseInt(id) < 10 ? parseInt(id) + 2 : parseInt(id) - 3;

  // Fetch data for SEO metadata
  const blog = await axios
    .get(`https://dummyjson.com/posts/${id}`)
    .then((res) => res.data);
  const { posts: suggestedPosts } = await axios
    .get(`https://dummyjson.com/posts?limit=2&skip=${skipParam}`)
    .then((res) => res.data);

  if (!blog) {
    return (
      <div>
        <p>Blog not found!</p>
      </div>
    );
  }

  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <p className="tag">Feb 10 2024</p>

        <h1 className="heading">{blog.title}</h1>
      </section>

      <section className="section_container">
        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex-between flex-wrap gap-5">
            <div className="flex gap-2 items-center mb-3">
              <Image
                src={"https://dummyjson.com/image/150"}
                alt="avatar"
                width={64}
                height={64}
                className="rounded-full drop-shadow-lg"
              />

              <div>
                <p className="text-20-medium">Goodness Sewo</p>
                <p className="text-16-medium !text-black-300">@sewogoodness</p>
              </div>
            </div>

            <div className="flex items-center flex-wrap gap-2">
              {blog?.tags?.map((item: string) => {
                return <p className="category-tag">{item}</p>;
              })}
            </div>
          </div>

          <h2 className="text-3xl font-semibold mt-3">{blog.title}</h2>
          <p className="max-w-4xl text-black text-lg">{blog.body}</p>
        </div>

        <hr className="divider" />

        <div className="max-w-4xl mx-auto">
          <p className="text-30-semibold">Suggested Blogs</p>

          <ul className="mt-7 card_grid-sm">
            {suggestedPosts?.map((post: BlogCardProps, i: number) => (
              <BlogCard key={i} {...post} />
            ))}
          </ul>
        </div>

        <View totalViews={blog.views} />
      </section>
    </>
  );
};

export default Page;
