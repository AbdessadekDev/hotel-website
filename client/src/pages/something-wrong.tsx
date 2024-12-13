import { CiWarning } from "react-icons/ci"
const SomethingWrong = () => {
  return (
    <div className="h-[100vh] text-gray-900 bg-gray-100 dark:bg-gray-900 dark:text-gray-100 flex items-center justify-center">
        <div className="flex items-center text-3xl gap-3">
            <CiWarning  className="text-yellow-300 text-4xl"/>
            <p>Something went wrong !</p>
        </div>
    </div>
  )
}

export default SomethingWrong