'use client'
import { add, decrese } from "@/app/_store/slices/itemSlices";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  priceCents: number;
  image: string;
}

export function MenuCard({
  item,
//   quantity,
//   onAdd,
//   onIncrease,
//   onDecrease,
}: {
  item: MenuItem;
//   quantity: number;
//   onAdd: (id: number) => void;
//   onIncrease: (id: number) => void;
//   onDecrease: (id: number) => void;
}) {
    const itemSliceVal = useSelector(state => state.item)
    const dispatch = useDispatch()
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md">
      <div className="relative h-48 bg-gray-200">
        {/* i have to change the background stretch */}
        <Image src={item.image} alt={item.name} fill  className="content-center"/>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold">{item.name}</h2>
        <p className="mb- whitespace-nowrap text-sm text-gray-600">
          {item.description}
        </p>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-lg font-bold text-green-600">
            {item.priceCents}
          </span>
        </div>

        {quantity === 0 ? (
          <button
            onClick={() => dispatch(add(item.id))}
            className="rounded bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
          >
            Add
          </button>
        ) : (
          <div className="flex items-center justify-between">
            <button
              onClick={() => dispatch(decrese(item.id))}
              className="flex h-10 w-10 items-center justify-center rounded bg-red-500 text-white transition hover:bg-red-600"
            >
              -
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              onClick={() => dispatch(add(item.id))}
              className="flex h-10 w-10 items-center justify-center rounded bg-green-500 text-white transition hover:bg-green-600"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
