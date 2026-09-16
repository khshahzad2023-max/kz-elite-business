import type { SoldCar } from "./SoldCarCard";

export const soldCars: SoldCar[] = [
  {
    name: "Toyota Camry",
    year: "2014",
    images: ["/sold-toyota-camry-2014.jpg"],
    imageAlt: "Silver 2014 Toyota Camry sold by K&Z ELITE BUSINESS",
    details: ["Silver", "2.4L", "GCC Specification"],
    summary: "A clean, well-maintained Camry with a neat interior, excellent AC, strong engine and smooth gearbox.",
  },
  {
    name: "Nissan Versa Hatchback",
    year: "2011",
    images: ["/sold-nissan-versa-2011-side.jpg"],
    imageAlt: "Black 2011 Nissan Versa Hatchback sold by K&Z ELITE BUSINESS",
    details: ["Black", "Japan Made", "226,500 km"],
    summary: "A very good family car in clean condition, with registration valid for one year.",
  },
];
