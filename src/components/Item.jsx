export default function Item({ blog }) {
  return (
    <div className="blog-card">
      <h2>{blog.title}</h2>

      <p className="description">
        {blog.description}
      </p>

      <span className="date">
        {new Date(blog.created_at).toLocaleDateString()}
      </span>
    </div>
  );
}