import { useState } from "react";
import { supabase } from "../utils/supabase";
import "../App.css";
import { useNavigate } from "react-router-dom";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("Blogs").insert([
      {
        title,
        description,
      },
    ]);

    setLoading(false);

    if (error) {
      console.error(error);
      alert("Failed to create blog");
      return;
    }

    alert("Blog created successfully");

    setTitle("");
    setDescription("");
    navigate("/");
  };

  return (
    <div className="container">
      <div className="form-card">
        <h1>Create Blog</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              placeholder="Enter blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              rows="5"
              placeholder="Enter blog description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Blog"}
          </button>
        </form>
      </div>
    </div>
  );
}