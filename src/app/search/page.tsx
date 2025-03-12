import {redirect} from 'next/navigation';
import PostList from '@/components/posts/post-list';
import { fetchPostsBySearchTerm } from '@/db/queries/posts';

interface SearchPageProps {
  searchParams: Promise<{
    term: string;
  }>
}

const SearchPage = async (props: SearchPageProps) => {
  const { term } = await props.searchParams;

  if(!term) {
    redirect('/');
  }

  return (
    <div>
      <PostList fetchData={() => fetchPostsBySearchTerm(term)} />
    </div>
  )
}

export default SearchPage;