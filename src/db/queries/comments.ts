import type { Comment } from "@prisma/client";
import { db } from "@/db";

export type CommentWithAuthor = (
  Comment & {
    user: {name: string | null};
    image: {name: string | null};
  }
)

export const fetchCommentsByPostId = (postId: string): Promise<CommentWithAuthor[]> => {
  return db.comment.findMany({
    where: {postId },
    include: {
      user: {
        select: {
          name: true,
          image: true
        }
      }
    }
  })
}
