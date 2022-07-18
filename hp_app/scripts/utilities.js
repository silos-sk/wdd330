export function getJSON(url) {
    return fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                return response.json();
            }
        })
        .catch(function(error) {
            console.log(error);
        });
}

// Generate random key number
export function getRandKey(data) {
    let randKey = parseInt(Math.floor(Math.random() * data.length));
    return randKey;
  }

export function toMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);
  
    return date.toLocaleString('en-US', {
      month: 'long',
    });
  }

export function house(color, className) {
    var elements = document.getElementsByClassName(className); // get all elements
    for(var i = 0; i < elements.length; i++){
      elements[i].style.backgroundColor = color;
      elements[i].style.borderColor = color;
    }
  }