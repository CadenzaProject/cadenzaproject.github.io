/** @type {import('@docusaurus/types').DocusaurusConfig} */
// const math = require('remark-math');
// const katex = require('rehype-katex');
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
//import {themes as prismThemes} from 'prism-react-renderer';

// const {
//     MailRounded
// } = require('@mui/icons-material');

module.exports = {
    title: 'The Cadenza Project',
    tagline: 'Improving music listening for those with hearing impairment',
    url: 'https://cadenzaproject.github.io/',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'throw',
    favicon: 'img/favicon.ico',
    organizationName: 'cadenzaproject', // Usually your GitHub org/user name.
    projectName: 'cadenzaproject.github.io', // Usually your repo name.
    trailingSlash: false,
    deploymentBranch: "gh-pages",
    markdown: {
        format: 'mdx',
        mermaid: true,
        mdx1Compat: {
            comments: false,
            admonitions: false,
            headingIds: false,
        },
    },
    themes: ['@docusaurus/theme-mermaid'],
    // stylesheets: [{
    //     href: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css',
    //     type: 'text/css',
    //     integrity: 'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
    //     crossorigin: 'anonymous',
    // }, "https://fonts.googleapis.com/icon?family=Material+Icons", ],
    stylesheets: [{
        href: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css',
        type: 'text/css',
        integrity: 'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
        crossorigin: 'anonymous',
    }, "https://fonts.googleapis.com/icon?family=Material+Icons",
        "/js-datatable/css.min/bootstrap-table.min.css",
        "/js-datatable/css.min/datatable.min.css",
        "/react-bootstrap-table2.min.css"
    ],
    scripts: [
        {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js',
            async: false,
        },
        {
            src: '/bootstrap/bootstrap.bundle.min.js',
            async: false,
        },
        {
            src: 'https://cdn.jsdelivr.net/gh/pcooksey/bibtex-js@1.0.0/src/bibtex_js.min.js',
            async: false,
        }
    ],
    plugins: [
        [
            '@docusaurus/plugin-google-gtag',
            {
                trackingID: 'G-GXN3NPFXC7',
                anonymizeIP: false,
            },
        ],
        [
            '@docusaurus/plugin-ideal-image',
            {
                quality: 70,
                max: 940, // max resized image's size.
                min: 640, // min resized image's size. if original is lower, use that size.
                steps: 2, // the max number of images generated between min and max (inclusive)
                disableInDev: true,
            },
        ],
        [require.resolve('docusaurus-lunr-search'), {indexBaseUrl: true}],
    ],
    // emoji from https://emojipedia.org/
    themeConfig: {
        // Uncomment the following code to add the announcement bar
        announcementBar: {
            id: 'announcement',
            content:
                "📆 Cadenza CAD2 - ASA/ICA Special Session - 22th May, 15:15-17:00 (GMT-5)",
            backgroundColor: '#9ae59a',
            textColor: '#070707',
            isCloseable: true,
        },
        blog: {
            sidebar: {
                groupByYear: true,
            },
        },
        prism: {
            additionalLanguages: ['json']
        },
        navbar: {
            title: 'Cadenza',
            hideOnScroll: true,
            logo: {
                alt: 'Cadenza Logo',
                src: 'img/logo.png',
            },
            items: [
                {
                    type: 'dropdown',
                    label: 'About Us',
                    position: 'right',
                    items: [
                        {
                            to: '/about/',
                            label: 'About Us',
                        },
                        {
                            label: 'Social',
                            to: '/social',
                        },
                        {
                            to: '/contact/',
                            label: 'Contact Us',
                        },
                    ]
                },
                {
                    type: 'dropdown',
                    label: 'Challenges',
                    position: 'right',
                    items: [
                        {
                            to: '/docs/clip1/intro',
                            label: 'CLIP1',
                        },
                        {
                            to: '/docs/cadenza2/intro',
                            label: 'CAD2',
                        },
                        {
                            to: '/docs/icassp_2024/intro/',
                            label: 'ICASSP 2024 Grand Challenge',
                        },
                        {
                            to: '/docs/cadenza1/cc1_intro/',
                            label: 'CAD1',
                        },
                    ]
                },
                {
                    to: 'publications',
                    label: 'Publications',
                    position: 'right',
                },
                {
                    type: 'dropdown',
                    label: 'Workshops',
                    position: 'right',
                    items: [
                        {
                            to: 'https://cadenzachallenge.org/cadenza2025-workshop//',
                            label: 'Cadenza Workshop 2025',
                        },
                        {
                            to: 'https://cadenzachallenge.org/cadenza2023-workshop/',
                            label: 'Cadenza Workshop 2023',
                        }
                    ]
                },
                {
                    to: 'https://cadenzachallenge.org/cadenza_tutorials/intro.html',
                    label: 'Tutorials',
                    position: 'right',
                },
                {
                    to: '/docs/learning_resources/learning_intro/',
                    label: 'Learning Resources',
                    position: 'right'
                },
                {
                    to: '/blog/',
                    label: 'Latest',
                    position: 'right'
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'Docs',
                    items: [
                        {
                            label: 'CLIP1 Documentation',
                            to: '/docs/clip1/intro',
                        },
                        {
                            label: 'CAD2 Documentation',
                            to: '/docs/cadenza2/intro',
                        },
                        {
                            label: 'ICASSP 2024 Documentation',
                            to: '/docs/icassp_2024/intro',
                        },
                        {
                        label: 'CAD1 Documentation',
                        to: '/docs/cadenza1/cc1_intro',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [{
                            label: 'The Cadenza Project',
                            href: 'http://cadenzachallenge.org',
                        },
                        {
                            label: 'Cadenza Google Group',
                            href: 'https://groups.google.com/g/cadenza-challenge',
                        },
                        {
                            label: 'Email Us',
                            href: 'mailto:cadenzachallengecontact@gmail.com'
                        }
                    ],
                },
                {
                    title: 'More',
                    items: [{
                            label: 'Challenge Updates',
                            to: '/blog/',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/claritychallenge/clarity',
                        }
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} The Cadenza Team. Built with Docusaurus.`,
        },
        zoom: {
            selector: '.markdown img',
            background: {
                light: 'rgb(255, 255, 255)',
                dark: 'rgb(50, 50, 50)'
            },
            config: {
                // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
            }
        }
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                googleAnalytics: {
                    trackingID: 'UA-198878187-1',
                    // Optional fields.
                    anonymizeIP: true, // Should IPs be anonymized?
                },
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [
                        [rehypeKatex, {
                            strict: false
                        }]
                    ],
                    // Please change this to your repo.
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    blogTitle: 'Latest',
                    blogDescription: 'News and updates about our Challenges and Workshops',
                    postsPerPage: 'ALL',
                    blogSidebarTitle: 'Recent posts',
                    blogSidebarCount: 10,
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [rehypeKatex]
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};