import Layout from '../../components/Layout'
export default function ComicDetail(props) {
    return (
        <Layout>
            <h1>{props.comic.title}</h1>
            <img src ={props.comic.img} alt={props.comic.alt}></img>
        </Layout>
    )
}

export async function getServerSideProps(context){
    const num = context.query.id
    const url = `http://xkcd.com/${num}/info.0.json`
    const response = await fetch(url)
    const data = await response.json();
    // const data = response.json();
    return {
        props: {
            comic:data
        },
    }
}