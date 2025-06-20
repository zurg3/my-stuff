document.getElementById('main').hidden = false;

const imdb_base_link = 'https://www.imdb.com';

function get_last_ul(ul_index) {
  return document.getElementsByTagName('ul')[document.getElementsByTagName('ul').length - ul_index];
}

function find_item() {
  const imdb_id = document.getElementById('imdb_id').value;
  const imdb_item_type = imdb_id.slice(0, 2);

  const imdb_title_link = `${imdb_base_link}/title`;
  const imdb_review_link = `${imdb_base_link}/review`;
  const imdb_name_link = `${imdb_base_link}/name`;
  const imdb_company_link = `${imdb_base_link}/company`;
  const imdb_news_link = `${imdb_base_link}/news`;
  const imdb_event_link = `${imdb_base_link}/event`;
  const imdb_user_link = `${imdb_base_link}/user`;
  const imdb_list_link = `${imdb_base_link}/list`;
  const imdb_gallery_link = `${imdb_base_link}/gallery`;
  const imdb_video_link = `${imdb_base_link}/video`;
  const imdb_interest_link = `${imdb_base_link}/interest`;

  const api_key = '3c5677f8';

  if (imdb_item_type === 'tt') {
    const json_url = `https://www.omdbapi.com/?apikey=${api_key}&i=${imdb_id}`;

    $.getJSON(json_url, function(json_data) {
      const movie_title = `${json_data.Title} (${json_data.Year})`;
      const movie_rating = json_data.imdbRating;
      const movie_votes = json_data.imdbVotes;

      //console.log(json_url);

      document.title = movie_title;

      document.body.innerHTML = `<h3><a href="${imdb_title_link}/${imdb_id}/">${movie_title}</a></h3>`;
      document.body.innerHTML += `<p>★ ${movie_rating}/10 (${movie_votes} votes)</p>`;

      document.body.innerHTML += '<h4>Details</h4>';
        document.body.innerHTML += '<ul></ul>';
          get_last_ul(1).innerHTML += `<li><a href="${imdb_title_link}/${imdb_id}/fullcredits">Full cast and crew</a></li>`;
          get_last_ul(1).innerHTML += `<li><a href="${imdb_title_link}/${imdb_id}/releaseinfo">Release dates</a></li>`;
          get_last_ul(1).innerHTML += `<li><a href="${imdb_title_link}/${imdb_id}/companycredits">Company credits</a></li>`;
          get_last_ul(1).innerHTML += `<li><a href="${imdb_title_link}/${imdb_id}/locations">Filming and production</a></li>`;
          get_last_ul(1).innerHTML += `<li><a href="${imdb_title_link}/${imdb_id}/technical">Technical specs</a></li>`;
      document.body.innerHTML += '<h4>Storyline</h4>';
        document.body.innerHTML += '<ul></ul>';
          get_last_ul(1).innerHTML += `<li><a href="${imdb_title_link}/${imdb_id}/taglines">Taglines</a></li>`;
          get_last_ul(1).innerHTML += `<li><a href="${imdb_title_link}/${imdb_id}/plotsummary">Plot summary</a></li>`;
          get_last_ul(1).innerHTML += `<li><a href="${imdb_title_link}/${imdb_id}/synopsis">Synopsis</a></li>`;
          get_last_ul(1).innerHTML += `<li><a href="${imdb_title_link}/${imdb_id}/keywords">Plot keywords</a></li>`;
          get_last_ul(1).innerHTML += `<li><a href="${imdb_title_link}/${imdb_id}/parentalguide">Parents guide</a></li>`;
      document.body.innerHTML += '<h4>Related items</h4>';
        document.body.innerHTML += '<ul></ul>';
          get_last_ul(1).innerHTML += `<li><a href="${imdb_title_link}/${imdb_id}/news">News</a></li>`;
          get_last_ul(1).innerHTML += `<li><a href="${imdb_base_link}/showtimes/title/${imdb_id}/">Showtimes</a></li>`;
          get_last_ul(1).innerHTML += `<li><a href="${imdb_title_link}/${imdb_id}/externalsites">External sites</a></li>`;
      document.body.innerHTML += '<h4>Opinion</h4>';
        document.body.innerHTML += '<ul></ul>';
          get_last_ul(1).innerHTML += `<li><a href="${imdb_title_link}/${imdb_id}/awards">Awards</a></li>`;
          get_last_ul(1).innerHTML += `<li><a href="${imdb_title_link}/${imdb_id}/faq">FAQ</a></li>`;
          get_last_ul(1).innerHTML += `<li><a href="${imdb_title_link}/${imdb_id}/reviews">User reviews</a></li>`;
          get_last_ul(1).innerHTML += `<li><a href="${imdb_title_link}/${imdb_id}/ratings">User ratings</a></li>`;
          get_last_ul(1).innerHTML += `<li><a href="${imdb_title_link}/${imdb_id}/externalreviews">External reviews</a></li>`;
          get_last_ul(1).innerHTML += `<li><a href="${imdb_title_link}/${imdb_id}/criticreviews">Metacritic reviews</a></li>`;
      document.body.innerHTML += '<h4>Photo and video</h4>';
        document.body.innerHTML += '<ul></ul>';
          get_last_ul(1).innerHTML += `<li><a href="${imdb_title_link}/${imdb_id}/mediaindex">Photo gallery</a><ul></ul>`;
            get_last_ul(1).innerHTML += `<li><a href="${imdb_title_link}/${imdb_id}/mediaindex?contentTypes=still_frame">Still frame</a></li>`;
            get_last_ul(1).innerHTML += `<li><a href="${imdb_title_link}/${imdb_id}/mediaindex?contentTypes=poster">Poster</a></li>`;
            get_last_ul(1).innerHTML += `<li><a href="${imdb_title_link}/${imdb_id}/mediaindex?contentTypes=product">Product</a></li>`;
            get_last_ul(1).innerHTML += `<li><a href="${imdb_title_link}/${imdb_id}/mediaindex?contentTypes=behind_the_scenes">Behind the scenes</a></li>`;
            get_last_ul(1).innerHTML += `<li><a href="${imdb_title_link}/${imdb_id}/mediaindex?contentTypes=event">Event</a></li>`;
            get_last_ul(1).innerHTML += `<li><a href="${imdb_title_link}/${imdb_id}/mediaindex?contentTypes=publicity">Publicity</a></li>`;
          document.body.innerHTML += '</li>';
          get_last_ul(2).innerHTML += `<li><a href="${imdb_title_link}/${imdb_id}/videogallery">Trailers and videos</a></li>`;
      document.body.innerHTML += '<h4>Did you know?</h4>';
        document.body.innerHTML += '<ul></ul>';
          get_last_ul(1).innerHTML += `<li><a href="${imdb_title_link}/${imdb_id}/trivia">Trivia</a></li>`;
          get_last_ul(1).innerHTML += `<li><a href="${imdb_title_link}/${imdb_id}/goofs">Goofs</a></li>`;
          get_last_ul(1).innerHTML += `<li><a href="${imdb_title_link}/${imdb_id}/crazycredits">Crazy credits</a></li>`;
          get_last_ul(1).innerHTML += `<li><a href="${imdb_title_link}/${imdb_id}/quotes">Quotes</a></li>`;
          get_last_ul(1).innerHTML += `<li><a href="${imdb_title_link}/${imdb_id}/alternateversions">Alternate versions</a></li>`;
          get_last_ul(1).innerHTML += `<li><a href="${imdb_title_link}/${imdb_id}/movieconnections">Connections</a></li>`;
          get_last_ul(1).innerHTML += `<li><a href="${imdb_title_link}/${imdb_id}/soundtrack">Soundtracks</a></li>`;
      document.body.innerHTML += '<h4>TV</h4>';
        document.body.innerHTML += '<ul></ul>';
          get_last_ul(1).innerHTML += `<li><a href="${imdb_title_link}/${imdb_id}/episodes">Episodes list</a></li>`;
          //get_last_ul(1).innerHTML += `<li><a href="${imdb_title_link}/${imdb_id}/tvschedule">TV schedule</a></li>`;
      document.body.innerHTML += '<h4>Related items</h4>';
        document.body.innerHTML += '<ul></ul>';
          get_last_ul(1).innerHTML += `<li><a href="${imdb_base_link}/lists/${imdb_id}/">Related lists</a></li>`;
          get_last_ul(1).innerHTML += `<li><a href="https://pro.imdb.com/title/${imdb_id}/">IMDbPro</a></li>`;
          get_last_ul(1).innerHTML += `<li><a href="https://www.boxofficemojo.com/title/${imdb_id}/">Box Office Mojo</a></li>`;
          get_last_ul(1).innerHTML += `<li><a href="${imdb_title_link}/${imdb_id}/reference">Reference view</a></li>`;

      document.body.innerHTML += '<hr><p><a href="imdb_links.html">Back</a></p>';
    });
  }
  else if (imdb_item_type === 'rw') {
    document.title = 'IMDb Review';

    document.body.innerHTML = `<h3><a href="${imdb_review_link}/${imdb_id}/">Review</a></h3>`;
  }
  else if (imdb_item_type === 'nm') {
    document.title = 'IMDb Name';

    document.body.innerHTML = `<h3><a href="${imdb_name_link}/${imdb_id}/">Name</a></h3>`;
    document.body.innerHTML += '<h4>Personal details</h4>';
      document.body.innerHTML += '<ul></ul>';
        get_last_ul(1).innerHTML += `<li><a href="${imdb_name_link}/${imdb_id}/bio">Biography</a></li>`;
        get_last_ul(1).innerHTML += `<li><a href="${imdb_name_link}/${imdb_id}/otherworks">Other works</a></li>`;
        get_last_ul(1).innerHTML += `<li><a href="${imdb_name_link}/${imdb_id}/publicity">Publicity listings</a></li>`;
    document.body.innerHTML += '<h4>Filmography</h4>';
      document.body.innerHTML += '<ul></ul>';
        get_last_ul(1).innerHTML += `<li><a href="${imdb_base_link}/search/title/?role=${imdb_id}">by Popularity</a></li>`;
        get_last_ul(1).innerHTML += `<li><a href="${imdb_base_link}/search/title/?role=${imdb_id}&sort=alpha,asc">by Alphabetical</a></li>`;
        get_last_ul(1).innerHTML += `<li><a href="${imdb_base_link}/search/title/?role=${imdb_id}&sort=user_rating,desc">by IMDb Rating</a></li>`;
        get_last_ul(1).innerHTML += `<li><a href="${imdb_base_link}/search/title/?role=${imdb_id}&sort=num_votes,desc">by Number Of Votes</a></li>`;
        get_last_ul(1).innerHTML += `<li><a href="${imdb_base_link}/search/title/?role=${imdb_id}&sort=release_date,desc">by Release Date</a></li>`;
        get_last_ul(1).innerHTML += `<li><a href="${imdb_base_link}/search/title/?role=${imdb_id}&sort=runtime,desc">by Runtime</a></li>`;
        get_last_ul(1).innerHTML += `<li><a href="${imdb_base_link}/search/title/?role=${imdb_id}&sort=year,desc">by Year</a></li>`;
        get_last_ul(1).innerHTML += `<li><a href="${imdb_name_link}/${imdb_id}/#credits">All credits</a></li>`;
    document.body.innerHTML += '<h4>Did you know?</h4>';
      document.body.innerHTML += '<ul></ul>';
        get_last_ul(1).innerHTML += `<li><a href="${imdb_name_link}/${imdb_id}/bio#overview">Overview</a></li>`;
        get_last_ul(1).innerHTML += `<li><a href="${imdb_name_link}/${imdb_id}/bio#quotes">Personal quotes</a></li>`;
        get_last_ul(1).innerHTML += `<li><a href="${imdb_name_link}/${imdb_id}/bio#trivia">Trivia</a></li>`;
        get_last_ul(1).innerHTML += `<li><a href="${imdb_name_link}/${imdb_id}/bio#trademark">Trademark</a></li>`;
        get_last_ul(1).innerHTML += `<li><a href="${imdb_name_link}/${imdb_id}/faq">FAQ</a></li>`;
    document.body.innerHTML += '<h4>Photo and video</h4>';
      document.body.innerHTML += '<ul></ul>';
        get_last_ul(1).innerHTML += `<li><a href="${imdb_name_link}/${imdb_id}/mediaindex">Photo gallery</a></li>`;
        get_last_ul(1).innerHTML += `<li><a href="${imdb_name_link}/${imdb_id}/videogallery">Trailers and videos</a></li>`;
    document.body.innerHTML += '<h4>Opinion</h4>';
      document.body.innerHTML += '<ul></ul>';
        get_last_ul(1).innerHTML += `<li><a href="${imdb_name_link}/${imdb_id}/awards">Awards</a></li>`;
    document.body.innerHTML += '<h4>Related items</h4>';
      document.body.innerHTML += '<ul></ul>';
        get_last_ul(1).innerHTML += `<li><a href="${imdb_name_link}/${imdb_id}/news">News</a></li>`;
        get_last_ul(1).innerHTML += `<li><a href="${imdb_name_link}/${imdb_id}/externalsites">External sites</a></li>`;
        get_last_ul(1).innerHTML += `<li><a href="${imdb_base_link}/lists/${imdb_id}/">Related lists</a></li>`;
        get_last_ul(1).innerHTML += `<li><a href="${imdb_base_link}/seen/${imdb_id}/">How much have you seen?</a></li>`;
        get_last_ul(1).innerHTML += `<li><a href="https://pro.imdb.com/name/${imdb_id}/">IMDbPro</a></li>`;
  }
  else if (imdb_item_type === 'co') {
    document.title = 'IMDb Company';

    document.body.innerHTML = `<h3><a href="${imdb_company_link}/${imdb_id}/">Company</a></h3>`;
  }
  else if (imdb_item_type === 'ni') {
    document.title = 'IMDb News';

    document.body.innerHTML = `<h3><a href="${imdb_news_link}/${imdb_id}/">News</a></h3>`;
  }
  else if (imdb_item_type === 'ev') {
    document.title = 'IMDb Event';

    document.body.innerHTML = `<h3><a href="${imdb_event_link}/${imdb_id}/">Event</a></h3>`;
  }
  else if (imdb_item_type === 'ur') {
    document.title = 'IMDb User';

    document.body.innerHTML = `<h3><a href="${imdb_user_link}/${imdb_id}/">User</a></h3>`;
    document.body.innerHTML += '<ul></ul>';
      get_last_ul(1).innerHTML += `<li><a href="${imdb_user_link}/${imdb_id}/lists">Lists</a></li>`;
      get_last_ul(1).innerHTML += `<li><a href="${imdb_user_link}/${imdb_id}/checkins">Checkins</a></li>`;
      get_last_ul(1).innerHTML += `<li><a href="${imdb_user_link}/${imdb_id}/ratings">Ratings</a></li>`;
      get_last_ul(1).innerHTML += `<li><a href="${imdb_user_link}/${imdb_id}/watchlist">Watchlist</a></li>`;
      get_last_ul(1).innerHTML += `<li><a href="${imdb_user_link}/${imdb_id}/reviews">Reviews</a></li>`;
      get_last_ul(1).innerHTML += `<li><a href="${imdb_user_link}/${imdb_id}/badges">Badges</a></li>`;
  }
  else if (imdb_item_type === 'ls') {
    document.title = 'IMDb List';

    document.body.innerHTML = `<h3><a href="${imdb_list_link}/${imdb_id}/">List</a></h3>`;
    document.body.innerHTML += '<ul></ul>';
      get_last_ul(1).innerHTML += `<li><a href="${imdb_list_link}/${imdb_id}/?view=grid">Grid view</a></li>`;
      get_last_ul(1).innerHTML += `<li><a href="${imdb_list_link}/${imdb_id}/?view=detailed">Detailed view</a></li>`;
      get_last_ul(1).innerHTML += `<li><a href="${imdb_list_link}/${imdb_id}/?view=compact">Compact view</a></li>`;
  }
  else if (imdb_item_type === 'rg') {
    document.title = 'IMDb Gallery';

    document.body.innerHTML = `<h3><a href="${imdb_gallery_link}/${imdb_id}/">Gallery</a></h3>`;
  }
  else if (imdb_item_type === 'vi') {
    document.title = 'IMDb Video';

    document.body.innerHTML = `<h3><a href="${imdb_video_link}/${imdb_id}/">Video</a></h3>`;
  }
  else if (imdb_item_type === 'in') {
    document.title = 'IMDb Interest';

    document.body.innerHTML = `<h3><a href="${imdb_interest_link}/${imdb_id}/">Interest</a></h3>`;
  }
  else {
    alert('Invalid ID');
  }

  if (imdb_item_type !== 'tt') {
    document.body.innerHTML += '<hr><p><a href="imdb_links.html">Back</a></p>';
  }
}

function find_year() {
  const imdb_year = document.getElementById('imdb_year').value;

  document.title = imdb_year;

  document.body.innerHTML = `<h3><a href="${imdb_base_link}/year/${imdb_year}/">Open titles for this year</a></h3>`;

  document.body.innerHTML += '<hr><p><a href="imdb_links.html">Back</a></p>';
}

function add_name() {
  const new_input_field = document.createElement('p');
  const input_fields_count = document.getElementsByClassName('name_search_input_field').length;
  const new_input_field_num = input_fields_count + 1;

  new_input_field.className = 'name_search_input_field';

  new_input_field.innerHTML = `Name ${new_input_field_num} ID<br><input type="text" size="10" autocomplete="off"> <input type="button" value="[X]" onclick="remove_name(this)">`;

  document.getElementsByClassName('name_search_input_fields')[0].append(new_input_field);
}

function remove_name(input) {
  document.getElementsByClassName('name_search_input_fields')[0].removeChild(input.parentNode);
}

function search_name() {
  let roles_query = [];
  let title_type_query = [];

  for (let i = 0; i < document.getElementsByClassName('name_search_input_field').length; i++) {
    roles_query.push(document.getElementsByClassName('name_search_input_field')[i].children[1].value);
  }

  for (let i = 0; i < document.getElementsByClassName('name_search_title_type').length; i++) {
    if (document.getElementsByClassName('name_search_title_type')[i].checked) {
      title_type_query.push(document.getElementsByClassName('name_search_title_type')[i].value);
    }
  }

  if ((roles_query.length > 0 && title_type_query.length > 0) && !roles_query.includes('')) {
    roles_query = roles_query.join();
    title_type_query = title_type_query.join();

    document.title = 'IMDb Collaborations Search';

    document.body.innerHTML = `<h3><a href="${imdb_base_link}/search/title/?title_type=${title_type_query}&role=${roles_query}">Open search results</a></h3>`;

    document.body.innerHTML += '<hr><p><a href="imdb_links.html">Back</a></p>';
  }
}

function add_title() {
  const new_input_field = document.createElement('p');
  const input_fields_count = document.getElementsByClassName('title_search_input_field').length;
  const new_input_field_num = input_fields_count + 1;

  new_input_field.className = 'title_search_input_field';

  new_input_field.innerHTML = `Title ${new_input_field_num} ID<br><input type="text" size="10" autocomplete="off"> <input type="button" value="[X]" onclick="remove_title(this)">`;

  document.getElementsByClassName('title_search_input_fields')[0].append(new_input_field);
}

function remove_title(input) {
  document.getElementsByClassName('title_search_input_fields')[0].removeChild(input.parentNode);
}

function search_title() {
  let roles_query = [];

  for (let i = 0; i < document.getElementsByClassName('title_search_input_field').length; i++) {
    roles_query.push(document.getElementsByClassName('title_search_input_field')[i].children[1].value);
  }

  if (roles_query.length > 0 && !roles_query.includes('')) {
    roles_query = roles_query.join();

    document.title = 'IMDb Collaborations Search';

    document.body.innerHTML = `<h3><a href="${imdb_base_link}/search/name/?roles=${roles_query}">Open search results</a></h3>`;

    document.body.innerHTML += '<hr><p><a href="imdb_links.html">Back</a></p>';
  }
}
