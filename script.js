//your code here
// An array of band names
let bandNames = ['The Beatles', 'Nirvana', 'Red Hot Chili Peppers', 'Metallica', 'Foo Fighters'];

// Function to sort band names without articles
function sortBandNames(bandNames) {
  // Array of articles to exclude
  const articles = ['a', 'an', 'the'];

  // Custom comparison function
  function compare(a, b) {
    // Remove articles from band names for comparison
    const bandNameA = removeArticles(a);
    const bandNameB = removeArticles(b);

    // Use localeCompare for lexicographic comparison
    return bandNameA.localeCompare(bandNameB);
  }

  // Function to remove articles from a band name
  function removeArticles(bandName) {
    // Split the band name into words
    const words = bandName.split(' ');

    // Filter out articles from the words array
    const filteredWords = words.filter(word => !articles.includes(word.toLowerCase()));

    // Join the filtered words back into a string
    return filteredWords.join(' ');
  }

  // Sort the band names using the custom comparison function
  const sortedBandNames = bandNames.sort(compare);

  // Return the sorted band names
  return sortedBandNames;
}

// Sort the band names
const sortedBandNames = sortBandNames(bandNames);

// Get the ul element with id 'band'
const ulElement = document.getElementById('band');

// Clear any existing content inside the ul element
ulElement.innerHTML = '';

// Loop through the sorted band names and create li elements
sortedBandNames.forEach(bandName => {
  const liElement = document.createElement('li');
  liElement.textContent = bandName;
  ulElement.appendChild(liElement);
});


