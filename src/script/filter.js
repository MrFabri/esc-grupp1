import { FilterByTag } from './filterByTag.js';
import { FilterByType } from './filterByType.js';
import { FilterByRating } from './filterByRating.js';
import { FilterByText } from './filterByText.js';
<<<<<<< HEAD
//import { createChallenge } from './displayChallenges.js';
=======
import { displayAllRooms } from './createChallenge.js';

>>>>>>> b97db8a5512c86abd2f61b1cacf4be0fbe9ab164

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
<<<<<<< HEAD
        /* console.log(this.data + "filter"); */
        const renderer = new Renderer(this.data);
        const filterByTag = new FilterByTag();
        const filterByType = new FilterByType();
        const filterByRating = new FilterByRating();
=======
        /* const renderer = new Renderer(this.data); */
        const filterByTag = new FilterByTag();
        const filterByType = new FilterByType();
        const filerByRating = new FilterByRating();
>>>>>>> b97db8a5512c86abd2f61b1cacf4be0fbe9ab164
        const filterByText = new FilterByText();
        const filteredList = { challenges: [],};
        const filterNoMatch = document.querySelector(".filter-no-match");


        // Checks all filter elements if they are empty, if they all are empty (returning false) load all challenges
        if ( 
            filterByTag.checkDOM() ||
            filterByType.checkDOM() ||
<<<<<<< HEAD
            filterByRating.checkDOM() ||
=======
            filerByRating.checkDOM() ||
>>>>>>> b97db8a5512c86abd2f61b1cacf4be0fbe9ab164
            filterByText.checkDOM() 
            ){
            


            this.data.challenges.forEach(challenge => {
                // Checks for each filter if the challenge matches the filter (returns true) or if all the DOM elements for that filter is empty
                if (
                    (filterByTag.filter(challenge) || !filterByTag.checkDOM()) &&
                    (filterByType.filter(challenge) || !filterByType.checkDOM()) &&
<<<<<<< HEAD
                    (filterByRating.filter(challenge) || !filterByRating.checkDOM()) &&
=======
                    (filerByRating.filter(challenge) || !filerByRating.checkDOM()) &&
>>>>>>> b97db8a5512c86abd2f61b1cacf4be0fbe9ab164
                    (filterByText.filter(challenge) || !filterByText.checkDOM())
                    ) {
                    
                    filteredList.challenges.push(challenge);    
                    //createChallenge(challenge);
                }
            })

            // If any challenge got through the filter, filteredList.length will have at least one challenge and will render that challenge
            if (filteredList.challenges.length > 0 ){
    
                filterNoMatch.innerText = "";
                displayAllRooms(filteredList, "c");

            } else {
<<<<<<< HEAD
                //document.querySelector(".rooms").innerHTML = "";
                alert("No challenges matches your filter");
=======

                document.querySelector(".challenges-list").innerHTML = "";
                filterNoMatch.innerText = "No challenges matches your filter";
>>>>>>> b97db8a5512c86abd2f61b1cacf4be0fbe9ab164
            }
        
        } else {
            
            this.data.challenges.forEach(challenge => {

                filteredList.challenges.push(challenge);  
            });

            displayAllRooms(filteredList, "c");

        }


    }

<<<<<<< HEAD
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
=======
}
>>>>>>> b97db8a5512c86abd2f61b1cacf4be0fbe9ab164
