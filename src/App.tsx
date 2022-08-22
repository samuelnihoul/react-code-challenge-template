//  Query https://datausa.io/api/data?drilldowns=State&measures=Population&year=2019 using React Query
// it has to be displayed in 5 columns of cards
import { useQuery } from 'react-query';
export default function App() {

  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest').then(res => res.json()
    )
  )

  return (isLoading ? <p>Loading...</p> : error ? <p>Error</p> :
    <><h1 className=''>Population of the States</h1>

      <div className="bg-basic-blue flex justify-center items-center min-h-screen grid grid-cols-5">



        {data.data.slice(0, 12).map(({ State, Year, Population }: { State: string, Year: number, Population: number }) => {
          console.log(Year); return <div className='block p-6 rounded-lg shadow-lg bg-white max-w-sm flex columns-1'>

            <span>{State}</span><hr></hr><span>{Year.toString()}</span><hr></hr><span>{Population.toString()}</span>
          </div>
        })}


      </div></>
  );
}

