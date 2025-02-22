import { EyeIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export type BlogCardProps = {
  views: string;
  title: string;
  tags: string[];
  id: string;
  body: string;
};

const BlogCard = ({ views, title, tags, id, body }: BlogCardProps) => {
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">Feb 10 2025</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <p className="text-16-medium line-clamp-1">Goodness Sewo</p>

          <Link href={`/blog/${id}`}>
            <h3 className="text-26-semibold line-clamp-2">{title}</h3>
          </Link>
        </div>
      </div>

      <Link href={`/blog/${id}`}>
        <p className="startup-card_desc">{body}</p>
      </Link>

      <div className="flex-between gap-3 mt-5">
        <p className="text-16-medium flex gap-1 w-full overflow-x-auto">
          <span className="px-2 bg-primary text-white rounded-lg">
            {tags[0]}
          </span>
        </p>

        <Button className="startup-card_btn" asChild>
          <Link href={`/blog/${id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export const BlogCardSkeleton = () => (
  <>
    {[0, 1, 2, 3, 4, 5, 6].map((index: number) => (
      <li className="list-none" key={cn("skeleton", index)}>
        <Skeleton className="startup-card_skeleton" />
      </li>
    ))}
  </>
);

export default BlogCard;
