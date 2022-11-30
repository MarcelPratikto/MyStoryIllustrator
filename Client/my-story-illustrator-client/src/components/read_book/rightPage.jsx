import GenerateImage from "./generateImage"
import GenericPage from "./genericPage"

function RightPage({ caption, image, updateCaption, updateImage, style, username }) {

    return (
        <GenericPage>
            <GenerateImage
                caption={caption}
                image={image}
                updateCaption={updateCaption}
                updateImage={updateImage}
                style={style}
                username={username}
            />
        </GenericPage>
    )
}

export default RightPage