// pages/posts/[slug].js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Post({ post }) {
  const router = useRouter();
  const { slug } = router.query;
  
  useEffect(() => {
    const redirectToWordPress = () => {
      window.location.href = `https://example.com/posts/${slug}`;
    };
    redirectToWordPress();
  }, []);
  
  return (
    <div>
      Redirecting to WordPress...
    </div>
  );
}
