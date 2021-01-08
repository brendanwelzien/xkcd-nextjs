import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home(props) {
    return (
        <Layout>
            <h1> XKCD</h1>
            <h2>{props.comic.title}</h2>
            <img src={props.comic.img} alt={props.comic.alt}/>
            <Footer comicNum={props.comic.num}/>
        </Layout>
    )
}

export async function getServerSideProps(context){
    const response = await fetch('http://xkcd.com/info.0.json');
    const data = await response.json();
    return {
        props: {
            comic:data
        }
    }
}
function Footer(props){
    const currentComic = props.comicNum;
    const comics = [];
    for (let n = currentComic; n > currentComic-10; n--){
        comics.push(n)
    }
    return (
        <footer>
            <h2> Previous {comics.length}</h2>
            <ul>
                {comics.map(num => (
                    <Link href="/num/[id].js" as={`/num/${num}`}>
                        <a> #{num}</a>
                    </Link>
                ))}
            </ul>
            <style jsx>
                {`
                  a {margin-right: 5px}
                `}
            </style>
        </footer>
    )
}