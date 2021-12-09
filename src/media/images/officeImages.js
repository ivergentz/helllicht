import { v4 as uuid } from 'uuid'
import office01 from './office01.jpg'
import office03 from './office03.jpeg'
import office04 from './office04.jpeg'
import office05 from './office05.jpeg'
import office06 from './office06.jpeg'
import office07 from './office07.jpeg'

const images = [
  { id: uuid(), src: office01, title: 'foo', description: '01' },
  { id: uuid(), src: office03, title: 'foo', description: '03' },
  { id: uuid(), src: office04, title: 'foo', description: '04' },
  { id: uuid(), src: office05, title: 'foo', description: '05' },
  { id: uuid(), src: office06, title: 'foo', description: '06' },
  { id: uuid(), src: office07, title: 'foo', description: '07' },
]

export default images
