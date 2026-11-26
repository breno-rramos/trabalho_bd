// 45 -> "R$ 45,00"
export const reais = (valor: number | string): string =>
  Number(valor).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
