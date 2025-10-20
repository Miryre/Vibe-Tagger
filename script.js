document.addEventListener('DOMContentLoaded', function() {

    const nicheInput = document.getElementById('nicheInput');
    const generateBtn = document.getElementById('generateBtn');
    const resultsSection = document.getElementById('resultsSection');
    const hashtagOutput = document.getElementById('hashtagOutput');
    const hashtagCount = document.getElementById('hashtagCount');
    const copyBtn = document.getElementById('copyBtn');

    const hashtagTemplates = {
        prefixes: [
            'Daily', 'My', 'The', 'Best', 'Love', 'Explore', 'Discover',
            'Pro', 'Real', 'True', 'Ultimate', 'Epic', 'Amazing', 'Awesome'
        ],
        suffixes: [
            'Life', 'Gram', 'Lover', 'Addict', 'Inspo', 'Vibes', 'Goals',
            'Community', 'Tribe', 'Culture', 'Style', 'Fashion', 'Blogger',
            'Influencer', 'Photography', 'Travel', 'Journey', 'Adventure',
            'Daily', 'Passion', 'Motivation', 'Inspiration', 'Stories',
            'Moments', 'Memories', 'Experience', 'World', 'Hub', 'Central',
            'Nation', 'Squad', 'Crew', 'Gang', 'Fam', 'Scene', 'Movement'
        ],
        actionWords: [
            'Love', 'Explore', 'Discover', 'Create', 'Build', 'Make',
            'Share', 'Inspire', 'Motivate', 'Achieve', 'Succeed', 'Dream'
        ],
        descriptors: [
            'Awesome', 'Amazing', 'Epic', 'Best', 'Top', 'Cool', 'Hot',
            'Trending', 'Viral', 'Popular', 'Famous', 'Elite', 'Pro'
        ]
    };
    
    const genericHashtags = [
        '#InstaGood', '#PhotoOfTheDay', '#Love', '#Beautiful', '#Happy',
        '#Cute', '#Fashion', '#FollowMe', '#Picoftheday', '#Instadaily',
        '#Art', '#Nature', '#Repost', '#Style', '#Travel', '#Fitness',
        '#Food', '#Fun', '#Life', '#Music', '#Motivation', '#Inspiration',
        '#Selfie', '#Vibes', '#Goals', '#Blessed', '#Grateful', '#ThankYou',
        '#FollowForFollow', '#LikeForLike', '#InstaLike', '#InstaFollow',
        '#Trending', '#Viral', '#Explore', '#Discover', '#Share', '#Create'
    ];
    
    const categoryHashtags = {
        fitness: [
            '#GymLife', '#WorkoutMotivation', '#FitnessJourney', '#HealthyLifestyle',
            '#FitFam', '#GymMotivation', '#GetFit', '#TrainHard', '#NoPainNoGain',
            '#FitnessGoals', '#BodyBuilding', '#Cardio', '#Strength', '#Wellness'
        ],
        food: [
            '#Foodie', '#FoodPorn', '#Yummy', '#Delicious', '#FoodPhotography',
            '#InstaFood', '#FoodLover', '#Cooking', '#Homemade', '#Recipe',
            '#Tasty', '#FoodBlogger', '#Chef', '#Eats', '#Foodgasm'
        ],
        travel: [
            '#Wanderlust', '#TravelGram', '#Explore', '#Adventure', '#Vacation',
            '#TravelPhotography', '#TravelBlogger', '#WorldTraveler', '#PassportReady',
            '#Traveling', '#TravelLife', '#ExploreMore', '#TravelAddict', '#Roam'
        ],
        fashion: [
            '#OOTD', '#StyleInspo', '#FashionBlogger', '#StreetStyle', '#FashionWeek',
            '#Trendy', '#Outfit', '#FashionGram', '#StyleBlogger', '#FashionAddict',
            '#Chic', '#LookBook', '#WhatIWore', '#FashionDaily', '#Fashionista'
        ],
        beauty: [
            '#MakeupLover', '#BeautyBlogger', '#Skincare', '#MakeupArtist', '#BeautyTips',
            '#GlowUp', '#SelfCare', '#BeautyRoutine', '#MakeupJunkie', '#BeautyGram',
            '#Cosmetics', '#BeautyInfluencer', '#MakeupLook', '#NaturalBeauty'
        ],
        business: [
            '#Entrepreneur', '#Success', '#BusinessOwner', '#Startup', '#Hustle',
            '#Grind', '#BossLife', '#Mindset', '#Leadership', '#Marketing',
            '#BusinessTips', '#SmallBusiness', '#WorkHard', '#Motivated', '#CEO'
        ],
        tech: [
            '#Technology', '#Innovation', '#TechNews', '#Gadgets', '#Developer',
            '#Coding', '#Programming', '#Software', '#TechLife', '#Digital',
            '#AI', '#FutureTech', '#TechTrends', '#Geek', '#TechCommunity'
        ],
        art: [
            '#Artist', '#ArtWork', '#Creative', '#InstaArt', '#ArtOfTheDay',
            '#Draw', '#Painting', '#Sketch', '#Design', '#ArtLovers',
            '#ContemporaryArt', '#ArtGallery', '#ArtCommunity', '#ArtInspiration'
        ]
    };

    function detectCategory(niche) {
        const lowerNiche = niche.toLowerCase();
        const keywords = {
            fitness: ['fitness', 'gym', 'workout', 'exercise', 'health', 'training', 'bodybuilding'],
            food: ['food', 'cooking', 'recipe', 'chef', 'baking', 'cuisine', 'meal'],
            travel: ['travel', 'trip', 'vacation', 'wanderlust', 'adventure', 'explore', 'tourism'],
            fashion: ['fashion', 'style', 'outfit', 'clothing', 'ootd', 'trend', 'wardrobe'],
            beauty: ['beauty', 'makeup', 'skincare', 'cosmetic', 'hair', 'nails'],
            business: ['business', 'entrepreneur', 'startup', 'marketing', 'sales', 'company'],
            tech: ['tech', 'technology', 'coding', 'software', 'developer', 'programming', 'app'],
            art: ['art', 'artist', 'painting', 'drawing', 'creative', 'design', 'illustration']
        };

        for (let category in keywords) {
            if (keywords[category].some(keyword => lowerNiche.includes(keyword))) {
                return category;
            }
        }
        return null;
    }

    function shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    function generateHashtags(niche) {
        const cleanNiche = niche.toLowerCase().trim().replace(/\s+/g, '');
        const capitalizedNiche = cleanNiche.charAt(0).toUpperCase() + cleanNiche.slice(1);

        let hashtags = [];

        hashtags.push(`#${capitalizedNiche}`);

        const shuffledPrefixes = shuffleArray(hashtagTemplates.prefixes);
        const selectedPrefixes = shuffledPrefixes.slice(0, Math.floor(Math.random() * 3) + 8);
        selectedPrefixes.forEach(prefix => {
            hashtags.push(`#${prefix}${capitalizedNiche}`);
        });

        const shuffledSuffixes = shuffleArray(hashtagTemplates.suffixes);
        const selectedSuffixes = shuffledSuffixes.slice(0, Math.floor(Math.random() * 6) + 15);
        selectedSuffixes.forEach(suffix => {
            hashtags.push(`#${capitalizedNiche}${suffix}`);
        });

        const shuffledActions = shuffleArray(hashtagTemplates.actionWords);
        const selectedActions = shuffledActions.slice(0, Math.floor(Math.random() * 3) + 5);
        selectedActions.forEach(action => {
            hashtags.push(`#${action}${capitalizedNiche}`);
        });

        const shuffledDescriptors = shuffleArray(hashtagTemplates.descriptors);
        const selectedDescriptors = shuffledDescriptors.slice(0, Math.floor(Math.random() * 3) + 5);
        selectedDescriptors.forEach(descriptor => {
            hashtags.push(`#${descriptor}${capitalizedNiche}`);
        });

        const category = detectCategory(niche);
        if (category && categoryHashtags[category]) {
            const shuffledCategory = shuffleArray(categoryHashtags[category]);
            const selectedCategory = shuffledCategory.slice(0, Math.floor(Math.random() * 5) + 10);
            hashtags = hashtags.concat(selectedCategory);
        }

        const shuffledGeneric = shuffleArray(genericHashtags);
        const selectedGeneric = shuffledGeneric.slice(0, Math.floor(Math.random() * 6) + 15);
        hashtags = hashtags.concat(selectedGeneric);

        hashtags = shuffleArray(hashtags);

        const finalCount = Math.floor(Math.random() * 21) + 60; // Random between 60-80
        return hashtags.slice(0, finalCount);
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

