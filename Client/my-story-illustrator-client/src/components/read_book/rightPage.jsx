import GenerateImage from "./generateImage"
import GenericPage from "./genericPage"

function RightPage({ caption, image, updateCaption, updateImage }) {

    return (
        <GenericPage>
            <GenerateImage
                caption={caption}
                image={image}
                updateCaption={updateCaption}
                updateImage={updateImage}
            />
        </GenericPage>
    )
}

export default RightPage