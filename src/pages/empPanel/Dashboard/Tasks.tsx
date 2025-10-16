import { images } from '../../../assets'
import ImageCard from '../../../components/ImageCard'
import Paragraph from '../../../components/Paragraph'

const Tasks = () => {
  return (
    <>
      <Paragraph
        text={
          <>
            <ul>
              <li>Lists all tasks assigned for today.</li>
              <li>You can click on any task to view its detailed description, status, and due time.</li>
            </ul>          
          </>
        }
      />
      <ImageCard src={images.empDashboardTasks} />
    </>
  )
}

export default Tasks