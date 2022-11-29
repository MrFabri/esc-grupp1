import { MyAPI } from './myApi.js';
import { Renderer } from './myRenderer.js';
import { FilterByTag } from './filterByTag.js';
import { FilterByType } from './filterByType.js';
import { RenderRating } from './renderByRating.js';
import { FilterByRating } from './filterByRating.js';
import { FilterByText } from './filterByText.js';
//import { createChallenge } from './displayChallenges.js';

export class Filter {

    constructor (data) {
        this.data = data;
        console.log(this.data + "constructoir");
    }

    /* 
        A filter method that goes through all challenges
        for each challenge it checkes all the filters
            if that challenge passes all the filters it adds it to a new array of challenges

        Checks to see if the new array is empty, meaning that no challenge matches all the filters
            prints out an alert (to be changes for a correct displaying error message) is it is empty
            otherwise it send the list of all challenges that passed to be renderd
    
    */

    filter () {
        /* console.log(this.data + "filter"); */
        const renderer = new Renderer(this.data);
        const filterByTag = new FilterByTag();
        const filterByType = new FilterByType();
        const filterByRating = new FilterByRating();
        const filterByText = new FilterByText();
        const filteredList = { challenges: [],};

        // Checks all filter elements if they are empty, if they all are empty (returning false) load all challenges
        if ( 
            filterByTag.checkDOM() ||
            filterByType.checkDOM() ||
            filterByRating.checkDOM() ||
            filterByText.checkDOM() 
            ){
            


            this.data.challenges.forEach(challenge => {
                // Checks for each filter if the challenge matches the filter (returns true) or if all the DOM elements for that filter is empty
                if (
                    (filterByTag.filter(challenge) || !filterByTag.checkDOM()) &&
                    (filterByType.filter(challenge) || !filterByType.checkDOM()) &&
                    (filterByRating.filter(challenge) || !filterByRating.checkDOM()) &&
                    (filterByText.filter(challenge) || !filterByText.checkDOM())
                    ) {

                    filteredList.challenges.push(challenge);    
                    //createChallenge(challenge);
                }
            })

            // If any challenge got through the filter, filteredList.length will have at least one challenge and will render that challenge
            if (filteredList.challenges.length > 0 ){

                renderer.renderRooms(filteredList);

            } else {
                //document.querySelector(".rooms").innerHTML = "";
                alert("No challenges matches your filter");
            }
        
        } else {
            
            this.data.challenges.forEach(challenge => {
                filteredList.challenges.push(challenge);
                renderer.renderRooms(filteredList);
            });
        }

    }

}

class Init {
    async init () {
        const api = new MyAPI();
        const data = await api.getData();
        const renderer = new Renderer();
        const rating = new RenderRating();

        
        //renderer.renderRooms(data);
        renderer.renderTags(data);
        renderer.renderType(data);
        /* renderer.renderRating(data); */

        rating.render(data);

    };
}

const start = new Init();
start.init();