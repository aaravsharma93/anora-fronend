import axios from 'axios';

export const getAddressName = async (address) => {
  const dataInfo = await axios.get(
    '/admin/smart_money_management/address/' + address
  );
  return dataInfo.data[0].name || 'Test';
};
