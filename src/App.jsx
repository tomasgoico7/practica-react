import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'tomasgoico7',
    name: 'Tomas Goicoechea',
    isFollowing: true
  },
  {
    userName: 'trvisXX',
    name: 'Travis Scott',
    isFollowing: false
  },
  {
    userName: 'pepito',
    name: 'Don Pepito',
    isFollowing: true
  },
  {
    userName: 'riverplate',
    name: 'River Plate',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}