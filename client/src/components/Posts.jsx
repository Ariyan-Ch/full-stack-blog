import PostItem from "./PostItem"
import { useInfiniteQuery } from "@tanstack/react-query"
import axios from "axios"
import InfiniteScroll from "react-infinite-scroll-component"
import { useSearchParams } from "react-router"

const fetchPosts = async (pageParam, searchParams) =>{

  const searchParamsObj = Object.fromEntries([...searchParams]);
  //console.log(searchParamsObj)
  const res= await axios.get( `${import.meta.env.VITE_API_URL}/posts`,
    {params:{page:pageParam, limit:10, ...searchParamsObj}}
  );
  return res.data;
}

const Posts = () => {

  const [searchParams,setSearchParams] = useSearchParams();

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['posts', searchParams.toString()],
    queryFn: ({pageParam=1})=>fetchPosts(pageParam,searchParams),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => lastPage.hasMore? pages.length+1:undefined,
  })

  if (status === 'loading') return 'Loading...';
  if (status === 'error') return 'An error has occurred: ' + error.message;

  //console.log(data);
  const allPosts = data?.pages?.flatMap(page=>page.posts) || [];
  return (

    <InfiniteScroll
      dataLength={allPosts.length} //This is important field to render the next data
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<div style={{ height: 100 }}>  {/* reserve 100px for the loader */}
      <h4>Loading more posts...</h4>
    </div>}
      endMessage={
        <p >
          <b>No more posts sadly...</b>
        </p>
      }
      style={{ paddingBottom: 100 }}
    >

      {allPosts.map(post=>(

        <PostItem key={post._id} post={post}></PostItem>

      ))}

    </InfiniteScroll>

  )
}

export default Posts