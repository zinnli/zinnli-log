import { Post } from "@/components";
import { getPostDetail } from "@/lib/mdx";

type Props = {
  params: { category: string; slug: string };
};

const PostDetail = async ({ params }: Props) => {
  const post = await getPostDetail(params.category, params.slug);

  return (
    <article className="prose mx-auto">
      <h1>{post.title}</h1>
      <Post post={post} />
    </article>
  );
};

export default PostDetail;
