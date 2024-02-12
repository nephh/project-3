import { Link } from 'react-router-dom';

export default function EndeavorsList(endeavors) {
  return (
    <div>  
      {endeavors.map((endeavor, index) => (
        <div key={index} className="mt-6">
        <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-between"><span className="font-light text-gray-600">Jun 1,
                    2020</span>
            </div>
            <div className="mt-2">
              <Link  to={`/endeavours/${endeavor.id}`}
                className="text-2xl font-bold text-gray-700 hover:underline">
                  {endeavor.title}
              </Link>
                <p className="mt-2 text-gray-600">{endeavor.content}</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <Link  to={`/endeavours/${endeavor.id}`}
                className="text-blue-500 hover:underline">
                  Read More
              </Link>
                <div>
                <Link  to={`/endeavours/${endeavor.id}`}
                  className="flex items-center">
                  <p className="font-bold text-gray-700 hover:underline">{endeavor.author}</p>
              </Link>
                </div>
            </div>
          </div>
        </div>
      ))}
    </div>  
  )
}