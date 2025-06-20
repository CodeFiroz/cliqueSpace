import React from 'react'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import { CakeIcon, Calendar } from 'lucide-react'
import PostCard from '../components/Ui/PostCard'
import ProfileHead from '../components/Ui/ProfileHead'

const NewProfile = () => {
  return (
    <>
    <Header />

    <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] dark:bg-neutral-900">

        <div>
            <Sidebar />
        </div>

        <div className='p-5 lg:p-15'>

           
          <ProfileHead />
          

          <div className="py-10">
            <PostCard 
            title={"Whats the best photo in your gallery?"}
            image={"https://preview.redd.it/whats-the-best-photo-in-your-gallery-v0-3kuuw4f5ch7f1.jpeg?width=640&crop=smart&auto=webp&s=ab7ccbf25ad2ca2848254d876105193a0f6b9ccc"}
          />

          
          <PostCard 
            title={"Got judged in Delhi Metro for resting on my girlfriend’s shoulder"}
            content={`I wanted to share something that happened today and get your take on it.

Me and my girlfriend were travelling in the Delhi Metro. She recently got into Indigo as a flight attendant, and today was her medical test. We had to leave early around 7 AM, and both of us didn’t get much sleep.

On our way back, I was tired and had my head resting on her shoulder. At one point, I jokingly rubbed my nose on her shoulder because I had a bit of a cold — nothing over the top, just a small moment between us.

An uncle sitting next to us suddenly said: “Don’t do this. You don’t have etiquettes. This is a public place. Don’t you have elders at home? Would you do this in front of them?”

I calmly tried to explain that I wasn’t doing anything inappropriate, but he kept insisting. Then another uncle joined him and told me to shut up and stop arguing. I told them I was being respectful and only trying to explain my side.

Honestly, it spoiled my mood. I wasn’t trying to make a scene or offend anyone — just tired and sharing a peaceful moment with someone I care about.

Was I wrong here? How do you usually deal with moral policing like this in public spaces?

Would really appreciate some honest thoughts`}
          />

          <PostCard 
            title={"my mom got hurt and i don't feel bad about it at all"}
            content={`last night my sister was trying to find her ruler but she couldn't find it anywhere in her room so she asked my mom to find it for her, and when my mom was searching for it under the bed and dressing table my sister started saying ki "arre i have searched there already and all, arre mom do not tear my chart paper", ik my sister does get kinda cranky sometimes, but then this thing and some past thing from yesterday too got added up and my sister got a good beating from my mom, and then she was yelling at her things like you irritate me so much you get on my nerves bla bla bla, then my dad went inside the room to see what's going on, meanwhile my sister left the room at the first chance, my mom kept yelling and probably all that yelling she was doing took over her head and she ran to give my sister a beating again but then my dad came in her way and her leg got stuck in the door of the room and she got a cut in the little finger of her toes and she started bleeding profusely, but dad did her first aid and later she went to see a doctor and she got stitches.`}
          />
          </div>

        </div>

    </div>
    </>
  )
}

export default NewProfile