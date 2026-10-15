type Props = {imageurl: string}

export default function FunkyGif({imageurl}: Props) {
    return(
        <div className='funkygif'>
            <img src={imageurl} />
        </div>
    )
}