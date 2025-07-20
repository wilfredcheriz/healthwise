import Image from 'next/image'

export default function ProductCard({ title, price, image, description }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col">
      <div className="relative w-full h-48 rounded-md overflow-hidden mb-4">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded"
        />
      </div>

      <h3 className="text-lg font-semibold text-primary mb-1">{title}</h3>
      <p className="text-sm text-gray-600 mb-2">
        {description.length > 100 ? `${description.slice(0, 100)}...` : description}
      </p>

      <div className="mt-auto flex justify-between items-center">
        <span className="text-lg font-bold text-accent">KES {price}</span>
        <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark text-sm">
          Book Now
        </button>
      </div>
    </div>
  )
}
