export default function Form() {
  return (
    <form className="form">
      <fieldset className="top-text-container">
        <label htmlFor="top-text" className="top-text-label">Top Text</label>
        <input id="top-text" type="text" />
      </fieldset>
      <fieldset className="bottom-text-container">
        <label htmlFor="bottom-text" className="bottom-text-label">Bottom Text</label>
        <input id="bottom-text" type="text" />
      </fieldset>
    </form>
  )
}