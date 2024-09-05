function LanguagetagTag(props: { type: number }) {
  const { type } = props

  const languageTagMap = { 0: 'C/C++', 1: 'Java' }
  console.log(type === 1, languageTagMap[1])
  const baseClasses =
    'w-[50px] h-[20px]  flex items-center text-xs font-normal leading-5 text-white shadow-md rounded-md cursor-default justify-center '

  return (
    <span
      className={`${baseClasses} ${type === 1 ? 'bg-skin-error-500' : type === 0 ? 'bg-skin-primary-500' : ''}`}
    >
      <span>{languageTagMap[type as keyof typeof languageTagMap]}</span>
    </span>
  )
}

export default LanguagetagTag
