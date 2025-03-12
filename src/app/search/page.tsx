import {redirect} from 'next/navigation'
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
    <div>{term}</div>
  )
}

export default SearchPage;