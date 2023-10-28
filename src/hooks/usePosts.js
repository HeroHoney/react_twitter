import { useMemo } from "react";

export const useSortedPosts = (posts,sort) => {
    const sortedPost = useMemo(()=>{
        if (sort) {
          return [...posts].sort((a, b) => {
            if (a[sort] && b[sort]) {
              return a[sort].localeCompare(b[sort]);
            }
            return 0;
          });
        } else {
          return posts;
        }
    }, [sort, posts])

    return sortedPost;
    
}

export const usePosts = (posts, sort, query) => {
  
    const sortedPost = useSortedPosts(posts,sort);

    const sortedAndSearchedPosts = useMemo(()=>{
        return sortedPost.filter(post=> post.title.toLowerCase().includes(query.toLowerCase()))
    }, [query,sortedPost])

    return sortedAndSearchedPosts;
}