import GenerateImage from "./generateImage"
import GenericPage from "./genericPage"

function RightPage(props) {

    return (
        <GenericPage>
            <GenerateImage mode="edit" caption={props.caption} image={props.image} />
        </GenericPage>
    )
}

export default RightPage