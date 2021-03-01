import React from 'react'
import './styles/one.css';
import './styles/two.css';
import './styles/mq.css';

function Homepage() { 
    return (                    

        <div>
            <fb-root _nghost-xyu-c36="" ng-version="10.0.14"> 
                <div _ngcontent-xyu-c36="" className="root">
                   <div _ngcontent-xyu-c36="">
                       <fb-header _ngcontent-xyu-c36="" _nghost-xyu-c34="">
                           <div _ngcontent-xyu-c34="" className="header">
                               <div _ngcontent-xyu-c34="" className="header-formatter">
                                   <button _ngcontent-xyu-c34="" className="header--logo">
                                       <img _ngcontent-xyu-c34="" src={'/static/images/logo.svg'} style={{ marginRight : '12px'}}  alt="B" /> Be Founders 
                                    </button>
                                    <div _ngcontent-xyu-c34="" className="header-formatter--right">
                                       <div _ngcontent-xyu-c34="" className="header-container--login">
                                           <button _ngcontent-xyu-c34="" className="header-container__item--login">Login</button>
                                           <button _ngcontent-xyu-c34="" className="header-container__item">Sign Up</button>
                                       </div>
                                    </div>
                                    <button _ngcontent-xyu-c34="" className="header-container--mobile">
                                        <img _ngcontent-xyu-c34="" src={'/static/images/hamburger.svg'}  alt="hamburger" />
                                    </button>
                                </div>
                            </div>
                            
                        </fb-header>
                        <router-outlet _ngcontent-xyu-c36=""></router-outlet> 
                        <fb-landing-page _nghost-xyu-c31="">
                            <div _ngcontent-xyu-c31="" className="landing-page landing-page--white">
                                <div _ngcontent-xyu-c31="" className="landing-page-banner">
                                    <div _ngcontent-xyu-c31="" className="landing-page-banner__row">
                                        <div _ngcontent-xyu-c31="" className="landing-page-banner-text-container">
                                            <div _ngcontent-xyu-c31="" className="landing-page__content-title--top">Connecting entrepreneurs to work on startups together.</div>
                                            <div _ngcontent-xyu-c31="" className="landing-page__content-separator"></div>
                                            <div _ngcontent-xyu-c31="" className="landing-page__content-subtitle">Be Founders is a members-only community of the top creatives, hackers, and hustlers.</div>
                                            <button _ngcontent-xyu-c31="" className="landing-page__call-to-action">Join, It's Free!</button>
                                            <div _ngcontent-xyu-c31="" className="landing-page__content-super-script">Join the 1000+ entrepreneurs using Be Founders</div>
                                            </div>
                                            <img _ngcontent-xyu-c31="" src={'/static/images/forces2.svg'} alt="" className="landing-page-banner__screenshot--web" />
                                            <img _ngcontent-xyu-c31="" src={'/static/images/forces2.svg'} alt="" className="landing-page-banner__screenshot--mobile" />
                                            </div>
                                            <div _ngcontent-xyu-c31="" className="landing-page-banner__row--how-it-works">
                                                    <div _ngcontent-xyu-c31="" className="landing-page-how-it-works" style={{ paddingLeft:'0px'}}  >
                                                        <div _ngcontent-xyu-c31="" className="landing-page-how-it-works__title"> STEP 1: Join </div>
                                                        <div _ngcontent-xyu-c31="" className="landing-page__content-subtitle--wrap" style={{width:'100%'}} > Tell us a few details about yourself and setup your profile </div>
                                                    </div>
                                                    <div _ngcontent-xyu-c31="" className="landing-page-how-it-works">
                                                        <div _ngcontent-xyu-c31="" className="landing-page-how-it-works__title"> STEP 2: Network </div>
                                                        <div _ngcontent-xyu-c31="" className="landing-page__content-subtitle--wrap" style={{width:'100%'}} > Browse our network to connect with other entrepreneurs. </div>
                                                    </div>
                                                    <div _ngcontent-xyu-c31="" className="landing-page-how-it-works" style={{ paddingRight:'0px'}} >
                                                        <div _ngcontent-xyu-c31="" className="landing-page-how-it-works__title"> STEP 3: Start Up </div>
                                                        <div _ngcontent-xyu-c31="" className="landing-page__content-subtitle--wrap" style={{width:'100%'}} > Start developing your product with your team! </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div _ngcontent-xyu-c31="" className="landing-page__features">
                                        <div _ngcontent-xyu-c31="" className="landing-page__features-feature" style={{ flexFlow:'row wrap' , marginTop:'0px' }} >
                                            <div _ngcontent-xyu-c31="" className="landing-page__features-content">
                                                <div _ngcontent-xyu-c31="" className="landing-page__features-title">Vetted Community</div>
                                                <div _ngcontent-xyu-c31="" className="landing-page__features-body">Members must be approved before they have access to our platform. We do this to ensure our network remains high quality, saving you time.</div>
                                            </div>
                                            <img _ngcontent-xyu-c31="" className="landing-page__features-img" src={'/static/images/vetted3.svg'} alt="Vetted Community" />
                                        </div>
                                        <div _ngcontent-xyu-c31="" className="landing-page__features-feature" style={{ flexFlow:'row-reverse wrap' }} >
                                            <div _ngcontent-xyu-c31="" className="landing-page__features-content">
                                                <div _ngcontent-xyu-c31="" className="landing-page__features-title">Founding Teams Simplified</div>
                                                <div _ngcontent-xyu-c31="" className="landing-page__features-body">We’ve streamlined the search process by allowing users to sign up in one of the three categories: creative, hacker, or hustler.</div>
                                            </div>
                                            <img _ngcontent-xyu-c31="" className="landing-page__features-img" src={'/static/images/sec-1.svg'} alt="Founding Teams Simplified" />
                                        </div>
                                        <div _ngcontent-xyu-c31="" className="landing-page__features-feature" style={{ flexFlow:'row wrap' }} >
                                            <div _ngcontent-xyu-c31="" className="landing-page__features-content">
                                                <div _ngcontent-xyu-c31="" className="landing-page__features-title">See What Ideas People Are Working On</div>
                                                <div _ngcontent-xyu-c31="" className="landing-page__features-body">Enter your concept pitch directly on your profile to attract like-minded individuals.</div>
                                            </div>
                                            <img _ngcontent-xyu-c31="" className="landing-page__features-img" src={'/static/images/sec-2.svg'} alt="See What Ideas People Are Working On" />
                                        </div>
                                        <div _ngcontent-xyu-c31="" className="landing-page__features-feature" style={{ flexFlow:'row-reverse wrap' }} >
                                            <div _ngcontent-xyu-c31="" className="landing-page__features-content">
                                                <div _ngcontent-xyu-c31="" className="landing-page__features-title">Exclusive Deals on Startup Products</div>
                                                <div _ngcontent-xyu-c31="" className="landing-page__features-body">Save thousands of dollars on products that help you run your startup.</div>
                                            </div>
                                        <img _ngcontent-xyu-c31="" className="landing-page__features-img" src={'/static/images/deals-7.svg'} alt="Exclusive Deals on Startup Products" />
                                        </div>
                                    </div>    
                                    <div _ngcontent-xyu-c31="" className="landing-page__footer-testimonial">
                                        <div _ngcontent-xyu-c31="" className="landing-page__footer-container">
                                            <div _ngcontent-xyu-c31="" className="landing-page-banner-text-container--bottom--testimonial">
                                                <div _ngcontent-xyu-c31="" className="landing-page__content-title--invert--testimonial">"Not only do they have a huge network of founders looking to launch a startup, but they also give you valuable resources to help you succeed. Wishing I knew about the platform earlier!"</div>
                                                <div _ngcontent-xyu-c31="" className="landing-page__content-subtitle--wrap--testimonial">- Fedya Muzyka</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div _ngcontent-xyu-c31="" className="landing-page landing-page--white">
                                        <div _ngcontent-xyu-c31="" className="landing-page-banner--content">
                                            <div _ngcontent-xyu-c31="" className="landing-page-banner-text-container--default">
                                                <div _ngcontent-xyu-c31="" className="landing-page__content-title--second" style={{ textAlign :'center' , marginBottom:'44px' }} >Join a thriving community of entrepreneurs.</div>
                                                <div _ngcontent-xyu-c31="" className="landing-page__community-row">
                                                    
                                                <div _ngcontent-xyu-c31="" className="landing-page__community-display">
                                                    <div _ngcontent-xyu-c31=""  style={{ display:'flex' , flexFlow: 'row nowrap' }} >
                                                        <img _ngcontent-xyu-c31="" className="landing-page__community-icon" src={'/static/images/network.svg'} alt="Network" />
                                                        <div _ngcontent-xyu-c31="" className="landing-page__community-title">Network</div>
                                                        </div>
                                                        <div _ngcontent-xyu-c31="" className="landing-page__community-body">Find the perfect cofounder to start your business. Filter by roles, skill sets, and more.</div>
                                                        </div>
                                                                                                            
                                                        <div _ngcontent-xyu-c31="" className="landing-page__community-divider"></div>
                                                        <div _ngcontent-xyu-c31="" className="landing-page__community-display">
                                                            <div _ngcontent-xyu-c31="" style={{ display:'flex' , flexFlow: 'row nowrap' }}>
                                                                <img _ngcontent-xyu-c31="" className="landing-page__community-icon" src={'/static/images/rocket.svg'} alt="Resources" />
                                                                <div _ngcontent-xyu-c31="" className="landing-page__community-title">Resources</div>
                                                            </div>
                                                            <div _ngcontent-xyu-c31="" className="landing-page__community-body">We have a resources page dedicated to helping our founders succeed.</div>
                                                        </div>
                                                        </div>
                                                        <div _ngcontent-xyu-c31="" className="landing-page__community-divider"></div>
                                                        <div _ngcontent-xyu-c31="" className="landing-page__community-row">
                                                            <div _ngcontent-xyu-c31="" className="landing-page__community-display">
                                                                <div _ngcontent-xyu-c31="" style={{ display:'flex' , flexFlow: 'row nowrap' }}>
                                                                    <img _ngcontent-xyu-c31="" className="landing-page__community-icon" src={'/static/images/message.svg'} alt="Message" />
                                                                    <div _ngcontent-xyu-c31="" className="landing-page__community-title">Message</div>
                                                                    </div>
                                                                    <div _ngcontent-xyu-c31="" className="landing-page__community-body">Streamline communication by messaging directly on our platform.</div>
                                                                </div>
                                                                <div _ngcontent-xyu-c31="" className="landing-page__community-divider"></div>
                                                                <div _ngcontent-xyu-c31="" className="landing-page__community-display">
                                                                    <div _ngcontent-xyu-c31="" style={{ display:'flex' , flexFlow: 'row nowrap' }} >
                                                                        <img _ngcontent-xyu-c31="" className="landing-page__community-icon" src={'/static/images/transparency.svg'} alt="Transparency" />
                                                                        <div _ngcontent-xyu-c31="" className="landing-page__community-title">Transparency</div>
                                                                    </div>
                                                                    <div _ngcontent-xyu-c31="" className="landing-page__community-body">Share startup info directly on your profile, enabling you to make stronger connections.</div>
                                                                </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>            
                                   <div _ngcontent-xyu-c31="" className="landing-page__footer">
                                       <div _ngcontent-xyu-c31="" className="landing-page__footer-container">
                                           <div _ngcontent-xyu-c31="" className="landing-page-banner-text-container--bottom">
                                               <div _ngcontent-xyu-c31="" className="landing-page__content-title--invert">Find a cofounder today, change the world tomorrow.</div>
                                               <button _ngcontent-xyu-c31="" className="landing-page__call-to-action--invert"> Join, It's Free! </button>
                                            </div>
                                        </div>
                                    </div>
                        </fb-landing-page>
                    </div>
                    <fb-footer _ngcontent-xyu-c36="" _nghost-xyu-c35="">
                        <div _ngcontent-xyu-c35="" className="footer">
                            <div _ngcontent-xyu-c35="" className="footer-container">
                                <div _ngcontent-xyu-c35="" className="footer-column">
                                    <div _ngcontent-xyu-c35="" className="footer-column__item" style={{ marginLeft : 'unset' }} > Be Founders, Inc © 2021 </div>
                                </div>
                                <div _ngcontent-xyu-c35="" className="footer-container--right">
                                    <button _ngcontent-xyu-c35="" className="footer-column__item"> Terms of Service </button>
                                    <button _ngcontent-xyu-c35="" className="footer-column__item"> Privacy Policy </button>
                                </div>
                            </div>
                        </div>
                    </fb-footer>
                    </div>
                    </fb-root>
        </div>       

    )
}

export default Homepage;
