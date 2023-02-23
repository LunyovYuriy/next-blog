import PostGrid from '@/src/components/PostGrid/PostGrid';
import IFeaturedPosts from '@/src/pages/Home/interfaces/IFeaturedPosts';
import classes from '@/src/pages/Home/scss/FeaturedPosts.module.scss';

function FeaturedPosts({ posts }: IFeaturedPosts) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={posts} />
    </section>
  );
}

export default FeaturedPosts;
