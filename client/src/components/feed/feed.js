import React from "react";
import InstagramEmbed from 'react-instagram-embed';

function Feed() {
    return (
        <div className="feed mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <h3 className="text-align-center text-dark font-weight-bold">Your Latest Posts</h3>
                    </div>
                    <div className="row">
                        <InstagramEmbed
                            url='https://www.instagram.com/p/B2AZJz0hG0v/'
                            maxWidth={320}
                            hideCaption={false}
                            containerTagName='div'
                            protocol=''
                            injectScript
                            onLoading={() => { }}
                            onSuccess={() => { }}
                            onAfterRender={() => { }}
                            onFailure={() => { }}
                        />
                        <InstagramEmbed
                            url='https://www.instagram.com/p/B1-AYwYhzGS/'
                            maxWidth={320}
                            hideCaption={false}
                            containerTagName='div'
                            protocol=''
                            injectScript
                            onLoading={() => { }}
                            onSuccess={() => { }}
                            onAfterRender={() => { }}
                            onFailure={() => { }}
                        />
                        <InstagramEmbed
                            url='https://www.instagram.com/p/B17Vj1Hh4rA/'
                            maxWidth={320}
                            hideCaption={false}
                            containerTagName='div'
                            protocol=''
                            injectScript
                            onLoading={() => { }}
                            onSuccess={() => { }}
                            onAfterRender={() => { }}
                            onFailure={() => { }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feed;