/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    tutorialSidebar_cad1: [{
        type: 'autogenerated',
        dirName: 'cadenza1'
    }],
    tutorialSidebar_clip1: [
        'clip1/intro',
        'clip1/key_dates',
        {
            type: 'category',
            label: 'Take Part',
            items: [
                'clip1/take_part/registration',
                'clip1/take_part/rules',
                'clip1/take_part/submission',
                'clip1/take_part/FAQs',
            ],
        }
    ],
    tutorialSidebar_cad2: [
        'cadenza2/intro',  // landing
        'cadenza2/results',
        'cadenza2/key_dates',
        'cadenza2/evaluation',
        'cadenza2/webinar',
        'cadenza2/list_dataset',
        {   // Menu Lyrics Intelligibility
            type: 'category',
            label: 'Task1 - Lyric Intelligibility',
            link: {
                type: 'doc',
                id: 'cadenza2/Lyric Intelligibility/lyrics'
            },
            items: [
                'cadenza2/Lyric Intelligibility/lyric_overview',
                'cadenza2/Lyric Intelligibility/lyric_baseline',
                'cadenza2/Lyric Intelligibility/lyric_data',
            ],
        },
        {   // Menu Rebalancing
            type: 'category',
            label: 'Task2 - Rebalancing Classical',
            link: {
                type: 'doc',
                id: 'cadenza2/Rebalancing Classical/rebalancing'
            },
            items: [
                'cadenza2/Rebalancing Classical/rebalancing_overview',
                'cadenza2/Rebalancing Classical/rebalance_baseline',
                'cadenza2/Rebalancing Classical/rebalancing_data',
            ],
        },
        'cadenza2/data_listener',
        'cadenza2/amplification',
        'cadenza2/causality',

        {   // Take Part
            type: 'category',
            label: 'Take Part',
            items: [
                'cadenza2/Take Part/download',
                'cadenza2/Take Part/cc2_registration',
                'cadenza2/Take Part/rules',
                'cadenza2/Take Part/submission',
                'cadenza2/Take Part/FAQs',
            ],
        },
    ],
    tutorialSidebar_icassp2024: [{
        type: 'autogenerated',
        dirName: 'icassp_2024'
    }],
    tutorialSidebar: [{
      type: 'autogenerated',
      dirName: 'learning_resources'
    }],
};