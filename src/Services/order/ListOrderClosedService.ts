import prismaClient from "../../prisma";

interface OrderRequest{
    date: string;
}

class ListOrderClosedService{
    async execute({date}: OrderRequest){

const novaData = new Date(date);
const novaDataMaisUm = new Date(date)
novaDataMaisUm.setDate(novaData.getDate()+1);

        const pedidosFinalizadosHoje = await prismaClient.pedido.findMany({
          where:{
            status: true, 
            atualizado_em: {
              gte: novaData,
              lt: novaDataMaisUm
            }
          }

          });

          return pedidosFinalizadosHoje;
    }
}

export {ListOrderClosedService}