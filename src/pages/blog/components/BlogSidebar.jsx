import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flame, Hash, Mail, Bookmark, Info } from "lucide-react";

const TopicChip = ({ active, children, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={[
      "rounded-full border px-3 py-1.5 text-xs font-semibold transition",
      active
        ? "bg-white text-black border-white"
        : "border-border bg-background text-muted-foreground hover:bg-accent hover:text-foreground",
    ].join(" ")}
  >
    {children}
  </button>
);

export const BlogSidebar = ({ posts = [], tags = [], activeTag, onTag }) => {
  const trending = useMemo(() => posts.slice(0, 6), [posts]);
  const readingList = useMemo(() => posts.slice(0, 5), [posts]);

  return (
    <aside className="space-y-4 lg:sticky lg:top-6 h-fit">
      {/* Newsletter */}
      <Card className="border-border bg-background">
        <CardContent className="p-5">
          <div className="flex items-center gap-2 font-black">
            <Mail className="h-5 w-5" /> Weekly Digest
          </div>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Dapetin ringkasan materi terbaru (ala Medium).
          </p>
          <div className="mt-4 flex gap-2">
            <input
              placeholder="your@email.com"
              className="h-10 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-primary/25"
            />
            <Button className="border-2 bg-[#171717] hover:bg-white! hover:text-black!">
              Join
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Trending */}
      <Card className="border-border bg-background">
        <CardContent className="p-5">
          <div className="flex items-center gap-2 font-black">
            <Flame className="h-5 w-5" /> Trending
          </div>
          <div className="mt-4 space-y-3">
            {trending.map((p, i) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="block rounded-xl border border-border bg-background px-3 py-3 hover:bg-accent/40 transition"
              >
                <div className="flex items-start gap-3">
                  <div className="text-xs font-black text-muted-foreground w-6">
                    {(i + 1).toString().padStart(2, "0")}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-black leading-snug line-clamp-2">
                      {p.title}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {p.tag} • {p.readTime}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Topics */}
      <Card className="border-border bg-background">
        <CardContent className="p-5">
          <div className="flex items-center gap-2 font-black">
            <Hash className="h-5 w-5" /> Topics
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <TopicChip
                key={t}
                active={activeTag === t}
                onClick={() => onTag?.(t)}
              >
                {t}
              </TopicChip>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Reading list */}
      <Card className="border-border bg-background">
        <CardContent className="p-5">
          <div className="flex items-center gap-2 font-black">
            <Bookmark className="h-5 w-5" /> Reading list
          </div>
          <div className="mt-4 space-y-3">
            {readingList.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="block rounded-xl border border-border bg-background px-3 py-3 hover:bg-accent/40 transition"
              >
                <div className="text-sm font-black line-clamp-2">{p.title}</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {p.tag} • {p.readTime}
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* About / Footer */}
      <Card className="border-border bg-background">
        <CardContent className="p-5">
          <div className="flex items-center gap-2 font-black">
            <Info className="h-5 w-5" /> About
          </div>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Blog ini berisi rangkuman Teknik Digital & Digital Logic. Nambah
            post cukup di <b>posts.js</b>.
          </p>

          <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
            <span className="hover:text-foreground cursor-pointer">Help</span>
            <span className="hover:text-foreground cursor-pointer">
              Privacy
            </span>
            <span className="hover:text-foreground cursor-pointer">Terms</span>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
};
