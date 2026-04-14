
import { Person, WithContext } from 'schema-dts';

export default function JsonLd() {
    const jsonLd: WithContext<Person> = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Huy Dang',
        givenName: 'Harsh',
        familyName: 'Jadhav',
        url: 'https://huydang.vercel.app/',
        jobTitle: 'Software Engineer',
        knowsAbout: [
            'Software Engineering',
            'Web Application Development',
            'User Interface Design',
            'System Architecture',
            'Frontend Development',
        ],
        homeLocation: {
            '@type': 'Place',
            name: 'Mumbai, India'
        },
        sameAs: [
            'https://github.com/harshjdhv',
            'https://linkedin.com/in/jadhavharsh',
            'https://x.com/harshjdhv',
        ],
        image: 'https://huydang.vercel.app//linkbannerpreview.png',
        description: 'Huy Dang is a software engineer building user-facing applications and the systems behind them.'
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
