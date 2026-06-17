import Item from "./Item";

export default function Blogs({ blogs }) {
  return (
    <div className="blogs-grid">
      {blogs.map((blog) => (
        <Item key={blog.id} blog={blog} />
      ))}
    </div>
  );
}