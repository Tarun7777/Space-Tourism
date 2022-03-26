export const content = {
  main: {
    navItems: [
      { prefix: '00 ', value: 'Home' },
      { prefix: '01 ', value: 'Destination' },
      { prefix: '02 ', value: 'Crew' },
      { prefix: '03 ', value: 'Technology' },
    ],
    destinationNavItems: [
      { prefix: '', value: 'Moon' },
      { prefix: '', value: 'Mars' },
      { prefix: '', value: 'Europa' },
      { prefix: '', value: 'Titan' },
    ],
    superHeadings: {
      home: { prefix: '', value: 'So, you want to travel to' },
      destination: { prefix: '01 ', value: 'Pick your destination' },
      crew: { prefix: '02 ', value: 'Meet your crew' },
      technology: { prefix: '03 ', value: 'Space launch 101' },
    },
  },
  home: {
    common: {
      heading: 'Space',
      subHeading:
        'Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!',
      buttonName: 'Explore',
    },
  },
  destination: {
    common: {
      avgDistance: 'Avg. distance',
      estTravelTime: 'Est. travel time',
    },
    entries: [
      {
        id: '1',
        name: 'Moon',
        description:
          'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        distance: '384,400 km',
        travel: '3 days',
      },
      {
        id: '2',
        name: 'Mars',
        description:
          'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
        distance: '225 mil. km',
        travel: '9 months',
      },
      {
        id: '3',
        name: 'Europa',
        description:
          'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
        distance: '628 mil. km',
        travel: '3 years',
      },
      {
        id: '4',
        name: 'Titan',
        description:
          'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
        distance: '1.6 bil. km',
        travel: '7 years',
      },
    ],
  },
  crew: {
    entries: [
      {
        id: '1',
        name: 'Douglas Hurley',
        role: 'Commander',
        bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
      },
      {
        id: '2',
        name: 'Mark Shuttleworth',
        role: 'Mission Specialist',
        bio: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
      },
      {
        id: '3',
        name: 'Victor Glover',
        role: 'Pilot',
        bio: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
      },
      {
        id: '4',
        name: 'Anousheh Ansari',
        role: 'Flight Engineer',
        bio: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
      },
    ],
  },
  technology: {
    common: {
      heading: 'The terminology...',
    },
    entries: [
      {
        id: '1',
        name: 'Launch vehicle',
        description:
          "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      },
      {
        id: '2',
        name: 'Spaceport',
        description:
          'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
      },
      {
        id: '3',
        name: 'Space capsule',
        description:
          "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      },
    ],
  },
};
