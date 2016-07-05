var blogHandler = function(response) {
    var posts = response.response.posts;
    console.log(posts);
    posts.forEach(function(post) {
    	addBlog(post);
    });
};

var addBlog = function(post) {
    var $blog = $('<div></div>').addClass('news-v3 bg-color-white margin-bottom-30 blog');
    var $blogItem = $('<div></div>').addClass('news-v3-in blog-item');

    var $blogInfo = $('<ul></ul>').addClass("list-inline posted-info");
    $blogInfo.html('<li>Posted <span class="blog-date">' + post.date + '</span></li>');

    var $blogTitle = $('<h2></h2>').addClass('blog-title').text(post.title);
    console.log(post.title);

    var $blogBody = $('<div></div>').addClass('blog-body');
    $blogBody.html(post.body);

    $blogItem.append($blogInfo);
    $blogItem.append($blogTitle);
    $blogItem.append($blogBody);
    $blog.append($blogItem);
    $blog.append('<hr>');
    $blog.appendTo($('.blog-container'));


};

$(document).ready(function() {

    $.ajax({
        url: 'http://api.tumblr.com/v2/blog/tomorrowwater.tumblr.com/posts?api_key=gWoyPyVyISkFbzKKqsRKI0NUY1ghPotksj6UDGyxdqJSqGUOaG&tag=' + tag,
        type: "GET",
        crossDomain: true,
        dataType: 'jsonp',
        success: blogHandler,
        error: function(xhr, status) {
            console.log("error");
        }
    });
});
