export default interface Product {
  nameEN: string,
  nameDE?: string,
  nameRU?: string,
  id: string | number,
  groupId: string | number,
  inBasket: boolean
};
