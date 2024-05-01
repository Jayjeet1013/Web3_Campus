import Subscriber from '@/components/home/Subscriber'
import LearnByGame from '@/components/learn/LearnByGame'
import LearnByYoutube from '@/components/learn/LearnByYoutube'
import LearnHeader from '@/components/learn/LearnHeader'
import LearnTech from '@/components/learn/LearnTech'
import Platforms from '@/components/learn/Platforms'
import React from 'react'

const index = () => {
  return (
    <div>
      <LearnHeader />
      <Platforms/>
      <LearnByGame/>

      <LearnByYoutube/>
      <LearnTech />
      <Subscriber />
    </div>
  );
}

export default index