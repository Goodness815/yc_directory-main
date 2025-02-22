"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogCard, { BlogCardProps, BlogCardSkeleton } from "./BlogCard";

const BlogContainer = ({ params }: any) => {
  const [posts, setPosts] = useState<BlogCardProps[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch posts based on params
  const fetchPosts = async (searchParams = "") => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://dummyjson.com/posts${searchParams.search ? `/search?q=${searchParams.search}` : ""}`
      );
      if (response.data) {
        setPosts(response.data.posts);
      }
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  // Fetch posts on component mount and when params change
  useEffect(() => {
    fetchPosts(params);
  }, [params]);

  if (loading) {
    return (
      <div className="card_grid">
        <BlogCardSkeleton />
      </div>
    );
  }
  return (
    <ul className="mt-7 card_grid">
      {posts?.length > 0 ? (
        posts.map((post: BlogCardProps) => <BlogCard key={post.id} {...post} />)
      ) : (
        <p className="no-results">No posts found</p>
      )}
    </ul>
  );
};

export default BlogContainer;
