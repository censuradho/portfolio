import { PostsOrPages, Pagination } from "@tryghost/content-api";

export interface BlogProps {
  post: PostsOrPages,
  meta: Pagination
}