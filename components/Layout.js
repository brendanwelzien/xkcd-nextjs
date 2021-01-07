import Header from './Header'
export default props => (
    <div>
        <Header />
        {props.children}
        <style jsx>{`
        margin: 15px;
        padding: 15px;
        border: 1px solid #7FFFD4;
        background-color: #FFF8DC;
        `}
        </style>
    </div>
)