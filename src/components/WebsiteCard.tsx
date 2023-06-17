import ImageCarousel from "./ImageCarousel"

type WebsiteProps = {
  name: string
  url: string
  description: string
  images: string[]
  altTags: string[]
  developedWith: string
}

export default function WebsiteCard(props: WebsiteProps) {
  return (
    <div className="ws-card">
      <div className="ws-card-description">
        <h3>
          <a href={props.url}>{props.name}</a>
        </h3>

        <p>{props.description}</p>
      </div>
      <div className="ws-image-container">
        <a href={props.url}>
          <ImageCarousel images={props.images} altTags={props.altTags} />
        </a>
      </div>
      <div className="ws-card-devtools">
        <p>
          <b>Developed with:</b>
          <br />
          {props.developedWith}
        </p>
      </div>
    </div>
  )
}
