import { Link } from "react-router-dom";
import { supabase } from "../utils/supabase";

export default function Item({ blog }) {
  const deleteBtn =async () => {
     const { data, error } = await supabase.from("Blogs").delete().eq("id", blog.id);
      if (error) {
        console.error("Error deleting blog:", error);
        alert("Error deleting blog");
      } else {
        window.location.reload();
        alert("Blog deleted successfully");
        
      }
    }
  return (
    <div className="blog-card">
      <h2>{blog.title}</h2>

      <p className="description">
        {blog.description}
      </p>

      <span className="date">
        {new Date(blog.created_at).toLocaleDateString()}
      </span>
      <button className="delete-btn" onClick={deleteBtn}>Delete</button>
      <Link to={`/edit-blog/${blog.id}`} className="edit-btn">Edit</Link>
    </div>
  );
}