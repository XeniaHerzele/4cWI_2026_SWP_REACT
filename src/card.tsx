type Props = {title: string, description: string, imageurl: string}

export default function Card({title, description, imageurl}: Props) {
    return(
        <div className='card'>
            <h2>{title}</h2>
            <img src={imageurl} alt={title} />
            <p>{description}  </p>
        </div>
    )
}
