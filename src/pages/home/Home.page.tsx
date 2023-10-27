import { FC } from 'react'
import css from './Home.module.scss'

const Home: FC = () => {
  return (
    <div id={css.homeInnerContainer}>
      <div id={css.topSection}></div>
    </div>
  )
}

export default Home
