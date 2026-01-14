import { useMemo, useState } from "react";

const parseReadTime = (s) => {
  // "6 min read" -> 6
  const m = String(s || "").match(/\d+/);
  return m ? Number(m[0]) : 0;
};

export const useBlogQuery = (posts, { pageSize = 6 } = {}) => {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("All");
  const [sort, setSort] = useState("newest");
  const [page, setPage] = useState(1);

  const tags = useMemo(() => {
    const unique = Array.from(new Set(posts.map((p) => p.tag)));
    return ["All", ...unique];
  }, [posts]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    let list = posts.filter((p) => {
      const okTag = tag === "All" ? true : p.tag === tag;
      if (!okTag) return false;

      if (!q) return true;
      const hay = `${p.title} ${p.excerpt} ${p.tag}`.toLowerCase();
      return hay.includes(q);
    });

    // sort
    list = list.slice().sort((a, b) => {
      if (sort === "title") return a.title.localeCompare(b.title);
      if (sort === "readtime")
        return parseReadTime(b.readTime) - parseReadTime(a.readTime);
      if (sort === "oldest")
        return String(a.date).localeCompare(String(b.date));
      // newest default
      return String(b.date).localeCompare(String(a.date));
    });

    return list;
  }, [posts, query, tag, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageClamped = Math.min(page, totalPages);

  const visible = useMemo(() => {
    const end = pageClamped * pageSize;
    return filtered.slice(0, end);
  }, [filtered, pageClamped, pageSize]);

  const canLoadMore = visible.length < filtered.length;

  const reset = () => {
    setQuery("");
    setTag("All");
    setSort("newest");
    setPage(1);
  };

  const loadMore = () => setPage((p) => p + 1);

  // reset page when filter changes
  const setQuerySafe = (v) => {
    setPage(1);
    setQuery(v);
  };
  const setTagSafe = (v) => {
    setPage(1);
    setTag(v);
  };
  const setSortSafe = (v) => {
    setPage(1);
    setSort(v);
  };

  return {
    query,
    setQuery: setQuerySafe,
    tag,
    setTag: setTagSafe,
    sort,
    setSort: setSortSafe,
    page: pageClamped,
    totalPages,
    tags,
    filtered,
    visible,
    canLoadMore,
    loadMore,
    reset,
  };
};
