import prismaClient from "../../prisma";

interface OrderRequest{
    id_pedido: string;
}

class FinishOrderService{


    async execute({id_pedido}: OrderRequest){

        const pedido = await prismaClient.pedido.findFirst({
            where:{
                id: id_pedido,
                
            }
            
        })
        if (!pedido){
            return("Pedido não encontrado.")
        }
        const order = await prismaClient.item.findMany({
            where:{
                id_pedido: id_pedido,
                
            },
            select:{
                id: true,
                quantidade: true,
                produto:{
                    select:{
                        nome: true,
                        preco: true,
                    },
                },
            },
            
        });

        
        let conta = 0;
        let orders;
        if (order.length > 0) {
  for (orders of order) {
     conta = conta + (orders.quantidade * Number(orders.produto.preco));
  }
          } else {
            return("Item não encontrado.")
          }
          return{
            itensDoPedido: order,
            valorDaConta: conta,
          }
    }
}
export {FinishOrderService}