import React, { useState } from 'react';
import Navigation from './navigation';
import { SearchIcon } from "@heroicons/react/outline";
import axios from 'axios';
import Pagination from './pagination';
import Loader from './Loader';

const App = () => {
    const [search, setSearch] = useState('');
    const [recipeList, setRecipeList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        setCurrentPage(1);
        setLoading(true);
        axios.get('https://forkify-api.herokuapp.com/api/search', {
            params: {
                q: search
            }
        })
            .then(response => {
                setLoading(false);
                setRecipeList(response.data.recipes)
            })
            .catch(error => {
                setLoading(false);
                alert(error)
            })
            .then(() => { })
        setSearch('');
    }
    
    return (
        <div>
            <Navigation>
                <form onSubmit={handleSearchSubmit} className="flex items center bg-white rounded-full overflow-hidden">
                    <input
                        type="text"
                        name="search" id="search"
                        className="mx-2 focus:outline-none"
                        placeholder="Search here for a recipe"
                        value={search}
                        onChange={event => setSearch(event.target.value)}
                    />
                    <button type="submit" className="bg-brown flex items-center px-7 py-2">
                        <SearchIcon className="h-4 w-4 mr-2 text-white" aria-hidden="true" />
                        <span className="text-white text-sm">Search</span>
                    </button>
                </form>
            </Navigation>
            <div className="max-w-6xl mx-auto flex items-start">
                <div className="w-recipes relative mt-4">
                    {loading ? (
                        <Loader />
                    ) :
                        recipeList.length > 0 ? (
                            <Pagination
                                recipes={recipeList}
                                page={currentPage}
                                setPage={setCurrentPage}
                            />
                        ) : (
                            <h2>Please search for a recipe above</h2>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default App;