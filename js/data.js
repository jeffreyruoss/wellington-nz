/**
 * LOTR Wellington Filming Locations - Data Layer
 * All location data, route order, and route segments.
 */
(function () {
  'use strict';

  var LOCATIONS = [
    {
      id: 1,
      name: 'Mount Victoria',
      subtitle: 'Outer Shire',
      coords: [-41.30114, 174.78864],
      description:
        'The wooded slopes of Mount Victoria doubled as the forests outside Hobbiton where the four hobbits hid beneath a tree root from a sniffing Ringwraith. The eerie scene where the Black Rider looms overhead was filmed along the narrow trails here.',
      film: 'The Fellowship of the Ring',
      parking: 'Street parking on Alexandra Road',
      accessible: true,
      accessNotes: 'Paved lookout area; trails are uneven with steps'
    },
    {
      id: 2,
      name: 'Kaitoke Regional Park',
      subtitle: 'Rivendell',
      coords: [-41.0674, 175.1973],
      description:
        'Deep within this lush native bush, the Elven refuge of Rivendell was brought to life. The towering trees and moss-covered forest floor provided the ethereal backdrop for the Council of Elrond and the Fellowship\'s formation.',
      film: 'The Fellowship of the Ring',
      parking: 'Free parking lot at park entrance',
      accessible: true,
      accessNotes: 'Paved path to Rivendell arch; forest trails are uneven'
    },
    {
      id: 3,
      name: 'Harcourt Park',
      subtitle: 'Gardens of Isengard',
      coords: [-41.10125, 175.09414],
      description:
        'The stately grounds of Harcourt Park stood in for the once-beautiful gardens surrounding Saruman\'s tower of Orthanc. Scenes of Gandalf walking through Isengard before its corruption were filmed beneath the park\'s mature trees.',
      film: 'The Fellowship of the Ring',
      parking: 'Free parking at the park',
      accessible: true,
      accessNotes: 'Flat, well-maintained paths throughout the park'
    },
    {
      id: 4,
      name: 'Hutt River at Poet\'s Park',
      subtitle: 'River Anduin',
      coords: [-41.11911, 175.04189],
      description:
        'This stretch of the Hutt River became the mighty Anduin, the great river of Middle-earth. The Fellowship\'s boats were filmed gliding past here as they journeyed south from Lothlorien toward the Falls of Rauros.',
      film: 'The Fellowship of the Ring',
      parking: 'Street parking along River Road',
      accessible: true,
      accessNotes: 'Flat riverbank path; river access over gravel'
    },
    {
      id: 5,
      name: 'Dry Creek Quarry',
      subtitle: "Helm's Deep / Minas Tirith",
      coords: [-41.1664, 174.9531],
      description:
        'This vast quarry housed the enormous sets for both Helm\'s Deep and Minas Tirith. The Battle of Helm\'s Deep and the siege of the White City were staged here with thousands of extras and groundbreaking visual effects.',
      film: 'The Two Towers / The Return of the King',
      parking: 'Limited roadside parking',
      accessible: false,
      accessNotes: 'Active quarry with very limited public access; view from perimeter only'
    },
    {
      id: 6,
      name: 'Fort Dorset, Seatoun',
      subtitle: 'Bree & The Prancing Pony',
      coords: [-41.2833, 174.8275],
      description:
        'The rain-soaked village of Bree was constructed on this coastal headland. Frodo\'s fateful first encounter with Strider at the Prancing Pony inn was filmed on the set built here, since demolished after production wrapped.',
      film: 'The Fellowship of the Ring',
      parking: 'Street parking on Seatoun roads',
      accessible: false,
      accessNotes: 'Set has been demolished; site is open coastal land'
    },
    {
      id: 7,
      name: 'Putangirua Pinnacles',
      subtitle: 'Paths of the Dead',
      coords: [-41.4507, 175.2223],
      description:
        'The dramatic hoodoo rock formations of the Pinnacles became the haunting Dimholt Road leading to the Paths of the Dead. Aragorn, Legolas, and Gimli walked through these towering stone pillars to summon the Army of the Dead.',
      film: 'The Return of the King',
      parking: 'Free car park at trailhead',
      accessible: true,
      accessNotes: 'Gravel track to the pinnacles; about 45-minute walk each way'
    },
    {
      id: 8,
      name: 'Fernside Lodge',
      subtitle: 'Lothlorien',
      coords: [-41.1175, 175.3178],
      description:
        'The grand gardens and ancient trees of this private estate doubled as the golden forest realm of Lothlorien. The Fellowship\'s arrival and Galadriel\'s mirror scene were captured among the estate\'s towering oaks and elms.',
      film: 'The Fellowship of the Ring',
      parking: 'Private property parking',
      accessible: false,
      accessNotes: 'Private estate; accessible to lodge guests only'
    },
    {
      id: 9,
      name: 'Queen Elizabeth Park',
      subtitle: 'Pelennor Fields',
      coords: [-40.9668, 174.951],
      description:
        'The sweeping coastal grasslands of Queen Elizabeth Park were transformed into the Pelennor Fields outside Minas Tirith. The epic cavalry charge of the Rohirrim and the battle against Sauron\'s forces were filmed across these open plains.',
      film: 'The Return of the King',
      parking: 'Free parking at park entrances',
      accessible: true,
      accessNotes: 'Flat grassland with paved and gravel paths'
    },
    {
      id: 10,
      name: 'Lyall Bay',
      subtitle: 'Dunharrow',
      coords: [-41.3375, 174.7935],
      description:
        'The windswept dunes and shoreline at Lyall Bay served as the Rohirrim encampment at Dunharrow. King Theoden mustered his riders here before their fateful ride to the aid of Gondor at the Battle of Pelennor Fields.',
      film: 'The Return of the King',
      parking: 'Street parking along Lyall Parade',
      accessible: true,
      accessNotes: 'Beach access via ramps; sand may be difficult for wheelchairs'
    },
    {
      id: 11,
      name: 'Stone Street Studios',
      subtitle: 'Interior Sets',
      coords: [-41.31761, 174.81325],
      description:
        'Peter Jackson\'s principal studio complex where the majority of interior scenes were filmed. The Bag End interior, Moria\'s vast halls, and Helm\'s Deep interiors were all constructed inside these soundstages in the Wellington suburb of Miramar.',
      film: 'All three films',
      parking: 'No public parking available',
      accessible: false,
      accessNotes: 'Working film studio; no public access'
    },
    {
      id: 12,
      name: 'Weta Workshop',
      subtitle: 'Props & Effects Museum',
      coords: [-41.3115, 174.819],
      description:
        'The legendary effects house where the armour, weapons, creatures, and miniatures of Middle-earth were crafted. Weta Workshop Unleashed offers guided tours showcasing original props including the One Ring, Sauron\'s mace, and Lurtz\'s armor.',
      film: 'All three films',
      parking: 'Visitor parking at Weta Workshop',
      accessible: true,
      accessNotes: 'Fully accessible museum with paid guided tours'
    },
    {
      id: 13,
      name: 'Hutt River at Gemstone Drive',
      subtitle: 'Aragorn Washes Ashore',
      coords: [-41.09189, 175.11061],
      description:
        'This quiet stretch of the Hutt River is where Aragorn washed up on the riverbank after falling from the cliff during a Warg attack. The scene of his horse Brego finding him unconscious at the water\'s edge was shot along this peaceful shore.',
      film: 'The Two Towers',
      parking: 'Street parking on Gemstone Drive',
      accessible: true,
      accessNotes: 'Short walk from road to riverbank on flat ground'
    }
  ];

  var ROUTE_ORDER = [1, 12, 10, 6, 5, 3, 4, 13, 2];

  var ROUTE_SEGMENTS = [
    { from: 1, to: 12, distanceKm: 5, drivingMins: 10 },
    { from: 12, to: 10, distanceKm: 4, drivingMins: 8 },
    { from: 10, to: 6, distanceKm: 4, drivingMins: 8 },
    { from: 6, to: 5, distanceKm: 30, drivingMins: 30 },
    { from: 5, to: 3, distanceKm: 12, drivingMins: 15 },
    { from: 3, to: 4, distanceKm: 5, drivingMins: 8 },
    { from: 4, to: 13, distanceKm: 7, drivingMins: 10 },
    { from: 13, to: 2, distanceKm: 15, drivingMins: 20 }
  ];

  window.AppData = {
    LOCATIONS: LOCATIONS,
    ROUTE_ORDER: ROUTE_ORDER,
    ROUTE_SEGMENTS: ROUTE_SEGMENTS
  };
})();
