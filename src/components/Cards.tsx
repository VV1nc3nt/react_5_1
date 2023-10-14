import Card from "./Card";

export default function Cards() {

  const firstCard = {
    title: 'Test',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quas quidem qui totam aut tempore nihil similique porro aspernatur, voluptate asperiores nam, ipsam, dolorem ratione quae consequatur voluptas minima? Itaque.'
  }

  const secondCard = {
    title: 'Test',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quas quidem qui totam aut tempore nihil similique porro aspernatur, voluptate asperiores nam, ipsam, dolorem ratione quae consequatur voluptas minima? Itaque.'
  }

  return (
    <div className="cards">
      <Card { ...firstCard }>
        <img src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80" alt="" className="card-image" />
      </Card>
      <Card { ...secondCard } />
    </div>
  )
}
