import React, { useState, useEffect } from "react";
import service from "../appwrite/config.service";
import { Container, PostCard } from "../components";

function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    service.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
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
              </div>            ))
          ) : (
            <p>No posts found.</p>
          )}
        </div>
      </Container>
    </div>
  );
}

export default HomePage;
