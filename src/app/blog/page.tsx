/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  thumbnail: string;
  title: string;
  subtitle: string;
  pubDate: string;
  link: string;
}

const BlogShowcase: React.FC = () => {
  const [blogPosts, setPosts] = useState<BlogPost[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();

  const username = "anshulsharma8386";
  const limit = 6;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`
        );
        const feed = await res.json();
        console.log(feed);
        const blogPosts = feed.items
          .slice(0, limit)
          .map(
            (item: {
              [x: string]: { match: (arg0: RegExp) => any[] };
              title: any;
              contentSnippet: any;
              link: any;
              pubDate: any;
            }) => ({
              title: item.title || "No title available",
              subtitle: item.contentSnippet
                ? item.contentSnippet.slice(0, 100) + "..."
                : "No subtitle available",
              thumbnail: item["content"]
                ? item["content"].match(/src="?([^"\s]+)"?\s*\/?>/)?.[1] ||
                  "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                : "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
              link: item.link || "#",
              pubDate: item.pubDate || "No date available",
            })
          );
        setPosts(blogPosts);
      } catch (err) {
        console.error("Error fetching blog posts:", err);
        setError("Failed to load blog posts. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [username, limit]);

  return (
    <div className="relative min-h-screen pt-32">
      <div className="fixed inset-0 w-full h-full bg-gradient-to-b from-bc via-bc/90 to-bc opacity-80" />
      <div className="fixed inset-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.1)_0%,transparent_65%)]" />

      <div className="relative z-1">
        <section className="py-24 bg-none font-montserrat">
          <div className="container px-4 mx-auto">
            <div className="mx-auto max-w-7xl">
              <h2 className="mb-16 text-5xl font-bold text-center tracking-tight">
                <span className="text-h1">Blog</span>{" "}
                <span className="bg-h2 bg-clip-text text-transparent">
                  Posts
                </span>
              </h2>

              {isLoading && (
                <div className="text-xl text-center text-dm">
                  Loading blog posts...
                </div>
              )}

              {error && (
                <div className="text-xl text-center text-hm">{error}</div>
              )}

              {!isLoading && !error && (
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {blogPosts?.map((post: BlogPost, index: number) => (
                    <Card
                      key={index}
                      className="group h-full overflow-hidden backdrop-blur-lg bg-cc/5 border-h1/20 hover:border-cg hover:border-2 hover:bg-gradient-to-br hover:from-hcf/5 hover:to-hcf/5 transition-all duration-500 hover:transform hover:-translate-y-1 cursor-pointer"
                      onClick={() => window.open(post.link, "_blank")}
                    >
                      <div className="overflow-hidden relative w-full h-48 rounded-t-xl">
                        <Image
                          src={post.thumbnail}
                          alt={post.title}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-bc via-bc/80 to-transparent"></div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="flex items-center mb-2 text-xl font-semibold text-h1">
                          {post.title}
                        </h3>
                        <p className="mb-4 text-sm text-dm/80">
                          {post.subtitle}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-dm/80">
                            {new Date(post.pubDate).toLocaleDateString()}
                          </span>
                          <div className="inline-flex items-center transition-colors duration-300 group text-h2 hover:text-h1">
                            <span className="mr-2 text-sm font-medium">
                              Read More
                            </span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogShowcase;
