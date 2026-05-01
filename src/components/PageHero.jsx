export default function PageHero({ bgImage, breadcrumb, title, subtitle }) {
  return (
    <div className="phero">
      <div
        className="phero-bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="phero-ov" />
      <div className="phero-cnt">
        <div className="pbc">
          Home › <span>{breadcrumb}</span>
        </div>
        <div className="pht">{title}</div>
        <div className="phs">{subtitle}</div>
      </div>
    </div>
  );
}
