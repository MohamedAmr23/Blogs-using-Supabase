import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import Blogs from "../components/Blogs";
import { Link } from "react-router-dom";
export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data, error } = await supabase
        .from("Blogs")
        .select();

      if (error) {
        console.error(error);
      } else {
        setBlogs(data);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="container">
      <h1 className="title">My Blogs</h1>
      <Link to="/create-blog" className="btn">
        Create Blog
      </Link>
      <Blogs blogs={blogs} />
    </div>
  );
}