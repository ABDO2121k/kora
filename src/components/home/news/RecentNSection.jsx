
import { useContext, useEffect, useState } from 'react'
import BlogRecent from './BlogRecent'
import newsStyles from './styles/News.module.css'
import { myContext } from '../../../context/GlobalContext'


const RecentNSection = ({ number }) => {
  const [data, setData] = useState()
  const context = useContext(myContext)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await context?.getNews()
        setData(data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])
  return (
    <div>
      <div className="p-5">
        <div className={newsStyles.sectionT}>
          <h5>Recent Post</h5>
        </div>
        <div className="mt-5">
          {data?.length > 0 && data?.slice(0, number).map((e, i) => (
            <BlogRecent key={i} blog={e} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default RecentNSection