import { GeneratedImageProps } from "@/interfaces";

const ImageCard: React.FC<GeneratedImageProps> = ({ imageUrl, prompt, width, action }) => {
  return (
    <div onClick={() => action(imageUrl)} className="mt-6 border hover:cursor-pointer">
      <img src={imageUrl} alt={prompt} className={`w-full max-w-md rounded-lg shadow-lg`} />
      <h2 className={`${width ? 'text-sm' : 'text-xl'} font-semibold mt-2`}>Your Prompt:</h2>
      <p className={`${width ? 'text-xs' : 'text-lg'} text-gray-700 mb-4`}>{prompt}</p>
    </div>
  )
}

export default ImageCard;