// Array of band names
let bandNames = ['The Beatles', 'Nirvana', 'Red Hot Chili Peppers', 'Aerosmith'];

// Function to remove articles from band names
function removeArticles(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

// Sort the band names in lexicographic order without articles
bandNames.sort((a, b) => {
  const nameA = removeArticles(a);
  const nameB = removeArticles(b);
  return nameA.localeCompare(nameB);
});

// Get the <ul> element
const ulElement = document.querySelector('ul');

// Add the sorted band names to the <ul> element
bandNames.forEach(name => {
  const liElement = document.createElement('li');
  liElement.textContent = name;
  ulElement.appendChild(liElement);
});
