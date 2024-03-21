import  { useContext } from 'react'
import BlogRecent from './BlogRecent'
import newsStyles from './styles/News.module.css'
import { myContext } from '../../../context/GlobalContext'

const RecentNSection = ({number}) => {
    const context=useContext(myContext)
  return (
    <div>
         <div className="p-5">
            <div className={newsStyles.sectionT}>
              <h5>Recent Post</h5>
            </div>
            <div className="mt-5">
              {context?.blogPostTable?.length > 0 &&context?.blogPostTable.slice(0, number).map((e, i) => (
                <BlogRecent key={i} blog={e} />
              ))}
            </div>
          </div>
    </div>
  )
}

export default RecentNSection