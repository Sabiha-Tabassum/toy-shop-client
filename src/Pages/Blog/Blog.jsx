

const Blog = () => {
    return (
        <div className='max-w-4xl mx-auto mb-8'>
            <div className='text-center font-bold text-2xl '>
                <h1 className='mb-5 text-amber-400'>Question to Answer</h1>
            </div>
            <div className=''>
                <div className='border-2 mb-2 mr-2 bg-amber-50 border-amber-300'>
                    <h1 className='my-2 font-semibold ml-2'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                    <p className='ml-4 mb-2'>An access token and refresh token are commonly used in authentication and authorization systems. Here's an explanation of each and how they work: <br />
                        Access Token:
                        <br />
                        <br />
                        1. An access token is a credential that is used to authenticate and authorize a user to access protected resources on a server.
                        <br />
                        2. It is typically a string of characters that represents the user's identity and permissions.
                        <br />
                        3. Access tokens are short-lived and have an expiration time.</p>
                </div>

                <div className='border-2 mb-2 mr-2 bg-amber-50 border-amber-300'>
                    <h1 className='my-2 font-semibold ml-2'>Compare SQL and NoSQL databases?</h1>
                    <p className='ml-4 mb-2'>
                        SQL (Structured Query Language) and NoSQL (Not only SQL) are two different types of database management systems, each with its own characteristics. Here's a brief comparison:
                        <br />
                        <span className='font-semibold'>SQL Databases:</span>
                        <br />
                        <br />
                        1. Use structured query language (SQL) for data manipulation and querying.
                        <br />
                        2. Suitable for complex and structured data, with well-defined relationships between tables.
                        <br />
                        3. Provide strong consistency and support for complex joins and transactions.
                        <br />
                        <br />
                        <span className='font-semibold'> NoSQL Databases:</span>
                        <br />
                        <br />
                        1. Do not follow a fixed schema, allowing for dynamic and unstructured data.
                        <br />
                        2. Designed for distributed and scalable environments, with horizontal scaling capabilities.
                        <br />
                        3. Different types: document, key-value, columnar, and graph databases.

                    </p>
                </div>

                <div className='border-2 mb-2 mr-2 bg-amber-50 border-amber-300'>
                    <h1 className='my-2 font-semibold ml-2'>What is express js? What is Next JS ?</h1>
                    <p className='ml-4 mb-2'>
                        <span className='font-semibold'> Express.js:</span>
                        <br />
                        Express.js is a popular web application framework for Node.js. Express.js simplifies the process of handling HTTP requests, routing, middleware integration, and view rendering.
                        <br />
                        <span className='font-semibold'> Next.js:</span>
                        <br />
                        Nest.js, on the other hand, is a progressive and opinionated framework for building scalable and maintainable server-side applications.
                    </p>
                </div>
                <div className='border-2 mb-2 mr-2 bg-amber-50 border-amber-300'>
                    <h1 className='my-2 font-semibold ml-2'>What is MongoDB aggregate and how does it work ?</h1>
                    <p className='ml-4 mb-2'>
                        In MongoDB, the aggregate operation is used to perform advanced data processing and analysis on the collections. It allows you to perform computations, transformations, and aggregations on the data stored in the database.
                        <br />
                        <span className='font-semibold'>Here's how the aggregate operation works:</span>
                        <br />
                        <br />
                        1. Pipeline Stages: The aggregate operation takes an array of pipeline stages as input. Each stage represents a step in the data processing pipeline.
                        <br />
                        <br />
                        2. Data Transformation: Each stage in the pipeline performs a specific operation on the data, such as filtering, grouping, sorting, projecting, or performing mathematical calculations. The stages are applied in the order they appear in the pipeline.
                        <br />
                        <br />
                        3. Data Flow: The result of each stage becomes the input for the next stage in the pipeline, forming a data flow. This allows you to build complex computations and transformations by chaining multiple stages together.
                        <br />
                        <br />
                        4. Aggregation Framework: MongoDB's Aggregation Framework provides a rich set of operators and expressions to perform various data processing tasks. It includes operators like $match, $group, $sort, $project, $limit, and many more.
                        <br />
                        <br />
                        5. Result: The final stage in the pipeline produces the desired result, which can be a transformed dataset, computed values, or aggregated information based on the specified operations.
                        <br />
                        <br />
                        Overall, the aggregate operation in MongoDB enables  to leverage the aggregation framework to process and transform  data in a flexible and efficient manner, providing advanced data processing capabilities within the database itself.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Blog;