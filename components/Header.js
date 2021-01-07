import Link from 'next/Link'
export default () => (
    <nav>
        <Link href= '/'>
            <a> Home Page</a>
        </Link>
        <Link href='/about'>
            <a>About Page</a>
        </Link>
        <style jsx>{`
        a{
            margin-right:10px;
            color: orange;
            }
        `}
        </style>
    </nav>
)