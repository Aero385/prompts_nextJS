'use client';
import {useState, useEffect} from 'react';
import PromptCard from './PromptCard'


const PromptCardList = ({data, handleTagList}) => {
    return (
        <div className='mt-16 prompt_layout'>
            {data.map((post) => (
                <PromptCard
                    key={post.id}
                    post={post}
                    handleTagClick={handleTagClick}
                />
            ))}
        </div>
    )
}
const Feed = () => {
    const [searchText, setSearchText] = useState('')
    const [posts, setPosts] = useState([])

    const handleSearchChange = (e) => {

    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/prompt')
            const data = await response.json()
            setPosts(data)
        }
        fetchData();
    }, []);
    

    return (
        <section class='feed'>
            <form className='relative w-full flex-center'>
                <input
                    type='text'
                    className='search_input peer'
                    required
                    placeholder='Search for a tag or username'
                    onChange={handleSearchChange}
                    value={searchText}
                />
            </form>

            <PromptCardList
                data={posts}
                handleTagClick={() => {}}
            />
        </section>
    );
};

export default Feed;
