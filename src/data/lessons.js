export const lessons = [
  {
    id: "coins-in-brim-glass-surface-tension",
    title: "Coins in a Brim-Full Glass: Surface Tension",
    seoDescription: "Drop coins into a brim-full glass of water without spilling a drop. Run a 5-minute surface tension science experiment at home for Grades 5 to 8.",
    category: "Fluid Mechanics",
    grades: "Grades 5 to 8",
    timeRequired: "5 Minutes",
    safety: "Student Desk-Safe",
    safetyNote: null,
    boardFit: "CBSE Class 8 Force & Pressure / Class 11 Surface Tension",
    useCase: "5-minute classroom opener or science experiment at home",
    hook: "A glass is filled to the exact brim with water. How many coins can you slide in before a single drop overflows?",
    image: "/images/lessons/coins-brim-glass.jpg",
    diagramImage: null,
    reelUrl: "https://www.instagram.com/reel/DeZbzKagqcS/",
    materials: [
      "1 transparent glass filled completely to the top rim with tap water",
      "6 to 10 metal coins (1, 2, or 5 rupee coins)",
      "A flat tray or plate underneath to catch the final overflow"
    ],
    trap: {
      question: "The glass is already full to the absolute brim. What happens when you slide coins gently down the inside wall?",
      options: [
        "A) Water spills on the very first coin",
        "B) Water spills after 1 coin touches the bottom",
        "C) Multiple coins fit while water bulges above the rim"
      ],
      commonWrongGuess: "Most students bet the first coin forces water straight over the edge because a brim-full glass looks like it has zero room left."
    },
    steps: [
      {
        title: "Fill Past Flat Until Level",
        detail: "Place the glass on a tray and pour water slowly until it reaches the top rim so the surface looks dead flat at eye level."
      },
      {
        title: "Slide Coins Edge-First",
        detail: "Hold each coin vertically and slide it gently down the inner wall of the glass so you do not splash or disturb the surface."
      },
      {
        title: "Inspect the Rim at Eye Level",
        detail: "Stoop down to table height after each coin. Watch the water curve into a clear dome rising above the glass edge before breaking on coin 4."
      }
    ],
    physics: {
      whatHappens: "In our run, the brim-full glass held 3 full coins before a single drop spilled, and only broke on coin 4. Instead of pouring over right away, the water bulged upward above the rim.",
      mechanism: "Water molecules inside the liquid pull equally in every direction, while molecules at the open surface have no water above them. They pull harder sideways and inward toward their neighbors, forming a tight elastic skin called surface tension.",
      realWorldLink: "That same cohesive skin lets water striders walk on ponds, pulls sap up narrow plant tubes, and explains why tiny liquid drops pull into round beads instead of spreading flat."
    },
    relatedArticle: null,
    relatedProgram: {
      href: "/programs/curiosity-classroom",
      label: "See How Curiosity Classroom Runs in 45-Min Periods"
    }
  },
  {
    id: "corrugated-paper-bridge-geometry",
    title: "Corrugated Paper Bridge: Hold 50+ Coins",
    seoDescription: "Build a no-tape paper bridge between two books that holds 50+ coins. A 10-minute physics project and structural geometry demo for Grades 4 to 8.",
    category: "Structural Micro-Build",
    grades: "Grades 4 to 8",
    timeRequired: "10 Minutes",
    safety: "Student Desk-Safe",
    safetyNote: null,
    boardFit: "CBSE Class 7 Triangle & Its Properties / Class 8 Force & Structures",
    useCase: "Hands-on micro-build, physics project, or science exhibition demo",
    hook: "A flat sheet of paper collapses under 2 coins. Without adding tape, glue, or extra paper, how can the exact same sheet hold 50?",
    image: "/images/lessons/corrugated-paper-bridge.jpg",
    diagramImage: "/images/lessons/corrugated-paper-bridge-diagram.jpg",
    reelUrl: "https://www.instagram.com/reel/DcYrb8qg4yS/",
    materials: [
      "1 standard A4 sheet of paper (zero tape, zero glue)",
      "2 heavy books spaced about 15 cm apart as bridge pillars",
      "20 to 50 coins (or heavier washers) to load-test the span"
    ],
    trap: {
      question: "A flat A4 sheet bends and drops as soon as two coins land in the middle. How do you make that single sheet rigid without tape or extra layers?",
      options: [
        "A) Fold the sheet flat in half once or twice",
        "B) Roll it or pinch up the edges only",
        "C) Accordion-fold it into repeated zig-zag triangles"
      ],
      commonWrongGuess: "Most students fold the sheet in half flat on top of itself, which doubles thickness slightly but still sags and buckles under a handful of coins."
    },
    steps: [
      {
        title: "Test the Flat Failure Baseline",
        detail: "Span the unfolded sheet across two hardcover books and place coins at the center until it sags and drops onto the desk."
      },
      {
        title: "Fold Clean Accordion Pleats",
        detail: "Crease the sheet back and forth into even 1.5 cm pleats from end to end so the side profile forms a continuous row of triangles."
      },
      {
        title: "Load Coins Until Failure",
        detail: "Place the corrugated span across the same gap and stack coins along the center rib. Count how many hold before the pleats flatten."
      }
    ],
    physics: {
      whatHappens: "The flat sheet failed at 2 coins. Folded into triangular accordion pleats with zero tape or glue, the exact same paper held over 50 coins cleanly across the gap.",
      mechanism: "A 4-sided rectangle or square has free corner angles that shear sideways under vertical load. A triangle locks all three internal angles permanently by SSS congruence, forcing the thin paper to resist pure vertical compression instead of bending flat.",
      realWorldLink: "This folded triangle geometry is called corrugation. It is the exact reason cardboard shipping boxes hold heavy appliances, aircraft wing spars stay light, and steel truss bridges carry trains."
    },
    relatedArticle: {
      slug: "why-memorizing-facts-destroys-engineering-intuition",
      title: "Why Memorizing Facts Destroys Engineering Intuition"
    },
    relatedProgram: {
      href: "/programs/curiosity-classroom",
      label: "Explore Our Physical Math Lab Modules"
    }
  },
  {
    id: "melting-ice-brim-glass-archimedes",
    title: "Melting Ice in a Brim Glass: Does It Spill?",
    seoDescription: "Float ice above the rim of a full water glass and watch it melt. Run this Archimedes principle physics project for Grades 6 to 9 using kitchen items.",
    category: "Buoyancy & Density",
    grades: "Grades 6 to 9",
    timeRequired: "15 Minutes (Watch Melt)",
    safety: "Student Desk-Safe",
    safetyNote: null,
    boardFit: "CBSE Class 9 Gravitation, Thrust & Archimedes Principle",
    useCase: "Classroom prediction challenge or science experiment at home",
    hook: "Ice cubes float sticking well above the rim of a brim-full glass of water. When all that ice melts, does the glass spill over?",
    image: "/images/lessons/melting-ice-brim.jpg",
    diagramImage: null,
    reelUrl: "https://www.instagram.com/reel/Ddyj8rEjl-k/",
    materials: [
      "1 tall clear drinking glass",
      "3 to 4 ice cubes",
      "Cold tap water filled to the absolute brim",
      "A dry napkin underneath to prove zero drops spilled"
    ],
    trap: {
      question: "Roughly 10% of the floating ice sticks up above the glass rim. Once the ice turns completely into liquid water, what happens to the level?",
      options: [
        "A) Water overflows down the side of the glass",
        "B) Water stays right at the brim with zero spill",
        "C) Half the ice volume pours over"
      ],
      commonWrongGuess: "Almost everyone points at the ice sticking out above the rim and bets that extra frozen volume has to overflow as soon as it melts."
    },
    steps: [
      {
        title: "Float the Ice First",
        detail: "Set the glass on a dry paper napkin, drop in 3 to 4 ice cubes, and slowly top up cold water until the liquid meets the very edge."
      },
      {
        title: "Mark or Photograph the Protruding Ice",
        detail: "Look horizontally across the rim so students clearly see solid ice sitting above the glass edge."
      },
      {
        title: "Let It Melt Unattended",
        detail: "Leave the glass on the desk for 15 to 20 minutes while teaching the rest of the period. Check the dry napkin once the last sliver melts."
      }
    ],
    physics: {
      whatHappens: "Not a single drop spilled over the edge. The water level stayed right at the brim, and with bubbly freezer ice it can even dip by a hair.",
      mechanism: "Water expands by about 9% when it freezes, making ice less dense (0.92 g/cm3 vs 1.0 g/cm3), so it floats with ~10% sticking out. By Archimedes principle, a floating object already pushes aside water equal to its full weight. When the ice melts back into water, its volume shrinks by 9% and fits straight into the underwater hole it already carved out.",
      realWorldLink: "This explains a common climate myth: melting floating Arctic sea ice does not raise global sea levels because it already displaced its weight. Oceans rise when land-based glaciers in Greenland and Antarctica slide into the sea, and when warmer water expands."
    },
    relatedArticle: null,
    relatedProgram: {
      href: "/programs/curiosity-classroom",
      label: "Bring Anomaly-First Science to Regular Periods"
    }
  },
  {
    id: "submerged-breathing-leaf-photosynthesis",
    title: "Submerged Breathing Leaf: Live Oxygen Bubbles",
    seoDescription: "Submerge a fresh green leaf in tap water in sunlight to see oxygen bubbles form at stomata pores. A zero-kit biology experiment for Grades 5 to 8.",
    category: "Plant Biology",
    grades: "Grades 5 to 8",
    timeRequired: "10 Min Setup (+1 Hr Sun)",
    safety: "Student Desk-Safe",
    safetyNote: null,
    boardFit: "CBSE Class 7 Nutrition in Plants / Class 10 Life Processes",
    useCase: "Low-cost classroom windowsill lab or biology science working model",
    hook: "Submerge a fresh green leaf completely underwater in sunlight. Where do hundreds of sparkling gas bubbles come from?",
    image: "/images/lessons/submerged-breathing-leaf.jpg",
    diagramImage: null,
    reelUrl: "https://www.instagram.com/p/Dcqs5sXoKSF/",
    materials: [
      "1 freshly plucked green leaf (avoid waxy dried leaves; spinach or houseplant leaves work well)",
      "1 clear glass jar or beaker filled with room-temperature tap water",
      "A sunny windowsill or bright desk lamp"
    ],
    trap: {
      question: "A leaf has no lungs or gills and is completely underwater. After an hour in sunlight, bubbles cover its surface. Where did the gas come from?",
      options: [
        "A) Air trapped on the table warming up",
        "B) Water boiling gently in the sun",
        "C) Live plant cells exhaling oxygen gas through stomata pores"
      ],
      commonWrongGuess: "Students often assume the bubbles are just dissolved air coming out of warm tap water rather than gas actively produced by the leaf."
    },
    steps: [
      {
        title: "Submerge a Freshly Plucked Leaf",
        detail: "Pluck a healthy green leaf and press it completely under tap water inside a clear jar so it rests submerged against the glass wall."
      },
      {
        title: "Place in Direct Sunlight (And Run a Dark Control)",
        detail: "Put the jar on a sunny windowsill for 45 to 60 minutes. For comparison, keep a second identical jar inside a dark cupboard."
      },
      {
        title: "Inspect the Underside Close Up",
        detail: "Look along the leaf underside and cut edge without shaking the jar. Count how many tiny gas pearls cling to the sunny leaf versus the dark control."
      }
    ],
    physics: {
      whatHappens: "Within 30 to 60 minutes in direct sun, hundreds of tiny silver gas pearls coat the underside and cut edges of the submerged leaf, while a jar left in the dark shows almost none.",
      mechanism: "Even after being plucked, living leaf cells keep photosynthesizing as long as light, water, and dissolved carbon dioxide are present. The leaf absorbs carbon dioxide and water to make glucose and releases pure oxygen through microscopic stomata pores. Underwater, that gas cannot vanish into the air, so it beads visibly on the leaf.",
      realWorldLink: "Schools often spend 50,000 rupees on animated biology software to show stomata diagrams. A zero-cost leaf on a windowsill lets students watch gas exchange happen live on real tissue."
    },
    relatedArticle: null,
    relatedProgram: {
      href: "/programs/curiosity-classroom",
      label: "See How Curioso Replaces Screen Simulations"
    }
  },
  {
    id: "phone-on-tilted-palm-static-friction",
    title: "Phone on a Tilted Palm: Static Friction Test",
    seoDescription: "Place your phone flat on an open tilted palm to test static friction direction. A 5-minute CBSE and ICSE mechanics demo with zero lab equipment.",
    category: "Mechanics & Forces",
    grades: "Grades 7 to 10",
    timeRequired: "5 Minutes",
    safety: "Student Desk-Safe",
    safetyNote: null,
    boardFit: "CBSE Class 8 Friction / Class 11 Laws of Motion",
    useCase: "Instant whole-class desk hook breaking static friction myths",
    hook: "Rest a phone flat on your open tilted palm without gripping it. Is friction acting right now, and which way does it point?",
    image: "/images/lessons/phone-tilted-palm.jpg",
    diagramImage: "/phone_friction_vector.png",
    reelUrl: "https://www.instagram.com/p/DdOUq0plI73/",
    materials: [
      "1 smartphone (or a smooth notebook/eraser if students are at school desks)",
      "Your open, flat palm with fingers spread straight out"
    ],
    trap: {
      question: "The phone is sitting completely still on your tilted hand. Which direction does friction point?",
      options: [
        "A) Up the tilted palm toward your fingertips",
        "B) Down the slope toward your wrist",
        "C) Friction is zero because the phone is not moving"
      ],
      commonWrongGuess: "Over 70% of students guess Option C (friction is zero) because school drills tie friction strictly to sliding or rubbing objects."
    },
    steps: [
      {
        title: "Hold Your Palm Flat With Fingers Straight",
        detail: "Place an eraser, notebook, or phone squarely on your flat palm. Keep your thumb and fingers tucked down so nothing hooks the edges."
      },
      {
        title: "Tilt Slowly Until It Almost Slides",
        detail: "Angle your wrist upward to around 20 to 30 degrees until the object feels ready to slip, yet stays locked completely still."
      },
      {
        title: "Feel What Happens at the Failure Angle",
        detail: "Tilt a few degrees steeper until the object suddenly breaks free and slides down your wrist. Ask what vanished at that exact angle."
      }
    ],
    physics: {
      whatHappens: "Up to a critical tilt angle, the phone stays completely stationary on your angled palm without any finger grip. Tilt just past that limit and it suddenly accelerates down the slope.",
      mechanism: "Gravity pulls part of the phone's weight down along the slope of your hand. Because the phone is stationary, net force must be zero, so an equal force pushes straight UP the slope. That self-adjusting grip is static friction: tiny at a 5-degree tilt, stronger at 25 degrees, failing only when the slope exceeds maximum grip.",
      realWorldLink: "Without static friction acting on stationary objects, every parked car on a mild slope, every nail driven into wood, and every ladder leaned against a wall would slide away instantly."
    },
    relatedArticle: {
      slug: "the-one-book-cliche",
      title: "The One-Book Cliché: Why Classrooms Only Teach 1% of Friction"
    },
    relatedProgram: {
      href: "/programs/curiosity-classroom",
      label: "Explore Everyday Physics Modules"
    }
  },
  {
    id: "walking-foot-static-friction-direction",
    title: "Walking Foot Push-Off: Friction Direction",
    seoDescription: "Test which way ground friction pushes your shoe when you walk forward. A quick physics experiment breaking the textbook myth for Grades 7 to 10.",
    category: "Mechanics & Forces",
    grades: "Grades 7 to 10",
    timeRequired: "5 Minutes",
    safety: "Student Desk-Safe",
    safetyNote: null,
    boardFit: "CBSE Class 8 Friction / Class 9 Laws of Motion",
    useCase: "5-minute misconception breaker for middle and high school physics",
    hook: "Every textbook says friction opposes motion. When you take a step forward, which direction does ground friction push your foot?",
    image: "/images/lessons/walking-foot-friction.jpg",
    diagramImage: "/images/lessons/walking-foot-diagram.jpg",
    reelUrl: "https://www.instagram.com/reel/Ddd9m0NjdVZ/",
    materials: [
      "Your own shoes or sandals on a smooth tiled floor",
      "1 loose sheet of A4 paper or a dry plastic folder (optional low-friction slip test while holding a desk)"
    ],
    trap: {
      question: "You walk forward across the classroom. Which direction does ground friction act on your back push-off foot?",
      options: [
        "A) Backwards, opposing your forward walk",
        "B) Forwards, pushing you ahead",
        "C) Friction does not push; it only stops things"
      ],
      commonWrongGuess: "More than 75% of students and adults pick Option A (backwards) because they memorized the flawed one-liner that friction always opposes motion."
    },
    steps: [
      {
        title: "Freeze Mid-Stride on Your Back Toe",
        detail: "Stand beside your desk and take one slow-motion step forward. Pay close attention to which direction the ball of your back foot pushes against the tiles."
      },
      {
        title: "Test on a Loose Paper Sheet",
        detail: "With one hand steadying yourself on a sturdy desk, place a loose sheet of paper under your back shoe and try pushing forward to step ahead."
      },
      {
        title: "Watch Where the Paper Flies",
        detail: "Note which direction the paper shoots out behind you. That tells you the exact direction your shoe pushes on the floor."
      }
    ],
    physics: {
      whatHappens: "Your back foot pushes backward against the floor (shooting the loose paper behind you), while the floor's grip pushes your body forward.",
      mechanism: "Friction does not oppose motion; friction opposes relative sliding between two touching surfaces. Because your shoe sole tries to slide backward as you push off, static ground friction pushes your shoe in the opposite direction: FORWARDS. By Newton's third law, that forward push is what moves you across the room.",
      realWorldLink: "Try walking on wet ice or oil and your foot slips backward with zero forward drive. Car tires, bicycle wheels, and running shoes all move forward only because static ground friction pushes them ahead."
    },
    relatedArticle: {
      slug: "the-one-book-cliche",
      title: "The One-Book Cliché: Why Classrooms Only Teach 1% of Friction"
    },
    relatedProgram: {
      href: "/programs/curiosity-classroom",
      label: "See How Curiosity Classroom Fixes Textbook Myths"
    }
  },
  {
    id: "soda-can-steam-implosion-pressure",
    title: "Crushing a Soda Can With Steam & Ice Water",
    seoDescription: "Boil a teaspoon of water in an aluminum can and plunge it into ice water to watch atmospheric pressure crush metal. Adult-supervised physics demo.",
    category: "Pressure & Gas Laws",
    grades: "Grades 7 to 10",
    timeRequired: "10 Minutes",
    safety: "Teacher / Adult Stove Demo",
    safetyNote: "Requires a stove or hot plate, metal tongs, and safety distance. An adult or teacher must handle the heated aluminum can.",
    boardFit: "CBSE Class 8 Air & Atmospheric Pressure / Class 11 Gas Laws",
    useCase: "Teacher classroom demonstration or adult-supervised physics project",
    hook: "Heat a spoonful of water inside an empty soda can and flip it upside down into ice water. What crushes solid metal in under a second?",
    image: "/images/lessons/soda-can-implosion.jpg",
    diagramImage: null,
    reelUrl: "https://www.instagram.com/reel/Das7PK6AfSG/",
    materials: [
      "1 empty, rinsed aluminum soda can with 1 tablespoon of tap water inside",
      "1 large transparent bowl filled with ice water",
      "1 stove or hot plate + long metal tongs + protective eye/hand gear"
    ],
    trap: {
      question: "Once steam fills the open hot can and you invert it fast into an ice bath sealing the mouth underwater, what happens?",
      options: [
        "A) Cold air pushes in slowly and water drains out",
        "B) The metal can implodes inward with a loud bang",
        "C) Nothing changes because the aluminum wall is rigid"
      ],
      commonWrongGuess: "Most observers expect gradual cooling or gentle sucking up of water, never realizing the invisible weight of room air outside can flatten metal instantly."
    },
    steps: [
      {
        title: "Boil Out the Room Air",
        detail: "Adult heats the can holding 1 tablespoon of water on a stove until thick steam visibly vents from the top tab opening for 30 seconds, pushing regular air out."
      },
      {
        title: "Grip Low With Tongs and Invert Fast",
        detail: "Using metal tongs in one smooth turn, flip the can upside down and plunge the mouth 2 to 3 cm below the ice-water surface to seal the opening."
      },
      {
        title: "Debug Weak Seals If Needed",
        detail: "If the can only sips water without crushing, the flip was slow or air leaked in at the rim. Retry with full steam output and a crisp seal."
      }
    ],
    physics: {
      whatHappens: "The instant the can opening hits the ice water, steam inside collapses back into a few drops of liquid, creating an internal vacuum, and the metal walls buckle inward with a sharp bang.",
      mechanism: "Steam takes up roughly 1,600 times more space than the liquid water it boiled from. Rapid cooling in the ice bath condenses that steam back into tiny water droplets, crashing the pressure inside to near zero. Outside, 101,325 Pascals of normal atmospheric pressure slams inward on the unbraced walls.",
      realWorldLink: "This is the exact failure that crushes industrial railway tank cars when workers seal a hot tank immediately after steam-cleaning without opening a pressure relief vent."
    },
    relatedArticle: {
      slug: "physics-of-the-crash",
      title: "The Physics of the Crash"
    },
    relatedProgram: {
      href: "/programs/stem-lab",
      label: "Explore Our Raw-Material STEM Lab Setup"
    }
  },
  {
    id: "inverted-glass-water-cardboard-pressure",
    title: "Inverted Glass of Water & Cardboard Card Trick",
    seoDescription: "Flip a full glass of water upside down with only a flat card holding it in place. A hands-on atmospheric pressure experiment for Grades 5 to 8.",
    category: "Pressure & Gas Laws",
    grades: "Grades 5 to 8",
    timeRequired: "5 Minutes",
    safety: "Desk-Safe (Over Sink/Tray)",
    safetyNote: null,
    boardFit: "CBSE Class 8 Force & Pressure / Atmospheric Weight",
    useCase: "Quick science experiment at home or sink-side classroom pressure hook",
    hook: "Flip a glass of water completely upside down with only a loose piece of cardboard under it. Why does the water stay suspended?",
    image: "/images/lessons/inverted-water-glass.jpg",
    diagramImage: null,
    reelUrl: "https://www.instagram.com/reel/DZkgAKWS24g/",
    materials: [
      "1 smooth-rimmed drinking glass filled right to the top with tap water",
      "1 flat, stiff square of cardboard or laminated playing card larger than the rim",
      "A sink or deep bucket underneath for the first flip"
    ],
    trap: {
      question: "You invert the glass over a sink and take your bottom hand away from the cardboard. What holds the heavy water column up?",
      options: [
        "A) Sticky suction from wet paper alone",
        "B) Upward atmospheric air pressure pushing harder than the water weight",
        "C) The cardboard acts like a solid lid screwed on"
      ],
      commonWrongGuess: "Kids usually credit glue-like wetness or magic suction, missing that a 10 cm column of water pushes down with less than 1% of normal room air pressure."
    },
    steps: [
      {
        title: "Fill to the Rim and Slide the Card",
        detail: "Stand over a sink or bucket. Fill the glass completely so no large air bubble stays trapped when you press the stiff card flat across the rim."
      },
      {
        title: "Flip Over Cleanly With One Palm",
        detail: "Hold the card flush against the mouth with one palm, invert the glass smoothly upside down, and steady the glass with your upper hand."
      },
      {
        title: "Slide Your Bottom Hand Away",
        detail: "Gently lower your bottom palm clear of the card. Watch the wet seal hold the entire water column suspended in mid-air."
      }
    ],
    physics: {
      whatHappens: "Once your lower hand pulls clear, the loose cardboard stays pressed tightly against the rim and the full glass of water hangs upside down without pouring out.",
      mechanism: "Normal atmospheric air pushes upward from underneath the card at roughly 101,325 Pascals, equal to the weight of a 10-meter column of water. Because your drinking glass is only ~12 cm tall, upward air pressure easily beats the downward weight of the water as long as the wet seal stops air bubbles from sneaking in.",
      realWorldLink: "This is the same reason astronauts wear pressurized suits. Without atmospheric air pressing inward on our bodies, human fluids would expand and boil at normal body temperature in the vacuum of space."
    },
    relatedArticle: null,
    relatedProgram: {
      href: "/programs/curiosity-classroom",
      label: "See All Curiosity Classroom Modules"
    }
  },
  {
    id: "boiling-milk-skin-occlusion-science",
    title: "Why Milk Boils Over While Water Does Not",
    seoDescription: "Compare boiling milk and water to see how fats and proteins trap steam. Connect occlusion in the kitchen to skin moisturizers for Grades 6 to 9.",
    category: "Everyday Chemistry",
    grades: "Grades 6 to 9",
    timeRequired: "10 Minutes",
    safety: "Teacher / Adult Stove Demo",
    safetyNote: "Conducted at a kitchen stove with an adult watching the pan closely so foaming milk does not overflow or scald.",
    boardFit: "CBSE Class 9 Matter in Our Surroundings / Interdisciplinary Chemistry",
    useCase: "Kitchen science demo linking thermal phase change to skin care chemistry",
    hook: "Boiling water bubbles calmly in an open pot, while boiling milk surges over the rim in seconds. What hidden skin causes the boil-over?",
    image: "/images/lessons/boiling-milk-occlusion.jpg",
    diagramImage: null,
    reelUrl: "https://www.instagram.com/reel/DWlzCXjEqJb/",
    materials: [
      "1 stainless steel saucepan with 1 cup of whole milk",
      "1 matching saucepan with 1 cup of plain water (for side-by-side comparison)",
      "A gas stove or induction cooktop with adult supervision"
    ],
    trap: {
      question: "Both milk and water are mostly water heated on the same burner. Why does milk suddenly volcano over the pot edge while water stays inside?",
      options: [
        "A) Milk boils at half the temperature of water",
        "B) Milk fats and proteins weave a surface skin that traps rising steam",
        "C) Water has less dissolved oxygen to bubble"
      ],
      commonWrongGuess: "Most people think milk is simply thicker or foams like soap, missing that a physical surface film blocks steam from escaping."
    },
    steps: [
      {
        title: "Simmer Water vs Milk Side by Side",
        detail: "With an adult at the stove, heat 1 cup of water and 1 cup of milk in two open steel pots on medium heat and watch their top surfaces."
      },
      {
        title: "Spot the Creasing Surface Film",
        detail: "Notice how steam escapes cleanly through breaking bubbles in plain water, while milk forms a silky wrinkled layer of fats and proteins across the top."
      },
      {
        title: "Watch Steam Lift the Skin",
        detail: "As water inside the milk turns to steam below that sealed layer, pressure builds underneath and lifts the entire foam dome up until heat is turned off or the skin breaks."
      }
    ],
    physics: {
      whatHappens: "Water vents steam freely and boils in place, while milk forms an airtight surface skin that traps expanding steam underneath until the foam surges right over the rim.",
      mechanism: "This sealing mechanism is called occlusion: a physical barrier that traps water vapor inside. In heated milk, coagulated proteins (casein) and fats float up and cross-link into a flexible blanket that stops steam bubbles from bursting.",
      realWorldLink: "Cosmetic chemists use the exact same occlusion principle in thick winter moisturizers. Instead of only adding water, heavy creams coat skin in a semi-occlusive barrier that slows down moisture evaporation into dry air."
    },
    relatedArticle: null,
    relatedProgram: {
      href: "/programs/curiosity-classroom",
      label: "Explore Concept-First Interdisciplinary Modules"
    }
  },
  {
    id: "bernoulli-paper-experiment",
    title: "Bernoulli Paper Test: Blowing Between Sheets",
    seoDescription: "Blow air between two hanging A4 sheets and watch them snap shut instead of flying apart. A 5-minute Bernoulli principle experiment for Grades 6 to 9.",
    category: "Aerodynamics",
    grades: "Grades 6 to 9",
    timeRequired: "5 Minutes",
    safety: "Student Desk-Safe",
    safetyNote: null,
    boardFit: "CBSE Class 8 Wind, Storms & Cyclones / Class 11 Fluid Dynamics",
    useCase: "Zero-cost classroom physics demo or aerodynamics science project",
    hook: "Hold two sheets of A4 paper 5 cm apart and blow air straight between them. Do they blow apart or slam together?",
    image: "/images/lessons/bernoulli-airflow.jpg",
    diagramImage: null,
    reelUrl: "https://www.instagram.com/reel/DYJYAhvy4fM/",
    materials: [
      "2 standard sheets of A4 paper"
    ],
    trap: {
      question: "You blow a steady stream of air directly into the gap between two hanging sheets of paper. Which way do the sheets move?",
      options: [
        "A) Push outward away from each other",
        "B) Snap violently inward toward each other",
        "C) Hang motionless without moving"
      ],
      commonWrongGuess: "Intuition says the blast of breath acts like a wedge pushing the two papers wide apart."
    },
    steps: [
      {
        title: "Hold Two Sheets Parallel",
        detail: "Pinch the top edge of one A4 sheet in each hand so they hang vertically about 5 cm apart right in front of your face."
      },
      {
        title: "Lock In Predictions First",
        detail: "Ask the room which way the papers will move before anyone blows, so the wrong expectation is out in the open."
      },
      {
        title: "Blow Steadily Straight Down the Gap",
        detail: "Exhale a fast, steady stream of air straight between the two sheets (not onto the front edges) and watch them snap together."
      }
    ],
    physics: {
      whatHappens: "Instead of pushing apart, both sheets of paper pull sharply inward and smack together in the middle of the airstream.",
      mechanism: "By Bernoulli's principle, when fluid speed goes up, internal fluid pressure drops. Blowing fast air between the sheets lowers air pressure inside the gap while normal, still air on the outsides stays at higher atmospheric pressure and pushes the sheets inward.",
      realWorldLink: "Airplane wings curve longer along the top surface so air accelerates over the wing, dropping pressure above while higher pressure underneath pushes the aircraft upward into lift."
    },
    relatedArticle: {
      slug: "the-bernoulli-problem",
      title: "The Bernoulli Problem: Why Memorization Is Failing K-12 Science"
    },
    relatedProgram: {
      href: "/programs/curiosity-classroom",
      label: "See How Curioso Breaks Textbook Intuition"
    }
  },
  {
    id: "colored-shadows-experiment",
    title: "Colored Shadows: Mixing RGB Light on a Wall",
    seoDescription: "Aim red, green, and blue lights at a pencil to cast cyan, magenta, and yellow shadows. An optics and screen color science experiment for Grades 6 to 9.",
    category: "Light & Optics",
    grades: "Grades 6 to 9",
    timeRequired: "15 Minutes",
    safety: "Student Desk-Safe",
    safetyNote: null,
    boardFit: "CBSE Class 7 Light / Class 10 Human Eye & Colourful World",
    useCase: "Optics working model or additive color mixing classroom lab",
    hook: "Shine red, green, and blue lights onto a white wall and block the beam with a pencil. Why are the shadows cyan, magenta, and yellow?",
    image: "/images/lessons/colored-shadows-rgb.jpg",
    diagramImage: null,
    reelUrl: null,
    materials: [
      "3 flashlights or phone torches with red, green, and blue cellophane/filter film (or 3 colored LEDs)",
      "1 blank white wall or white A4 sheet taped upright",
      "1 pencil or upright marker to cast shadows"
    ],
    trap: {
      question: "Three colored lights mix to make white light on a wall. When a pencil blocks one light path at a time, what color are the shadows?",
      options: [
        "A) Plain dark grey or black",
        "B) Red, green, and blue shadows",
        "C) Bright cyan, magenta, and yellow silhouettes"
      ],
      commonWrongGuess: "Used to mixing paint (which turns muddy brown), students expect shadows to stay black or match whichever flashlight was turned on."
    },
    steps: [
      {
        title: "Align RGB Beams Onto White Paper",
        detail: "Dim the room lights and aim the red, green, and blue lights close together onto a white surface until their overlapping patch reads white."
      },
      {
        title: "Hold a Pencil 10 cm From the Wall",
        detail: "Place an upright pencil between the three lights and the wall so each beam casts its own slightly offset shadow."
      },
      {
        title: "Trace Which Light Each Shadow Blocks",
        detail: "Cover one flashlight at a time to identify each colored silhouette: blocking red leaves cyan (green + blue), blocking green leaves magenta, blocking blue leaves yellow."
      }
    ],
    physics: {
      whatHappens: "Instead of one dark grey shadow, three sharp silhouettes appear side by side in bright cyan, magenta, and yellow against the white backdrop.",
      mechanism: "Pigments and paint mix subtractively by absorbing wavelengths, whereas light mixes additively. Where the pencil blocks only the red light, green and blue beams still reach the wall and add together in your eye as cyan. Blocking green leaves red + blue (magenta); blocking blue leaves red + green (yellow).",
      realWorldLink: "Every smartphone, laptop, and TV display uses this exact additive rule: microscopic red, green, and blue sub-pixels light up in combination to trick your eyes into seeing yellow, orange, and white."
    },
    relatedArticle: null,
    relatedProgram: {
      href: "/programs/stem-lab",
      label: "Explore Our Middle School STEM Lab Modules"
    }
  }
];
