/* ============================================================
   YOUR WRITINGS LIVE HERE.
   To publish something new, copy one of the blocks below,
   paste it at the TOP of the WRITINGS list, and fill it in.
   Save, refresh, and a new star appears in the sky.

   Fields:
   title    : the name of the piece
   kind     : "poem", "prose", "fiction"... anything.
   date     : optional, shown if you fill it (e.g. "2026")
   excerpt  : a line or two shown in the index
   body     : the full text, between backticks (` `)

   Inside body:
     blank line          → new stanza / paragraph
     **X**               → glowing letter (for acrostics)
     *word*              → italics
     ## Heading          → a section heading (for essays)
     > quoted line       → pull quote
     ---                 → divider

   UPCOMING: sections you plan to write, shown as
   constellations "not yet born". Delete one from this list
   once you start writing that kind (its filter appears
   automatically from your pieces).
   ============================================================ */

const SITE = {
  name: "MITRAA",
  eyebrow: "the midnight manuscripts of",
  subtitle: "Twelve poems, hung in the dark like stars. Drag the sky. Touch one to read.",
};

const UPCOMING = ["prose", "fiction", "essays"];

const WRITINGS = [
  {
    title: "Motherhood",
    kind: "poem",
    date: "",
    excerpt: "Magic in her pure soul, an acrostic for the word that carries everything.",
    body: `**M**agic in her pure soul
**O**mnipresent, her unconditional love
**T**ransforming, her immeasurable sacrifice
**H**eavy, her silent burden
**E**vaded, her unsaid dreams
**R**eliable, her unwavering care
**H**onorable, her every action
**O**bservant, her tender eyes
**O**nerous, her unnoticed pain
**D**evoted, her life complete`,
  },
  {
    title: "Happy Birthday, Mom!",
    kind: "poem",
    date: "",
    excerpt: "Leapt tiny hands with candlelight. I love you, Mom, spelled down the spine.",
    body: `**I**n the tranquil shadows of night,
**L**eapt tiny hands with candlelight.
**O**rnated with balloons and books,
**V**ast spaces detailed in every nook.
**E**nchanting ambiance witnessed thy,
**Y**oung children in dresses blue-dyed.
**O**verjoyed for the clock to strike twelve,
**U**nconditional love, deeply delved.
**M**asterfully they stirred her awake,
**O**verwhelmed to not wreck the cake.
'**M**om, Happy Birthday', it said.`,
  },
  {
    title: "To My Mother",
    kind: "poem",
    date: "",
    excerpt: "Your dark-brown eyes are the prettiest, you are the best mom ever, letter by letter.",
    body: `**Y**our dark-brown eyes are the prettiest,
**O**utdoes every beauty in the slightest.
**U**nder the luminous sunshine,
**A**dorns your presence, pure and divine!
**R**aptured by your unconditional love,
**E**xists my soul like a docile dove.

**T**alented and thoughtful, you are
**H**umility embedded in you like dust of stars.
**E**ternity I'll spend with profound gratitude,

**B**lessed are those within your amplitude.
**E**ager to pamper you with every comfort,
**S**hatter I will, your every discomfort.
**T**he pain you've undergone for me is unfathomable,

**M**iraculous how you still find me so lovable.
**O**racles envy your heart and grace,
**M**y sweet mother who I'm proud to embrace.

**E**xtremities of pain don't faze you,
**V**ain are those who hate you.
**E**xquisite is your silent strength,
**R**esilience flows within your endless quench.`,
  },
  {
    title: "He Loved Her Too Soon, She Loved Him Too Late",
    kind: "poem",
    date: "",
    excerpt: "He looked at her as though she were the moon, a silvery promise of solace in his lonely dune.",
    body: `With the blossoms of spring,
His heart spread its wings.
For when he laid his eyes on her seraphic gaze,
He knew, she was the one he'd long to embrace.

Every day, he craved to behold her beauty,
Each of her absences forged his agony.
He looked at her as though she were the moon,
A silvery promise of solace in his lonely dune.

Her laughter, a euphoric melody,
Brought a delicate blush to his cheeks.
Her tears, a muted symphony -
Playing softly in her silent heartache,
Heightened his anguish to its peaks.

He drowned in her hazel-brown eyes,
As they defeated the allure of any magic.
But the Gods above had hearts of ice,
For they made sure their story was tragic.

Was it because he loved her too soon?
Was it because she was oblivious to his longing?
"Her heart shall only bloom,
When his sinks," said the prophecy, crooning.

With the fall of leaves in autumn,
His feelings faded like withered flowers.
Alas, the hearts had already passed the baton,
For now his presence became her forbidden bower.

Her eyes searched him in every crowd,
And each time she found him, her heart sang loud.
She longed for just one momentary glance,
Hoping to hold his stare with every chance.

Her world darkened in his absence,
But he no longer noticed her existence.
He loved her too soon; She loved him too late,
Their unwritten story couldn't triumph fate.`,
  },
  {
    title: "My Kind of Love",
    kind: "poem",
    date: "",
    excerpt: "I want the kind of love, the one they write books about.",
    body: `I want the kind of love,
The one they write books about.
Not the tragic kind,
Where one of them dies.
But the love that heals,
Leaving me longing for more.

I don't want a man who claims to love me,
Only to make me cry.
I want a man who craves my presence,
Who crumbles in my absence.
I want him to need me so ardently,
That love pales in comparison to his obsession.

I don't need expensive gifts,
Nor dates that take ages to plan.
I just want little love notes,
The kind that make my heart flutter.
I long for deep, intimate conversations,
While we hold each other close.

I don't seek a rich man
Who showers me with diamonds.
I want my gorgeous man
To kiss my scars as tenderly as my curves.
I want long, intimate nights of discovery,
Unveiling each other's wishes and fears.

I want a man who cherishes me for who I am,
One mature enough to handle my depths.
A man who loves me entirely,
Just as I'll love all of him.
I want to love him with my whole being,
Knowing he does too, in his own way.

Maybe the love I crave is dark,
Twisted, and far from noble.
But it is how my soul loves,
And I see no wrong in it.
For in my love, there is no doubt,
No wondering whose mind he's lost in
While I rest in his arms.

I want him so desperately it feels primal,
A need, not a desire.
The one made for me,
Who loves as fiercely as I do,
Wholly, entirely, with soul-deep passion.

I yearn for my soulmate,
So our souls can finally entwine.

As we dance through this world,
Bathed in our comfortable darkness.
Our bodies, each other's home.
Our hearts, each other's solace.
Our minds, each other's peace.
Our souls, each other's haven.`,
  },
  {
    title: "In the Grip of Love",
    kind: "poem",
    date: "",
    excerpt: "Ocean in his eyes, a world where I long to swim. A confession spelled down the margin.",
    body: `**I**mpeccable, his being - he consumes me whole.
**L**ucidly attractive, even in his casual stroll
**O**h Universe! Spare my fragile, love-struck heart,
**V**irility as fierce as his rips me apart.
**E**nchanted by his elegance, effortlessly drawn,
**Y**ield I do to his charm, with no pride to pawn.
**O**mniscient, his mind - as he masters every thrall,
**U**nmatched in every way, he leaves me enthralled.

**S**tunning and sensible, there is no one like him,
**O**cean in his eyes - a world where I long to swim.
**M**arveling at his rare blend of simplicity and grace,
**U**napologetically, I declare him the finest to ever exist in space.
**C**alm and captivating - he speaks his mind when needed,
**H**umble and reserved, his heart's intentions impeded.

**I** sometimes dream he'd let me glimpse his soul,
**T**hough I know he wouldn't, for his secrets he keeps whole.
**H**eavenly serene, his smile ignites my existence,
**U**nbeknownst to him, I memorise it all from a distance.
**R**hythms of his shimmering spirit entwine with mine - only to be
**T**angled in his presence, and broken by his indifference -
**S**ilently I suffer, as his heart remains distant.`,
  },
  {
    title: "Hey, You!",
    kind: "poem",
    date: "",
    excerpt: "Charismatic and gorgeous you are like the starry night, seven lines, one secret word.",
    body: `**I** so desperately wish you were mine
**C**an't you see I'm hanging on a thin line?
**E**very time I look at you how my eyes shine.
**C**harismatic and gorgeous you are like the starry night,
**U**pright towering over me with your height.
**B**eautifully you torment my shattered soul,
**E**ager I am to give you myself whole.`,
  },
  {
    title: "The Atom",
    kind: "poem",
    date: "",
    excerpt: "He was the nucleus, I was the electron. We were an atom, among millions of others.",
    body: `He was the nucleus,
I was the electron.
We were an atom,
Among millions of others.

I orbited around him,
Day and Night.
He was the hydrogen,
And I was his one and only.

But at the sight of water,
He gave me up so easily.
I was ripped off his orbit,
Thrown away like nothing.

Now he's gotten another one,
For he can only afford one.
And I'm miserably alone,
Lost in this vast space.

Unable to bind with another,
Because my energy isn't enough.`,
  },
  {
    title: "Them Demons",
    kind: "poem",
    date: "",
    excerpt: "Them demons are back, and they're haunting me.",
    body: `Them demons are here,
And they're haunting me.
I almost forgot those days:
Muffled cries of pain,
Desperate prayers for death,
Endless blood that dulled the numbness.

Them demons are back,
And they're haunting me.
Tears roll down my cheeks
As I look back on those days.
A shattered version of me,
Believing I was broken beyond repair.

Them demons are back,
And they're haunting me.
Memories of those panic attacks,
Make me shiver in terror.
A glimpse of my half-healed scars,
Taunts me to reopen them.

Them demons are back,
And they're haunting me.
I thought I was over them,
For it's been almost a year.
Tremors wreck my body,
As I fight the same old battles.

Them demons are back,
And they're haunting me.
Will they ever stop returning?`,
  },
  {
    title: "I Just Want To Love Myself",
    kind: "poem",
    date: "",
    excerpt: "For who am I, if I don't know myself whole? A vow spelled down the spine.",
    body: `**I** earnestly embark on an invisible journey,
**J**aded by attempts to retain my sanity.
**U**nforgettable scars etched in my mind's maze,
**S**till so fresh yet invisible to others' gaze.
'**T**ime heals all' - I blasphemously believed,
**W**hy hasn't my pain yet been relieved?
**A** vast labyrinth rests within my miserable mind,
**N**ever-ending discoveries that make me wish I were blind.
'**T**o know a place is to know its stories' - but is it really?

**T**irelessly breaking down every single story,
**O**cculted by the ghosts that wander in their glory.
**L**ost, I am, in the realms of my very own heart.
**O**utrage dismantles my being, tearing me apart.
**V**icious beasts reside in these jungles,
**E**ldest daughter's strength, quick to humble.
**M**oonlit sky watches over my lavish lands,
**Y**ards of tainted, broken trees that weakly stand.
**S**tories accumulate like piles of snow,
**E**ach one emitting a dying, dull glow.
**L**anguidly, I strive to know the depths of my soul,
**F**or who am I, if I don't know myself whole?`,
  },
  {
    title: "The Voices in My Head",
    kind: "poem",
    date: "",
    excerpt: "The clock struck twelve, ever so silently… and the voices in my head echoed… violently.",
    body: `It was a peaceful, quiet night,
As I sat in my dark room - basked in moonlight.
The clock struck twelve, ever so silently…
And the voices in my head echoed… violently.

It was as clear as the sky above me,
Ghosts of my past and present had no plans to flee.
You would think I'd be used to it after all this time,
But this numbing pain was the punishment to all my crimes.

My mind is scattered all over the place,
Denying me the comfort of sleep in my pillow's embrace.
The voices were so loud I feared my shell would burst,
Thankful for numbness, it quenched the voices' thirst.

Watching the moon shine admirably bright,
A smile crept up my mouth despite my urge to fight.
I'd learnt my smile wasn't pretty - and so much more,
I longed to learn more before my story closed its door.`,
  },
  {
    title: "The Villain",
    kind: "poem",
    date: "",
    excerpt: "And suddenly, I'm the villain of my own story, at just seventeen.",
    body: `And suddenly, I'm the villain-
Of my own story, at just seventeen.
Though truth be told, it wasn't sudden;
There were always those trying to get even.

I wish I didn't care about anything -
Like the movie villains - heartless, fearless, cold.
I wish I could truly detach from everything,
But the voices in me… are quietly bold.

They say we all carry good and bad-
No soul is entirely pure or vile.
But why does no one see the good I've had?
All my selfless efforts…. helplessly futile.

Why must I act like some perfect saint,
When I'm just a girl trying to love this world?
Do they think I can't see the perfect image they paint?
I just loathe the way they expect me to do what I'm told.

I am a person with my fair share of ups and downs,
And I'm trying to love and accept myself for who I am.
But they make me want to crawl out of my skin with just a frown,
Disgust and guilt keeping me up at night till 3a.m.`,
  },
];
