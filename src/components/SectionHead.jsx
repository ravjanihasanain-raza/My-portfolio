export default function SectionHead({ id, kicker, title, children }) {
  return (
    <div className="section__head">
      <p className="kicker">{kicker}</p>
      <h2 className="section__title" id={`${id}-title`}>{title}</h2>
      {children && <p className="section__sub">{children}</p>}
    </div>
  );
}
