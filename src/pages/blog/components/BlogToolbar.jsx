import React from "react";
import { Search, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Chip = ({ active, children, onClick }) => (
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

export const BlogToolbar = ({
  query,
  onQuery,
  tags,
  tag,
  onTag,
  sort,
  onSort,
  onReset,
  total,
  filtered,
}) => {
  return (
    <Card className="border-border bg-background">
      <CardContent className="p-4 md:p-5">
        <div className="flex flex-col gap-4">
          {/* Search + sort */}
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-[520px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => onQuery(e.target.value)}
                placeholder="Search: title / tag / excerpt..."
                className="w-full rounded-xl border border-border bg-background pl-10 pr-10 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/25"
              />
              {!!query && (
                <button
                  type="button"
                  onClick={() => onQuery("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg p-2 text-muted-foreground hover:bg-accent hover:text-foreground"
                  aria-label="Clear"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <select
                value={sort}
                onChange={(e) => onSort(e.target.value)}
                className="h-10 rounded-xl border border-border bg-background px-3 text-sm text-muted-foreground outline-none focus:ring-2 focus:ring-primary/25"
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="readtime">Read time</option>
                <option value="title">Title A-Z</option>
              </select>

              <Button variant="outline" className="border-2" onClick={onReset}>
                Reset
              </Button>

              <div className="text-xs text-muted-foreground">
                {filtered} / {total}
              </div>
            </div>
          </div>

          {/* Tag chips */}
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <Chip key={t} active={tag === t} onClick={() => onTag(t)}>
                {t}
              </Chip>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
