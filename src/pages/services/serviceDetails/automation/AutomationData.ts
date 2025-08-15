import { ServiceData } from "@/components/service/serviceDetail/servicetypes/ServiceTypes";

export const automationdata: ServiceData = {
    categories: [
        {
            id: 'writing-services',
            title: 'Writing Services',
            description: 'Professional content creation and copywriting solutions',
            services: [
                {
                    id: 'blog-writing',
                    title: 'Blog Writing',
                    description: 'Engaging blog posts that drive traffic and establish thought leadership',
                    features: ['SEO Optimized', 'Research-Based', 'Engaging Content', 'Regular Publishing'],
                    price: 'From $150',
                    duration: '3-5 days'
                },
                {
                    id: 'copywriting',
                    title: 'Sales Copywriting',
                    description: 'Persuasive copy that converts visitors into customers',
                    features: ['Conversion Focused', 'A/B Testing', 'Brand Voice', 'Call-to-Action'],
                    price: 'From $200',
                    duration: '2-4 days'
                },
                {
                    id: 'content-strategy',
                    title: 'Content Strategy',
                    description: 'Comprehensive content planning and editorial calendars',
                    features: ['Strategic Planning', 'Content Calendar', 'Audience Analysis', 'Performance Metrics'],
                    price: 'From $500',
                    duration: '1-2 weeks'
                },
                {
                    id: 'social-media-content',
                    title: 'Social Media Content',
                    description: 'Engaging social media posts and campaigns',
                    features: ['Platform Specific', 'Visual Content', 'Hashtag Strategy', 'Engagement Focus'],
                    price: 'From $100',
                    duration: '1-3 days'
                },
                {
                    id: 'email-marketing',
                    title: 'Email Marketing',
                    description: 'Compelling email campaigns that drive conversions',
                    features: ['Subject Line Optimization', 'Personalization', 'Automation', 'Analytics'],
                    price: 'From $120',
                    duration: '2-3 days'
                },
                {
                    id: 'technical-writing',
                    title: 'Technical Writing',
                    description: 'Clear documentation and technical content',
                    features: ['User Manuals', 'API Documentation', 'Process Guides', 'Technical Specs'],
                    price: 'From $180',
                    duration: '5-7 days'
                }
            ]
        },
        {
            id: 'proofreading-services',
            title: 'Proofreading Services',
            description: 'Professional editing and proofreading for error-free content',
            services: [
                {
                    id: 'basic-proofreading',
                    title: 'Basic Proofreading',
                    description: 'Grammar, spelling, and punctuation corrections',
                    features: ['Grammar Check', 'Spelling Correction', 'Punctuation', 'Basic Formatting'],
                    price: 'From $50',
                    duration: '1-2 days'
                },
                {
                    id: 'copy-editing',
                    title: 'Copy Editing',
                    description: 'Comprehensive editing for clarity and flow',
                    features: ['Style Consistency', 'Clarity Enhancement', 'Flow Improvement', 'Fact Checking'],
                    price: 'From $80',
                    duration: '2-3 days'
                },
                {
                    id: 'line-editing',
                    title: 'Line Editing',
                    description: 'Detailed line-by-line editing for style and voice',
                    features: ['Voice Consistency', 'Style Enhancement', 'Sentence Structure', 'Word Choice'],
                    price: 'From $120',
                    duration: '3-4 days'
                },
                {
                    id: 'academic-proofreading',
                    title: 'Academic Proofreading',
                    description: 'Specialized editing for academic papers and research',
                    features: ['Citation Check', 'Academic Style', 'Research Validation', 'Format Compliance'],
                    price: 'From $100',
                    duration: '3-5 days'
                },
                {
                    id: 'business-proofreading',
                    title: 'Business Proofreading',
                    description: 'Professional editing for business documents',
                    features: ['Professional Tone', 'Business Format', 'Clarity Focus', 'Brand Consistency'],
                    price: 'From $90',
                    duration: '2-3 days'
                },
                {
                    id: 'manuscript-editing',
                    title: 'Manuscript Editing',
                    description: 'Comprehensive editing for books and long-form content',
                    features: ['Structural Editing', 'Character Development', 'Plot Consistency', 'Publishing Ready'],
                    price: 'From $300',
                    duration: '1-2 weeks'
                }
            ]
        },
        {
            id: 'translation-services',
            title: 'Translation Services',
            description: 'Professional translation services for global reach',
            services: [
                {
                    id: 'document-translation',
                    title: 'Document Translation',
                    description: 'Accurate translation of business and personal documents',
                    features: ['Certified Translation', 'Multiple Languages', 'Fast Turnaround', 'Quality Assurance'],
                    price: 'From $0.15/word',
                    duration: '2-5 days'
                },
                {
                    id: 'website-translation',
                    title: 'Website Translation',
                    description: 'Complete website localization for international markets',
                    features: ['Cultural Adaptation', 'SEO Optimization', 'Technical Integration', 'Multi-Language'],
                    price: 'From $200',
                    duration: '1-2 weeks'
                },
                {
                    id: 'marketing-translation',
                    title: 'Marketing Translation',
                    description: 'Creative translation that maintains brand voice across languages',
                    features: ['Brand Voice', 'Cultural Sensitivity', 'Creative Adaptation', 'Market Research'],
                    price: 'From $0.20/word',
                    duration: '3-5 days'
                },
                {
                    id: 'technical-translation',
                    title: 'Technical Translation',
                    description: 'Specialized translation for technical and scientific content',
                    features: ['Subject Expertise', 'Terminology Management', 'Accuracy Focus', 'Industry Standards'],
                    price: 'From $0.25/word',
                    duration: '5-7 days'
                },
                {
                    id: 'legal-translation',
                    title: 'Legal Translation',
                    description: 'Precise translation of legal documents and contracts',
                    features: ['Legal Expertise', 'Confidentiality', 'Accuracy Guarantee', 'Certified Translators'],
                    price: 'From $0.30/word',
                    duration: '3-7 days'
                },
                {
                    id: 'audio-translation',
                    title: 'Audio Translation',
                    description: 'Transcription and translation of audio and video content',
                    features: ['Transcription', 'Time Coding', 'Multiple Formats', 'Quality Audio'],
                    price: 'From $5/minute',
                    duration: '3-5 days'
                }
            ]
        }
    ]
};