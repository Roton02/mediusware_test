import axios from "axios";
import { useEffect, useState } from "react";
import BlogCard from "./Blog/BlogCard";
import { FaArrowRightLong } from "react-icons/fa6";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const datafetch = async () => {
      const data = await axios("https://hr.mediusware.xyz/api/website/blogs/");
      setBlogs(data.data.results);
      setFilteredBlogs(data.data.results);

      // Extract unique categories with counts
      const categoryCounts = data.data.results.reduce((acc, blog) => {
        const categoryName = blog.categories[0].name;
        acc[categoryName] = (acc[categoryName] || 0) + 1;
        return acc;
      }, {});
      setCategories(Object.entries(categoryCounts));
    };
    datafetch();
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(blogs.filter((blog) => blog.categories[0].name === category));
    }
  };

  return (
    <div className="container">
      <div className="flex items-center justify-between gap-3 md:flex-row flex-col my-10">
        <p className="sm:text-[48px] text-2xl leading-8 font-bold">
          All <span className="text-[#00A88E]"> Blogs</span>
        </p>
      </div>
      <div className="flex items-center flex-wrap justify-center gap-4 sm:py-12 py-5">
        <div>
          <button
            onClick={() => handleCategoryClick("All")}
            className={`sm:py-[11px] py-1 sm:px-6 px-4 border rounded-3xl font-bold ${activeCategory === "All" ? "bg-[#004080] text-white" : "bg-white text-black"
              }`}
          >
            All{" "}
            <span
              className={`px-[6px] py-1 rounded-lg ms-1 text-[#008F79] bg-[#EAECF0] h-[20px]`}
            >
              {blogs.length}
            </span>
          </button>
        </div>
        {categories.map(([category, count], index) => (
          <div key={index} className="flex items-center justify-center">
            <div>
              <button
                onClick={() => handleCategoryClick(category)}
                className={`sm:py-[11px] py-1 sm:px-6 px-4 border rounded-3xl font-bold ${activeCategory === category ? "bg-[#004080] text-white" : "bg-white text-black"
                  }`}
              >
                {category}
                <span
                  className={`px-[6px] py-1 rounded-lg ms-1 text-[#008F79] bg-[#EAECF0] h-[20px]`}
                >
                  {count}
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="pb-10">
        <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10">
          {filteredBlogs.slice(0, 6).map((blog) => (
            <div key={blog.id} className="flex items-center justify-center">
              <BlogCard data={blog} />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <button className="my-8 bg-blue-600 text-white px-10 hover:pr-14 transition delay-150 py-3 text-xl rounded-lg">
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
