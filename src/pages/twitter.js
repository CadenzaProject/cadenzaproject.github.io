import React from "react";
import Layout from "@theme/Layout";
import {
    useColorMode
} from '@docusaurus/theme-common';
import {
    TwitterTimelineEmbed
} from "react-twitter-embed";

function TwitterFeed() {
    const {
        isDarkTheme
    } = useColorMode();
    return ( <
        TwitterTimelineEmbed sourceType = "profile"
        screenName = "clarityprojuk"
        theme = {
            isDarkTheme ? "dark" : "light"
        }
        options = {
            {
                height: 400,
            }
        }
        />
    );
}

function Twitter() {
    return ( <
        Layout title = "Hello" >
        <
        div style = {
            {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "20px",
            }
        } >
        <
        TwitterFeed / >
        <
        /div> <
        /Layout>
    );
}
export default Twitter;