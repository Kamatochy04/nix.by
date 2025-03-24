"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

import styles from "./catalog.module.scss";
import img from "./testPhoto.png";
import { ProductCard } from "@/components/ProductCard";
import { WidthWrapper } from "@/components/WidthWrapper";

const testProductItem = [
  {
    title: "360 гемов быстро 💎💎💎",
    imgUrl: img,
    date: "13 марта 2025",
    owner: "ShadowFox",
    price: 1000,
    statusText: "Ожидает оплаты",
  },
  {
    title: "☑️170 ГЕМОВ BRAWL STARS на твой аккаунт☑️",
    imgUrl: img,
    date: "14 марта 2025",
    owner: "ShadowFox",
    price: 2000,
    statusText: "Доставлен",
  },
  {
    title: "360 гемов быстро 💎💎💎",
    imgUrl: img,
    date: "13 марта 2025",
    owner: "ShadowFox",
    price: 2100,
    statusText: "Отменен",
  },
  {
    title: "360 гемов быстро 💎💎💎",
    imgUrl: img,
    date: "13 марта 2025",
    owner: "ShadowFox",
    price: 300,
    statusText: "Отменен",
  },
  {
    title: "☑️170 ГЕМОВ BRAWL STARS на твой аккаунт☑️",
    imgUrl: img,
    date: "14 марта 2025",
    owner: "ShadowFox",
    price: 2000,
    statusText: "Доставлен",
  },
  {
    title: "360 гемов быстро 💎💎💎",
    imgUrl: img,
    date: "13 марта 2025",
    owner: "ShadowFox",
    price: 2100,
    statusText: "Отменен",
  },
];

export default function Catalog() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<"selling" | "purchases">(
    (searchParams.get("tab") as "selling" | "purchases") || "selling"
  );

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "selling" || tab === "purchases") {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const handleTabClick = (tab: "selling" | "purchases") => {
    setActiveTab(tab);
    router.push(`?tab=${tab}`);
  };

  const filteredItems = testProductItem.filter((item) => {
    if (activeTab === "selling") {
      return item.statusText === "Ожидает оплаты";
    } else if (activeTab === "purchases") {
      return item.statusText === "Доставлен" || item.statusText === "Отменен";
    }
    return true;
  });

  return (
    <WidthWrapper className={styles.root}>
      <h2 className={styles.title}>Мои товары</h2>

      <div className={styles.tabs}>
        <button
          className={`${styles.tabs__item} ${
            activeTab === "selling" ? styles.active : ""
          }`}
          onClick={() => handleTabClick("selling")}
        >
          Продаю
        </button>
        <button
          className={`${styles.tabs__item} ${
            activeTab === "purchases" ? styles.active : ""
          }`}
          onClick={() => handleTabClick("purchases")}
        >
          Мои покупки
        </button>
      </div>
      <div className={styles.wrapper}>
        {filteredItems.map((item, id) => (
          <ProductCard {...item} key={id} />
        ))}
      </div>
    </WidthWrapper>
  );
}
