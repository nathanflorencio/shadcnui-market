import { Address } from '@/types/address'
import { Cart } from '@/types/cart'

export const generateMessage = (
  name: string,
  address: Address,
  cart: Cart[],
) => {
  const orderProducts = []

  for (const item of cart) {
    orderProducts.push(`${item.quantity}x ${item.product.name}`)
  }

  return `**Dados do cliente:**
Nome: ${name}
Endereço: ${address.street}, ${address.number} (${address.complement})
${address.district}, ${address.city}/${address.state}
------
**Pedido:**
${orderProducts.join('\n')}`
}
