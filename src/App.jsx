import React, { useState } from 'react';
import { ArrowLeft, BookOpen, ChevronRight } from 'lucide-react';

const ConnectorsApp = () => {
  const [currentView, setCurrentView] = useState('categories'); // 'categories', 'list', 'detail'
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedConnector, setSelectedConnector] = useState(null);

  const connectorsData = {
    start_speaking: {
      name: 'Start speaking',
      icon: '🎤',
      color: 'bg-slate-500',
      connectors: [
        {
          word: 'well',
          usage: 'Use at the beginning to start speaking naturally or gain time.',
          description: 'Helps you enter a thought smoothly or signal reflection.',
          examples: [
            `Well, I'm not sure that's the best option.`,
            'Well, let me explain what happened.'
          ]
        },
        {
          word: 'so',
          usage: 'Use to begin a point or transition into an explanation.',
          description: 'Signals that you are about to explain or continue.',
          examples: [
            `So, here's what we decided.`,
            'So, the main issue is timing.'
          ]
        },
        {
          word: 'to begin with',
          usage: 'Use to clearly start a structured explanation.',
          description: 'Signals the first point in a sequence.',
          examples: [
            'To begin with, we need to define the problem.',
            `To begin with, I didn't agree with the proposal.`
          ]
        },
        {
          word: 'okay so',
          usage: 'Use to kick off a story or explanation casually.',
          description: 'Very natural opening in casual American speech.',
          examples: [
            `Okay so, I was at the store and guess what happened.`,
            'Okay so, the thing is we never got the email.'
          ]
        },
        {
          word: 'alright',
          usage: 'Use to signal you are ready to start or move forward.',
          description: 'Common way to take the floor or begin a new topic.',
          examples: [
            `Alright, let's get into it.`,
            `Alright, here's the deal.`
          ]
        },
        {
          word: 'look',
          usage: 'Use to get attention before making a direct point.',
          description: 'Signals you want the listener to focus on what comes next.',
          examples: [
            `Look, I get what you're saying, but it won't work.`,
            `Look, the bottom line is we need more time.`
          ]
        },
        {
          word: 'listen',
          usage: 'Use to grab attention before an important statement.',
          description: 'Stronger than "look" — signals urgency or seriousness.',
          examples: [
            `Listen, I've been thinking about this a lot.`,
            `Listen, we really need to talk about this.`
          ]
        },
        {
          word: 'the thing is',
          usage: 'Use to introduce the core issue or main point.',
          description: 'Frames what you are about to say as the key piece.',
          examples: [
            `The thing is, nobody told me about the change.`,
            `The thing is, we just don't have the budget.`
          ]
        },
        {
          word: 'here\'s the thing',
          usage: 'Use to highlight the most important detail.',
          description: 'Draws attention to the crux of the matter.',
          examples: [
            `Here's the thing — we already tried that.`,
            `Here's the thing, I actually agree with you.`
          ]
        },
        {
          word: 'basically',
          usage: 'Use to simplify before explaining.',
          description: 'Signals you are about to give the short version.',
          examples: [
            'Basically, they want us to start over.',
            `Basically, it comes down to money.`
          ]
        },
        {
          word: 'real quick',
          usage: 'Use to introduce a brief point before moving on.',
          description: 'Keeps things light and signals brevity.',
          examples: [
            'Real quick, I just wanna mention one thing.',
            `Real quick — did anyone check the numbers?`
          ]
        },
        {
          word: 'so anyway',
          usage: 'Use to get back on track after a digression.',
          description: 'Resets the conversation to the main point.',
          examples: [
            `So anyway, that's how we ended up here.`,
            'So anyway, back to what I was saying.'
          ]
        }
      ]
    },

    connect_ideas: {
      name: 'Connect ideas',
      icon: '🔗',
      color: 'bg-blue-500',
      connectors: [
        {
          word: 'and',
          usage: 'Use to add information or continue an idea.',
          description: 'Connects similar ideas in a simple way.',
          examples: [
            'She called me and explained everything.',
            'We talked and reached an agreement.'
          ]
        },
        {
          word: 'but',
          usage: 'Use to introduce contrast or limitation.',
          description: 'Shows an opposing or unexpected idea.',
          examples: [
            'I like the idea, but the timing is bad.',
            `It's simple but effective.`
          ]
        },
        {
          word: 'because',
          usage: 'Use to explain the reason for something.',
          description: 'Introduces a cause or explanation.',
          examples: [
            'I stayed home because I was sick.',
            'She succeeded because she prepared well.'
          ]
        },
        {
          word: 'however',
          usage: 'Use at the start of a sentence to show contrast.',
          description: 'Introduces a contrasting point more formally.',
          examples: [
            'I understand your point. However, I disagree.',
            'The plan is risky. However, it could work.'
          ]
        },
        {
          word: 'plus',
          usage: 'Use to add another reason or point casually.',
          description: 'Informal way to pile on an extra argument.',
          examples: [
            `Plus, it's way cheaper than the other option.`,
            `Plus, we already have the team for it.`
          ]
        },
        {
          word: 'on top of that',
          usage: 'Use to stack an additional point with emphasis.',
          description: 'Adds weight to an already strong argument.',
          examples: [
            `On top of that, they missed the deadline.`,
            `On top of that, nobody even apologized.`
          ]
        },
        {
          word: 'also',
          usage: 'Use to add a supporting or related idea.',
          description: 'Simple addition without strong emphasis.',
          examples: [
            `I also think we should update the website.`,
            `Also, don't forget to send the invite.`
          ]
        },
        {
          word: 'at the same time',
          usage: 'Use to acknowledge two things that are both true.',
          description: 'Shows balance between two contrasting ideas.',
          examples: [
            `I want to help. At the same time, I'm really busy.`,
            `It's risky. At the same time, the reward is huge.`
          ]
        },
        {
          word: 'not only... but also',
          usage: 'Use to emphasize that two things are both true.',
          description: 'Creates a strong double emphasis.',
          examples: [
            `Not only did she finish early, but she also helped others.`,
            `Not only is it cheap, but it also works great.`
          ]
        },
        {
          word: 'even though',
          usage: 'Use to connect two ideas where one is surprising given the other.',
          description: 'Shows contrast within the same sentence.',
          examples: [
            `Even though it was raining, we had a great time.`,
            `I took the job even though the pay was low.`
          ]
        },
        {
          word: 'that said',
          usage: 'Use after acknowledging a point to introduce a contrasting one.',
          description: 'Smooth pivot from agreement to disagreement.',
          examples: [
            `I see your point. That said, I still disagree.`,
            `The food was great. That said, the service was slow.`
          ]
        },
        {
          word: 'and then',
          usage: 'Use to show what happened next in a story.',
          description: 'Natural way to sequence events in casual speech.',
          examples: [
            'We grabbed coffee, and then we just walked around.',
            'I called her, and then she texted me back.'
          ]
        },
        {
          word: 'so that',
          usage: 'Use to explain the purpose behind an action.',
          description: 'Connects an action to its intended goal.',
          examples: [
            `I left early so that I wouldn't be late.`,
            `We practiced every day so that we'd be ready.`
          ]
        },
        {
          word: 'otherwise',
          usage: 'Use to explain what happens if something is not done.',
          description: 'Introduces the consequence of inaction.',
          examples: [
            `We need to leave now, otherwise we'll miss it.`,
            `Write it down, otherwise you'll forget.`
          ]
        }
      ]
    },

    clarify_rephrase: {
      name: 'Clarify / Rephrase',
      icon: '🔍',
      color: 'bg-purple-500',
      connectors: [
        {
          word: 'in other words',
          usage: 'Use after saying something unclear or complex.',
          description: 'Restates an idea more clearly or simply.',
          examples: [
            `It's not sustainable — in other words, it won't last.`,
            'He was dismissed, in other words, he was fired.'
          ]
        },
        {
          word: 'I mean',
          usage: 'Use to correct or clarify what you just said.',
          description: 'Signals adjustment or clarification.',
          examples: [
            `It's too late — I mean, too late to start.`,
            'She was upset, I mean, really frustrated.'
          ]
        },
        {
          word: 'that is',
          usage: 'Use to give a precise clarification.',
          description: 'Introduces a more exact explanation.',
          examples: [
            `We'll meet on Friday, that is, if everyone agrees.`,
            'He works remotely, that is, from home.'
          ]
        },
        {
          word: 'specifically',
          usage: 'Use to narrow your meaning.',
          description: 'Focuses on a particular detail.',
          examples: [
            `I'm worried about costs, specifically maintenance.`,
            'We need help, specifically with logistics.'
          ]
        },
        {
          word: 'what I\'m trying to say is',
          usage: 'Use when you feel your point is not landing.',
          description: 'Resets your explanation with a clearer attempt.',
          examples: [
            `What I'm trying to say is, we need a different approach.`,
            `What I'm trying to say is, it's not about the money.`
          ]
        },
        {
          word: 'let me put it this way',
          usage: 'Use to rephrase using a different angle or analogy.',
          description: 'Signals a fresh attempt at explaining the same idea.',
          examples: [
            `Let me put it this way — would you trust them with your car?`,
            `Let me put it this way, it's like starting from scratch.`
          ]
        },
        {
          word: 'basically what happened was',
          usage: 'Use to simplify a confusing story or situation.',
          description: 'Cuts through complexity to give the simple version.',
          examples: [
            'Basically what happened was, they changed the rules last minute.',
            'Basically what happened was, the system crashed and nobody noticed.'
          ]
        },
        {
          word: 'the point is',
          usage: 'Use to refocus on the main idea after going off track.',
          description: 'Brings the conversation back to the core message.',
          examples: [
            `The point is, we can't keep doing this.`,
            `The point is, it worked and that's what matters.`
          ]
        },
        {
          word: 'sorry, let me rephrase that',
          usage: 'Use when you realize your wording was confusing.',
          description: 'Politely signals a do-over on what you just said.',
          examples: [
            `Sorry, let me rephrase that — I meant we should delay, not cancel.`,
            `Sorry, let me rephrase that. What I meant was it's optional.`
          ]
        },
        {
          word: 'to be more specific',
          usage: 'Use to add precision to a general statement.',
          description: 'Zooms in on a detail after a broad claim.',
          examples: [
            `To be more specific, I'm talking about the third quarter.`,
            `To be more specific, only two people were affected.`
          ]
        },
        {
          word: 'or rather',
          usage: 'Use to immediately correct yourself mid-sentence.',
          description: 'Quick self-correction without losing flow.',
          examples: [
            `He left Monday, or rather, Tuesday morning.`,
            `It's easy, or rather, easier than the last time.`
          ]
        }
      ]
    },

    organize_flow: {
      name: 'Organize ideas',
      icon: '🧭',
      color: 'bg-emerald-500',
      connectors: [
        {
          word: 'first',
          usage: 'Use to introduce the first point.',
          description: 'Signals the beginning of an ordered explanation.',
          examples: [
            `First, let's review the data.`,
            'First, we need approval.'
          ]
        },
        {
          word: 'then',
          usage: 'Use to move to the next step.',
          description: 'Shows progression in thought.',
          examples: [
            'Then, we contact the client.',
            'Fix this first, then move on.'
          ]
        },
        {
          word: 'finally',
          usage: 'Use to indicate the last point.',
          description: 'Signals the end of a sequence.',
          examples: [
            'Finally, we reached a decision.',
            'Finally, everything made sense.'
          ]
        },
        {
          word: 'moving on',
          usage: 'Use to shift topics.',
          description: 'Signals transition to a new subject.',
          examples: [
            `Moving on, let's discuss the budget.`,
            'Moving on to the next issue.'
          ]
        },
        {
          word: 'first of all',
          usage: 'Use to strongly introduce the very first point.',
          description: 'Emphasizes that this is the starting point.',
          examples: [
            `First of all, I wanna say thank you.`,
            `First of all, that's not what I said.`
          ]
        },
        {
          word: 'after that',
          usage: 'Use to describe what comes next in a sequence.',
          description: 'Natural way to chain events or steps.',
          examples: [
            'We had lunch. After that, we went back to work.',
            `After that, things got a lot easier.`
          ]
        },
        {
          word: 'at that point',
          usage: 'Use to mark a specific moment in a story.',
          description: 'Highlights a turning point or key moment.',
          examples: [
            'At that point, I just gave up.',
            `At that point, we realized something was wrong.`
          ]
        },
        {
          word: 'meanwhile',
          usage: 'Use to describe something happening at the same time.',
          description: 'Shows parallel actions or events.',
          examples: [
            'I was working. Meanwhile, they were on a break.',
            `Meanwhile, nobody told me about the change.`
          ]
        },
        {
          word: 'on one hand... on the other hand',
          usage: 'Use to present two sides of an argument.',
          description: 'Classic structure for weighing pros and cons.',
          examples: [
            `On one hand, it's cheaper. On the other hand, it's slower.`,
            `On one hand, I want to go. On the other hand, I'm tired.`
          ]
        },
        {
          word: 'the next thing',
          usage: 'Use to move to the following step in a story or plan.',
          description: 'Casual way to sequence events.',
          examples: [
            'The next thing we need to do is test it.',
            `The next thing I knew, they'd already left.`
          ]
        },
        {
          word: 'before that',
          usage: 'Use to insert something that happened earlier.',
          description: 'Adds a preceding event for context.',
          examples: [
            'We signed the contract. But before that, we negotiated for weeks.',
            `Before that, I had no idea what was going on.`
          ]
        },
        {
          word: 'by the way',
          usage: 'Use to insert a related but secondary thought.',
          description: 'Slips in extra info without derailing the conversation.',
          examples: [
            `By the way, did you get my email?`,
            `Oh, by the way, the meeting got moved to Friday.`
          ]
        },
        {
          word: 'speaking of which',
          usage: 'Use to naturally branch into a related topic.',
          description: 'Connects to something just mentioned.',
          examples: [
            `Speaking of which, have you talked to her yet?`,
            `Speaking of which, that reminds me of something.`
          ]
        }
      ]
    },

    give_example: {
      name: 'Give an example',
      icon: '📝',
      color: 'bg-indigo-500',
      connectors: [
        {
          word: 'for example',
          usage: 'Use to illustrate a point.',
          description: 'Introduces a concrete example.',
          examples: [
            'Many tools exist. For example, Notion is popular.',
            'Some cities, for example Tokyo, never sleep.'
          ]
        },
        {
          word: 'such as',
          usage: 'Use inside a sentence to list examples.',
          description: 'Introduces examples, not a full sentence.',
          examples: [
            'I enjoy sports such as tennis and swimming.',
            'Tools such as Excel are widely used.'
          ]
        },
        {
          word: 'like',
          usage: 'Casual way to introduce examples.',
          description: 'Common in spoken English.',
          examples: [
            'I enjoy movies like Inception.',
            'Things like this take time.'
          ]
        },
        {
          word: 'for instance',
          usage: 'Use as a slightly more formal alternative to "for example".',
          description: 'Introduces examples in a polished way.',
          examples: [
            `For instance, last week we had the same problem.`,
            `Some people, for instance my boss, love spreadsheets.`
          ]
        },
        {
          word: 'say',
          usage: 'Use to propose a hypothetical or quick example.',
          description: 'Very casual way to introduce a scenario.',
          examples: [
            `Say you had a million dollars — what would you do?`,
            `Say we start tomorrow, we could finish by Friday.`
          ]
        },
        {
          word: 'let\'s say',
          usage: 'Use to set up a hypothetical situation.',
          description: 'Creates a quick "what if" scenario.',
          examples: [
            `Let's say we go with option A — what happens then?`,
            `Let's say the budget is 10K. Is that enough?`
          ]
        },
        {
          word: 'to give you an idea',
          usage: 'Use before sharing an example that makes your point tangible.',
          description: 'Prepares the listener for a concrete illustration.',
          examples: [
            `To give you an idea, we get about 500 requests a day.`,
            `To give you an idea, it took us three months just to plan it.`
          ]
        },
        {
          word: 'imagine',
          usage: 'Use to put the listener in a hypothetical scenario.',
          description: 'Engages the listener by making them picture something.',
          examples: [
            `Imagine you're the customer — how would you feel?`,
            `Imagine doing this every single day. That's what they deal with.`
          ]
        },
        {
          word: 'take... for example',
          usage: 'Use to single out a specific case from a broader claim.',
          description: 'Points to one clear instance to prove your point.',
          examples: [
            `Take Netflix, for example — they completely changed the industry.`,
            `Take last month, for example. We had zero complaints.`
          ]
        },
        {
          word: 'here\'s a good example',
          usage: 'Use to introduce an example you think really nails the point.',
          description: 'Builds anticipation for a strong example.',
          examples: [
            `Here's a good example — my neighbor just did the same thing.`,
            `Here's a good example of what I'm talking about.`
          ]
        }
      ]
    },

    emphasize_point: {
      name: 'Emphasize',
      icon: '💡',
      color: 'bg-yellow-500',
      connectors: [
        {
          word: 'in fact',
          usage: 'Use to strengthen or correct a statement.',
          description: 'Highlights truth or surprise.',
          examples: [
            `It's not expensive. In fact, it's cheap.`,
            `I didn't quit. In fact, I was promoted.`
          ]
        },
        {
          word: 'indeed',
          usage: 'Use to strongly confirm something.',
          description: 'Adds emphasis or agreement.',
          examples: [
            'This is indeed a challenge.',
            'She is indeed very talented.'
          ]
        },
        {
          word: 'seriously',
          usage: 'Use to stress that you are not exaggerating.',
          description: 'Adds weight and sincerity to your statement.',
          examples: [
            'Seriously, this is the best pizza I ever had.',
            `Seriously, we can't ignore this anymore.`
          ]
        },
        {
          word: 'honestly',
          usage: 'Use to signal genuine, unfiltered opinion.',
          description: 'Makes your statement feel raw and real.',
          examples: [
            `Honestly, I don't think it's gonna work.`,
            `Honestly, that was the best decision I ever made.`
          ]
        },
        {
          word: 'literally',
          usage: 'Use to emphasize that something is exactly true (or for dramatic effect).',
          description: 'Stresses that you mean it word for word.',
          examples: [
            'I literally waited two hours.',
            'She literally saved my life.'
          ]
        },
        {
          word: 'the thing that really matters is',
          usage: 'Use to zoom in on the most important part.',
          description: 'Tells the listener to pay extra attention.',
          examples: [
            `The thing that really matters is whether the customer is happy.`,
            `The thing that really matters is we did it on time.`
          ]
        },
        {
          word: 'what really gets me is',
          usage: 'Use to highlight what bothers or impresses you most.',
          description: 'Signals strong personal reaction.',
          examples: [
            `What really gets me is that nobody said anything.`,
            `What really gets me is how fast they pulled it off.`
          ]
        },
        {
          word: 'trust me',
          usage: 'Use to add personal conviction before a claim.',
          description: 'Signals confidence and experience behind your words.',
          examples: [
            `Trust me, you don't wanna go that route.`,
            `Trust me, it's worth the extra effort.`
          ]
        },
        {
          word: 'no joke',
          usage: 'Use to emphasize that something surprising is true.',
          description: 'Stresses you are being completely serious.',
          examples: [
            'No joke, it took them five minutes to fix it.',
            'No joke, that was the hardest thing I ever did.'
          ]
        },
        {
          word: 'I can\'t stress this enough',
          usage: 'Use to repeat or reinforce a critical point.',
          description: 'Maximum emphasis — signals extreme importance.',
          examples: [
            `I can't stress this enough — back up your files.`,
            `I can't stress this enough, communication is key.`
          ]
        },
        {
          word: 'above all',
          usage: 'Use to highlight the single most important thing.',
          description: 'Puts one idea above everything else mentioned.',
          examples: [
            'Above all, be honest with the client.',
            `Above all, don't rush the process.`
          ]
        },
        {
          word: 'especially',
          usage: 'Use to single out something that stands out from the rest.',
          description: 'Highlights one item as more important or relevant.',
          examples: [
            'Everyone did great, especially the new guy.',
            `It's tough, especially when you're doing it alone.`
          ]
        }
      ]
    },

    show_opinion: {
      name: 'Show opinion',
      icon: '💬',
      color: 'bg-orange-500',
      connectors: [
        {
          word: 'I think',
          usage: 'Use to express your opinion softly.',
          description: 'Signals personal opinion.',
          examples: [
            'I think this could work.',
            'I think we need more time.'
          ]
        },
        {
          word: 'in my view',
          usage: 'More deliberate way to state opinion.',
          description: 'Expresses personal perspective.',
          examples: [
            'In my view, this is unnecessary.',
            'In my view, we should wait.'
          ]
        },
        {
          word: 'I feel like',
          usage: 'Use to express a gut feeling or intuition.',
          description: 'Softer and more personal than "I think".',
          examples: [
            `I feel like we're missing something.`,
            `I feel like this isn't the right time.`
          ]
        },
        {
          word: 'if you ask me',
          usage: 'Use to offer an opinion even if nobody asked.',
          description: 'Casual way to share your take on something.',
          examples: [
            `If you ask me, the whole thing was a waste of time.`,
            `If you ask me, she's the best person for the job.`
          ]
        },
        {
          word: 'personally',
          usage: 'Use to make it clear this is just your perspective.',
          description: 'Distances your opinion from universal truth.',
          examples: [
            `Personally, I prefer working from home.`,
            `Personally, I wouldn't do it that way.`
          ]
        },
        {
          word: 'to be honest',
          usage: 'Use before sharing a sincere or possibly unpopular opinion.',
          description: 'Signals you are about to be candid.',
          examples: [
            `To be honest, I wasn't impressed.`,
            `To be honest, I think we should start over.`
          ]
        },
        {
          word: 'from my perspective',
          usage: 'Use to frame your opinion based on your experience.',
          description: 'Acknowledges that others may see it differently.',
          examples: [
            `From my perspective, the project went well.`,
            `From my perspective, we handled it the right way.`
          ]
        },
        {
          word: 'the way I see it',
          usage: 'Use to present your interpretation of a situation.',
          description: 'Natural, conversational way to share your viewpoint.',
          examples: [
            `The way I see it, we have two options.`,
            `The way I see it, they're not being fair.`
          ]
        },
        {
          word: 'I\'d say',
          usage: 'Use to give a casual estimate or soft opinion.',
          description: 'Less committal than "I think" — good for rough takes.',
          examples: [
            `I'd say we need about two more weeks.`,
            `I'd say it went pretty well, all things considered.`
          ]
        },
        {
          word: 'as far as I\'m concerned',
          usage: 'Use to state your position firmly but personally.',
          description: 'Declares your stance while leaving room for others.',
          examples: [
            `As far as I'm concerned, the deal is done.`,
            `As far as I'm concerned, it's not our problem.`
          ]
        },
        {
          word: 'I gotta say',
          usage: 'Use to introduce something you feel compelled to share.',
          description: 'Casual American way to preface a strong opinion.',
          examples: [
            `I gotta say, that was impressive.`,
            `I gotta say, I didn't see that coming.`
          ]
        }
      ]
    },

    be_careful: {
      name: 'Be careful / Polite',
      icon: '🫶',
      color: 'bg-teal-500',
      connectors: [
        {
          word: 'maybe',
          usage: 'Use to soften suggestions.',
          description: 'Reduces directness.',
          examples: [
            'Maybe we should wait.',
            `Maybe there's another option.`
          ]
        },
        {
          word: 'it seems',
          usage: 'Use to avoid sounding absolute.',
          description: 'Shows uncertainty or caution.',
          examples: [
            'It seems we misunderstood.',
            'It seems unlikely.'
          ]
        },
        {
          word: 'I was just wondering',
          usage: 'Use to ask a question without being pushy.',
          description: 'Extremely polite way to introduce a question.',
          examples: [
            'I was just wondering if you had a minute.',
            'I was just wondering what you thought about it.'
          ]
        },
        {
          word: 'correct me if I\'m wrong',
          usage: 'Use before stating something you believe is true.',
          description: 'Shows humility and invites correction.',
          examples: [
            `Correct me if I'm wrong, but didn't we agree on Tuesday?`,
            `Correct me if I'm wrong, but that's not what the policy says.`
          ]
        },
        {
          word: 'no offense, but',
          usage: 'Use to soften a statement that might sound rude.',
          description: 'Signals good intentions before a blunt remark.',
          examples: [
            `No offense, but I think there's a better way to do this.`,
            `No offense, but that doesn't make sense to me.`
          ]
        },
        {
          word: 'I don\'t mean to be rude, but',
          usage: 'Use to politely deliver a direct or critical observation.',
          description: 'Cushions a potentially harsh statement.',
          examples: [
            `I don't mean to be rude, but we're running out of time.`,
            `I don't mean to be rude, but I disagree.`
          ]
        },
        {
          word: 'would you mind',
          usage: 'Use to make polite requests.',
          description: 'Very courteous way to ask someone to do something.',
          examples: [
            'Would you mind sending that to me again?',
            'Would you mind closing the door?'
          ]
        },
        {
          word: 'I might be wrong, but',
          usage: 'Use to offer an idea without sounding too sure.',
          description: 'Shows openness to being corrected.',
          examples: [
            `I might be wrong, but I think the meeting is at 3.`,
            `I might be wrong, but that doesn't seem right.`
          ]
        },
        {
          word: 'just a thought',
          usage: 'Use after offering a suggestion to keep it low-pressure.',
          description: 'Downplays your idea so it feels optional.',
          examples: [
            `We could try a different approach — just a thought.`,
            `Maybe we should ask her. Just a thought.`
          ]
        },
        {
          word: 'with all due respect',
          usage: 'Use before disagreeing with someone in a respectful way.',
          description: 'Acknowledges the other person while still pushing back.',
          examples: [
            `With all due respect, I don't think that's accurate.`,
            `With all due respect, we need to reconsider.`
          ]
        },
        {
          word: 'if that makes sense',
          usage: 'Use at the end of an explanation to check understanding.',
          description: 'Invites the listener to ask for clarification.',
          examples: [
            `We should split the work by priority, if that makes sense.`,
            `I'd rather wait until Monday, if that makes sense.`
          ]
        },
        {
          word: 'kind of / sort of',
          usage: 'Use to soften a statement or make it less absolute.',
          description: 'Hedges your words to sound less direct.',
          examples: [
            `I kind of agree, but not entirely.`,
            `It sort of depends on the situation.`
          ]
        }
      ]
    },

    conclude_wrap_up: {
      name: 'Conclude / Wrap up',
      icon: '🏁',
      color: 'bg-pink-500',
      connectors: [
        {
          word: 'in conclusion',
          usage: 'Use in formal endings.',
          description: 'Signals final remarks.',
          examples: [
            'In conclusion, we recommend approval.',
            'In conclusion, the plan is viable.'
          ]
        },
        {
          word: 'overall',
          usage: 'Use to summarize generally.',
          description: 'Gives a big-picture conclusion.',
          examples: [
            'Overall, it was successful.',
            `Overall, we're satisfied.`
          ]
        },
        {
          word: 'to sum up',
          usage: 'Casual summary expression.',
          description: 'Briefly wraps up.',
          examples: [
            `To sum up, we're on track.`,
            `To sum up, let's proceed.`
          ]
        },
        {
          word: 'at the end of the day',
          usage: 'Use to state what ultimately matters most.',
          description: 'Very common American expression for bottom-line thinking.',
          examples: [
            `At the end of the day, it's about the customer.`,
            `At the end of the day, we did our best.`
          ]
        },
        {
          word: 'long story short',
          usage: 'Use to skip details and jump to the conclusion.',
          description: 'Signals you are cutting a long explanation short.',
          examples: [
            `Long story short, we got the deal.`,
            `Long story short, it didn't work out.`
          ]
        },
        {
          word: 'the bottom line is',
          usage: 'Use to state the most essential point.',
          description: 'Cuts through everything to the core conclusion.',
          examples: [
            `The bottom line is, we need more funding.`,
            `The bottom line is, it's not ready yet.`
          ]
        },
        {
          word: 'so basically',
          usage: 'Use to simplify everything into one final statement.',
          description: 'Casual wrap-up that distills the whole conversation.',
          examples: [
            `So basically, we're starting over next week.`,
            `So basically, everyone agreed.`
          ]
        },
        {
          word: 'all in all',
          usage: 'Use to give a balanced final assessment.',
          description: 'Wraps things up considering everything discussed.',
          examples: [
            'All in all, it was a good experience.',
            `All in all, I'd say we're in good shape.`
          ]
        },
        {
          word: 'anyway',
          usage: 'Use to casually end a topic and signal closure.',
          description: 'Low-key way to wrap up without being formal.',
          examples: [
            `Anyway, that's pretty much it.`,
            `Anyway, I just wanted to let you know.`
          ]
        },
        {
          word: 'so yeah',
          usage: 'Use to casually signal the end of your thought.',
          description: 'Very informal closer common in everyday American speech.',
          examples: [
            `So yeah, that's what happened.`,
            `So yeah, I think we should go for it.`
          ]
        },
        {
          word: 'in short',
          usage: 'Use to deliver a quick summary.',
          description: 'Condenses your point into a brief statement.',
          examples: [
            `In short, we need to act fast.`,
            `In short, it was totally worth it.`
          ]
        },
        {
          word: 'that\'s basically it',
          usage: 'Use to signal you have nothing more to add.',
          description: 'Clean, casual ending to a conversation or explanation.',
          examples: [
            `That's basically it. Any questions?`,
            `That's basically it — nothing fancy.`
          ]
        }
      ]
    },

    buy_time: {
      name: 'Buy time / Sound natural',
      icon: '⏳',
      color: 'bg-gray-500',
      connectors: [
        {
          word: 'you know',
          usage: 'Use to keep speaking naturally.',
          description: 'Maintains flow in conversation.',
          examples: [
            'It was, you know, unexpected.',
            'I was trying to, you know, explain.'
          ]
        },
        {
          word: 'like',
          usage: 'Very casual filler.',
          description: 'Common in spoken American English.',
          examples: [
            'It was, like, really fast.',
            'I was, like, shocked.'
          ]
        },
        {
          word: 'let me think',
          usage: 'Use to buy a few seconds before answering.',
          description: 'Honest pause that shows you are processing.',
          examples: [
            `Let me think... I believe it was last Tuesday.`,
            `Let me think about that for a second.`
          ]
        },
        {
          word: 'how do I put this',
          usage: 'Use when searching for the right words.',
          description: 'Signals careful word choice.',
          examples: [
            `How do I put this... it wasn't exactly what we expected.`,
            `How do I put this — the results were disappointing.`
          ]
        },
        {
          word: 'what\'s the word',
          usage: 'Use when a specific word is on the tip of your tongue.',
          description: 'Natural pause while searching for vocabulary.',
          examples: [
            `It was really... what's the word... overwhelming.`,
            `The whole thing felt, what's the word, surreal.`
          ]
        },
        {
          word: 'I mean',
          usage: 'Use as a filler to keep your turn while thinking.',
          description: 'Maintains your speaking turn without silence.',
          examples: [
            `I mean, it's not like we had a choice.`,
            `I mean, that's just how it is.`
          ]
        },
        {
          word: 'you know what I mean',
          usage: 'Use to check if the listener follows you.',
          description: 'Seeks confirmation while keeping the flow.',
          examples: [
            `It felt off, you know what I mean?`,
            `I just needed a break, you know what I mean?`
          ]
        },
        {
          word: 'right',
          usage: 'Use as a filler between thoughts.',
          description: 'Quick pause word that keeps momentum.',
          examples: [
            `So we went there, right, and then everything changed.`,
            `I told him, right, but he didn't listen.`
          ]
        },
        {
          word: 'anyway',
          usage: 'Use to recover from a pause or tangent.',
          description: 'Gets you back on track after losing your thread.',
          examples: [
            `Anyway, where was I?`,
            `Anyway, the point is we made it work.`
          ]
        },
        {
          word: 'it\'s like',
          usage: 'Use to start a comparison or analogy while thinking.',
          description: 'Buys time by setting up a comparison.',
          examples: [
            `It's like when you know something is wrong but can't explain it.`,
            `It's like trying to fix a car with no tools.`
          ]
        },
        {
          word: 'hold on',
          usage: 'Use to pause and gather your thoughts mid-conversation.',
          description: 'Direct way to ask for a moment to think.',
          examples: [
            `Hold on, let me check that real quick.`,
            `Hold on, I had a point but I lost it.`
          ]
        },
        {
          word: 'that\'s a good question',
          usage: 'Use to buy time after being asked something unexpected.',
          description: 'Acknowledges the question while you think of an answer.',
          examples: [
            `That's a good question. Let me think about it.`,
            `That's a good question — I honestly don't know.`
          ]
        }
      ]
    }
  };

  const categories = Object.keys(connectorsData).map(key => ({
    id: key,
    ...connectorsData[key]
  }));

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentView('list');
  };

  const handleConnectorClick = (connector) => {
    setSelectedConnector(connector);
    setCurrentView('detail');
  };

  const handleBack = () => {
    if (currentView === 'detail') {
      setCurrentView('list');
      setSelectedConnector(null);
    } else if (currentView === 'list') {
      setCurrentView('categories');
      setSelectedCategory(null);
    }
  };

  // --- Shared sub-components (used by both mobile & desktop) ---

  const CategoryCard = ({ category, isActive, onClick }) => (
    <button
      onClick={onClick}
      className={`w-full rounded-xl shadow-sm hover:shadow-md transition-all p-5 text-left border active:scale-[0.98] ${
        isActive
          ? 'bg-blue-50 border-blue-300 ring-2 ring-blue-200'
          : 'bg-white border-slate-200 hover:border-slate-300'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center text-2xl shadow-sm`}>
            {category.icon}
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-800">{category.name}</h2>
            <p className="text-sm text-slate-500">{category.connectors.length} connectors</p>
          </div>
        </div>
        <ChevronRight className="w-5 h-5 text-slate-400" />
      </div>
    </button>
  );

  const ConnectorCard = ({ connector, isActive, onClick }) => (
    <button
      onClick={onClick}
      className={`w-full rounded-lg shadow-sm hover:shadow-md transition-all p-4 text-left border active:scale-[0.98] ${
        isActive
          ? 'bg-blue-50 border-blue-300 ring-2 ring-blue-200'
          : 'bg-white border-slate-200 hover:border-slate-300'
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-800 capitalize">{connector.word}</h3>
          <p className="text-sm text-slate-500 mt-1 line-clamp-1">{connector.description}</p>
        </div>
        <ChevronRight className="w-5 h-5 text-slate-400 flex-shrink-0 ml-2" />
      </div>
    </button>
  );

  const DetailContent = ({ connector, category, showBackButton, onBack }) => (
    <div className="min-h-screen lg:min-h-0 bg-gradient-to-br from-slate-50 to-slate-100 lg:bg-transparent">
      {showBackButton && (
        <div className="sticky top-0 bg-white shadow-sm z-10 px-4 py-4 border-b border-slate-200 lg:hidden">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-blue-600 mb-3 active:opacity-70"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to list</span>
          </button>
          <h1 className="text-2xl font-bold text-slate-800 capitalize">{connector.word}</h1>
          <div className="flex items-center gap-2 mt-2">
            <div className={`${category.color} px-3 py-1 rounded-full text-white text-xs font-medium`}>
              {category.name}
            </div>
          </div>
        </div>
      )}

      <div className="hidden lg:block mb-6">
        <h1 className="text-2xl font-bold text-slate-800 capitalize">{connector.word}</h1>
        <div className="flex items-center gap-2 mt-2">
          <div className={`${category.color} px-3 py-1 rounded-full text-white text-xs font-medium`}>
            {category.name}
          </div>
        </div>
      </div>

      <div className="p-4 lg:p-0 space-y-4 pb-8">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">How to Use</h2>
          <p className="text-slate-700 leading-relaxed">{connector.usage}</p>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Description</h2>
          <p className="text-slate-700 leading-relaxed">{connector.description}</p>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">Examples</h2>
          <div className="space-y-3">
            {connector.examples.map((example, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 leading-relaxed italic">"{example}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // --- Mobile Views (hidden on lg+) ---

  const MobileCategoriesView = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="sticky top-0 bg-white shadow-sm z-10 px-4 py-6 border-b border-slate-200">
        <div className="flex items-center gap-3 mb-2">
          <BookOpen className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-slate-800">English Connectors</h1>
        </div>
        <p className="text-sm text-slate-600">Select a category to explore connectors</p>
      </div>
      <div className="p-4 space-y-3 pb-8">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            isActive={false}
            onClick={() => handleCategoryClick(category)}
          />
        ))}
      </div>
    </div>
  );

  const MobileListView = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="sticky top-0 bg-white shadow-sm z-10 px-4 py-4 border-b border-slate-200">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-blue-600 mb-3 active:opacity-70"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back</span>
        </button>
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 ${selectedCategory.color} rounded-lg flex items-center justify-center text-xl shadow-sm`}>
            {selectedCategory.icon}
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-800">{selectedCategory.name}</h1>
            <p className="text-sm text-slate-600">{selectedCategory.connectors.length} connectors</p>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-2 pb-8">
        {selectedCategory.connectors.map((connector, index) => (
          <ConnectorCard
            key={index}
            connector={connector}
            isActive={false}
            onClick={() => handleConnectorClick(connector)}
          />
        ))}
      </div>
    </div>
  );

  const MobileDetailView = () => (
    <DetailContent
      connector={selectedConnector}
      category={selectedCategory}
      showBackButton={true}
      onBack={handleBack}
    />
  );

  // --- Desktop Layout (visible on lg+) ---

  const DesktopLayout = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Top header */}
      <div className="sticky top-0 bg-white shadow-sm z-10 px-8 py-5 border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-slate-800">FindMyWord</h1>
          <span className="text-sm text-slate-400 ml-2">— Enhance your flow</span>
        </div>
      </div>

      {/* 3-column body */}
      <div className="max-w-[1400px] mx-auto flex gap-6 p-6" style={{ height: 'calc(100vh - 73px)' }}>

        {/* Column 1: Categories */}
        <div className="w-[320px] flex-shrink-0 overflow-y-auto pr-2 custom-scrollbar">
          <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-1">Categories</h2>
          <div className="space-y-2">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                isActive={selectedCategory?.id === category.id}
                onClick={() => {
                  setSelectedCategory(category);
                  setSelectedConnector(null);
                  setCurrentView('list');
                }}
              />
            ))}
          </div>
        </div>

        {/* Column 2: Connector list */}
        <div className="w-[340px] flex-shrink-0 overflow-y-auto pr-2 custom-scrollbar">
          {selectedCategory ? (
            <>
              <div className="flex items-center gap-3 mb-3 px-1">
                <div className={`w-8 h-8 ${selectedCategory.color} rounded-md flex items-center justify-center text-lg shadow-sm`}>
                  {selectedCategory.icon}
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-slate-700">{selectedCategory.name}</h2>
                  <p className="text-xs text-slate-400">{selectedCategory.connectors.length} connectors</p>
                </div>
              </div>
              <div className="space-y-2">
                {selectedCategory.connectors.map((connector, index) => (
                  <ConnectorCard
                    key={index}
                    connector={connector}
                    isActive={selectedConnector?.word === connector.word}
                    onClick={() => {
                      setSelectedConnector(connector);
                      setCurrentView('detail');
                    }}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-slate-400 text-sm">
              <p>Pick a category to see connectors</p>
            </div>
          )}
        </div>

        {/* Column 3: Detail */}
        <div className="flex-1 min-w-0 overflow-y-auto pr-2 custom-scrollbar bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          {selectedConnector ? (
            <DetailContent
              connector={selectedConnector}
              category={selectedCategory}
              showBackButton={false}
              onBack={handleBack}
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-slate-400 text-sm gap-2">
              <BookOpen className="w-12 h-12 text-slate-300" />
              <p>Select a connector to see details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile layout */}
      <div className="lg:hidden max-w-2xl mx-auto">
        {currentView === 'categories' && <MobileCategoriesView />}
        {currentView === 'list' && <MobileListView />}
        {currentView === 'detail' && <MobileDetailView />}
      </div>

      {/* Desktop layout */}
      <div className="hidden lg:block">
        <DesktopLayout />
      </div>
    </>
  );
};

export default ConnectorsApp;
