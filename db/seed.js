const connection = require('./connection.js')

// a flexible randomizer that takes arrays or numbers and returns a random element from that range
var rnd = n => Array.isArray(n) ? n[ rnd(n.length) - 1] : Math.floor( Math.random() * n ) + 1

var seed_values = () => {

  // list of top 346 user tags since 2017 sorted by popularity
  var tag_list = [`Indie`,`Action`,`Casual`,`Adventure`,`Strategy`,`Simulation`,`RPG`,`Singleplayer`,`Early Access`,`Violent`,`2D`,`VR`,`Puzzle`,`Atmospheric`,`Great Soundtrack`,`Gore`,`Difficult`,`Fantasy`,`Sports`,`Story Rich`,`Anime`,`Pixel Graphics`,`Multiplayer`,`Nudity`,`Turn-Based`,`Sexual Content`,`Platformer`,`Horror`,`Retro`,`Racing`,`Arcade`,`Funny`,`Female Protagonist`,`Family Friendly`,`Sci-fi`,`Free to Play`,`Online Co-Op`,`Visual Novel`,`First-Person`,`Shooter`,`Cute`,`Relaxing`,`Replay Value`,`Software`,`Massively Multiplayer`,`Survival`,`Exploration`,`Party-Based RPG`,`Colorful`,`Open World`,`Co-op`,`FPS`,`Sandbox`,`Comedy`,`Utilities`,`Fast-Paced`,`Psychological Horror`,`RPGMaker`,`Space`,`Movie`,`Local Multiplayer`,`Point & Click`,`Physics`,`Side Scroller`,`Short`,`Minimalist`,`Mystery`,`Controller`,`Management`,`Rogue-like`,`Hidden Object`,`Design & Illustration`,`Rogue-lite`,`Dark`,`Memes`,`Classic`,`Building`,`Zombies`,`Puzzle-Platformer`,`Tactical`,`Bullet Hell`,`Third Person`,`Music`,`Local Co-Op`,`Choices Matter`,`Survival Horror`,`Top-Down`,`Education`,`Realistic`,`Procedural Generation`,`JRPG`,`Action-Adventure`,`Turn-Based Strategy`,`Competitive`,`War`,`Tower Defense`,`Crafting`,`Top-Down Shooter`,`Old School`,`4 Player Local`,`Stylized`,`Fighting`,`Cartoony`,`Dungeon Crawler`,`Turn-Based Combat`,`Text-Based`,`Multiple Endings`,`Historical`,`Mature`,`Web Publishing`,`RTS`,`Walking Simulator`,`Hack and Slash`,`Card Game`,`Action RPG`,`Resource Management`,`Dark Fantasy`,`3D Platformer`,`Base Building`,`Romance`,`Post-apocalyptic`,`Turn-Based Tactics`,`Logic`,`Drama`,`PvP`,`Stealth`,`Dating Sim`,`Surreal`,`Futuristic`,`Hand-drawn`,`Animation & Modeling`,`Abstract`,`Isometric`,`Medieval`,`Masterpiece`,`Economy`,`Board Game`,`Dark Humor`,`Character Customization`,`Experimental`,`Mouse only`,`Twin Stick Shooter`,`Driving`,`Metroidvania`,`Addictive`,`Interactive Fiction`,`Cyberpunk`,`Magic`,`Perma Death`,`City Builder`,`Robots`,`Choose Your Own Adventure`,`Soundtrack`,`Match 3`,`Cartoon`,`Third-Person Shooter`,`Military`,`Flight`,`Beautiful`,`3D`,`Score Attack`,`Video Production`,`Clicker`,`Aliens`,`Arena Shooter`,`Audio Production`,`Detective`,`Level Editor`,`1980s`,`World War II`,`Destruction`,`Psychological`,`Blood`,`2D Fighter`,`Rhythm`,`LGBTQ+`,`Thriller`,`Moddable`,`2.5D`,`Lovecraftian`,`Game Development`,`Time Management`,`Real-Time`,`GameMaker`,`Space Sim`,`Episodic`,`Dark Comedy`,`Team-Based`,`Alternate History`,`Runner`,`Real-Time with Pause`,`Parkour`,`Loot`,`Strategy RPG`,`Demons`,`Narration`,`Software Training`,`Voxel`,`Science`,`Steampunk`,`Grand Strategy`,`Battle Royale`,`Hex Grid`,`Wargame`,`Tanks`,`Split Screen`,`Tactical RPG`,`Pirates`,`Dystopian`,`Kickstarter`,`Political`,`Real Time Tactics`,`PvE`,`4X`,`Mechs`,`Crime`,`Linear`,`Dungeons & Dragons`,`Otome`,`Dinosaurs`,`Nature`,`Time Attack`,`Psychedelic`,`Souls-like`,`Documentary`,`Ninja`,`Dragons`,`Tutorial`,`Touch-Friendly`,`Cult Classic`,`Illuminati`,`Swordplay`,`Word Game`,`Politics`,`Trains`,`Western`,`Grid-Based Movement`,`Nonlinear`,`Agriculture`,`Naval`,`eSports`,`Lore-Rich`,`NSFW`,`Faith`,`Comic Book`,`Hacking`,`Experience`,`MMORPG`,`God Game`,`MOBA`,`Character Action Game`,`Crowdfunded`,`Emotional`,`Modern`,`CRPG`,`Underwater`,`Remake`,`Philisophical`,`Programming`,`Minigames`,`Football`,`Photo Editing`,`Superhero`,`Silent Protagonist`,`Games Workshop`,`Cats`,`Satire`,`Cold War`,`Hunting`,`Co-op Campaign`,`FMV`,`Mythology`,`Soccer`,`Noir`,`Cinematic`,`Time Manipulation`,`Music-Based Procedural Generation`,`Bullet Time`,`Parody`,`360 Video`,`Fishing`,`Gothic`,`Capitalism`,`Supernatural`,`Artificial Intelligence`,`Gun Customization`,`Trading Card Game`,`Investigation`,`Martial Arts`,`Time Travel`,`Mystery Dungeon`,`Offroad`,`America`,`Trading`,`Inventory Management`,`Vampire`,`Sokoban`,`Chess`,`Mars`,`Mining`,`6DOF`,`Typing`,`Gaming`,`Solitaire`,`Assassin`,`Villain Protagonist`,`Spectacle fighter`,`Golf`,`Warhammer 40K`,`Conversation`,`Dog`,`Sailing`,`Epic`,`Basketball`,`Sniper`,`World War I`,`Motorbike`,`On-Rails Shooter`,`Quick-Time Events`,`Underground`,`Diplomacy`,`Horses`,`Sequel`,`Dynamic Narration`,`Asynchronous Multiplayer`,`Unforgiving`,`Conspiracy`,`Bikes`,`Mini Golf`,`Pinball`,`Submarine`,`Mod`,`Class-Based`,`Rome`,`LEGO`,`Gambling`,`Heist`,`Intentionally Awkward Controls`,`3D Vision`,`Baseball`,`Tennis`,`Based On A Novel`,`Wrestling`,`Immersive Sim`,`Transhumanism`];
 
  var values = '';

  // add tags to each game (between 1 and 100)
  for( var game_id = 1; game_id <= 100; game_id++ ) {

    // tags attached to a single game
    var game_tags = []; 

    // each game gets between 10 and 50 tags
    var game_tag_count = rnd(40) + 10; 

    for ( var tags = 0; tags < game_tag_count ; tags++ ) {

      // pick a random tag index
      var tag_index = rnd( tag_list.length - 1 ); 

      // if this one had already been chosen, skip it
      if ( !game_tags.includes( tag_index ) ) {

        // INSERT statement looks like this:
        // INSERT into reviews_graph (gameid, name, count) VALUES ...
        values += `(${ game_id },'${ tag_list[tag_index] }',${ rnd( game_tag_count  ) +  ( ( tag_list.length  - tag_index ) / 4 ) }),`
        // count calculation is random, but also weighted by tag popularity ( tag_list.length  - tag_index ) 
        // count is divided by 4 for smaller, more plausible numbers -- decimals are implicitly converted to ints

        // add this tag to the set associated with this game to avoid duplicates 
        game_tags.push( tag_index );
      }
    }
  }

  // strip off the last extraneous comma
  return values.slice(0,-1);

}

// run each of these lines in order
var sql = [
  `DROP DATABASE IF EXISTS steam;`,
  `CREATE DATABASE steam;`,
  `USE steam;`,
  `CREATE TABLE user_tags (
    id int auto_increment primary key,
    gameid int not null,
    name varchar(100), 
    count int
  );`,
  `INSERT into user_tags (gameid, name, count) VALUES ${ seed_values() };`
]

console.log( 'Beginning seed script for user_tags')

// convert this array of SQL statements into a set of ordered Promises
Promise.all( 
  sql.map( (sqlText) => {
      new Promise( (resolve, reject) => { 
        connection.query( sqlText, (err, result, fields) => {
          // console.log('\nExecuting sql: ' + sqlText + '\n');
          if (err) throw err;
        })
      })
   })
)
.then(values => { console.log('Data generated successfully.') })
.catch(error => { console.error(error.message) })
connection.end( () => { console.log('Connection closed.') });

/*

SQL for querying this dataset:

SELECT 
name
FROM user_tags
WHERE gameid = [selected game id]
ORDER BY count DESC

*/