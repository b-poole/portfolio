import './App.css'

function App() {
  return (
    <>
      <Header />
      <hr/>
      <p>Welcome to my portfolio website!</p>
    </>
  )
}

function Header() {
  return (
    <header>
      <SocialLinks />
      <Name />
      <ContactInfo />
    </header>
  )
}

function SocialLinks() {
  return (
    <div  className="social-links">
      <h3>Social Links</h3>
      <p><a href="https://www.linkedin.com/in/barrett-poole-630a3a145" rel="noopener noreferrer">LinkedIn</a></p>
      <p><a href="https://github.com/b-poole" target="_blank" rel="noopener noreferrer">GitHub</a></p>
    </div>
  )
}

function Name() {
  return (
    <div className="name">
      <h1>Barrett Poole</h1>
    </div>)
}

function ContactInfo() {
  return (
    <div className="contact-info">
      <h3>Contact Info</h3>
      <p>Email: barrettpoole14@gmail.com</p>
      <p>Phone: (510) 589-9484</p>
    </div>
  )
}

export default App
