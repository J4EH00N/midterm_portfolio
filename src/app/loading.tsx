import Loader from '../app/components/Loader'

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/50 backdrop-blur-sm z-50">
      <Loader />
    </div>
  )
}
