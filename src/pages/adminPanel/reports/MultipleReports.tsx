import Paragraph from "../../../components/Paragraph"
import { images } from '../../../assets'
import Title from "../../../components/Title"
import ImageCard from "../../../components/ImageCard"
import SubHeading from "../../../components/SubHeading"

const MultipleReports = () => {
    return (
        <>
        <SubHeading text="Multiple Reports" />
            <Paragraph
                text={<ul className="docs-list">
                    <li><Title text={"Wide Range of Reports:"} /> Access a variety of detailed reports designed to provide valuable insights across different areas of business.</li>
                    <li><Title text={"Customizable Filters:"} /> Use multiple filters to tailor the data exactly according to the need, making it easy to focus on the most relevant information.</li>
                    <li><Title text={"Flexible Export Options:"} /> Export the reports effortlessly in popular formats like <code>.CSV</code> or <code>.XLSX</code> for easy sharing and further analysis.</li>
                    <li><Title text={"Dynamic Data Views:"} /> While search and sorting it helps to adjust the on-screen view, all applied filters will also be reflected in the exported reports, ensuring accuracy and consistency.
                        <ImageCard src={images.adminReportsOverview} />
                    </li>
                </ul>} />
        </>
    )
}

export default MultipleReports