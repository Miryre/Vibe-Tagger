document.addEventListener('DOMContentLoaded', function() {

    const nicheInput = document.getElementById('nicheInput');
    const generateBtn = document.getElementById('generateBtn');
    const resultsSection = document.getElementById('resultsSection');
    const hashtagOutput = document.getElementById('hashtagOutput');
    const hashtagCount = document.getElementById('hashtagCount');
    const copyBtn = document.getElementById('copyBtn');

    const hashtagTemplates = [
        '',
        'Daily',
        'Life',
        'Gram',
        'Lover',
        'Addict',
        'Inspo',
        'Vibes',
        'Goals',
        'Community',
        'Tribe',
        'Culture',
        'Style',
        'Fashion',
        'Blogger',
        'Influencer',
        'Photography',
        'Travel',
        'Foodie',
        'Fitness',
        'Wellness',
        'Motivation',
        'Entrepreneur',
        'Success',
        'Mindset',
        'Hustle',
        'Journey',
        'Adventure',
        'Dream',
        'Passion',
        'Creative',
        'Inspiration',
        'Explore',
        'Discover',
        'Wanderlust',
        'Nature',
        'Beauty',
        'Art',
        'Design',
        'Music',
        'Tech',
        'Innovation',
        'Startup',
        'Business',
        'Marketing',
        'SocialMedia',
        'ContentCreator',
        'DigitalNomad',
        'RemoteWork',
        'Lifestyle',
        'Wellbeing',
        'SelfCare',
        'Mindfulness',
        'Growth',
        'Learning',
        'Education',
        'Skills',
        'Knowledge',
        'SuccessMindset',
        'GoalSetting',
        'Productivity',
        'Focus',
        'TimeManagement',
        'Leadership',
        'Teamwork',
        'Collaboration',
        'Networking',
        'CommunityBuilding',
        'Support',
        'Empowerment',
        'Positivity',
        'Gratitude',
        'Happiness',
        'Love',
        'Peace',
        'Joy',
        'Friendship',
        'Family',
        'Memories',
        'Moments',
        'Experience',
        'Story',
        'JourneyOfLife',
        'LivingMyBestLife',
        'ChasingDreams',
        'MakingItHappen',
        'BelieveInYourself',
        'StayPositive',
        'KeepGoing',
        'NeverGiveUp',
        'YouGotThis'
    ];
    
    const genericHashtags = [
        '#InstaGood',
        '#PhotoOfTheDay',
        '#Love',
        '#Beautiful',
        '#Happy',
        '#Cute',
        '#TBT',
        '#Fashion',
        '#FollowMe',
        '#Picoftheday',
        '#Instadaily',
        '#Summer',
        '#Art',
        '#Nature',
        '#Repost',
        '#Style',
        '#Travel',
        '#Fitness',
        '#Food',
        '#Family',
        '#Friends',
        '#Fun',
        '#Life',
        '#Music',
        '#Motivation',
        '#Inspiration',
        '#Selfie',
        '#Vibes',
        '#Goals'
    ];

    function generateHashtags(niche) {
        const cleanNiche = niche.toLowerCase().trim().replace(/\s+/g, '');
        const capitalizedNiche = cleanNiche.charAt(0).toUpperCase() + cleanNiche.slice(1);

        let hashtags = [];

        hashtagTemplates.forEach(template => {
            if (template === '') {
                hashtags.push(`#${capitalizedNiche}`);
            } else if (template === 'Of' || template === 'Is') {
                hashtags.push(`#${capitalizedNiche}${template}`);
            } else {
                hashtags.push(`#${capitalizedNiche}${template}`);
            }
        });

        const shuffled = genericHashtags.sort(() => 0.5 - Math.random());
        const selectedGeneric = shuffled.slice(0, 5);
        hashtags = hashtags.concat(selectedGeneric);

        return hashtags;
    }

    function displayHashtags(hashtags) {
        const hashtagString = hashtags.join(' ');
        hashtagOutput.textContent = hashtagString;
        hashtagCount.textContent = `Generated ${hashtags.length} hashtags`;
        resultsSection.classList.add('show');
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    generateBtn.addEventListener('click', function() {
        const niche = nicheInput.value.trim();

        if (niche === '') {
            alert('Please enter a niche or keyword first!');
            nicheInput.focus();
            return;
        }

        const hashtags = generateHashtags(niche);
        displayHashtags(hashtags);
    });

    nicheInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            generateBtn.click();
        }
    });

    copyBtn.addEventListener('click', function() {
        const textToCopy = hashtagOutput.textContent;

        navigator.clipboard.writeText(textToCopy).then(function() {
            const originalText = copyBtn.textContent;
            copyBtn.textContent = '✓ Copied!';
            copyBtn.style.background = 'rgba(76, 175, 80, 1)';
            
            setTimeout(function() {
                copyBtn.textContent = originalText;
                copyBtn.style.background = 'rgba(76, 175, 80, 0.6)';
            }, 2000);
        }).catch(function(err) {
            alert('Failed to copy. Please select and copy manually.');
        });
    });
    
});