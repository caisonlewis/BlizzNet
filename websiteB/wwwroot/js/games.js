class Game {
    constructor(title, platform, playtime, image, thoughts) {
        this.title = title;
        this.platform = platform;
        this.playtime = playtime;
        this.image = image;
        this.thoughts = thoughts;
    }
    // Platform name to CSS class mapping
    static platformClasses = {
        "Nintendo Switch": "switch",
        "PlayStation 5": "playstation",
        "Xbox One": "xbox",
        "PC": "pc",
        "Other": "other"
    };

    createGameElement() {
        // Create a div to hold the game card
        let gameDiv = document.createElement("div");
        gameDiv.classList.add("game-card"); // Add a CSS class for styling

        // Create an image element for the game
        let img = document.createElement("img");
        img.src = this.image;  // Set the image source
        img.alt = this.title;  // Set alternative text for accessibility

        // Create a heading element for the game title
        let title = document.createElement("h2");
        title.textContent = this.title; // Set the text inside the h2 element

        //create subheading element for the game platform
        let subheading = document.createElement("h3");
        subheading.textContent = this.platform; //set heading inside h3 element

        //create subheading element for playtime
        let playtime = document.createElement("playtime");
        playtime.textContent = this.playtime; //set heading inside playtime element


        // Assign a mapped class if it exists, otherwise default to "other"
        let platformClass = Game.platformClasses[this.platform] || "other";
        subheading.classList.add(platformClass);

        // Create a paragraph element for the game description
        let desc = document.createElement("p");
        desc.textContent = this.thoughts; // Set the text inside the paragraph

        // Append all elements (image, title, and description) to the game card div
        gameDiv.appendChild(img);
        gameDiv.appendChild(title);
        gameDiv.appendChild(subheading);
        gameDiv.appendChild(playtime);
        gameDiv.appendChild(desc);

        // Return the complete game card element so it can be added to the page
        return gameDiv;
        }
}

// create new games seperately for easy readibility in the array
const xc3 = new Game("Xenoblade Chronicles 3", "Nintendo Switch","70h" , "images/xc3.jpg",
    "This game is absolutely polarizing. The story is beautiful, you cant help but fall in love with the characters, it took me a while to finish because I was coming back to the game on and off for a good year or so but my god.. I wouldn't have had it any other way. I truly felt the weight and growth of the story taking it slow. A must own for any RPG fan. "
);

const gris = new Game("Gris", "PlayStation 5", "3h 46m", "/BlizzNet/websiteB/wwwroot/images/grisArt.jpg",
    "Very fun and beautiful little game, only takes about 5-6 hours to complete, it is like controlling a character in a painting, stunning visuals, beautiful sound and music, the puzzles are fun. The story is deeply artistic and emotionally heavy handed. I really liked this game, especially playing it on PS5 with the enhanced controller vibration and dualsense triggers (or whatever they're called). The ps5 controller alone makes the game even more immersive and mesmerizing. Just play it. Definitely worth 5-6 hours of your time."
)

const PLA = new Game("Pokémon: Legends Arceus", "Nintendo Switch", "64h 52m", "/BlizzNet/websiteB/wwwroot/images/plaEnd.jpg",
    "This was my second playthrough. That says it all. I only replay games that are fantastic and fun no matter what and that's what legends arceus is. Really cool direction for the Pokémon series as a whole, even if it isn't considered a 'Main-Line' Pokémon game. Loved it, wanna do some of the end game stuff, caught some shinies this playthrough. One of my favorite newer Pokémon games."
);


const rdr2 = new Game("Red Dead Redemption 2", "Xbox One", "190h 40m", "/BlizzNet/websiteB/wwwroot/images/rdr2.jpg",
    "First of all, this game is absolutely stunning visually. The environmental details are super realistic, everything down to your gun getting dirty to bullet holes and blood trails being accurate. RDR2 is a visual masterpiece. On top of the gorgeous realism the game gives you, this is one of the best stories I've ever experienced. I mean EVER (including books, movies, etc.). The characters are fantastic, the missions are brutal. The attachment I had for Arthur by the end of the game is unmatched. 10/10 master class in writing and game design. Wish I could forget it all and experience it for the first time all over again."
)

const mhWorld = new Game("Monster Hunter World", "PlayStation 5", "88h 08m", "/BlizzNet/websiteB/wwwroot/images/xenojiiva.jpg",
    " I fell in love with Monster Hunter after vibing with Rise on PC and eventually Switch. I couldn't understand, despite it being the newer game in the series, why people collectively liked it more than Rise. I love Rise, the mechanics were really fun for me and the armor and weapon crafting loop that makes monster hunter, monster hunter resonated with me because of Rise. With that being said, I enjoyed World more. I remember trying it on Xbox Game Pass a couple of years ago before I played Rise and couldn't get into it. However, because Rise introduced me to what MH actually is, I really enjoyed World this time around. The monsters are cool, the armor and weapons are cool, and I found it to be more challenging and engaging than Rise. Just finished base game, gonna move on to the Iceborne expansion. I'll probably get side tracked before I finish it though considering i'm getting Monster Hunter Wilds day 1 and it will most likely consume my free time for the foreseeable future. MH world tho.. 9/10. Loved it. Only reason it doesn't get 10/10 for me is the unskippable cutscenes and Ancient Forest being so damn annoying to navigate. "
);

const mhWilds = new Game("Monster Hunter Wilds", "PlayStation 5", "66h 12m", "/BlizzNet/websiteB/wwwroot/images/mhwilds.jpg",
    "I couldn't understand why people review bombed this game on steam at release. I love Monster Hunter, fell in love with it through world and rise and was hype about getting this as soon as it was announced. I played the beta and thought it was decent but craved more. I can say without a doubt that it was worth the wait and the $70 price tag on release day. The visuals were fantastic, the gameplay was even better, and the new monsters were cool. I played switch axe this time around (my first time using switch axe in an MH game) and it was really damn cool. This games focus system and wound destroying really makes the hunts themselves soooo much better. I think this game takes the graphics, locale, and moster design from world and pairs it well with elements of combat from rise. Definitely the happy medium, which is exactly what I was hoping for with this game. I finished the story in about 2 days however the game moves into high rank and really lets you off the leash after you beat the story. Loved it and I will probably be playing this one on and off for some time to come. Considering I had 100+ hours in Rise and World, this will likely get the same treatment."
);

const leafgreen = new Game("Pokemon Leaf Green", "Gameboy Advance", "27h 55m", "/BlizzNet/websiteB/wwwroot/images/leafgreen team.png",
"So I started this as a kid and for some reason never finished it. I actually went the longest time without fully finishing a Kanto game despite my love for the Pokemon series. I just finally finished the elite 4 for leafgreen on my RG25XX Plus and I really loved it. I spent quite a while training up my dragonite and the elite 4 was actually fairly challenging for me because of the levels of my team. Great game, very nostalgic, glad I finished it."
)

const dqXI = new Game("DRAGON QUEST XI S: Echoes of an Elusive Age", "PlayStation 5", "57h 43m" , "/BlizzNet/websiteB/wwwroot/images/DQXIS.jpg",
"It's been a while since I actually sat down and finished a long JRPG within a relatively short period of time (about a month). The last few 50+ hour RPGs I started, they took me several months to even sometimes over a year ('ahem'... Xenoblade 3') but this one just hooked me pretty quick. I got really involved with the story and attached to the characters. Next thing you know 55+ hours is gone and I beat the main story. Beautiful game. It is visually gorgeous and has a tear jerking epic story to match. The turned based combat is fun. The spells and abilities are diverse and the character building is fluid and customizable. I love all the design work (Cheers to the late Akria Toriyama), the monster designs are really cool and interesting as well as their idol and attack animations. I'm not really a 100% completion type guy but I am going to at least finish all the Tickington mini stories and fight this 'secret super boss' I keep hearing about. Loved it 10/10. Suprised how quickly I blasted through this one. This is not a 'quick' game by any means.."
)

const dqXITrueEnd = new Game("DRAGON QUEST XI S: Echoes of an Elusive Age - ACT III", "PlayStation 5", "80h 05m", "/BlizzNet/websiteB/wwwroot/images/yggdragon.jpg",
    "HOLY SHIT. So this is a follow up to my previous post where I thought I beat the game after finishing act two and act three was just a 'post game' with some extra story bits. I liked the game a lot so I figured I would do the 'extra post game stuff' for the hell of it. My god. The best part of the story is act 3. I am completely mind blown. I won't spoil anything for anyone who hasn't finished the game but lets put it like this - this was my first dragon quest game, I have played a bit of VIII and read a bit online about the other games in the series and decided DQ XI would be a good starting point in the series. After what I've read and learned about DQ, I was really interested in getting into the Erdrick trilogy (the first the games). Because of this, I decided to buy the Dragon Quest III HD-2D remake to play after finishing DQXI. (DQIII is the first game chronologically in the trilogy). My god what a good play on my part. I find out after act three that DQ XI relates to the Erdrick trilogy (III specifically). Mind Blown. I will say no more for those who fear spoilers because staying spoiler free while playing through this game was the best decision I could possibly make. If you take anything away from this.. THE GAME ISNT FINISHED.. PLAY ACT III. Stellar game."
)

// TODO: Add No Mans Sky

// TODO: Add Monster Hunter Rise

// TODO: Add Skyrim

// TODO: Add Oblivion

// TODO: Add Fallout 4

// TODO: Add Pokemon Fire Red
// TODO: Add Diablo III
// TODO: Add Borderlands 2
// TODO: Add Borderlands 3
// TODO: Add Halo 2
// TODO: Add Monopoly Plus
// TODO: Add Minecraft
// TODO: Add Pokemon Emerald




// Array of games
const games = [dqXITrueEnd, dqXI, leafgreen, mhWilds,mhWorld, rdr2, PLA, xc3, gris];

// Display games on the page
document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("game-container");

    games.forEach(game => {
        container.appendChild(game.createGameElement());
    });
});
