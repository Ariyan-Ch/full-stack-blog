import { Image} from '@imagekit/react';


const ImageB = ({src,className,w,h,alt}) => {
  return (
    <Image urlEndpoint={import.meta.env.VITE_IK_URL}
        src={src} className={className} alt={alt}
        width = {w}
        height = {h}
        loading = "lazy"
        lqip = {{active:true, quality:20}}
        transformation={[
          {
            width:w,
            height:h,

          }
        ]}
    />
  )
}

export default ImageB