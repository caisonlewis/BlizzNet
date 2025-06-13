class JournalEntry {
    constructor(title, date, thoughts) {
        this.title = title;
        this.date = date;
        this.thoughts = thoughts;
    }

    createEntryElement() {
        let entryDiv = document.createElement("div");
        entryDiv.classList.add("journal-entry"); // Use this class for styling

        let card = document.createElement("div");
        card.classList.add("journal-card"); // New class to style each entry as a card

        let title = document.createElement("h2");
        title.textContent = this.title;

        let date = document.createElement("p");
        date.classList.add("entry-date");
        date.textContent = `Posted on: ${this.date}`;

        let desc = document.createElement("p");
        desc.classList.add("entry-text");
        desc.textContent = this.thoughts;

        // Append elements to card container
        card.appendChild(title);
        card.appendChild(date);
        card.appendChild(desc);

        // Add the card to the entry div
        entryDiv.appendChild(card);

        return entryDiv;
    }
}

// Create new entries separately for easy readability in the array
const feb_13_25 = new JournalEntry(
    "Sooo I made this site!", "2/13/2025",
    "Welp, figured I'd make this dumb little site to express my feelings about life and games I've been playing lately. I don't really have any friends I can talk to about this stuff, so I figured this could be my outlet. Plus, I get some coding experience in the process. It's kinda fun so far—this is only day one. We will see how long it lasts."
);

const feb_19_25 = new JournalEntry(
    "Site Updates", "2/19/2025",
    "So I've changed quite a few things. First, I added some pages related to old-gen Pokémon teams and my PLA team/shinies. The old-gen page needs updated tables for my actual teams; I've only done Pokémon Blue and LeafGreen so far. The others have placeholder mons in them. \nI have also added my much-anticipated backlog, importing it from Google Sheets so it should maintain live updates. I want to try to actually play and beat one game at a time. Other than that, I'm currently working on pushing out some CSS changes that allow for everything to stay centered and look nice on any screen size. More to come. Peace! :)"
);

const mar_18_25 = new JournalEntry(
    "Yeah, so it's been a while..", "3/18/2025",

    "I'm back! Had a lot going on the last few weeks. Time for a little recap. Had a couple interviews for jobs in the tech field (FINALLY) but there are a couple caveats.\n First, there was one job that would have been an IT leadership role working with data for a concessions company. I got the interview because of a banger cover letter, but the guy was fairly unimpressed with my resume. I was kinda mid in the interview but wrote back a really good follow up email that detailed how I would stay with the company for a while and even work for a decreased salary because of my lack of professional experience. They emailed me back a week later with for a follow up interview. They had to reschedule it with me, then eventually just decided to not move forward. Bummer.\n The second is a field tech job with Toshiba. I got a recommendation from a guy who I met through my job now, that already works for them. First was a phone interview with their recruiter based in Durham or something.. went super well, she liked me a lot. Next was with the actual manager lady for the location I would be working at. Also went well, she was impressed with me. Finally, yesterday I had the final interview with one of their lead techs. The guy was asking me a bunch of hardware related questions, trying to get a feel for my technical knowledge. This did not go as well... I'm a software guy, not a hardware guy. Not really into hardware as much, nor am I great at it. Still haven't heard anything back about the job since that interview. I'm gonna be real though.. I'm having second thoughts about even taking it if they offer it to me.\n First, it's hardware service and troubleshooting, not really what I'm into. Second, I don't think the pay is that great.. and third, they give you a company vehicle because there is a lot of travel involved. Not sure if I'm down for all the travel or being on call on the weekends but also I'm not 100% sure I would pass the driving record check. Let's just say I did some dumb shit as a 19-20yo kid and it's like permanently stained my driving record. So yeah.. not sure what I'm gonna do yet. I really don't hate what I'm doing now, I kinda just want to stay at Walgreens for the time being and wait for a coding job. That's what I REALLY want to do.. \nAnyway, I've been really getting into playing my retro emulation handheld lately. I have an Anbernic RG35XX Plus. I love the thing man. I downloaded a Linux based OS on it (Knulli..it's a branch of Batocera which uses an emulation station frontend) and I really like all the customization settings. I don't love that I can't exactly tweak EVERYTHING through retroarch.. the retroarch config is all done through the Knulli frontend. But, I've found some work arounds to get the shaders and bezels and stuff that I like for specific systems. Been trying to finish up the elite 4 in Leafgreen, been playing old school Dragon Quest on NES, little bit of Final Fantasy IV, and even got portmaster working. I can play Balatro and Stardew Valley on the thing. It's pretty sick. Anyway... sorry for the long winded update. Talk soon ✌️"
);

const may_31_25 = new JournalEntry("Realizations", "5/31/2025",
"Still doing the same stuff. Working, playing video games, sleeping, and repeating that over and over and over again. Sounds fun right? So I've figured out that I am not going to get a programming job..like ever. I'm actually kinda happy that I don't have to stress about it anymore but at the end of the day, it kinda sucks. So, I am an idiot who didn't realize that I was pursuing a career in the most saturated job market in the country. You cannot get into it with no experience, rendering my degree pretty much worthless and even if you do have experience (somehow?! maybe internship or something) you are still competing against other MORE experienced people who have been laid off from big tech companies and are now in the available job market again. 99.9% of job application I have spent time on submitting, along with tweaking my resume regularly and writing cover letters, do not get viewed at all. For someone like me who has no professional experience in software and only the degree. Applying for software jobs (even entry level/Junior dev) is a complete waste of time. You will not be even considered. Sooo what does this mean? Well, I can keep doing what I am doing now for the foreseeable future (which is making barely any money and living in a perpetual cycle of doing shit I don't want to do and hiding the internal suffering with escapism through video games) or I can apply for other stuff that isn't software.IT related but something I may have a shot of at least getting an interview for because I have a bachelors degree. Is it possible to find something like this that I could somewhat tolerate and it pays more than I am making now? Possibly. Am I putting forward a considerable effort to attain such a thing? Absolutely not :) So yeah. Happy almost summer and almost six months of this shit :D ")

const june_13_25 = new JournalEntry("Recent Hyper-Fixations", "6/13/25", "Recently after finishing Dragon Quest XI, I have been really into Dragon Quest as a whole. I bought DQIII HD 2D remake and started playing through it and it's gorgeous. Looking forward to finishing it and then playing 1 and 2 to complete the whole Erdrick story. I have also been back on an Animal Crossing kick, specifically Wild World and New Leaf. These games are wholesome nostalgia comfort food and I can't get enough of it. I bought No Mans Sky on PS5 also. I have about 100 hours and beat the game on PC and have another 20-30 hours on Switch. Such an addictive space survival/exploration game and it is absolutely gorgeous on PS5. Anyway... maybe I'll had some more stuff to this site.. maybe not.. who knows.")

// Array of entries
const entries = [june_13_25, may_31_25, mar_18_25, feb_19_25, feb_13_25];

// Display entries on the page
document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("day-container");

    entries.forEach(entry => {
        container.appendChild(entry.createEntryElement());
    });
});
