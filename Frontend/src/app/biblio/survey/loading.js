const Loading = () => {
  return (
    <section className="relative flex h-screen items-center justify-center">
    <div className="mt-10 w-[25rem] h-[30rem] rounded-md px-8 py-12 shadow-lg">
      {/* tooltip */}
      <div className="group relative flex justify-end">
      </div>
      {/* questions */}
      <div className="space-y-1">
        <div className="active-question-no w-8 h-8 rounded-2xl bg-gray-400 animate-pulse">
        </div>
        <div className="total-question w-80 h-6 rounded-lg bg-gray-300 animate-pulse">
        </div>
        <div className="total-question w-72 h-6 rounded-lg bg-gray-300 animate-pulse">
        </div>
      </div>
      <ul className="mt-16 space-y-4">
        
          <li className="bg-gray-400 animate-pulse h-8 rounded-lg"></li>
          <li className="bg-gray-300 animate-pulse h-8 rounded-lg"></li>
          <li className="bg-gray-400 animate-pulse h-8 rounded-lg"></li>
          <li className="bg-gray-300 animate-pulse h-8 rounded-lg"></li>
      </ul>
      <div className="float-right mt-8">
        
          <button className="w-16 h-8 bg-gray-500 rounded-lg animate-pulse"/>
      </div>
    </div>
    </section>
  )
}

export default Loading