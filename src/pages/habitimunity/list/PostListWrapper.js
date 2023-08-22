// components/habitimunity/list/PostListWrapper.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostList from '../../../components/habitimunity/list/postList/postList.container';


const PostListWrapper = ({ selectedTab, accessToken }) => {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

    // 230809 tab의 글자와 category 값 매핑
    const tabToPageMapping = {
    전체: '',  // Map tabs to their corresponding page numbers
    공부: 'STUDY',
    운동: 'EXERCISE',
    건강: 'HEALTH',
    일상: 'DAILY',
    기타: 'ETC',
};


  const fetchPostsByCategory = async () => {
    const response = await axios.get(`https://api.habiters.store/posts`, {
      headers: { "Content-Type": "application/json", Authorization: 'Bearer ' + accessToken },
      params: {
        category: tabToPageMapping[selectedTab],
      }
    });

    if (response.data.data) {
      setPosts(response.data.data);
    } else {
      setPosts([]);
    }
  };

  useEffect(() => {
    fetchPostsByCategory();
  }, [selectedTab]);

  return (
    <PostList
      posts={posts}
      limit={limit}
      offset={offset}
    />
  );
};

export default PostListWrapper;
