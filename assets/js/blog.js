var blogPosts = [];

var blogHandler = function(response) {
    console.log(response);
    blogPosts = response.response.posts;

    blogPosts.forEach(function(post) {

        addBlog(post);
    });
};

var addBlog = function(post) {
    var $blog = $('<div></div>').addClass('news-v3 bg-color-white margin-bottom-30 blog');
    var $blogItem = $('<div></div>').addClass(' blog-item');

    var $blogInfo = $('<ul></ul>').addClass("list-inline posted-info");
    $blogInfo.html('<li>Posted <span class="blog-date">' + post.date + '</span></li>');

    var $blogTitle = $('<h2></h2>').addClass('blog-title').text(post.title);
    console.log(post.title);

    var $blogBody = $('<div></div>').addClass('blog-body');
    $blogBody.html(post.body);
    if (post.photos) {
        post.photos.forEach(function(photo) {
            var $img = $('<img></img>').addClass('img img-responsive').attr('src',photo.original_size.url);
            $blogBody.prepend($img);
        });

    }
    if (post.caption) {
        $blogBody.append($(post.caption));
    }

    $blogItem.append($blogInfo);
    $blogItem.append($blogTitle);
    $blogItem.append($blogBody);
    $blog.append($blogItem);
    $blog.append('<hr>');
    $blog.appendTo($('.blog-container'));


};

var filterBlog = function() {

    $('.blog-filter').on('click', 'h3', function(e) {
        var tag = $(this).data('name');
        $('.blog-container').html('');

        var filteredPosts = blogPosts.filter(function(post) {
            return post.tags.indexOf(tag) !== -1;
        }).forEach(function(post) {
            addBlog(post);
        });
    });
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

    filterBlog();

});
