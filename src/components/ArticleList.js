import React from "react";
import Article from "./Article";

const ArticleList = ({ posts }) => {
    const postItems = posts.map((post) => {
      return (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      );
    });
  
    return <main>{postItems}</main>;
  };
  
  export default ArticleList;