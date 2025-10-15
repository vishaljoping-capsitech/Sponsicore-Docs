import Paragraph from "../../../components/Paragraph"
import { images } from '../../../assets'
import Title from "../../../components/Title"
import ImageCard from "../../../components/ImageCard"
const MultipleReports = () => {
    return (
        <>
            <Paragraph
                text={<ul>
                    <li><Title text={"Wide Range of Reports:"} /> Access a variety of detailed reports designed to provide valuable insights across different areas of your business.</li>
                    <li><Title text={"Customizable Filters:"} /> Use multiple filters to tailor the data exactly how you need it, making it easy to focus on the most relevant information.</li>
                    <li><Title text={"Flexible Export Options:"} /> Export your reports effortlessly in popular formats like <code>.CSV</code> or <code>.XLSX</code> for easy sharing and further analysis.</li>
                    <li><Title text={"Dynamic Data Views:"} /> While search and sorting help you adjust the on-screen view, all applied filters will also be reflected in the exported reports, ensuring accuracy and consistency.
                        <ImageCard src={images.adminReportsOverview} />
                    </li>

                </ul>} />
        </>
    )
}

export default MultipleReports