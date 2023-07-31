import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const { error, status } = useRouteError()

    return (
        <div className=''>
            <div className='text-center'>
                <div className='w-96 mx-auto mt-8'>
                    <img src="https://i.ibb.co/NFVR8cd/errorpage.jpg" alt="errorpage" />
                </div>
                <h1 className=' text-xl font-bold'>
                    <p>Error</p>
                    {status || 404}
                </h1>
                <p className='text-2xl'>{error?.message}</p>
                <div className='my-4'>
                    <button className="btn btn-outline bg-amber-200">
                        <Link to="/">Back to Home Page</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;