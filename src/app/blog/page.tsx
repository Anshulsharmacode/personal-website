/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { ArrowRight } from "lucide-react";

const montserrat = Montserrat({ subsets: ["latin"] });
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

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}&count=100`,
          {
            next: { revalidate: 3600 } // Cache for 1 hour
          }
        );
        
        if (!res.ok) throw new Error('Failed to fetch posts');
        
        const feed = await res.json();
        const blogPosts = feed.items.map((item: any) => {
          // Extract first image URL from content using DOMParser
          const doc = new DOMParser().parseFromString(item.content, 'text/html');
          const firstImage = doc.querySelector('img');
          const thumbnail = firstImage?.src || 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg';

          return {
            title: item.title || "No title available",
            subtitle: item.description 
              ? `${item.description.replace(/<[^>]*>/g, '').slice(0, 100)}...`
              : "No subtitle available",
            thumbnail,
            link: item.link || "#",
            pubDate: item.pubDate || "No date available",
          };
        });
        setPosts(blogPosts);
      } catch (err) {
        console.error("Error fetching blog posts:", err);
        setError("Failed to load blog posts. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [username]);

  return (
    <section
      className={`w-full py-24 bg-color-2 text-color-3 ${montserrat.className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-16 text-center"
        >
          <span className="text-color-3">Latest</span>{" "}
          <span className="text-color-5">Blog Posts</span>
        </motion.h2>

        {isLoading && (
          <div className="text-center text-xl">Loading blog posts...</div>
        )}

        {error && (
          <div className="text-center text-xl text-red-500">{error}</div>
        )}

        {!isLoading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts?.map((post: BlogPost, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="h-full group bg-color-2 shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl border border-color-4/20 cursor-pointer"
                  onClick={() => window.open(post.link, "_blank")}
                >
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 6}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-color-2 via-color-2/80 to-transparent"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-color-5 mb-2 flex items-center">
                      {post.title}
                    </h3>
                    <p className="text-color-3/80 text-sm mb-4">
                      {post.subtitle}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        {new Date(post.pubDate).toLocaleDateString()}
                      </span>
                      <div className="group inline-flex items-center text-color-5 hover:text-color-4 transition-colors duration-300">
                        <span className="mr-2 text-sm font-medium">
                          Read More
                        </span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogShowcase;