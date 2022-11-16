const BlogPost = ({ post }) => {
  const fecha = new Date().toLocaleDateString();
  return (
    <div className='bg-white border rounded px-4 py-4'>
      <div className='border-b'>
        <h4 className='text-lg font-semibold'>{post.title}</h4>
        <span className='text-xs'>{fecha}</span>
      </div>
      <div className='py-4'>
        <p>{post.text}</p>
      </div>
      <div className='flex justify-end'>
        <button className='text-teal-600 font-semibold cursor-pointer'>Ver mas</button>
      </div>
    </div>
  );
};

export default BlogPost;
