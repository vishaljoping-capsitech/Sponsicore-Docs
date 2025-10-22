
import { images } from '../../../assets'
import ImageCard from '../../../components/ImageCard'
import Paragraph from '../../../components/Paragraph'
import Title from '../../../components/Title'

const ApplicationUser = () => {
    return (
        <>
            <Paragraph text={<>
                If a user is linked to an employee, their corresponding employee ID will be displayed within the user details. By clicking on the employee ID, users are redirected to the employee's profile page, allowing for quick access to detailed employee information and a more seamless navigation experience between user and employee records.
                <ImageCard src={images.applicationUsers.overview} />
                <ul>
                    <li id='add-application-user'><Title text='Add Users:' /> Users can add new members to the system by entering their details, assigning roles, and providing necessary access permissions.
                    <ImageCard src={images.applicationUsers.add} /></li>
                    <li id='edit-application-user'><Title text='Edit User Information:' /> Users can modify existing user profiles, such as updating personal information, changing roles, or adjusting access levels to keep records current and accurate.
                    <ImageCard src={images.applicationUsers.edit} /></li>
                    <li id='application-user-status'><Title text='Update User Status:' /> Administrators can change a user's status—such as activating, deactivating, or suspending accounts—based on organizational needs or user activity.
                    <ImageCard src={images.applicationUsers.status} /></li>
                    <li id='delete-application-user'><Title text='Force Logout Users:' /> Admins can remotely log out users from the system, which is useful in cases like security concerns, session management, or account updates.
                    <ImageCard src={images.applicationUsers.delete} /></li>
                </ul>
            </>} />
        </>
    )
}

export default ApplicationUser