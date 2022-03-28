import React from "react";
import Blog from "./Blog";

function Blogs({ blogs }) {
    if (blogs.length > 0) {
        return (
            <>
                {blogs.map((blog) => (
                    <Blog
                        titleText={blog.title_text}
                        descriptionText={blog.description_text}
                        publishDate={blog.publish_date}
                        bodyText={blog.body_text}
                        key={blog.id}
                    />
                ))}
            </>
        );
    } else {
        return <h3>no blogs yet</h3>;
    }
}

export default Blogs;
