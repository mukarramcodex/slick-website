import { TechStackCategory } from "@/components/service/techStack/TechStackTypes";

export const techStackData: TechStackCategory[] = [
    {
        categoryId: "writing-services",
        categoryName: "Writing Services",
        technologies: [
            {
                id: "grammarly",
                name: "Grammarly",
                category: "Writing Tool",
                icon: "📝",
                expertise: 95,
                description: "Advanced grammar and style checking",
            },
            {
                id: "hemingway",
                name: "Hemingway Editor",
                category: "Writing Tool",
                icon: "✍️",
                expertise: 90,
                description: "Readability and clarity enhancement",
            },
            {
                id: "notion",
                name: "Notion",
                category: "Content Management",
                icon: "📋",
                expertise: 88,
                description: "Content planning and organization",
            },
            {
                id: "canva",
                name: "Canva",
                category: "Design Tool",
                icon: "🎨",
                expertise: 85,
                description: "Visual content creation",
            },
            {
                id: "wordpress",
                name: "WordPress",
                category: "CMS Platform",
                icon: "🌐",
                expertise: 92,
                description: "Content publishing and management",
            },
            {
                id: "ahrefs",
                name: "Ahrefs",
                category: "SEO Tool",
                icon: "📊",
                expertise: 87,
                description: "SEO research and optimization",
            },
            {
                id: "google-docs",
                name: "Google Docs",
                category: "Collaboration",
                icon: "📄",
                expertise: 98,
                description: "Real-time document collaboration",
            },
            {
                id: "jasper",
                name: "Jasper AI",
                category: "AI Writing",
                icon: "🤖",
                expertise: 82,
                description: "AI-powered content generation",
            },
        ],
    },
    {
        categoryId: 'proofreading-services',
        categoryName: 'Proofreading Services',
        technologies: [
            {
                id: 'grammarly-pro',
                name: 'Grammarly Pro',
                category: 'Grammar Check',
                icon: '✅',
                expertise: 98,
                description: 'Professional grammar checking'
            },
            {
                id: 'prowritingaid',
                name: 'ProWritingAid',
                category: 'Writing Analysis',
                icon: '🔍',
                expertise: 94,
                description: 'Comprehensive writing analysis'
            },
            {
                id: 'turnitin',
                name: 'Turnitin',
                category: 'Plagiarism Check',
                icon: '🛡️',
                expertise: 90,
                description: 'Plagiarism detection and prevention'
            },
            {
                id: 'chicago-manual',
                name: 'Chicago Manual',
                category: 'Style Guide',
                icon: '📚',
                expertise: 92,
                description: 'Academic style formatting'
            },
            {
                id: 'apa-style',
                name: 'APA Style',
                category: 'Citation Format',
                icon: '📖',
                expertise: 95,
                description: 'Academic citation standards'
            },
            {
                id: 'track-changes',
                name: 'Track Changes',
                category: 'Editing Tool',
                icon: '📝',
                expertise: 97,
                description: 'Document revision tracking'
            },
            {
                id: 'copyscape',
                name: 'Copyscape',
                category: 'Plagiarism Tool',
                icon: '🔒',
                expertise: 88,
                description: 'Content originality verification'
            },
            {
                id: 'readability-test',
                name: 'Readability Test',
                category: 'Analysis Tool',
                icon: '📊',
                expertise: 85,
                description: 'Content readability assessment'
            }
        ]
    },
    {
        categoryId: 'translation-services',
        categoryName: 'Translation Services',
        technologies: [
            {
                id: 'trados',
                name: 'SDL Trados',
                category: 'CAT Tool',
                icon: '🌐',
                expertise: 95,
                description: 'Computer-assisted translation'
            },
            {
                id: 'memoq',
                name: 'memoQ',
                category: 'Translation Memory',
                icon: '💾',
                expertise: 92,
                description: 'Translation memory management'
            },
            {
                id: 'deepl',
                name: 'DeepL',
                category: 'AI Translation',
                icon: '🤖',
                expertise: 88,
                description: 'Neural machine translation'
            },
            {
                id: 'google-translate',
                name: 'Google Translate',
                category: 'Translation API',
                icon: '🔄',
                expertise: 85,
                description: 'Multi-language translation'
            },
            {
                id: 'phrase',
                name: 'Phrase',
                category: 'Localization',
                icon: '🌍',
                expertise: 90,
                description: 'Localization management'
            },
            {
                id: 'crowdin',
                name: 'Crowdin',
                category: 'Translation Platform',
                icon: '👥',
                expertise: 87,
                description: 'Collaborative translation'
            },
            {
                id: 'xtm',
                name: 'XTM Cloud',
                category: 'TMS Platform',
                icon: '☁️',
                expertise: 83,
                description: 'Translation management system'
            },
            {
                id: 'linguee',
                name: 'Linguee',
                category: 'Dictionary Tool',
                icon: '📖',
                expertise: 91,
                description: 'Contextual translation dictionary'
            }
        ]
    }
];
