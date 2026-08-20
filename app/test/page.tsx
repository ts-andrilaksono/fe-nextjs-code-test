"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  priceCents: number;
  image: string;
}

export default function TestPage() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [quantities, setQuantities] = useState<Record<number, number>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenuItems(data);
        setLoading(false);
      });
  }, []);

  const handleAdd = (id: number) => {
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleIncrease = (id: number) => {
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleDecrease = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) - 1),
    }));
  };

  const totalItems = Object.values(quantities).reduce((a, b) => a + b, 0);

  const calculateTotalPrice = () => {
    let warmup = 0;
    let finalAmount=menuItems.reduce((acc, item) => {
      const qty = quantities[item.id] || 0;
      return acc + item.priceCents * qty;
    }, warmup)
    return finalAmount/100;
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6">
          <h1 className="mb-4 text-3xl font-bold">Restaurant Menu</h1>

          <section
            aria-label="Assignment hints"
            className="mb-6 rounded-xl border border-amber-300 bg-amber-50 p-5 shadow-sm"
          >
            <h2 className="mb-3 text-base font-semibold text-amber-900">
              Hints — please read before you start
            </h2>
            <p className="mb-4 text-sm text-amber-900">
              The bugs on this page are grouped into <strong>3 levels</strong>.
              We give you direct hints for Level 1 only — Level 2 and Level 3
              you have to find yourself.
            </p>

            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold text-amber-900">
                  Level 1 — Obvious bugs (hints below)
                </p>
                <ul className="mt-1 list-disc space-y-1 pl-6 text-amber-900">
                  <li>
                    Open the <strong>Network tab</strong> — whats going on here?
                  </li>
                  <li>
                    There are some unecessary function which doing the same thing.
                  </li>
                  <li>
                    Take a look at the <strong>browser console</strong> — Next.js
                    might be telling you something.
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-amber-900">
                  Level 2 — Visual / styling issues
                </p>
                <p className="mt-1 text-amber-900">
                  There are a few CSS problems on this page. We won't tell you
                  which ones — use Inspect Element and trust your eyes.
                </p>
              </div>

              <div>
                <p className="font-semibold text-amber-900">
                  Level 3 — Product polish
                </p>
                <p className="mt-1 text-amber-900">
                  Pretend you're a real diner using this app. What would make
                  it feel like a finished product instead of a prototype? You
                  decide what's worth fixing or adding/improving — surprise us.
                </p>
              </div>
            </div>
          </section>

          <div className="flex gap-6 text-sm">
            <p className="text-gray-700">
              Items in cart: <span className="font-semibold">{totalItems}</span>
            </p>
            <p className="text-gray-700">
              Total: <span className="font-semibold">{calculateTotalPrice()}</span>
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
              quantity={quantities[item.id] || 0}
              onAdd={handleAdd}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function MenuCard({
  item,
  quantity,
  onAdd,
  onIncrease,
  onDecrease,
}: {
  item: MenuItem;
  quantity: number;
  onAdd: (id: number) => void;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
}) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md">
      <div className="relative h-48 bg-gray-200">
        <Image src={item.image} alt={item.name} fill />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold">{item.name}</h2>
        <p className="mb- whitespace-wrap text-sm text-gray-600">
          {item.description}
        </p>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-lg font-bold text-green-600">
            $ {item.priceCents/100}
          </span>
        </div>

        {quantity === 0 ? (
          <button
            onClick={() => onAdd(item.id)}
            className="rounded bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
          >
            Add
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <button
              onClick={() => onDecrease(item.id)}
              className="flex h-10 w-10 items-center justify-center rounded bg-red-500 text-white transition hover:bg-red-600"
            >
              -
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              onClick={() => onIncrease(item.id)}
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
