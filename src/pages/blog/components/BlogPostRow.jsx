import React from "react";
import { Link } from "react-router-dom";
import { Clock, Tags, ArrowUpRight } from "lucide-react";

export const BlogPostRow = ({ post }) => {
  return (
    <Link to={`/blog/${post.slug}`} className="block">
      <article className="group rounded-2xl border border-border bg-background hover:border-primary/30 transition">
        <div className="p-5">
          <div className="flex gap-4">
            {/* Left content */}
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 font-semibold">
                  <Tags className="h-4 w-4" />
                  {post.tag}
                </span>

                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>

                <span>•</span>
                <span>{post.date}</span>
              </div>

              <h3 className="mt-3 text-lg md:text-xl font-black tracking-tight group-hover:underline underline-offset-4 line-clamp-2">
                {post.title}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground line-clamp-2 md:line-clamp-3">
                {post.excerpt}
              </p>

              <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-muted-foreground group-hover:text-foreground transition">
                Open <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>

            {/* Right thumbnail (fixed, no weird scaling) */}
            <div className="hidden sm:block shrink-0">
              <div className="h-24 w-28 md:h-28 md:w-32 rounded-xl overflow-hidden border border-border bg-accent/30">
                <img
                  src={post.cover}
                  alt={post.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};
