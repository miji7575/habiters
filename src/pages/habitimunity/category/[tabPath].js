import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import PostList from '../../../components/habitimunity/list/postList/postList.container';
import { userAccessToken } from '../../../components/stores';
import { useRecoilState } from 'recoil';

const CategoryTab = () => {
  const router = useRouter();
  const { tabPath } = router.query;

  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const [accessToken, setAccessToken] = useRecoilState(userAccessToken)

  const fetchPostsByCategory = async () => {
    const response = await axios.get(`https://api.habiters.store/posts`, {
      headers: { "Content-Type": "application/json", Authorization: 'Bearer ' + accessToken },
      params: {
        category: 'DAILY',
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
    console.log(tabPath)
  }, [tabPath]);

  return (

          <PostList
              posts={posts}
              limit={limit}
              offset={offset}
          />

  );
};

export default CategoryTab;