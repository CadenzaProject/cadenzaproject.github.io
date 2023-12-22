/** @type {import('@docusaurus/types').DocusaurusConfig} */
// const math = require('remark-math');
// const katex = require('rehype-katex');
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import {themes as prismThemes} from 'prism-react-renderer';

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
        [require.resolve('docusaurus-lunr-search'), {
            indexBaseUrl: true
        }], './sitePlugin', require.resolve("docusaurus-plugin-image-zoom")
    ],
    themeConfig: {
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
            items: [{
                    type: 'dropdown',
                    label: 'About Us',
                    position: 'right',
                    items: [{
                        to: '/about/',
                        label: 'About Us',
                    }, {
                        to: '/contact/',
                        label: 'Contact Us',

                    }, ]
                }, {
                    type: 'dropdown',
                    label: 'Challenges',
                    position: 'right',
                    items: [{
                        to: '/docs/cadenza1/cc1_intro/',
                        label: 'Challenge 1',
                    }, {
                        to: '/docs/icassp_2024/intro/',
                        label: 'Challenge ICASSP 2024',
                    }]
                },{
                type: 'dropdown',
                label: 'Workshops',
                position: 'right',
                items: [{
                    to: 'https://cadenzachallenge.org/cadenza2023-workshop/',
                    label: 'Cadenza Workshop 2023',
                }]
            }, {
                    to: '/docs/learning_resources/learning_intro/',
                    label: 'Learning Resources',
                    position: 'right'
                }, {
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
                    items: [{
                        label: 'Challenge Documentation',
                        to: '/docs/cadenza1/cc1_intro',
                    }],
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
                            href: 'https://github.com/cadenzaproject',
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