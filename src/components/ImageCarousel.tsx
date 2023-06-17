import { useState, useEffect } from "react"

type CarouselProps = {
  images: string[]
  altTags: string[]
}

export default function ImageCarousel({ images, altTags }: CarouselProps) {
  const [index, setIndex] = useState(0)
  const maxIndex = images.length - 1

  useEffect(() => {
    let newIndex = index + 1
    const intId = setTimeout(() => {
      if (newIndex > maxIndex) {
        newIndex = 0
      }
      if (newIndex != index) {
        setIndex(newIndex)
      }
      //console.log(`tick : ${maxIndex} : ${index} : ${newIndex}`)
    }, 5000)
    return () => {
      clearInterval(intId)
    }
  }, [index])

  return (
    <>
      <img className="screenshot" src={images[index]} alt={altTags[0]} />
    </>
  )
}
