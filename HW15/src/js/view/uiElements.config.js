const form = document.forms['newsControlForm'];
const countrySelect = document.forms['newsControlForm']['country'];
const categorySelect = document.forms['newsControlForm']['category'];
const newsContainer = document.querySelector('.news-wrap .row');
const searchInput = document.forms['newsControlForm']['search'];

export{form, countrySelect, categorySelect, newsContainer, searchInput}