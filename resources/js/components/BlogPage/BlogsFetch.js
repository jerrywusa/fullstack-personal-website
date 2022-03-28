import React, { useEffect, useState } from "react";
import axios from "axios";
import Blogs from "./Blogs";

function BlogsFetch(props) {
    const [blogs, getBlogs] = useState("");

    useEffect(() => {
        getAllBlogs();
    }, []);

    const getAllBlogs = () => {
        axios
            .get(`/api/blog`)
            .then((response) => {
                const allBlogs = response.data;
                getBlogs(allBlogs);
            })
            .catch((error) => console.error(`Error: ${error}`));
    };

    return <Blogs blogs={blogs} />;
    return <></>;
}

export default BlogsFetch;
