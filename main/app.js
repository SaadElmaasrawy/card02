/* Start Of q1 */
var i = true;

$('.q1').click(function (e) { 

    if (i == true) {
        $(this).addClass('active');
        $(this).children().addClass('head-active');
        var s1 = '<br><p class="s">You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.</p>';
        $(this).append(s1);
        i=false;
    } else {
        $(this).removeClass('active');
        $(this).children().removeClass('head-active');
        $(this).find('br').remove();
        $(this).find('.s').remove();
        i=true;
    }   
});

/*  End Of q1 */

/*  Start of q2 */

$('.q2').click(function () { 

    if (i == true) {
        $(this).addClass('active');
        $(this).children().addClass('head-active');
        var s1 = '<br><p class="s">No more than 2GB. All files in your account must fit your allotted storage space.</p>';
        $(this).append(s1);
        i=false;
    } else {
        $(this).removeClass('active');
        $(this).children().removeClass('head-active');
        $(this).find('br').remove();
        $(this).find('.s').remove();
        i=true;
    }   
});

/* End Of q2 */

/* Start Of q3 */

$('.q3').click(function () { 

    if (i == true) {
        $(this).addClass('active');
        $(this).children().addClass('head-active');
        var s1 = '<br><p class="s">Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.</p>';
        $(this).append(s1);
        i=false;
    } else {
        $(this).removeClass('active');
        $(this).children().removeClass('head-active');
        $(this).find('br').remove();
        $(this).find('.s').remove();
        i=true;
    }   
});

/* Start Of q4 */

$('.q4').click(function () { 

    if (i == true) {
        $(this).addClass('active');
        $(this).children().addClass('head-active');
        var s1 = '<br><p class="s">Yes! Send us a message and we’ll process your request no questions asked.</p>';
        $(this).append(s1);
        i=false;
    } else {
        $(this).removeClass('active');
        $(this).children().removeClass('head-active');
        $(this).find('br').remove();
        $(this).find('.s').remove();
        i=true;
    }   
});

/* End Of q4 */

/* Start Of q5 */

$('.q5').click(function () { 

    if (i == true) {
        $(this).addClass('active');
        $(this).children().addClass('head-active');
        var s1 = '<br><p class="s">Chat and email support is available 24/7. Phone lines are open during normal business hours.</p>';
        $(this).append(s1);
        i=false;
    } else {
        $(this).removeClass('active');
        $(this).children().removeClass('head-active');
        $(this).find('br').remove();
        $(this).find('.s').remove();
        i=true;
    }   
});

/* End Of q5 */


