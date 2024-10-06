import { PlanetComponent } from '../planet/planet.component';

export enum Planet {
  Sun = 'sun',
  Mercury = 'mercury',
  Venus = 'venus',
  Earth = 'earth',
  Mars = 'mars',
  Jupiter = 'jupiter',
  Saturn = 'saturn',
  Uranus = 'uranus',
  Neptune = 'neptune',
}

export interface RouteData {
  title: string;
  text: string;
  imageUrl: string;
  alias: string;
}

export const PlanetMap: Map<Planet, RouteData> = new Map<Planet, RouteData>()
  .set(Planet.Sun, {
    title: 'THE SUN',
    alias: 'Sun Image',
    imageUrl: 'assets/images/planets/halfsun.png',
    text: `
    From our vantage point on Earth, the Sun may appear like an unchanging source of light and heat in the sky. But
        the Sun is a dynamic star, constantly changing and sending energy out into space. The science of studying the
        Sun and its influence throughout the solar system is called heliophysics.

        The Sun is the largest object in our solar system. Its diameter is about 865,000 miles (1.4 million kilometers).
        Its gravity holds the solar system together, keeping everything from the biggest planets to the smallest bits of
        debris in orbit around it.

        Even though the Sun is the center of our solar system and essential to our survival, it’s only an average star
        in terms of its size. Stars up to 100 times larger have been found. And many solar systems have more than one
        star. By studying our Sun, scientists can better understand the workings of distant stars.

        The hottest part of the Sun is its core, where temperatures top 27 million °F (15 million °C). The part of the
        Sun we call its surface – the photosphere – is a relatively cool 10,000 °F (5,500 °C). In one of the Sun’s
        biggest mysteries, the Sun’s outer atmosphere, the corona, gets hotter the farther it stretches from the
        surface. The corona reaches up to 3.5 million °F (2 million °C) – much, much hotter than the photosphere.
        `
  })
  .set(Planet.Mercury, {
    title: 'THE MERCURY',
    alias: 'Mercury Image',
    imageUrl: 'assets/images/planets/halfmerku.png',
    text: `
    Mercury’s eccentric orbit takes the small planet as close as
        47 million kilometers (29 million miles) and as far as 70 million
        kilometers (43 million miles) from the Sun. If one could stand on
        the scorching surface of Mercury when it is at its closest point
        to the Sun, the Sun would appear more than three times as large
        as it does when viewed from Earth. Temperatures on Mercury’s
        surface can reach 430 degrees Celsius (800 degrees Fahrenheit). Because the planet has no atmosphere to retain that heat,
        nighttime temperatures on the surface can drop to –180 degrees
        Celsius (–290 degrees Fahrenheit).
        Because Mercury is so close to the Sun, it is hard to directly observe from Earth except during dawn or twilight. Mercury makes
        an appearance indirectly, however — 13 times each century,
        observers on Earth can watch Mercury pass across the face of
        the Sun, an event called a transit. These rare transits fall within
        several days of May 8 and November 10. The first two transits of
        Mercury in the 21st century occurred May 7, 2003, and November 8, 2006. The next are May 9, 2016, and November 11, 2019.
        Mercury speeds around the Sun every 88 days, traveling
        through space at nearly 50 kilometers (31 miles) per second
        — faster than any other planet. One Mercury solar day equals
        175.97 Earth days.
        Instead of an atmosphere, Mercury possesses a thin “exosphere” made up of atoms blasted off the surface by the solar
        wind and striking micrometeoroids. Because of solar radiation
        pressure, the atoms quickly escape into space and form a “tail”
        of neutral particles. Though Mercury’s magnetic field at the surface has just 1 percent the strength of Earth’s, it interacts with
        the magnetic field of the solar wind to episodically create intense
        “magnetic tornadoes” that funnel the fast, hot solar wind plasma
        down to the surface. When the ions strike the surface, they
        knock off neutrally charged atoms and send them on a loop high
        into the sky.
    `
  })
  .set(Planet.Venus, {
    title: 'THE VENUS',
    alias: 'Venus Image',
    imageUrl: 'assets/images/planets/halfvenus.png',
    text: `
    Venus and Earth are similar in size, mass, density, composition, and gravity. There, however, the similarities end. Venus
        is covered by a thick, rapidly spinning atmosphere, creating a
        scorched world with temperatures hot enough to melt lead and
        surface pressure 90 times that of Earth (similar to the bottom
        of a swimming pool 1-1/2 miles deep). Because of its proximity
        to Earth and the way its clouds reflect sunlight, Venus appears
        to be the brightest planet in the sky. We cannot normally see
        through Venus’ thick atmosphere, but NASA’s Magellan mission
        during the early 1990s used radar to image 98 percent of the
        surface, and the Galileo spacecraft used infrared mapping to
        view both the surface and mid-level cloud structure as it passed
        by Venus on the way to Jupiter. In 2010, infrared surface images by the European Space Agency’s Venus Express provided
        evidence for recent volcanism within the past several hundred
        thousand years. Indeed, Venus may be volcanically active today.
        Like Mercury, Venus can be seen periodically passing across
        the face of the Sun. These “transits” of Venus occur in pairs with
        more than a century separating each pair. Transits occurred in
        1631, 1639; 1761, 1769; and 1874, 1882. On June 8, 2004, astronomers worldwide watched the tiny dot of Venus crawl across
        the Sun; and on June 6, 2012, the second in this pair of transits
        occurred. The next transit is December 11, 2117. Observing
        these transits helps us understand the capabilities and limitations of techniques used to find and characterize planets around
        other stars.
      `
  })
  .set(Planet.Earth, {
    title: 'THE EARTH',
    alias: 'Earth Image',
    imageUrl: 'assets/images/planets/halfearth.png',
    text: `
    While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal.
        Earth is the only planet in the solar system whose English name does not come from Greek or Roman mythology. The name was taken from Old English and Germanic. It simply means "the ground." There are, of course, many names for our planet in the thousands of languages spoken by the people of the third planet from the Sun.           As Earth orbits the Sun, it completes one rotation every 23.9 hours. It takes 365.25 days to complete one trip around the Sun. That extra quarter of a day presents a challenge to our calendar system, which counts one year as 365 days. To keep our yearly calendars consistent with our orbit around the Sun, every four years we add one day. That day is called a leap day, and the year it's added to is called a leap year.
    `
  })
  .set(Planet.Mars, {
    title: 'THE MARS',
    alias: 'MARS Image',
    imageUrl: 'assets/images/planets/halfmars.png',
    text: `
      Mars is one of the most explored bodies in our solar system, and it's the only planet where we've sent rovers to roam the alien landscape. NASA missions have found lots of evidence that Mars was much wetter and warmer, with a thicker atmosphere, billions of years ago.
        Mars was named by the Romans for their god of war because its reddish color was reminiscent of blood. The Egyptians called it "Her Desher," meaning "the red one."
        Even today, it is frequently called the "Red Planet" because iron minerals in the Martian dirt oxidize, or rust, causing the surface to look red.    Scientists don't expect to find living things currently thriving on Mars. Instead, they're looking for signs of life that existed long ago, when Mars was warmer and covered with water.
    `
  })
  .set(Planet.Jupiter, {
    title: 'THE JUPITER',
    alias: 'Jupiter Image',
    imageUrl: 'assets/images/planets/halfjupiter.png',
    text: `
      Jupiter is the largest planet in our solar system. If Jupiter was a hollow shell, 1,000 Earths could fit inside. Jupiter also is the oldest planet, forming from the dust and gases left over from the Sun's formation 4.5 billion years ago. But it has the shortest day in the solar system, taking only 10.5 hours to spin around once on its axis.


        As the most massive world in our solar system, orbited by four large moons and many smaller ones, Jupiter forms its own solar system in miniature. Jupiter resembles a star in composition, and if it had been about 80 times more massive, it would have become a star rather than a planet.

        Jupiter's appearance is a tapestry of beautiful colors and swirling atmospheric features. Most of its visible clouds are composed of ammonia and hydrogen sulfide. Water clouds exist deep below and can sometimes be seen through clear spots in the higher cloud layers. Jupiter's "stripes" are created by strong east-west winds in the planet's upper atmosphere. Within these belts and zones are storm systems that can rage for years. The most notable of these long-lived features is the Great Red Spot, a giant, crimson- colored vortex twice as wide as Earth, which has been observed for at least a couple hundred years. In recent years, the Great Red Spot has appeared to be shrinking in its east-west width.
    `
  })
  .set(Planet.Saturn, {
    title: 'THE SATURN',
    alias: 'Saturn Image',
    imageUrl: 'assets/images/planets/halfsaturn.png',
    text: `
      It is easy to forget just how large Saturn is, at around 10 times the diameter of Earth. And with a diameter of about 72,400 miles (116,500 kilometers), the planet simply dwarfs its retinue of moons. One of those satellites, Tethys (660 miles or 1,062 kilometers across), is seen here at lower right.

        This view looks toward the sunlit side of the rings from about 8 degrees above the ring plane. The image was taken with the Cassini spacecraft wide-angle camera on March 7, 2015 using a spectral filter that preferentially admits wavelengths of near-infrared light centered at 752 nanometers.

        The view was acquired at a distance of approximately 1.6 million miles (2.6 million kilometers) from Saturn. Image scale is 10 miles (16 kilometers) per pixel. Tethys is slightly closer at 1.5 million miles (2.4 million kilometers) away, for an image scale of 9 miles (14 kilometers) per pixel.

        The Cassini mission is a cooperative project of NASA, ESA (the European Space Agency) and the Italian Space Agency. The Jet Propulsion Laboratory, a division of the California Institute of Technology in Pasadena, manages the mission for NASA's Science Mission Directorate, Washington. The Cassini orbiter and its two onboard cameras were designed, developed and assembled at JPL. The imaging operations center is based at the Space Science Institute in Boulder, Colorado.
    `
  })
  .set(Planet.Uranus, {
    title: 'THE URANUS',
    alias: 'Uranus Image',
    imageUrl: 'assets/images/planets/halfuranus.png',
    text: `
      In visible wavelengths as seen by Voyager 2 in the 1980s, Uranus appeared as a placid, solid blue ball. In infrared wavelengths, Webb is revealing a strange and dynamic ice world filled with exciting atmospheric features.

        One of the most striking of these is the planet’s seasonal north polar cloud cap. Compared to the Webb image from earlier this year, some details of the cap are easier to see in these newer images. These include the bright, white, inner cap and the dark lane in the bottom of the polar cap, toward the lower latitudes.

        Several bright storms can also be seen near and below the southern border of the polar cap. The number of these storms, and how frequently and where they appear in Uranus’s atmosphere, might be due to a combination of seasonal and meteorological effects.

        The polar cap appears to become more prominent when the planet’s pole begins to point toward the Sun, as it approaches solstice and receives more sunlight. Uranus reaches its next solstice in 2028, and astronomers are eager to watch any possible changes in the structure of these features. Webb will help disentangle the seasonal and meteorological effects that influence Uranus’s storms, which is critical to help astronomers understand the planet’s complex atmosphere.
    `
  })
  .set(Planet.Neptune, {
    title: 'THE NEPTUNE',
    alias: 'Neptune Image',
    imageUrl: 'assets/images/planets/halfneptunus.png',
    text: `
      The ice giant Neptune was the first planet located through
        mathematical predictions rather than through regular observations of the sky. (Galileo had recorded it as a fixed star during
        observations with his small telescope in 1612 and 1613.) When
        Uranus didn’t travel exactly as astronomers expected it to, a
        French mathematician, Urbain Joseph Le Verrier, proposed
        the position and mass of another as yet unknown planet that
        could cause the observed changes to Uranus’ orbit. After being
        ignored by French astronomers, Le Verrier sent his predictions
        to Johann Gottfried Galle at the Berlin Observatory, who found
        Neptune on his first night of searching in 1846. Seventeen days
        later, its largest moon, Triton, was also discovered.
        Nearly 4.5 billion kilometers (2.8 billion miles) from the Sun,
        Neptune orbits the Sun once every 165 years. It is invisible to
        the naked eye because of its extreme distance from Earth.
        Interestingly, the highly eccentric orbit of the dwarf planet Pluto
        brings Pluto inside Neptune’s orbit for a 20-year period out of
        every 248 Earth years. Pluto can never crash into Neptune,
        though, because for every three laps Neptune takes around the
        Sun, Pluto makes two. This repeating pattern prevents close
        approaches of the two bodies.
        The main axis of Neptune’s magnetic field is tipped over by
        about 47 degrees compared with the planet’s rotation axis. Like
        Uranus, whose magnetic axis is tilted about 60 degrees from the
        axis of rotation, Neptune’s magnetosphere undergoes wild variations during each rotation because of this misalignment. The
        magnetic field of Neptune is about 27 times more powerful than
        that of Earth.
    `
  })
;
