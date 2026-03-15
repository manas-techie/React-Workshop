import React from "react";
import service from "../appwrite/config.service";
import { PostCard, Container } from "../components";
import { useState, useEffect } from "react";

function AllPostPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    service
      .getPosts()
      .then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard {...post} />
              </div>
            ))
          ) : (
            <p>No posts found.</p>
          )}
        </div>
      </Container>
    </div>
  );
}

export default AllPostPage;
