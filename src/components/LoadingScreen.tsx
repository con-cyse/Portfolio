const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[var(--color-sea-white)] border-t-[var(--color-atlantic)]" />
        <p className="text-sm font-semibold text-[var(--color-deep-teal)]">
          Loading...
        </p>
      </div>
    </div>
  )
}

export default LoadingScreen
