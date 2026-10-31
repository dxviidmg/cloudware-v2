export const packageGroups = [
  {
    id: "fibra",
    label: "Fibra óptica",
    description: "Máxima velocidad y estabilidad con fibra directa a tu hogar",
    plans: [
      { name: "Básico", speed: 40, price: 250 },
      { name: "Esencial", speed: 60, price: 300 },
      { name: "Élite", speed: 200, price: 400, popular: true },
      { name: "Premium", speed: 400, price: 550 },
      { name: "Ultra", speed: 600, price: 700 },
    ],
  },
  {
    id: "inalambrico",
    label: "Inalámbrico",
    description: "Cobertura amplia con tecnología inalámbrica de última generación",
    plans: [
      { name: "Básico", speed: 10, price: 250 },
      { name: "Intermedio", speed: 15, price: 300, popular: true },
      { name: "Avanzado", speed: 20, price: 350 },
      { name: "Premium", speed: 25, price: 400 },
    ],
  },
];
