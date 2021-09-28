import React, { useState } from 'react';
import RecipeList from './recipeList';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/outline';

const Pagination = ({ recipes, page, setPage }) => {
    const dataLimit = 7;
    const [pages] = useState(Math.round(recipes.length / dataLimit));

    const goToNextPage = () => {
        setPage((page) => page + 1);
    };

    const goToPreviousPage = () => {
        setPage((page) => page - 1);
    };

    const setPaginatedData = () => {
        const startIndex = page * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;

        return recipes.slice(startIndex, endIndex);
    };

    return (
        <div className="pb-12">
            <ul>
                {setPaginatedData().map((data, index) => (
                    <RecipeList data={data} key={index} />
                ))}
            </ul>

            {/* pagination controls */}
            {/* previous button */}
            <div className="relative mx-3 my-2">
                <button
                    onClick={goToPreviousPage}
                    className={`absolute top-0 text-primary py-1 px-2 bg-primary hover:bg-secondary transition-all duration-200 rounded-md focus:outline-none left-0 items-center ${page === 1 ? 'hidden' : 'flex'}`}
                >
                    <ChevronLeftIcon className="w-4 h-4" />
                    <span className="text-sm">{page - 1} page</span>
                </button>

                {/* next button */}
                <button
                    onClick={goToNextPage}
                    className={`absolute top-0 text-primary py-1 px-2 bg-primary hover:bg-secondary transition-all duration-200 rounded-md focus:outline-none right-0 items-center ${page === pages ? 'hidden' : 'flex'}`}
                >
                    <span className="text-sm">{page + 1} page</span>
                    <ChevronRightIcon className="w-4 h-4" />
                </button>
            </div>
        </div>
    )
};

export default Pagination;