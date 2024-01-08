import AvatarEditor from 'react-avatar-editor'

function MyEditor() {
    return (
      <AvatarEditor
        image="http://localhost:5173/home-1.png"
        width={250}
        height={250}
        border={50}
        color={[255, 255, 255, 0.6]} // RGBA
        scale={1.2}
        rotate={0}
      />
    )
  }

export default MyEditor