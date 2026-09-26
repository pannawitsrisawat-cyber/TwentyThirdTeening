<!DOCTYPE html>
<html>
    <head>
        <title>ROBLOX</title>
        
        <!-- Updated CSS Links to match your folder structure (CSS/Base/CSS/) -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://twentythirdteening.onrender.com/Landing/Animated/css/fetch.css"/>
        <link rel="stylesheet" href="https://twentythirdteening.onrender.com/Landing/Animated/css/banner-styles.css"/>
        <link rel="stylesheet" href="https://twentythirdteening.onrender.com/Landing/Animated/css/iconochive.css""/>
        <link rel="stylesheet" href="https://twentythirdteening.onrender.com/Landing/Animated/css/Navigation.css""/>
        <link rel="stylesheet" href="https://twentythirdteening.onrender.com/Landing/Animated/css/1/fetch.css"/>
        <link rel="stylesheet" href="https://twentythirdteening.onrender.com/Landing/Animated/css/1.css"/>
        <link rel="stylesheet" href="https://twentythirdteening.onrender.com/Landing/Animated/css/2.css""/>
        <link rel="stylesheet" href="https://twentythirdteening.onrender.com/Landing/Animated/css/3.css""/>
        <link rel="icon" type="image/vnd.microsoft.icon" href="/favicon.ico"/>

        <!-- jQuery and Microsoft AJAX CDN with local fallback -->
        <script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.7.2.min.js"></script>
        <script type="text/javascript">window.jQuery || document.write("<script type='text/javascript' src='/js/jquery-1.7.2.min.js'><\/script>")</script>
        <script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/4.0/1/MicrosoftAjax.js"></script>
        <script type="text/javascript">window.Sys || document.write("<script type='text/javascript' src='/js/MicrosoftAjax.js'><\/script>")</script>

        <meta http-equiv="X-UA-Compatible" content="IE=edge,requiresActiveX=true"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="author" content="ROBLOX Corporation"/>
        <meta name="description" content="User-generated MMO gaming site for kids, teens, and adults."/>
        <meta name="keywords" content="free games, online games, building games, virtual worlds, free mmo"/>
        <meta name="robots" content="all"/>
    </head>
    <body>
        <div id="Container">
            <div class="site-header">
                <div id="navigation-container">
                    <a href="/" class="btn-logo" data-se="nav-logo"></a>
                    <div id="header-login-container">
                        <div id="header-login-wrapper" class="iframe-login-signup">
                            <a id="header-signup" href="#">Sign Up</a>
                            <span id="header-or">or</span>
                            <span id="login-span">
                                <a id="header-login" class="btn-control btn-control-large" href="#">Login <span class="grey-arrow">▼</span></a>
                            </span>
                        </div>
                    </div>    
                </div>
            </div>  
            <div style="clear:both"></div>
            <div id="Body" style="width:970px">
                <script type="text/javascript">
                    var Roblox = Roblox || {};
                    Roblox.Resources = Roblox.Resources || {};
                    Roblox.Resources.AnimatedSignupFormValidator = {
                        doesntMatch: "Doesn't match",
                        requiredField: "Required",
                        tooLong: "Too long",
                        tooShort: "Too short",
                        maxValid: "Too many accounts use this email",
                        needsFourLetters: "Needs 4 letters",
                        needsTwoNumbers: "Needs 2 numbers",
                        noSpaces: "No spaces allowed",
                        weakKey: "Weak key combination.",
                        invalidName: "Can't be your character name",
                        alreadyTaken: "Already taken",
                        cantBeUsed: "Can't be used",
                        invalidBirthday: "Invalid birthday",
                        loginFieldsRequired: "Username and Password are required.",
                        loginFieldsIncorrect: "Your username or password is incorrect."
                    };
                </script>
                <style type="text/css">
                    body {
                        background: url("http://images.rbxcdn.com/437004fbc01bf6a613547a40aabde10a.jpg") repeat-x;
                        padding-top: 35px;
                    }
                    #Container {
                        background: url("http://images.rbxcdn.com/161d0d393d74c103e5f50eef988b7217.png") repeat-x;
                    }
                    .animated-tab {
                        cursor: pointer;
                    }
                </style>
                <div id="Experimental" class="ShadowedStandardBox" data-is-animated="False">
                    <div class="Content">
                        <div id="animatedHeader">
                            <div id="headerLogo"><img src="http://images.rbxcdn.com/9b792179d6034ff15284a289ffedec15.png" alt="logo"/></div>
                            <div id="headerTextTop">Join millions of builders</div>
                            <div id="headerTextBottom">and explore their creations</div>
                        </div>
                        <div id="animatedBodyWrapper">
                            <div id="animatedBody">
                                <div class="VideoContainer">
                                    <!-- Updated with public working 2013 trailer -->
                                    <iframe width="380" height="250" src="https://www.youtube.com/embed/3990OsnR6eE" frameborder="0" allowfullscreen></iframe>
                                    <div class="slogan-container">
                                        <div id="slogan">What will you build?</div>
                                    </div>
                                </div>
                                <div id="animated-wrapper" data-first-visit="True">
                                    <div class="sign-up-row">
                                        <div class="sign-up-inner-row">
                                            <span id="animated-tab-signup" class="animated-tab">Sign up</span>
                                            <span class="animated-tab">|</span>
                                            <span id="animated-tab-login" class="animated-tab">Login</span>
                                        </div>
                                    </div>
                                    
                                    <!-- LOGIN FORM POST TARGET -->
                                    <div id="animated-login" style="display: none;">
                                        <form method="post" id="login-form" action="/Login/v1">
                                            <div class="sign-up-row">
                                                <div class="sign-up-inner-row">
                                                    <span id="login-error" class="required-text error" style="display: none;"></span>
                                                </div>
                                            </div>
                                            <div class="sign-up-row">
                                                <div>
                                                    <input type="text" id="loginUsername" name="username" class="text-box text-box-large" tabindex="1" placeholder="Username"/>
                                                </div>
                                            </div>
                                            <div class="sign-up-row">
                                                <div>
                                                    <input type="password" id="loginPassword" name="password" class="text-box text-box-large" tabindex="2" placeholder="Password"/>
                                                </div>
                                            </div>
                                            <div>
                                                <button type="submit" class="btn-large btn-primary" id="login-button">Login</button>
                                            </div>
                                        </form>
                                        <br/>
                                        <div id="login-footer" class="sign-up-row">
                                            <div class="sign-up-inner-row">
                                                <a href="/Login/ResetPasswordRequest.aspx">Forgot your username/password?</a>
                                            </div>
                                            <div>
                                                Don't have an account? <a href="#" id="switch-to-signup"> Sign up</a>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- SIGNUP FORM POST TARGET -->
                                    <div id="animated-signup">
                                        <form method="post" id="signup-form" action="/Login/v1">
                                            <div class="sign-up-row">
                                                <div class="sign-up-inner-row">
                                                    <span id="birthdayGood" class="good-text" style="display: none;">OK</span> <span id="birthdayError" class="required-text error" style="display: none;"></span>
                                                    <span id="birthdayText">Birthday</span>
                                                </div>
                                                <div>
                                                    <select id="lstMonths" name="lstMonths" tabindex="1"><option selected="selected" value="0">Month</option><option value="1">January</option><option value="2">February</option><option value="3">March</option><option value="4">April</option><option value="5">May</option><option value="6">June</option><option value="7">July</option><option value="8">August</option><option value="9">September</option><option value="10">October</option><option value="11">November</option><option value="12">December</option></select>
                                                    <select id="lstDays" name="lstDays" tabindex="2"><option selected="selected" value="0">Day</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option></select>
                                                    <select id="lstYears" name="lstYears" tabindex="3"><option selected="selected" value="0">Year</option><option value="2005">2005</option><option value="2000">2000</option><option value="1995">1995</option><option value="1990">1990</option></select>
                                                </div>
                                            </div>
                                            <div class="sign-up-row">
                                                <div class="sign-up-inner-row">
                                                    <span id="genderText">Gender</span>
                                                </div>
                                                <div>
                                                    <input id="MaleBtn" name="gender" tabindex="4" type="radio" value="Male"/>
                                                    <label for="MaleBtn">Male</label>
                                                    <input id="FemaleBtn" name="gender" tabindex="5" type="radio" value="Female"/>
                                                    <label for="FemaleBtn">Female</label>
                                                </div>
                                            </div>
                                            <div class="sign-up-row">
                                                <div>
                                                    <input type="text" id="username" name="username" class="text-box text-box-large" tabindex="6" placeholder="Username"/>
                                                </div>
                                            </div>
                                            <div class="sign-up-row">
                                                <div>
                                                    <input name="password" id="password" class="text-box text-box-large" tabindex="7" type="password" placeholder="Password"/>
                                                </div>
                                            </div>
                                            <div>
                                                <button type="submit" class="btn-large btn-primary roblox-signup" id="SignUpButton">Sign Up</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="Footer Experimental">
                <div class="FooterContent">
                    <p class="FooterParagraph">
                        <a href="/Info/Privacy.aspx"><b>Privacy Policy</b></a> &nbsp;|&nbsp; <a href="/Parents.aspx">Parents</a> &nbsp;|&nbsp; <a href="/Help/Builderman.aspx">Help</a>    
                    </p>
                    <div class="FooterLegaleseContainer">
                        <p class="Legalese">
                            ROBLOX, "Online Building Toy", characters, logos, names, and all related indicia are trademarks of ROBLOX Corporation, ©2013.
                        </p>
                    </div>
                </div>
            </div>
        </div> 

        <!-- Script for Tab Toggling -->
        <script type="text/javascript">
            $(document).ready(function() {
                function showLogin() {
                    $('#animated-signup').hide();
                    $('#animated-login').show();
                }

                function showSignup() {
                    $('#animated-login').hide();
                    $('#animated-signup').show();
                }

                $('#animated-tab-login, #header-login').click(function(e) {
                    e.preventDefault();
                    showLogin();
                });

                $('#animated-tab-signup, #header-signup, #switch-to-signup').click(function(e) {
                    e.preventDefault();
                    showSignup();
                });
            });
        </script>
    </body>
</html>