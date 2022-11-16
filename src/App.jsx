import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import BlogPost from './components/BlogPost';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    getDocs(collection(db, 'posts')).then((result) =>
      setPosts(result.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <>
      <h1 className='text-center mb-6 text-3xl font-semibold'>Blog</h1>
      <div className='bg-amber-50/70 max-w-3xl mx-auto rounded-md shadow p-10 space-y-8'>
        {posts.length > 0 && posts.map((post) => <BlogPost post={post} key={post.title} />)}
      </div>
    </>
  );
}

export default App;
