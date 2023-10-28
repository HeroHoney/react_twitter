import React, {useEffect, useState } from 'react';
import PostFilter from '../components/PostFilter';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import MyButton from '../components/UI/button/MyButton';
import MyModal from '../components/UI/MyModal/MyModal';
import { usePosts } from '../hooks/usePosts';
import '../styles/App.css';
import PostService from '../API/PostService';
import MyLoader from '../components/UI/loader/MyLoader';
import { useFetching } from '../hooks/useFetching';
import { getPageCount} from '../utils/pages';
import MyPagination from '../components/UI/pagination/MyPagination';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '',query:''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort,filter.query);
  const[totalPages,setTotalPages] = useState(0);
  const[limit,setLimit] = useState(10);
  const[page,setPage] = useState(1);

  const [fetchPosts, isPostLoading,postError] = useFetching(async(limit,page)=>{
    const response = await PostService.getAll(limit,page)
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount,limit));
  })

  useEffect(()=>{
    fetchPosts(limit,page);
  },[])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false)
  };

  const deletePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page)
    fetchPosts(limit,page)
  }

  return (
    <div className="App">
      <MyButton style={{marginTop:"30px"}} onClick={()=>setModal(true)}>add Post</MyButton>
      <MyModal visible={modal} setVisible={setModal}><PostForm create={createPost}/></MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter}/>
      {isPostLoading
        ?<div style={{display:"flex", justifyContent:"center", marginTop:"100px"}}>
          <MyLoader/>
          </div>
        :<PostList remove={deletePost} posts={sortedAndSearchedPosts} title="List of posts 1" />
      }

      <MyPagination page={page} changePage={changePage} totalPages={totalPages}/>
    </div>
  );
}

export default Posts;
