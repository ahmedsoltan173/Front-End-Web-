/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();

//personal Api key 
let baseURL = 'http://api.openweathermap.org/data/2.5/forecast?zip=';
let apiKey = '&appid=94b71a881f6af6170c732ce5b3795850';


//event listener
document.getElementById('generate').addEventListener('click', performAction);

function performAction(event) {
    const zipCode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    getWeather(baseURL, zipCode, apiKey)

    .then(function(data) {
        console.log(data);

        //add data by post request
        //postData('/add', { date: data.list[0].main.date, temp: data.list[0].main.temp, content: feelings })
        postData('/add', { date: newDate, temp: data.list[0].main.temp, content: feelings })

        updateUI();
    })
};

/**function to get web API data**/

const getWeather = async(baseURL, zip, key) => {
    const res = await fetch(baseURL + zip + key)

    try {
        const data = await res.json();
        return data;
    } catch (err) {
        console.log('error', err)
    }
}

/**function to POST data */

const postData = async(url = '', data = {}) => {
    console.log(data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const newDat = await response.json();
        console.log(newData);
        return newData;
    } catch (err) {
        console.log('Error', err);
    }
}

/*function to get project data*/
const updateUI = async() => {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        let bbd = document.getElementById('date').innerHTML = `Date: ${allData[0].date}`;
        console.log(bbd);
        //document.getElementById('date').innerHTML = `Date: ${data}`;
        document.getElementById('temp').innerHTML = `Temperature: ${allData[0].temp}`;
        document.getElementById('content').innerHTML = `I Feel: ${allData[0].content}`;

    } catch (error) {
        console.log('error', error)

    }
}