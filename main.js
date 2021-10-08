// let search = document.querySelector('.search');
let btn = document.querySelector('button');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    let input = document.getElementById('checking').value.replace(' ', '');
    let error = document.getElementsByClassName('error')[0];
    if (input === '') {
        error.style.display = 'block';
    }

fetch("https://api.github.com/users/" + input)
.then((res) => res.json())
.then((data) => {
    let formatDate = function(date) {
        let options = {
            year: "numeric",
            month: "short",
            day: "numeric"
        };
        return new Date(date).toLocaleDateString("en-GB", options);
    };

    let name = document.getElementById('name');
    let date = document.getElementById('date');
    let bio = document.getElementById('bio');
    let bioMobile = document.getElementById('bioMobile');
    let avatar = document.getElementById('avatar');
    let link = document.getElementById('link');
    let repos = document.getElementById('repos');
    let followers = document.getElementById('followers');
    let following = document.getElementById('following');
    let location = document.getElementById('location');
    let blog = document.getElementById('blog');
    let twitter = document.getElementById('twitter');
    let company = document.getElementById('company');

    name.innerHTML = data.name;
    // dateFormat(date, data.created_at)
    formatDate(data.created_at);
    bio.innerHTML = data.bio === null ? 'This profile has no bio' : date.bio;
    bioMobile.innerHTML = data.bio === null ? 'This profile has no bio' : date.bioMobile;
    avatar.setAttribute('src', data.avatar_url);
    link.innerHTML = data.login;
    repos.innerHTML = data.public_repos;
    followers.innerHTML = data.followers;
    following.innerHTML = data.following;
    location.innerHTML = data.location;
    if (data.location === null) {
        location.innerHTML = "Not Available"
        location.style.opacity = "0.5";
        location.style.textDecoration = "none";
        location.style.cursor = "default";
    };
    blog.innerHTML = data.blog;
    if (data.blog === '') {
      blog.innerHTML = 'Not Available'
        blog.style.opacity = "0.5";
        blog.style.textDecoration = "none";
        blog.style.cursor = "default";
    };
    twitter.innerHTML = data.twitter;
    if (data.twitter_username === null) {
        twitter.innerHTML = 'Not Available';
        twitter.style.opacity = "0.5";
        twitter.style.textDecoration = "none";
        twitter.style.cursor = "default";
    };
    company.innerHTML = data.company;
    if (data.company === null) {
        company.innerHTML = "Not Available"
        company.style.opacity = "0.5";
        company.style.textDecoration = "none";
        company.style.cursor = "default";
    };

});
});




