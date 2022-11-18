import Custom404 from "./404"
import Custom500 from "./500"

function Error({ statusCode }) {

    if (statusCode === 404){
        return <Custom404 />
    }

    if (statusCode === 500){
        return <Custom500 />
    }

    return (
        <p>
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : 'An error occurred on client'}
        </p>
      )
  }
  
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
  
  export default Error