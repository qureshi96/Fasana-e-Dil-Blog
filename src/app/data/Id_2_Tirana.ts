import { BlogPostModel } from "./blogPostModel";

export class Id_2_Tirana{
    blogPost: BlogPostModel = new BlogPostModel();


    constructor(){
        this.blogPost.author="Usman Ahmed";
        this.blogPost.id='2';
        this.blogPost.title='Tirana unplanned';
        this.blogPost.subtitle="We were supposed to be in Amman";
        this.blogPost.Created_date ="January 17, 2023";
        this.blogPost.content[0]= "'My passport is expiring in 5 months and 28 days', Asad wrote in whatsapp group 4 days before our flight to Amman. "+
        "Azeem, Asad and I had planned to get together, 7 years after high school. All of us could get visa on arrival in Jordan, so we chose Amman. Visiting Petra would have been a great bonus. "+
        "Everything would have gone according to the plan if we had planned to arrive a week earlier. Jordan requires minimum of 6 months passport validity at the time of arrival and Asad's passport missed out by a fine margin. "+
        "Hence, we had to call off the whole Jordan plan. But we were very determined to meet, so after a few hours of going through visa regulations and cheap flights, we came up with a new place, Tirana, and changed our tickets right away. "+
        "I have been interested in Balkans for a while now. Recently, Asad and I visited Serbia together which turned out to be a few eventful days. However, I knew Albania was going to be different.";
        this.blogPost.content[1]="Azeem and I were flying from London, Asad from Nuremburg. We were already in Albania as we boarded the plane, being the only non-Albanians in the flight. "+
        "Also the only ones not wearing either Gucci or Louis Vuitton. Azeem woke me up before landing to have a look outside. It was one of the most beautiful landscapes I have seen while landing. We flew above the Adriatic Sea, then took a turn over Durres towards Tirana. Greenry all around, surrounded by mountains with clouds floating at their peaks."+
        ". At the airport, again, everyone was wearing no less than a luxury Italian clothing brand. We kept wondering why are these people traveling on Wizz Air. It was only a few hours later, we found counterfeit brand shops all around the city center. Albanians don't wear anything that doesn't have a brand name printed on it, "+
        "big enough to be readable from a hundred metres away. People seem to be very brand conscious here and why not if you get them at a relatively much cheaper price. ";
        this.blogPost.content[2]="As soon we stepped out of the bus in city center, we almost got run over by a Mercedes S class on a Zebra cross. After being in western europe for some time, the awful traffic made us feel at home instantly. "+
        "There are mostly three types of vehicles on Albanian roads. Super expensive luxury cars, 2 seater smart cars, and motorbikes. The number of Mercedes seen every minute is very high. Albania has gone through a communist period in the past like its neighbours, but Tirana doesn't look anything close to Yugoslavian cities. "+
        "After the fall of communism, the government thought to change the communist look of the city which was rather grey. So, with little money, they decided to paint the old buildings with bright colors. I personally love the symmetry of brutalist architecture and I was looking forward to grey buildings with no balconies but they are now hard to find in Tirana."+
        "";
    }
}