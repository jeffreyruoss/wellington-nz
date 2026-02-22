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
      image: 'img/locations/mount-victoria.jpg',
      imageCredit: 'Photo: Jeff Hitchcock, CC BY 2.0, Wikimedia Commons',
      description:
        'Multiple Outer Shire scenes were filmed along the wooded trails here, including the hobbits hiding under a tree root from a Ringwraith, Frodo\'s reading tree, and the "Shortcut to Mushrooms" tumble. The tree root was a Weta Workshop prop and is no longer present, but the trails are well-signposted as "Hobbit\'s Hideaway."',
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
      image: 'img/locations/kaitoke-rivendell.jpg',
      imageCredit: 'Photo: Kigsz, CC BY-SA 4.0, Wikimedia Commons',
      description:
        'Deep within this lush native bush, the Elven refuge of Rivendell was brought to life. The towering trees and moss-covered forest floor provided the backdrop for Rivendell exteriors across the trilogy, as well as the Fords of Isen. A reconstructed Elven archway remains as a photo opportunity.',
      film: 'The Lord of the Rings Trilogy',
      parking: 'Free but small parking lot at park entrance',
      accessible: true,
      accessNotes: 'Paved path to Rivendell arch; forest trails are uneven'
    },
    {
      id: 3,
      name: 'Harcourt Park',
      subtitle: 'Gardens of Isengard',
      coords: [-41.10125, 175.09414],
      image: 'img/locations/harcourt-park.jpg',
      imageCredit: 'Photo: Jeff Hitchcock, CC BY 3.0, Wikimedia Commons',
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
      image: 'img/locations/poets-park.jpg',
      imageCredit: 'Photo: Jeff Hitchcock, CC BY 3.0, Wikimedia Commons',
      description:
        'This stretch of the Hutt River became the mighty Anduin, the great river of Middle-earth. The Fellowship\'s boats departing Lothlorien were filmed here, one of several New Zealand rivers used for the full Anduin sequence.',
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
      image: 'img/locations/dry-creek-quarry.jpg',
      imageCredit: 'Photo: Jeff Hitchcock, CC BY 3.0, Wikimedia Commons',
      description:
        'This vast quarry is where the enormous Helm\'s Deep set was built for The Two Towers. After filming wrapped, the set was dismantled and rebuilt as Minas Tirith for The Return of the King. Both battles were staged here with thousands of extras.',
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
      image: 'img/locations/seatoun.jpg',
      imageCredit: 'Photo: KillerCapitalKiwi, CC BY-SA 4.0, Wikimedia Commons',
      description:
        'The rain-soaked village of Bree was constructed at this former army base. Frodo\'s fateful first encounter with Strider at the Prancing Pony inn was filmed on the set built here, since demolished after production wrapped.',
      film: 'The Fellowship of the Ring',
      parking: 'Street parking on Seatoun roads',
      accessible: false,
      accessNotes: 'Set demolished; site viewable from Burnham Street (access to former Fort Dorset may be restricted)'
    },
    {
      id: 7,
      name: 'Putangirua Pinnacles',
      subtitle: 'Paths of the Dead',
      coords: [-41.4507, 175.2223],
      image: 'img/locations/putangirua-pinnacles.jpg',
      imageCredit: 'Photo: Pseudopanax, Public Domain, Wikimedia Commons',
      description:
        'The dramatic hoodoo rock formations of the Pinnacles became the haunting Dimholt Road leading to the Paths of the Dead. Aragorn, Legolas, and Gimli walked through these towering stone pillars to summon the Army of the Dead.',
      film: 'The Return of the King',
      parking: 'Free car park at trailhead (partially damaged by washout)',
      accessible: true,
      accessNotes: 'Gravel track; ~45-min walk each way. Check DOC alerts before visiting — storm damage has affected tracks'
    },
    {
      id: 8,
      name: 'Fernside',
      subtitle: 'Lothlorien & Gladden Fields',
      coords: [-41.1175, 175.3178],
      image: 'img/locations/fernside.jpg',
      imageCredit: 'Photo: radspix, CC BY 2.0, Wikimedia Commons',
      description:
        'This historic homestead\'s lake and gardens were used for the Silverlode River scene where Galadriel farewells the Fellowship departing Lothlorien. The grounds also became the Gladden Fields where Smeagol and Deagol discover the One Ring in the opening of The Return of the King.',
      film: 'The Fellowship of the Ring / The Return of the King',
      parking: 'Visitor parking available on tour days',
      accessible: true,
      accessNotes: 'Guided garden tours available on weekdays (check fernside.garden for current hours). Property sold in late 2024 — verify access before visiting'
    },
    {
      id: 9,
      name: 'Queen Elizabeth Park',
      subtitle: 'Pelennor Fields',
      coords: [-40.9668, 174.951],
      image: 'img/locations/queen-elizabeth-park.jpg',
      imageCredit: 'Photo: Panamitsu, CC BY-SA 4.0, Wikimedia Commons',
      description:
        'These sweeping coastal grasslands were used for parts of the Battle of the Pelennor Fields, including scenes with the fallen Oliphaunt and Nazgul, largely filmed against blue screens. The famous Rohirrim cavalry charge was filmed separately near Twizel on the South Island.',
      film: 'The Return of the King',
      parking: 'Free parking at park entrances (vehicle gates close at dusk)',
      accessible: true,
      accessNotes: 'Flat grassland with paved and gravel paths'
    },
    {
      id: 10,
      name: 'Lyall Bay',
      subtitle: 'Dunharrow',
      coords: [-41.3375, 174.7935],
      image: 'img/locations/lyall-bay.jpg',
      imageCredit: 'Photo: Matt Boulton, CC BY-SA 2.0, Wikimedia Commons',
      description:
        'A cliff face by this popular surf beach was used for exterior shots of the Dunharrow encampment. The main Rohirrim camp scenes were filmed at a separate quarry on Mount Victoria. Lyall Bay is also where actors Billy Boyd and Viggo Mortensen famously learned to surf during production.',
      film: 'The Return of the King',
      parking: 'Street parking along Lyall Parade',
      accessible: true,
      accessNotes: 'Beach and cliff area accessible from the road'
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
      image: 'img/locations/weta-workshop.jpg',
      imageCredit: 'Photo: Kristina D.C. Hoeppner, CC BY-SA 2.0, Wikimedia Commons',
      description:
        'The legendary effects house where the armour, weapons, creatures, and miniatures of Middle-earth were crafted. Weta Workshop Experiences offers guided tours showcasing original props, armour, and creature effects. The Weta Cave retail store is at the corner of Weka Street and Camperdown Road.',
      film: 'All three films',
      parking: 'Free on-street parking nearby, but limited. Allow extra time',
      accessible: true,
      accessNotes: 'Wheelchair accessible; paid guided tours. Open 8:45am–6pm daily (extended summer hours)'
    },
    {
      id: 13,
      name: 'Hutt River at Gemstone Drive',
      subtitle: 'Aragorn Washes Ashore',
      coords: [-41.09189, 175.11061],
      image: 'img/locations/gemstone-drive.jpg',
      imageCredit: 'Photo: Jeff Hitchcock, CC BY 3.0, Wikimedia Commons',
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
