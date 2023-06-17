import WebsiteCard from "./components/WebsiteCard"

const websites = [
  {
    id: 4,
    name: "Strength",
    url: "https://strength.wholesoft.net",
    description: "A simple app to track weight lifting workouts.",
    images: ["images/strength.png"],
    altTags: ["Wholesoft Strength"],
    developedWith: "next.js, typescript, mysql, nextauth, sendgrid email, pm2.",
  },
  {
    id: 1,
    name: "Stuff",
    url: "https://stuff.wholesoft.net",
    description: "A simple inventory app to group and track items.",
    images: ["images/stuff1.png", "images/stuff2.png"],
    altTags: ["Wholesoft Stuff"],
    developedWith:
      "node.js, react, react-query, mysql, jwt authentication, sendgrid email, pm2, AWS EC2.",
  },
  {
    id: 2,
    name: "Notes",
    url: "https://notes.wholesoft.net",
    description: "An app for a daily journal with various quirky features.",
    images: ["images/notes.png"],
    altTags: ["Wholesoft Notes"],
    developedWith:
      "node.js, react, react-query, mysql, jwt authentication, sendgrid email,  pm2, AWS EC2.",
  },
  {
    id: 3,
    name: "API-Tester",
    url: "https://api-tester.wholesoft.net",
    description: "Testing various quirky API's found on the internet.",
    images: [
      "images/api-test1.png",
      "images/api-test2.png",
      "images/api-test3.png",
    ],
    altTags: ["Wholesoft API-Tester"],
    developedWith: "node.js, react, typescript, pm2, AWS.",
  },
]

function App() {
  return (
    <>
      <div className="header">
        <div style={{ display: "flex" }}>
          <div className="" style={{ width: "50px" }}>
            <a href="/">
              <img className="logo" src="/wholesoft.svg" />
            </a>
          </div>
          <div className="" style={{ width: "170px" }}>
            <a href="/">
              <h1 className="title text-xl">Wholesoft</h1>
            </a>
          </div>
        </div>
      </div>

      <div className="ws-container">
        {websites.map((ws) => {
          return (
            <div key={ws.id}>
              <WebsiteCard
                name={ws.name}
                url={ws.url}
                description={ws.description}
                images={ws.images}
                altTags={ws.altTags}
                developedWith={ws.developedWith}
              />
            </div>
          )
        })}
        <div>{/* <WebsiteCard /> */}</div>
      </div>
    </>
  )
}

export default App
