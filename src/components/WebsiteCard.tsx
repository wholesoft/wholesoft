type WebsiteProps = {
  name: string
  url: string
  description: string
  image: string
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
          <img className="screenshot" src={props.image} alt={props.name} />
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
