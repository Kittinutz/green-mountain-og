import db from '@/utils/mongo'
export const getProduct = async () => {
  const product = db.collection('products').find().toArray();
  return product
}