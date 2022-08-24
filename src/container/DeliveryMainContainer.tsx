import { useQuery } from '@tanstack/react-query';
import client from 'apis/client';
import DeliveryInfomation from 'components/delivery/main/DeliveryInfomation';
import KakaoMap from 'components/delivery/main/KakaoMap';
import { deliveryList } from 'libs/utils/mock';
import { queryKeys } from 'libs/utils/queryKeys';
import userStorage from 'libs/utils/userStorage';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function DeliveryMainContainer() {
  const { id } = useParams();
  const [selectedOrder, setSelectedOrder] = useState(-1);

  // const getOrderList = async (id: any) => {
  //   const response = await client.get(`/orders/${id}`);
  //   return response.data;
  // };

  // const { data: deliveryList } = useQuery(
  //   [queryKeys.deliveryList],
  //   () => getOrderList(id),
  //   {
  //     cacheTime: 5 * 1000 * 60,
  //     staleTime: 5 * 1000 * 60,
  //   },
  // );

  // console.log(deliveryList);

  return (
    <>
      <KakaoMap
        deliveryList={deliveryList}
        setSelectedOrder={setSelectedOrder}
      />
      <DeliveryInfomation selectedOrder={selectedOrder} />
    </>
  );
}
export default DeliveryMainContainer;
