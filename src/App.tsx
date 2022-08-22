//  Query https://datausa.io/api/data?drilldowns=State&measures=Population&year=2019 using React Query
// it has to be displayed in 5 columns of cards
import { useQuery } from 'react-query';

export default function App() {

  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest').then(res => res.json()
    )
  )

  return (isLoading ? <p>Loading...</p> : error ? <p>Error</p> : <div className='bg-gray-300 columns-1 min-h-screen' >
    <h1 className='h-16 not-italic font-bold text-5xl text-teal-500 ml-20 mt-10 mb-10'>Population of the States</h1>

    <div className=" grid grid-cols-5">



      {data.data.slice(0, 12).map(({ State, Year, Population }: { State: string, Year: number, Population: number }) => {
        console.log(Year); return <div className='block p-6 rounded-lg shadow-lg bg-white max-w-sm flex  m-6'>
          <div className='columns-1 min-w-full'>
            <div className='font-bold'>{State}</div><hr></hr>
            <div className='font-bold text-gray-600'>Population: {Math.round(Population / 100000) / 10}M</div><hr className='justify-center'></hr><div className='font-bold text-gray-600'>Year: {Year}</div>
          </div></div>
      })}


    </div></div>
  );
}

