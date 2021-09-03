
import { getPokedex } from '../utils/utils.js';
//Getting any pokemon from local storage:
const pokedex = getPokedex();
//Don't kow what this is doing:
const arrayOfNames = pokedex
    .filter(item => item.caught > 0)
    .map(({ name }) => name);
//show me the caught pokemon only:
const arrayOfCaught = pokedex
    .filter(item => item.caught > 0)
    .map(({ caught }) => caught);
//Show me the pokemon that have been seen
const arrayOfSeen = pokedex
    .filter(item => item.seen > 0)
    .map(({ seen }) => seen);

console.log(arrayOfNames);
console.log(arrayOfCaught);
console.log(arrayOfSeen);
//mychart.js:
const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    //eslint-disble-line
    type: 'bar',
    data: {
        labels: arrayOfNames,
        datasets: [{
            label: '# of Caught',
            data: arrayOfCaught,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },
        {
            label: '# of Seen',
            data: arrayOfSeen,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});