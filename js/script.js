
// JavaScript Document

// BLOCK: FB SDK initialization
window.fbAsyncInit = function() {
    // init the FB JS SDK
    FB.init({
    appId      : 1458954511014492,  // App ID from the app dashboard
    cookie     : true,              // Allowed server-side to fetch fb auth cookie
    status     : true,              // Check Facebook Login status
    xfbml      : true               // Look for social plugins on the page
    });

    // Additional initialization code such as adding Event Listeners goes here
    window.fbLoaded();
};

// Load the SDK asynchronously
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/zh_TW/sdk.js#xfbml=1&appId=1458954511014492&version=v2.0";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
//
// ENDBLOCK: FB SDK initialization


// BLOCK: Your script playground
window.fbLoaded = function(){
    // define the events when login status changed.
    FB.Event.subscribe('auth.login', function(response) {
        // when user has been logged in, this block will be triggered.
        var msg = "You're logged in.";
        $("#my-login-message").html(msg);
        console.log("Your login response:");
        console.log(response);

        // fetch the profile
        fetch_my_profile();
    });

    // define the action when user clicked the login button.
    $("#my-login-button").click(function(){
        FB.login();
    });

    var fetch_my_profile = function () {
        // Fetching profile picture from Facebook.
        FB.api('/me/picture?width=250', function(response) {
            var my_picture_url = response.data.url;    
            $("#my-profile-picture").attr('src', my_picture_url);
        });
    };
};
//
// ENDBLOCK: Your script playground
