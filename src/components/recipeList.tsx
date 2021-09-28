import React from 'react';
import { HeartIcon } from '@heroicons/react/outline';

const RecipeList = (props) => {
    const recipe = props.data;

    const limitedTitle = (title, limit = 17) => {
        const newTitle = [];

        if (title.length > limit) {
            title.split(' ').reduce((acc, cur) => {
                if (acc + cur.length <= limit) {
                    newTitle.push(cur);
                }
                return acc + cur.length;
            }, 0);
            return `${newTitle.join(' ')} ...`;
        }
        return title;
    }

    return (
        <li key={recipe.recipe_id} className="my-4 bg-primary py-4 px-6 rounded-md">
            <a href={`#${recipe.recipe_id}`}>
                <div className="flex items-center justify-between">
                    <img className="w-12 h-12 rounded-full" src={recipe.image_url} alt="recipe" />
                    <div className="flex flex-col mx-2">
                        <h2 className="text-primary">{limitedTitle(recipe.title)}</h2>
                        <span className="text-sm text-primary40">{recipe.publisher}</span>
                    </div>
                    <HeartIcon className="w-6 h-6 ml-auto text-primary" />
                </div>
            </a>
        </li>
    );
};

export default RecipeList;