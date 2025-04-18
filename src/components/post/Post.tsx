import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

import { Mdx } from "../mdx";

interface Props {
  post: {
    title: string;
    date: string;
    thumbnail?: string;
    desc?: string;
    content: string;
  };
}

const Post = ({ post }: Props) => {
  if (!post.content) {
    return <p>Error: No content available</p>;
  }

  return (
    <article className="prose  prose-lg prose-slate">
      <MDXRemote
        source={post.content}
        options={{
          parseFrontmatter: true,
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeSlug],
          },
        }}
        components={Mdx}
      />
    </article>
  );
};

export default Post;
