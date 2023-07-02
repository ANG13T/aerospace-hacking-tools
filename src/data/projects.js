
const projects = [
  {
    name: "CCSDSPy",
    dateAdded: "6/16/2023",
    tags: ["Satellites", "OSINT"],
    description: "A Python package for reading CCSDS packet data.",
    website: "https://docs.ccsdspy.org/en/latest/",
    image: "ccsdspy.png"
  },
  {
    name: "Satpy",
    dateAdded: "6/21/2023",
    tags: ["Satellites", "OSINT"],
    description: "Python library for obtaining remote sensing data and writing it to various file formats.",
    website: "https://github.com/pytroll/satpy",
    image: "satpy.png"
  },
  {
    name: "Python SGP4",
    dateAdded: "6/16/2023",
    tags: ["Satellites"],
    description: "Python version of the SGP4 satellite position library.",
    website: "https://github.com/brandon-rhodes/python-sgp4",
    image: "python-sgp4.png"
  },
  {
    name: "poliastro",
    dateAdded: "6/21/2023",
    tags: ["Astrodynamics"],
    description: "Python library for interactive Astrodynamics and Orbital Mechanics.",
    website: "https://docs.poliastro.space/en/stable/",
    image: "poliastro.png"
  },
  {
    name: "Skyfield",
    dateAdded: "6/21/2023",
    tags: ["Astrodynamics", "Astronomy"],
    description: "Skyfield computes positions for the stars, planets, and satellites in orbit around the Earth.",
    website: "https://rhodesmill.org/skyfield/",
    image: "skyfield.png"
  },
  {
    name: "satellite.js",
    dateAdded: "6/21/2023",
    tags: ["Satellites"],
    description: "Modular set of functions for SGP4 and SDP4 propagation of TLEs.",
    website: "https://github.com/shashwatak/satellite-js",
    image: "satellite-js.png"
  },
  {
    name: "Cesium",
    dateAdded: "6/21/2023",
    tags: ["Earth", "OSINT"],
    description: "Cesium is the open platform for software applications designed to unleash the power of 3D data.",
    website: "https://github.com/CesiumGS/cesium",
    image: "cesium.png"
  },
  {
    name: "SOLM",
    dateAdded: "6/21/2023",
    tags: ["Satellites"],
    description: "Satellite Operations Language Meta-model (SOLM) for representing spacecraft operations procedures.",
    website: "https://www.omg.org/spec/SOLM/About-SOLM/",
    image: "SOLM.png"
  },
  {
    name: "OpenTsiolkovsky",
    dateAdded: "6/21/2023",
    tags: ["Spacecraft", "Simulation"],
    description: "Rocket Flight Simulator.",
    website: "https://github.com/istellartech/OpenTsiolkovsky",
    image: "opent.png"
  },
  {
    name: "ISS Docking Simulator",
    dateAdded: "6/21/2023",
    tags: ["Spacecraft", "Simulation"],
    description: "Simulator with the controls of used by NASA Astronauts to  pilot the SpaceX Dragon 2 vehicle to the ISS.",
    website: "https://iss-sim.spacex.com/",
    image: "iss-docking-sim.jpeg"
  },
  {
    name: "SatFlare",
    dateAdded: "6/21/2023",
    tags: ["Radio", "Satellites"],
    description: "A generic satellite data processing software.",
    website: "https://github.com/SatDump/SatDump",
    image: "satdump.png"
  },
  {
    name: "SatIntel",
    dateAdded: "6/28/2023",
    tags: ["Satellites"],
    description: "OSINT tool for Satellites 🛰. Extract satellite telemetry, receive orbital predictions, and parse TLEs 🔭",
    website: "https://github.com/ANG13T/SatIntel",
    image: "satintel.png"
  },
  {
    name: "SpaceXTelemetry API",
    dateAdded: "6/28/2023",
    tags: ["Spacecraft", "Launches"],
    description: "Open Source REST API for telemetry and predictions to rocket launches",
    website: "https://github.com/R4yGM/SpaceXTelemetry-Api",
    image: "spacextelemetry.png"
  },
  {
    name: "Astrocats",
    dateAdded: "6/28/2023",
    tags: ["Planets", "Astronomy"],
    description: "Open Astronomy Catalogs",
    website: "https://astrocats.space/",
    image: "astrocats.png"
  },
  {
    name: "Astrometry.net",
    dateAdded: "6/28/2023",
    tags: ["Star Trackers", "Astronomy"],
    description: "Astrometric calibration meta-data tool for astronomical imaging",
    website: "http://astrometry.net/",
    image: "astrometry.png"
  },
  {
    name: "Virgo",
    dateAdded: "6/28/2023",
    tags: ["Radio", "Astronomy"],
    description: "A Versatile Spectrometer for Radio Astronomy",
    website: "https://github.com/0xCoto/VIRGO",
    image: "virgo.png"
  },
  {
    name: "100,000 Stars",
    dateAdded: "6/28/2023",
    tags: ["Star Trackers", "Astronomy"],
    description: "Interactive Visualization of the Stellar Neighborhood showing the location of 119,617 nearby stars",
    website: "https://stars.chromeexperiments.com/",
    image: "100000Stars.png"
  },
  {
    name: "Harmony of the Spheres",
    dateAdded: "6/28/2023",
    tags: ["Simulation", "Astrodynamics"],
    description: "Newtonian n-body gravity simulator",
    website: "https://gravitysimulator.org/",
    image: "harmony.png"
  },
  {
    name: "KStars",
    dateAdded: "6/28/2023",
    tags: ["Simulation", "Astronomy"],
    description: "Feature-rich and free astronomy software",
    website: "https://kstars.kde.org/",
    image: "kstars.png"
  },
  {
    name: "Mars Now",
    dateAdded: "6/28/2023",
    tags: ["Simulation", "Planets"],
    description: "Visualization of all data transmitted by spacecraft on Mars via NASA’s Mars Relay Network",
    website: "https://mars.nasa.gov/explore/mars-now/",
    image: "marsnow.png"
  },
  {
    name: "NASA Eyes",
    dateAdded: "6/28/2023",
    tags: ["Star Trackers", "Planets"],
    description: "Immersive simulations of the Earth and our solar system, the universe and the spacecraft exploring them.",
    website: "https://eyes.nasa.gov/",
    image: "nasaeyes.png"
  },
  {
    name: "Orbit Simulator",
    dateAdded: "6/28/2023",
    tags: ["Astrodynamics", "Planets"],
    description: "Powerful numerical integration tool for n-body gravitational simulations",
    website: "http://orbitsimulator.com/gsim.html",
    image: "orbitsim.png"
  },
  {
    name: "MMSSTV",
    dateAdded: "7/01/2023",
    tags: ["Satellites", "Radio"],
    description: "This program is for transmitting and receiving SSTV using a PC soundcard.",
    website: "https://hamsoft.ca/pages/mmsstv.php",
    image: "mmsstv.jpg"
  },
  {
    name: "Orbitron - Satellite Tracking System",
    dateAdded: "6/16/2023",
    tags: ["Satellites", "OSINT", "Radio"],
    description: "Orbitron is a satellite tracking system for radio amateur and observing purposes.",
    website: "http://www.stoff.pl/",
    image: "orbitron.png"
  },
];

export default projects;
