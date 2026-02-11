const Section = ({ id, title, children }) => {
  return (
    <section id={id} className="section">
      <h3 className="section-title">{title}</h3>
      {children}
    </section>
  )
}

export default Section
