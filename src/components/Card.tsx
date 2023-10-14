interface Props {
  children?: React.ReactNode;
  title: string;
  description: string;
}

export default function Card(props: Props) {
  return (
    <div className="card-body">
      { props.children }
      <h3 className="card-title">{ props.title }</h3>
      <p className="card-desc">{ props.description }</p>
      <button className="catd-btn">Test</button>
    </div>
  )
}
