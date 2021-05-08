export const sampleData = [
    {
        id: '1',
        title: 'Trip to Empire State building',
        date: new Date ('2018-03-21'),
        category: 'film',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
        city: 'NY, USA',
        venue: 'Empire State Building, 5th Avenue, New York, NY, USA',
        hostedBy: 'Bob',
        hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
        attendees: [
            {
                id: 'a',
                displayName: 'Bob',
                photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
            },
            {
                id: 'b',
                displayName: 'Tom',
                photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
            }
        ],
        url: 'https://www.youtube.com/watch?v=010_mhlfZpA'
    },
    {
        id: '2',
        title: 'Trip to Punch and Judy Pub',
        date: new Date ('2018-03-18'),
        category: 'travel',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
        city: 'London, UK',
        venue: 'Punch & Judy, Henrietta Street, London, UK',
        hostedBy: 'Tom',
        hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
        attendees: [
            {
                id: 'c',
                displayName: 'Bob',
                photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
            },
            {
                id: 'd',
                displayName: 'Tom',
                photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
            }
        ],
        url: 'https://www.youtube.com/watch?v=H5SMtN6Qa6w'
    }
];
